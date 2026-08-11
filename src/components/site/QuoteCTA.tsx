import { Link } from "@tanstack/react-router";

export function QuoteCTA() {
  return (
    <section className="bg-paper py-16 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="relative overflow-hidden border border-border/60 bg-bone px-8 py-14 text-center md:px-16 md:py-20 reveal">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-gold/10 blur-[140px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-[260px] w-[260px] rounded-full bg-ink/5 blur-[120px]" />
          <div className="relative">
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-gold" />
              ¿Listo para imprimir?
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.8rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              Contanos tu proyecto y te respondemos en 24 horas hábiles.
            </h2>
            <div className="mt-10">
              <Link
                to="/"
                hash="cotizar"
                className="inline-flex items-center gap-3 bg-ink px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-all hover:bg-onyx hover:shadow-card"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
