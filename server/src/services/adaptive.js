import { db } from '../db/index.js';
import { pgPool } from '../db/pg.js';

// Prioridade de revisão de uma questão errada, com base em nº de erros e último erro.
export function priorityFor(wrongCount, lastWrongAt) {
  if (wrongCount >= 3) return 'alta';
  const daysSince = lastWrongAt ? (Date.now() - new Date(lastWrongAt).getTime()) / 86400000 : 999;
  if (wrongCount >= 1 && daysSince < 14) return wrongCount >= 2 ? 'alta' : 'media';
  return 'dominado';
}

export function nextReviewDate(wrongCount) {
  // Repetição espaçada simples: 1, 3, 7, 14 dias após o erro, conforme reincidência.
  const days = [1, 3, 7, 14][Math.min(wrongCount - 1, 3)] ?? 14;
  return new Date(Date.now() + days * 86400000).toISOString();
}

export async function recordAnswer(userId, questionId, isCorrect) {
  if (isCorrect) {
    await pgPool.query(
      "UPDATE review_queue SET priority = 'dominado' WHERE user_id = $1 AND question_id = $2",
      [userId, questionId]
    );
    return;
  }
  const { rows } = await pgPool.query(
    'SELECT * FROM review_queue WHERE user_id = $1 AND question_id = $2',
    [userId, questionId]
  );
  const existing = rows[0];
  const wrongCount = (existing?.wrong_count ?? 0) + 1;
  const priority = priorityFor(wrongCount, new Date().toISOString());
  const nextReview = nextReviewDate(wrongCount);
  if (existing) {
    await pgPool.query(
      'UPDATE review_queue SET wrong_count = $1, priority = $2, last_wrong_at = NOW(), next_review_at = $3 WHERE id = $4',
      [wrongCount, priority, nextReview, existing.id]
    );
  } else {
    await pgPool.query(
      'INSERT INTO review_queue (user_id, question_id, priority, wrong_count, last_wrong_at, next_review_at) VALUES ($1, $2, $3, $4, NOW(), $5)',
      [userId, questionId, priority, wrongCount, nextReview]
    );
  }
}

export async function updateTopicPerformance(userId, topicId, isCorrect, timeSpent) {
  if (!topicId) return;
  const { rows } = await pgPool.query(
    'SELECT * FROM user_topic_performance WHERE user_id = $1 AND topic_id = $2',
    [userId, topicId]
  );
  const existing = rows[0];
  if (!existing) {
    await pgPool.query(
      `INSERT INTO user_topic_performance (user_id, topic_id, correct_count, wrong_count, avg_time_seconds, last_reviewed_at)
       VALUES ($1, $2, $3, $4, $5, NOW())`,
      [userId, topicId, isCorrect ? 1 : 0, isCorrect ? 0 : 1, timeSpent ?? null]
    );
    return;
  }
  const correct = existing.correct_count + (isCorrect ? 1 : 0);
  const wrong = existing.wrong_count + (isCorrect ? 0 : 1);
  const totalAnswers = correct + wrong;
  const prevAvg = existing.avg_time_seconds ?? timeSpent ?? 0;
  const avgTime = timeSpent != null ? (prevAvg * (totalAnswers - 1) + timeSpent) / totalAnswers : prevAvg;
  await pgPool.query(
    'UPDATE user_topic_performance SET correct_count = $1, wrong_count = $2, avg_time_seconds = $3, last_reviewed_at = NOW() WHERE user_id = $4 AND topic_id = $5',
    [correct, wrong, avgTime, userId, topicId]
  );
}

export async function updateChapterPerformance(userId, chapterId, isCorrect) {
  if (!chapterId) return;
  const { rows } = await pgPool.query(
    'SELECT * FROM user_chapter_performance WHERE user_id = $1 AND chapter_id = $2',
    [userId, chapterId]
  );
  if (!rows[0]) {
    await pgPool.query(
      'INSERT INTO user_chapter_performance (user_id, chapter_id, correct_count, wrong_count, last_reviewed_at) VALUES ($1, $2, $3, $4, NOW())',
      [userId, chapterId, isCorrect ? 1 : 0, isCorrect ? 0 : 1]
    );
    return;
  }
  await pgPool.query(
    'UPDATE user_chapter_performance SET correct_count = correct_count + $1, wrong_count = wrong_count + $2, last_reviewed_at = NOW() WHERE user_id = $3 AND chapter_id = $4',
    [isCorrect ? 1 : 0, isCorrect ? 0 : 1, userId, chapterId]
  );
}

// Seleciona questões priorizando tópicos com pior desempenho (modo adaptativo).
// Questões/certificações vêm do SQLite (conteúdo estático); desempenho por tópico
// vem do Postgres (dado do usuário) — combinados aqui em memória.
export async function pickAdaptiveQuestions(userId, certificationId, limit = 10) {
  const qRows = db
    .prepare(
      `SELECT q.id, q.topic_id
       FROM questions q
       JOIN question_certifications qc ON qc.question_id = q.id AND qc.certification_id = ?
       WHERE q.status = 'aprovada'`
    )
    .all(certificationId);

  const { rows: perfRows } = await pgPool.query(
    'SELECT topic_id, correct_count, wrong_count FROM user_topic_performance WHERE user_id = $1',
    [userId]
  );
  const perfMap = new Map(perfRows.map((r) => [r.topic_id, r]));

  const scored = qRows.map((r) => {
    const p = perfMap.get(r.topic_id);
    const correct = p?.correct_count ?? 0;
    const wrong = p?.wrong_count ?? 0;
    const total = correct + wrong;
    const accuracy = total > 0 ? correct / total : 0.5;
    // menor acurácia e menos exposição => maior prioridade (score menor = prioridade maior)
    const score = accuracy - total * 0.01 + Math.random() * 0.15;
    return { id: r.id, score };
  });

  scored.sort((a, b) => a.score - b.score);
  return scored.slice(0, limit).map((s) => s.id);
}
