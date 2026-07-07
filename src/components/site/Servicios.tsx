import { useState } from "react";
import webApprovalHero from "@/assets/webapproval-hero.jpg.asset.json";

const services = [
  {
    n: "02",
    title: "Producción 24 hs",
    body: "Producimos las 24 horas para cumplir con las necesidades más urgentes, respetando siempre tus tiempos de entrega.",
    tag: "Respuesta inmediata",
  },
  {
    n: "03",
    title: "Datos variables",
    body: "Personalizá cualquier impresión combinando imágenes, textos o códigos de barras según la necesidad de cada cliente.",
    tag: "Personalización",
  },
  {
    n: "04",
    title: "Impresión por demanda",
    body: "Imprimí lo que necesites, cuando lo necesites. 10, 100 o 1.000 ejemplares con un costo unitario similar y sin stock inmovilizado.",
    tag: "Stock cero",
  },
  {
    n: "05",
    title: "Encuadernación PUR",
    body: "Adhesivo de poliuretano reactivo que aporta mayor durabilidad y flexibilidad al libro, a un menor costo.",
    tag: "Acabado premium",
  },
  {
    n: "06",
    title: "Xerox Premier Partner",
    body: "Contamos con el respaldo de Xerox, líder mundial en tecnología de impresión, lo que nos permite mejorar el servicio continuamente.",
    tag: "Certificación global",
  },
];

function WebApprovalCard() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  return (
    <article
      className="group relative min-h-[280px] bg-paper transition-colors"
      style={{ perspective: "1400px" }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Ver los pasos para aprobar tu trabajo"
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className="relative h-full w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.4, 0.1, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "inherit",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex min-h-[280px] flex-col justify-between bg-onyx p-10 text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div>
            <span className="font-display text-3xl text-gold">01</span>
            <div className="relative mt-6 mx-auto max-w-[75%] overflow-hidden">
              <img
                src={webApprovalHero.url}
                alt="Vista previa de Web Approval"
                className="block h-auto w-full"
                style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(15,15,20,0) 0%, rgba(15,15,20,0.55) 55%, var(--color-onyx, #0f0f14) 100%)",
                }}
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-4 text-center font-display text-2xl tracking-tight">Web Approval</h3>
            <ul className="mt-4 mx-auto max-w-[80%] space-y-1.5 text-sm text-paper/75">
              {[
                "Revisión en línea",
                "Transferencia de archivos",
                "Reemplazo de páginas",
                "Envío de notificaciones",
                "Aprobación de trabajos",
              ].map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-gold">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 4.2 A5 5 0 0 1 11.5 4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M9.3 2.3 L11.6 4.3 L12.7 1.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5 9.8 A5 5 0 0 1 2.5 9.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M4.7 11.7 L2.4 9.7 L1.3 12.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Clic para ver más
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex min-h-[280px] flex-col justify-center bg-paper p-10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          aria-hidden={!flipped}
        >
          <span className="font-display text-3xl text-gold">01</span>
          <p className="mt-6 font-display text-xl leading-snug text-ink">
            Aprobar tu trabajo nunca fue tan <span className="italic">fácil</span>.
          </p>
          <ol className="mt-6 space-y-3">
            {[
              "Subís tu archivo",
              "Lo revisás y aprobás online, sin instalar nada",
              "Lo llevamos a producción",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center border border-gold text-[11px] font-semibold text-gold">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">
            Sin mails perdidos, sin esperas, todo en un solo lugar.
          </p>
          <div className="mt-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-6 bg-gold" />
            ← Volver
          </div>
        </div>
      </div>
    </article>
  );
}

export function Servicios() {
  return (
    <section id="servicios" className="bg-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <header className="mb-16 max-w-3xl reveal">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-ink" />
            Servicios
          </div>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
            Soluciones adecuadas para <span className="italic">todo tipo</span> de necesidades.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          <WebApprovalCard />
          {services.map((s) => (
            <article
              key={s.n}
              className="group flex min-h-[280px] flex-col justify-between bg-paper p-10 transition-colors hover:bg-bone"
            >
              <div>
                <span className="font-display text-3xl text-gold">{s.n}</span>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold transition-all group-hover:w-12" />
                {s.tag}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
