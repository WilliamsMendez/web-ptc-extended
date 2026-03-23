import { ChartArea, User, LogOut, TableProperties } from "lucide-react"
import { Outlet } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import ThemeToggle from "../ui/Buttons/ThemeToggle";
import { HashLink } from "react-router-hash-link";

export default function AdminLayout(){
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex flex-row h-screen overflow-hidden w-full">
      
      {/* SIDEBAR — solo visible en md+ */}
      <section className="hidden md:flex flex-col bg-brand-primary h-full w-70 z-10">
        <div className="p-4">
          {/*<h1 className="flex font-bold py-10 justify-center text-text-primary-static">Titulo</h1>*/}
          <img src="https://i.imgur.com/r1sB3MS.png" alt="logo procesadora de tarjetas de credito" className="h-13 static"/>
        </div>
        <hr className="flex border-solid border-1 border-brand-accent items-center justify-center w-50 mx-auto"/>
        <nav className="text-text-primary-static">
          <ul className="flex flex-col gap-1 py-6 px-2">
            <HashLink to="/admin">
              <li className="flex flex-row gap-2 p-2 rounded-lg hover:bg-brand-primary-120 hover:text-brand-accent-110 cursor-pointer">
                <ChartArea/> Dashboard
              </li>
            </HashLink>
            <HashLink to="/admin/users">
              <li className="flex flex-row gap-2 p-2 rounded-lg hover:bg-brand-primary-120 hover:text-brand-accent-110 cursor-pointer">
                <User/> Usuarios
              </li>
            </HashLink>
              <HashLink to="/admin/historial">
              <li className="flex flex-row gap-2 p-2 rounded-lg hover:bg-brand-primary-120 hover:text-brand-accent-110 cursor-pointer">
                <TableProperties/> Historial
              </li>
            </HashLink>
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
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}
                className="p-1 bg-red-700 rounded-md hover:scale-110 hover:bg-red-600 transition cursor-pointer border-solid border-2 border-red-900">
                <LogOut className="h-4 w-4"/>
              </button>
            </div>
          </div>
          <p className="text-gray-400 p-2 text-xs">© 2026 Procesadora de Tarjetas de Crédito | Todos los derechos reservados</p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="m-0 p-0 bg-bg w-full overflow-y-auto h-full pb-16 md:pb-0">
        <main>
          <Outlet/>
        </main>
      </div>

      {/* BOTTOM BAR — solo visible en mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-primary border-t border-brand-accent z-50 py-2 m-2 rounded-xl">
        <ul className="flex flex-row justify-around items-center h-16">
          <HashLink to="/admin" className="flex-1">
            <li className="flex flex-col items-center justify-center gap-1 py-2 text-text-primary-static hover:text-brand-accent transition">
              <ChartArea className="h-5 w-5"/>
              <span className="text-xs">Dashboard</span>
            </li>
          </HashLink>
          <HashLink to="/admin/users" className="flex-1">
            <li className="flex flex-col items-center justify-center gap-1 py-2 text-text-primary-static hover:text-brand-accent transition">
              <User className="h-5 w-5"/>
              <span className="text-xs">Usuarios</span>
            </li>
          </HashLink>
          <li className="flex flex-col items-center justify-center gap-1 py-2 flex-1">
            <ThemeToggle/>
          </li>
          <li 
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}
            className="flex flex-col items-center justify-center gap-1 py-2 flex-1 cursor-pointer text-red-400 hover:text-red-300 transition">
            <LogOut className="h-5 w-5"/>
            <span className="text-xs">Salir</span>
          </li>
        </ul>
      </nav>

    </div>
  )
}