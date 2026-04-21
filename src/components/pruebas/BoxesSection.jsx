import { motion } from "framer-motion"
import { ShineCard } from "./ShineCard"
import { fadeUp } from "../animations"

const MotionImg = motion.img

export default function BoxesSection() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-4 gap-7 md:m-40 m-10 md:h-150">

      <MotionImg
        src="https://images.pexels.com/photos/5239818/pexels-photo-5239818.jpeg"
        alt="img-1"
        className="row-span-1 rounded-2xl object-cover w-full h-full hover:scale-105 transition"
        variants={fadeUp(0.6, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <ShineCard rowSpan={1} title="1000" subtitle="Emisión y gestión" desc="" isHrOn={false} textSize="4xl" delay={0.1} />
      <ShineCard rowSpan={2} title="POS"  subtitle="Retiros y autoservicio" desc="Procesamos pagos en puntos de venta de forma rápida y segura. Conectamos comercios con bancos para que cada compra con tarjeta se apruebe en segundos." delay={0.2} />
      <ShineCard rowSpan={3} title="ATM"  subtitle="Retiros y autoservicio" desc="Gestionamos transacciones en cajeros automáticos, permitiendo retiros, consultas y más. Aseguramos disponibilidad, control y continuidad en cada operación." delay={0.3} />
      <ShineCard rowSpan={3} title="Tarjetas" subtitle="Emisión y gestión" desc="Creamos, administramos y damos seguimiento a tarjetas de crédito y débito. Desde la aprobación hasta el uso diario, controlamos todo el ciclo de vida." delay={0.4} />

      <MotionImg
        src="https://i.imgur.com/7RHGUXM.jpeg"
        alt="img-2"
        className="row-span-2 rounded-2xl object-cover w-full h-full hover:scale-105 transition"
        variants={fadeUp(0.6, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

    </div>
  )
}