import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {

  const isLoggedIn = window.localStorage.getItem('token')

  return (
    <>
      {isLoggedIn ? <Outlet /> : <Navigate to='/loginAdminSiketan' />}
    </>
  )
}

export default ProtectedRoute;