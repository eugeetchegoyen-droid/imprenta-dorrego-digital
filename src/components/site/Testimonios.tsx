import { useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  initials: string;
  rating: number;
  when: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "María Alejandra Fernández",
    initials: "MF",
    rating: 5,
    when: "Hace 2 meses",
    text: "Excelente calidad de impresión y atención. Imprimimos nuestro catálogo anual y quedó impecable. Los tiempos de entrega se cumplieron perfectamente y el asesoramiento previo fue clave para elegir los papeles.",
  },
  {
    name: "Sebastián Rocha",
    initials: "SR",
    rating: 5,
    when: "Hace 3 meses",
    text: "Trabajamos con Dorrego para la edición de un libro de arte con acabados iridiscentes. El resultado superó nuestras expectativas: colores metálicos vibrantes y una encuadernación PUR muy prolija.",
  },
  {
    name: "Laura Giménez",
    initials: "LG",
    rating: 5,
    when: "Hace 1 mes",
    text: "Muy profesionales. Necesitábamos una tirada corta con datos variables para un mailing y lo resolvieron en 48 horas. Volveremos sin dudas para próximos proyectos editoriales.",
  },
  {
    name: "Diego Martín Alonso",
    initials: "DA",
    rating: 5,
    when: "Hace 5 meses",
    text: "Una imprenta con historia y con tecnología de última generación. La atención de todo el equipo es cálida y precisa. Recomiendo especialmente para libros de autor y publicaciones cuidadas.",
  },
  {
    name: "Carolina Pérez",
    initials: "CP",
    rating: 5,
    when: "Hace 4 meses",
    text: "Imprimí mi primera novela con ellos y fue una experiencia increíble. Me guiaron en la elección del papel interior, el tipo de tapa y el acabado. Calidad editorial real, no la típica imprenta digital.",
  },
  {
    name: "Federico Villar",
    initials: "FV",
    rating: 5,
    when: "Hace 6 meses",
    text: "Hicimos una serie limitada de invitaciones con Xerox Iridesse y el efecto oro y plata quedó espectacular. Cumplen con los plazos y son muy detallistas con la terminación.",
  },
  {
    name: "Ana Sofía Bianchi",
    initials: "AB",
    rating: 5,
    when: "Hace 2 semanas",
    text: "Trato humano y calidad de imprenta boutique. Reimprimimos ediciones bajo demanda todos los meses y siempre mantienen el estándar. Un placer trabajar con ellos.",
  },
  {
    name: "Martín Iglesias",
    initials: "MI",
    rating: 5,
    when: "Hace 7 meses",
    text: "El sistema de Web Approval nos ahorra muchísimo tiempo. Aprobamos pruebas desde cualquier lado y entra directo a producción. Ideal para agencias que trabajamos contrarreloj.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5 text-gold" aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.3 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.8 6C12.3 13.1 17.6 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
      <path fill="#FBBC05" d="M10.4 28.7a14.5 14.5 0 0 1 0-9.4l-7.8-6A24 24 0 0 0 0 24c0 3.9.9 7.6 2.6 10.7l7.8-6z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.2-8.4 2.2-6.4 0-11.7-3.6-13.6-9.5l-7.8 6C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

export function Testimonios() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoTimerRef = useRef<number | null>(null);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    resetAuto();
  };

  const advanceAuto = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: stepFor(el), behavior: "smooth" });
    }
  };

  const stepFor = (el: HTMLDivElement) => {
    const card = el.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + 16 : el.clientWidth * 0.85;
  };

  const resetAuto = () => {
    if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
    if (!isPaused) autoTimerRef.current = window.setInterval(advanceAuto, 6500);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
      return;
    }
    autoTimerRef.current = window.setInterval(advanceAuto, 6500);
    return () => {
      if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
    };
  }, [isPaused]);

  return (
    <section id="testimonios" className="bg-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <header className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="reveal max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              Reseñas verificadas en Google
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
              Qué dicen <span className="italic">nuestros clientes</span>.
            </h2>
          </div>

          <div className="reveal flex items-center gap-5">
            <div className="flex items-center gap-3">
              <GoogleG />
              <div className="leading-tight">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold text-ink">4,9</span>
                  <Stars n={5} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Basado en reseñas de Google</div>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-border md:block" />
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                disabled={!canPrev}
                aria-label="Anterior"
                className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition disabled:opacity-30 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M13.5 7H1M4.8 3.2L1 7l3.8 3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                disabled={!canNext}
                aria-label="Siguiente"
                className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition disabled:opacity-30 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M0.5 7H13M9.2 3.2L13 7l-3.8 3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <div className="relative">
          <div
            ref={scrollerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:-mx-10 lg:px-10"
            style={{ scrollbarWidth: "none" }}
          >

            {reviews.map((r) => (
              <article
                key={r.name}
                data-card
                className="group relative flex w-[85%] flex-shrink-0 snap-start flex-col justify-between bg-bone p-8 shadow-card sm:w-[420px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Stars n={r.rating} />
                    <GoogleG />
                  </div>
                  <svg width="28" height="20" viewBox="0 0 28 20" className="mt-6 text-gold" fill="currentColor" aria-hidden="true">
                    <path d="M0 20V10C0 4.5 3.5 0.5 9 0v3.5c-2.8.5-4.5 2.5-4.5 5H9V20H0zm19 0V10c0-5.5 3.5-9.5 9-10v3.5c-2.8.5-4.5 2.5-4.5 5H28V20h-9z" />
                  </svg>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/85">{r.text}</p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-border/60 pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-onyx font-display text-sm font-semibold text-gold">
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-display text-sm font-semibold text-ink">{r.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{r.when}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 md:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition disabled:opacity-30"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M13.5 7H1M4.8 3.2L1 7l3.8 3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="https://www.google.com/search?q=Imprenta+Dorrego+opiniones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
            >
              Ver todas en Google
            </a>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Siguiente"
              className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition disabled:opacity-30"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M0.5 7H13M9.2 3.2L13 7l-3.8 3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 hidden md:block">
          <a
            href="https://www.google.com/search?q=Imprenta+Dorrego+opiniones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
          >
            Ver todas las reseñas en Google
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M0.5 7H13M9.2 3.2L13 7l-3.8 3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
