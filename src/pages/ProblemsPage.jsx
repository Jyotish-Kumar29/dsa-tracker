import { useState, useMemo } from 'react'
import { ProblemDrawer } from '../components/ProblemDrawer'
import { SearchIcon, ChevronLeftIcon } from '../components/Icons'
import styles from '../styles/problems.module.css'

const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard']

export function ProblemsPage({ problems, selectedModule, onBack, onToggle }) {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [activeProblem, setActiveProblem] = useState(null)

  const scopedProblems = useMemo(() =>
    selectedModule ? problems.filter(p => p.module === selectedModule) : problems,
    [problems, selectedModule]
  )

  const visible = useMemo(() => {
    let list = scopedProblems
    if (filter !== 'All') {
      if (filter === 'Todo') list = list.filter(p => !p.done)
      else list = list.filter(p => p.difficulty === filter)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q))
    }
    return list
  }, [scopedProblems, filter, search])

  const total = scopedProblems.length
  const done = scopedProblems.filter(p => p.done).length

  function handleToggle(id, currentDone) {
    onToggle(id, currentDone)
    // Update drawer state if open
    if (activeProblem?.id === id) {
      setActiveProblem(prev => ({ ...prev, done: !currentDone }))
    }
  }

  function openProblem(p) {
    setActiveProblem(p)
  }

  return (
    <div className={styles.page}>
      {/* ── Back ── */}
      <button className={styles.backBtn} onClick={onBack}>
        <ChevronLeftIcon size={14} />
        Back to modules
      </button>

      {/* ── Module Hero ── */}
      <div className={styles.moduleHero}>
        <h2 className={styles.moduleTitle}>{selectedModule || 'All Problems'}</h2>
        <p className={styles.moduleSub}>{done} of {total} solved</p>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className={styles.filterRow}>
        <div className={styles.searchWrap}>
          <SearchIcon size={14} />
          <input
            className={styles.searchInput}
            placeholder="Search problems…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.pills}>
          {[...DIFFICULTIES, 'Todo'].map(f => (
            <button
              key={f}
              className={`${styles.pill} ${filter === f ? styles.pillActive : ''} ${styles[f.toLowerCase()] || ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      <div className={styles.tableWrap}>
        {visible.length === 0 ? (
          <div className={styles.empty}>No problems match this filter.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thCheck} />
                <th className={styles.thNum}>#</th>
                <th>Problem</th>
                <th>Difficulty</th>
                <th className={styles.thModule}>Module</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((p, i) => (
                <tr key={p.id} className={p.done ? styles.rowDone : ''}>
                  {/* Check */}
                  <td className={styles.tdCheck}>
                    <button
                      className={`${styles.checkBtn} ${p.done ? styles.checkDone : ''}`}
                      onClick={e => { e.stopPropagation(); handleToggle(p.id, p.done) }}
                      title={p.done ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {p.done && (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                          stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2,6 5,9 10,3" />
                        </svg>
                      )}
                    </button>
                  </td>
                  {/* Number */}
                  <td className={styles.tdNum}>{i + 1}</td>
                  {/* Name — clickable */}
                  <td className={styles.tdName}>
                    <button className={styles.nameBtn} onClick={() => openProblem(p)}>
                      {p.name}
                    </button>
                  </td>
                  {/* Difficulty */}
                  <td>
                    <span className={`${styles.badge} ${styles[DIFF_CLASS[p.difficulty]]}`}>
                      {p.difficulty}
                    </span>
                  </td>
                  {/* Module */}
                  <td className={styles.tdModule}>
                    <span className={styles.moduleTag}>{p.module}</span>
                  </td>
                  {/* Links */}
                  <td className={styles.tdLinks}>
                    {p.lc_url && (
                      <a href={p.lc_url} target="_blank" rel="noopener noreferrer"
                        className={styles.linkChip} onClick={e => e.stopPropagation()}>
                        <ExternalIcon size={10} /> LC
                      </a>
                    )}
                    {p.gfg_url && (
                      <a href={p.gfg_url} target="_blank" rel="noopener noreferrer"
                        className={`${styles.linkChip} ${styles.gfg}`} onClick={e => e.stopPropagation()}>
                        <ExternalIcon size={10} /> GFG
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Problem Drawer ── */}
      {activeProblem && (
        <ProblemDrawer
          problem={activeProblem}
          onClose={() => setActiveProblem(null)}
          onToggle={handleToggle}
        />
      )}
    </div>
  )
}
