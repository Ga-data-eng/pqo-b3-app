import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';

export const router = Router();
router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try {
    const user = req.user;
    const achievements = db.prepare('SELECT * FROM achievements ORDER BY id').all();
    const { rows: earnedRows } = await pgPool.query(
      'SELECT achievement_id, earned_at FROM user_achievements WHERE user_id = $1',
      [user.id]
    );
    const earnedMap = new Map(earnedRows.map((r) => [r.achievement_id, r.earned_at]));
    const result = achievements
      .map((a) => ({ ...a, earned_at: earnedMap.get(a.id) ?? null, earned: earnedMap.has(a.id) }))
      .sort((a, b) => Number(!a.earned) - Number(!b.earned));
    res.json(result);
  } catch (err) {
    next(err);
  }
});
