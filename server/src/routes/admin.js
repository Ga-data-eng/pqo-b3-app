import { Router } from 'express';
import { db } from '../db/index.js';

export const router = Router();

router.get('/questions', (req, res) => {
  const { chapter_id, difficulty, status, missing_source, q } = req.query;
  const limit = Math.min(Number(req.query.limit) || 25, 100);
  const offset = Math.max(Number(req.query.offset) || 0, 0);
  const clauses = [];
  const params = [];
  if (chapter_id) {
    clauses.push('chapter_id = ?');
    params.push(chapter_id);
  }
  if (difficulty) {
    clauses.push('difficulty = ?');
    params.push(difficulty);
  }
  if (status) {
    clauses.push('status = ?');
    params.push(status);
  }
  if (missing_source === 'true') {
    clauses.push("(source_page IS NULL OR source_page = '')");
  }
  if (q) {
    clauses.push('statement LIKE ?');
    params.push(`%${q}%`);
  }
  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  const total = db.prepare(`SELECT COUNT(*) n FROM questions ${where}`).get(...params).n;
  const items = db
    .prepare(`SELECT * FROM questions ${where} ORDER BY id DESC LIMIT ? OFFSET ?`)
    .all(...params, limit, offset);
  res.json({ items, total, limit, offset });
});

router.get('/questions/duplicates', (req, res) => {
  const rows = db
    .prepare(
      `SELECT statement, COUNT(*) n, GROUP_CONCAT(id) ids FROM questions GROUP BY statement HAVING COUNT(*) > 1`
    )
    .all();
  res.json(rows);
});

router.put('/questions/:id', (req, res) => {
  const fields = req.body;
  const allowed = [
    'statement', 'option_a', 'option_b', 'option_c', 'option_d', 'option_e', 'correct_option',
    'explanation', 'explanation_a', 'explanation_b', 'explanation_c', 'explanation_d', 'explanation_e',
    'exam_tip', 'common_trap', 'difficulty', 'status', 'source_page', 'source_section', 'subtopic',
  ];
  const sets = [];
  const params = [];
  for (const key of allowed) {
    if (key in fields) {
      sets.push(`${key} = ?`);
      params.push(fields[key]);
    }
  }
  if (sets.length === 0) return res.status(400).json({ error: 'Nada para atualizar' });
  params.push(req.params.id);
  db.prepare(`UPDATE questions SET ${sets.join(', ')} WHERE id = ?`).run(...params);
  res.json(db.prepare('SELECT * FROM questions WHERE id = ?').get(req.params.id));
});

router.delete('/questions/:id', (req, res) => {
  db.prepare('DELETE FROM question_certifications WHERE question_id = ?').run(req.params.id);
  db.prepare('DELETE FROM questions WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

router.get('/stats', (req, res) => {
  const byChapter = db
    .prepare(
      `SELECT ch.name, ch.id, COUNT(q.id) n FROM chapters ch LEFT JOIN questions q ON q.chapter_id = ch.id GROUP BY ch.id ORDER BY ch.id`
    )
    .all();
  const byDifficulty = db.prepare('SELECT difficulty, COUNT(*) n FROM questions GROUP BY difficulty').all();
  const byStatus = db.prepare('SELECT status, COUNT(*) n FROM questions GROUP BY status').all();
  res.json({ byChapter, byDifficulty, byStatus, total: db.prepare('SELECT COUNT(*) n FROM questions').get().n });
});
