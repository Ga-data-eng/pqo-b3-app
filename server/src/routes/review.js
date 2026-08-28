import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';

export const router = Router();
router.use(requireAuth);

router.get('/today', async (req, res, next) => {
  try {
    const user = req.user;
    const { rows } = await pgPool.query(
      `SELECT * FROM review_queue WHERE user_id = $1
       ORDER BY CASE priority WHEN 'alta' THEN 0 WHEN 'media' THEN 1 ELSE 2 END, wrong_count DESC`,
      [user.id]
    );
    const enriched = rows.map((r) => {
      const q = db.prepare('SELECT statement, difficulty, chapter_id FROM questions WHERE id = ?').get(r.question_id);
      const chapterName = q ? db.prepare('SELECT name FROM chapters WHERE id = ?').get(q.chapter_id)?.name : null;
      return { ...r, statement: q?.statement, difficulty: q?.difficulty, chapter_id: q?.chapter_id, chapter_name: chapterName };
    });

    res.json({
      alta: enriched.filter((r) => r.priority === 'alta'),
      media: enriched.filter((r) => r.priority === 'media'),
      dominado: enriched.filter((r) => r.priority === 'dominado'),
    });
  } catch (err) {
    next(err);
  }
});

router.get('/plan', async (req, res, next) => {
  try {
    const user = req.user;
    // Plano automático: agrupa questões de revisão de alta/média prioridade por capítulo.
    const { rows } = await pgPool.query(
      `SELECT question_id, priority FROM review_queue WHERE user_id = $1 AND priority != 'dominado'`,
      [user.id]
    );

    const grouped = new Map();
    for (const r of rows) {
      const q = db.prepare('SELECT chapter_id FROM questions WHERE id = ?').get(r.question_id);
      const chapterName = q ? db.prepare('SELECT name FROM chapters WHERE id = ?').get(q.chapter_id)?.name : 'Outros';
      const key = `${chapterName}|${r.priority}`;
      grouped.set(key, (grouped.get(key) ?? 0) + 1);
    }

    const plan = [...grouped.entries()]
      .map(([key, n]) => {
        const [chapter, priority] = key.split('|');
        return { chapter, priority, question_count: Math.min(n, 15), _n: n };
      })
      .sort((a, b) => (a.priority === 'alta' ? 0 : 1) - (b.priority === 'alta' ? 0 : 1) || b._n - a._n)
      .map(({ _n, ...rest }) => rest);

    res.json({ plan });
  } catch (err) {
    next(err);
  }
});
