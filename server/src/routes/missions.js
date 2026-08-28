import { Router } from 'express';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';

export const router = Router();

function today() {
  return new Date().toISOString().slice(0, 10);
}

async function ensureMission(userId) {
  const d = today();
  const { rows } = await pgPool.query('SELECT * FROM daily_missions WHERE user_id = $1 AND date = $2', [userId, d]);
  if (rows[0]) return rows[0];
  const { rows: inserted } = await pgPool.query(
    'INSERT INTO daily_missions (user_id, date) VALUES ($1, $2) RETURNING *',
    [userId, d]
  );
  return inserted[0];
}

export async function bumpDailyMission(userId, { questions = 0, review = 0, criticalTopics = 0 }) {
  const m = await ensureMission(userId);
  await pgPool.query(
    'UPDATE daily_missions SET done_questions = done_questions + $1, done_review = done_review + $2, done_critical_topics = done_critical_topics + $3 WHERE id = $4',
    [questions, review, criticalTopics, m.id]
  );
}

router.get('/today', requireAuth, async (req, res, next) => {
  try {
    res.json(await ensureMission(req.user.id));
  } catch (err) {
    next(err);
  }
});
