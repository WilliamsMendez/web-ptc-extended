import Carousel from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInBlur } from "../../animations";

export function ValoresCarousel(){

    const slideData = [
    {
      title: "Transparencia",
      button: "Explore Component",
      src: "https://i.imgur.com/tfJK4fU.png",
    },
    {
      title: "Prudencia",
      button: "Explore Component",
      src: "https://i.imgur.com/4X9Vwa6.jpeg",
    },
    {
      title: "Respeto",
      button: "Explore Component",
      src: "https://i.imgur.com/46nBN5H.png",
    },
    {
      title: "Responsabilidad",
      button: "Explore Component",
      src: "https://i.imgur.com/Qd0FRsg.png",
    },
    {
      title: "Confianza",
      button: "Explore Component",
      src: "https://i.imgur.com/ov1WeWp.png",
    },
    {
      title: "Honestidad",
      button: "Explore Component",
      src: "https://i.imgur.com/iW04aXI.png",
    },
    {
      title: "Trabajo en equipo",
      button: "Explore Component",
      src: "https://i.imgur.com/bpuP1XS.jpeg",
    },
    {
      title: "Adaptación al cambio",
      button: "Explore Component",
      src: "https://i.imgur.com/FYUEPGp.jpeg",
    },
    {
      title: "Responsabilidad Social",
      button: "Explore Component",
      src: "https://i.imgur.com/C5sipa8.png",
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