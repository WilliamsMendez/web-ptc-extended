import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

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

    // Validaciones básicas
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

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
