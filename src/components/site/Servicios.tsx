import { useState } from "react";
import webApprovalHero from "@/assets/webapproval-hero.jpg.asset.json";
import prod24Hero from "@/assets/prod24-hero.jpg.asset.json";
import datosVariablesHero from "@/assets/datosvariables-hero.jpg.asset.json";

const services = [
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

  const benefits = [
    { title: "Carga simple", body: "Subís el PDF validado en fuentes y color." },
    { title: "Revisión online", body: "Marcás cambios al instante, sin instalar nada." },
    { title: "Aprobación inmediata", body: "Un clic y entra directo a producción." },
    { title: "Todo en un lugar", body: "Sin mails perdidos ni idas y vueltas." },
  ];

  return (
    <article
      className="group relative min-h-[280px] bg-paper"
      style={{ perspective: "1400px" }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Web Approval — clic para ver los beneficios"
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
        {/* Front — horizontal split: text | image */}
        <div
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <span className="font-display text-3xl text-gold">01</span>
            <h3 className="mt-4 font-display text-2xl leading-[1.1] tracking-tight">
              Web <span className="italic text-gold/90">Approval</span>
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              Revisá, corregí y aprobá tus archivos sin instalar nada.
            </p>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              Ver beneficios
              <svg width="16" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                <path d="M0.5 4.5H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M9.2 0.7L13 4.5L9.2 8.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
            <img
              src={webApprovalHero.url}
              alt="Vista previa de Web Approval"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-onyx, #0f0f14) 0%, rgba(15,15,20,0.55) 30%, rgba(15,15,20,0) 100%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Back — 2x2 benefits grid */}
        <div
          className="absolute inset-0 flex min-h-[280px] flex-col bg-bone p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          aria-hidden={!flipped}
        >
          <div className="mb-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-6 bg-gold" />
            Por qué importa
          </div>
          <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-x-6 gap-y-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 flex-shrink-0">
                  <path d="M2.5 7.2L5.8 10.3L11.5 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gold" style={{ stroke: "currentColor" }} />
                </svg>
                <div className="min-w-0">
                  <strong className="block font-display text-sm font-semibold text-ink">
                    {b.title}
                  </strong>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-6 bg-gold" />
            ← Volver
          </div>
        </div>
      </div>
    </article>
  );
}

function Produccion24Card() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  const benefits = [
    { title: "Entrega a tiempo", body: "Producción ininterrumpida para plazos ajustados." },
    { title: "Sin mínimos", body: "Desde 10 hasta 1.000 ejemplares." },
    { title: "Cambios de último momento", body: "Aceptamos ajustes hasta antes de producir." },
    { title: "Calidad Xerox", body: "Tecnología de punta en cada tirada." },
  ];

  return (
    <article
      className="group relative min-h-[280px] bg-paper"
      style={{ perspective: "1400px" }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Producción 24 horas — clic para ver los beneficios"
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
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <span className="font-display text-3xl text-gold">02</span>
            <h3 className="mt-4 font-display text-2xl leading-[1.1] tracking-tight">
              Producción <span className="italic text-gold/90">24 horas</span>
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              Siempre activos para tus necesidades.
            </p>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              Ver beneficios
              <svg width="16" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                <path d="M0.5 4.5H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M9.2 0.7L13 4.5L9.2 8.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
            <img
              src={prod24Hero.url}
              alt="Producción 24 horas"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-onyx, #0f0f14) 0%, rgba(15,15,20,0.55) 30%, rgba(15,15,20,0) 100%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex min-h-[280px] flex-col bg-bone p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          aria-hidden={!flipped}
        >
          <div className="mb-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-6 bg-gold" />
            Por qué importa
          </div>
          <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-x-6 gap-y-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 flex-shrink-0 text-gold">
                  <path d="M2.5 7.2L5.8 10.3L11.5 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="min-w-0">
                  <strong className="block font-display text-sm font-semibold text-ink">
                    {b.title}
                  </strong>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-6 bg-gold" />
            ← Volver
          </div>
        </div>
      </div>
    </article>
  );
}

function DatosVariablesCard() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  const benefits = [
    { title: "Cada pieza, única", body: "Nombre, imagen o código distinto por ejemplar." },
    { title: "Mayor conversión", body: "La personalización multiplica la respuesta." },
    { title: "Trazabilidad total", body: "QR, código de barras o serial por pieza." },
    { title: "Mil versiones", body: "Los datos cambian sin pausar la producción." },
  ];

  return (
    <article
      className="group relative min-h-[280px] bg-paper"
      style={{ perspective: "1400px" }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Datos Variables — clic para ver los beneficios"
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
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <span className="font-display text-3xl text-gold">03</span>
            <h3 className="mt-4 font-display text-2xl leading-[1.1] tracking-tight">
              Datos <span className="italic text-gold/90">Variables</span>
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              Cada pieza, única. Una tirada, mil versiones.
            </p>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              Ver beneficios
              <svg width="16" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                <path d="M0.5 4.5H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M9.2 0.7L13 4.5L9.2 8.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
            <img
              src={datosVariablesHero.url}
              alt="Datos Variables"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-onyx, #0f0f14) 0%, rgba(15,15,20,0.55) 30%, rgba(15,15,20,0) 100%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex min-h-[280px] flex-col bg-bone p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          aria-hidden={!flipped}
        >
          <div className="mb-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-6 bg-gold" />
            Por qué importa
          </div>
          <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-x-6 gap-y-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 flex-shrink-0 text-gold">
                  <path d="M2.5 7.2L5.8 10.3L11.5 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="min-w-0">
                  <strong className="block font-display text-sm font-semibold text-ink">
                    {b.title}
                  </strong>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
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
          <Produccion24Card />
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
