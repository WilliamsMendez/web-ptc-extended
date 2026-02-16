import ContactanosSeccion from "@/components/Landing/ContactanosSeccion";
import MiniHero from "@/components/MiniHero";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { ExternalLink } from "lucide-react";

export default function MapaUbicacion(){

    return(

        <>
        
        <div>
                    <MapContainer center={[14.101618715499235, -87.18704378869]} zoom={16}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[14.10169991695398, -87.18727403105068]}> <Popup><a href="https://maps.app.goo.gl/JGZPHrFMcZmc7Zh9A" className="flex flex-row gap-1 hover:scale-110 transition-all duration-200"><h2>Procesadora de Tarjetas de Crédito </h2><ExternalLink className="h-3 w-3"/></a></Popup> </Marker>

                    </MapContainer>
                </div>
        
        </>

    )

}