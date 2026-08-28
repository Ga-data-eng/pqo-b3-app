import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { api } from './lib/api'
import Login from './pages/Login.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'
import StudyBySubject from './pages/StudyBySubject.jsx'
import Simulado from './pages/Simulado.jsx'
import SimuladoRunner from './pages/SimuladoRunner.jsx'
import SimuladoResult from './pages/SimuladoResult.jsx'
import Flashcards from './pages/Flashcards.jsx'
import KnowledgeMap from './pages/KnowledgeMap.jsx'
import ReviewToday from './pages/ReviewToday.jsx'
import Tutor from './pages/Tutor.jsx'
import Search from './pages/Search.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Achievements from './pages/Achievements.jsx'
import Admin from './pages/Admin.jsx'

const NAV = [
  { to: '/', icon: '🏠', label: 'Início', exact: true },
  { to: '/treino', icon: '🎯', label: 'Treino rápido' },
  { to: '/estudar', icon: '📚', label: 'Estudar por matéria' },
  { to: '/simulado', icon: '🎓', label: 'Simulado PQO' },
  { to: '/erros', icon: '❌', label: 'Caderno de erros' },
  { to: '/flashcards', icon: '🃏', label: 'Flashcards' },
  { to: '/mapa', icon: '🗺️', label: 'Mapa de conhecimento' },
  { to: '/revisar', icon: '🔁', label: 'Revisar hoje' },
  { to: '/professor', icon: '🧑‍🏫', label: 'Professor PQO' },
  { to: '/pesquisar', icon: '🔎', label: 'Pesquisar no Guia' },
  { to: '/progresso', icon: '📊', label: 'Progresso' },
  { to: '/conquistas', icon: '🏆', label: 'Conquistas' },
]

const BOTTOM_NAV = NAV.filter((n) => ['/', '/treino', '/simulado', '/erros', '/progresso'].includes(n.to))

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/users/me').then((u) => { setUser(u); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  async function handleOnboarded(certCode, name) {
    const u = await api.put('/users/me', { certification_code: certCode, name })
    setUser(u)
    navigate('/')
  }

  async function handleLogout() {
    await api.post('/auth/logout')
    setUser(null)
    navigate('/')
  }

  if (loading) return <div style={{ padding: 40 }}>Carregando…</div>

  if (!user) {
    return <Login onAuthenticated={setUser} />
  }

  if (!user.certification_id) {
    return <Onboarding onDone={handleOnboarded} />
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-logo">📈 PQO B3</div>
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
          >
            <span>{item.icon}</span> {item.label}
          </NavLink>
        ))}
        <NavLink to="/admin" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')} style={{ marginTop: 'auto' }}>
          <span>⚙️</span> Admin
        </NavLink>
        <button
          onClick={handleLogout}
          className="nav-item"
          style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%' }}
        >
          <span>🚪</span> Sair ({user.name})
        </button>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home user={user} onUserChange={setUser} />} />
          <Route path="/treino" element={<Quiz mode="treino_rapido" title="Treino rápido" limit={10} />} />
          <Route path="/desafio" element={<Quiz mode="desafio" title="Modo desafio" limit={15} />} />
          <Route path="/cronometrado" element={<Quiz mode="cronometrado" title="Modo cronometrado" limit={10} timed />} />
          <Route path="/adaptativo" element={<Quiz mode="adaptativo" title="Questões adaptativas" limit={10} />} />
          <Route path="/estudar" element={<StudyBySubject />} />
          <Route path="/estudar/quiz" element={<Quiz mode="estudar_materia" title="Estudar por matéria" limit={12} />} />
          <Route path="/simulado" element={<Simulado />} />
          <Route path="/simulado/:id" element={<SimuladoRunner />} />
          <Route path="/simulado/:id/resultado" element={<SimuladoResult />} />
          <Route path="/erros" element={<Quiz mode="caderno_erros" title="Caderno de erros" limit={20} />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/mapa" element={<KnowledgeMap />} />
          <Route path="/revisar" element={<ReviewToday />} />
          <Route path="/professor" element={<Tutor />} />
          <Route path="/pesquisar" element={<Search />} />
          <Route path="/progresso" element={<Dashboard />} />
          <Route path="/conquistas" element={<Achievements />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <nav className="bottom-nav">
        {BOTTOM_NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) => 'bottom-nav-item' + (isActive ? ' active' : '')}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label.split(' ')[0]}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
