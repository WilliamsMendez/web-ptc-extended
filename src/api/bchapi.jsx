import { useEffect, useState } from "react";

function TipoCambio(){

  const [tipoCambio, setTipoCambio] = useState(null);
  const [fecha, setFecha] = useState(null);

  function fechaFinal(fechaISO){
    const fechaObj = new Date(fechaISO);
    return fechaObj.toLocaleDateString("es-HN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  useEffect(() => {
    const obtenerTipoCambio = async () => {

      const response = await fetch("http://localhost:3001/api/tipo-cambio");
      const data = await response.json();

      setTipoCambio(data.Valor);
      setFecha(fechaFinal(data.Fecha));

    };

    obtenerTipoCambio();
  }, []);

  return (
    <>
      <h2 className="font-bold">
        {tipoCambio ? `L ${tipoCambio}` : "Cargando..."}
      </h2>

      {fecha && (
        <p className="italic text-sm">{fecha}</p>
      )}
    </>
  );

}

export default TipoCambio;