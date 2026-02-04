import { Outlet, Link } from "react-router-dom"

export default function HomeLayout() {
  return (
    <>
      <nav className="flex flex-row justify-center p-4 bg-gray-100">
        <ul className="flex gap-6">
          <li><Link to="/">Logo</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
        </ul>
      </nav>
      
      <main className="p-8">
        <Outlet />
      </main>
    </>
  )
}