import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

// Demo accounts — this is a static front-end site with no backend yet,
// so authentication is simulated client-side against these fixed accounts.
export const DEMO_ACCOUNTS = {
  Admin: { username: 'admin', password: 'admin123', displayName: 'Admin User' },
  Faculty: { username: 'faculty', password: 'faculty123', displayName: 'Faculty Member' },
  Student: { username: 'student', password: 'student123', displayName: 'Student User' },
}

const STORAGE_KEY = 'iedc_auth_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [user])

  const login = (userType, username, password) => {
    const account = DEMO_ACCOUNTS[userType]
    const cleanUsername = username.trim().toLowerCase()

    if (!cleanUsername || !password) {
      return { success: false, error: 'Please enter both username and password.' }
    }
    if (!account || cleanUsername !== account.username || password !== account.password) {
      return { success: false, error: 'Invalid username or password for this user type.' }
    }

    setUser({ role: userType, username: account.username, displayName: account.displayName })
    return { success: true }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
