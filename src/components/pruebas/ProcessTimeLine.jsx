// ProcessTimeline.jsx
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  UserRound,
  RefreshCw,
  CreditCard,
  Truck,
  MonitorCheck,
} from "lucide-react"

const steps = [
  { label: "Solicitud\ndel cliente",          Icon: UserRound,    color: "#8FAECB" },
  { label: "Procesamiento\nde la solicitud",   Icon: RefreshCw,    color: "#6B90B8" },
  { label: "Troquelación y\npersonalización",  Icon: CreditCard,   color: "#4F74A3" },
  { label: "Envío\nmonitoreado",               Icon: Truck,        color: "#2E5484" },
  { label: "Seguimiento\ny monitoreo",         Icon: MonitorCheck, color: "#0D2D52" },
]

export default function ProcessTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-16 px-6 overflow-x-auto">
      <div className="flex items-end min-w-[620px] max-w-5xl mx-auto">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1
          const delay = i * 0.15

          return (
            <div key={i} className="flex flex-col items-center flex-1 relative">

              <motion.p
                className="text-center text-sm font-medium mb-3 whitespace-pre-line"
                style={{ color: "var(--text-primary)", maxWidth: 110, lineHeight: 1.4 }}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay, ease: [0.22, 0.68, 0, 1.2] }}
              >
                {step.label}
              </motion.p>


              <div className="relative w-full flex items-center justify-center">
                {/* Bar segment */}
                <motion.div
                  className="absolute inset-y-0"
                  style={{
                    backgroundColor: step.color,
                    left: 0,
                    right: isLast ? 18 : 0,
                    height: 44,
                    top: "50%",
                    marginTop: -22,
                    transformOrigin: "left",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.38, delay, ease: "easeOut" }}
                />

                {/* Arrow tip (last only) */}
                {isLast && (
                  <motion.div
                    className="absolute"
                    style={{
                      right: 0,
                      top: "50%",
                      marginTop: -22,
                      width: 0,
                      height: 0,
                      borderTop: "22px solid transparent",
                      borderBottom: "22px solid transparent",
                      borderLeft: `18px solid ${step.color}`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.2, delay: delay + 0.3 }}
                  />
                )}

                {/* Circle with icon */}
                <motion.div
                  className="relative z-10 rounded-full flex items-center justify-center shadow-[0px_3px_0px_0px_rgba(0,0,0,0.5)] hover:scale-120 transition"
                  style={{
                    backgroundColor: step.color,
                    width: 64,
                    height: 64,
                    flexShrink: 0,
                  }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: delay + 0.13,
                    ease: [0.22, 0.68, 0, 1.3],
                  }}
                >
                  <step.Icon size={26} color="white" strokeWidth={1.8} />
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}