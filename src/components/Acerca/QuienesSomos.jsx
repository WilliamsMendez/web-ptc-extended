import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (

    <>
      <motion.section className="my-10" id="quienesSomos">
      
      <motion.h1 initial={{ opacity: 0, blur: 2 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="flex justify-center text-white text-4xl">
        ¿Quiénes Somos?
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="text-white py-5 max-w-2xl text-center mx-auto">
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
