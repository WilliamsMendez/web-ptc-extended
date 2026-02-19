import ContactanosSeccion from "@/components/Landing/ContactanosSeccion";
import MiniHero from "@/components/MiniHero";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { ExternalLink } from "lucide-react";
import MapaUbicacion from "@/components/Acerca/contactocomponents/MapaUbicacion";

export default function Contacto(){

    return(
        
        <>
            <div id="titulo"></div>
            <MiniHero titulo="Contacto" descripcion="Nuestro equipo está preparado para brindarte la asesoría que tu negocio necesita." imgsrc="src/assets/img/contactohero.jpg"/>
            <ContactanosSeccion/>


            <div className="flex flex-col m-10 justify-center text-center" id="ubicacion">

                <h1 className="p-10 text-3xl">Nuestra Ubicación</h1>
                <MapaUbicacion/>
                

            </div>
            
        </>

    )

}