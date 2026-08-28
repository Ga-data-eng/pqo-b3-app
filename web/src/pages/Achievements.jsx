import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function Achievements() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    api.get('/achievements').then(setItems)
  }, [])

  if (!items) return <div className="card">Carregando conquistas…</div>

  return (
    <div>
      <h1>🏆 Conquistas</h1>
      <div className="grid grid-2">
        {items.map((a) => (
          <div key={a.id} className="card" style={{ opacity: a.earned ? 1 : 0.5, textAlign: 'center' }}>
            <div style={{ fontSize: 32 }}>{a.icon}</div>
            <div style={{ fontWeight: 700, marginTop: 6 }}>{a.name}</div>
            <p className="small muted">{a.description}</p>
            {a.earned && <p className="small" style={{ color: 'var(--success)', fontWeight: 700 }}>Conquistado!</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
