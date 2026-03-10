import { TextHoverEffectDemo } from "../../ui/effects/TextHoverEffect"
import { UserRoundSearch, Wallet, Store, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInBlur } from "../../animations"


export default function ComoLoHacemos(){

    return (
        <>
            {/* T I T U L O */}
            <motion.div initial={{ opacity: 0, blur: 2 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="relative flex items-center justify-center h-[250px] md:h-[400px] overflow-hidden px-6">
                <TextHoverEffectDemo texto="COMO" className="z-0" />
                <motion.h1 variants={fadeInBlur(1, 0.3)} id="comoLoHacemos" initial="hidden" whileInView="visible" className="absolute top-1/2 -translate-y-1/2 text-text-primary text-3xl md:text-4xl lg:text-5xl z-10 text-center">¿Cómo lo hacemos?</motion.h1>
            </motion.div>
            {/* D I V S */}
            <motion.div variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="my-16 px-6 md:px-10 flex flex-col md:flex-row justify-center max-w-6xl mx-auto gap-12 text-text-primary">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <UserRoundSearch/>
                    <p>Análisis, elaboración, implementación y monitoreo de modelo de riesgo, estructuración de política crediticia, prospectación de clientes, investigación y análisis de solicitudes</p>
                </div>

                <hr className="hidden md:block h-24 w-px border-l border-text-primary/50" />
                <hr className="block md:hidden w-24 h-px border-t border-text-primary/50 mx-auto" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <Wallet/>
                    <p>Creación de productos y servicios vinculados a la tarjeta de crédito, estrategias de desarrollo de cartera, gestión del ciclo de vida y modelo de rentabilidad del portfolio</p>
                </div>

                <hr className="hidden md:block h-24 w-px border-l border-text-primary/50" />
                <hr className="block md:hidden w-24 h-px border-t border-text-primary/50 mx-auto" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <Store/>
                    <p>Estrategias de venta de productos de medios de pago, gestión de canales de venta, venta de productos financieros y servicios vinculados a la tarjeta de crédito, estrategia de afiliación de comercios y distribución estratégica de ATM ´ s</p>
                </div>

                <hr className="hidden md:block h-24 w-px border-l border-text-primary/50" />
                <hr className="block md:hidden w-24 h-px border-t border-text-primary/50 mx-auto" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <CreditCard/>
                    <p>Representación con las marcas de medios de pagos Visa y Mastercard administración y gestión operativa, personalización plásticos, distribución, entrega de tarjetas, POS y documentos</p>
                </div>

            </motion.div>

        </>

    )

}