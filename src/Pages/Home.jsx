export default function Home() {
  return (

    <>
    <section className="relative w-full min-h-screen overflow-hidden">
    <img src="https://picsum.photos/1920/1080" alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0"/>
    <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-20 flex min-h-screen items-center justify-center text-white px-6">
            <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Procesadora de Tarjetas de Crédito</h1>
            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold my-5">Ver más</button>
        </div>
    </div>
    </section>
    <section>
        <h1>Quienes Somos</h1>
    </section>

    </>

  )
}
