import { useState } from 'react'
import styles from '../styles/login.module.css'
import { SunIcon, MoonIcon, EyeIcon, EyeOffIcon } from './Icons'

// 1. Add theme and onToggleTheme to the props
export function Login({ onSignIn, theme, onToggleTheme }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

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
            <div className={styles.card}>
                {/* 2. Add the onClick handler to the button */}
                <button className={styles.themeToggle} onClick={onToggleTheme}>
                    {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
                </button>

                <div className={styles.logoMark}>
                    <span>{'{ }'}</span>
                </div>

                <h1 className={styles.title}>DSA Sheet</h1>
                <p className={styles.subtitle}>Sign in to access your tracker</p>

                <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                        required
                    />
                    <div style={{ position: 'relative', width: '100%' }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ paddingRight: '40px' }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            title={showPassword ? "Hide password" : "Show password"}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                color: 'var(--textMuted)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '4px',
                                borderRadius: '4px',
                                transition: 'color 0.15s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--textMuted)'}
                        >
                            {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                        </button>
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <button type="submit" className={styles.button} disabled={submitting}>
                        {submitting ? 'Signing in…' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    )
}