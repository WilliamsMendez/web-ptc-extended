export default function BoxesSection() {
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-3 text-center">
      {/* Col 1 */}
      <div className="bg-zinc-800 rounded-md row-span-3">A</div>
      <div className="bg-zinc-800 rounded-md row-span-2">B</div>
      <div className="bg-zinc-800 rounded-md row-span-4">C</div>

      <div className="bg-zinc-800 rounded-md row-span-3">D</div>
      <div className="bg-zinc-800 rounded-md row-span-4">E</div>
      <div className="bg-zinc-800 rounded-md row-span-2">F</div>
    </div>
  )
}