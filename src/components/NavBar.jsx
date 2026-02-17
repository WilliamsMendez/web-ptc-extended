import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar(){


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

  return(

    <>
    
      <nav className="fixed top-5 left-0 w-full flex justify-center z-30">
        <ul className="flex flex-row justify-center gap-20 w-full max-w-lg pb-0 items-center border-0 align-middle select-none font-sans text-center px-10 py-4 text-text-primary text-sm rounded-3xl bg-bg/90 backdrop-blur-xs transition-all duration-300 antialiased">

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
    
    </>

  )
    
}

