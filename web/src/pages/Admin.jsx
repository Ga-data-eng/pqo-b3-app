import { useEffect, useState } from 'react'
import { api } from '../lib/api'

const STATUS_OPTIONS = ['rascunho', 'em_revisao', 'aprovada', 'arquivada']
const PAGE_SIZE = 25

export default function Admin() {
  const [stats, setStats] = useState(null)
  const [questions, setQuestions] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ status: '', difficulty: '', missing_source: '' })
  const [duplicates, setDuplicates] = useState([])
  const [loading, setLoading] = useState(true)

  function load() {
    setLoading(true)
    const params = new URLSearchParams(Object.entries(filters).filter(([, v]) => v))
    if (search) params.set('q', search)
    params.set('limit', PAGE_SIZE)
    params.set('offset', page * PAGE_SIZE)
    api.get(`/admin/questions?${params.toString()}`).then((r) => {
      setQuestions(r.items)
      setTotal(r.total)
      setLoading(false)
    })
  }

  useEffect(() => {
    api.get('/admin/stats').then(setStats)
    api.get('/admin/questions/duplicates').then(setDuplicates)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(load, [filters, search, page])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setPage(0) }, [filters, search])

  async function updateStatus(id, status) {
    await api.put(`/admin/questions/${id}`, { status })
    load()
  }

  async function remove(id) {
    if (!confirm('Excluir esta questão permanentemente?')) return
    await api.delete(`/admin/questions/${id}`)
    load()
  }

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

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
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Buscar no enunciado…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid var(--border)', minWidth: 220 }}
          />
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

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px' }}>
          <h2 style={{ margin: 0 }}>Questões {loading ? '…' : `(${total})`}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="btn btn-ghost" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>← Anterior</button>
            <span className="small muted">Página {page + 1} de {totalPages}</span>
            <button className="btn btn-ghost" disabled={page >= totalPages - 1} onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}>Próxima →</button>
          </div>
        </div>

        {questions.map((q) => (
          <div key={q.id} className="admin-row">
            <span className={`badge badge-${q.difficulty}`}>{q.difficulty}</span>
            <span className="admin-row-statement" title={q.statement}>#{q.id} · {q.statement}</span>
            <span className="small muted admin-row-source">p. {q.source_page || '—'}</span>
            <select value={q.status} onChange={(e) => updateStatus(q.id, e.target.value)}>
              {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <button className="btn btn-ghost" onClick={() => remove(q.id)}>Excluir</button>
          </div>
        ))}

        {!loading && questions.length === 0 && (
          <p className="muted small" style={{ padding: 18 }}>Nenhuma questão encontrada com esses filtros.</p>
        )}
      </div>
    </div>
  )
}
