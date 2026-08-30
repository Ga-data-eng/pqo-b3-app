import { useState } from 'react'
import { api } from '../lib/api'

const inputStyle = {
  width: '100%',
  padding: 12,
  borderRadius: 10,
  border: '1px solid var(--border)',
  marginTop: 6,
}

export default function Login({ onAuthenticated }) {
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSaving(true)
    try {
      const user =
        mode === 'login'
          ? await api.post('/auth/login', { email, password })
          : await api.post('/auth/register', { name, email, password })
      onAuthenticated(user)
    } catch (err) {
      setError(err.message || 'Não foi possível concluir. Tente novamente.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div style={{ maxWidth: 440, margin: '0 auto', padding: '48px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <span className="mark-lg" style={{ marginBottom: 14, display: 'inline-flex' }}>[B<sup>3</sup>]</span>
        <h1>Preparação PQO B3</h1>
        <p className="muted">
          {mode === 'login' ? 'Entre para continuar seus estudos.' : 'Crie sua conta para começar a estudar.'}
        </p>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div style={{ marginBottom: 14 }}>
              <label className="small muted">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
                style={inputStyle}
              />
            </div>
          )}

          <div style={{ marginBottom: 14 }}>
            <label className="small muted">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <label className="small muted">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              minLength={6}
              required
              style={inputStyle}
            />
          </div>

          {error && (
            <div style={{ color: 'var(--danger, #e5484d)', marginBottom: 14 }} className="small">
              {error}
            </div>
          )}

          <button className="btn btn-primary btn-block" type="submit" disabled={saving}>
            {saving ? 'Aguarde…' : mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 16 }} className="small muted">
          {mode === 'login' ? (
            <>
              Ainda não tem conta?{' '}
              <button
                type="button"
                onClick={() => { setMode('register'); setError(null) }}
                style={{ background: 'none', border: 'none', color: 'var(--primary, #2563eb)', cursor: 'pointer', padding: 0 }}
              >
                Cadastre-se
              </button>
            </>
          ) : (
            <>
              Já tem conta?{' '}
              <button
                type="button"
                onClick={() => { setMode('login'); setError(null) }}
                style={{ background: 'none', border: 'none', color: 'var(--primary, #2563eb)', cursor: 'pointer', padding: 0 }}
              >
                Entrar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
