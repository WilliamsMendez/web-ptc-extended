import Valores from "../components/Acerca/Valores"
import ComoLoHacemos from "../components/Acerca/ComoLoHacemos"
import QueHacemos from "../components/Acerca/QueHacemos"
import QuienesSomos from "../components/Acerca/QuienesSomos"

export default function Acerca() {

  return (
    <>
      {/* MINI HERO */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        
        {/* Imagen mockup */}
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Acerca Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Contenido */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Conoce quiénes somos, qué hacemos y cómo impulsamos soluciones
            innovadoras en el sector financiero.
          </p>
        </div>

      </section>

      {/* CONTENIDO */}
      <div className="my-40">
        <QuienesSomos />
      </div>

      <QueHacemos />
      <ComoLoHacemos/>
      <Valores/>

    </>
  )
}
