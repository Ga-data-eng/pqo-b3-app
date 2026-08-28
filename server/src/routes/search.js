import { Router } from 'express';
import { db } from '../db/index.js';

export const router = Router();

function sanitizeFtsQuery(q) {
  // fts5: escapa aspas e envolve cada termo em prefixo para casar variações.
  return q
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => `"${term.replace(/"/g, '')}"*`)
    .join(' ');
}

router.get('/', (req, res) => {
  const q = req.query.q;
  if (!q || q.trim().length < 2) return res.json([]);
  const ftsQuery = sanitizeFtsQuery(q);

  const rows = db
    .prepare(
      `SELECT gs.id, gs.section_name, gs.page_start, gs.content,
        snippet(guide_sections_fts, 1, '<mark>', '</mark>', '…', 24) as snippet
       FROM guide_sections_fts
       JOIN guide_sections gs ON gs.id = guide_sections_fts.rowid
       WHERE guide_sections_fts MATCH ?
       ORDER BY rank
       LIMIT 15`
    )
    .all(ftsQuery);

  res.json(
    rows.map((r) => ({
      id: r.id,
      section_name: r.section_name,
      page: r.page_start,
      snippet: r.snippet,
    }))
  );
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM guide_sections WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Não encontrado' });
  res.json(row);
});
