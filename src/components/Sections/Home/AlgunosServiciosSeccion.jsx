import { InfiniteMovingCards } from "../../ui/effects/infinite-moving-cards";

export default function AlgunosServiciosSeccion(){

const servicios = [
  {
    quote: "Impulsamos el crecimiento mediante estrategias de ventas y optimización rentable del portafolio.",
    name: "Comercial",
    title: "Área Estratégica",
    imgSrc: "https://images.pexels.com/photos/9304427/pexels-photo-9304427.jpeg",
  },
  {
    quote: "Diseñamos estrategias promocionales que conectan marcas con clientes.",
    name: "Mercadeo",
    title: "Área de Marketing",
    imgSrc: "https://images.pexels.com/photos/7688329/pexels-photo-7688329.jpeg",
  },
  {
    quote: "Gestión integral multicanal enfocada en ventas y experiencia del cliente.",
    name: "Call Center",
    title: "Atención al Cliente",
    imgSrc: "https://images.pexels.com/photos/7709179/pexels-photo-7709179.jpeg",
  },
  {
    quote: "Administración estratégica del crédito con control y gestión de riesgo.",
    name: "Créditos",
    title: "Gestión Financiera",
    imgSrc: "https://images.pexels.com/photos/9052460/pexels-photo-9052460.jpeg",
  },
  {
    quote: "Recuperación efectiva de cartera con tecnología y comunicación empática.",
    name: "Cobros",
    title: "Gestión de Recuperación",
    imgSrc: "https://images.pexels.com/photos/4968393/pexels-photo-4968393.jpeg",
  },
]
    return(
        <>
        <section className="flex flex-col justify-center mb-40 my-40">
            <h1 className="text-text-primary text-center text-4xl p-10">Algunos de <span className="text-brand-accent">nuestros servicios</span></h1>
            <div className="flex flex-row justify-center gap-10">
            
                      <InfiniteMovingCards
                        items={servicios}
                        direction="right"
                        speed="slow"
                    />

            </div>

        </section>
        </>
    )

}