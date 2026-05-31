import { useEffect } from 'react'
import { CloseIcon, ExternalIcon, LightbulbIcon, BuildingIcon } from './Icons'
import styles from '../styles/drawer.module.css'

const DIFF_CLASS = { Easy: 'easy', Medium: 'medium', Hard: 'hard' }

export function ProblemDrawer({ problem, onClose, onToggle }) {
  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!problem) return null

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.drawer}>
        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={`${styles.diffBadge} ${styles[DIFF_CLASS[problem.difficulty]]}`}>
              {problem.difficulty}
            </span>
            <span className={styles.moduleName}>{problem.module}</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <CloseIcon size={15} />
          </button>
        </div>

        {/* ── Title + Actions ── */}
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{problem.name}</h2>
          <button
            className={`${styles.doneBtn} ${problem.done ? styles.doneBtnActive : ''}`}
            onClick={() => onToggle(problem.id, problem.done)}
          >
            {problem.done ? '✓ Completed' : 'Mark Complete'}
          </button>
        </div>

        {/* ── Links ── */}
        <div className={styles.links}>
          {problem.lc_url && (
            <a href={problem.lc_url} target="_blank" rel="noopener noreferrer" className={styles.linkChip}>
              <ExternalIcon size={11} />
              LeetCode
            </a>
          )}
          {problem.gfg_url && (
            <a href={problem.gfg_url} target="_blank" rel="noopener noreferrer" className={`${styles.linkChip} ${styles.gfg}`}>
              <ExternalIcon size={11} />
              GeeksForGeeks
            </a>
          )}
        </div>

        <div className={styles.scrollBody}>
          {/* ── Problem Statement ── */}
          {problem.statement && (
            <section className={styles.section}>
              <div className={styles.sectionLabel}>Problem Statement</div>
              <div className={styles.statement}>
                {problem.statement.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() === '' ? styles.spacer : ''}>{line}</p>
                ))}
              </div>
            </section>
          )}

          {/* ── Examples ── */}
          {problem.examples?.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionLabel}>Examples</div>
              <div className={styles.examples}>
                {problem.examples.map((ex, i) => (
                  <div key={i} className={styles.exampleBlock}>
                    <div className={styles.exampleNum}>Example {i + 1}</div>
                    <div className={styles.exampleContent}>
                      <div className={styles.exampleRow}>
                        <span className={styles.exLabel}>Input:</span>
                        <code className={styles.exCode}>{ex.input}</code>
                      </div>
                      <div className={styles.exampleRow}>
                        <span className={styles.exLabel}>Output:</span>
                        <code className={styles.exCode}>{ex.output}</code>
                      </div>
                      {ex.explanation && (
                        <div className={styles.exampleRow}>
                          <span className={styles.exLabel}>Explanation:</span>
                          <span className={styles.exText}>{ex.explanation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Constraints ── */}
          {problem.constraints?.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionLabel}>Constraints</div>
              <ul className={styles.constraintList}>
                {problem.constraints.map((c, i) => (
                  <li key={i} className={styles.constraintItem}>
                    <span className={styles.constraintDot} />
                    <code className={styles.constraintCode}>{c}</code>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Hints ── */}
          {problem.hints?.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionLabel}>
                <LightbulbIcon size={13} /> Hints
              </div>
              <div className={styles.hints}>
                {problem.hints.map((h, i) => (
                  <div key={i} className={styles.hintItem}>
                    <span className={styles.hintNum}>{i + 1}</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Approach ── */}
          {problem.approach && (
            <section className={styles.section}>
              <div className={styles.sectionLabel}>Optimal Approach</div>
              <div className={styles.approachBox}>{problem.approach}</div>
            </section>
          )}

          {/* ── Companies ── */}
          {problem.companies?.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionLabel}>
                <BuildingIcon size={13} /> Asked By
              </div>
              <div className={styles.companies}>
                {problem.companies.map(c => (
                  <span key={c} className={styles.companyTag}>{c}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
