import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
// 1. REMOVE THIS LINE ENTIRELY:
// import { PROBLEMS } from '../data/data-index'

export function useProblems(session) {
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const userId = session?.user?.id ?? null

  useEffect(() => {
    if (userId) fetchProblems()
  }, [userId])

  async function fetchProblems() {
    setLoading(true)
    setError(null)
    try {
      // 2. Fetch the user's progress from Supabase
      const { data: progress, error: fetchError } = await supabase
        .from('progress')
        .select('problem_id, done')
        .eq('user_id', userId)

      if (fetchError) throw fetchError

      // 3. DYNAMICALLY import the massive data file.
      // This tells Vite to split it into a separate chunk, unblocking the initial page load.
      const { PROBLEMS } = await import('../data/data-index.js')

      const progressMap = {}
      progress?.forEach(p => { progressMap[p.problem_id] = p.done })

      const mergedProblems = PROBLEMS.map(p => {
        const safeDifficulty = p.difficulty
          ? p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1).toLowerCase()
          : 'Medium'

        return {
          ...p,
          subModule: p.subModule || 'General Problems',
          difficulty: safeDifficulty,
          lc_url: p.lcUrl || '',
          gfg_url: p.gfgUrl || '',
          cn_url: p.cnUrl || '',
          done: progressMap[p.id] || false
        }
      })

      setProblems(mergedProblems)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function toggleDone(problemId, currentDone) {
    const newStatus = !currentDone

    setProblems(prev => prev.map(p => p.id === problemId ? { ...p, done: newStatus } : p))

    try {
      const { error } = await supabase
        .from('progress')
        .upsert(
          { problem_id: problemId, user_id: userId, done: newStatus },
          { onConflict: 'problem_id,user_id' }
        )

      if (error) throw error
    } catch (err) {
      setProblems(prev => prev.map(p => p.id === problemId ? { ...p, done: currentDone } : p))
    }
  }

  return { problems, loading, error, toggleDone, refetch: fetchProblems }
}