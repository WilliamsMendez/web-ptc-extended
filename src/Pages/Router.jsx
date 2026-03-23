import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../components/Layout/HomeLayout'
import Acerca from './Acerca'
import Home from './Home'
import NuestrosServicios from './NuestrosServicios'
import Contacto from './Contacto'
import HistorialTipoCambio from './HistorialTipoCambio.jsx'
import AdminDashboard from './AdminDashboard'
import ProtectedRoute from '@/components/auth/ProtectedRoutes'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import AdminLayout from '@/components/Layout/AdminLayout'
import AdminUsers from './AdminUsers'
import AdminHistorial from './AdminHistorial'

const ProtectedAdmin = withAuthenticationRequired(AdminLayout);

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='/acerca' element={<Acerca/>} />
        <Route path='/servicios' element={<NuestrosServicios/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/historial-cambio' element={<HistorialTipoCambio/>} />
      </Route>
      <Route path='/admin' element={<ProtectedAdmin />} >
        <Route index element={<AdminDashboard />} />
        <Route path='/admin/users' element={<AdminUsers />} /> 
        <Route path='/admin/historial' element={<AdminHistorial/>} />
      </Route>
    </Routes>
  )
}
