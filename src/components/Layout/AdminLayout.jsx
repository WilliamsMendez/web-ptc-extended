import { ChartArea, User } from "lucide-react"
import { Outlet } from "react-router-dom"

export default function AdminLayout(){

    return(

        <>
        <div className="flex flex-row h-screen overflow-hidden w-full">
            <section className="flex flex-col bg-brand-primary h-full md:w-70 z-10">

                <div>
                    <h1 className="flex font-bold py-10 justify-center">Titulo</h1>
                </div>
                <hr className="flex border-solid border-1 border-brand-accent items-center justify-center w-50 mx-auto"/>
                <nav>
                    <ul className="flex flex-col gap-1 py-6 px-2">
                        <li className="flex flex-row gap-2 p-2 rounded-lg hover:bg-brand-accent"><ChartArea/> Dashboard</li>
                        <li className="flex flex-row gap-2 p-2 rounded-lg hover:bg-brand-accent"><User/> Usuarios</li>
                    </ul>
                </nav>
                <div className="flex flex-col justify-end mt-auto">
                    <p className="text-gray-400 p-2">© 2026 Procesadora de Tarjetas de Crédito | Todos los derechos reservados</p>
                </div>

            </section>

            <div className="m-0 p-0 bg-bg w-full overflow-y-auto h-full">
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>

        </>

    )

}