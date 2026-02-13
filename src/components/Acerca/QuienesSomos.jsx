import { motion } from "framer-motion";
import { fadeInBlur } from "../animations";


export default function QuienesSomos() {
  return (

    <>
      <motion.section className="my-10" id="quienesSomos">
      
      <motion.h1 variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="flex justify-center text-white text-4xl">
        ¿Quiénes Somos?
      </motion.h1>

      <motion.p variants={fadeInBlur(1, 0.5)} initial="hidden" whileInView="visible" className="text-white py-5 max-w-2xl text-center mx-auto">
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
