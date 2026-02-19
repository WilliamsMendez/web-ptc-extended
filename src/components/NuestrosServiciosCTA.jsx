import { Link } from "react-router-dom"
import LinkButton from "./LinkButton"

export default function NuestrosServiciosCTA(){

    return(

        <>
        
      <section className="relative min-h-[400px] flex items-center overflow-hidden rounded-xl m-10" id="nuestrosServiciosCTA">
        
        <img src="/src/assets/img/nuestrosservicioscta.jpg" alt="Acerca Hero" className="rounded-xl absolute inset-0 w-full h-full object-cover"/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30 backdrop-blur-[7px]" />
        
        <div className="flex flex-row gap-5 justify-center place-items-center mx-auto">
          <div className="flex flex-col relative z-10 text-left px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary-static mb-4">Nuestros Servicios</h1>
            <p className="text-text-primary-static/80 max-w-2xl mx-auto text-lg">Conecta tu negocio al futuro de los pagos digitales con respaldo y seguridad confiable.</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <LinkButton linkto="/servicios#titulo" bg="bg-brand-primary"titulo="Servicios"/>
            <LinkButton linkto="/contacto#titulo" bg="bg-brand-accent" titulo="Contacto"/>
          </div>
        </div>


          
      </section>
        
        </>

    )

}