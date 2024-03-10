import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const Verify2FA = ({auth2FA4}) => {
  const navigate = useNavigate()
  const {auth2FA2} = useAuth()
  const [code, setCode] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const auth2FA3 = await auth2FA2(code)
    auth2FA4(auth2FA3)
    if (auth2FA3) {
      navigate("/secret")
    } else {
      alert("Invalid code. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type= "text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder= "Enter verification code"
      />
      <button type="submit">Verify</button>
    </form>
  )
}