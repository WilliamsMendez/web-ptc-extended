import HeroButton from "../components/HeroButton"
import { QuoteIcon, Mail, MapPinned } from "lucide-react"

export default function Home() {
  return (
    
    <>
        {/* H E R O  P A N E L*/}

    <section className="relative w-full min-h-screen overflow-hidden">
    <img src="https://picsum.photos/1920/1080" alt="Hero background" className="absolute inset-0 w-full h-full object-cover z-0"/>
    <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-20 flex min-h-screen items-center justify-center text-white px-6">
            <div className="text-center max-w-3xl">
              <div className="flex flex-row gap-1 justify-center">
                <img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className="h-30 w-30"/>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Procesadora de Tarjetas de Crédito</h1>
              </div>
            <HeroButton/>
        </div>
    </div>
    </section>

        {/* Q U I E N E S  S O M O S*/}

    <section className="my-30">
        <h1 className="flex justify-center text-white text-3xl">¿Quienes Somos?</h1>
        <p className="text-white py-5 max-w-2xl text-center mx-auto">Somos
parte de una empresa regional con más de 15 años de experiencia especializada
en la comercialización , administración , operación y procemiento de negocios y
productos de medios de pago electrónicos y otros servicios financieros . Más allá de
ofrecer un servicio de procesamiento de Tarjetas de Crédito y Débito , nuestro modelo de
negocio agrega ese valor adicional que nuestros clientes necesitan para lograr la
prosperidad en sus negocios</p>
    </section>

          {/*M I S I O N  Y  V I S I O N*/}

    <section className="flex flex-row gap-6 my-10">
      <div>
        <img src="https://placehold.co/600x400" alt="" />
      </div>
      <div className="flex flex-col gap-6 text-white max-w-2xl text-center mx-auto my-auto">
        <div className="mx-10">
          <h1 className="font-bold">Misión</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed expedita provident eligendi similique consequuntur aut id culpa a tempore autem consequatur, omnis, nulla ab. Voluptatem, est reiciendis! Minus, similique perferendis?</p>
        </div>
        <div className="mx-10">
          <h1 className="font-bold">Visión</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo, vitae explicabo harum ab repellat placeat assumenda quidem magnam ut, in voluptatum fugiat asperiores, velit ipsa illo laborum. Incidunt, molestiae?</p>
        </div>
      </div>
    </section>

    {/* E S T A D I S T I C A S*/}
    <section className="text-white flex flex-row gap-20 justify-center my-60">

      <div className="flex-row text-center">
        <h1 className="font-bold text-5xl">000,000+</h1>
        <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#20304C] to-[#5D8BB5]">Lorem ipsu dolor sit</p>
      </div>
        <hr className="h-30 w-px bg-white/40 border-1" />
      <div className="flex-row text-center">
        <h1 className="font-bold text-5xl">000,000+</h1>
        <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#20304C] to-[#5D8BB5]">Lorem ipsu dolor sit</p>
      </div>

    </section>

    <section className="flex flex-col justify-center mb-40">
      <h1 className="text-white text-center text-3xl p-10">Testimonios</h1>
      <div className="flex flex-row justify-center gap-10">
        <div className="transition-transform duration-300 relative bg-white p-5 max-w-3xs rounded-lg text-center min-h-80 overflow-hidden hover:scale-110">
          <QuoteIcon className="m-4 ml-0" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et voluptatem</p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-[#20304C] to-[#5D8BB5]" />
        </div>
        <div className="transition-transform duration-300 relative bg-white p-5 max-w-3xs rounded-lg text-center min-h-80 overflow-hidden hover:scale-110">
          <QuoteIcon className="m-4 ml-0" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et voluptatem</p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-[#20304C] to-[#5D8BB5]" />
        </div>
        <div className="transition-transform duration-300 relative bg-white p-5 max-w-3xs rounded-lg text-center min-h-80 overflow-hidden hover:scale-110">
          <QuoteIcon className="m-4 ml-0" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et voluptatem</p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-[#20304C] to-[#5D8BB5]" />
        </div>
      </div>
      
    </section>

    <section className="bg-white p-20">
      <div className="flex flex-row justify-center gap-10">
        <img src="https://placehold.co/300x300" alt="" />
        <div className="flex flex-col text-center">
          <h1 className="text-3xl text-center">Contáctanos</h1>
          <div className="flex flex-row gap-5 justify-center p-5">
            <button className="bg-black p-5 rounded-lg"> <Mail color="white" /> </button>
            <button className="bg-black p-5 rounded-lg"> <MapPinned color="white" /> </button>
          </div>

        </div>
      </div>
    </section>

    </>

  )
}
