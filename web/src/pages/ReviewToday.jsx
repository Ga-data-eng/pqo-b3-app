import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

export default function ReviewToday() {
  const [data, setData] = useState(null)
  const [plan, setPlan] = useState(null)

  useEffect(() => {
    api.get('/review/today').then(setData)
    api.get('/review/plan').then((p) => setPlan(p.plan))
  }, [])

  if (!data) return <div className="card">Carregando revisão…</div>

  return (
    <div>
      <h1>REVISAR HOJE</h1>

      <Section title="🔴 Prioridade alta" items={data.alta} />
      <Section title="🟡 Revisar" items={data.media} />
      <Section title="🟢 Dominado" items={data.dominado} collapsedByDefault />

      {plan && plan.length > 0 && (
        <div className="card">
          <h2>Plano de revisão automático</h2>
          <ul>
            {plan.map((p, i) => (
              <li key={i}>{p.question_count} questões — {p.chapter} ({p.priority === 'alta' ? 'prioridade alta' : 'revisar'})</li>
            ))}
          </ul>
          <Link to="/erros" className="btn btn-primary">Começar revisão</Link>
        </div>
      )}
    </div>
  )
}

function Section({ title, items, collapsedByDefault }) {
  const [open, setOpen] = useState(!collapsedByDefault)
  return (
    <div className="card">
      <button style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: 0 }} onClick={() => setOpen((o) => !o)}>
        <h2>{title} ({items.length}) {open ? '▲' : '▼'}</h2>
      </button>
      {open && (
        items.length === 0 ? (
          <p className="muted small">Nada por aqui.</p>
        ) : (
          items.map((it) => (
            <div key={it.id} style={{ padding: '8px 0', borderTop: '1px solid var(--border)' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{it.statement}</p>
              <p className="muted small" style={{ margin: '2px 0 0' }}>
                {it.chapter_name} · errou {it.wrong_count}x
              </p>
            </div>
          ))
        )
      )}
    </div>
  )
}
