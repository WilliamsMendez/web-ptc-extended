import { Outlet, Link } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <>
      <nav className="sticky top-10 flex flex-row justify-center z-30">
        <ul className="flex flex-row justify-center gap-10 px-30 py-5 bg-white/30 backdrop-blur-lg rounded-3xl">
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/" className='font-bold'>Logo</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}
