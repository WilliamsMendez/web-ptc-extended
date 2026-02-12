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
    const { from, subject, message } = req.body;

    const html = `
      <h2>Nuevo mensaje desde el formulario web</h2>
      <p><strong>De:</strong> ${from}</p>
      <p>${message}</p>
    `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yesj_rodriguezf@unicah.edu",
      subject: subject,
      html: html,
    });

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
