import { useRef, useState } from "react";
import { toast } from "sonner";

export function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch("/api/contacto", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error ?? "Error al enviar");
      setSent(true);
      formRef.current?.reset();
      toast.success("¡Mensaje enviado! Te responderemos a la brevedad.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "No se pudo enviar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-paper text-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 text-center" data-reveal>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-gold" />
            Hablemos
            <span className="ml-2 inline-block h-px w-8 align-middle bg-gold" />
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
            Contacto<span className="text-gold">.</span>
          </h1>
        </div>

        <div className="grid gap-px overflow-hidden border border-border/60 bg-border/60 lg:grid-cols-2">
          {/* Columna izquierda — formulario */}
          <div className="bg-paper p-8 md:p-12 lg:p-16" data-reveal>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Envanos tu consulta
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink">
              Contanos qué necesitás
            </h2>

            {sent ? (
              <div className="mt-10 border border-gold/40 bg-gold/[0.04] p-10 text-center">
                <div className="font-display text-3xl text-ink">¡Gracias!</div>
                <p className="mt-3 text-ink/70">
                  Recibimos tu consulta. Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-gold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} className="mt-10 space-y-6">
                <Field label="Nombre y apellido" name="nombre" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Teléfono" name="telefono" required />
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Mensaje <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    rows={5}
                    required
                    maxLength={2000}
                    placeholder="Contanos sobre tu proyecto o consulta…"
                    className="mt-2 w-full border border-border bg-transparent px-3 py-2 text-sm text-ink outline-none transition focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 border border-ink bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-paper transition-all hover:bg-transparent hover:text-ink disabled:opacity-60"
                >
                  {loading ? "Enviando…" : "Enviar"}
                  <span className="h-1.5 w-1.5 rounded-full bg-gold transition-colors group-hover:bg-ink" />
                </button>
                <p className="text-[11px] text-muted-foreground">
                  Al enviar aceptás que Imprenta Dorrego procese tus datos para responder tu consulta.
                </p>
              </form>
            )}
          </div>

          {/* Columna derecha — vías de contacto */}
          <div className="relative bg-onyx p-8 text-paper md:p-12 lg:p-16" data-reveal>
            <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                <span className="mr-2 inline-block h-px w-8 align-middle bg-gold" />
                Vías de contacto
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight">
                Múltiples canales para responder
              </h2>

              <div className="mt-10 space-y-8">
                <ContactItem
                  label="Mail"
                  value="hola@imprentadorrego.com.ar"
                  href="mailto:hola@imprentadorrego.com.ar"
                  hint="Respondemos en 24 horas hábiles"
                />
                <ContactItem
                  label="Teléfono"
                  value="+54 11 4700 0000"
                  href="tel:+541147000000"
                  hint="Lun – Vie · 9 a 18 hs"
                />
                <ContactItem
                  label="WhatsApp"
                  value="+54 11 4700 0000"
                  href="https://wa.me/541147000000"
                  hint="Consultas rápidas y cotizaciones"
                />
                <ContactItem
                  label="Dirección"
                  value="Av. Dorrego 1234, C1414 CABA · Argentina"
                  hint="Visitanos con cita previa"
                />
              </div>

              <div className="mt-12 border-t border-paper/15 pt-8">
                <div className="text-[10px] uppercase tracking-[0.25em] text-paper/40">
                  Horario de atención
                </div>
                <p className="mt-3 text-sm text-paper/80">
                  Lunes a viernes · 9 a 18 hs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full border border-border bg-transparent px-3 py-2.5 text-sm text-ink outline-none transition focus:border-gold"
      />
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
  hint,
}: {
  label: string;
  value: string;
  href?: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-paper/40">{label}</div>
      {href ? (
        <a
          href={href}
          className="mt-2 block font-display text-xl text-paper transition-colors hover:text-gold"
        >
          {value}
        </a>
      ) : (
        <div className="mt-2 font-display text-xl text-paper">{value}</div>
      )}
      {hint && <p className="mt-1 text-xs text-paper/50">{hint}</p>}
    </div>
  );
}
