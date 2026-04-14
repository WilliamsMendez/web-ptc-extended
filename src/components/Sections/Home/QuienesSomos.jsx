import { motion } from "framer-motion";
import { fadeInBlur } from "../../animations";
import LampDemo from "@/components/ui/lamp";
import { Spotlight } from "@/components/ui/spotlight";


export default function QuienesSomos() {
  return (

    <>
    <div id="verMas"></div>
<motion.section className="my-16 md:my-16 px-4" id="quienesSomos">

        <Spotlight
        className="-top-40 md:top-180 md:left-80"
        fill="var(--color-spotlight-fill)"
      />    

  <motion.h1 variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-linear-to-br from-quienes-somos-top to-quienes-somos-bottom bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold text-center">
    ¿Quiénes Somos?
  </motion.h1>

      <motion.p variants={fadeInBlur(1, 0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="bg-linear-to-br from-quienes-somos-top to-quienes-somos-bottom bg-clip-text text-transparent py-6 px-2 md:px-0 max-w-2xl text-center mx-auto text-base md:text-lg leading-relaxed">
        Somos parte de una empresa regional con más de 15 años de experiencia especializada
        en la comercialización, administración, operación y procesamiento de negocios y
        productos de medios de pago electrónicos y otros servicios financieros. Más allá de
        ofrecer un servicio de procesamiento de Tarjetas de Crédito y Débito, nuestro modelo de
        negocio agrega ese valor adicional que nuestros clientes necesitan para lograr la
        prosperidad en sus negocios.
      </motion.p>

    </motion.section>
    </>

  );
}
