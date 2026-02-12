import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../components/HomeLayout'
import Acerca from './Acerca'
import Home from './Home'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='/acerca' element={<Acerca/>} />
      </Route>
    </Routes>
  )
}
