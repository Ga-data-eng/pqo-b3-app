import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api } from '../lib/api'
import { ExplanationDetails } from './Quiz.jsx'

export default function SimuladoResult() {
  const { id } = useParams()
  const [sim, setSim] = useState(null)
  const [showReview, setShowReview] = useState(false)

  useEffect(() => {
    api.get(`/simulations/${id}`).then(setSim)
  }, [id])

  if (!sim) return <div className="card">Carregando resultado…</div>

  const pct = Math.round(sim.score_percent)
  const mm = Math.floor(sim.duration_seconds / 60)

  return (
    <div>
      <h1>RESULTADO</h1>
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2.4rem', fontWeight: 800, color: pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>
          {pct}%
        </div>
        <p className="muted">Acertos: {sim.correct_answers}/{sim.total_questions} · Tempo: {mm} minutos</p>
      </div>

      <PerformanceByChapter simId={id} />

      <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <Link to="/erros" className="btn btn-secondary">GERAR PLANO DE REVISÃO</Link>
        <button className="btn btn-ghost" onClick={() => setShowReview((v) => !v)}>
          {showReview ? 'Ocultar gabarito comentado' : 'Ver gabarito comentado'}
        </button>
      </div>

      {showReview && (
        <div style={{ marginTop: 16 }}>
          {sim.questions.map((q, i) => (
            <div key={q.question_id} className="card">
              <div className="top-bar">
                <span className="muted small">Questão {i + 1}</span>
                <span className={q.is_correct ? 'badge badge-facil' : 'badge badge-dificil'}>
                  {q.is_correct ? '✅ Correto' : '❌ Incorreto'}
                </span>
              </div>
              <p style={{ fontWeight: 600 }}>{q.statement}</p>
              {q.options.map((opt) => (
                <div
                  key={opt.key}
                  className={
                    'option-btn' +
                    (opt.key === q.correct_option ? ' correct' : opt.key === q.selected_option ? ' incorrect' : '')
                  }
                >
                  <span className="option-key">{opt.key}</span>
                  <span>{opt.text}</span>
                </div>
              ))}
              <ExplanationDetails question={q} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function PerformanceByChapter({ simId }) {
  const [result, setResult] = useState(null)
  useEffect(() => {
    // O resultado consolidado (performance por matéria) vem do POST /finish;
    // como já finalizado, recomputamos localmente a partir das questões.
    api.get(`/simulations/${simId}`).then((sim) => {
      const byChapter = {}
      sim.questions.forEach((q) => {
        const name = q.chapter?.name ?? 'Outros'
        if (!byChapter[name]) byChapter[name] = { correct: 0, total: 0 }
        byChapter[name].total += 1
        if (q.is_correct) byChapter[name].correct += 1
      })
      const rows = Object.entries(byChapter).map(([chapter, s]) => ({
        chapter,
        percent: Math.round((s.correct / s.total) * 100),
        correct: s.correct,
        total: s.total,
      }))
      setResult(rows.sort((a, b) => a.percent - b.percent))
    })
  }, [simId])

  if (!result) return null

  return (
    <div className="card">
      <h2>DESEMPENHO POR MATÉRIA</h2>
      {result.map((r) => (
        <div key={r.chapter} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
            <span>{r.chapter}</span>
            <span className="muted">{r.percent}% ({r.correct}/{r.total})</span>
          </div>
          <div className="progress-bar" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: `${r.percent}%`, background: r.percent < 70 ? 'var(--danger)' : undefined }} />
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: 16 }}>PRINCIPAIS PONTOS PARA REVISAR</h2>
      <ol>
        {result.filter((r) => r.percent < 75).slice(0, 5).map((r) => (
          <li key={r.chapter}>{r.chapter}</li>
        ))}
        {result.filter((r) => r.percent < 75).length === 0 && <li className="muted">Nenhum ponto crítico — bom trabalho!</li>}
      </ol>
    </div>
  )
}
