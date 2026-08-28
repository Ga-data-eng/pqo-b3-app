import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';

const LEVELS = [
  { level: 1, name: 'Iniciante', minXp: 0 },
  { level: 2, name: 'Aprendiz', minXp: 500 },
  { level: 3, name: 'Analista', minXp: 1500 },
  { level: 4, name: 'Especialista', minXp: 3500 },
  { level: 5, name: 'Especialista B3', minXp: 7000 },
];

export function levelForXp(xp) {
  let current = LEVELS[0];
  for (const l of LEVELS) if (xp >= l.minXp) current = l;
  return current;
}

export function xpForAnswer({ isCorrect, difficulty }) {
  if (!isCorrect) return 0;
  const base = 10;
  const bonus = { facil: 0, medio: 2, dificil: 5, prova: 8 }[difficulty] ?? 0;
  return base + bonus;
}

export async function awardXp(userId, amount) {
  if (amount <= 0) return;
  const { rows } = await pgPool.query('SELECT xp FROM users WHERE id = $1', [userId]);
  const newXp = rows[0].xp + amount;
  const newLevel = levelForXp(newXp).level;
  await pgPool.query('UPDATE users SET xp = $1, level = $2 WHERE id = $3', [newXp, newLevel, userId]);
}

export async function touchStreak(userId) {
  const today = new Date().toISOString().slice(0, 10);
  const { rows } = await pgPool.query('SELECT * FROM study_streaks WHERE user_id = $1', [userId]);
  const row = rows[0];
  if (!row) {
    await pgPool.query(
      'INSERT INTO study_streaks (user_id, current_streak, longest_streak, last_study_date) VALUES ($1, 1, 1, $2)',
      [userId, today]
    );
    return;
  }
  if (row.last_study_date === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const newStreak = row.last_study_date === yesterday ? row.current_streak + 1 : 1;
  const longest = Math.max(row.longest_streak, newStreak);
  await pgPool.query(
    'UPDATE study_streaks SET current_streak = $1, longest_streak = $2, last_study_date = $3 WHERE user_id = $4',
    [newStreak, longest, today, userId]
  );
}

const ACHIEVEMENT_CHECKS = {
  first_100: async (userId) => {
    const { rows } = await pgPool.query('SELECT COUNT(*)::int n FROM user_answers WHERE user_id = $1', [userId]);
    return rows[0].n >= 100;
  },
  streak_7: async (userId) => {
    const { rows } = await pgPool.query('SELECT current_streak FROM study_streaks WHERE user_id = $1', [userId]);
    return (rows[0]?.current_streak ?? 0) >= 7;
  },
  streak_30: async (userId) => {
    const { rows } = await pgPool.query('SELECT current_streak FROM study_streaks WHERE user_id = $1', [userId]);
    return (rows[0]?.current_streak ?? 0) >= 30;
  },
  accuracy_80: async (userId) => {
    const { rows } = await pgPool.query(
      'SELECT COUNT(*)::int n, COALESCE(SUM(is_correct),0)::int c FROM user_answers WHERE user_id = $1',
      [userId]
    );
    const r = rows[0];
    return r.n >= 50 && r.c / r.n >= 0.8;
  },
  hard_100: async (userId) => {
    const { rows } = await pgPool.query('SELECT question_id FROM user_answers WHERE user_id = $1', [userId]);
    if (rows.length === 0) return false;
    const ids = rows.map((r) => r.question_id);
    const placeholders = ids.map(() => '?').join(',');
    const hardIds = new Set(
      db
        .prepare(`SELECT id FROM questions WHERE id IN (${placeholders}) AND difficulty IN ('dificil','prova')`)
        .all(...ids)
        .map((r) => r.id)
    );
    let count = 0;
    for (const r of rows) if (hardIds.has(r.question_id)) count++;
    return count >= 100;
  },
  sim_90: async (userId) => {
    const { rows } = await pgPool.query(
      'SELECT COUNT(*)::int n FROM simulations WHERE user_id = $1 AND score_percent >= 90',
      [userId]
    );
    return rows[0].n > 0;
  },
  level_5: async (userId) => {
    const { rows } = await pgPool.query('SELECT level FROM users WHERE id = $1', [userId]);
    return rows[0].level >= 5;
  },
};

export async function checkAchievements(userId) {
  const earned = [];
  const achievements = db.prepare('SELECT * FROM achievements').all();
  const { rows: alreadyRows } = await pgPool.query(
    'SELECT achievement_id FROM user_achievements WHERE user_id = $1',
    [userId]
  );
  const already = new Set(alreadyRows.map((r) => r.achievement_id));
  for (const a of achievements) {
    if (already.has(a.id)) continue;
    const check = ACHIEVEMENT_CHECKS[a.code];
    if (!check) continue;
    if (await check(userId)) {
      await pgPool.query('INSERT INTO user_achievements (user_id, achievement_id) VALUES ($1, $2)', [userId, a.id]);
      earned.push(a);
    }
  }
  return earned;
}
