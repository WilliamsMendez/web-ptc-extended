import { motion } from "framer-motion";
import QueHacemosCard from "./Components/QueHacemosCard.jsx";
import { CreditCard, ChartSpline, HandCoins, SmartphoneNfc, Workflow, BanknoteArrowDown, MonitorCog, ShieldCheck } from "lucide-react";
import { fadeInBlur, fadeLeft, fadeRight } from "../../animations";



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

    <motion.h1 variants={fadeInBlur(1, 0.2)} initial="hidden" whileInView="visible" className="flex justify-center bg-linear-to-br from-quienes-somos-top to-quienes-somos-bottom bg-clip-text text-transparent text-4xl">
        ¿Qué Hacemos?
    </motion.h1>
    
      <motion.div variants={fadeInBlur(1, 0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 px-6 md:px-10 lg:p-20">
        <motion.div variants={fadeLeft(1, 0.7)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="h-full" descripcion="Modelos de riesgo crediticio para la aprobación y emisión de tarjetas de crédito y productos financieros" icono={<CreditCard className="rounded-full" />}/>
        </motion.div>
        
        <motion.div variants={fadeRight(1, 0.9)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="h-full" descripcion="Análisis y estrategias para el desarrollo y rentabilidad de portfolios" icono={<ChartSpline className="h-10 w-10 rounded-full"/>} />
        </motion.div>
        
        <motion.div variants={fadeLeft(1, 0.9)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="h-full" descripcion="Administración y gestión comercial de medios de pagos electrónicos y otros productos financieros" icono={<HandCoins className="h-10 w-10 rounded-full"/>}/>
        </motion.div>
        
        <motion.div variants={fadeRight(1, 0.9)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="h-full" descripcion="Gestión operativa de medios de pagos electrónicos y otros servicios financieros" icono={<SmartphoneNfc className="h-10 w-10 rounded-full"/>}/>
        </motion.div>
        
        <motion.div variants={fadeLeft(1, 0.9)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="col-span-3" descripcion="Gestión de canales y administración de procesos de atención al público de medios de pagos electrónicos y otros productos financieros" icono={<Workflow className="h-10 w-10 rounded-full"/>}/>  
        </motion.div>
        
        <motion.div variants={fadeRight(1, 0.9)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="h-full" descripcion="Gestión de cobranza de medios de pagos electrónicos y otros servicios financieros" icono={<BanknoteArrowDown className="h-10 w-10 rounded-full"/>}/>
        </motion.div>
        
        <motion.div variants={fadeLeft(1, 0.9)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="h-full" descripcion="Diseño e implementación de aplicaciones y sistemas especializados para el manejo de tarjetas de crédito y productos financieros" icono={<MonitorCog className="h-10 w-10 rounded-full"/>}/>
        </motion.div>
        
        <motion.div variants={fadeRight(1, 0.9)} initial="hidden" whileInView="visible" className="col-span-3">
          <QueHacemosCard className="col-span-3" descripcion="Diseño y monitoreo de modelos de riesgo transaccional para prevenir fraudes en los diferentes medios de pagos electrónicos y productos financieros" icono={<ShieldCheck className="h-10 w-10 rounded-full"/>}/>
        </motion.div>
        
      </motion.div>
      

    </motion.section>
    </>

    )

}