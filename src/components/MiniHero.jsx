export default function MiniHero({titulo="", descripcion=""}){

    return(

        <>
        
        <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        
        <img src="https://picsum.photos/1920/1080?grayscale" alt="Acerca Hero" className="absolute inset-0 w-full h-full object-cover"/>

        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Contenido Hero */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
            {titulo}
          </h1>
          <p className="text-text-primary/80 max-w-2xl mx-auto text-lg">{descripcion}</p>
        </div>

      </section>
        
        </>

    )

}