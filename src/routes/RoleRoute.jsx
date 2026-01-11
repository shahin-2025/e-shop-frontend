import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RoleRoute = ({ allowedRoles, children }) => {
  const { role } = useSelector(state => state.auth)

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" />
  }

  return children
}

export default RoleRoute
