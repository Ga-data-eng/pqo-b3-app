-- PQO B3 Study Platform — PostgreSQL schema
-- Guarda usuários (login/autenticação) e todo o progresso/estado gerado por eles
-- (respostas, sessões, simulados, streaks, conquistas, flashcards, revisão).
--
-- O conteúdo estático do Guia (questões, flashcards, capítulos, busca full-text)
-- continua no SQLite (server/src/db/schema.sql) — não há FK entre os dois bancos,
-- os IDs de question_id/chapter_id/topic_id/flashcard_id/achievement_id aqui são
-- apenas referências numéricas ao SQLite.

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL DEFAULT 'Estudante',
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  certification_id INTEGER,
  xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_answers (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id INTEGER NOT NULL,
  session_id INTEGER,
  selected_option TEXT NOT NULL,
  is_correct INTEGER NOT NULL,
  time_spent_seconds INTEGER,
  answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_topic_performance (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic_id INTEGER NOT NULL,
  correct_count INTEGER NOT NULL DEFAULT 0,
  wrong_count INTEGER NOT NULL DEFAULT 0,
  avg_time_seconds REAL,
  last_reviewed_at TIMESTAMPTZ,
  PRIMARY KEY (user_id, topic_id)
);

CREATE TABLE IF NOT EXISTS user_chapter_performance (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  chapter_id INTEGER NOT NULL,
  correct_count INTEGER NOT NULL DEFAULT 0,
  wrong_count INTEGER NOT NULL DEFAULT 0,
  last_reviewed_at TIMESTAMPTZ,
  PRIMARY KEY (user_id, chapter_id)
);

CREATE TABLE IF NOT EXISTS study_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  mode TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  finished_at TIMESTAMPTZ,
  total_questions INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS simulations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  finished_at TIMESTAMPTZ,
  duration_seconds INTEGER,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  score_percent REAL
);

CREATE TABLE IF NOT EXISTS simulation_answers (
  id SERIAL PRIMARY KEY,
  simulation_id INTEGER NOT NULL REFERENCES simulations(id) ON DELETE CASCADE,
  question_id INTEGER NOT NULL,
  order_index INTEGER NOT NULL,
  shuffled_options TEXT,
  marked_for_review INTEGER NOT NULL DEFAULT 0,
  selected_option TEXT,
  is_correct INTEGER
);

CREATE TABLE IF NOT EXISTS user_flashcard_progress (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  flashcard_id INTEGER NOT NULL,
  last_rating TEXT,
  interval_days INTEGER NOT NULL DEFAULT 1,
  next_review_at TIMESTAMPTZ,
  review_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, flashcard_id)
);

CREATE TABLE IF NOT EXISTS review_queue (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id INTEGER NOT NULL,
  priority TEXT NOT NULL DEFAULT 'media' CHECK (priority IN ('alta','media','dominado')),
  wrong_count INTEGER NOT NULL DEFAULT 0,
  last_wrong_at TIMESTAMPTZ,
  next_review_at TIMESTAMPTZ,
  UNIQUE (user_id, question_id)
);

CREATE TABLE IF NOT EXISTS user_achievements (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  achievement_id INTEGER NOT NULL,
  earned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, achievement_id)
);

CREATE TABLE IF NOT EXISTS study_streaks (
  user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_study_date TEXT
);

CREATE TABLE IF NOT EXISTS daily_missions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date TEXT NOT NULL,
  target_questions INTEGER NOT NULL DEFAULT 30,
  target_review INTEGER NOT NULL DEFAULT 10,
  target_critical_topics INTEGER NOT NULL DEFAULT 2,
  done_questions INTEGER NOT NULL DEFAULT 0,
  done_review INTEGER NOT NULL DEFAULT 0,
  done_critical_topics INTEGER NOT NULL DEFAULT 0,
  UNIQUE (user_id, date)
);

CREATE INDEX IF NOT EXISTS idx_user_answers_user ON user_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_user_answers_question ON user_answers(question_id);
CREATE INDEX IF NOT EXISTS idx_review_queue_user ON review_queue(user_id);
CREATE INDEX IF NOT EXISTS idx_simulation_answers_sim ON simulation_answers(simulation_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_user ON study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_simulations_user ON simulations(user_id);
