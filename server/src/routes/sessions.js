import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';
import { xpForAnswer, awardXp, touchStreak, checkAchievements } from '../services/gamification.js';
import { recordAnswer, updateTopicPerformance, updateChapterPerformance } from '../services/adaptive.js';
import { bumpDailyMission } from './missions.js';

export const router = Router();
router.use(requireAuth);

router.post('/', async (req, res, next) => {
  try {
    const user = req.user;
    const { mode } = req.body;
    const { rows } = await pgPool.query(
      'INSERT INTO study_sessions (user_id, mode) VALUES ($1, $2) RETURNING id',
      [user.id, mode ?? 'treino_rapido']
    );
    res.json({ id: rows[0].id, mode: mode ?? 'treino_rapido' });
  } catch (err) {
    next(err);
  }
});

router.post('/:id/answer', async (req, res, next) => {
  try {
    const user = req.user;
    const sessionId = req.params.id;
    const { question_id, selected_option, time_spent_seconds } = req.body;

    const question = db.prepare('SELECT * FROM questions WHERE id = ?').get(question_id);
    if (!question) return res.status(404).json({ error: 'Questão não encontrada' });

    const isCorrect = selected_option === question.correct_option ? 1 : 0;

    await pgPool.query(
      'INSERT INTO user_answers (user_id, question_id, session_id, selected_option, is_correct, time_spent_seconds) VALUES ($1, $2, $3, $4, $5, $6)',
      [user.id, question_id, sessionId, selected_option, isCorrect, time_spent_seconds ?? null]
    );

    await pgPool.query(
      'UPDATE study_sessions SET total_questions = total_questions + 1, correct_answers = correct_answers + $1 WHERE id = $2',
      [isCorrect, sessionId]
    );

    await updateTopicPerformance(user.id, question.topic_id, !!isCorrect, time_spent_seconds);
    await updateChapterPerformance(user.id, question.chapter_id, !!isCorrect);
    await recordAnswer(user.id, question_id, !!isCorrect);
    await touchStreak(user.id);
    await bumpDailyMission(user.id, { questions: 1 });

    const xp = xpForAnswer({ isCorrect: !!isCorrect, difficulty: question.difficulty });
    await awardXp(user.id, xp);
    const newAchievements = await checkAchievements(user.id);

    res.json({
      is_correct: !!isCorrect,
      correct_option: question.correct_option,
      xp_earned: xp,
      new_achievements: newAchievements,
    });
  } catch (err) {
    next(err);
  }
});

router.post('/:id/finish', async (req, res, next) => {
  try {
    await pgPool.query('UPDATE study_sessions SET finished_at = NOW() WHERE id = $1', [req.params.id]);
    const { rows } = await pgPool.query('SELECT * FROM study_sessions WHERE id = $1', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});
