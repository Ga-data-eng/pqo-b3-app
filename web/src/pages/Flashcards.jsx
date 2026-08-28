import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function Flashcards() {
  const [cards, setCards] = useState(null)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(0)

  useEffect(() => {
    api.get('/flashcards').then(setCards)
  }, [])

  if (!cards) return <div className="card">Carregando flashcards…</div>
  if (cards.length === 0) return <div className="card">Nenhum flashcard cadastrado ainda para este capítulo.</div>

  if (index >= cards.length) {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 40 }}>🃏</div>
        <h1>Revisão concluída</h1>
        <p className="muted">Você revisou {done} flashcards.</p>
        <button className="btn btn-primary" onClick={() => { setIndex(0); setDone(0); setFlipped(false) }}>Revisar novamente</button>
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
      <p className="muted small">{index + 1} / {cards.length}</p>

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
