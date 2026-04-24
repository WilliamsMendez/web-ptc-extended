import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShineCard } from "./ShineCard"
import { fadeUp } from "../animations"
import { ShineCardInverse } from "./ShineCardInverse"

const MotionImg = motion.img

// 👇 Copiás AnimatedWord acá (o lo importás si lo movés a su propio archivo)
function AnimatedWord({ words }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % words.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [words])

  return (
    <span className="inline-block overflow-hidden align-bottom h-[1.2em] relative">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          className="font-black text-brand-accent inline-block"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const statWords = ["Comercios", "Empresas", "Negocios", "Bancos", "Tiendas", "Restaurantes", "Agencias"]

export default function BoxesSection() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-4 gap-7 md:m-40 m-10 md:h-150 md:mb-10">

      <MotionImg
        src="https://images.pexels.com/photos/5239818/pexels-photo-5239818.jpeg"
        alt="img-1"
        className="row-span-1 rounded-2xl object-cover w-full h-full hover:scale-105 transition"
        variants={fadeUp(0.6, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      /> 

        <ShineCardInverse         rowSpan={1}
        title={<AnimatedWord words={statWords} />}
        subtitle="Servimos a"
        desc=""
        isHrOn={false}
        textSize="4xl"
        delay={0.1}
        />

      <ShineCard rowSpan={2} title="POS" textSize="3xl"  subtitle="Retiros y autoservicio" desc="Procesamos pagos en puntos de venta de forma rápida y segura. Conectamos comercios con bancos para que cada compra con tarjeta se apruebe en segundos." delay={0.2} />
      <ShineCard rowSpan={2} title="ATM" textSize="3xl" subtitle="Retiros y autoservicio" desc="Gestionamos transacciones en cajeros automáticos, permitiendo retiros, consultas y más. Aseguramos disponibilidad, control y continuidad en cada operación." delay={0.3} />
      <ShineCard rowSpan={2} title="Tarjetas" textSize="3xl" subtitle="Emisión y gestión" desc="Creamos, administramos y damos seguimiento a tarjetas de crédito y débito. Desde la aprobación hasta el uso diario, controlamos todo el ciclo de vida." delay={0.4} />

      <MotionImg
        src="https://i.imgur.com/7RHGUXM.jpeg"
        alt="img-2"
        className="row-span-1 rounded-2xl object-cover w-full h-full hover:scale-105 transition"
        variants={fadeUp(0.6, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

    </div>
  )
}