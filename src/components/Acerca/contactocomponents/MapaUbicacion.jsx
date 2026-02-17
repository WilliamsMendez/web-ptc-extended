import ContactanosSeccion from "@/components/Landing/ContactanosSeccion";
import MiniHero from "@/components/MiniHero";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { ExternalLink } from "lucide-react";

export default function MapaUbicacion(){

    return(

        <>
        <div className="grid grid-cols-2 w-full gap-2">
  
            <div className="w-200 h-[80vh] flex justify-center items-center">
                <MapContainer className="w-full h-full rounded-3xl" center={[14.101618715499235, -87.18704378869]}zoom={16}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[14.10169991695398, -87.18727403105068]}> <Popup><a href="https://maps.app.goo.gl/JGZPHrFMcZmc7Zh9A" className="flex flex-row gap-1 hover:scale-110 transition-all duration-200"><h2>Procesadora de Tarjetas de Crédito </h2><ExternalLink className="h-3 w-3"/></a></Popup> </Marker>

                    </MapContainer>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl p-10 pb-5">Referencia:</h2>
                    <p className="w-100 mx-auto">Procesadora de Tarjetas de Crédito,
                        Centro Comercial Novacentro, 2do y 3er Piso,
                        Entre Bulevar Morazán y Avenida La Paz
                        Tegucigalpa 11101, Francisco Morazán, Honduras.
                    </p>
                </div>
            </div>
        
        </>

    )

}