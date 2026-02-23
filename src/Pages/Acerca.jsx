import Valores from "../components/Sections/Acerca/Valores"
import ComoLoHacemos from "../components/Sections/Acerca/ComoLoHacemos"
import QueHacemos from "../components/Sections/Acerca/QueHacemos"
import QuienesSomos from "../components/Sections/Home/QuienesSomos"
import NuestrosServiciosCTA from "../Components/Sections/Home/NuestrosServiciosCTA.jsx"
import MiniHero from "@/components/Layout/MiniHero"

export default function Acerca() {

  return (
    <>
      {/* M I N I  H E R O */}
      <div id="titulo"></div>
      <MiniHero titulo="Acerca de Nosotros" descripcion="Conoce quiénes somos, qué hacemos y cómo impulsamos soluciones innovadoras en el sector financiero." imgsrc="/src/assets/img/hero/acercahero.jpg"/>
      



      {/* CONTENIDO */}
      <div className="my-40">
        <QuienesSomos/>
      </div>

      <QueHacemos />
      <ComoLoHacemos/>
      <Valores/>
      <NuestrosServiciosCTA/>

    </>
  )
}
