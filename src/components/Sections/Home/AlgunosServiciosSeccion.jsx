import { QuoteIcon } from "lucide-react"
import { motion } from "framer-motion"
import CardsTestimonios from "./Components/CardsTestimonios"
import { InfiniteMovingCards } from "../../ui/effects/infinite-moving-cards";

export default function AlgunosServiciosSeccion(){

const servicios = [
  {
    quote:
      "Impulsamos el crecimiento mediante estrategias de ventas y optimización rentable del portafolio.",
    name: "Comercial",
    title: "Área Estratégica",
  },
  {
    quote:
      "Diseñamos estrategias promocionales que conectan marcas con clientes.",
    name: "Mercadeo",
    title: "Área de Marketing",
  },
  {
    quote:
      "Gestión integral multicanal enfocada en ventas y experiencia del cliente.",
    name: "Call Center",
    title: "Atención al Cliente",
  },
  {
    quote:
      "Administración estratégica del crédito con control y gestión de riesgo.",
    name: "Créditos",
    title: "Gestión Financiera",
  },
  {
    quote:
      "Recuperación efectiva de cartera con tecnología y comunicación empática.",
    name: "Cobros",
    title: "Gestión de Recuperación",
  },
];

    return(
        <>
        <section className="flex flex-col justify-center mb-40 my-40">
            <h1 className="text-text-primary text-center text-3xl p-10">Algunos de nuestros servicios</h1>
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