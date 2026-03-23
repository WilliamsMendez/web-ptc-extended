import { motion } from "framer-motion"
import CreditCard3D from "./Components/CreditCard3D"

export default function Misionyvision() {
  return (
    <section 
  className="relative flex flex-col md:flex-row gap-12 my-24 md:my-40 py-24 md:py-40 px-6 md:px-0 overflow-hidden" 
  id="misionYVision"
>

  {/* Imagen de fondo */}
  <motion.img
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
    src="https://i.imgur.com/9LNA1Il.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
  />

  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12">
    
    {/* Card */}
    <div className="flex justify-center">
      <CreditCard3D />
    </div>

    {/* Texto */}
    <div className="flex flex-col gap-10 text-text-white max-w-2xl text-center md:text-left">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-2xl md:text-3xl mb-2">Misión</h1>
        <p className="text-base md:text-lg leading-relaxed">
          Somos un aliado estratégico de empresas financieras, enfocados en satisfacer
          las necesidades de los clientes de medios de pago con transparencia y
          responsabilidad social.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-2xl md:text-3xl mb-2">Visión</h1>
        <p className="text-base md:text-lg leading-relaxed">
          Ocupar una posición de liderazgo en medios de pagos electrónicos,
          contribuyendo al desarrollo con responsabilidad social en el mercado donde
          operen nuestros clientes.
        </p>
      </motion.div>

    </div>
  </div>
</section>
  )
}
