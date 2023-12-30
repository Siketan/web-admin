
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ ...props }) => {

  const isLoggedIn = window.localStorage.getItem('token')

  return (
    <>
      {isLoggedIn ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}

export default ProtectedRoute;