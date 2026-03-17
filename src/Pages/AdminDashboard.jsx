import { ChartSpline, StickyNote, Earth } from "lucide-react"

export default function AdminDashboard(){

    return(
        <>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-text-primary">Analíticas</h1>
                <p className="text-gray-400 mt-1">Bienvenido al panel de analíticas</p>
            </div>
            
            <section className="flex flex-col m-6 gap-6">

            
                <section className="flex flex-col md:flex-row gap-8">
                
                    <div className="flex flex-col gap-1 bg-white rounded-lg p-10 md:min-w-70">
                        <h1 className="text-brand-primary font-bold md:text-lg">Visitas Hoy</h1>
                        <hr className="h-0 w-15 border-solid border-1 border-gray-300"/>
                        <h1 className="text-brand-accent font-bold md:text-2xl">0</h1>
                    </div>

                    <div className="flex flex-col gap-1 bg-white rounded-lg p-10 md:min-w-70">
                        <h1 className="text-brand-primary font-bold md:text-lg">Página #1</h1>
                        <hr className="h-0 w-15 border-solid border-1 border-gray-300"/>
                        <h1 className="text-brand-accent font-bold md:text-2xl">Home</h1>
                    </div>

                    <div className="flex flex-col gap-1 bg-white rounded-lg p-10 md:min-w-90">
                        <h1 className="text-brand-primary font-bold md:text-lg">Tiempo Promedio</h1>
                        <hr className="h-0 w-15 border-solid border-1 border-gray-300"/>
                        <h1 className="text-brand-accent font-bold md:text-2xl">00m</h1>
                    </div>

                </section>

                <h1 className="font-bold text-2xl">Visitas los últimos 7 días</h1>

                <div className="text-gray-300 bg-white p-30 rounded-lg flex flex-row gap-2 justify-center mx-5">
                    <h1 className="text-2xl">Placeholder gráfico</h1>
                    <ChartSpline/>
                </div>

                <h1 className="font-bold text-2xl">Páginas Más Visitadas</h1>

                <section className="flex gap-20 mx-6">
                    
                    <div>
                        <div className="text-brand-accent rounded-lg flex flex-row gap-2 justify-center p-6 pb-4">
                            <h1 className="text-lg">Pgs Mas Visitadas</h1>
                            <StickyNote/>
                        </div>
                        <hr className="border-solid border-1 border-brand-accent"/>
                        <ul className="flex flex-col gap-2 p-4">
                            <li className="flex flex-row">top 1 
                                <div className="flex justify-end mx-auto">
                                    <p>0</p>
                                </div>
                            </li>
                            <li className="flex flex-row">top 2 
                                <div className="flex justify-end mx-auto">
                                    <p>0</p>
                                </div>
                            </li>
                            <li className="flex flex-row">top 3 
                                <div className="flex justify-end mx-auto">
                                    <p>0</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <div className="text-brand-accent rounded-lg flex flex-row gap-2 justify-center p-6 pb-4">
                            <h1 className="text-lg">Origen de visitas</h1>
                            <Earth/>  
                            </div>
                                <hr className="border-solid border-1 border-brand-accent"/>
                            <div>
                        <ul className="flex flex-col gap-2 p-4">
                            <li className="flex flex-row">top 1 
                                <div className="flex justify-between mx-auto">
                                    <p>0</p>
                                </div>
                            </li>
                            <li className="flex flex-row">top 2 
                                <div className="flex justify-between mx-auto">
                                    <p>0</p>
                                </div>
                            </li>
                            <li className="flex flex-row">top 3 
                                <div className="flex justify-between mx-auto">
                                    <p>0</p>
                                </div>
                            </li>
                        </ul>
                            
                        </div>
                    </div>

                </section>
                
            </section>
        </>
    )

}