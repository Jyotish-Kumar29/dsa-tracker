import { useState } from 'react'
import styles from '../styles/login.module.css'

export function Login({ onSignIn }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [submitting, setSubmitting] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        setSubmitting(true)
        const { error } = await onSignIn(email, password)
        setSubmitting(false)
        if (error) setError('Invalid email or password.')
    }

    return (
        <div className={styles.wrap}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <div className={styles.logoMark}><span>{'{ }'}</span></div>
                <h1 className={styles.title}>DSA Sheet</h1>
                <p className={styles.subtitle}>Sign in to access your tracker</p>

                <input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoFocus
                    required
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                {error && <p className={styles.error}>{error}</p>}

                <button className={styles.button} type="submit" disabled={submitting}>
                    {submitting ? 'Signing in…' : 'Sign In'}
                </button>
            </form>
        </div>
    )
}