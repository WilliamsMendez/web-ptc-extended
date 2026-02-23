import HeroButton from "../ui/Buttons/HeroButton"
import { ChevronsDown } from "lucide-react"
import { heroImages } from "/src/data/heroImages"

export default function HeroPanel(){

    
  const randomIndex = Math.floor(Math.random() * heroImages.length)
  const randomImage = heroImages[randomIndex]

    return(

        <>
        
<section className="relative w-full min-h-screen overflow-hidden" id="titulo">
  
  <img 
    src={randomImage.src} 
    alt="Hero background" 
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

  <div className="relative z-20 flex min-h-screen items-center justify-center text-text-primary px-6">
    
    <div className="text-center max-w-4xl">

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <img 
          src="/src/assets/img/common/PTC_2-removebg-preview.png" 
          alt="" 
          className="h-16 w-16 md:h-24 md:w-24"
        />

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary-static leading-tight">
          Procesadora de Tarjetas de Crédito
        </h1>
      </div>

      <div className="mt-8 flex flex-col items-center gap-6">
        <HeroButton/>
        <ChevronsDown className="w-10 h-10 md:w-12 md:h-12 text-text-primary-static animate-pulse" />
      </div>

    </div>

  </div>
</section>
        
        </>

    )

}