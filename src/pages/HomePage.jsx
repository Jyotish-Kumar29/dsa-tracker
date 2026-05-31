import { useMemo } from 'react'
import styles from '../styles/home.module.css'

export function HomePage({ problems, onModuleClick }) {
  const stats = useMemo(() => {
    const total = problems.length
    const done = problems.filter(p => p.done).length
    const moduleSet = [...new Set(problems.map(p => p.module))]
    const pct = total ? Math.round((done / total) * 100) : 0
    return { total, done, pct, moduleCount: moduleSet.length }
  }, [problems])

  const modules = useMemo(() => {
    const map = {}
    problems.forEach(p => {
      if (!map[p.module]) map[p.module] = { total: 0, done: 0 }
      map[p.module].total++
      if (p.done) map[p.module].done++
    })
    return Object.entries(map).map(([name, data]) => ({
      name,
      ...data,
      pct: data.total ? Math.round((data.done / data.total) * 100) : 0,
    }))
  }, [problems])

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>DSA MASTERY TRACKER</div>
        <h1 className={styles.heroTitle}>
          Master every <span className={styles.accent}>pattern.</span><br />
          Crack every interview.
        </h1>
        <p className={styles.heroSub}>
          A structured roadmap from arrays to graphs — curated from Striver, Blind 75,
          NeetCode 150 and more. Track what you've solved, open problems directly on LeetCode or GFG.
        </p>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Problems</div>
          <div className={styles.statValue}>{stats.total}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Completed</div>
          <div className={`${styles.statValue} ${styles.purple}`}>{stats.done}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Modules</div>
          <div className={`${styles.statValue} ${styles.cyan}`}>{stats.moduleCount}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Progress</div>
          <div className={`${styles.statValue} ${styles.amber}`}>{stats.pct}%</div>
        </div>
      </div>

      {/* ── Progress Bar ── */}
      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Overall completion</span>
          <span className={styles.progressNum}>{stats.done} / {stats.total}</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${stats.pct}%` }} />
        </div>
      </div>

      {/* ── Module Grid ── */}
      <div className={styles.sectionTitle}>Modules</div>
      <div className={styles.moduleGrid}>
        {modules.map(mod => (
          <div
            key={mod.name}
            className={`${styles.moduleCard} ${mod.pct === 100 ? styles.complete : ''}`}
            onClick={() => onModuleClick(mod.name)}
          >
            <div className={styles.mcTop}>
              <div className={styles.mcName}>{mod.name}</div>
              <div className={styles.mcPct}>{mod.pct}%</div>
            </div>
            <div className={styles.mcCount}>{mod.total} problem{mod.total !== 1 ? 's' : ''}</div>
            <div className={styles.mcBar}>
              <div
                className={`${styles.mcBarFill} ${mod.pct === 100 ? styles.mcBarDone : ''}`}
                style={{ width: `${mod.pct}%` }}
              />
            </div>
            <div className={styles.mcFooter}>
              <span>{mod.done} solved</span>
              <span className={styles.mcArrow}>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
