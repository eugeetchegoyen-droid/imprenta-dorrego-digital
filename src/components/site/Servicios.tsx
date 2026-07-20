import { useEffect, useState } from "react";
import webApprovalHero from "@/assets/webapproval-hero.jpg.asset.json";
import prod24Hero from "@/assets/prod24-hero.jpg.asset.json";
import datosVariablesHero from "@/assets/datosvariables-hero.jpg.asset.json";
import purHero from "@/assets/pur-hero.jpg.asset.json";
import iridesseHero from "@/assets/iridesse-hero.jpg.asset.json";

type Benefit = { title: string; body: string };

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
        "group relative min-h-[320px] bg-paper transition-transform duration-300 ease-out",
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

function ServiceCard({
  ariaLabel,
  titleLead,
  titleAccent,
  tagline,
  benefits,
  image,
  imageAlt,
  imageObjectPosition = "center 30%",
  frontRight,
  flipped,
  onToggle,
}: {
  ariaLabel: string;
  titleLead: string;
  titleAccent: string;
  tagline: string;
  benefits: Benefit[];
  image?: string;
  imageAlt?: string;
  imageObjectPosition?: string;
  /** Optional custom node for the front right column instead of image (used by POD counter). */
  frontRight?: React.ReactNode;
  flipped: boolean;
  onToggle: () => void;
}) {

  return (
    <CardWrapper>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={ariaLabel}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
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
        {/* Front — light, text-only */}
        <div
          className="absolute inset-0 flex min-h-[320px] flex-col justify-between bg-paper p-10"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-6 bg-gold" />
            Servicio
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <h3 className="font-display text-3xl font-light leading-[1.05] tracking-tight text-ink">
              {titleLead} <span className="italic text-gold">{titleAccent}</span>
            </h3>
            <p className="mt-5 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
              {tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
            Ver más
            <svg width="16" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
              <path d="M0.5 4.5H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M9.2 0.7L13 4.5L9.2 8.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Back — onyx with image and benefits */}
        <div
          className="absolute inset-0 flex min-h-[320px] flex-row overflow-hidden bg-onyx text-paper"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          aria-hidden={!flipped}
        >
          <div className="flex flex-1 flex-col p-8">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-6 bg-gold" />
              Beneficios
            </div>
            <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-x-5 gap-y-5 content-center">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-2">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-[3px] flex-shrink-0 text-gold">
                    <path d="M2.5 7.2L5.8 10.3L11.5 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="min-w-0">
                    <strong className="block font-display text-[13px] font-medium leading-tight text-paper">
                      {b.title}
                    </strong>
                    <p className="mt-1 text-[11px] leading-[1.45] text-paper/55">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
            {frontRight ? (
              frontRight
            ) : image ? (
              <>
                <img
                  src={image}
                  alt={imageAlt || ""}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: imageObjectPosition }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-onyx, #0f0f14) 0%, rgba(15,15,20,0.55) 30%, rgba(15,15,20,0) 100%)",
                  }}
                  aria-hidden="true"
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

function ImpresionDemandaCard({
  flipped,
  onToggle,
}: {
  flipped: boolean;
  onToggle: () => void;
}) {
  const values = [10, 50, 100, 250, 500, 1000];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % values.length), 1800);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pad = (n: number) => String(n).padStart(4, "0");
  const at = (o: number) => values[(idx + o + values.length) % values.length];

  return (
    <ServiceCard
      flipped={flipped}
      onToggle={onToggle}
      ariaLabel="Impresión por Demanda — clic para ver los beneficios"
      titleLead="Impresión"
      titleAccent="por Demanda"
      tagline="Imprimí lo que necesitás, cuando lo necesitás."
      benefits={[
        { title: "Sin mínimos", body: "Desde 10 hasta 1.000 al mismo costo." },
        { title: "Cero stock", body: "Producís solo lo que vas a usar." },
        { title: "Cambios libres", body: "Actualizás textos o precios entre tiradas." },
        { title: "Misma calidad", body: "Tecnología digital de punta en cada pedido." },
      ]}

      frontRight={
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 50%, rgba(201,159,90,0.18) 0%, rgba(201,159,90,0) 60%), #151310",
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
      }
    />
  );
}

export function Servicios() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const flipped = (id: string) => activeId === id;
  const toggle = (id: string) => setActiveId((current) => (current === id ? null : id));

  return (
    <section id="servicios" className="bg-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <header className="mb-16 max-w-3xl reveal">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-ink" />
            Un servicio para cada etapa de tu proyecto
          </div>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
            Soluciones adecuadas para <span className="italic">todo tipo</span> de necesidades.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            flipped={flipped("web-approval")}
            onToggle={() => toggle("web-approval")}
            ariaLabel="Web Approval — clic para ver los beneficios"
            titleLead="Web"
            titleAccent="Approval"
            tagline="Revisá, corregí y aprobá tus archivos sin instalar nada."
            image={webApprovalHero.url}
            imageAlt="Vista previa de Web Approval"
            benefits={[
              { title: "Carga simple", body: "Subís tu PDF validado en fuentes y color." },
              { title: "Revisión online", body: "Marcás cambios al instante, sin instalar nada." },
              { title: "Aprobación 1 clic", body: "Un clic y entra directo a producción." },
              { title: "Todo en un lugar", body: "Sin mails perdidos ni idas y vueltas." },
            ]}
          />
          <ServiceCard
            flipped={flipped("produccion-24")}
            onToggle={() => toggle("produccion-24")}
            ariaLabel="Producción 24 horas — clic para ver los beneficios"
            titleLead="Producción"
            titleAccent="24 horas"
            tagline="Siempre activos para tus necesidades."
            image={prod24Hero.url}
            imageAlt="Producción 24 horas"
            benefits={[
              { title: "En tiempo", body: "Producción continua para plazos ajustados." },
              { title: "Sin mínimos", body: "Desde 10 hasta 1.000 ejemplares." },
              { title: "Ajustes finales", body: "Aceptamos cambios hasta el último momento." },
              { title: "Calidad Xerox", body: "Tecnología de punta en cada tirada." },
            ]}
          />
          <ServiceCard
            flipped={flipped("datos-variables")}
            onToggle={() => toggle("datos-variables")}
            ariaLabel="Datos Variables — clic para ver los beneficios"
            titleLead="Datos"
            titleAccent="Variables"
            tagline="Cada pieza, única. Una tirada, mil versiones."
            image={datosVariablesHero.url}
            imageAlt="Datos Variables"
            benefits={[
              { title: "Pieza única", body: "Nombre, imagen o código por ejemplar." },
              { title: "Más conversión", body: "La personalización multiplica la respuesta." },
              { title: "Trazabilidad", body: "QR, código de barras o serial por pieza." },
              { title: "Mil versiones", body: "Los datos cambian sin pausar la producción." },
            ]}
          />
          <ImpresionDemandaCard
            flipped={flipped("impresion-demanda")}
            onToggle={() => toggle("impresion-demanda")}
          />
          <ServiceCard
            flipped={flipped("encuadernacion-pur")}
            onToggle={() => toggle("encuadernacion-pur")}
            ariaLabel="Encuadernación PUR — clic para ver los beneficios"
            titleLead="Encuadernación"
            titleAccent="PUR"
            tagline="El lomo más resistente para sus publicaciones."
            image={purHero.url}
            imageAlt="Libro abierto con encuadernación PUR"
            benefits={[
              { title: "Durabilidad", body: "Resiste humedad y uso intensivo." },
              { title: "Apertura plana", body: "Las páginas se abren sin tensión." },
              { title: "Vida útil", body: "No se desprenden con el uso cotidiano." },
              { title: "Valor percibido", body: "Un acabado que comunica calidad." },
            ]}
          />
          <ServiceCard
            flipped={flipped("xerox-iridesse")}
            onToggle={() => toggle("xerox-iridesse")}
            ariaLabel="Xerox Iridesse — clic para ver los beneficios"
            titleLead="Xerox"
            titleAccent="Iridesse"
            tagline="Impresión digital con efectos metálicos e iridiscentes."
            image={iridesseHero.url}
            imageAlt="Impresión digital Xerox Iridesse con efectos metálicos"
            imageObjectPosition="center 25%"
            benefits={[
              { title: "Metálicos", body: "Dorados, plateados y cobrizos sin tintas especiales." },
              { title: "Iridiscentes", body: "Acabados que cambian según la luz." },
              { title: "Digital", body: "Alta gama con tiempos de producción reducidos." },
              { title: "Premium", body: "Ideal para invitaciones, catálogos y piezas de autor." },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
