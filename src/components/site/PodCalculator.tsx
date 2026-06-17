import { useMemo, useState } from "react";

export function PodCalculator() {
  const [qty, setQty] = useState(50);

  const data = useMemo(() => {
    // Stylized economics — illustrative.
    const traditionalMin = 500;
    const tradPerUnit = qty < traditionalMin ? 0 : Math.max(6, 18 - qty / 100);
    const tradTotal = qty < traditionalMin ? 0 : tradPerUnit * qty;
    const podPerUnit = Math.max(8, 22 - Math.log10(qty + 1) * 3);
    const podTotal = podPerUnit * qty;

    // Time-to-delivery: traditional vs POD (days)
    const tradTime = qty < traditionalMin ? null : Math.round(18 + qty / 200); // ~18–26 días
    const podTime = Math.round(2 + Math.log10(qty + 1) * 0.8); // ~2–5 días

    return { tradPerUnit, tradTotal, podPerUnit, podTotal, tradTime, podTime, traditionalMin };
  }, [qty]);

  return (
    <section id="editorial" className="bg-bone py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 reveal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              Impresión bajo demanda
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
              Imprimí solo lo que <span className="italic">necesitás</span>, cuando lo necesitás.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Calidad de lomo cuadrado, fresado y encuadernación editorial sin
              mínimos prohibitivos. Recibí tus libros en días, no en semanas.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              {[
                "Sin tiraje mínimo · desde 1 ejemplar",
                "Reimpresiones automáticas en 48-72 hs",
                "Versionado y datos variables sin costo extra",
                "Ideal para autores independientes y editoriales",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 border-b border-border pb-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 reveal">
            <div className="bg-paper p-8 shadow-elegant md:p-10">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Simulador</div>
                  <div className="mt-2 font-display text-3xl md:text-4xl">{qty} ejemplares</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tiempo de entrega</div>
                  <div className="mt-2 font-display text-2xl text-gold">
                    {data.tradTime === null ? "—" : `${data.podTime} días`}
                  </div>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={1500}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="mt-8 w-full accent-gold"
                aria-label="Cantidad de ejemplares"
              />
              <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>1</span><span>250</span><span>500</span><span>1.000</span><span>1.500</span>
              </div>

              {/* Bars */}
              <div className="mt-10 space-y-6">
                <Row
                  label="Imprenta tradicional"
                  helper={qty < data.traditionalMin ? `No imprime · mínimo ${data.traditionalMin}` : `≈ ${data.tradPerUnit.toFixed(1)} / ejemplar`}
                  pct={qty < data.traditionalMin ? 100 : Math.min(100, (data.tradTotal / 25000) * 100)}
                  variant="trad"
                  disabled={qty < data.traditionalMin}
                />
                <Row
                  label="Dorrego · POD"
                  helper={`≈ ${data.podPerUnit.toFixed(1)} / ejemplar`}
                  pct={Math.min(100, (data.podTotal / 25000) * 100)}
                  variant="pod"
                />
              </div>

              {/* Tiempo de entrega */}
              <div className="mt-10 space-y-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tiempos de entrega estimados</div>
                <Row
                  label="Imprenta tradicional"
                  helper={data.tradTime === null ? `No imprime · mínimo ${data.traditionalMin}` : `≈ ${data.tradTime} días`}
                  pct={data.tradTime === null ? 100 : Math.min(100, (data.tradTime / 30) * 100)}
                  variant="trad"
                  disabled={data.tradTime === null}
                />
                <Row
                  label="Dorrego · POD"
                  helper={`≈ ${data.podTime} días`}
                  pct={Math.min(100, (data.podTime / 30) * 100)}
                  variant="pod"
                />
              </div>

              <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
                <span className="font-display text-base text-ink">El cambio de paradigma:</span>{" "}
                la imprenta tradicional necesita escala para amortizar planchas.
                La impresión digital bajo demanda elimina esa barrera —
                recibís tus ejemplares en días, no en semanas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label, helper, pct, variant, disabled,
}: { label: string; helper: string; pct: number; variant: "trad" | "pod"; disabled?: boolean }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className={`font-medium ${disabled ? "text-muted-foreground line-through" : ""}`}>{label}</span>
        <span className="text-xs text-muted-foreground">{helper}</span>
      </div>
      <div className="mt-2 h-3 w-full overflow-hidden bg-muted">
        <div
          className={`h-full transition-all duration-700 ease-out ${
            disabled ? "bg-border" : variant === "pod" ? "bg-gradient-to-r from-gold to-gold-soft" : "bg-graphite"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
