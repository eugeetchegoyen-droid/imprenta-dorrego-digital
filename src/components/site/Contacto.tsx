import { useRef, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, Instagram, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { MapView } from "./MapView";

export function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
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
      navigate({ to: "/" });
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
          <h1 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
            Contacto<span className="text-gold">.</span>
          </h1>
        </div>

        <div className="grid gap-px overflow-hidden border border-border/60 bg-border/60 lg:grid-cols-12">
          {/* Columna izquierda — formulario */}
          <div className="flex flex-col bg-paper p-8 md:p-12 lg:col-span-8 lg:p-16" data-reveal>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Contanos qué necesitás
            </div>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] text-ink md:text-4xl">
              Envianos tu consulta
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

            {/* CTA reclutamiento */}
            <div className="mt-auto pt-14">
              <div className="border-t border-border/60 pt-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                      RR. HH.
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
                      ¿Querés trabajar con nosotros?
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Sumate al equipo de Imprenta Dorrego y contanos tu experiencia.
                    </p>
                  </div>
                  <a
                    href="/unite"
                    className="group inline-flex shrink-0 items-center justify-center gap-3 border border-gold bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-onyx transition-all hover:bg-transparent hover:text-gold"
                  >
                    Unite al equipo
                    <span className="h-1.5 w-1.5 rounded-full bg-onyx transition-colors group-hover:bg-gold" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha — vías de contacto */}
          <div className="relative bg-onyx p-8 text-paper md:p-12 lg:col-span-4 lg:p-14" data-reveal>
            <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                <span className="mr-2 inline-block h-px w-8 align-middle bg-gold" />
                Vías de contacto
              </div>
              <h2 className="mt-4 font-display text-xl leading-tight">
                Múltiples canales para responder
              </h2>

              <div className="mt-10 space-y-6">
                <ContactItem
                  icon={<Mail size={18} />}
                  label="Mail"
                  value="ventas@imprentadorrego.com.ar"
                  href="mailto:ventas@imprentadorrego.com.ar"
                />
                <ContactItem
                  icon={<Phone size={18} />}
                  label="Teléfono"
                  value="+54 11 4855 5353"
                  href="tel:+541148555353"
                />
                <ContactItem
                  icon={<Phone size={18} />}
                  label="Teléfono"
                  value="+54 11 4854 4644"
                  href="tel:+541148544644"
                />
                <ContactItem
                  icon={<MessageCircle size={18} />}
                  label="WhatsApp"
                  value="+54 11 6610 1894"
                  href="https://wa.me/5491166101894"
                />
                <ContactItem
                  icon={<Instagram size={18} />}
                  label="Instagram"
                  value="@imprentadorrego"
                  href="https://www.instagram.com/imprentadorrego/"
                />
                <ContactItem
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                  value="Imprenta Dorrego"
                  href="https://linkedin.com/company/imprenta-dorrego"
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

              <div className="mt-10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  <span className="mr-2 inline-block h-px w-8 align-middle bg-gold" />
                  Nuestra ubicación
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight">
                  ¿Dónde estamos?
                </h3>
                <p className="mt-3 text-sm text-paper/80">
                  Av Dorrego 1102, C1414CKT · Ciudad Autónoma de Buenos Aires
                </p>
                <div className="mt-4 h-64 w-full overflow-hidden border border-paper/15">
                  <MapView lat={-34.5884948} lng={-58.4461036} title="Imprenta Dorrego" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back — volver al inicio */}
        <div className="mt-12 flex justify-center" data-reveal>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Volver al inicio
          </Link>
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
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-paper/20 text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-onyx">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-paper/40">{label}</div>
        <div className="mt-0.5 font-display text-lg text-paper transition-colors group-hover:text-gold">
          {value}
        </div>
      </div>
    </div>
  );
  if (!href) return <div>{content}</div>;
  return (
    <a href={href} className="group block">
      {content}
    </a>
  );
}
