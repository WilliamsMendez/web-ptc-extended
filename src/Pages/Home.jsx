import HeroButton from "../components/HeroButton"
import { QuoteIcon, Mail, MapPinned } from "lucide-react"
import { motion } from "motion/react"
import NumberCounter from "../components/Landing/landingcomponents/NumberCounter"
import CreditCard3D from "../components/Landing/landingcomponents/CreditCard3D"
import QuienesSomos from "../components/Acerca/QuienesSomos"
import Misionyvision from "../components/Landing/Misionyvision"
import Estadistica from "../components/Landing/Estadistica"
import Testimonios from "../components/Landing/Testimonios"
import Contactanos from "../components/Landing/ContactanosSeccion"
import { ChevronsDown } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    
    <>
        {/* H E R O  P A N E L*/}

    <section className="relative w-full min-h-screen overflow-hidden">
    <img src="https://picsum.photos/1920/1080" alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0"/>
    <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-20 flex min-h-screen items-center justify-center text-white px-6">
            <div className="text-center max-w-3xl">
              <div className="flex flex-row gap-1 justify-center">
                <img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className="h-30 w-30"/>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Procesadora de Tarjetas de Crédito</h1>
              </div>
              <div className="w-40 flex flex-col justify-center mx-auto items-center gap-5">
                <HeroButton/>
                <div className="relative">
                  <ChevronsDown className="w-15 h-15 text-white animate-pulse" />
                </div>
              </div>
            
        </div>
    </div>
    </section>

      {/* Q U I E N E S  S O M O S*/}

        <div className="flex flex-col my-40">
          <QuienesSomos/>
        <Link to="/acerca" className="max-w-40 mx-auto group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#5D8BB5] px-6 font-medium text-neutral-200 duration-500 hover:scale-110">
          <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Más Acerca</div>
          <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
          </div>
        </Link>

        </div>

      {/*M I S I O N  Y  V I S I O N */}

        <Misionyvision/>

      {/* E S T A D I S T I C A S*/}
        
        <Estadistica/>

      {/* T E S T I M O N I O S*/}

        <Testimonios/>

      {/* C O N T A C T A N O S*/}

        <Contactanos/>

    </>

  )
}
