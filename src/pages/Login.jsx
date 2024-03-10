import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const { login } = useAuth()
  const handleLogin = async (e) => {
    e.preventDefault()
    if (email === "1@gmail.com" && pwd === "1") {
      await login({ email })
    } else {
      alert("Invalid email or pwd")
    }
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pwd">Pwd:</label>
          <input
            id="pwd"
            type="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}