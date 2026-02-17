import Valores from "../components/Acerca/Valores"
import ComoLoHacemos from "../components/Acerca/ComoLoHacemos"
import QueHacemos from "../components/Acerca/QueHacemos"
import QuienesSomos from "../components/Acerca/QuienesSomos"
import NuestrosServiciosCTA from "../components/NuestrosServiciosCTA"
import MiniHero from "@/components/MiniHero"

export default function Acerca() {

  return (
    <>
      {/* M I N I  H E R O */}
      <MiniHero titulo="Acerca de Nosotros" descripcion="Conoce quiénes somos, qué hacemos y cómo impulsamos soluciones innovadoras en el sector financiero." id="titulo"/>



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
