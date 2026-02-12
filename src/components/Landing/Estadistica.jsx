import NumberCounter from "./landingcomponents/NumberCounter"

export default function Estadistica(){

    return(

        <>
        
        <section className="text-white flex flex-row gap-20 justify-center my-40">

      <div className="flex-row text-center">
      <div className="text-5xl font-bold flex flex-row">
        <NumberCounter value={100000} duration={1} /><p>+</p>
      </div>
        <p className="py-2 bg-clip-text text-lg text-transparent bg-gradient-to-r from-[#20304C] to-[#5D8BB5]">Lorem ipsu dolor sit</p>
      </div>
        <hr className="h-30 w-px bg-white/40 border-1" />
      <div className="flex-row text-center">
      <div className="text-5xl font-bold flex flex-row">
        <NumberCounter value={100000} duration={1} /><p>+</p>
      </div>
        <p className="py-2 bg-clip-text text-lg text-transparent bg-gradient-to-r from-[#20304C] to-[#5D8BB5]">Lorem ipsu dolor sit</p>
      </div>

    </section>
        
        </>

    )

}