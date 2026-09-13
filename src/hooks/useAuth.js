import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useAuth() {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setLoading(false)
        })

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession)
        })

        return () => subscription.unsubscribe()
    }, [])

    async function signIn(email, password) {
        return supabase.auth.signInWithPassword({ email, password })
    }

    async function signOut() {
        return supabase.auth.signOut()
    }

    return { session, loading, signIn, signOut }
}