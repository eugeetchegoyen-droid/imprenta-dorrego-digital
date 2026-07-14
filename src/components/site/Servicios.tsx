import { useEffect, useState } from "react";
import webApprovalHero from "@/assets/webapproval-hero.jpg.asset.json";
import prod24Hero from "@/assets/prod24-hero.jpg.asset.json";
import datosVariablesHero from "@/assets/datosvariables-hero.jpg.asset.json";
import purHero from "@/assets/pur-hero.jpg.asset.json";
import iridesseHero from "@/assets/iridesse-hero.jpg.asset.json";

function CardFront({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

function CardWrapper({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={[
        "group relative min-h-[280px] bg-paper transition-transform duration-300 ease-out",
        hovered ? "z-30 scale-[1.05]" : "z-0 scale-100",
        className || "",
      ].join(" ")}
      style={{ perspective: "1400px", ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </article>
  );
}

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
    <CardWrapper>
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
        <CardFront
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <h3 className="font-display text-2xl leading-[1.1] tracking-tight">
              Web <span className="italic text-gold/90">Approval</span>
            </h3>
            <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              Revisá, corregí y aprobá tus archivos sin instalar nada.
            </p>
            <div className="mt-10 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
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
        </CardFront>

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
    </CardWrapper>
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
    <CardWrapper>
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
        <CardFront
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <h3 className="font-display text-2xl leading-[1.1] tracking-tight">
              Producción <span className="italic text-gold/90">24 horas</span>
            </h3>
            <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              Siempre activos para tus necesidades.
            </p>
            <div className="mt-10 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
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
        </CardFront>

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
    </CardWrapper>
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
    <CardWrapper>
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
        <CardFront
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
        </CardFront>

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
    </CardWrapper>
  );
}

function ImpresionDemandaCard() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  const values = [10, 50, 100, 250, 500, 1000];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % values.length), 1800);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pad = (n: number) => String(n).padStart(4, "0");
  const at = (o: number) => values[(idx + o + values.length) % values.length];

  const benefits = [
    { title: "Sin mínimos", body: "10, 100 o 1.000 copias al mismo costo unitario." },
    { title: "Cero stock", body: "Producís solo lo que vas a usar." },
    { title: "Cambios sin costo", body: "Actualizá precios o textos entre tiradas." },
    { title: "Misma calidad", body: "Tecnología digital de punta en cada pedido." },
  ];

  return (
    <CardWrapper>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Impresión por Demanda — clic para ver los beneficios"
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
        <CardFront
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <span className="font-display text-3xl text-gold">04</span>
            <h3 className="mt-4 font-display text-2xl leading-[1.1] tracking-tight">
              Impresión <span className="italic text-gold/90">por Demanda</span>
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              Imprimí lo que necesitás, cuando lo necesitás.
            </p>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              Ver beneficios
              <svg width="16" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                <path d="M0.5 4.5H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M9.2 0.7L13 4.5L9.2 8.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div
            className="relative flex w-2/5 flex-shrink-0 items-center justify-center overflow-hidden"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 50%, rgba(201,159,90,0.14) 0%, rgba(201,159,90,0) 60%), #151310",
            }}
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-1 font-mono text-[15px] font-semibold leading-none tracking-wider">
              <div className="text-paper/20">{pad(at(-2))}</div>
              <div className="text-paper/20">{pad(at(-1))}</div>
              <div className="rounded-[5px] bg-gold px-2.5 py-0.5 text-onyx">{pad(at(0))}</div>
              <div className="text-paper/40">{pad(at(1))}</div>
              <div className="text-paper/20">{pad(at(2))}</div>
            </div>
          </div>
        </CardFront>

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
    </CardWrapper>
  );
}

function EncuadernacionPurCard() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  const benefits = [
    { title: "Durabilidad superior", body: "Resiste humedad y uso intensivo." },
    { title: "Apertura plana", body: "Las páginas se abren sin tensión." },
    { title: "Mayor vida útil", body: "No se desprenden con el uso cotidiano." },
    { title: "Mayor valor percibido", body: "Un acabado que comunica calidad." },
  ];

  return (
    <CardWrapper>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Encuadernación PUR — clic para ver los beneficios"
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
        <CardFront
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <span className="font-display text-3xl text-gold">05</span>
            <h3 className="mt-4 font-display text-2xl leading-[1.1] tracking-tight">
              Encuadernación <span className="italic text-gold/90">PUR</span>
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              El lomo más resistente para sus publicaciones.
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
              src={purHero.url}
              alt="Libro abierto con encuadernación PUR"
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
        </CardFront>

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
    </CardWrapper>
  );
}

function XeroxIridesseCard() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  const benefits = [
    { title: "Efectos metálicos", body: "Tonos dorados, plateados y cobrizos sin tintas especiales." },
    { title: "Colores iridiscentes", body: "Acabados que cambian según la luz y el ángulo." },
    { title: "Impresión digital", body: "Calidad de alta gama con tiempos de producción reducidos." },
    { title: "Acabados premium", body: "Ideal para invitaciones, catálogos y piezas de autor." },
  ];

  return (
    <CardWrapper>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Xerox Iridesse — clic para ver los beneficios"
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
        <CardFront
          className="absolute inset-0 flex min-h-[280px] flex-row bg-onyx text-paper"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-1 flex-col justify-center p-10">
            <span className="font-display text-3xl text-gold">06</span>
            <h3 className="mt-4 font-display text-2xl leading-[1.1] tracking-tight">
              Xerox <span className="italic text-gold/90">Iridesse</span>
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-paper/65">
              Impresión digital con efectos metálicos e iridiscentes.
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
              src={iridesseHero.url}
              alt="Impresión digital Xerox Iridesse con efectos metálicos"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 25%" }}
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
        </CardFront>

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
    </CardWrapper>
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
          <DatosVariablesCard />
          <ImpresionDemandaCard />
          <EncuadernacionPurCard />
          <XeroxIridesseCard />
        </div>
      </div>
    </section>
  );
}
