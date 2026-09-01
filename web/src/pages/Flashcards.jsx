import { useEffect, useState } from 'react'
import { api } from '../lib/api'

const DIFFICULTY_LABEL = { facil: '🟢 Fácil', medio: '🟡 Médio', dificil: '🔴 Difícil', prova: '🟣 Nível prova' }
const LIST_PAGE_SIZE = 30

export default function Flashcards() {
  const [cards, setCards] = useState(null)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(0)
  const [view, setView] = useState('study') // 'study' | 'list'
  const [listSearch, setListSearch] = useState('')
  const [listPage, setListPage] = useState(0)

  useEffect(() => {
    api.get('/flashcards').then(setCards)
  }, [])

  useEffect(() => { setListPage(0) }, [listSearch])

  if (!cards) return <div className="card">Carregando flashcards…</div>
  if (cards.length === 0) return <div className="card">Nenhum flashcard cadastrado ainda para este capítulo.</div>

  function goTo(i) {
    setIndex(Math.max(0, Math.min(cards.length - 1, i)))
    setFlipped(false)
  }

  function openCard(originalIndex) {
    goTo(originalIndex)
    setView('study')
  }

  const ViewToggle = (
    <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
      <button
        className={'chip' + (view === 'study' ? ' active' : '')}
        onClick={() => setView('study')}
      >
        🃏 Estudar
      </button>
      <button
        className={'chip' + (view === 'list' ? ' active' : '')}
        onClick={() => setView('list')}
      >
        📋 Ver todos ({cards.length})
      </button>
    </div>
  )

  if (view === 'list') {
    const indexed = cards.map((c, i) => ({ ...c, originalIndex: i }))
    const filtered = listSearch
      ? indexed.filter((c) => c.front.toLowerCase().includes(listSearch.toLowerCase()))
      : indexed
    const totalPages = Math.max(1, Math.ceil(filtered.length / LIST_PAGE_SIZE))
    const pageItems = filtered.slice(listPage * LIST_PAGE_SIZE, (listPage + 1) * LIST_PAGE_SIZE)

    return (
      <div>
        <h1>🃏 Flashcards</h1>
        {ViewToggle}

        <div className="card">
          <input
            type="text"
            placeholder="Buscar na frente do cartão…"
            value={listSearch}
            onChange={(e) => setListSearch(e.target.value)}
            style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid var(--border)' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '14px 0' }}>
          <p className="small muted" style={{ margin: 0 }}>{filtered.length} cartão(ões)</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="btn btn-ghost" disabled={listPage === 0} onClick={() => setListPage((p) => Math.max(0, p - 1))}>← Anterior</button>
            <span className="small muted">Página {listPage + 1} de {totalPages}</span>
            <button className="btn btn-ghost" disabled={listPage >= totalPages - 1} onClick={() => setListPage((p) => Math.min(totalPages - 1, p + 1))}>Próxima →</button>
          </div>
        </div>

        <div className="grid grid-2">
          {pageItems.map((c) => (
            <button
              key={c.id}
              className="card"
              style={{ textAlign: 'left', cursor: 'pointer' }}
              onClick={() => openCard(c.originalIndex)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span className="small muted">#{c.originalIndex + 1}</span>
                <span className="small muted">{DIFFICULTY_LABEL[c.difficulty] ?? c.difficulty}</span>
              </div>
              <p style={{ fontWeight: 600 }}>{c.front}</p>
            </button>
          ))}
        </div>

        {pageItems.length === 0 && (
          <p className="muted small" style={{ padding: 18 }}>Nenhum flashcard encontrado com esse termo.</p>
        )}
      </div>
    )
  }

  if (index >= cards.length) {
    return (
      <div>
        {ViewToggle}
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 40 }}>🃏</div>
          <h1>Revisão concluída</h1>
          <p className="muted">Você revisou {done} flashcards.</p>
          <button className="btn btn-primary" onClick={() => { setIndex(0); setDone(0); setFlipped(false) }}>Revisar novamente</button>
        </div>
      </div>
    )
  }

  const card = cards[index]

  async function rate(rating) {
    await api.post(`/flashcards/${card.id}/review`, { rating })
    setDone((d) => d + 1)
    setFlipped(false)
    setIndex((i) => i + 1)
  }

  return (
    <div>
      <h1>🃏 Flashcards</h1>
      {ViewToggle}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <button
          className="btn btn-ghost"
          disabled={index === 0}
          onClick={() => goTo(index - 1)}
          aria-label="Cartão anterior"
        >
          ← Anterior
        </button>
        <p className="muted small" style={{ margin: 0 }}>{index + 1} / {cards.length}</p>
        <button
          className="btn btn-ghost"
          disabled={index === cards.length - 1}
          onClick={() => goTo(index + 1)}
          aria-label="Próximo cartão"
        >
          Próximo →
        </button>
      </div>

      <div className="card flashcard" onClick={() => setFlipped((f) => !f)}>
        <div>
          <p className="small muted" style={{ marginBottom: 10 }}>{flipped ? 'VERSO' : 'FRENTE'} · toque para virar</p>
          <p>{flipped ? card.back : card.front}</p>
        </div>
      </div>

      {flipped && (
        <div className="card">
          <p className="small muted">Como foi lembrar disso?</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button className="btn btn-block" style={{ background: 'var(--danger-soft)', color: 'var(--danger)' }} onClick={() => rate('dificil')}>🔴 Difícil</button>
            <button className="btn btn-block" style={{ background: 'var(--warning-soft)', color: '#a8710f' }} onClick={() => rate('medio')}>🟡 Médio</button>
            <button className="btn btn-block" style={{ background: 'var(--success-soft)', color: 'var(--success)' }} onClick={() => rate('facil')}>🟢 Fácil</button>
          </div>
        </div>
      )}
    </div>
  )
}
