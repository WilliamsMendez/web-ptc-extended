import { motion } from "framer-motion";

export function ServicioCard({ titulo, descripcion }) {
  return (
    <div className="transition-transform duration-300 relative bg-surface-light p-5 max-w-3xs rounded-lg text-center min-h-80 overflow-hidden hover:scale-110 flex flex-col gap-5">
      
      <motion.h1 className="font-bold text-brand-secondary text-xl">
        {titulo}
      </motion.h1>

      <motion.p
         className="text-text-inverse"
      >
        {descripcion}
      </motion.p>

      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-brand-secondary to-brand-accent" />
    </div>
  );
}
