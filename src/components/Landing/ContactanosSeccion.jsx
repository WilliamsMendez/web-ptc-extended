"use client";

import { Mail, SendHorizonal, ALargeSmall } from "lucide-react"
import { useState } from "react";


export default function ContactanosSeccion(){

    const [formData, setFormData] = useState({
        from:"",
        subject: "",
        message: ""
    });

      const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:3001/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const data = await res.json();
  console.log(data);
};



    return(

        <>
        
        
        <section className="bg-white p-20 px-10"  id="#contactanosSeccion">
        <div className="flex flex-row justify-center gap-10">
            <img src="https://placehold.co/300x300" alt="" />
            <div className="flex flex-col text-center">
            <h1 className="text-3xl text-center text-[#111111]">Contáctanos</h1>
            <div className="flex flex-row gap-10 justify-center p-5">

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-sm">
                    <div className="relative w-full"> <Mail color="gray" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"/><input type="email" name="from" placeholder="Correo" value={formData.from} onChange={handleChange} className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"/></div> 
                    <div className="relative w-full"> <ALargeSmall color="gray" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"/> <input type="text" name="subject" placeholder="Asunto" value={formData.subject} onChange={handleChange} className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"/></div> 
                    <textarea name="message" placeholder="Contenido" rows="4" value={formData.message} onChange={handleChange} className="mt-0.5 w-full resize-none border-solid border-2 border-black/40 rounded border-gray-300 shadow-sm sm:text-sm resize-none text-black"></textarea>
                    <button type="submit" className="flex flex-row justify-center gap-2 p-2 ml-80 p-5 rounded-lg hover:scale-110 hover: transition-transform duration-300 ease-in-out bg-gradient-to-t from-[#111111] to-[#111111] hover:to-[#5D8BB5] cursor-pointer"> <SendHorizonal className="w-5 h-5"/></button>
                </form>

            </div>

            </div>
        </div>
        </section>
        
        </>

    )

}