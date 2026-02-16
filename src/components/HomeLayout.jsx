import { Outlet, Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'
import React, { useState } from 'react';
import DropdownContacto from "../components/DropdownContacto";
import { HashLink } from 'react-router-hash-link';

export default function HomeLayout() {

  const [isContactHovering, setIsContactHovering] = useState(false);
  const [isAcercaHovering, setIsAcercaHovering] = useState(false);

  const handleContactMouseEnter = () => {
    setIsContactHovering(true);
  };

  const handleContactMouseLeave = () => {
    setIsContactHovering(false);
  };

  const handleAcercaMouseEnter = () => {
    setIsAcercaHovering(true);
  };

  const handleAcercaMouseLeave = () => {
    setIsAcercaHovering(false);
  };

  return (
    <>
      {/* N A V  I N I C I O */}
      <nav className="fixed top-5 left-0 w-full flex justify-center z-30">
        <ul className="flex flex-row justify-center gap-30 w-full max-w-5xl pb-0 items-center border-0 align-middle select-none font-sans text-center px-10 py-4 text-white text-sm rounded-3xl bg-[#111111]/90 backdrop-blur-xs transition-all duration-300 antialiased">
          {/* C O N T A C T O */}
             <li className="relative z-50 ">
              <div onMouseEnter={handleContactMouseEnter} onMouseLeave={handleContactMouseLeave} className="inline-block pb-5">
                <Link to="/contacto" className="inline-flex items-center transition-transform duration-300 hover:scale-110">
                  Contacto
                </Link>
                {isContactHovering && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-40 rounded-lg bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden p-2">
                    <HashLink to='/contacto#contactanosSeccion'><p className="px-4 py-2 text-sm rounded-lg hover:bg-gray-700 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Contactos</p></HashLink>
                    <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                    <HashLink to='/contacto#ubicacion'><p className="px-4 py-2 text-sm rounded-lg hover:bg-gray-700 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Ubicación</p></HashLink>
                  </div>
                )}
              </div>
            </li>

          {/* L O G O*/}

          <li>
            <HashLink to="/#titulo" className='inline-flex items-center transition-transform duration-300 scale-130 hover:scale-150 drop-shadow-none hover:drop-shadow-white/50 hover:drop-shadow-md pb-4'>
              <img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className='h-5 w-5'/>
            </HashLink>
          </li>
          
          
          {/* A C E R C A */}
          <li className="relative z-50">
            <div onMouseEnter={handleAcercaMouseEnter} onMouseLeave={handleAcercaMouseLeave} className="inline-block pb-5">
              <HashLink to="/acerca#titulo" className='inline-flex items-center transition-transform duration-300 hover:scale-110'>
                Acerca
              </HashLink>
              {isAcercaHovering && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-40 rounded-lg bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden p-2">
                  <HashLink to='/acerca#quienesSomos'><p className="px-4 py-2 text-sm rounded-lg hover:bg-gray-700 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">¿Quienes Somos?</p></HashLink> 
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#queHacemos'><p className="px-4 py-2 text-sm rounded-lg hover:bg-gray-700 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">¿Que hacemos?</p></HashLink>
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#comoLoHacemos'><p className="px-4 py-2 text-sm rounded-lg hover:bg-gray-700 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">¿Cómo Lo Hacemos?</p></HashLink>
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#valores'><p className="px-4 py-2 text-sm rounded-lg hover:bg-gray-700 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Valores</p></HashLink>
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#nuestrosServiciosCTA'><p className="px-4 py-2 text-sm rounded-lg hover:bg-gray-700 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Nuestros Servicios</p></HashLink>
                </div>
              )}
            </div>
          </li>

        </ul>
      </nav>

      {/* C O N T E N I D O */}

      <div className="m-0 p-0 bg-[#111111] overflow-auto">
      <main>
        <Outlet />
      </main>
      </div>


      {/* F O O T E R */}

      <footer className='bg-black p-5 z-10'>
        <div className='flex flex-row justify-evenly p-10'>
          <div className='text-white text flex flex-row justify-normal pt-5 gap-10'>
            <ul className='flex flex-col'>
              <h1 className='font-bold py-2 pb-5'>Acerca</h1>
              <li className='p-1'> <Link to="/acerca#quienesSomos">¿Quienes Somos?</Link></li>
              <li className='p-1'>Mision y Vision</li>
              <li className='p-1'>¿Que hacemos?</li>
              <li className='p-1'>Nuestros Servicios</li>
            </ul>
            <ul className='flex flex-col'>
              <h1 className='font-bold py-2 pb-5'>Contactanos</h1>
              <HashLink to='contacto/#contactanosSeccion'><li className='p-1'>Contacto</li></HashLink> 
              <li className='p-1'>Ubicación</li>
            </ul>
            <ul className='flex flex-col'>
              <h1 className='font-bold py-2 pb-5'>Redes</h1>
              <li className='flex flex-row gap-2 p-1'> <Linkedin/>  LinkedIn</li>
            </ul>
          </div>
          <img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className='w-10 h-10'/>
        </div>

        <hr className='border-solid border-white/50 w-200 flex flex-row items-center mx-auto' />
        <p className='text-white p-10 text-center'>© 2026 Procesadora de Tarjetas de Crédito | Todos los derechos reservados</p>
      </footer>
    </>
  )
}
