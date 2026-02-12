import { motion } from "framer-motion";


export default function Valores(){

    return(

        <>
            <div className="mt-40 flex flex-col justify-center text-center gap-5">

                <motion.h1 initial={{ opacity: 0, blur: 2 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="flex justify-center text-white text-4xl">
                    Valores
                </motion.h1>

                <div className="m-10 flex flex-row">

                    <div>
                        <h1 className="">Transparencia</h1>
                        <h1>Prudencia</h1>
                        <h1>Respeto</h1>
                    </div>

                    <div>
                        <h1>Honestidad</h1>
                        <h1>Responsabilidad</h1>
                        <h1>Confianza</h1>
                    </div>

                    <div>
                        <h1>Trabajo en equipo</h1>
                        <h1>Adaptación al cambio</h1>
                        <h1>Responsabilidad Social</h1>
                    </div>

                </div>

            </div>
        </>

    )

}