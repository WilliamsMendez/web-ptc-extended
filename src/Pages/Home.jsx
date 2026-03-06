import HeroButton from "../components/ui/Buttons/HeroButton"
import { QuoteIcon, Mail, MapPinned } from "lucide-react"
import { motion } from "motion/react"
import NumberCounter from "../components/Sections/Home/Components/NumberCounter"
import CreditCard3D from "../components/Sections/Home/Components/CreditCard3D"
import QuienesSomos from "../components/Sections/Home/QuienesSomos"
import Misionyvision from "../components/Sections/Home/Misionyvision"
import Estadistica from "../components/Sections/Home/Estadistica"
import Testimonios from "../components/Sections/Home/Testimonios"
import Contactanos from "../components/Sections/Home/ContactanosSeccion"
import { ChevronsDown } from "lucide-react"
import { Link } from "react-router-dom"
import NuestrosServiciosCTA from "../components/Sections/Home/NuestrosServiciosCTA.jsx"
import LinkButton from "@/components/ui/Buttons/LinkButton"
import { fadeInBlur } from "@/components/animations"
import HeroPanel from "@/components/Layout/HeroPanel"
import AlgunosServiciosSeccion from "@/components/Sections/Home/AlgunosServiciosSeccion"
import { InfiniteMovingCards } from "@/components/ui/effects/infinite-moving-cards"
import CardsTestimonios from "@/components/Sections/Home/Components/CardsTestimonios"
import { ServicioCard } from "@/components/Sections/Home/Components/NuestrosServiciosCard"
import FinanzasEstadisticas from "@/components/Sections/Home/FinanzasEstadisticas"

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

      {/* <Testimonios/> */}

      {/* F I N A N Z A S*/}

      <FinanzasEstadisticas/>

      {/* S E R V I C I O S*/}

      <AlgunosServiciosSeccion/>


      {/* S E R V I C I O S  C  T A */}

        <NuestrosServiciosCTA/>


      {/* C O N T A C T A N O S*/}

        <Contactanos/>
      
    </>

  )
}
