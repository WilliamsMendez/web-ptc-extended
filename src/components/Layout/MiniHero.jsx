export default function MiniHero({titulo="", descripcion="", imgsrc=""}){

    return(

        <>
        
        <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        
        <img src={imgsrc} alt="Acerca Hero" className="grayscale absolute inset-0 w-full h-full object-cover"/>

        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Contenido Hero */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary-static mb-4">
            {titulo}
          </h1>
          <p className="text-text-primary-static/80 max-w-2xl mx-auto text-lg">{descripcion}</p>
        </div>

      </section>
        
        </>

    )

}