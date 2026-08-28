import { useEffect, useRef, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { api } from '../lib/api'

const DIFF_LABEL = { facil: '🟢 Fácil', medio: '🟡 Médio', dificil: '🔴 Difícil', prova: '🟣 Nível prova' }

export default function Quiz({ mode, title, limit = 10, timed = false }) {
  const [params] = useSearchParams()
  const [session, setSession] = useState(null)
  const [questions, setQuestions] = useState(null)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(null) // {is_correct, correct_option, xp_earned, new_achievements}
  const [finished, setFinished] = useState(false)
  const [stats, setStats] = useState({ correct: 0, total: 0, xp: 0 })
  const [secondsLeft, setSecondsLeft] = useState(timed ? 20 : null)
  const startRef = useRef(Date.now())
  const timerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    async function init() {
      const s = await api.post('/sessions', { mode })
      const q = await api.get(
        `/questions?mode=${mode}&limit=${limit}` +
          (params.get('chapter_id') ? `&chapter_id=${params.get('chapter_id')}` : '') +
          (params.get('topic_id') ? `&topic_id=${params.get('topic_id')}` : '')
      )
      if (!cancelled) {
        setSession(s)
        setQuestions(q)
      }
    }
    init()
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, limit])

  useEffect(() => {
    if (!timed || answered || !questions) return
    setSecondsLeft(20)
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timerRef.current)
          submit(null)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, questions])

  if (!questions) return <div className="card">Carregando questões…</div>

  if (questions.length === 0) {
    return (
      <div className="card">
        <h2>Nada por aqui ainda</h2>
        <p className="muted">Não encontramos questões para este modo agora. Que tal tentar o Treino rápido?</p>
        <Link to="/treino" className="btn btn-primary">Ir para Treino rápido</Link>
      </div>
    )
  }

  const q = questions[index]

  async function submit(key) {
    if (answered) return
    clearInterval(timerRef.current)
    setSelected(key)
    const timeSpent = Math.round((Date.now() - startRef.current) / 1000)
    const result = await api.post(`/sessions/${session.id}/answer`, {
      question_id: q.id,
      selected_option: key,
      time_spent_seconds: timeSpent,
    })
    setAnswered(result)
    setStats((s) => ({
      correct: s.correct + (result.is_correct ? 1 : 0),
      total: s.total + 1,
      xp: s.xp + result.xp_earned,
    }))
  }

  async function next() {
    if (index + 1 >= questions.length) {
      await api.post(`/sessions/${session.id}/finish`)
      setFinished(true)
      return
    }
    setIndex(index + 1)
    setSelected(null)
    setAnswered(null)
    startRef.current = Date.now()
  }

  if (finished) {
    const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 44 }}>{pct >= 70 ? '🎉' : '💪'}</div>
        <h1>Sessão concluída</h1>
        <p className="muted">{title}</p>
        <div className="stat-row" style={{ justifyContent: 'center', margin: '18px 0' }}>
          <div className="stat"><span className="value">{stats.correct}/{stats.total}</span><span className="label">Acertos</span></div>
          <div className="stat"><span className="value">{pct}%</span><span className="label">Aproveitamento</span></div>
          <div className="stat"><span className="value">+{stats.xp}</span><span className="label">XP ganho</span></div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-secondary">Ir para o início</Link>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>Praticar novamente</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="top-bar">
        <div>
          <h1>{title}</h1>
          <p className="muted small">{q.chapter?.title_name} · {q.chapter?.name}</p>
        </div>
        {timed && !answered && <div className="badge badge-dificil">⏱️ {secondsLeft}s</div>}
      </div>

      <div className="progress-bar" style={{ marginBottom: 16 }}>
        <div className="progress-bar-fill" style={{ width: `${((index) / questions.length) * 100}%` }} />
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span className={`badge badge-${q.difficulty}`}>{DIFF_LABEL[q.difficulty]}</span>
          <span className="muted small">{index + 1} / {questions.length}</span>
        </div>
        <p style={{ fontWeight: 600, fontSize: '1.05rem' }}>{q.statement}</p>

        {q.options.map((opt) => {
          let cls = 'option-btn'
          if (answered) {
            if (opt.key === q.correct_option) cls += ' correct'
            else if (opt.key === selected) cls += ' incorrect'
          } else if (opt.key === selected) {
            cls += ' selected'
          }
          return (
            <button key={opt.key} className={cls} disabled={!!answered} onClick={() => submit(opt.key)}>
              <span className="option-key">{opt.key}</span>
              <span>{opt.text}</span>
            </button>
          )
        })}

        {answered && (
          <>
            <div className={`explanation-block ${answered.is_correct ? 'correct' : 'incorrect'}`}>
              <p style={{ fontWeight: 800, margin: 0 }}>
                {answered.is_correct ? '✅ CORRETO!' : `❌ INCORRETO — Resposta correta: ${answered.correct_option}`}
              </p>
            </div>

            <ExplanationDetails question={q} />

            <button className="btn btn-primary btn-block" style={{ marginTop: 14 }} onClick={next}>
              {index + 1 >= questions.length ? 'Finalizar' : 'Próxima questão'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export function ExplanationDetails({ question }) {
  const [mode, setMode] = useState('padrao')
  return (
    <div style={{ marginTop: 14 }}>
      <h2 style={{ fontSize: '1rem' }}>EXPLICAÇÃO</h2>
      <p>{question.explanation}</p>

      <h2 style={{ fontSize: '1rem' }}>POR QUE AS OUTRAS ESTÃO ERRADAS?</h2>
      {question.options.map((opt) => (
        <p key={opt.key} className="small">
          <strong>{opt.key})</strong> {question.explanations[opt.key]}
        </p>
      ))}

      {question.common_trap && (
        <div className="card" style={{ background: 'var(--warning-soft)', borderColor: 'var(--warning)' }}>
          <strong>⚠️ PEGADINHA DE PROVA</strong>
          <p className="small" style={{ margin: '4px 0 0' }}>{question.common_trap}</p>
        </div>
      )}

      <div className="card" style={{ background: 'var(--primary-soft)' }}>
        <strong>PARA A PROVA</strong>
        <p className="small" style={{ margin: '4px 0 0' }}>{question.exam_tip}</p>
      </div>

      <p className="small muted" style={{ marginTop: 10 }}>
        FONTE: {question.source.title} — {question.source.chapter}
        {question.source.section ? ` — ${question.source.section}` : ''}
        {question.source.page ? ` — p. ${question.source.page}` : ''}
      </p>

      <details style={{ marginTop: 10 }}>
        <summary className="small" style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 700 }}>
          💡 Explicar de outra forma / dar exemplo
        </summary>
        <div className="small muted" style={{ marginTop: 8 }}>
          <p><strong>Em resumo simples:</strong> {question.exam_tip}</p>
          <p><strong>Como lembrar:</strong> {question.common_trap ?? 'Releia a explicação principal destacando o verbo-chave (quem "normatiza" x quem "executa" x quem "fiscaliza").'}</p>
        </div>
      </details>
    </div>
  )
}
