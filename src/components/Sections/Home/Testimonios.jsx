import { QuoteIcon } from "lucide-react"
import { motion } from "framer-motion"
import CardsTestimonios from "./Components/CardsTestimonios.jsx"

export default function Testimonios(){

    return(
        <>
        <section className="flex flex-col justify-center mb-40 my-40">
      <h1 className="text-text-white text-center text-3xl p-10">Testimonios</h1>
      <div className="flex flex-row justify-center gap-10">
      
        <CardsTestimonios/>

      </div>

    </section>
        </>
    )

}