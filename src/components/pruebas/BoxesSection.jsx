export default function BoxesSection() {
  return (
    <>

      <div className="grid grid-cols-3 grid-rows-6 gap-3">
        {/* Col 1 */}

        {/* DIV A */}
        <div className="m-10 bg-zinc-800 rounded-md row-span-3 p-10 rounded-xl flex flex-col gap-4">
          <div>
            <h1 className="text-brand-accent text-3xl font-bold">POS</h1>
            <h2 className="text-text-primary/50">Pagos en comercios</h2>
          </div>

          <hr className="text-text-primary/30" />
          <p>Procesamos pagos en puntos de venta de forma rápida y segura.
            Conectamos comercios con bancos para que cada compra con tarjeta se apruebe en segundos.</p>
        </div>


        <div className="bg-zinc-800 rounded-md row-span-2">B</div>
        <div className="bg-zinc-800 rounded-md row-span-4">C</div>

        <div className="bg-zinc-800 rounded-md row-span-3">D</div>
        <div className="bg-zinc-800 rounded-md row-span-4">img</div>
        <div className="bg-zinc-800 rounded-md row-span-2">F</div>

      </div>

        <div className="m-10 bg-zinc-800 rounded-md row-span-3 w-110 p-10 rounded-xl flex flex-col gap-4">
          <div>
            <h1 className="text-brand-accent text-3xl font-bold">ATM</h1>
            <h2 className="text-text-primary/50">Retiros y autoservicio</h2>
          </div>

          <hr className="text-text-primary/30" />
          <p>Gestionamos transacciones en cajeros automáticos, permitiendo retiros, consultas y más.
Aseguramos disponibilidad, control y continuidad en cada operación.</p>
        </div>

        <div className="m-10 bg-zinc-800 rounded-md row-span-3 w-110 p-10 rounded-xl flex flex-col gap-4">
          <div>
            <h1 className="text-brand-accent text-3xl font-bold">Tarjetas</h1>
            <h2 className="text-text-primary/50">Emisión y gestión de tarjetas</h2>
          </div>

          <hr className="text-text-primary/30" />
          <p>Creamos, administramos y damos seguimiento a tarjetas de crédito y débito.
Desde la aprobación hasta el uso diario, controlamos todo el ciclo de vida.</p>
        </div>



    </>


  )
}