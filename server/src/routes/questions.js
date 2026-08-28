import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';
import { pickAdaptiveQuestions } from '../services/adaptive.js';

export const router = Router();
router.use(requireAuth);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function questionCertFilter(certId) {
  return certId
    ? `AND q.id IN (SELECT question_id FROM question_certifications WHERE certification_id = ${Number(certId)})`
    : '';
}

router.get('/', async (req, res, next) => {
  try {
    const { mode, chapter_id, topic_id, difficulty, limit } = req.query;
    const user = req.user;
    const certFilter = questionCertFilter(user.certification_id);
    const lim = Number(limit) || 10;

    let ids = [];

    if (mode === 'adaptativo') {
      ids = await pickAdaptiveQuestions(user.id, user.certification_id, lim);
    } else if (mode === 'caderno_erros') {
      const { rows } = await pgPool.query(
        `SELECT question_id FROM review_queue WHERE user_id = $1 AND priority != 'dominado' ORDER BY
         CASE priority WHEN 'alta' THEN 0 WHEN 'media' THEN 1 ELSE 2 END, wrong_count DESC LIMIT $2`,
        [user.id, lim]
      );
      ids = rows.map((r) => r.question_id);
    } else if (mode === 'desafio') {
      const order = "CASE difficulty WHEN 'facil' THEN 0 WHEN 'medio' THEN 1 WHEN 'dificil' THEN 2 ELSE 3 END";
      ids = db
        .prepare(`SELECT id FROM questions q WHERE status='aprovada' ${certFilter} ORDER BY ${order}, RANDOM() LIMIT ?`)
        .all(lim)
        .map((r) => r.id);
    } else {
      // treino_rapido, estudar_materia, cronometrado, simulado(base pool)
      const clauses = ["status='aprovada'"];
      const params = [];
      if (chapter_id) {
        clauses.push('chapter_id = ?');
        params.push(chapter_id);
      }
      if (topic_id) {
        clauses.push('topic_id = ?');
        params.push(topic_id);
      }
      if (difficulty) {
        clauses.push('difficulty = ?');
        params.push(difficulty);
      }
      const sql = `SELECT id FROM questions q WHERE ${clauses.join(' AND ')} ${certFilter} ORDER BY RANDOM() LIMIT ?`;
      params.push(lim);
      ids = db.prepare(sql).all(...params).map((r) => r.id);
    }

    const questions = ids.map((id) => loadQuestion(id));
    res.json(questions);
  } catch (err) {
    next(err);
  }
});

function loadQuestion(id) {
  const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(id);
  if (!q) return null;
  const chapter = db.prepare('SELECT c.*, t.name as title_name, t.number as title_number FROM chapters c JOIN titles t ON t.id = c.title_id WHERE c.id = ?').get(q.chapter_id);
  const topic = q.topic_id ? db.prepare('SELECT * FROM topics WHERE id = ?').get(q.topic_id) : null;
  const options = ['A', 'B', 'C', 'D', 'E']
    .filter((k) => q[`option_${k.toLowerCase()}`])
    .map((k) => ({ key: k, text: q[`option_${k.toLowerCase()}`] }));
  return {
    id: q.id,
    statement: q.statement,
    difficulty: q.difficulty,
    subtopic: q.subtopic,
    options: shuffle(options),
    correct_option: q.correct_option,
    explanation: q.explanation,
    explanations: { A: q.explanation_a, B: q.explanation_b, C: q.explanation_c, D: q.explanation_d, E: q.explanation_e },
    exam_tip: q.exam_tip,
    common_trap: q.common_trap,
    source: {
      title: q.source_title,
      chapter: q.source_chapter,
      section: q.source_section,
      page: q.source_page,
    },
    chapter: chapter ? { id: chapter.id, name: chapter.name, number: chapter.number, title_name: chapter.title_name, title_number: chapter.title_number } : null,
    topic: topic ? { id: topic.id, name: topic.name } : null,
  };
}

router.get('/:id', (req, res) => {
  const q = loadQuestion(req.params.id);
  if (!q) return res.status(404).json({ error: 'Questão não encontrada' });
  res.json(q);
});
