import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

const STATUS_LABEL = {
  dominado: 'Dominado',
  atencao: 'Atenção',
  critico: 'Crítico',
  nao_iniciado: 'Não iniciado',
}

export default function KnowledgeMap() {
  const [rows, setRows] = useState(null)

  useEffect(() => {
    api.get('/dashboard/knowledge-map').then(setRows)
  }, [])

  if (!rows) return <div className="card">Carregando mapa…</div>

  const byTitle = {}
  rows.forEach((r) => {
    const key = `${r.title_number} — ${r.title_name}`
    byTitle[key] = byTitle[key] || []
    byTitle[key].push(r)
  })

  return (
    <div>
      <h1>🗺️ Mapa de conhecimento</h1>
      <p className="muted">As cores mudam automaticamente conforme seu desempenho em cada capítulo.</p>

      {Object.entries(byTitle).map(([title, chapters]) => (
        <div key={title} className="card">
          <h2>{title}</h2>
          {chapters.map((c) => (
            <Link
              key={c.id}
              to={`/estudar/quiz?chapter_id=${c.id}`}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0', borderTop: '1px solid var(--border)',
              }}
            >
              <span><span className={`dot dot-${c.status}`} style={{ marginRight: 8 }} />{c.name}</span>
              <span className="small muted">{c.percent != null ? `${c.percent}%` : STATUS_LABEL[c.status]}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
