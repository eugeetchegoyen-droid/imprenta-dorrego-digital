import { useState } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Cat = "Todos" | "Libros de Arte" | "Catálogos Corporativos" | "Revistas de Autor" | "Packaging Premium";

const items: { src: string; title: string; cat: Cat; specs: string[]; tall?: boolean }[] = [
  { src: p1, title: "Antología — Galería Mar Dulce", cat: "Libros de Arte", specs: ["Ilustración 300g", "Iridesse Plata", "PUR cosido"], tall: true },
  { src: p2, title: "Catálogo Möbel 2025", cat: "Catálogos Corporativos", specs: ["Couché mate 150g", "Hot stamping oro", "Lomo cuadrado"] },
  { src: p3, title: "Novela — Casa del Autor", cat: "Revistas de Autor", specs: ["Bookcel 90g", "Tapa dura", "Estampado a ciego"], tall: true },
  { src: p4, title: "Packaging — Iridesse", cat: "Packaging Premium", specs: ["Cartulina 350g", "Iridesse Oro+Plata", "Troquelado"] },
  { src: p5, title: "Revista ART · Nº 26", cat: "Revistas de Autor", specs: ["Munken Lynx 130g", "Tinta blanca opaca", "Sin lomo"], tall: true },
  { src: p6, title: "Colección Editorial", cat: "Libros de Arte", specs: ["Variados 90–300g", "PUR", "Sobrecubierta"] },
];

const cats: Cat[] = ["Todos", "Libros de Arte", "Catálogos Corporativos", "Revistas de Autor", "Packaging Premium"];

export function Portfolio() {
  const [cat, setCat] = useState<Cat>("Todos");
  const filtered = cat === "Todos" ? items : items.filter((i) => i.cat === cat);

  return (
    <section id="portfolio" className="bg-paper py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="reveal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              Showroom digital
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.6rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Nuestros trabajos.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${
                  cat === c
                    ? "border-ink bg-ink text-paper"
                    : "border-border text-muted-foreground hover:border-ink hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {filtered.map((it, i) => (
            <figure
              key={it.title}
              className={`group relative overflow-hidden bg-bone reveal ${it.tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.cat}</div>
                <div className="mt-1 font-display text-xl">{it.title}</div>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-paper/70">
                  {it.specs.map((s) => (
                    <li key={s} className="border-l border-paper/30 pl-2 first:border-0 first:pl-0">{s}</li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
