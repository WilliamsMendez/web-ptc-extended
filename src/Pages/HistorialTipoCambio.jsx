import { useState, useEffect } from "react";
import TipoCambio from "@/api/bchapi";
import MiniHero from "@/components/Layout/MiniHero";

export default function HistorialTipoCambio(){

    const [historial, setHistorial] = useState([]);

  useEffect(() => {

    const obtenerHistorial = async () => {

      const response = await fetch("http://localhost:3001/api/tipo-cambio-historial");
      const data = await response.json();

      setHistorial(data);

    };

    obtenerHistorial();

  }, []);
    return(

    <>
    
        <MiniHero titulo="Historial del tipo de cambio" descripcion="Archivo histórico (7 días) del tipo de cambio de referencia. Consulta valores pasados, datos oficiales actualizados." imgsrc="src/assets/img/hero/acercahero.jpg" id="titulo"/>

        <div className="flex flex-col justify-center items-center gap-10 my-20 text-text-primary">
            <div className="flex flex-col justify-center items-center text-lg md:text-3xl">
                <h1 className="pb-5">Tipo de Cambio de Referencia:</h1>
                <TipoCambio/>
            </div>
        </div>

        <div className="flex flex-col items-center gap-5">
            <h1 className="text-lg md:text-3xl text-text-primary">Historial de los últimos 7 días</h1>
            <table className="table-auto md:table-extended w-100 my-20 mt-0">
            <thead className="bg-gray-800">
                <tr>
                    <th className="p-2">Tipo</th>
                    <th className="p-2">Fecha</th>
                </tr>
            </thead>
<       tbody className="bg-gray-700">

          {historial.map((item, index) => (

            <tr key={index}>
              <td className="p-2">L {item.valor}</td>
              <td className="p-2">
                {new Date(item.fecha).toLocaleDateString("es-HN")}
              </td>
            </tr>

          ))}

        </tbody>

        

        </table>
        </div>
        

    </>

    )
    

}