import React, { useState} from 'react'
import { createBrowserRouter, createRoutesFromElements, defer, useRoutes, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { HomePage } from './pages/Home'
import { Secret } from './pages/Secret'
import { ProfilePage } from './pages/Profile'
import { SettingsPage } from "./pages/Settings"
import { Verify2FA } from "./pages/Verify2FA"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { HomeLayout } from "./components/HomeLayout"
import { AuthLayout } from "./components/AuthLayout"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { AuthProvider } from "./hooks/useAuth"
import "./index.css"
import "./style.scss"
const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user')
      resolve(user)
    }, 3000)
  )
  
function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/profile",
      element: <ProfilePage />
    }
  ])

  return (
    <>
    {/* <AuthProvider > */}
    <Routes>
      {/* <Route element={<HomeLayout />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/verify-2fa" element={<Verify2FA auth2FA4={auth2FA5}/>} />
        <Route path="/login" element={<LoginPage />} />
      {/* </Route>
      <Route path="/dashboard" element={<ProtectedLayout />}> */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/setting" element={<SettingPage />} />
      {/* </Route> */}
      <Route
        path="/secret"
        element={
          <ProtectedRoute auth2FA7={auth2FA6}>
            <Secret/>
          </ProtectedRoute>
          }
      />
    </Routes>
    {/* </AuthProvider > */}
    </>
  )
}
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
      <Route path='/verify-2fa' element={<Verify2FA />} />
      <Route path='/dashboard' element={<ProtectedLayout />}>
        <Route path='profile' element={<ProfilePage />} />
        <Route path='settings' element={<SettingsPage />} />
      </Route>
    </Route>
    </>
  )
)
export default App