import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const RECIPIENT = "rrhh@imprentadorrego.com.ar";
const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const schema = z.object({
  nombre: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  telefono: z.string().trim().min(4).max(40),
  perfil: z.string().trim().min(2).max(120),
  experiencia: z.string().trim().max(200).optional().or(z.literal("")),
  mensaje: z.string().trim().max(2000).optional().or(z.literal("")),
});

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

export const Route = createFileRoute("/api/apply")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const lovableKey = process.env.LOVABLE_API_KEY;
          const resendKey = process.env.RESEND_API_KEY;
          if (!lovableKey || !resendKey) {
            return Response.json({ error: "Email no configurado" }, { status: 500 });
          }

          const form = await request.formData();
          const parsed = schema.safeParse({
            nombre: form.get("nombre"),
            email: form.get("email"),
            telefono: form.get("telefono"),
            perfil: form.get("perfil"),
            experiencia: form.get("experiencia") ?? "",
            mensaje: form.get("mensaje") ?? "",
          });
          if (!parsed.success) {
            return Response.json(
              { error: "Datos inválidos", issues: parsed.error.flatten() },
              { status: 400 },
            );
          }
          const data = parsed.data;

          const cv = form.get("cv");
          const attachments: Array<{ filename: string; content: string }> = [];
          if (cv && cv instanceof File && cv.size > 0) {
            if (cv.size > MAX_FILE_BYTES) {
              return Response.json({ error: "El CV supera los 5 MB" }, { status: 400 });
            }
            if (cv.type && !ALLOWED_MIME.has(cv.type)) {
              return Response.json(
                { error: "Formato no permitido. Usá PDF o DOC/DOCX" },
                { status: 400 },
              );
            }
            const buf = new Uint8Array(await cv.arrayBuffer());
            let binary = "";
            for (let i = 0; i < buf.length; i++) binary += String.fromCharCode(buf[i]);
            attachments.push({
              filename: cv.name || "cv",
              content: btoa(binary),
            });
          }

          const html = `
            <h2>Nueva postulación — Imprenta Dorrego</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(data.nombre)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(data.telefono)}</p>
            <p><strong>Perfil profesional:</strong> ${escapeHtml(data.perfil)}</p>
            ${data.experiencia ? `<p><strong>Experiencia:</strong> ${escapeHtml(data.experiencia)}</p>` : ""}
            ${data.mensaje ? `<p><strong>Mensaje:</strong><br>${escapeHtml(data.mensaje).replace(/\n/g, "<br>")}</p>` : ""}
            <p style="color:#888;font-size:12px">${attachments.length ? "CV adjunto." : "Sin CV adjunto."}</p>
          `;

          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": resendKey,
            },
            body: JSON.stringify({
              from: "Postulaciones Dorrego <onboarding@resend.dev>",
              to: [RECIPIENT],
              reply_to: data.email,
              subject: `Postulación — ${data.nombre} (${data.perfil})`,
              html,
              attachments,
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error("Resend error", res.status, text);
            return Response.json(
              { error: "No se pudo enviar el correo" },
              { status: 502 },
            );
          }
          return Response.json({ ok: true });
        } catch (err) {
          console.error("apply handler error", err);
          return Response.json({ error: "Error interno" }, { status: 500 });
        }
      },
    },
  },
});
