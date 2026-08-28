import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function Onboarding({ onDone }) {
  const [certs, setCerts] = useState([])
  const [selected, setSelected] = useState(null)
  const [name, setName] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    api.get('/meta/certifications').then(setCerts)
  }, [])

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: '48px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ fontSize: 42 }}>📈</div>
        <h1>Bem-vindo(a) à preparação PQO B3</h1>
        <p className="muted">Vamos personalizar seus estudos com base no Guia Por Dentro da B3.</p>
      </div>

      <div className="card">
        <h2>Qual certificação você está estudando?</h2>
        <p className="muted small">Vamos priorizar os capítulos aplicáveis a ela, conforme o Quadro de Orientação de Estudos do Guia.</p>
        <div className="grid" style={{ marginTop: 14 }}>
          {certs.map((c) => (
            <button
              key={c.code}
              className={'option-btn' + (selected === c.code ? ' selected' : '')}
              onClick={() => setSelected(c.code)}
            >
              <span className="option-key">{selected === c.code ? '✓' : ''}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <label className="small muted">Como podemos te chamar?</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome (opcional)"
            style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--border)', marginTop: 6 }}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: 20 }}
          disabled={!selected || saving}
          onClick={async () => {
            setSaving(true)
            await onDone(selected, name || undefined)
          }}
        >
          {saving ? 'Preparando…' : 'Começar a estudar'}
        </button>
      </div>
    </div>
  )
}
