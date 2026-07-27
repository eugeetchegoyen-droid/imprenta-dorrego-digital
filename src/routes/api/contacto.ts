import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const RECIPIENT = "hola@imprentadorrego.com.ar";

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre inválido").max(120),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(4, "Teléfono inválido").max(40),
  mensaje: z.string().trim().min(5, "Mensaje demasiado corto").max(2000),
});

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&", "<": "<", ">": ">", '"': """, "'": "&#39;" }[c]!),
  );
}

export const Route = createFileRoute("/api/contacto")({
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
            mensaje: form.get("mensaje"),
          });
          if (!parsed.success) {
            return Response.json(
              { error: "Datos inválidos", issues: parsed.error.flatten() },
              { status: 400 },
            );
          }
          const data = parsed.data;

          const html = `
            <h2>Nueva consulta — Imprenta Dorrego</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(data.nombre)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(data.telefono)}</p>
            <p><strong>Mensaje:</strong><br>${escapeHtml(data.mensaje).replace(/\n/g, "<br>")}</p>
          `;

          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": resendKey,
            },
            body: JSON.stringify({
              from: "Consultas Dorrego <onboarding@resend.dev>",
              to: [RECIPIENT],
              reply_to: data.email,
              subject: `Consulta web — ${data.nombre}`,
              html,
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
          console.error("contacto handler error", err);
          return Response.json({ error: "Error interno" }, { status: 500 });
        }
      },
    },
  },
});
