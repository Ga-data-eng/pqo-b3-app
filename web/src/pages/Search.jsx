import { useState } from 'react'
import { api } from '../lib/api'

export default function Search() {
  const [q, setQ] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  async function run() {
    if (q.trim().length < 2) return
    setLoading(true)
    try {
      const r = await api.get(`/search?q=${encodeURIComponent(q)}`)
      setResults(r)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>🔎 Pesquisar no Guia B3</h1>
      <div className="card">
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && run()}
            placeholder='Ex.: "contraparte central"'
            style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid var(--border)' }}
          />
          <button className="btn btn-primary" disabled={loading} onClick={run}>Buscar</button>
        </div>
      </div>

      {results && results.length === 0 && (
        <div className="card">Este conteúdo não foi localizado no Guia Por Dentro da B3 fornecido.</div>
      )}

      {results && results.map((r) => (
        <div key={r.id} className="card">
          <p className="muted small">Página {r.page}</p>
          <p dangerouslySetInnerHTML={{ __html: r.snippet }} />
        </div>
      ))}
    </div>
  )
}
