import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/dorrego-logo.png.asset.json";

type NavLink = { to: string; hash?: string; label: string };

type NavGroup = { label: string; children: NavLink[] };

const links: (NavLink | NavGroup)[] = [
  { to: "/", hash: "laboratorio", label: "Nuestra tecnología" },
  {
    label: "Servicios",
    children: [
      { to: "/", hash: "servicios", label: "Soluciones" },
      { to: "/", hash: "editorial", label: "Impresión por demanda" },
      { to: "/blog/impresion-bajo-demanda-autores-argentina", label: "Guía POD para autores" },
      { to: "/", hash: "cotizar", label: "Solicitar cotización" },
    ],
  },
  { to: "/", hash: "portfolio", label: "Nuestros trabajos" },
  { to: "/unite", label: "Unite al equipo" },
  { to: "/contacto", label: "Contacto" },
];

function isGroup(l: NavLink | NavGroup): l is NavGroup {
  return (l as NavGroup).children !== undefined;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-ink/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_-12px_rgba(0,0,0,0.3)]`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3.5">
          <img
            src={logoAsset.url}
            alt="Imprenta Dorrego"
            className="h-12 w-auto rounded-sm md:h-13 lg:h-14"
          />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-tight text-paper md:text-xl">Imprenta Dorrego</div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-paper/50">Editorial · Digital · POD</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, i) =>
            isGroup(l) ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setOpenSub(true)}
                onMouseLeave={() => setOpenSub(false)}
              >
                <button
                  type="button"
                  onClick={() => setOpenSub((v) => !v)}
                  className="group relative flex items-center gap-1 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
                >
                  {l.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${openSub ? "rotate-180" : ""}`}
                  >
                    <path d="M1 3.5L5 7L9 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
                <div
                  className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 transition-all duration-200 ${
                    openSub ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"
                  }`}
                >
                  <div className="min-w-[210px] border border-white/10 bg-ink py-2 shadow-card">
                    {l.children.map((c) => (
                      <Link
                        key={`${c.to}${c.hash ?? ""}`}
                        to={c.to}
                        hash={c.hash}
                        onClick={() => setOpenSub(false)}
                        className="block px-5 py-2.5 text-sm font-medium text-paper/80 transition-colors hover:bg-white/10 hover:text-paper"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={`${l.to}${l.hash ?? ""}`}
                to={l.to}
                hash={l.hash}
                className={`group relative text-sm font-medium text-paper/80 transition-colors hover:text-paper ${
                  i === 0 ? "md:ml-4" : ""
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
          <Link
            to="/"
            hash="approval"
            className="inline-flex items-center gap-2 border border-paper/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-paper transition-all hover:bg-paper hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Web Approval
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink">
          <div className="flex flex-col px-6 py-6">
            {links.map((l) =>
              isGroup(l) ? (
                <div key={l.label} className="border-b border-white/10 py-3">
                  <div className="font-display text-2xl text-paper/60">{l.label}</div>
                  <div className="mt-2 flex flex-col gap-1 pl-4">
                    {l.children.map((c) => (
                      <Link
                        key={`${c.to}${c.hash ?? ""}`}
                        to={c.to}
                        hash={c.hash}
                        onClick={() => setOpen(false)}
                        className="py-2 font-display text-xl text-paper/90"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={`${l.to}${l.hash ?? ""}`}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3 font-display text-2xl text-paper/90"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              to="/"
              hash="approval"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-between border border-paper/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-paper"
            >
              Web Approval <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
