import { useState } from "react"

export default function ContactanosModalMensaje({ setModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setModal(false)}
      />

      {/* Modal */}
      <div className="relative bg-brand-primary rounded-2xl shadow-2xl p-10 w-[90%] max-w-md text-center animate-fadeIn">

        <h1 className="text-2xl font-bold text-text-primary-static mb-4">
          ¡Mensaje Enviado!
        </h1>

        <p className="text-text-primary-static/40 mb-6">
          Gracias por contactarnos, pronto nos comunicaremos con usted.
        </p>

        <button
          className="px-6 py-3 rounded-full bg-brand-primary border-2 border-solid border-brand-accent text-white hover:bg-brand-accent transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setModal(false)}
        >
          Cerrar
        </button>

      </div>
    </div>
  );
}