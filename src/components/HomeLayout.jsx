import { Navigate, useOutlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { AppBar } from './AppBar'
export const HomeLayout = () => {
  const { user2, auth2FA1 } = useAuth()
  const outlet = useOutlet()
  if (user2 && auth2FA1) {
    return <Navigate to='/dashboard/profile' replace/>
  }
  return (
    <div className='contents'>
      <AppBar
        pages={[
          { label: 'Home', path: '/' },
          { label: 'Login', path: '/login' }
        ]}
      />
      {outlet}
    </div>
  )
}