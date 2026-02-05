import { Outlet, Link } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <>
      <nav className="sticky top-10 flex flex-row justify-center z-30">
        <ul className="flex flex-row justify-center gap-10 px-30 py-3 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-10 py-4 text-white text-sm font-medium rounded-2xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] transition-all duration-300 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased">
          <li><Link to="/contacto" className='inline-flex items-center transition-transform duration-300 hover:scale-110'>Contacto</Link></li>
          <hr className="h-5 w-px bg-white/20 border-1 border-white/20" />
          <li><Link to="/" className='inline-flex items-center transition-transform duration-300 hover:scale-130 drop-shadow-none hover:drop-shadow-white/50 hover:drop-shadow-md'><img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className='h-5 w-5'/></Link></li>
          <hr className="h-5 w-px bg-white/20 border-1 border-white/20" />
          <li><Link to="/acerca" className='inline-flex items-center transition-transform duration-300 hover:scale-110'>Acerca</Link></li>
        </ul>
      </nav>

      <main className='my-0 bg-[#111111] top-0'>
        <Outlet />
      </main>

      <footer className='bg-black p-15 z-10'>
        <div className='text-white text flex flex-row justify-center p-10 gap-10'>
          <ul className='flex flex-col'>
            <h1 className='font-bold py-2'>Acerca</h1>
            <li>¿Quienes Somos?</li>
            <li>Mision y Vision</li>
            <li>¿Que hacemos?</li>
            <li>Nuestros Servicios</li>
          </ul>
          <ul className='flex flex-col'>
            <h1 className='font-bold'>Contactanos</h1>
            <li>Contacto</li>
            <li>Ubicación</li>
          </ul>
          <ul className='flex flex-col'>
            <h1 className='font-bold'>Contactanos</h1>
            <li>¿Quienes Somos?</li>
            <li>Mision y Vision</li>
            <li>¿Que hacemos?</li>
            <li>Nuestros Servicios</li>
          </ul>
        </div>
        <hr className='border-solid border-white/50' />
        <p className='text-white p-10'>© 2026 Procesadora de Tarjetas de Crédito | Todos los derechos reservados</p>
      </footer>
    </>
  )
}
