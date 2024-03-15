import {Suspense} from 'react'
import { useLoaderData, useOutlet, Await } from 'react-router-dom'
import { AuthProvider } from '../hooks/useAuth'
import LinearProgress from '@mui/material/LinearProgress'
import Alert from '@mui/material/Alert'
export const AuthLayout = () => {
  const outlet = useOutlet()
  const { userPromise } = useLoaderData()
  return (
    <Suspense fallback={<LinearProgress />}>
      <Await
        resolve={userPromise}
        errorElement={<Alert severity="error">Something went wrong!</Alert>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  )
}