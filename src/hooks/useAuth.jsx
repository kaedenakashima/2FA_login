import { createContext, useContext, useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "./useLocalStorage"
const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useLocalStorage("user", null)
  const [auth2FA1, setAuth2FA1] = useState(false)

  const navigate = useNavigate()

  const login = async (data) => {
    setUser(data)
    navigate("/verify-2fa")
    //navigate("/secret")
  }  
  const auth2FA2 = async (x) => {
    if (x === "1") {
      setAuth2FA1(true)
      return true
    }
    return false
  };

  const logout = () => {
    setUser(null)
    setAuth2FA1(false)
    navigate("/", { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      auth2FA1,
      login,
      logout,
      auth2FA2,
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}