import TipoCambio from "@/api/bchapi.jsx"
import LinkButton from "@/components/ui/Buttons/LinkButton"
import { Link } from "react-router-dom"

export default function FinanzasEstadisticas(){

    return(

        

        <>
        <div className="flex flex-col justify-center items-center gap-10 text-text-primary">
            <div className="flex flex-col justify-center items-center text-lg md:text-3xl">
                <h1 className="pb-5">Cambio del dólar hoy:</h1>
                <TipoCambio/>
            </div>
            <LinkButton titulo="Ver Más" linkto="/historial-cambio"/>
        </div>




            
        </>

    )

}