import { useState, useMemo, useEffect } from 'react'
import { ExternalIcon } from '../components/Icons'
import { ProblemDrawer } from '../components/ProblemDrawer'
import styles from '../styles/home.module.css'

const QUOTES = [
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Consistency is what transforms average into excellence.", author: "Unknown" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Every problem you solve today is a shortcut you're building for your future self.", author: "Unknown" },
]

export function HomePage({ problems, onToggleProblem }) {
  const [openMods, setOpenMods] = useState({})
  const [openSubs, setOpenSubs] = useState({})
  const [activeProblem, setActiveProblem] = useState(null)

  // Pick a quote once per page load
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)], [])

  const stats = useMemo(() => {
    let done = 0, easyTotal = 0, easyDone = 0, medTotal = 0, medDone = 0, hardTotal = 0, hardDone = 0;

    problems.forEach(p => {
      if (p.done) done++;
      const diff = p.difficulty?.toLowerCase();
      if (diff === 'easy') { easyTotal++; if (p.done) easyDone++; }
      else if (diff === 'medium') { medTotal++; if (p.done) medDone++; }
      else if (diff === 'hard') { hardTotal++; if (p.done) hardDone++; }
    });

    const pct = problems.length ? Math.round((done / problems.length) * 100) : 0;
    return {
      total: problems.length, done, pct,
      easyTotal, easyDone, medTotal, medDone, hardTotal, hardDone
    }
  }, [problems])

  // Group by Module -> SubModule utilizing Maps to strictly preserve order
  const groupedData = useMemo(() => {
    const groupedMap = new Map();

    problems.forEach(p => {
      if (!groupedMap.has(p.module)) {
        groupedMap.set(p.module, { total: 0, done: 0, subModules: new Map() });
      }

      const modObj = groupedMap.get(p.module);
      modObj.total++;
      if (p.done) modObj.done++;

      const sub = p.subModule || 'General Problems';
      if (!modObj.subModules.has(sub)) {
        modObj.subModules.set(sub, { total: 0, done: 0, problems: [] });
      }

      const subObj = modObj.subModules.get(sub);
      subObj.total++;
      if (p.done) subObj.done++;
      subObj.problems.push(p);
    });

    return groupedMap;
  }, [problems])

  const toggleMod = (modName) => setOpenMods(prev => ({ ...prev, [modName]: !prev[modName] }))
  const toggleSub = (subKey) => setOpenSubs(prev => ({ ...prev, [subKey]: !prev[subKey] }))

  useEffect(() => {
    document.body.style.overflow = activeProblem ? 'hidden' : 'auto'
  }, [activeProblem])

  return (
    <div className={styles.page}>

      {/* ── Motivation / Info Banner ── */}
      <div className={styles.quoteBanner}>
        <p className={styles.quoteText}>&ldquo;{quote.text}&rdquo;</p>
        <p className={styles.quoteAuthor}>— {quote.author}</p>
        <p className={styles.infoText}>
          Track your DSA journey across {stats.total} handpicked problems spanning arrays, trees, graphs,
          dynamic programming and more. Solve a little every day — the checkmarks add up faster than you think.
        </p>
      </div>

      {/* ── Tracker Hero with Working Progress Ring ── */}
      <div className={styles.heroSection}>
        <div className={styles.heroEyebrow}>DSA Progress</div>
        <div className={styles.heroCircular}>

          <div
            className={styles.progressRing}
            style={{ background: `conic-gradient(#38BDF8 ${stats.pct}%, #333 ${stats.pct}%)` }}
          >
            <div className={styles.ringInner}>{stats.done}</div>
          </div>

          <div className={styles.ringDetails}>
            <div className={styles.ringLabel}>
              <span className={styles.dotEasy} /> Easy {stats.easyDone}/{stats.easyTotal}
            </div>
            <div className={styles.ringLabel}>
              <span className={styles.dotMed} /> Medium {stats.medDone}/{stats.medTotal}
            </div>
            <div className={styles.ringLabel}>
              <span className={styles.dotHard} /> Hard {stats.hardDone}/{stats.hardTotal}
            </div>
          </div>
        </div>
      </div>

      {/* Main Accordion List */}
      <div className={styles.moduleList}>
        {Array.from(groupedData.entries()).map(([modName, modData]) => {
          if (modData.total === 0) return null
          const isModOpen = openMods[modName]

          return (
            <div key={modName} className={styles.modWrapper}>

              <div className={styles.modHeader} onClick={() => toggleMod(modName)}>
                <div className={styles.modHeaderLeft}>
                  <span className={`${styles.caret} ${isModOpen ? styles.caretOpen : ''}`}>›</span>
                  <span className={styles.modName}>{modName}</span>
                </div>
                <div className={styles.modHeaderRight}>
                  <span className={styles.fractionText}>{modData.done} / {modData.total}</span>
                </div>
              </div>

              {isModOpen && (
                <div className={styles.subContainer}>
                  {Array.from(modData.subModules.entries()).map(([subName, subData]) => {
                    const subKey = `${modName}-${subName}`
                    const isSubOpen = openSubs[subKey]

                    return (
                      <div key={subKey} className={styles.subWrapper}>
                        <div className={styles.subHeader} onClick={() => toggleSub(subKey)}>
                          <div className={styles.subHeaderLeft}>
                            <span className={`${styles.caret} ${isSubOpen ? styles.caretOpen : ''}`}>›</span>
                            <span className={styles.subName}>{subName}</span>
                          </div>
                          <div className={styles.fractionText}>{subData.done} / {subData.total}</div>
                        </div>

                        {isSubOpen && (
                          <div className={styles.probList}>
                            <div className={styles.probListHeader}>
                              <div className={styles.hStatus}>Status</div>
                              <div className={styles.hProb}>Problem</div>
                              <div className={styles.hLink}>Link</div>
                              <div className={styles.hDiff}>Difficulty</div>
                            </div>

                            {subData.problems.map((p) => {
                              // Prioritize LeetCode, fallback to GFG if LC is empty
                              const primaryLink = p.lc_url || p.gfg_url || p.cn_url;
                              let platformName = "Solve";
                              if (p.lc_url) platformName = "LC";
                              else if (p.gfg_url) platformName = "GFG";
                              else if (p.cn_url) platformName = "CN";

                              return (
                                <div
                                  key={p.id}
                                  className={`${styles.probRow} ${p.done ? styles.probRowDone : ''}`}
                                  onClick={() => setActiveProblem(p)}
                                >
                                  <div className={styles.cStatus} onClick={(e) => e.stopPropagation()}>
                                    <button
                                      className={`${styles.checkBtn} ${p.done ? styles.checkDone : ''}`}
                                      onClick={() => onToggleProblem(p.id, p.done)}
                                    >
                                      {p.done && (
                                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                          <polyline points="2.5 7.5 5.5 10.5 11.5 3.5"></polyline>
                                        </svg>
                                      )}
                                    </button>
                                  </div>
                                  <div className={styles.cProb}>{p.name}</div>

                                  {/* Link Column */}
                                  <div className={styles.cLink} onClick={(e) => e.stopPropagation()}>
                                    {primaryLink ? (
                                      <a href={primaryLink} target="_blank" rel="noreferrer" className={styles.solveBtn}>
                                        {platformName} <ExternalIcon size={11} />
                                      </a>
                                    ) : (
                                      <span className={styles.noLink}>---</span>
                                    )}
                                  </div>

                                  <div className={styles.cDiff}>
                                    <span className={`${styles.badge} ${styles[p.difficulty?.toLowerCase()] || styles.easy}`}>
                                      {p.difficulty}
                                    </span>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {activeProblem && (
        <ProblemDrawer
          problem={activeProblem}
          onClose={() => setActiveProblem(null)}
          onToggle={(id, currentDone) => {
            onToggleProblem(id, currentDone);
            setActiveProblem(prev => ({ ...prev, done: !currentDone }));
          }}
        />
      )}
    </div>
  )
}