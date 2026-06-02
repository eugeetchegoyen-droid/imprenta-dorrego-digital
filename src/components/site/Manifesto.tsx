export function Manifesto() {
  return (
    <section className="relative bg-paper py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="sticky top-32 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              Manifiesto
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <p className="font-display text-[clamp(1.6rem,3.6vw,3.4rem)] font-light leading-[1.1] tracking-[-0.015em] text-balance">
              Creemos que un libro es un{" "}
              <span className="italic">objeto vivo</span>. Que la calidad no
              debería medirse en miles de ejemplares apilados en un depósito,
              sino en la <span className="gold-text italic">precisión</span> de
              cada uno que sale por nuestra puerta.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Combinamos décadas de oficio editorial con tecnología digital de
              última generación. Te damos la libertad de imprimir lo que
              necesitás, cuando lo necesitás — sin mínimos, sin stock muerto,
              sin perder calidad.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
              {[
                ["01", "Sin mínimos", "Desde un solo ejemplar."],
                ["02", "Sin esperas", "Aprobación online en tiempo real."],
                ["03", "Sin compromisos", "Calidad editorial certificada."],
              ].map(([n, t, d]) => (
                <div key={n} className="bg-paper p-6">
                  <div className="font-display text-3xl text-gold">{n}</div>
                  <div className="mt-3 font-display text-xl">{t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
