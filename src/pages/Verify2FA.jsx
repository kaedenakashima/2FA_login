import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export const Verify2FA = () => {
  const {auth2FA1} = useAuth()
  const [code, setCode] = useState('')

  const onSubmit22FA = async (e) => {
    e.preventDefault()
    if (code === '1') {
      await auth2FA1({ code })
    } else {
      alert('Invalid code. Please try again.')
    }
  }
  return (
    <form onSubmit={onSubmit22FA}>
      <input
        type= 'text'
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder= 'Enter verification code'
      />
      <button type='submit'>Verify</button>
    </form>
  )
}