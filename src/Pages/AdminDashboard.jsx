import { ChartSpline, StickyNote, Earth, Undo2, MousePointerClick } from "lucide-react"
import { HashLink } from "react-router-hash-link"
import AdminHeader from "@/components/admin/AdminHeader"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import StatCard from "@/components/admin/StatCard"
import { useState, useEffect } from "react"

export default function AdminDashboard() {

    const [analytics, setAnalytics] = useState(null)
    const [historial, setHistorial] = useState(null)


        useEffect(() => {
    Promise.all([
        fetch("http://localhost:3001/api/analytics/resumen").then(res => res.json()),
        fetch("http://localhost:3001/api/analytics/historial").then(res => res.json()),
    ]).then(([resumen, historial]) => {
        setAnalytics(resumen)
        setHistorial(historial)
        console.log(resumen, historial)
    }).catch(err => console.error("Error fetching analytics:", err))
        }, [])

    const reboteHoy = 43
    const reboteAyer = 46
    const visitasHoy = 2
    const visitasAyer = 2
    const visitasPagina1 = 100
    const paginaMasVisitada = "Home"
    const tiempoPromedio = 5
    const tiempoPromedioAyer = 3
    const tasaRebote = 63
    const tasaReboteAyer = 50
    const usuariosNuevos = 10
    const usuariosNuevosAyer = 5

    const hoy = historial[historial.length - 1]      // 19/03
    const ayer = historial[historial.length - 2]     // 18/03

        const diffPageViews = hoy.pageViews - ayer.pageViews  // 55 - 165 = -110
        const pctPageViews = Math.round((diffPageViews / ayer.pageViews) * 100)  // -67%
    

    return (
        <>

            <AdminHeader title="Analíticas" desc="Analíticas" />


            <section className="flex flex-col m-6 gap-6">


                <section className="mx-4 flex flex-col md:flex-row gap-8">
                    <TooltipProvider>
                        <StatCard
                        title="Visitas hoy"
                        value={analytics?.pageViews.toLocaleString() ?? "—"}
                        subtitle={`${pctPageViews}% vs ayer`}
                        compareValue={hoy.pageViews - ayer.pageViews}
                        tooltip="Total de visitas registradas hoy."
                        />
                        <h1 className="text-black">{diffPageViews}</h1>
                    </TooltipProvider>

                    <TooltipProvider>
                        <StatCard
                        title="Página #1"
                        value={paginaMasVisitada}
                        subtitle={`${visitasPagina1} visitas`}
                        compareValue={null}
                        tooltip="Página más visitada hoy."
                        />
                    </TooltipProvider>

                    <TooltipProvider>
                        <StatCard
                        title="Tiempo Promedio"
                        value={`${tiempoPromedio}m`}
                        subtitle={`${tiempoPromedio > tiempoPromedioAyer ? "+" : ""}${Math.round((tiempoPromedio - tiempoPromedioAyer) / tiempoPromedioAyer * 100)}% vs ayer`}
                        compareValue={tiempoPromedio - tiempoPromedioAyer}
                        tooltip="Promedio de tiempo de los usuarios activos hoy."
                        />
                    </TooltipProvider>


                    <TooltipProvider>
                        <StatCard
                        title="Tasa de Rebote"
                        value={`${tasaRebote}%`}
                        subtitle={`${tasaRebote > tasaReboteAyer ? "+" : ""}${Math.round((tasaRebote - tasaReboteAyer) / tasaReboteAyer * 100)}% vs ayer`}
                        compareValue={tasaRebote - tasaReboteAyer}
                        invertLogic={true}
                        tooltip="Porcentaje de usuarios que no interactúan en la página hoy."
                        />
                    </TooltipProvider>

                    <TooltipProvider>
                        <StatCard
                        title="Usuarios Nuevos"
                        value={`${usuariosNuevos}`}
                        subtitle={`${usuariosNuevos > usuariosNuevosAyer ? "+" : ""}${Math.round((usuariosNuevos - usuariosNuevosAyer) / usuariosNuevosAyer * 100)}% vs ayer`}
                        compareValue={usuariosNuevos - usuariosNuevosAyer}
                        tooltip="Total de usuarios que no habáin ingresado anteriormente hoy."
                        />
                    </TooltipProvider>

                </section>


                <section className="flex md:flex-row flex-col mx-5 gap-4">

                    <div className="w-full flex flex-col gap-4">
                        <h1 className="font-bold text-xl text-text-primary">Visitas los últimos 7 días</h1>
                        <div className="text-gray-300 shadow-md bg-white p-30 rounded-lg flex flex-row gap-2 justify-center">
                            <h1 className="text-2xl">Placeholder gráfico</h1>
                            <ChartSpline />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <h1 className="font-bold text-xl text-text-primary">Dispositivos</h1>
                        <div className="text-gray-300 shadow-md bg-white p-30 rounded-lg flex flex-row gap-2 justify-center">
                            <h1 className="text-2xl">Placeholder gráfico</h1>
                            <ChartSpline />
                        </div>
                    </div>


                </section>




                <section className="flex flex-col gap-2 mx-6">
                    <h1 className="font-bold text-xl text-text-primary">Páginas Más Visitadas</h1>
                    <div className="flex gap-6 flex-col md:flex-row">
                        <div className="min-w-60">
                            <div className="text-brand-accent rounded-lg flex flex-row gap-2 justify-center p-6 pb-4">
                                <h1 className="text-lg">Pgs Mas Visitadas</h1>
                                <StickyNote />
                            </div>
                            <hr className="border-solid border-1 border-brand-accent" />
                            <ul className="flex flex-col gap-2 p-4 text-text-primary">
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 1</p>
                                        <p>0</p>
                                </li>
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 2</p>
                                        <p>0</p>
                                </li>
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 3</p>
                                        <p>0</p>
                                </li>
                            </ul>
                        </div>

                        <div className="min-w-60">
                            <div className="text-brand-accent rounded-lg flex flex-row gap-2 justify-center p-6 pb-4">
                                <h1 className="text-lg">Origen de visitas</h1>
                                <Earth />
                            </div>
                            <hr className="border-solid border-1 border-brand-accent" />
                            <div>
                            <ul className="flex flex-col gap-2 p-4 text-text-primary">
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 1</p>
                                        <p>0</p>
                                </li>
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 2</p>
                                        <p>0</p>
                                </li>
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 3</p>
                                        <p>0</p>
                                </li>
                            </ul>

                            </div>
                        </div>

                        <div className="min-w-60">
                            <div className="text-brand-accent rounded-lg flex flex-row gap-2 justify-center p-6 pb-4">
                                <h1 className="text-lg">Eventos</h1>
                                <MousePointerClick />
                            </div>
                            <hr className="border-solid border-1 border-brand-accent" />
                            <ul className="flex flex-col gap-2 p-4 text-text-primary">
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 1</p>
                                        <p>0</p>
                                </li>
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 2</p>
                                        <p>0</p>
                                </li>
                                <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                                        <p>top 3</p>
                                        <p>0</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>

                <section className="flex gap-4 md:flex-row flex-col mx-4">
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="font-bold text-xl text-text-primary">Trafico por hora del día</h1>
                        <div className="bg-white shadow-md text-gray-300 rounded-lg p-12">
                            <h1 className="text-2xl">Placeholder gráfico</h1>
                            <ChartSpline />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="font-bold text-xl text-text-primary">Trafico por hora del día</h1>
                        <div className="bg-white shadow-md text-gray-300 rounded-lg p-12">
                            <h1 className="text-2xl">Placeholder gráfico</h1>
                            <ChartSpline />
                        </div>
                    </div>
                </section>

            </section>
        </>
    )

}