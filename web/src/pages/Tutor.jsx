import { useState } from 'react'
import { api } from '../lib/api'

const SUGGESTIONS = [
  'Qual a diferença entre CMN e Bacen?',
  'Explique contraparte central.',
  'Qual a diferença entre Susep e Previc?',
  'Qual a diferença entre EAPC e EFPC?',
]

export default function Tutor() {
  const [question, setQuestion] = useState('')
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)

  async function ask(q) {
    const text = q ?? question
    if (!text.trim()) return
    setLoading(true)
    setQuestion('')
    try {
      const result = await api.post('/tutor/ask', { question: text })
      setHistory((h) => [...h, { question: text, result }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>🧑‍🏫 Professor PQO</h1>
      <p className="muted">Pergunte sobre conceitos do Guia Por Dentro da B3. As respostas priorizam o conteúdo do próprio Guia.</p>

      <div className="card">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          {SUGGESTIONS.map((s) => (
            <button key={s} className="chip" onClick={() => ask(s)}>{s}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && ask()}
            placeholder="Digite sua pergunta…"
            style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid var(--border)' }}
          />
          <button className="btn btn-primary" disabled={loading} onClick={() => ask()}>Perguntar</button>
        </div>
      </div>

      {history.slice().reverse().map((h, i) => (
        <div key={i} className="card">
          <p className="muted small">Você perguntou:</p>
          <p style={{ fontWeight: 700 }}>{h.question}</p>
          {h.result.title && <p className="badge badge-facil" style={{ marginBottom: 8 }}>{h.result.title}</p>}
          <p>{h.result.answer}</p>
          {h.result.excerpts && h.result.excerpts.map((e, j) => (
            <div key={j} className="card" style={{ background: 'var(--bg)' }}>
              <p className="small" dangerouslySetInnerHTML={{ __html: e.snippet }} />
              <p className="muted small">Página {e.page}</p>
            </div>
          ))}
          {h.result.source && <p className="muted small">FONTE: {h.result.source}</p>}
        </div>
      ))}
    </div>
  )
}
