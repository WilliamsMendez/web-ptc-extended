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
import NuestrosServiciosCTA from "@/components/NuestrosServiciosCTA"
import LinkButton from "@/components/LinkButton"
import { fadeInBlur } from "@/components/animations"

export default function Home() {
  return (
    
    <>
        {/* H E R O  P A N E L*/}

    <section className="relative w-full min-h-screen overflow-hidden" id="titulo">
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

          <LinkButton linkto="/acerca" bg="#5D8BB5" titulo="Más Acerca" />

        </div>

      {/*M I S I O N  Y  V I S I O N */}

        <Misionyvision/>

      {/* E S T A D I S T I C A S*/}
        
        <Estadistica/>

      {/* T E S T I M O N I O S*/}

        <Testimonios/>

      {/* S E R V I C I O S  C  T A */}

        <NuestrosServiciosCTA/>


      {/* C O N T A C T A N O S*/}

        <Contactanos/>
      
    </>

  )
}
