-- PQO B3 Study Platform — SQLite schema
-- Guarda apenas o conteúdo ESTÁTICO do Guia (questões, flashcards, capítulos,
-- busca full-text). Usuários, login e todo o progresso/estado gerado por eles
-- (respostas, sessões, simulados, streaks, conquistas) vivem no PostgreSQL —
-- veja server/src/db/schema.postgres.sql.

CREATE TABLE IF NOT EXISTS certifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  order_index INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS titles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  number TEXT NOT NULL,
  name TEXT NOT NULL,
  order_index INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS chapters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title_id INTEGER NOT NULL REFERENCES titles(id),
  number TEXT NOT NULL,
  name TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  source_page_start INTEGER,
  source_page_end INTEGER
);

CREATE TABLE IF NOT EXISTS chapter_certifications (
  chapter_id INTEGER NOT NULL REFERENCES chapters(id),
  certification_id INTEGER NOT NULL REFERENCES certifications(id),
  PRIMARY KEY (chapter_id, certification_id)
);

CREATE TABLE IF NOT EXISTS topics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chapter_id INTEGER NOT NULL REFERENCES chapters(id),
  name TEXT NOT NULL,
  order_index INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chapter_id INTEGER NOT NULL REFERENCES chapters(id),
  topic_id INTEGER REFERENCES topics(id),
  subtopic TEXT,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('facil','medio','dificil','prova')),
  question_type TEXT NOT NULL DEFAULT 'multipla_escolha',
  statement TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  option_e TEXT,
  correct_option TEXT NOT NULL CHECK (correct_option IN ('A','B','C','D','E')),
  explanation TEXT NOT NULL,
  explanation_a TEXT NOT NULL,
  explanation_b TEXT NOT NULL,
  explanation_c TEXT NOT NULL,
  explanation_d TEXT NOT NULL,
  explanation_e TEXT,
  exam_tip TEXT NOT NULL,
  common_trap TEXT,
  source_title TEXT NOT NULL DEFAULT 'Guia Por Dentro da B3',
  source_chapter TEXT NOT NULL,
  source_section TEXT,
  source_page TEXT,
  status TEXT NOT NULL DEFAULT 'aprovada' CHECK (status IN ('rascunho','em_revisao','aprovada','arquivada')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS question_certifications (
  question_id INTEGER NOT NULL REFERENCES questions(id),
  certification_id INTEGER NOT NULL REFERENCES certifications(id),
  PRIMARY KEY (question_id, certification_id)
);

CREATE TABLE IF NOT EXISTS flashcards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chapter_id INTEGER NOT NULL REFERENCES chapters(id),
  topic_id INTEGER REFERENCES topics(id),
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'medio',
  source_page TEXT
);

CREATE TABLE IF NOT EXISTS achievements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS guide_sections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title_id INTEGER REFERENCES titles(id),
  chapter_id INTEGER REFERENCES chapters(id),
  section_name TEXT NOT NULL,
  page_start INTEGER,
  page_end INTEGER,
  content TEXT NOT NULL
);

CREATE VIRTUAL TABLE IF NOT EXISTS guide_sections_fts USING fts5(
  section_name, content, content='guide_sections', content_rowid='id'
);

CREATE TRIGGER IF NOT EXISTS guide_sections_ai AFTER INSERT ON guide_sections BEGIN
  INSERT INTO guide_sections_fts(rowid, section_name, content) VALUES (new.id, new.section_name, new.content);
END;

CREATE INDEX IF NOT EXISTS idx_questions_chapter ON questions(chapter_id);
CREATE INDEX IF NOT EXISTS idx_questions_topic ON questions(topic_id);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);
