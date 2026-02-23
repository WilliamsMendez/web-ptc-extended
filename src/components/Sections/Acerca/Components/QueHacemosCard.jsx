export default function QueHacemosCard({ className = "", descripcion="", icono="" }) {
  return (
    <div className={`${className}`}>
      <div className="hover:scale-110 hover:drop-shadow-indigo-500/50 hover:z-10 transition-transform duration-200 w-full h-full rounded-3xl p-px bg-gradient-to-b from-brand-accent to-brand-secondary">
        <div className="rounded-[calc(1.5rem-1px)] p-10 bg-surface text-card-foreground h-full flex flex-col">
          <div className="mb-8 flex gap-4 items-center">
            {icono}
          </div>
          <p className="text-gray-700 dark:text-gray-300 flex-grow">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  )
}
