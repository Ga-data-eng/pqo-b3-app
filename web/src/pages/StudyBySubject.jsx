import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function StudyBySubject() {
  const [structure, setStructure] = useState([])
  const [openTitle, setOpenTitle] = useState(null)
  const [topicsByChapter, setTopicsByChapter] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/meta/structure').then(setStructure)
  }, [])

  async function toggleChapterTopics(chapterId) {
    if (topicsByChapter[chapterId]) {
      setTopicsByChapter((prev) => ({ ...prev, [chapterId]: undefined }))
      return
    }
    const topics = await api.get(`/meta/topics?chapter_id=${chapterId}`)
    setTopicsByChapter((prev) => ({ ...prev, [chapterId]: topics }))
  }

  return (
    <div>
      <h1>📚 Estudar por matéria</h1>
      <p className="muted">Escolha título → capítulo → assunto para praticar questões específicas.</p>

      {structure.map((title) => (
        <div key={title.id} className="card">
          <button
            style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: 0 }}
            onClick={() => setOpenTitle(openTitle === title.id ? null : title.id)}
          >
            <h2>Título {title.number} — {title.name} {openTitle === title.id ? '▲' : '▼'}</h2>
          </button>

          {openTitle === title.id && (
            <div style={{ marginTop: 10 }}>
              {title.chapters.map((ch) => (
                <div key={ch.id} style={{ borderTop: '1px solid var(--border)', padding: '10px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <div>
                      <strong>Cap. {ch.number}</strong> — {ch.name}
                      <div className="small muted">{ch.question_count} questões disponíveis</div>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn btn-ghost" onClick={() => toggleChapterTopics(ch.id)}>Assuntos</button>
                      <button
                        className="btn btn-primary"
                        disabled={ch.question_count === 0}
                        onClick={() => navigate(`/estudar/quiz?chapter_id=${ch.id}`)}
                      >
                        Praticar
                      </button>
                    </div>
                  </div>
                  {topicsByChapter[ch.id] && (
                    <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {topicsByChapter[ch.id].map((t) => (
                        <button key={t.id} className="chip" onClick={() => navigate(`/estudar/quiz?topic_id=${t.id}`)}>
                          {t.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
