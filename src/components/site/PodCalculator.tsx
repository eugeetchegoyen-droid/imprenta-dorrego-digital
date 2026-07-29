export function PodCalculator() {
  return (
    <section id="editorial" className="bg-bone py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 reveal">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              Impresión por demanda
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
              Imprimí solo lo que <span className="italic">necesitás</span>, cuando lo necesitás.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Diez, cien o mil ejemplares con un costo unitario similar. Sin
              stock inmovilizado, sin desperdicio de depósitos, sin
              obsolescencia. La impresión digital al servicio de la
              flexibilidad real.
            </p>
          </div>

          <div className="md:col-span-7 reveal">
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {[
                {
                  n: "01",
                  t: "Stock cero",
                  d: "Reimprimí en 48-72 hs. Sin capital inmovilizado ni ejemplares olvidados en depósito.",
                },
                {
                  n: "02",
                  t: "Producción 24 hs",
                  d: "Turnos continuos para cumplir con las entregas más urgentes, respetando tus tiempos.",
                },
                {
                  n: "03",
                  t: "Datos variables",
                  d: "Combiná imágenes, textos y códigos de barras para versionar cada ejemplar sin costo extra.",
                },
                {
                  n: "04",
                  t: "Desde 1 ejemplar",
                  d: "Ideal para autores independientes, editoriales pequeñas y ediciones de autor.",
                },
              ].map((x) => (
                <div key={x.n} className="bg-paper p-8">
                  <div className="font-display text-3xl text-gold">{x.n}</div>
                  <div className="mt-4 font-display text-xl">{x.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-start gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-10 bg-gold" />
                Del archivo al lomo en 24 horas
              </div>
              <a href="/contacto" className="inline-flex items-center gap-3 border border-gold/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-onyx">
                Contáctanos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
