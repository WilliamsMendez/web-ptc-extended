import { TextHoverEffectDemo } from "../TextHoverEffect"
import { UserRoundSearch, Wallet, Store, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInBlur } from "../animations"


export default function ComoLoHacemos(){

    return (
        <>
            {/* T I T U L O */}
            <motion.div initial={{ opacity: 0, blur: 2 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="relative flex items-center justify-center h-[400px] overflow-hidden" id="comoLoHacemos">
                <TextHoverEffectDemo texto="COMO" className="z-0" />
                <motion.h1 variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="absolute top-1/2 -translate-y-1/2 text-text-primary text-4xl z-10">¿Cómo lo hacemos?</motion.h1>
            </motion.div>
            {/* D I V S */}
            <motion.div variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="m-10 px-10 flex flex-row justify-center max-w-300 mx-auto gap-10 text-text-primary">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <UserRoundSearch/>
                    <p>Análisis, elaboración, implementación y monitoreo de modelo de riesgo, estructuración de política crediticia, prospectación de clientes, investigación y análisis de solicitudes</p>
                </div>

                <hr className="h-30 w-px border-text-primary/50 border-1" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <Wallet/>
                    <p>Creación de productos y servicios vinculados a la tarjeta de crédito, estrategias de desarrollo de cartera, gestión del ciclo de vida y modelo de rentabilidad del portfolio</p>
                </div>

                <hr className="h-30 w-px border-text-primary/50 border-1" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <Store/>
                    <p>Estrategias de venta de productos de medios de pago, gestión de canales de venta, venta de productos financieros y servicios vinculados a la tarjeta de crédito, estrategia de afiliación de comercios y distribución estratégica de ATM ´ s</p>
                </div>

                <hr className="h-30 w-px border-1 border-text-primary/50" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <CreditCard/>
                    <p>Representación con las marcas de medios de pagos Visa y Mastercard administración y gestión operativa, personalización plásticos, distribución, entrega de tarjetas, POS y documentos</p>
                </div>

            </motion.div>

        </>

    )

}