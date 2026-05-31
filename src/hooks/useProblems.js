import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { PROBLEMS } from '../data/problems'

export function useProblems() {
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProblems()
  }, [])

  async function fetchProblems() {
    setLoading(true)
    setError(null)
    try {
      // Fetch all problems
      const { data: dbProblems, error: probErr } = await supabase
        .from('problems')
        .select('*')
        .order('module', { ascending: true })

      if (probErr) throw probErr

      // Fetch user progress
      const { data: progress, error: progErr } = await supabase
        .from('progress')
        .select('problem_id, done')

      if (progErr) throw progErr

      // Merge progress into problems
      const progressMap = {}
      progress?.forEach(p => { progressMap[p.problem_id] = p.done })

      const merged = dbProblems.map(p => ({
        ...p,
        done: progressMap[p.id] || false,
      }))

      setProblems(merged)
    } catch (err) {
      console.error('Error fetching problems:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function toggleDone(problemId, currentDone) {
    // Optimistic update
    setProblems(prev =>
      prev.map(p => p.id === problemId ? { ...p, done: !currentDone } : p)
    )

    try {
      const { error } = await supabase
        .from('progress')
        .upsert({ problem_id: problemId, done: !currentDone }, { onConflict: 'problem_id' })

      if (error) throw error
    } catch (err) {
      // Revert on failure
      setProblems(prev =>
        prev.map(p => p.id === problemId ? { ...p, done: currentDone } : p)
      )
      console.error('Error toggling done:', err)
    }
  }

  async function seedDatabase() {
    // Seeds the initial problems from local data file into Supabase
    // Call this once from the browser console: window.seedDB()
    try {
      const formatted = PROBLEMS.map(p => ({
        id: p.id,
        name: p.name,
        module: p.module,
        difficulty: p.difficulty,
        lc_url: p.lcUrl || '',
        gfg_url: p.gfgUrl || '',
        companies: p.companies || [],
        statement: p.statement || '',
        examples: p.examples || [],
        constraints: p.constraints || [],
        hints: p.hints || [],
        approach: p.approach || '',
      }))

      const { error } = await supabase
        .from('problems')
        .upsert(formatted, { onConflict: 'id' })

      if (error) throw error
      console.log('✅ Database seeded successfully!')
      await fetchProblems()
    } catch (err) {
      console.error('❌ Seed failed:', err)
    }
  }

  // Expose seed function globally for one-time setup
  if (typeof window !== 'undefined') {
    window.seedDB = seedDatabase
  }

  return { problems, loading, error, toggleDone, refetch: fetchProblems }
}
