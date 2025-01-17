import emailjs from "@emailjs/browser";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { subject, user_name, user_email, message } = req.body;

  if (!subject || !user_name || !user_email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    if (process.env.EMAIL_PUBLIC_KEY) {
      emailjs.init(process.env.EMAIL_PUBLIC_KEY);
    } else {
      return res.status(500).json({ error: "Email public key is not defined" });
    }

    if (!process.env.EMAIL_SERVICE_ID || !process.env.EMAIL_TEMPLATE_ID) {
      return res
        .status(500)
        .json({ error: "Email service ID or template ID is not defined" });
    }

    const response = await emailjs.send(
      process.env.EMAIL_SERVICE_ID,
      process.env.EMAIL_TEMPLATE_ID,
      { subject, user_name, user_email, message }
    );

    res.status(200).json({ status: "Success", response });
  } catch (error) {
    console.error("Email sending failed", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
