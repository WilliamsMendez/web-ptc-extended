import { ChartArea, User, LogOut, Undo2 } from "lucide-react"
import { Outlet } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import ThemeToggle from "../ui/Buttons/ThemeToggle";
import { HashLink } from "react-router-hash-link";

export default function AdminLayout(){

      const { user, isAuthenticated, logout } = useAuth0();

    return(

        <>
        <div className="flex flex-row h-screen overflow-hidden w-full">
            <section className="flex flex-col bg-brand-primary h-full md:w-70 z-10">

                <div>
                    <h1 className="flex font-bold py-10 justify-center text-text-primary-static">Titulo</h1>
                </div>
                <hr className="flex border-solid border-1 border-brand-accent items-center justify-center w-50 mx-auto"/>
                <nav className="text-text-primary-static">
                    <ul className="flex flex-col gap-1 py-6 px-2">
                        <HashLink to="/admin"><li className="flex flex-row gap-2 p-2 rounded-lg hover:bg-brand-primary-120 hover:text-brand-accent-110 cursor-pointer hover:border-0 border-solid border-brand-accent-80"><ChartArea/> Dashboard</li></HashLink>
                        <HashLink to="/admin/users"><li className="flex flex-row gap-2 p-2 rounded-lg hover:bg-brand-primary-120 hover:text-brand-accent-110 cursor-pointer hover:border-0 border-solid border-brand-accent-80"><User/> Usuarios</li></HashLink>
                    </ul>
                </nav>
                <div className="flex flex-col justify-end mt-auto text-text-primary-static">
                    <div className="flex flex-col gap-2 bg-brand-secondary rounded-md mx-4">
                        <div className="flex justify-between items-center p-2 px-4">
                            <p>Modo:</p>
                            <ThemeToggle/>
                        </div>
                        <hr className="mx-2 border-solid border-1 border-brand-secondary-80"/>
                        <div className="flex justify-between items-center p-2 px-4">
                            <div>{isAuthenticated && <p>{user.nickname}</p>}</div>
                            <button
                            onClick={()=> logout({ logoutParams: {returnTo: window.location.origin}})}
                            className="p-1 bg-red-700 rounded-md hover:scale-110 hover:bg-red-600 transition cursor-pointer border-solid border-2 border-red-900">
                                <LogOut className="h-4 w-4"/>
                            </button>
                        </div>
                    </div>


                    <p className="text-gray-400 p-2 text-xs">© 2026 Procesadora de Tarjetas de Crédito | Todos los derechos reservados</p>
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