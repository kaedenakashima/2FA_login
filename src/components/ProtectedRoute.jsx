import React, {useState} from 'react'
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const ProtectedRoute = ({ children, auth2FA7}) => {
  const {user} = useAuth()
  if (!user) {
    return <Navigate to="/login" />
  }
  if (!auth2FA7) {
    return <Navigate to="/verify-2fa" />
  } 
  return children
}

export default ProtectedRoute