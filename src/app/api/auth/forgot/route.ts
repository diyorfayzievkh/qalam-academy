import { createHash, randomBytes } from "node:crypto";
import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { recordFailure, throttled } from "@/lib/auth";
import { db } from "@/lib/db";
import { appUrl, mailConfigured, sendMail } from "@/lib/mail";

export const dynamic = "force-dynamic";
const S = z.object({ email: z.string().trim().toLowerCase().email().max(200) });

const TEXT = {
  en: { subject: "Reset your Qalam Academy password", hi: "Assalamu alaykum", body: "Someone asked to reset the password for your Qalam Academy account. Use the link below within 1 hour to choose a new one:", ignore: "If this wasn’t you, you can ignore this email; your password stays the same.", button: "Choose a new password" },
  uz: { subject: "Qalam Academy parolini tiklash", hi: "Assalomu alaykum", body: "Qalam Academy hisobingiz parolini tiklash so‘raldi. Yangi parol tanlash uchun quyidagi havoladan 1 soat ichida foydalaning:", ignore: "Agar bu siz bo‘lmasangiz, xatga e’tibor bermang; parolingiz o‘zgarmaydi.", button: "Yangi parol tanlash" },
  ru: { subject: "Сброс пароля Qalam Academy", hi: "Ассаляму алейкум", body: "Кто-то запросил сброс пароля вашей учётной записи Qalam Academy. Перейдите по ссылке ниже в течение 1 часа, чтобы выбрать новый пароль:", ignore: "Если это были не вы, просто проигнорируйте письмо: пароль не изменится.", button: "Выбрать новый пароль" },
} as const;

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

/** Email a one-time reset link. Always answers the same way, so it never reveals who has an account. */
export async function POST(req: Request) {
  return handle(async () => {
    if (!mailConfigured()) return fail(503, "Password reset by email is not set up yet. Please contact the app owner.");
    const b = await body(req, S); if (!b) return fail(400, "Please enter a valid email.");
    const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
    if ((await throttled(`forgot:${b.email}`, 3)) || (await throttled(`forgot-ip:${ip}`, 10))) return fail(429, "Too many requests. Please wait 15 minutes.");
    await recordFailure(`forgot:${b.email}`); await recordFailure(`forgot-ip:${ip}`);

    const [u] = await db()<{ id: string; name: string; lang: string }[]>`select id, name, lang from users where email = ${b.email} and kind = 'ADULT'`;
    if (u) {
      const token = randomBytes(32).toString("base64url");
      const hash = createHash("sha256").update(token).digest("hex");
      await db()`delete from password_resets where user_id = ${u.id} or expires_at < now() - interval '1 day'`;
      await db()`insert into password_resets (token_hash, user_id, expires_at) values (${hash}, ${u.id}, now() + interval '1 hour')`;
      const link = `${appUrl()}/account/reset?token=${token}`;
      const t = TEXT[(u.lang as keyof typeof TEXT) in TEXT ? (u.lang as keyof typeof TEXT) : "en"];
      const text = `${t.hi}, ${u.name}!\n\n${t.body}\n\n${link}\n\n${t.ignore}\n\nQalam Academy`;
      const html = `<div style="font-family:system-ui,sans-serif;max-width:520px;line-height:1.5;color:#1b2a24">
        <p>${t.hi}, ${esc(u.name)}!</p><p>${t.body}</p>
        <p><a href="${link}" style="display:inline-block;background:#0D4A3B;color:#fff;padding:12px 20px;border-radius:10px;text-decoration:none;font-weight:700">${t.button}</a></p>
        <p style="font-size:13px;color:#5b6b64">${t.ignore}</p><p style="font-size:13px;color:#5b6b64">Qalam Academy</p></div>`;
      try { await sendMail(b.email, t.subject, text, html); }
      catch (e) { console.error("mail", e); return fail(502, "We could not send the email. Please try again later."); }
    }
    return ok();
  });
}
