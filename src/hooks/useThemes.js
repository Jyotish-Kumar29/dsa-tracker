import { useState, useEffect, useCallback } from 'react'

export function useThemes() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark'
        const stored = localStorage.getItem('dsa-theme')
        if (stored) return stored
        return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('dsa-theme', theme)
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }, [])

    return { theme, toggleTheme }
}