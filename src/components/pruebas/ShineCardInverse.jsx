import { motion } from "framer-motion"
import { fadeUpBlur } from "../animations"

export function ShineCardInverse({
    title,
    subtitle,
    desc,
    rowSpan = 3,
    textSize = "2xl",
    isHrOn = true,
    delay = 0,
}) {

    return (
        <motion.div
            variants={fadeUpBlur(0.7, delay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`row-span-${rowSpan} relative bg-surface rounded-2xl p-7 overflow-hidden
            before:absolute before:top-0 before:left-0 before:right-0 before:h-px
            before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45)_50%,transparent)]
            after:absolute after:top-0 after:left-0 after:right-0 after:h-16 after:rounded-t-2xl after:pointer-events-none
            after:bg-[linear-gradient(180deg,rgba(var(--surface-90),0.4),transparent)] flex flex-col gap-4 shadow-md hover:scale-105 transition border-1 border-black/10 `}
        >
            <div className="flex flex-col">

                <p className="text-text-primary">{desc}</p>

                {isHrOn && (
                    <hr className="text-text-primary/10" />
                )}
                                <h2 className="text-text-primary/50 tracking-widest uppercase font-light text-sm">{subtitle}</h2>

                <h1 className={`bg-linear-to-br from-brand-accent-80 to-brand-accent-110 bg-clip-text text-transparent text-${textSize} font-black`}>
                    {title}
                </h1>

            </div>


        </motion.div>
    )
}