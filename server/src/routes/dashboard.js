import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';
import { levelForXp } from '../services/gamification.js';

export const router = Router();
router.use(requireAuth);

function loadChaptersWithPerformance(userId, perfRows) {
  const chapters = db
    .prepare(
      `SELECT ch.id, ch.name, ch.number, t.number as title_number, t.name as title_name
       FROM chapters ch
       JOIN titles t ON t.id = ch.title_id
       ORDER BY t.order_index, ch.order_index`
    )
    .all();
  const perfMap = new Map(perfRows.map((r) => [r.chapter_id, r]));
  return chapters.map((c) => {
    const p = perfMap.get(c.id);
    const correctCount = p?.correct_count ?? 0;
    const wrongCount = p?.wrong_count ?? 0;
    const total = correctCount + wrongCount;
    const percent = total > 0 ? Math.round((correctCount / total) * 100) : null;
    return { ...c, correct_count: correctCount, wrong_count: wrongCount, total_answered: total, percent };
  });
}

router.get('/summary', async (req, res, next) => {
  try {
    const user = req.user;
    const { rows: totalsRows } = await pgPool.query(
      'SELECT COUNT(*)::int n, COALESCE(SUM(is_correct),0)::int c FROM user_answers WHERE user_id = $1',
      [user.id]
    );
    const totals = totalsRows[0];
    const answered = totals.n ?? 0;
    const correct = totals.c ?? 0;

    const { rows: streakRows } = await pgPool.query('SELECT * FROM study_streaks WHERE user_id = $1', [user.id]);
    const streak = streakRows[0];

    const { rows: timeRows } = await pgPool.query(
      'SELECT COALESCE(SUM(time_spent_seconds),0)::int s FROM user_answers WHERE user_id = $1',
      [user.id]
    );
    const timeSpent = timeRows[0].s;

    const { rows: perfRows } = await pgPool.query(
      'SELECT chapter_id, correct_count, wrong_count FROM user_chapter_performance WHERE user_id = $1',
      [user.id]
    );
    const chapterPerf = loadChaptersWithPerformance(user.id, perfRows);

    res.json({
      progress_percent: answered > 0 ? Math.round((correct / answered) * 100) : 0,
      questions_answered: answered,
      correct,
      wrong: answered - correct,
      streak_days: streak?.current_streak ?? 0,
      time_studied_seconds: timeSpent,
      level_info: levelForXp(user.xp),
      xp: user.xp,
      chapter_performance: chapterPerf,
    });
  } catch (err) {
    next(err);
  }
});

router.get('/weekly-evolution', async (req, res, next) => {
  try {
    const user = req.user;
    const { rows } = await pgPool.query(
      `SELECT to_char(answered_at, 'YYYY-MM-DD') as day, COUNT(*)::int n, COALESCE(SUM(is_correct),0)::int c
       FROM user_answers WHERE user_id = $1 AND answered_at >= NOW() - INTERVAL '6 days'
       GROUP BY day ORDER BY day`,
      [user.id]
    );
    res.json(rows.map((r) => ({ day: r.day, answered: r.n, correct: r.c, accuracy: Math.round((r.c / r.n) * 100) })));
  } catch (err) {
    next(err);
  }
});

router.get('/knowledge-map', async (req, res, next) => {
  try {
    const user = req.user;
    const { rows: perfRows } = await pgPool.query(
      'SELECT chapter_id, correct_count, wrong_count FROM user_chapter_performance WHERE user_id = $1',
      [user.id]
    );
    const rows = loadChaptersWithPerformance(user.id, perfRows).map((c) => {
      let status = 'nao_iniciado';
      if (c.percent != null) {
        if (c.percent >= 80) status = 'dominado';
        else if (c.percent >= 60) status = 'atencao';
        else status = 'critico';
      }
      return { ...c, status };
    });
    res.json(rows);
  } catch (err) {
    next(err);
  }
});
