export const getToken = () => {
  return localStorage.getItem('token')
}

export const getRole = () => {
  return localStorage.getItem('role') // ADMIN, MANAGER, SELLER, CUSTOMER
}

export const isAuthenticated = () => {
  return !!getToken()
}
