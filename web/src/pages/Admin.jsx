import { useEffect, useState } from 'react'
import { api } from '../lib/api'

const STATUS_OPTIONS = ['rascunho', 'em_revisao', 'aprovada', 'arquivada']

export default function Admin() {
  const [stats, setStats] = useState(null)
  const [questions, setQuestions] = useState([])
  const [filters, setFilters] = useState({ status: '', difficulty: '', missing_source: '' })
  const [duplicates, setDuplicates] = useState([])

  function load() {
    const params = new URLSearchParams(Object.entries(filters).filter(([, v]) => v))
    api.get(`/admin/questions?${params.toString()}`).then(setQuestions)
  }

  useEffect(() => {
    api.get('/admin/stats').then(setStats)
    api.get('/admin/questions/duplicates').then(setDuplicates)
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(load, [filters])

  async function updateStatus(id, status) {
    await api.put(`/admin/questions/${id}`, { status })
    load()
  }

  async function remove(id) {
    if (!confirm('Excluir esta questão permanentemente?')) return
    await api.delete(`/admin/questions/${id}`)
    load()
  }

  return (
    <div>
      <h1>⚙️ Painel administrativo</h1>

      {stats && (
        <div className="card">
          <h2>Visão geral</h2>
          <p className="small">Total de questões: <strong>{stats.total}</strong></p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
            {stats.byDifficulty.map((d) => (
              <span key={d.difficulty} className="chip">{d.difficulty}: {d.n}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
            {stats.byStatus.map((d) => (
              <span key={d.status} className="chip">{d.status}: {d.n}</span>
            ))}
          </div>
        </div>
      )}

      {duplicates.length > 0 && (
        <div className="card" style={{ background: 'var(--warning-soft)' }}>
          <h2>⚠️ Possíveis duplicatas</h2>
          {duplicates.map((d, i) => (
            <p key={i} className="small">{d.statement.slice(0, 80)}… (ids: {d.ids})</p>
          ))}
        </div>
      )}

      <div className="card">
        <h2>Filtros</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
            <option value="">Todos os status</option>
            {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={filters.difficulty} onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}>
            <option value="">Todas dificuldades</option>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
            <option value="prova">Nível prova</option>
          </select>
          <label className="small">
            <input
              type="checkbox"
              checked={filters.missing_source === 'true'}
              onChange={(e) => setFilters({ ...filters, missing_source: e.target.checked ? 'true' : '' })}
            /> Sem página de origem
          </label>
        </div>
      </div>

      {questions.map((q) => (
        <div key={q.id} className="card">
          <div className="top-bar">
            <span className="small muted">#{q.id} · {q.difficulty} · {q.source_chapter}</span>
            <select value={q.status} onChange={(e) => updateStatus(q.id, e.target.value)}>
              {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <p style={{ fontWeight: 600 }}>{q.statement}</p>
          <p className="small muted">Fonte: p. {q.source_page || '—'}</p>
          <button className="btn btn-ghost" onClick={() => remove(q.id)}>Excluir</button>
        </div>
      ))}
    </div>
  )
}
