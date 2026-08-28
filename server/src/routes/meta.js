import { Router } from 'express';
import { db } from '../db/index.js';

export const router = Router();

router.get('/certifications', (req, res) => {
  res.json(db.prepare('SELECT * FROM certifications ORDER BY order_index').all());
});

router.get('/structure', (req, res) => {
  const certCode = req.query.certification;
  const titles = db.prepare('SELECT * FROM titles ORDER BY order_index').all();
  const chapters = db.prepare('SELECT * FROM chapters ORDER BY title_id, order_index').all();
  const cert = certCode ? db.prepare('SELECT id FROM certifications WHERE code = ?').get(certCode) : null;
  const chapterCerts = new Set(
    cert
      ? db.prepare('SELECT chapter_id FROM chapter_certifications WHERE certification_id = ?').all(cert.id).map((r) => r.chapter_id)
      : []
  );
  const topicCounts = db
    .prepare(
      `SELECT ch.id chapter_id, COUNT(q.id) n FROM chapters ch LEFT JOIN questions q ON q.chapter_id = ch.id AND q.status = 'aprovada' GROUP BY ch.id`
    )
    .all();
  const countByChapter = Object.fromEntries(topicCounts.map((r) => [r.chapter_id, r.n]));

  const result = titles.map((t) => ({
    ...t,
    chapters: chapters
      .filter((c) => c.title_id === t.id)
      .map((c) => ({
        ...c,
        applies_to_certification: cert ? chapterCerts.has(c.id) : null,
        question_count: countByChapter[c.id] ?? 0,
      })),
  }));
  res.json(result);
});

router.get('/topics', (req, res) => {
  const chapterId = req.query.chapter_id;
  if (chapterId) {
    return res.json(db.prepare('SELECT * FROM topics WHERE chapter_id = ? ORDER BY order_index').all(chapterId));
  }
  res.json(db.prepare('SELECT * FROM topics ORDER BY chapter_id, order_index').all());
});
