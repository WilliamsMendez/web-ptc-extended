import { TextHoverEffectDemo } from "../TextHoverEffect"
import { UserRoundSearch, Wallet, Store, CreditCard } from "lucide-react"
import { motion } from "framer-motion"


export default function ComoLoHacemos(){

    return (

        <>
            {/* T I T U L O */}
            <motion.div initial={{ opacity: 0, blur: 2 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="relative flex items-center justify-center h-[400px] overflow-hidden">
                <TextHoverEffectDemo texto="COMO" className="z-0" />
                <h1 className="absolute top-1/2 -translate-y-1/2 text-white text-4xl z-10">¿Cómo lo hacemos?</h1>
            </motion.div>
            {/* D I V S */}
            <motion.div initial={{ opacity: 0, blur: 2 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="m-10 flex flex-row justify-center max-w-300 mx-auto gap-10 bg-[#111111]">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <UserRoundSearch color="white"/>
                    <p>Análisis, elaboración, implementación y monitoreo de modelo de riesgo, estructuración de política crediticia, prospectación de clientes, investigación y análisis de solicitudes</p>
                </div>

                <hr className="h-30 w-px border-white/50 border-1" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <Wallet/>
                    <p>Creación de productos y servicios vinculados a la tarjeta de crédito, estrategias de desarrollo de cartera, gestión del ciclo de vida y modelo de rentabilidad del portfolio</p>
                </div>

                <hr className="h-30 w-px border-white/50 border-1" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <Store/>
                    <p>Estrategias de venta de productos de medios de pago, gestión de canales de venta, venta de productos financieros y servicios vinculados a la tarjeta de crédito, estrategia de afiliación de comercios y distribución estratégica de ATM ´ s</p>
                </div>

                <hr className="h-30 w-px border-1 border-white/50" />

                <div className="flex flex-col gap-5 justify-center items-center">
                    <CreditCard/>
                    <p>Representación con las marcas de medios de pagos Visa y Mastercard administración y gestión operativa, personalización plásticos, distribución, entrega de tarjetas, POS y documentos</p>
                </div>

            </motion.div>

        </>

    )

}