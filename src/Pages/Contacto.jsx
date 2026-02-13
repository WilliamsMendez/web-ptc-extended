import ContactanosSeccion from "@/components/Landing/ContactanosSeccion";
import MiniHero from "@/components/MiniHero";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"

export default function Contacto(){

    return(
        
        <>
        
            <MiniHero titulo="Contacto" descripcion="Nuestro equipo está preparado para brindarte la asesoría que tu negocio necesita."/>
            <ContactanosSeccion/>

            <MapContainer center={[14.0621, 87.1217]} zoom={13}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"'
                    url="https:///{s}tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>

        </>

    )

}