import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function SimuladoRunner() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sim, setSim] = useState(null)
  const [index, setIndex] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [finishing, setFinishing] = useState(false)

  useEffect(() => {
    api.get(`/simulations/${id}`).then(setSim)
  }, [id])

  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000)
    return () => clearInterval(t)
  }, [])

  if (!sim) return <div className="card">Carregando simulado…</div>

  const q = sim.questions[index]
  const answeredCount = sim.questions.filter((qq) => qq.selected_option).length

  async function selectOption(key) {
    await api.put(`/simulations/${id}/answer`, { question_id: q.question_id, selected_option: key })
    setSim((prev) => ({
      ...prev,
      questions: prev.questions.map((qq) => (qq.question_id === q.question_id ? { ...qq, selected_option: key } : qq)),
    }))
  }

  async function toggleMark() {
    const marked = !q.marked_for_review
    await api.put(`/simulations/${id}/mark`, { question_id: q.question_id, marked })
    setSim((prev) => ({
      ...prev,
      questions: prev.questions.map((qq) => (qq.question_id === q.question_id ? { ...qq, marked_for_review: marked } : qq)),
    }))
  }

  async function finish() {
    if (!confirm('Finalizar o simulado? Você não poderá alterar as respostas depois.')) return
    setFinishing(true)
    await api.post(`/simulations/${id}/finish`)
    navigate(`/simulado/${id}/resultado`)
  }

  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0')
  const ss = String(elapsed % 60).padStart(2, '0')

  return (
    <div>
      <div className="top-bar">
        <h1>Simulado PQO</h1>
        <div className="badge badge-dificil">⏱️ {mm}:{ss}</div>
      </div>

      <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {sim.questions.map((qq, i) => {
          let style = { background: 'var(--border)' }
          if (qq.selected_option) style = { background: 'var(--success)', color: '#fff' }
          if (qq.marked_for_review) style = { background: 'var(--warning)', color: '#fff' }
          return (
            <button
              key={qq.question_id}
              onClick={() => setIndex(i)}
              style={{
                ...style,
                width: 30, height: 30, borderRadius: 8, border: i === index ? '2px solid var(--primary)' : 'none',
                fontSize: '0.75rem', fontWeight: 700,
              }}
            >
              {i + 1}
            </button>
          )
        })}
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="muted small">Questão {index + 1} de {sim.questions.length} · {q.chapter?.name}</span>
          <button className="chip" onClick={toggleMark}>{q.marked_for_review ? '🔖 Marcada' : '🏳️ Marcar p/ revisão'}</button>
        </div>
        <p style={{ fontWeight: 600, fontSize: '1.05rem', marginTop: 10 }}>{q.statement}</p>

        {q.options.map((opt) => (
          <button
            key={opt.key}
            className={'option-btn' + (q.selected_option === opt.key ? ' selected' : '')}
            onClick={() => selectOption(opt.key)}
          >
            <span className="option-key">{opt.key}</span>
            <span>{opt.text}</span>
          </button>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, gap: 8 }}>
          <button className="btn btn-ghost" disabled={index === 0} onClick={() => setIndex(index - 1)}>← Anterior</button>
          {index + 1 < sim.questions.length ? (
            <button className="btn btn-secondary" onClick={() => setIndex(index + 1)}>Próxima →</button>
          ) : (
            <span />
          )}
        </div>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <p className="muted small">{answeredCount} de {sim.questions.length} respondidas</p>
        <button className="btn btn-success btn-block" disabled={finishing} onClick={finish}>
          {finishing ? 'Finalizando…' : 'Finalizar simulado'}
        </button>
      </div>
    </div>
  )
}
