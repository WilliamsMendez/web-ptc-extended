import HeroButton from "../HeroButton"
import { ChevronsDown } from "lucide-react"
import { heroImages } from "/src/data/heroImages"

export default function HeroPanel(){

    
  const randomIndex = Math.floor(Math.random() * heroImages.length)
  const randomImage = heroImages[randomIndex]

    return(

        <>
        
        <section className="relative w-full min-h-screen overflow-hidden" id="titulo">
        <img src={randomImage.src} alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0"/>
        <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="relative z-20 flex min-h-screen items-center justify-center text-text-primary px-6">
                <div className="text-center max-w-3xl">
                <div className="flex flex-row gap-1 justify-center">
                    <img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className="h-30 w-30"/>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Procesadora de Tarjetas de Crédito</h1>
                </div>
                <div className="w-40 flex flex-col justify-center mx-auto items-center gap-5">
                    <HeroButton/>
                    <div className="relative">
                    <ChevronsDown className="w-15 h-15 text-text-primary animate-pulse" />
                    </div>
                </div>
                
            </div>
        </div>
        </section>
        
        </>

    )

}