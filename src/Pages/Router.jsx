import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../components/Layout/HomeLayout'
import Acerca from './Acerca'
import Home from './Home'
import NuestrosServicios from './NuestrosServicios'
import Contacto from './Contacto'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='/acerca' element={<Acerca/>} />
        <Route path='/servicios' element={<NuestrosServicios/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Route>
    </Routes>
  )
}
