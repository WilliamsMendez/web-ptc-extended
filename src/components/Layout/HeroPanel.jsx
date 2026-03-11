import HeroButton from "../ui/Buttons/HeroButton"
import { ChevronsDown } from "lucide-react"
import { heroImages } from "/src/data/heroImages"
import { fadeInBlur } from "../animations"
import { motion } from "framer-motion";

export default function HeroPanel(){

    
  const randomIndex = Math.floor(Math.random() * heroImages.length)
  const randomImage = heroImages[randomIndex]

    return(

        <>
        
<motion.section variants={fadeInBlur(1, 0.2)} initial="hidden" whileInView="visible" viewport={{once: true}} className="relative w-full min-h-screen overflow-hidden" id="titulo">
  
  <img src="src/assets/img/heroImg/herodisenoptc 1.png" alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0"/>

  <div className="absolute inset-0 z-10" />

  <div className="relative z-20 flex min-h-screen items-center justify-center md:justify-end text-text-primary px-6">
    
    <motion.div variants={fadeInBlur(1, 0.6)} initial="hidden" whileInView="visible" viewport={{once: true}} className="text-center max-w-4xl">

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">

        <img src="src/assets/img/common/PTC_2-removebg-preview.png" alt="" className="h-16 w-16 md:h-24 md:w-24"/>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary-static leading-tight md:mr-20">
          Procesadora de <br/> Tarjetas de Crédito
        </h1>

      </div>

      <div className="mt-8 flex flex-col items-center gap-6">
        <HeroButton/>
        <ChevronsDown className="w-10 h-10 md:w-12 md:h-12 text-text-primary-static animate-pulse" />
      </div>

    </motion.div>

  </div>
</motion.section>
        
        </>

    )

}