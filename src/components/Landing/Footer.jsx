import { HashLink } from "react-router-hash-link"
import { Linkedin } from "lucide-react"
import FooterColumn from "./FooterColumn";

  const footerData = [
    {
      title: "Acerca",
      links: [
        { label: "¿Quiénes Somos?", to: "/acerca#quienesSomos" },
        { label: "Misión y Visión", to: "/#misionYVision" },
        { label: "¿Qué hacemos?", to: "/acerca#queHacemos" },
        { label: "¿Cómo lo hacemos?", to: "/acerca#comoLoHacemos" },
        { label: "Valores", to: "/acerca#valores" },
        { label: "Nuestros Servicios", to: "/servicios#titulo" },
      ],
    },
    {
      title: "Contáctanos",
      links: [
        { label: "Contacto", to: "/contacto#contactanosSeccion" },
        { label: "Ubicación", to: "/contacto#ubicacion" },
      ],
    },
    {
      title: "Redes",
      links: [
        {
          label: "LinkedIn",
          to: "https://www.linkedin.com/company/procesadora-de-tarjetas-de-cr%C3%A9dito-honduras/?originalSubdomain=hn",
          external: true,
          icon: <Linkedin size={16} />,
        },
      ],
    },
  ];


export default function Footer(){

    return(
      
        <>
        
      <footer className='bg-bg-footer p-5 z-10'>
        <div className='flex flex-row justify-evenly p-10'>
         <div className="text-text-primary-static flex flex-row justify-normal pt-5 gap-10">
          {footerData.map((column, idx) => (
            <FooterColumn
              key={idx}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

          <img src="/src/assets/img/PTC_2-removebg-preview.png" alt="" className='w-10 h-10'/>
        </div>

        <hr className='border-solid border-white/50 w-full flex flex-row items-center mx-auto' />
        <p className='text-text-primary-static p-10 text-center'>© 2026 Procesadora de Tarjetas de Crédito | Todos los derechos reservados</p>
      </footer>
        
        </>

    )

}