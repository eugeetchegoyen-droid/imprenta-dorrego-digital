import { IridesseSlider } from "./IridesseSlider";
import { useState } from "react";

const steps = [
  { k: "01", t: "Carga de archivos", d: "Subí PDF/X listos para imprenta. Validación automática de fuentes, sangrados y perfiles de color." },
  { k: "02", t: "Revisión online", d: "Visor de alta resolución con anotaciones. Compará versiones, marcá comentarios y dejá feedback preciso." },
  { k: "03", t: "Aprobación inmediata", d: "Un click bloquea la versión final y dispara la producción. Trazabilidad completa, sin emails perdidos." },
];

export function Laboratorio() {
  const [active, setActive] = useState(0);

  return (
    <section id="laboratorio" className="relative grain overflow-hidden bg-onyx text-paper py-32 md:py-44">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold/8 blur-[180px]" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-4 reveal">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-paper/60">
            <span className="h-px w-10 bg-gold" />
            Nuestra tecnología
          </div>
          <h2 className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,5rem)] font-light leading-[1] tracking-[-0.02em] text-balance">
            La precisión del <span className="italic">oficio</span> en la era <span className="gold-text italic">digital</span>.
          </h2>
          <p className="max-w-2xl text-paper/70 md:text-lg">
            Equipamiento y flujos de trabajo de última generación al servicio del oficio editorial.
            No solo imprimimos: creamos texturas visuales imposibles para la
            tecnología convencional. Deslizá para ver la diferencia.
          </p>
        </div>

        {/* Iridesse */}
        <div className="mt-20 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Pieza 01</div>
            <h3 className="mt-4 font-display text-4xl md:text-5xl">Xerox Iridesse</h3>
            <p className="mt-4 text-paper/70">
              Hasta 6 estaciones de impresión simultáneas. Tintas
              especiales <strong className="text-paper">rosa iridiscente</strong>, <strong className="text-paper">plata</strong>, <strong className="text-paper">blanco opaco</strong> y <strong className="text-paper">laca brillante</strong> sobre cualquier sustrato — incluso papeles oscuros, metalizados y traslúcidos.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Acabados metálicos sin foil ni hot stamping",
                "Calidad fotográfica 2400 × 2400 dpi",
                "Sustrato hasta 400 g/m², formato 330 × 660 mm",
                "Sin planchas: ideal para versionado y datos variables",
              ].map((x) => (
                <li key={x} className="flex gap-3 border-b border-paper/10 pb-3">
                  <span className="text-gold">◆</span>
                  <span className="text-paper/80">{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">
            <IridesseSlider />
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-paper/50">
              Arrastrá el control para revelar el acabado
            </p>
          </div>
        </div>

        {/* Web Approval */}
        <div id="approval" className="mt-32 grid gap-12 md:grid-cols-12 md:gap-16 reveal">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Pieza 02</div>
            <h3 className="mt-4 font-display text-4xl md:text-5xl">
              Aprobá tu trabajo <span className="italic">online</span>,
              <br />
              <span className="gold-text italic">en tiempo real</span>.
            </h3>
            <p className="mt-4 text-paper/70">
              Con <strong className="text-paper">Web Approval</strong>, nuestra plataforma de revisión digital
              de pruebas con control de versiones y trazabilidad: menos idas y vueltas,
              cero sorpresas en la máquina y control absoluto de la producción desde tu escritorio.
            </p>
            <a href="#cotizar" className="mt-8 inline-flex items-center gap-3 border border-gold/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-onyx">
              Acceder al portal →
            </a>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-3 gap-px bg-paper/10">
              {steps.map((s, i) => (
                <button
                  key={s.k}
                  onClick={() => setActive(i)}
                  className={`group p-6 text-left transition-all ${active === i ? "bg-paper text-onyx" : "bg-onyx text-paper hover:bg-paper/5"}`}
                >
                  <div className={`font-display text-3xl ${active === i ? "text-gold" : "text-paper/40"}`}>{s.k}</div>
                  <div className="mt-3 text-sm font-medium">{s.t}</div>
                </button>
              ))}
            </div>
            <div className="border-x border-b border-paper/10 bg-paper/5 p-8 min-h-[180px]">
              <p className="font-display text-2xl text-paper">{steps[active].t}</p>
              <p className="mt-3 text-paper/70">{steps[active].d}</p>
              <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                En vivo · sincronizado con producción
              </div>
            </div>
          </div>
        </div>

        {/* PUR Binding strip */}
        <div className="mt-32 grid gap-8 md:grid-cols-3 reveal">
          {[
            { t: "Encuadernación PUR", d: "Adhesivo de poliuretano reactivo. Aguanta aperturas planas y resiste temperatura sin fragilidad. La elección para libros de arte y técnicos." },
            { t: "Hot Melt & Cosido", d: "Tapa dura, rústica, lomo cuadrado fresado. Acabados editoriales profesionales para cualquier tirada." },
            { t: "Terminaciones", d: "Laminados mate/brillo/soft-touch, troquelados, hot stamping, relieves y encolados especiales." },
          ].map((x) => (
            <div key={x.t} className="group border border-paper/10 p-8 transition-colors hover:border-gold/50">
              <div className="mb-6 h-px w-8 bg-gold transition-all group-hover:w-16" />
              <h4 className="font-display text-2xl">{x.t}</h4>
              <p className="mt-3 text-sm text-paper/65">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
