import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts'
import { api } from '../lib/api'

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return `${h}h ${m}min`
}

export default function Dashboard() {
  const [summary, setSummary] = useState(null)
  const [weekly, setWeekly] = useState([])

  useEffect(() => {
    api.get('/dashboard/summary').then(setSummary)
    api.get('/dashboard/weekly-evolution').then(setWeekly)
  }, [])

  if (!summary) return <div className="card">Carregando…</div>

  const withData = summary.chapter_performance.filter((c) => c.total_answered > 0)
  const mastered = withData.filter((c) => c.percent >= 80)
  const critical = withData.filter((c) => c.percent < 60)
  const chartData = withData
    .slice()
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 8)
    .map((c) => ({ name: c.name.length > 18 ? c.name.slice(0, 18) + '…' : c.name, percent: c.percent }))

  return (
    <div>
      <h1>📊 PQO B3 — Progresso</h1>

      <div className="stat-row card">
        <div className="stat"><span className="value">{summary.progress_percent}%</span><span className="label">Progresso geral</span></div>
        <div className="stat"><span className="value">{summary.questions_answered}</span><span className="label">Questões respondidas</span></div>
        <div className="stat"><span className="value">{summary.correct}</span><span className="label">Acertos</span></div>
        <div className="stat"><span className="value">{summary.wrong}</span><span className="label">Erros</span></div>
        <div className="stat"><span className="value">🔥 {summary.streak_days}</span><span className="label">Sequência</span></div>
        <div className="stat"><span className="value">⏱️ {formatTime(summary.time_studied_seconds)}</span><span className="label">Tempo estudado</span></div>
      </div>

      <div className="card">
        <h2>Evolução semanal</h2>
        {weekly.length === 0 ? <p className="muted small">Sem dados suficientes ainda.</p> : (
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={weekly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e2f1" />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#5b2a86" strokeWidth={3} name="Taxa de acerto (%)" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="card">
        <h2>Assuntos críticos (menor aproveitamento)</h2>
        {chartData.length === 0 ? <p className="muted small">Responda algumas questões para ver seu desempenho por assunto.</p> : (
          <ResponsiveContainer width="100%" height={Math.max(220, chartData.length * 34)}>
            <BarChart data={chartData} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="percent" fill="#e23f4f" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2>🟢 Assuntos dominados</h2>
          {mastered.length === 0 ? <p className="muted small">Nenhum ainda.</p> : mastered.map((c) => (
            <p key={c.id} className="small">✔ {c.name} — {c.percent}%</p>
          ))}
        </div>
        <div className="card">
          <h2>🔴 Assuntos críticos</h2>
          {critical.length === 0 ? <p className="muted small">Nenhum ainda.</p> : critical.map((c) => (
            <p key={c.id} className="small">⚠ {c.name} — {c.percent}%</p>
          ))}
        </div>
      </div>
    </div>
  )
}
