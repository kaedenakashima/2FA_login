import React from 'react'
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const ProtectedRoute = ({ children }) => {
  const {user2} = useAuth()
  if (!user2) {
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedRoute