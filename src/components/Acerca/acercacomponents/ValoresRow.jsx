import { motion } from "framer-motion"
import { fadeIn, fadeInBlur } from "@/components/animations"

export default function ValoresRow({
  valor = "",
  descripcion = "",
  reverse = false
}) {
  return (
    <>
      {!reverse && (
        <motion.div
          variants={fadeIn(1, 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center text-center p-20"
        >
          <h1 className="text-xl font-semibold">{valor}</h1>
          <p>{descripcion}</p>
        </motion.div>
      )}

      <motion.img
        variants={fadeInBlur(1, 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        src="https://picsum.photos/500/200?"
        alt=""
        className="rounded-xl"
      />

      {reverse && (
        <motion.div
          variants={fadeIn(1, 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center text-center p-20"
        >
          <h1 className="text-xl font-semibold">{valor}</h1>
          <p>{descripcion}</p>
        </motion.div>
      )}
    </>
  )
}
