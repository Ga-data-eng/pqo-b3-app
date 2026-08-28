import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Bom dia'
  if (h < 18) return 'Boa tarde'
  return 'Boa noite'
}

const QUICK_ACTIONS = [
  { to: '/treino', icon: '🎯', label: 'Treino rápido' },
  { to: '/simulado', icon: '🎓', label: 'Simulado PQO' },
  { to: '/erros', icon: '❌', label: 'Revisar erros' },
  { to: '/flashcards', icon: '🃏', label: 'Flashcards' },
  { to: '/mapa', icon: '🗺️', label: 'Mapa de conhecimento' },
  { to: '/professor', icon: '🧑‍🏫', label: 'Professor PQO' },
]

export default function Home({ user }) {
  const [summary, setSummary] = useState(null)
  const [mission, setMission] = useState(null)
  const [weakChapter, setWeakChapter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let cancelled = false

    Promise.all([
      api.get('/dashboard/summary').then((s) => {
        if (cancelled) return
        setSummary(s)
        const withData = s.chapter_performance.filter((c) => c.total_answered > 0)
        if (withData.length > 0) {
          setWeakChapter(withData.sort((a, b) => a.percent - b.percent)[0])
        }
      }),
      api.get('/missions/today').then((m) => { if (!cancelled) setMission(m) }),
    ])
      .catch(() => { if (!cancelled) setLoadError(true) })
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  }, [])

  if (loading) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: 40 }}>
        <p className="muted">Carregando seus dados…</p>
        <p className="small muted" style={{ marginTop: 6 }}>
          Pode levar até um minuto na primeira vez (o servidor "acorda" após período de inatividade).
        </p>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: 40 }}>
        <p className="muted">Não foi possível carregar seus dados agora.</p>
        <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="top-bar">
        <div>
          <h1>{greeting()} {user?.name ? user.name.split(' ')[0] : ''} 👋</h1>
          <p className="muted">Preparação PQO — {user?.certification?.name}</p>
        </div>
      </div>

      <div className="stat-row card">
        <div className="stat">
          <span className="value">🔥 {summary?.streak_days ?? 0}</span>
          <span className="label">Sequência (dias)</span>
        </div>
        <div className="stat">
          <span className="value">⭐ {summary?.xp ?? 0}</span>
          <span className="label">XP — Nível {summary?.level_info?.level} ({summary?.level_info?.name})</span>
        </div>
        <div className="stat">
          <span className="value">{summary?.progress_percent ?? 0}%</span>
          <span className="label">Progresso geral</span>
        </div>
      </div>

      {mission && (
        <div className="card">
          <h2>🎯 Missão de hoje</h2>
          <MissionRow label={`Responder ${mission.target_questions} questões`} done={mission.done_questions} total={mission.target_questions} />
          <MissionRow label={`Revisar ${mission.target_review} erros`} done={mission.done_review} total={mission.target_review} />
          <MissionRow label={`Estudar ${mission.target_critical_topics} assuntos críticos`} done={mission.done_critical_topics} total={mission.target_critical_topics} />
        </div>
      )}

      {weakChapter && (
        <div className="card">
          <h2>Continuar estudando</h2>
          <p style={{ fontWeight: 700 }}>{weakChapter.name}</p>
          <p className="muted small">{weakChapter.title_name}</p>
          <div className="progress-bar" style={{ margin: '10px 0' }}>
            <div className="progress-bar-fill" style={{ width: `${weakChapter.percent}%` }} />
          </div>
          <p className="small muted">Progresso: {weakChapter.percent}%</p>
          <Link to="/estudar" className="btn btn-primary" style={{ marginTop: 8 }}>Continuar</Link>
        </div>
      )}

      <div className="grid grid-2" style={{ marginTop: 14 }}>
        {QUICK_ACTIONS.map((a) => (
          <Link key={a.to} to={a.to} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28 }}>{a.icon}</div>
            <div style={{ fontWeight: 700, marginTop: 6 }}>{a.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function MissionRow({ label, done, total }) {
  const pct = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
        <span>{label}</span>
        <span className="muted">{Math.min(done, total)}/{total}</span>
      </div>
      <div className="progress-bar" style={{ marginTop: 4 }}>
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
