import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../ui/Buttons/ThemeToggle.jsx";
import { TextAlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



export default function NavBar(){

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


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
    
      <nav className="fixed top-3 md:top-5 left-0 w-full flex justify-center z-50 px-4">

        <ul className="flex flex-row justify-center justify-between md:justify-center w-full max-w-2xl px-6 md:px-10 py-3 md:py-4 text-sm md:text-sm gap-10 md:gap-20 w-full p-3 items-center border-0 align-middle select-none font-sans text-center text-text-primary-static text-sm rounded-3xl bg-bg-nav/90 backdrop-blur-xs transition-all duration-300 antialiased">

        {/* Mobile Hamburger */}
        <li className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-text-primary-static">
            <TextAlignJustify/>
          </button>
        </li>

          {/* C O N T A C T O */}
             <li className="hidden md:block relative z-50" onMouseEnter={handleContactMouseEnter} onMouseLeave={handleContactMouseLeave}>
              <div className="inline-block">
                <HashLink to="/contacto#titulo" className="inline-flex items-center transition-transform duration-300 hover:scale-110">
                  Contacto
                </HashLink>
                {isContactHovering && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-40 mt-3 rounded-lg bg-black/90 ... before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:content-['']">
                    <HashLink to='/contacto#contactanosSeccion'><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Contactos</p></HashLink>
                    <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                    <HashLink to='/contacto#ubicacion'><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Ubicación</p></HashLink>
                  </div>
                )}
              </div>
            </li>

          {/* L O G O*/}

          <li>
            <HashLink to="/#titulo" className='inline-flex items-center transition-transform duration-300 scale-130 hover:scale-150 drop-shadow-none hover:drop-shadow-white/50 hover:drop-shadow-md'>
              <img src="/src/assets/img/common/PTC_2-removebg-preview.png" alt="" className='h-5 w-5'/>
            </HashLink>
          </li>
          
          
          {/* A C E R C A */}
          <li className="hidden md:block relative z-50" onMouseEnter={handleAcercaMouseEnter} onMouseLeave={handleAcercaMouseLeave}>
            <div className="inline-block">
              <HashLink to="/acerca#titulo" className='inline-flex items-center transition-transform duration-300 hover:scale-110'>
                Acerca
              </HashLink>
              {isAcercaHovering && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-40 mt-3 rounded-lg bg-black/90 ... before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:content-['']">
                  <HashLink to='/acerca#quienesSomos'><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">¿Quienes Somos?</p></HashLink> 
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#queHacemos'><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">¿Que hacemos?</p></HashLink>
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#comoLoHacemos'><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">¿Cómo Lo Hacemos?</p></HashLink>
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#valores'><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Valores</p></HashLink>
                  <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
                  <HashLink to='/acerca#nuestrosServiciosCTA'><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">Nuestros Servicios</p></HashLink>
                </div>
              )}
            </div>
          </li>

          <li className="">
            <ThemeToggle/>
          </li>

        </ul>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-bg-nav/95 backdrop-blur-xl p-6 flex flex-col gap-4 text-center shadow-2xl"
            >
              <HashLink to="/contacto#titulo" onClick={() => setIsMobileMenuOpen(false)}>
                Contacto
              </HashLink>

              <HashLink to="/acerca#titulo" onClick={() => setIsMobileMenuOpen(false)}>
                Acerca
              </HashLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    
    </>

  )
    
}

