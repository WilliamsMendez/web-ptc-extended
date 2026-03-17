import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import fetch from "node-fetch";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  try {
    const { replyEmail, subject, message } = req.body;

    // Limpiar espacios
    const cleanReplyEmail = replyEmail?.trim();
    const cleanSubject = subject?.trim();
    const cleanMessage = message?.trim();

    // Validaciones
    if (!cleanReplyEmail || !cleanSubject || !cleanMessage) {
      return res.status(400).json({
        error: "Todos los campos son obligatorios."
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanReplyEmail)) {
      return res.status(400).json({
        error: "Correo electrónico inválido."
      });
    }

    if (cleanSubject.length < 5 || cleanSubject.length > 120) {
      return res.status(400).json({
        error: "El asunto debe tener entre 5 y 120 caracteres."
      });
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 2000) {
      return res.status(400).json({
        error: "El mensaje debe tener entre 10 y 2000 caracteres."
      });
    }

    const escapeHTML = (str) =>
      str.replace(/[&<>"']/g, (match) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[match]));

    const safeMessage = escapeHTML(cleanMessage);
    const safeReplyEmail = escapeHTML(cleanReplyEmail);
    const safeSubject = escapeHTML(cleanSubject);

    const html = `
      <h2>Nuevo mensaje desde el formulario web</h2>
      <p><strong>Correo de contacto:</strong> ${safeReplyEmail}</p>
      <p>${safeMessage}</p>
    `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yesj_rodriguezf@unicah.edu",
      subject: cleanSubject,
      html: html,
      reply_to: cleanReplyEmail
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error enviando email:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

//-------API BANCO CENTRAL---------

//TIPO DE CAMBIO

app.get("/api/tipo-cambio", async (req, res) => {
  try {

    const response = await fetch(
      "https://bchapi-am.azure-api.net/api/v1/indicadores/97/cifras",
      {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          "clave": process.env.BCH_API_KEY
        }
      }
    );

    const data = await response.json();

    res.json(data[0]); // el más reciente

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo tipo de cambio" });
  }
});

//HISTORIAL DE CAMBIO

app.get("/api/tipo-cambio-historial", async (req, res) => {
  try {

    const response = await fetch(
      "https://bchapi-am.azure-api.net/api/v1/indicadores/97/cifras",
      {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          "clave": process.env.BCH_API_KEY
        }
      }
    );

    const data = await response.json();

    const historial = data.slice(0, 7).map(item => ({
      fecha: item.Fecha,
      valor: item.Valor
    }));

    res.json(historial);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo historial" });
  }
});

//--------API AUTH0---------

app.get("/api/users", async (req, res) => {
  try {
    const tokenResponse = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials"
      })
    });

    const tokenData = await tokenResponse.json();
    console.log("Token response:", tokenData);  //log que devuelve datos del token

    const { access_token } = tokenData;
    console.log("Access token:", access_token); //log que devuelve acces token

    const usersResponse = await fetch(`https://${process.env.AUTH0_DOMAIN}/api/v2/users`, {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    const users = await usersResponse.json();
    console.log("Users response:", users); //log que devuelve respuesta de users
    res.json(users);
    
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    res.status(500).json({ error: "Error obteniendo usuarios" });
  }
});


//CHECK DE BACKEND CORRIENDO

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});