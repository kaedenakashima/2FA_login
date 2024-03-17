import { Navigate, useOutlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { AppBar } from './AppBar'
export const ProtectedLayout = () => {
  const { user2, auth2FA2 } = useAuth()
  const outlet = useOutlet()
  console.log(user2, auth2FA2)
  if (!user2) {
      return <Navigate to="/login" />
  }
  else if(!auth2FA2) {
    return <Navigate to="/verify-2fa" />
  } 
  return (
    <div className='contents'>
      <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" }
        ]}
      />
      {outlet}
    </div>
  )
}