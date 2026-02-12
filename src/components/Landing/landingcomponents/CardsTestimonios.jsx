import { motion } from "framer-motion"
import { QuoteIcon } from "lucide-react"

export default function CardsTestimonios(){
    return(

        <>
        {/* C A R D */}
        <div className="transition-transform duration-300 relative bg-white p-5 max-w-3xs rounded-lg text-center min-h-80 overflow-hidden hover:scale-110 text-[#111111]">
          <QuoteIcon className="m-4 ml-0" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} viewport={{ once: true }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et voluptatem</motion.p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-[#20304C] to-[#5D8BB5]" />
        </div>
        {/* C A R D */}
        <div className="transition-transform duration-300 relative bg-white p-5 max-w-3xs rounded-lg text-center min-h-80 overflow-hidden hover:scale-110 text-[#111111]">
          <QuoteIcon className="m-4 ml-0" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} viewport={{ once: true }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et voluptatem</motion.p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-[#20304C] to-[#5D8BB5]" />
        </div>
        {/* C A R D */}
        <div className="transition-transform duration-300 relative bg-white p-5 max-w-3xs rounded-lg text-center min-h-80 overflow-hidden hover:scale-110 text-[#111111]">
          <QuoteIcon className="m-4 ml-0" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, blur: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} viewport={{ once: true }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et voluptatem</motion.p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-[#20304C] to-[#5D8BB5]" />
        </div>
        
        </>

    )

}