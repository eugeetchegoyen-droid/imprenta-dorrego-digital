import { useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

const MAX = 5 * 1024 * 1024;

export function UniteEquipo() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const cv = fd.get("cv");
    if (cv instanceof File && cv.size > MAX) {
      toast.error("El CV supera los 5 MB");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error ?? "Error al enviar");
      setSent(true);
      formRef.current?.reset();
      setFileName("");
      toast.success("¡Postulación enviada! Te contactaremos pronto.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "No se pudo enviar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="unite" className="relative bg-onyx text-paper py-28 lg:py-36">
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
              <span className="mr-2 inline-block h-px w-8 align-middle bg-gold" />
              ¿Querés trabajar con nosotros?
            </div>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
              Unite al equipo<span className="text-gold">.</span>
            </h2>
            <p className="mt-6 max-w-md text-paper/70">
              Buscamos personas curiosas, prolijas y apasionadas por la impresión, el diseño y la tecnología.
              Dejanos tus datos y adjuntá tu CV — todas las postulaciones son revisadas por nuestro equipo de RRHH.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-paper/70">
              {[
                "Producción y operación de equipos digitales",
                "Diseño editorial y preprensa",
                "Comercial y atención a clientes editoriales",
                "Pasantías y prácticas profesionales",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-3 shrink-0 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            {sent ? (
              <div className="border border-gold/40 bg-paper/[0.03] p-10 text-center">
                <div className="font-display text-3xl">¡Gracias!</div>
                <p className="mt-3 text-paper/70">
                  Recibimos tu postulación. Si tu perfil encaja con una búsqueda activa, te vamos a contactar pronto.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-gold hover:underline"
                >
                  Enviar otra postulación
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="space-y-5 border border-paper/10 bg-paper/[0.02] p-6 md:p-8 backdrop-blur"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nombre y apellido" name="nombre" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Teléfono" name="telefono" required />
                  <Field label="Perfil profesional" name="perfil" placeholder="Ej: Diseñador, Operador, Comercial" required />
                </div>
                <Field label="Años de experiencia" name="experiencia" placeholder="Opcional" />
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-paper/60">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    maxLength={2000}
                    placeholder="Contanos brevemente sobre vos (opcional)"
                    className="mt-2 w-full border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none transition focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-paper/60">
                    CV (PDF, DOC o DOCX · máx. 5 MB)
                  </label>
                  <label className="mt-2 flex cursor-pointer items-center justify-between border border-dashed border-paper/25 px-4 py-3 text-sm transition hover:border-gold">
                    <span className="text-paper/70">
                      {fileName || "Seleccionar archivo…"}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Adjuntar</span>
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 border border-gold bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-onyx transition-all hover:bg-transparent hover:text-gold disabled:opacity-60"
                >
                  {loading ? "Enviando…" : "Enviar postulación"}
                  <span className="h-1.5 w-1.5 rounded-full bg-onyx group-hover:bg-gold" />
                </button>
                <p className="text-[11px] text-paper/40">
                  Al enviar aceptás que Imprenta Dorrego procese tus datos con el único fin de evaluar tu postulación.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Back — volver al inicio */}
        <div className="mt-16 flex justify-center" data-reveal>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-paper/50 transition-colors hover:text-gold"
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
      <label className="block text-[10px] uppercase tracking-[0.25em] text-paper/60">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full border border-paper/15 bg-transparent px-3 py-2 text-sm text-paper outline-none transition focus:border-gold"
      />
    </div>
  );
}
