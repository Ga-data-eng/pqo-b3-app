import { pgPool } from '../db/pg.js';

export async function requireAuth(req, res, next) {
  try {
    if (!req.session?.userId) return res.status(401).json({ error: 'Não autenticado' });
    const { rows } = await pgPool.query('SELECT * FROM users WHERE id = $1', [req.session.userId]);
    if (!rows[0]) return res.status(401).json({ error: 'Não autenticado' });
    req.user = rows[0];
    next();
  } catch (err) {
    next(err);
  }
}
