import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'

export function useAuth() {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const sessionRef = useRef(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            sessionRef.current = session
            setSession(session)
            setLoading(false)
        })

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
            const prev = sessionRef.current
            const prevUserId = prev?.user?.id ?? null
            const nextUserId = newSession?.user?.id ?? null
            const prevToken = prev?.access_token ?? null
            const nextToken = newSession?.access_token ?? null

            if (prevUserId === nextUserId && prevToken === nextToken) {
                return
            }

            sessionRef.current = newSession
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