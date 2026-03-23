import { Link } from "react-router-dom"
import LinkButton from "/src/components/ui/Buttons/LinkButton.jsx"

export default function NuestrosServiciosCTA(){

    return(

        <>
        
<section className="relative min-h-[350px] md:min-h-[400px] flex items-center overflow-hidden rounded-xl mx-6 md:m-10 py-16 px-6" id="nuestrosServiciosCTA">

  <img 
    src="https://i.imgur.com/fcEkcSt.jpeg" alt="Acerca Hero" className="rounded-xl absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30 backdrop-blur-[5px]" />
        
  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl mx-auto gap-10">
    
    {/* Texto */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary-static mb-4">
        Nuestros Servicios
      </h1>

      <p className="text-text-primary-static/80 max-w-xl text-base md:text-lg">
        Conecta tu negocio al futuro de los pagos digitales con respaldo y seguridad confiable.
      </p>
    </div>

    {/* Botones */}
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
      <LinkButton linkto="/servicios#titulo" bg="bg-brand-primary" titulo="Servicios" onClick={() => gtag('event', 'click_ver_mas')}/>
      <LinkButton linkto="/contacto#titulo" bg="bg-brand-accent" titulo="Contacto" onClick={() => gtag('event', 'click_cta_contacto')}/>
    </div>

  </div>

</section>
        
        </>

    )

}