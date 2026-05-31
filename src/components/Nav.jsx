import { HomeIcon, GridIcon } from './Icons'
import styles from '../styles/nav.module.css'

export function Nav({ page, onNavigate }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => onNavigate('home')}>
        <div className={styles.logoMark}>
          <span>{'{ }'}</span>
        </div>
        <span className={styles.logoText}>DSA Sheet</span>
      </div>

      <div className={styles.links}>
        <button
          className={`${styles.navBtn} ${page === 'home' ? styles.active : ''}`}
          onClick={() => onNavigate('home')}
        >
          <HomeIcon size={14} />
          <span>Home</span>
        </button>
        <button
          className={`${styles.navBtn} ${page === 'problems' ? styles.active : ''}`}
          onClick={() => onNavigate('problems')}
        >
          <GridIcon size={14} />
          <span>Problems</span>
        </button>
      </div>
    </nav>
  )
}
