import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInBlur } from "../../animations";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Valores() {

  const valores = [
    {
      titulo: "Transparencia",
      descripcion: "Operamos con claridad en cada proceso y transacción. Nuestros clientes conocen cómo funcionan nuestros servicios, costos y políticas, generando relaciones basadas en información abierta y accesible."
    },
    {
      titulo: "Prudencia",
      descripcion: "Gestionamos cada operación con criterio y análisis responsable del riesgo. La seguridad financiera y la estabilidad operativa son prioridad en cada decisión que tomamos."
    },
    {
      titulo: "Respeto",
      descripcion: "Valoramos a nuestros clientes, aliados y colaboradores, promoviendo relaciones basadas en trato digno, inclusión y comunicación profesional en cada interacción."
    },
    {
      titulo: "Responsabilidad",
      descripcion: "Asumimos con compromiso la protección de los datos, la continuidad del servicio y el cumplimiento normativo, garantizando operaciones seguras y confiables."
    },
    {
      titulo: "Confianza",
      descripcion: "Construimos confianza a través de tecnología robusta, procesos seguros y cumplimiento constante de estándares internacionales en la industria de pagos."
    },
    {
      titulo: "Honestidad",
      descripcion: "Actuamos con integridad en cada negociación y proceso, manteniendo coherencia entre lo que prometemos y lo que entregamos."
    },
    {
      titulo: "Trabajo en equipo",
      descripcion: "Fomentamos la colaboración entre áreas técnicas, operativas y comerciales para ofrecer soluciones integrales y eficientes a nuestros clientes."
    },
    {
      titulo: "Adaptación al cambio",
      descripcion: "Evolucionamos junto al mercado y la tecnología, integrando innovación constante para responder a nuevas demandas del ecosistema financiero digital."
    },
    {
      titulo: "Responsabilidad Social",
      descripcion: "Contribuimos al desarrollo económico y digital, promoviendo prácticas éticas y apoyando iniciativas que fortalezcan la inclusión financiera."
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % valores.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? valores.length - 1 : prev - 1
    );
  };

  return (
    <section className="my-24 md:my-40 text-center px-6">

      <motion.h1 variants={fadeInBlur(1, 0.3)} initial="hidden" whileInView="visible" className="text-text-primary text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16">
        Valores
      </motion.h1>

    <div className="relative max-w-4xl mx-auto">

    {/* Flecha izquierda */}
    <button onClick={prev} className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-brand-secondary p-2 md:p-3 rounded-full hover:scale-110 transition shadow-xl hover:text-text-inverse hover:bg-brand-accent">
        <ChevronLeft />
    </button>

    {/* Flecha derecha */}
    <button onClick={next} className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-brand-secondary p-2 md:p-3 rounded-full hover:scale-110 transition shadow-xl hover:text-text-inverse hover:bg-brand-accent">
        <ChevronRight />
    </button>


        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5 }} className="bg-gradient-to-t from-brand-primary to-brand-accent rounded-3xl p-6 md:p-12 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-text-primary-static"> {valores[index].titulo} </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">{valores[index].descripcion}</p>
          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}
