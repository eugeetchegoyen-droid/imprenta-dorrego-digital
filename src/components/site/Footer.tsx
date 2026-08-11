import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-onyx text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-4xl md:text-5xl">Imprenta Dorrego</div>
            <p className="mt-4 max-w-md text-paper/60">
              Editorial · Digital · Bajo demanda. Buenos Aires, Argentina.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cotizar" className="inline-flex items-center gap-3 border border-gold/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-onyx">
                Cotiza tu proyecto →
              </a>
              <a href="/contacto" className="inline-flex items-center gap-3 border border-paper/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-paper/80 transition-all hover:border-paper hover:text-paper">
                Contáctanos →
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-paper/70">Visitanos</div>
            <div className="mt-4 flex items-start gap-3 text-sm text-paper/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <p className="leading-relaxed">
                Av Dorrego 1102<br />
                C1414 CABA · Argentina<br />
                Lun – Vie · 9 a 18 hs
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-paper/70">Contacto</div>
            <div className="mt-4 space-y-3 text-sm">
              <a href="mailto:ventas@imprentadorrego.com.ar" className="flex items-start gap-3 text-paper/80 hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Escribinos
              </a>
              <a href="tel:+541148555353" className="flex items-start gap-3 text-paper/80 hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                +54 11 4855 5353
              </a>
              <a href="tel:+541148544644" className="flex items-start gap-3 text-paper/80 hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                +54 11 4854 4644
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-paper/70">Síguenos</div>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href="https://www.instagram.com/imprentadorrego/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-paper/80 hover:text-gold">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Instagram
              </a>
              <a href="#" className="flex items-start gap-3 text-paper/80 hover:text-gold">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/25 pt-6 text-[10px] uppercase tracking-[0.25em] text-paper/70 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Imprenta Dorrego. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper">Privacidad</a>
            <a href="#" className="hover:text-paper">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
