import { motion } from "framer-motion";
import QueHacemosCard from "./Components/QueHacemosCard.jsx";
import { CreditCard, ChartSpline, HandCoins, SmartphoneNfc, Workflow, BanknoteArrowDown, MonitorCog, ShieldCheck } from "lucide-react";
import { fadeInBlur } from "../../animations";



    const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}


export default function QueHacemos(){

    return(

    <>
    <motion.section className="flex flex-col gap-5 justify-center" id="queHacemos">

    <motion.h1 variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="flex justify-center text-text-primary text-4xl">
        ¿Qué Hacemos?
    </motion.h1>
    
      <motion.div variants={fadeInBlur(1, 0.5)} initial="hidden" whileInView="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 px-6 md:px-10 lg:p-20">
        <QueHacemosCard className="col-span-2" descripcion="Modelos de riesgo crediticio para la aprobación y emisión de tarjetas de crédito y productos financieros" icono={<CreditCard className="h-10 w-10 rounded-full" />}/>
        <QueHacemosCard className="col-span-2" descripcion="Análisis y estrategias para el desarrollo y rentabilidad de portfolios" icono={<ChartSpline className="h-10 w-10 rounded-full"/>} />
        <QueHacemosCard className="col-span-2" descripcion="Administración y gestión comercial de medios de pagos electrónicos y otros productos financieros" icono={<HandCoins className="h-10 w-10 rounded-full"/>}/>
        <QueHacemosCard className="col-span-2" descripcion="Gestión operativa de medios de pagos electrónicos y otros servicios financieros" icono={<SmartphoneNfc className="h-10 w-10 rounded-full"/>}/>
        <QueHacemosCard className="col-span-2" descripcion="Gestión de canales y administración de procesos de atención al público de medios de pagos electrónicos y otros productos financieros" icono={<Workflow className="h-10 w-10 rounded-full"/>}/>
        <QueHacemosCard className="col-span-2" descripcion="Gestión de cobranza de medios de pagos electrónicos y otros servicios financieros" icono={<BanknoteArrowDown className="h-10 w-10 rounded-full"/>}/>
        <QueHacemosCard className="col-span-3" descripcion="Diseño e implementación de aplicaciones y sistemas especializados para el manejo de tarjetas de crédito y productos financieros" icono={<MonitorCog className="h-10 w-10 rounded-full"/>}/>
        <QueHacemosCard className="col-span-3" descripcion="Diseño y monitoreo de modelos de riesgo transaccional para prevenir fraudes en los diferentes medios de pagos electrónicos y productos financieros" icono={<ShieldCheck className="h-10 w-10 rounded-full"/>}/>
      </motion.div>
      

    </motion.section>
    </>

    )

}