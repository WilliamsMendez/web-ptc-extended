import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import { fadeInBlur } from "../animations";
import ValoresRow from "./acercacomponents/ValoresRow";

export default function Valores(){

    return(

        <>
            <div className="mt-40 flex flex-col justify-center text-center gap-5" id="valores">

                <motion.h1 variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="flex justify-center text-text-primary text-4xl">
                    Valores
                </motion.h1>

                    <div className="grid grid-cols-2 gap-y-5 place-items-center m-10">

                        <ValoresRow 
                            valor="Transparencia"
                            descripcion="Operamos con claridad en cada proceso y transacción. Nuestros clientes conocen cómo funcionan nuestros servicios, costos y políticas, generando relaciones basadas en información abierta y accesible."
                        />
                        
                        <ValoresRow 
                            valor="Prudencia"
                            descripcion="Gestionamos cada operación con criterio y análisis responsable del riesgo. La seguridad financiera y la estabilidad operativa son prioridad en cada decisión que tomamos."
                            reverse
                        />

                        <ValoresRow 
                            valor="Respeto"
                            descripcion="Valoramos a nuestros clientes, aliados y colaboradores, promoviendo relaciones basadas en trato digno, inclusión y comunicación profesional en cada interacción."
                        />

                        <ValoresRow 
                            valor="Responsabilidad"
                            descripcion="Asumimos con compromiso la protección de los datos, la continuidad del servicio y el cumplimiento normativo, garantizando operaciones seguras y confiables."
                            reverse
                        />

                        <ValoresRow 
                            valor="Confianza"
                            descripcion="Construimos confianza a través de tecnología robusta, procesos seguros y cumplimiento constante de estándares internacionales en la industria de pagos."

                        />

                        <ValoresRow 
                            valor="Honestidad"
                            descripcion="Actuamos con integridad en cada negociación y proceso, manteniendo coherencia entre lo que prometemos y lo que entregamos."
                            reverse
                        />

                        <ValoresRow 
                            valor="Trabajo en equipo"
                            descripcion="Fomentamos la colaboración entre áreas técnicas, operativas y comerciales para ofrecer soluciones integrales y eficientes a nuestros clientes."
                            
                        />

                        <ValoresRow 
                            valor="Adaptación al cambio"
                            descripcion="Evolucionamos junto al mercado y la tecnología, integrando innovación constante para responder a nuevas demandas del ecosistema financiero digital."
                            reverse
                        />

                        <ValoresRow 
                            valor="Responsabilidad Social"
                            descripcion="Contribuimos al desarrollo económico y digital, promoviendo prácticas éticas y apoyando iniciativas que fortalezcan la inclusión financiera."
                            
                        />
                    </div>


            </div>
        </>

    )

}