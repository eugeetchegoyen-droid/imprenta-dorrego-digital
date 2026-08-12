import { Link } from "@tanstack/react-router";

export function QuoteCTA() {
  return (
    <section className="bg-paper py-10 md:py-16">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="relative overflow-hidden border border-border/60 bg-bone px-6 py-10 text-center md:px-12 md:py-14 reveal">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 h-[180px] w-[180px] rounded-full bg-ink/5 blur-[90px]" />
          <div className="relative">
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 bg-gold" />
              ¿Listo para imprimir?
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
              Cotizá tu proyecto y te respondemos a la brevedad.
            </h2>
            <div className="mt-7">
              <Link
                to="/"
                hash="cotizar"
                className="inline-flex items-center gap-3 bg-ink px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-all hover:bg-onyx hover:shadow-card"
              >
                <span className="h-1 w-1 rounded-full bg-gold" />
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
