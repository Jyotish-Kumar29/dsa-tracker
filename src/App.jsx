import { useState } from 'react'
import { Nav } from './components/Nav'
import { ToastContainer } from './components/Toast'
import { HomePage } from './pages/HomePage'
import { ProblemsPage } from './pages/ProblemsPage'
import { useProblems } from './hooks/useProblems'
import { useToasts } from './hooks/useToasts'
import './styles/global.css'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedModule, setSelectedModule] = useState(null)

  const { problems, loading, error, toggleDone } = useProblems()
  const { toasts, addToast, removeToast } = useToasts()

  async function handleToggle(id, currentDone) {
    await toggleDone(id, currentDone)
    addToast(currentDone ? 'Marked incomplete' : 'Problem completed!', currentDone ? 'info' : 'success')
  }

  function goModule(moduleName) {
    setSelectedModule(moduleName)
    setPage('problems')
  }

  function goBack() {
    setSelectedModule(null)
    setPage('home')
  }

  // ── Loading ──
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading your sheet…</p>
      </div>
    )
  }

  // ── Error — show setup instructions ──
  if (error) {
    return (
      <div className="error-screen">
        <h2>Database not connected</h2>
        <p>
          Create a <code>.env</code> file in the project root with your Supabase credentials.
          See <code>.env.example</code> for the format.
        </p>
        <p>
          Then set up the database by running these SQL statements in your Supabase project's
          SQL editor (Dashboard → SQL Editor → New query):
        </p>
        <p>
          See <code>README.md</code> for the full setup SQL and instructions.
        </p>
        <p style={{ color: 'var(--red)', fontSize: 12, fontFamily: 'var(--mono)' }}>
          {error}
        </p>
      </div>
    )
  }

  return (
    <>
      <Nav page={page} onNavigate={setPage} />

      {page === 'home' && (
        <HomePage
          problems={problems}
          onModuleClick={goModule}
        />
      )}

      {page === 'problems' && (
        <ProblemsPage
          problems={problems}
          selectedModule={selectedModule}
          onBack={goBack}
          onToggle={handleToggle}
        />
      )}

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  )
}
