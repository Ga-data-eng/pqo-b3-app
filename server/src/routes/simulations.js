import { Router } from 'express';
import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';
import { requireAuth } from '../middleware/auth.js';
import { xpForAnswer, awardXp, touchStreak, checkAchievements } from '../services/gamification.js';
import { recordAnswer, updateTopicPerformance, updateChapterPerformance } from '../services/adaptive.js';

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

router.post('/', async (req, res, next) => {
  try {
    const user = req.user;
    const total = Number(req.body.total_questions) || 50;
    const certFilter = user.certification_id
      ? `AND id IN (SELECT question_id FROM question_certifications WHERE certification_id = ${Number(user.certification_id)})`
      : '';
    const ids = db
      .prepare(`SELECT id FROM questions WHERE status='aprovada' ${certFilter} ORDER BY RANDOM() LIMIT ?`)
      .all(total)
      .map((r) => r.id);

    if (ids.length === 0) return res.status(400).json({ error: 'Nenhuma questão disponível para simulado.' });

    const { rows: simRows } = await pgPool.query(
      'INSERT INTO simulations (user_id, total_questions) VALUES ($1, $2) RETURNING id',
      [user.id, ids.length]
    );
    const simId = simRows[0].id;

    for (let idx = 0; idx < ids.length; idx++) {
      const qid = ids[idx];
      const q = db.prepare('SELECT option_a, option_b, option_c, option_d, option_e FROM questions WHERE id = ?').get(qid);
      const opts = ['A', 'B', 'C', 'D', 'E'].filter((k) => q[`option_${k.toLowerCase()}`]);
      await pgPool.query(
        'INSERT INTO simulation_answers (simulation_id, question_id, order_index, shuffled_options) VALUES ($1, $2, $3, $4)',
        [simId, qid, idx, JSON.stringify(shuffle(opts))]
      );
    }

    res.json(await getSimulationState(simId));
  } catch (err) {
    next(err);
  }
});

async function getSimulationState(simId, { revealAnswers = false } = {}) {
  const { rows: simRows } = await pgPool.query('SELECT * FROM simulations WHERE id = $1', [simId]);
  const sim = simRows[0];
  const { rows: answers } = await pgPool.query(
    'SELECT * FROM simulation_answers WHERE simulation_id = $1 ORDER BY order_index',
    [simId]
  );
  const questions = answers.map((a) => {
    const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(a.question_id);
    const chapter = db.prepare('SELECT name, number FROM chapters WHERE id = ?').get(q.chapter_id);
    const optKeys = JSON.parse(a.shuffled_options);
    const base = {
      simulation_answer_id: a.id,
      order_index: a.order_index,
      question_id: q.id,
      statement: q.statement,
      difficulty: q.difficulty,
      chapter,
      options: optKeys.map((k) => ({ key: k, text: q[`option_${k.toLowerCase()}`] })),
      selected_option: a.selected_option,
      marked_for_review: !!a.marked_for_review,
    };
    if (revealAnswers) {
      base.correct_option = q.correct_option;
      base.is_correct = a.is_correct != null ? !!a.is_correct : a.selected_option === q.correct_option;
      base.explanation = q.explanation;
      base.explanations = { A: q.explanation_a, B: q.explanation_b, C: q.explanation_c, D: q.explanation_d, E: q.explanation_e };
      base.exam_tip = q.exam_tip;
      base.common_trap = q.common_trap;
      base.source = { title: q.source_title, chapter: q.source_chapter, section: q.source_section, page: q.source_page };
    }
    return base;
  });
  return { ...sim, questions };
}

router.get('/:id', async (req, res, next) => {
  try {
    const { rows } = await pgPool.query('SELECT finished_at FROM simulations WHERE id = $1', [req.params.id]);
    const revealAnswers = !!rows[0]?.finished_at;
    res.json(await getSimulationState(req.params.id, { revealAnswers }));
  } catch (err) {
    next(err);
  }
});

router.put('/:id/answer', async (req, res, next) => {
  try {
    const { question_id, selected_option } = req.body;
    await pgPool.query(
      'UPDATE simulation_answers SET selected_option = $1 WHERE simulation_id = $2 AND question_id = $3',
      [selected_option, req.params.id, question_id]
    );
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

router.put('/:id/mark', async (req, res, next) => {
  try {
    const { question_id, marked } = req.body;
    await pgPool.query(
      'UPDATE simulation_answers SET marked_for_review = $1 WHERE simulation_id = $2 AND question_id = $3',
      [marked ? 1 : 0, req.params.id, question_id]
    );
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

router.post('/:id/finish', async (req, res, next) => {
  try {
    const user = req.user;
    const simId = req.params.id;
    const { rows: simRows } = await pgPool.query('SELECT * FROM simulations WHERE id = $1', [simId]);
    const sim = simRows[0];
    if (!sim) return res.status(404).json({ error: 'Simulado não encontrado' });

    const { rows: answers } = await pgPool.query('SELECT * FROM simulation_answers WHERE simulation_id = $1', [simId]);
    let correct = 0;
    let totalXp = 0;
    const chapterStats = {};

    for (const a of answers) {
      const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(a.question_id);
      const isCorrect = a.selected_option != null && a.selected_option === q.correct_option;
      await pgPool.query('UPDATE simulation_answers SET is_correct = $1 WHERE id = $2', [isCorrect ? 1 : 0, a.id]);
      if (isCorrect) correct += 1;

      await updateTopicPerformance(user.id, q.topic_id, isCorrect, null);
      await updateChapterPerformance(user.id, q.chapter_id, isCorrect);
      await recordAnswer(user.id, q.id, isCorrect);

      await pgPool.query(
        'INSERT INTO user_answers (user_id, question_id, session_id, selected_option, is_correct) VALUES ($1, $2, NULL, $3, $4)',
        [user.id, q.id, a.selected_option ?? '', isCorrect ? 1 : 0]
      );

      totalXp += xpForAnswer({ isCorrect, difficulty: q.difficulty });

      const chName = db.prepare('SELECT name FROM chapters WHERE id = ?').get(q.chapter_id)?.name ?? 'Outros';
      if (!chapterStats[chName]) chapterStats[chName] = { correct: 0, total: 0 };
      chapterStats[chName].total += 1;
      if (isCorrect) chapterStats[chName].correct += 1;
    }

    const scorePercent = (correct / answers.length) * 100;
    const startedAt = new Date(sim.started_at);
    const durationSeconds = Math.round((Date.now() - startedAt.getTime()) / 1000);

    await pgPool.query(
      'UPDATE simulations SET finished_at = NOW(), correct_answers = $1, score_percent = $2, duration_seconds = $3 WHERE id = $4',
      [correct, scorePercent, durationSeconds, simId]
    );

    await awardXp(user.id, totalXp + 50); // bônus por concluir simulado
    await touchStreak(user.id);
    const newAchievements = await checkAchievements(user.id);

    const performanceByChapter = Object.entries(chapterStats).map(([name, s]) => ({
      chapter: name,
      correct: s.correct,
      total: s.total,
      percent: Math.round((s.correct / s.total) * 100),
    }));
    const priorityReview = performanceByChapter
      .filter((c) => c.percent < 75)
      .sort((a, b) => a.percent - b.percent)
      .map((c) => c.chapter);

    res.json({
      id: Number(simId),
      total_questions: answers.length,
      correct_answers: correct,
      score_percent: scorePercent,
      duration_seconds: durationSeconds,
      performance_by_chapter: performanceByChapter,
      priority_review: priorityReview,
      xp_earned: totalXp + 50,
      new_achievements: newAchievements,
    });
  } catch (err) {
    next(err);
  }
});
