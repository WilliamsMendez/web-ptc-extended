export default function HeroButton({ children = 'Ver más' }) {
  return (
    <>

        <button class="mt-10 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center px-10 py-4 text-white text-sm font-medium rounded-3xl bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 hover:drop-shadow-xl/50 hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased"> <a href="#quienesSomos">Ver Más</a></button>

    </>
  )
}
