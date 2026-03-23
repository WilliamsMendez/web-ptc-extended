import { HashLink } from "react-router-hash-link"
import { Undo2, Download } from "lucide-react"

export default function AdminHeader({title, desc}){

    const fechaActual = new Date().toLocaleDateString();

    return(

        <>
        
            <div className="flex md:flex-row flex-col items-center justify-between mx-8">             
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-text-primary">{title}</h1>
                    <p className="text-gray-400 mt-1">Bienvenido al panel de {desc}</p>
                </div>


                <div className="flex items-center gap-4">

                    <div>
                        <p className="text-text-primary">{fechaActual}</p>
                    </div>

                    <button className="text-text-primary border border-solid border-bg-120/70 bg-bg hover:bg-bg-110 cursor-pointer transition p-2 rounded-md flex gap-2 items-center">
                        <p>Exportar Excel</p>
                        <Download className="h-4"/>
                    </button>

                    <div className="text-text-primary border border-solid border-bg-120/70 bg-bg hover:bg-bg-110 cursor-pointer transition p-2 rounded-md">
                        <HashLink to="/">
                            <Undo2 className="h-6 w-6"/>
                        </HashLink>
                    </div> 
                </div>
                
   
            </div>

        
        </>

    )

}