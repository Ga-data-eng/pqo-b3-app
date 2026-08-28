import { Router } from 'express';
import { db } from '../db/index.js';

export const router = Router();

// Comparações curadas (pegadinhas clássicas) para respostas diretas do Professor PQO.
// Cada entrada é acionada por palavras-chave presentes na pergunta do usuário.
const CURATED = [
  {
    keywords: ['cmn', 'bacen', 'diferença'],
    title: 'CMN × Bacen',
    answer:
      'O CMN (Conselho Monetário Nacional) é o órgão NORMATIVO: fixa as diretrizes das políticas monetária, creditícia e cambial do país. O Bacen EXECUTA essas diretrizes e supervisiona as instituições financeiras (ex.: compra e venda de títulos públicos, administração das reservas internacionais). Resumo: CMN define, Bacen executa/supervisiona.',
    source: 'Título I, Capítulo I — Sistema Financeiro Nacional, páginas 22-24',
  },
  {
    keywords: ['bacen', 'cvm', 'diferença'],
    title: 'Bacen × CVM',
    answer:
      'O Bacen supervisiona as instituições financeiras e executa a política monetária/cambial. A CVM regula, desenvolve, controla e fiscaliza especificamente o mercado de títulos e valores mobiliários (ações, fundos, ofertas públicas). Se a questão envolve ações ou valores mobiliários, pense em CVM; se envolve moeda, crédito ou câmbio, pense em Bacen.',
    source: 'Título I, Capítulo I — Sistema Financeiro Nacional, páginas 23-24',
  },
  {
    keywords: ['susep', 'previc', 'diferença'],
    title: 'Susep × Previc',
    answer:
      'A Previc fiscaliza as entidades FECHADAS de previdência complementar (fundos de pensão, vinculados a uma empresa patrocinadora). A Susep fiscaliza seguros, previdência complementar ABERTA (acessível a qualquer pessoa física) e capitalização. Mnemônico: Previc = Pensão/fechada; Susep = Seguros + previdência aberta.',
    source: 'Título I, Capítulo I — Sistema Financeiro Nacional, páginas 25, 42-44',
  },
  {
    keywords: ['contraparte central', 'ccp'],
    title: 'Contraparte central (CCP)',
    answer:
      'A contraparte central é o papel exercido por uma câmara de compensação e liquidação quando ela se interpõe entre todas as partes de uma operação, liquidando pelo saldo multilateral e GARANTINDO a liquidação mesmo que uma das partes não cumpra sua obrigação. Para isso, mantém mecanismos e salvaguardas adequados. É diferente da central depositária, que cuida da guarda e titularidade dos ativos.',
    source: 'Título I, Capítulo I — Sistema Financeiro Nacional, página 38',
  },
  {
    keywords: ['eapc', 'efpc', 'previdência aberta', 'previdência fechada'],
    title: 'EAPC × EFPC',
    answer:
      'EAPC (entidade aberta de previdência complementar): sociedade anônima, acessível a qualquer pessoa física, fiscalizada pela Susep. EFPC (entidade fechada de previdência complementar / fundo de pensão): fundação de direito privado ou sociedade civil sem fins lucrativos, restrita aos empregados/associados de um patrocinador ou instituidor específico, fiscalizada pela Previc.',
    source: 'Título I, Capítulo I — Sistema Financeiro Nacional, páginas 43-44',
  },
];

function keywordsMatch(query, keywords) {
  const q = query.toLowerCase();
  return keywords.every((k) => q.includes(k)) || keywords.filter((k) => q.includes(k)).length >= keywords.length - 1;
}

function sanitizeFtsQuery(q) {
  return q
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .map((term) => `"${term.replace(/"/g, '')}"*`)
    .join(' OR ');
}

router.post('/ask', (req, res) => {
  const { question } = req.body;
  if (!question || question.trim().length < 3) {
    return res.status(400).json({ error: 'Envie uma pergunta.' });
  }

  const curated = CURATED.find((c) => keywordsMatch(question, c.keywords));
  if (curated) {
    return res.json({
      mode: 'curated',
      title: curated.title,
      answer: curated.answer,
      source: curated.source,
    });
  }

  const ftsQuery = sanitizeFtsQuery(question);
  if (!ftsQuery) {
    return res.json({
      mode: 'not_found',
      answer: 'Este conteúdo não foi localizado no Guia Por Dentro da B3 fornecido.',
    });
  }

  const rows = db
    .prepare(
      `SELECT gs.section_name, gs.page_start,
        snippet(guide_sections_fts, 1, '**', '**', '…', 40) as snippet
       FROM guide_sections_fts
       JOIN guide_sections gs ON gs.id = guide_sections_fts.rowid
       WHERE guide_sections_fts MATCH ?
       ORDER BY rank
       LIMIT 3`
    )
    .all(ftsQuery);

  if (rows.length === 0) {
    return res.json({
      mode: 'not_found',
      answer: 'Este conteúdo não foi localizado no Guia Por Dentro da B3 fornecido.',
    });
  }

  res.json({
    mode: 'retrieved',
    answer:
      'Não há um modelo de IA generativa conectado nesta instalação local — esta resposta foi montada a partir de uma busca direta no texto do Guia Por Dentro da B3. Trechos relevantes encontrados:',
    excerpts: rows.map((r) => ({ page: r.page_start, snippet: r.snippet })),
  });
});
