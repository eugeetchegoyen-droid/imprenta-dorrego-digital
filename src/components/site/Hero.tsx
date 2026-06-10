import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-press.jpg";
import logoAsset from "@/assets/dorrego-logo.png.asset.json";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative grain min-h-screen overflow-hidden bg-onyx text-paper">
      {/* Cinematic backdrop */}
      <div
        className="absolute inset-0 -z-0"
        style={{ transform: `translate3d(0, ${y * 0.25}px, 0) scale(1.08)` }}
      >
        <img
          src={heroImg}
          alt="Prensa digital Xerox imprimiendo con tinta dorada"
          className="h-full w-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
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
          <span>Buenos Aires · desde 1952</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-gold/80 md:block" />
          <span className="hidden md:block">Impresión bajo demanda</span>
        </div>

        {/* Brand lockup */}
        <div className="mt-10 flex items-center gap-5">
          <img
            src={logoAsset.url}
            alt="Imprenta Dorrego"
            className="h-16 w-auto md:h-20 [filter:brightness(0)_invert(1)] opacity-90 mix-blend-screen"
          />
          <div className="h-14 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:h-16" />
          <div className="leading-tight">
            <div className="font-display text-2xl tracking-tight text-paper md:text-[1.7rem]">
              Imprenta <span className="gold-text italic">Dorrego</span>
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-paper/55 md:text-[11px]">
              Desde 1952 · Editorial · Digital · POD
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="mt-8 max-w-[1100px]">
          <h1 className="font-display text-[clamp(3rem,9vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-balance">
            Precisión <span className="italic font-normal">editorial</span>,
            <br />
            flexibilidad <span className="gold-text italic">digital</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base text-paper/75 md:text-lg text-pretty">
            Impresión bajo demanda con calidad de autor. Tecnología Xerox
            Iridesse, encuadernación PUR y aprobación online en tiempo real —
            desde un solo ejemplar hasta tirajes editoriales.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cotizar"
              className="group inline-flex items-center gap-3 bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-onyx transition-all hover:bg-gold-soft hover:shadow-gold"
            >
              Comenzar un proyecto
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#laboratorio"
              className="group inline-flex items-center gap-3 border border-paper/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-paper transition-all hover:border-paper hover:bg-paper/5"
            >
              Conocer la tecnología
            </a>
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-paper/15 pt-8 md:grid-cols-4">
          {[
            ["72 años", "imprimiendo cultura"],
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
