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
import HeroPanel from "@/components/Landing/HeroPanel"

export default function Home() {
  return (
    
    <>
        {/* H E R O  P A N E L*/}

        <HeroPanel/>

      {/* Q U I E N E S  S O M O S*/}

        <div className="flex flex-col my-40">
          <QuienesSomos/>

          <LinkButton linkto="/acerca#titulo" bg="bg-brand-accent" titulo="Más Acerca" />

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
