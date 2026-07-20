import { useEffect, useState } from "react";
import logoAsset from "@/assets/dorrego-logo.png.asset.json";

const links = [
  { href: "#laboratorio", label: "Nuestra tecnología" },
  { href: "#portfolio", label: "Nuestros trabajos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cotizar", label: "Cotizador" },
  { href: "/unite", label: "Unite al equipo" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-paper/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Imprenta Dorrego"
            className="h-10 w-auto md:h-11"
          />
          <div className="leading-tight">
            <div className="font-display text-base tracking-tight text-ink">Imprenta Dorrego</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Editorial · Digital · POD</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#approval"
            className="inline-flex items-center gap-2 border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-all hover:bg-ink hover:text-paper"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Web Approval
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-paper">
          <div className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-display text-2xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#approval"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-between border border-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              Web Approval <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
