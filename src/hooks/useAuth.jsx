import { createContext, useContext, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
const AuthContext = createContext()
export const AuthProvider = ({children}) => {
  const [user2, setUser2] = useLocalStorage('user', null)
  const [auth2FA2, setAuth2FA2] = useState(null)
  const navigate = useNavigate()

  const login = async (data) => {
    setUser2(data)
    navigate('/verify-2fa')
  }  
  const auth2FA1 = async (x) => {
    setAuth2FA2('true')
    navigate('/dashboard/profile', { replace: true })
  }

  const logout = () => {
    setUser2(null)
    setAuth2FA2(null)
    navigate('/', { replace: true })
  }

  const value = useMemo(
    () => ({
      user2,
      auth2FA2,
      login,
      logout,
      auth2FA1,
    }),
    [user2, auth2FA2]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}