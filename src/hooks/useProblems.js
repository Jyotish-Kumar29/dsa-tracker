import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { PROBLEMS } from '../data/data-index'

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
      // Fetch without DB sorting
      const { data: dbProblems, error: e1 } = await supabase
        .from('problems')
        .select('*')
      if (e1) throw e1

      const { data: progress, error: e2 } = await supabase
        .from('progress')
        .select('problem_id, done')
      if (e2) throw e2

      const progressMap = {}
      progress?.forEach(p => { progressMap[p.problem_id] = p.done })

      // Create a lookup map to preserve EXACT order from your data files
      const orderMap = new Map(PROBLEMS.map((p, i) => [p.id, i]))

      // Sort database results by the original array index
      const sortedProblems = dbProblems.sort((a, b) => {
        const indexA = orderMap.has(a.id) ? orderMap.get(a.id) : 999999
        const indexB = orderMap.has(b.id) ? orderMap.get(b.id) : 999999
        return indexA - indexB
      })

      setProblems(sortedProblems.map(p => ({
        ...p,
        subModule: p.sub_module,
        done: progressMap[p.id] || false
      })))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function toggleDone(problemId, currentDone) {
    setProblems(prev => prev.map(p => p.id === problemId ? { ...p, done: !currentDone } : p))
    try {
      const { error } = await supabase
        .from('progress')
        .upsert({ problem_id: problemId, done: !currentDone }, { onConflict: 'problem_id' })
      if (error) throw error
    } catch {
      setProblems(prev => prev.map(p => p.id === problemId ? { ...p, done: currentDone } : p))
    }
  }

  function format(p) {
    const safeDifficulty = p.difficulty
      ? p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1).toLowerCase()
      : 'Medium';

    return {
      id: p.id,
      name: p.name,
      module: p.module,
      sub_module: p.subModule || 'General Problems',
      difficulty: safeDifficulty,
      lc_url: p.lcUrl || '',
      gfg_url: p.gfgUrl || '',
      cn_url: p.cnUrl || '',
      companies: p.companies || [],
      statement: p.statement || '',
      examples: p.examples || [],
      constraints: p.constraints || [],
      hints: p.hints || [],
      approach: p.approach || '',
    }
  }

  async function seedDatabase() {
    try {
      const rows = PROBLEMS.map(format)
      const size = 100
      for (let i = 0; i < rows.length; i += size) {
        const { error } = await supabase
          .from('problems')
          .upsert(rows.slice(i, i + size), { onConflict: 'id' })
        if (error) throw error
        console.log(`Inserted ${Math.min(i + size, rows.length)} / ${rows.length}`)
      }
      console.log('Done.')
      await fetchProblems()
    } catch (err) {
      console.error('Seed failed:', err.message)
    }
  }

  if (typeof window !== 'undefined') {
    window.seedDB = seedDatabase
  }

  return { problems, loading, error, toggleDone, refetch: fetchProblems }
}