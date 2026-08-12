import { Link } from "@tanstack/react-router";

export function QuoteCTA() {
  return (
    <section className="bg-paper py-10 md:py-16">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="group/cta relative overflow-hidden border border-border/60 bg-bone px-6 py-10 text-center transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:px-12 md:py-14 reveal">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-gold/10 blur-[100px] transition-opacity duration-700 group-hover/cta:opacity-80" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 h-[180px] w-[180px] rounded-full bg-ink/5 blur-[90px] transition-opacity duration-700 group-hover/cta:opacity-80" />
          <div className="relative">
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 origin-right bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:scale-x-125 motion-reduce:transition-none" />
              ¿Listo para imprimir?
              <span className="h-px w-8 origin-left bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:scale-x-125 motion-reduce:transition-none" />
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
              Cotizá tu proyecto y te respondemos a la brevedad.
            </h2>
            <div className="mt-7">
              <Link
                to="/"
                hash="cotizar"
                className="group/btn inline-flex min-h-11 items-center gap-3 bg-ink px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-[background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-onyx hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bone active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                <span className="h-1 w-1 rounded-full bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:scale-150 motion-reduce:transition-none" />
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
