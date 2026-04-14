import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../components/Layout/HomeLayout'
import Acerca from './Acerca'
import Home from './Home'
import NuestrosServicios from './NuestrosServicios'
import Contacto from './Contacto'
import HistorialTipoCambio from './HistorialTipoCambio.jsx'
import AdminDashboard from './AdminDashboard'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import AdminLayout from '@/components/Layout/AdminLayout'
import AdminUsers from './AdminUsers'
import AdminHistorial from './AdminHistorial'
import AdminRoles from './AdminRoles'
import AdminProtectedError from '@/components/admin/AdminProtectedError'
import ProtectedRoute from '@/components/admin/protection/ProtectedRoute'
import AdminPermissions from './AdminPermissions'
import AdminLogs from './AdminLogs'

const ProtectedAdmin = withAuthenticationRequired(AdminLayout);

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='/acerca' element={<Acerca />} />
        <Route path='/servicios' element={<NuestrosServicios />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/historial-cambio' element={<HistorialTipoCambio />} />
      </Route>
      <Route path='/admin' element={<ProtectedAdmin />} >
        <Route index element={
          <ProtectedRoute requiredPermission="read:analytics">
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path='/admin/users' element={
          <ProtectedRoute requiredPermission="read:users">
            <AdminUsers />
          </ProtectedRoute>
        } />
        <Route path='/admin/historial' element={
          <ProtectedRoute requiredPermission="read:analytics">
            <AdminHistorial />
          </ProtectedRoute>
        } />
        <Route path='/admin/roles' element={
          <ProtectedRoute requiredPermission="read:roles">
            <AdminRoles />
          </ProtectedRoute>
        } />
        <Route path='/admin/permissions' element={
          <ProtectedRoute requiredPermission="read:permissions">
            <AdminPermissions />
          </ProtectedRoute>
        } />
        <Route path='/admin/logs' element={
          <ProtectedRoute requiredPermission="read:logs">
            <AdminLogs />
          </ProtectedRoute>
        } />
        <Route path='/admin/protected-error' element={<AdminProtectedError />} />
      </Route>
    </Routes>
  )
}
