import { TriangleAlert } from "lucide-react"

export default function AdminProtectedError(){

    return(
        <>
            <div className="flex flex-col jutify-center items-center my-80 gap-2">
               <div className="flex gap-3 justify-center items-center">
                    <TriangleAlert className="h-10 w-10 text-yellow-400"/><h1 className="text-3xl text-yellow-400">Error - Faltan Permisos</h1>
               </div>

               <p className="text-yellow-400">No tiene permisos para ingresar a esta dirección</p>
            </div>
        </>
    )

}