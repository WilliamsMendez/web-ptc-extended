import { motion } from "framer-motion"
import CreditCard3D from "./landingcomponents/CreditCard3D"

export default function Misionyvision() {
  return (
    <section className="relative flex flex-row gap-4 my-40 mx-0 py-40 overflow-hidden" id="misionYVision">
      
      {/* Imagen de fondo */}
      <img
        src="/src/assets/img/TV - 1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />

      <div className="relative z-10 flex flex-row mx-32 gap-12">
        
        {/* Card */}
        <div>
          <CreditCard3D />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-6 text-text-white max-w-2xl text-center my-auto">
          
          <motion.div
            initial={{ opacity: 0, blur: 2 }}
            whileInView={{ opacity: 1, blur: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-10"
          >
            <h1 className="font-bold text-2xl">Misión</h1>
            <p>
              Somos un aliado estratégico de empresas financieras, enfocados en satisfacer
              las necesidades de los clientes de medios de pago con transparencia y
              responsabilidad social.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, blur: 2 }}
            whileInView={{ opacity: 1, blur: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-10"
          >
            <h1 className="font-bold text-2xl">Visión</h1>
            <p>
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
