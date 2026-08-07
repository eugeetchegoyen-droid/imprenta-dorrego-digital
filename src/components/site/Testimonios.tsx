import { useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  initials: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Nahuel Sifón",
    initials: "NS",
    rating: 5,
    text: "Genios totales! Hace años q trabajamos con ellos en Fundación Casa Rafael y siempre atención espectacular y laburos impecables! Súper agradecidos con todo el equipo técnico y con Gonzalo q año tras año nos ayuda! Saludos",
  },
  {
    name: "Ludme Juguetes artesanales",
    initials: "LJ",
    rating: 5,
    text: "La calidad de los trabajos es impecable, para emprendedores que realizamos tiradas más pequeñas es perfecto, ya que no todas las gráficas quieren realizar trabajos más chicos, pero sobre todo destaco la excelente atención de Pablo, súper cordial y comprometido, un gusto trabajar con ustedes!",
  },
  {
    name: "Amelia Prieto",
    initials: "AP",
    rating: 5,
    text: "De las mejores imprentas de Buenos Aires, si no la mejor. Calidad de impresión, de encuadernación, atención al cliente. Altamente recomendable",
  },
  {
    name: "Daniela Antunez",
    initials: "DA",
    rating: 5,
    text: "Muy buena calidad de impresión y encuadernación. La atención es excelente! Son todos muy amables, súper recomendable!",
  },
  {
    name: "Javier Walfisch",
    initials: "JW",
    rating: 5,
    text: "Excelente calidad de trabajo y precios acordes. Muy buena atención",
  },
  {
    name: "Gonzalo Ventura",
    initials: "GV",
    rating: 5,
    text: "Una imprenta genial! Atención genial y productos excelentes! Todo de primera!!",
  },
  {
    name: "Marcelo Sonvico",
    initials: "MS",
    rating: 5,
    text: "Excelente atención y calidad de los trabajos. Muy cumplidores",
  },
  {
    name: "Leonardo Salaber",
    initials: "LS",
    rating: 5,
    text: "Espectacular. Muy buen precio. Rápida entrega",
  },
  {
    name: "Mauricio Suasnávar",
    initials: "MS",
    rating: 5,
    text: "Calidad única y velocidad de producción",
  },
  {
    name: "Gabriel Ventura",
    initials: "GV",
    rating: 5,
    text: "Eficiencia y calidad",
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
    if (!isPaused) autoTimerRef.current = window.setInterval(advanceAuto, 4000);
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
    autoTimerRef.current = window.setInterval(advanceAuto, 4000);
    return () => {
      if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
    };
  }, [isPaused]);

  return (
    <section id="testimonios" className="bg-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <header className="mb-14">
          <div className="reveal max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              Experiencias de clientes
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
              Qué dicen <span>nuestros clientes</span>.
            </h2>
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

      </div>
    </section>
  );
}
