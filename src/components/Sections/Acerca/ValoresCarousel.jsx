import Carousel from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInBlur } from "../../animations";

export function ValoresCarousel(){

    const slideData = [
    {
      title: "Transparencia",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/transparencia.png",
    },
    {
      title: "Prudencia",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/prudencia.png",
    },
    {
      title: "Respeto",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/respeto.png",
    },
    {
      title: "Responsabilidad",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/responsabilidad.png",
    },
    {
      title: "Confianza",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/confianza.png",
    },
    {
      title: "Honestidad",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/honestidad.png",
    },
    {
      title: "Trabajo en equipo",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/trabajoenequipo.png",
    },
    {
      title: "Adaptación al cambio",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/adaptacion.png",
    },
    {
      title: "Responsabilidad Social",
      button: "Explore Component",
      src: "src/assets/img/valoresImg/responsabilidadsocial.png",
    },
  ];

    return (
    <div className="relative overflow-hidden w-full h-full py-20 flex flex-col justify-center items-center">
        <motion.h1 variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="text-text-primary text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16">
            Valores
        </motion.h1>
      <Carousel slides={slideData} />
    </div>
  );


}