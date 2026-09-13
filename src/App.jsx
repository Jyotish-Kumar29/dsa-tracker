import { Nav } from './components/Nav'
import { Login } from './components/Login'
import { ToastContainer } from './components/Toast'
import { HomePage } from './pages/HomePage'
import { useProblems } from './hooks/useProblems'
import { useToasts } from './hooks/useToasts'
import { useAuth } from './hooks/useAuth'
import './styles/global.css'

export default function App() {
  const { session, loading: authLoading, signIn, signOut } = useAuth()
  const { problems, loading, error, toggleDone } = useProblems(session)
  const { toasts, addToast, removeToast } = useToasts()

  async function handleToggle(id, currentDone) {
    await toggleDone(id, currentDone)
    addToast(currentDone ? 'Marked incomplete' : 'Problem completed!', currentDone ? 'info' : 'success')
  }

  if (authLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading session...</p>
      </div>
    )
  }

  if (!session) {
    return <Login onSignIn={signIn} />
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading your sheet...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-screen">
        <h2>Database not connected</h2>
        <p>
          Create a <code>.env</code> file in the project root with your Supabase credentials.
        </p>
        <p>
          Then set up the database by running the SQL statements in your Supabase project's SQL editor.
        </p>
        <code>{error}</code>
      </div>
    )
  }

  return (
    <>
      <Nav onSignOut={signOut} />
      <HomePage problems={problems} onToggleProblem={handleToggle} />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  )
}