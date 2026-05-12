import { createContext, useContext, useEffect, useState } from 'react'
import { loginService, logoutService } from '../services/authService'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('sahaay_user')
    const storedToken = localStorage.getItem('sahaay_token')
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setToken(storedToken)
    }
  }, [])

  const login = async (credentials) => {
    setLoading(true)
    try {
      const response = await loginService(credentials)
      setUser(response.user)
      setToken(response.token)
      localStorage.setItem('sahaay_user', JSON.stringify(response.user))
      localStorage.setItem('sahaay_token', response.token)
      return response
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    logoutService()
    setUser(null)
    setToken(null)
    localStorage.removeItem('sahaay_user')
    localStorage.removeItem('sahaay_token')
  }

  const value = {
    user,
    token,
    loading,
    isAuthenticated: Boolean(user && token),
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
  return context
}
