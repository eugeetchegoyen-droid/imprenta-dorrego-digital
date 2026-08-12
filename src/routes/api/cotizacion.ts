import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const RECIPIENT = "ventas@imprentadorrego.com.ar";
const MAX_TOTAL_BYTES = 15 * 1024 * 1024; // 15 MB en total

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre inválido").max(120),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(4, "Teléfono inválido").max(40),
  producto: z.string().trim().max(60).optional().or(z.literal("")),
  cantidad: z.string().trim().max(60).optional().or(z.literal("")),
  comentarios: z.string().trim().max(2000).optional().or(z.literal("")),
});

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

export const Route = createFileRoute("/api/cotizacion")({
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
            producto: form.get("producto") ?? "",
            cantidad: form.get("cantidad") ?? "",
            comentarios: form.get("comentarios") ?? "",
          });
          if (!parsed.success) {
            return Response.json(
              { error: "Datos inválidos", issues: parsed.error.flatten() },
              { status: 400 },
            );
          }
          const data = parsed.data;

          const attachments: Array<{ filename: string; content: string }> = [];
          let total = 0;
          const omitted: string[] = [];
          for (const entry of form.getAll("archivos")) {
            if (!(entry instanceof File) || entry.size === 0) continue;
            if (total + entry.size > MAX_TOTAL_BYTES) {
              omitted.push(entry.name || "archivo");
              continue;
            }
            total += entry.size;
            const buf = new Uint8Array(await entry.arrayBuffer());
            let binary = "";
            for (let i = 0; i < buf.length; i++) binary += String.fromCharCode(buf[i]!);
            attachments.push({ filename: entry.name || "archivo", content: btoa(binary) });
          }

          const html = `
            <h2>Nueva cotización — Imprenta Dorrego</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(data.nombre)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(data.telefono)}</p>
            ${data.producto ? `<p><strong>Producto:</strong> ${escapeHtml(data.producto)}</p>` : ""}
            ${data.cantidad ? `<p><strong>Cantidad:</strong> ${escapeHtml(data.cantidad)}</p>` : ""}
            ${data.comentarios ? `<p><strong>Comentarios:</strong><br>${escapeHtml(data.comentarios).replace(/\n/g, "<br>")}</p>` : ""}
            <p style="color:#888;font-size:12px">${attachments.length ? `${attachments.length} archivo(s) adjunto(s).` : "Sin archivos adjuntos."}${omitted.length ? ` No se adjuntaron por tamaño: ${omitted.map(escapeHtml).join(", ")}.` : ""}</p>
          `;

          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": resendKey,
            },
            body: JSON.stringify({
              from: "Cotizaciones Dorrego <onboarding@resend.dev>",
              to: [RECIPIENT],
              reply_to: data.email,
              subject: `Cotización web — ${data.nombre}${data.producto ? ` (${data.producto})` : ""}`,
              html,
              attachments,
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error("Resend error", res.status, text);
            return Response.json({ error: "No se pudo enviar el correo" }, { status: 502 });
          }
          return Response.json({ ok: true });
        } catch (err) {
          console.error("cotizacion handler error", err);
          return Response.json({ error: "Error interno" }, { status: 500 });
        }
      },
    },
  },
});
