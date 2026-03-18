import { HashLink } from "react-router-hash-link"
import { Undo2 } from "lucide-react"

export default function AdminHeader({title, desc}){

    return(

        <>
        
            <div className="flex items-center justify-between">             
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-text-primary">{title}</h1>
                    <p className="text-gray-400 mt-1">Bienvenido al panel de {desc}</p>
                </div>
                <HashLink to="/">
                    <div className="mx-20 text-text-primary rounded-full p-2 hover:bg-bg-120 transition">
                        <Undo2 className="h-10 w-10"/>
                    </div>
                </HashLink>
   
            </div>

        
        </>

    )

}