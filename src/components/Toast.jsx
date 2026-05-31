import styles from '../styles/toast.module.css'

export function ToastContainer({ toasts, onRemove }) {
  return (
    <div className={styles.container}>
      {toasts.map(t => (
        <div
          key={t.id}
          className={`${styles.toast} ${styles[t.type]}`}
          onClick={() => onRemove(t.id)}
        >
          <span className={styles.dot} />
          {t.message}
        </div>
      ))}
    </div>
  )
}
