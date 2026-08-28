import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';
import { levelForXp } from '../services/gamification.js';

export const router = Router();

export function serializeUser(user) {
  if (!user) return null;
  const cert = user.certification_id
    ? db.prepare('SELECT * FROM certifications WHERE id = ?').get(user.certification_id)
    : null;
  const { password_hash, ...safe } = user;
  return { ...safe, certification: cert, level_info: levelForXp(user.xp) };
}

router.get('/me', requireAuth, (req, res) => {
  res.json(serializeUser(req.user));
});

router.put('/me', requireAuth, async (req, res, next) => {
  try {
    const { name, certification_code } = req.body;
    let certId = req.user.certification_id;
    if (certification_code) {
      const cert = db.prepare('SELECT id FROM certifications WHERE code = ?').get(certification_code);
      if (!cert) return res.status(400).json({ error: 'Certificação inválida' });
      certId = cert.id;
    }
    const { rows } = await pgPool.query(
      'UPDATE users SET name = COALESCE($1, name), certification_id = $2 WHERE id = $3 RETURNING *',
      [name ?? null, certId, req.user.id]
    );
    res.json(serializeUser(rows[0]));
  } catch (err) {
    next(err);
  }
});
