import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';

export const router = Router();
router.use(requireAuth);

const BASE_INTERVAL = { dificil: 1, medio: 3, facil: 7 };

router.get('/', async (req, res, next) => {
  try {
    const user = req.user;
    const { chapter_id, due_only } = req.query;

    const clauses = [];
    const params = [];
    if (chapter_id) {
      clauses.push('chapter_id = ?');
      params.push(chapter_id);
    }
    let sql = 'SELECT * FROM flashcards';
    if (clauses.length) sql += ' WHERE ' + clauses.join(' AND ');
    sql += ' ORDER BY chapter_id, id';
    const flashcards = db.prepare(sql).all(...params);

    const { rows: progressRows } = await pgPool.query(
      'SELECT flashcard_id, next_review_at, review_count, last_rating FROM user_flashcard_progress WHERE user_id = $1',
      [user.id]
    );
    const progressMap = new Map(progressRows.map((r) => [r.flashcard_id, r]));

    let result = flashcards.map((f) => {
      const p = progressMap.get(f.id);
      return {
        ...f,
        next_review_at: p?.next_review_at ?? null,
        review_count: p?.review_count ?? 0,
        last_rating: p?.last_rating ?? null,
      };
    });

    if (due_only === 'true') {
      const now = Date.now();
      result = result.filter((f) => !f.next_review_at || new Date(f.next_review_at).getTime() <= now);
    }

    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/review', async (req, res, next) => {
  try {
    const user = req.user;
    const { rating } = req.body; // facil | medio | dificil
    const flashcardId = req.params.id;

    const { rows } = await pgPool.query(
      'SELECT * FROM user_flashcard_progress WHERE user_id = $1 AND flashcard_id = $2',
      [user.id, flashcardId]
    );
    const existing = rows[0];
    const reviewCount = (existing?.review_count ?? 0) + 1;
    const multiplier = rating === 'facil' ? Math.pow(2, Math.min(reviewCount - 1, 4)) : 1;
    const days = (BASE_INTERVAL[rating] ?? 3) * multiplier;
    const nextReview = new Date(Date.now() + days * 86400000).toISOString();

    if (existing) {
      await pgPool.query(
        'UPDATE user_flashcard_progress SET last_rating = $1, interval_days = $2, next_review_at = $3, review_count = $4 WHERE user_id = $5 AND flashcard_id = $6',
        [rating, days, nextReview, reviewCount, user.id, flashcardId]
      );
    } else {
      await pgPool.query(
        'INSERT INTO user_flashcard_progress (user_id, flashcard_id, last_rating, interval_days, next_review_at, review_count) VALUES ($1, $2, $3, $4, $5, $6)',
        [user.id, flashcardId, rating, days, nextReview, reviewCount]
      );
    }
    res.json({ ok: true, next_review_at: nextReview });
  } catch (err) {
    next(err);
  }
});
