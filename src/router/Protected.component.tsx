import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default () => {
  const user = true
  return user ? <Outlet /> : <Navigate to="/" />
}
