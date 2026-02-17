import { HashLink } from "react-router-hash-link"
import { Linkedin } from "lucide-react"

export default function Footer(){

    return(

        <>
        
                  <footer className='bg-black p-5 z-10'>
        <div className='flex flex-row justify-evenly p-10'>
          <div className='text-text-primary text flex flex-row justify-normal pt-5 gap-10'>
            <ul className='flex flex-col'>
              <h1 className='font-bold py-2 pb-5'>Acerca</h1>
              <li className='p-1'><HashLink to="/acerca#quienesSomos">¿Quienes Somos?</HashLink></li>
              <li className='p-1'><HashLink to="/#misionYVision">Mision y Vision </HashLink> </li>
              <li className='p-1'><HashLink to="/acerca#queHacemos">¿Que hacemos?</HashLink></li>
              <li className='p-1'><HashLink to="/servicios#titulo">Nuestros Servicios</HashLink></li>
            </ul>
            <ul className='flex flex-col'>
              <h1 className='font-bold py-2 pb-5'>Contactanos</h1>
              <HashLink to='contacto/#contactanosSeccion'><li className='p-1'>Contacto</li></HashLink> 
              <li className='p-1'><HashLink to="/contacto#ubicacion">Ubicación</HashLink></li>
            </ul>
            <ul className='flex flex-col'>
              <h1 className='font-bold py-2 pb-5'>Redes</h1>
              <a href="https://www.linkedin.com/company/procesadora-de-tarjetas-de-cr%C3%A9dito-honduras/?originalSubdomain=hn" target='_blank'><li className='flex flex-row gap-2 p-1'><Linkedin/> LinkedIn</li></a>
            </ul>
          </div>
          <img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className='w-10 h-10'/>
        </div>

        <hr className='border-solid border-white/50 w-200 flex flex-row items-center mx-auto' />
        <p className='text-text-primary p-10 text-center'>© 2026 Procesadora de Tarjetas de Crédito | Todos los derechos reservados</p>
      </footer>
        
        </>

    )

}