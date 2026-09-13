import styles from '../styles/nav.module.css'

export function Nav({ onSignOut }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <span>{'{ }'}</span>
        </div>
        <span className={styles.logoText}>DSA Sheet</span>
      </div>

      <button className={styles.signOutBtn} onClick={onSignOut}>
        Sign out
      </button>
    </nav>
  )
}