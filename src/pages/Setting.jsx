import { useAuth } from "../hooks/useAuth"

export const SettingPage = () => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h1>Setting page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}