import styles from '../styles/nav.module.css'
import { SunIcon, MoonIcon } from './Icons'

export function Nav({ onSignOut, theme, onToggleTheme }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <span>{'{ }'}</span>
        </div>
        <span className={styles.logoText}>DSA Sheet</span>
      </div>

      <div className={styles.navActions}>
        <button
          className={styles.themeToggle}
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <SunIcon size={15} /> : <MoonIcon size={15} />}
        </button>
        <button className={styles.signOutBtn} onClick={onSignOut}>
          Sign out
        </button>
      </div>
    </nav>
  )
}