import { createBrowserRouter } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

// Dashboard
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'
import Products from './pages/dashboard/Products'
import Categories from './pages/dashboard/Categories'
import Users from './pages/dashboard/Users'

// Guards
import ProtectedRoute from './routes/ProtectedRoute'
import RoleRoute from './routes/RoleRoute'
import CoustomerLayout from './layouts/CoustomerLayout'
import CategoryProducts from './pages/CategoryProducts'
import SingleProducts from './pages/SingleProducts'

const router = createBrowserRouter([
  { path: '/',
    element: <CoustomerLayout />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:category",
        element:<CategoryProducts/>
      },
      {
        path:"/product/:id",
        element:<SingleProducts/>
      }
    ]
  
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },

  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: 'products',
        element: (
          <RoleRoute allowedRoles={['ADMIN', 'MANAGER']}>
            <Products />
          </RoleRoute>
        )
      },
      {
        path: 'categories',
        element: (
          <RoleRoute allowedRoles={['ADMIN', 'MANAGER']}>
            <Categories />
          </RoleRoute>
        )
      },
      {
        path: 'users',
        element: (
          <RoleRoute allowedRoles={['ADMIN']}>
            <Users />
          </RoleRoute>
        )
      }
    ]
  },

  { path: '*', element: <NotFound /> }
])

export default router
