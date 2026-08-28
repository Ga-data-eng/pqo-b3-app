import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';
import { serializeUser } from './users.js';

export const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nome, e-mail e senha são obrigatórios.' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'A senha deve ter no mínimo 6 caracteres.' });
    }
    const normalizedEmail = String(email).trim().toLowerCase();

    const existing = await pgPool.query('SELECT id FROM users WHERE email = $1', [normalizedEmail]);
    if (existing.rows[0]) {
      return res.status(409).json({ error: 'Este e-mail já está cadastrado.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const { rows } = await pgPool.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [name.trim(), normalizedEmail, passwordHash]
    );
    const user = rows[0];
    await pgPool.query(
      'INSERT INTO study_streaks (user_id, current_streak, longest_streak) VALUES ($1, 0, 0)',
      [user.id]
    );

    req.session.regenerate((err) => {
      if (err) return next(err);
      req.session.userId = user.id;
      res.status(201).json(serializeUser(user));
    });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
    }
    const normalizedEmail = String(email).trim().toLowerCase();
    const { rows } = await pgPool.query('SELECT * FROM users WHERE email = $1', [normalizedEmail]);
    const user = rows[0];
    if (!user) return res.status(401).json({ error: 'E-mail ou senha incorretos.' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'E-mail ou senha incorretos.' });

    req.session.regenerate((err) => {
      if (err) return next(err);
      req.session.userId = user.id;
      res.json(serializeUser(user));
    });
  } catch (err) {
    next(err);
  }
});

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('pqo.sid');
    res.json({ ok: true });
  });
});

router.get('/me', requireAuth, (req, res) => {
  res.json(serializeUser(req.user));
});
