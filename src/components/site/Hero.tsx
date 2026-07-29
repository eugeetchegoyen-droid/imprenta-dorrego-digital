import { useCallback, useEffect, useRef, useState } from "react";
import prensaAsset from "@/assets/hero-prensa.jpg.asset.json";
import packagingAsset from "@/assets/hero-packaging.jpg.asset.json";
import terminacionesAsset from "@/assets/hero-terminaciones.jpg.asset.json";
import encuadernacionAsset from "@/assets/hero-encuadernacion.png.asset.json";

type Slide = {
  img: string;
  alt: string;
  kicker: string;
  title: React.ReactNode;
  text: string;
  featured: { title: string; sub: string; body: string };
};

const SLIDES: Slide[] = [
  {
    img: prensaAsset.url,
    alt: "Prensa digital de producción imprimiendo pliegos a color",
    kicker: "Buenos Aires · desde 1952",
    title: (
      <>
        Impresión digital
        <br />
        de <span className="gold-text italic">máxima calidad</span>.
      </>
    ),
    text:
      "Producción profesional con colores precisos, terminaciones premium y tiempos de entrega ágiles para empresas, agencias y marcas.",
    featured: {
      title: "Impresión digital",
      sub: "de máxima calidad",
      body: "Producción profesional con colores precisos, terminaciones premium y tiempos de entrega ágiles para empresas, agencias y marcas.",
    },
  },
  {
    img: packagingAsset.url,
    alt: "Packaging premium con etiquetas y detalles en foil dorado",
    kicker: "Packaging & etiquetas",
    title: (
      <>
        Packaging
        <br />
        de <span className="gold-text italic">alto impacto</span>.
      </>
    ),
    text:
      "Cajas, etiquetas y piezas que destacan tu marca en el punto de venta, con acabados que captan la mirada al instante.",
    featured: {
      title: "Packaging & etiquetas",
      sub: "de alto impacto",
      body: "Tiradas cortas de cajas, rótulos y etiquetas en rollo, con foil, texturas y sustratos especiales.",
    },
  },
  {
    img: terminacionesAsset.url,
    alt: "Tarjetas negras con relieve, barniz sectorizado y stamping plateado",
    kicker: "Terminaciones especiales",
    title: (
      <>
        Terminaciones
        <br />
        que hacen la <span className="gold-text italic">diferencia</span>.
      </>
    ),
    text:
      "Laminados, barniz sectorizado, stamping, relieve y efectos especiales para piezas memorables al tacto y a la vista.",
    featured: {
      title: "Acabados premium",
      sub: "relieve, foil y barniz UV",
      body: "Realce metalizado y texturas en línea sobre cualquier sustrato: tapas, packaging y piezas promocionales.",
    },
  },
  {
    img: encuadernacionAsset.url,
    alt: "Libros encuadernados con tapa a todo color",
    kicker: "Encuadernación profesional",
    title: (
      <>
        Papel, tinta y <span className="gold-text italic">trayectoria</span>.
      </>
    ),
    text:
      "Más de 70 años de experiencia en impresión en el corazón de Buenos Aires, con encuadernación profesional de punta a punta.",
    featured: {
      title: "Encuadernación profesional",
      sub: "PUR, hotmelt, abrochado y anillado",
      body: "Libros, catálogos y revistas terminados en casa: lomo cuadrado, tapas laminadas y control de calidad ejemplar por ejemplar.",
    },
  },

];


const INTERVAL = 6000;

export function Hero() {
  const [y, setY] = useState(0);
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((p) => (p + 1) % SLIDES.length), INTERVAL);
  }, []);

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [start]);

  const go = (n: number) => {
    setI((n + SLIDES.length) % SLIDES.length);
    start();
  };

  const slide = SLIDES[i];

  return (
    <section id="top" className="relative grain min-h-screen overflow-hidden bg-onyx text-paper">
      {/* Cinematic backdrop — cross-fading carousel */}
      <div
        className="absolute inset-0 -z-0"
        style={{ transform: `translate3d(0, ${y * 0.25}px, 0) scale(1.08)` }}
      >
        {SLIDES.map((s, idx) => (
          <img
            key={s.img}
            src={s.img}
            alt={s.alt}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1400ms] ease-out ${
              idx === i ? "opacity-70" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/40 via-onyx/30 to-onyx" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,oklch(0.08_0.005_60/0.7)_70%)]" />
      </div>

      {/* Ambient gold flicker */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-gold/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 pb-12 pt-36 lg:px-10 lg:pt-44">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-paper/70">
          <span className="h-px w-12 bg-gold" />
          <span key={slide.kicker} className="hero-soft-fade">{slide.kicker}</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-gold/80 md:block" />
          <span className="hidden md:block">Impresión bajo demanda</span>
        </div>

        {/* Brand lockup */}
        <div className="mt-10">
          <div className="font-display text-2xl tracking-tight text-paper md:text-[1.7rem]">
            Imprenta <span className="gold-text">Dorrego</span>
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-paper/55 md:text-[11px]">
            Desde 1952 · Editorial · Digital · POD
          </div>
        </div>

        {/* Headline — synced caption */}
        <div className="mt-8 max-w-[1100px]">
          <div
            key={i}
            className="hero-soft-fade min-h-[17rem] md:min-h-[clamp(14rem,26vw,22rem)]"
          >
            <h1 className="font-display pr-[0.1em] text-[clamp(3rem,9vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-balance">
              {slide.title}
            </h1>
            <p className="mt-8 max-w-xl text-base text-paper/75 md:text-lg text-pretty">
              {slide.text}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cotizar"
              className="group inline-flex items-center gap-3 bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-onyx transition-all hover:bg-gold-soft hover:shadow-gold"
            >
              Solicitar cotización
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#laboratorio"
              className="group inline-flex items-center gap-3 border border-paper/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-paper transition-all hover:border-paper hover:bg-paper/5"
            >
              Nuestra tecnología
            </a>
          </div>
        </div>

        {/* Destacado sincronizado + controles del carrousel */}
        <div className="mt-14 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
          <div
            key={`f-${i}`}
            className="hero-soft-fade flex min-h-[21rem] max-w-2xl flex-col justify-center border-l-2 border-gold bg-onyx/55 px-5 py-4 backdrop-blur-sm md:min-h-[10rem] md:px-6 md:py-5"
          >
            <div className="font-display text-xl leading-tight md:text-2xl">
              {slide.featured.title}
              <br />
              <span className="gold-text">{slide.featured.sub}</span>
            </div>
            <p className="mt-2 max-w-lg text-xs leading-relaxed text-paper/70 md:text-sm">
              {slide.featured.body}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="flex items-center gap-2">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.alt}
                  onClick={() => go(idx)}
                  aria-label={`Ir al slide ${idx + 1}`}
                  aria-current={idx === i}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-3 bg-paper/35 hover:bg-paper/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(i + 1)}
              aria-label="Siguiente"
              className="grid h-10 w-10 shrink-0 place-items-center border border-paper/30 text-paper transition-all hover:border-gold hover:text-gold"
            >
              →
            </button>
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-paper/15 pt-8 md:grid-cols-4">
          {[
          ["72 años", "de trayectoria editorial"],
          ["1 → ∞", "ejemplares por demanda"],
          ["6 tintas", "Xerox Iridesse · Oro / Plata / Blanco"],
          ["24h", "del archivo al lomo"],
          ].map(([n, l]) => (
            <div key={n}>
              <div className="font-display text-2xl md:text-3xl">{n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-paper/55">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-paper/50">
        <span>scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-paper/50 to-transparent" />
      </div>
    </section>
  );
}
