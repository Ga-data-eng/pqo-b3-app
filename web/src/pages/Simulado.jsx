import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function Simulado() {
  const [total, setTotal] = useState(50)
  const [starting, setStarting] = useState(false)
  const navigate = useNavigate()

  async function start() {
    setStarting(true)
    try {
      const sim = await api.post('/simulations', { total_questions: total })
      navigate(`/simulado/${sim.id}`)
    } finally {
      setStarting(false)
    }
  }

  return (
    <div>
      <h1>🎓 Simulado PQO</h1>
      <div className="card">
        <p>Experiência semelhante à prova real: questões e alternativas embaralhadas, cronômetro, navegação livre entre questões, marcação para revisão e resultado apenas ao final.</p>
        <div style={{ margin: '18px 0' }}>
          <label className="small muted">Número de questões</label>
          <div style={{ display: 'flex', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
            {[20, 30, 50, 70].map((n) => (
              <button key={n} className={'chip' + (total === n ? ' active' : '')} onClick={() => setTotal(n)}>
                {n} questões
              </button>
            ))}
          </div>
        </div>
        <button className="btn btn-primary btn-block" disabled={starting} onClick={start}>
          {starting ? 'Preparando simulado…' : 'Iniciar simulado'}
        </button>
      </div>
    </div>
  )
}
