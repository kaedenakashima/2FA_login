import { useAuth } from "../hooks/useAuth"

export const ProfilePage = () => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}