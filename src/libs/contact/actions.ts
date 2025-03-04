"use server";
import { TFormData } from "@/components/main/ContactMe";
import nodemailer from "nodemailer";

export async function sendEmail(formData: TFormData) {
  const { name, email, message, subject } = formData;
  const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
  const SMTP_SERVER_USERNAME = process.env.SMTP_EMAIL_RECEIVER;
  const SMTP_SERVER_PASSWORD = process.env.SMTP_EMAIL_PASSWORD;
  const SMTP_PORT = process.env.SMTP_PORT;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: SMTP_SERVER_HOST,
    port: Number(SMTP_PORT),
    secure: true,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.SMTP_EMAIL_RECEIVER,
      subject: `New message from ${name} - ${subject}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
    console.log("Message sent: %s", info.messageId, info.response);
    return { success: true };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
