import nodemailer from "nodemailer";

// Outgoing email over SMTP. Works with Gmail (smtp.gmail.com, an app password),
// Resend (smtp.resend.com) or any other provider. Set SMTP_HOST, SMTP_PORT,
// SMTP_USER, SMTP_PASS and MAIL_FROM on Vercel.

export const mailConfigured = () => Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

export async function sendMail(to: string, subject: string, text: string, html: string) {
  const port = Number(process.env.SMTP_PORT || 465);
  const t = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port, secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await t.sendMail({ from: process.env.MAIL_FROM || `Qalam Academy <${process.env.SMTP_USER}>`, to, subject, text, html });
}

/** The public address of the app, for links in emails (never taken from the request). */
export const appUrl = () => (process.env.APP_URL || "https://qalam-academy-sigma.vercel.app").replace(/\/$/, "");
