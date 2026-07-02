const services = [
  {
    n: "01",
    title: "Web Approval",
    body: "Revisión y aprobación en línea, transferencia de archivos, reemplazo de páginas y notificaciones automáticas. Control total del proyecto, desde cualquier lugar.",
    tag: "Workflow digital",
  },
  {
    n: "02",
    title: "Producción 24 hs",
    body: "Producimos las 24 horas para cumplir con las necesidades más urgentes, respetando siempre tus tiempos de entrega.",
    tag: "Respuesta inmediata",
  },
  {
    n: "03",
    title: "Datos variables",
    body: "Personalizá cualquier impresión combinando imágenes, textos o códigos de barras según la necesidad de cada cliente.",
    tag: "Personalización",
  },
  {
    n: "04",
    title: "Impresión por demanda",
    body: "Imprimí lo que necesites, cuando lo necesites. 10, 100 o 1.000 ejemplares con un costo unitario similar y sin stock inmovilizado.",
    tag: "Stock cero",
  },
  {
    n: "05",
    title: "Encuadernación PUR",
    body: "Adhesivo de poliuretano reactivo que aporta mayor durabilidad y flexibilidad al libro, a un menor costo.",
    tag: "Acabado premium",
  },
  {
    n: "06",
    title: "Xerox Premier Partner",
    body: "Contamos con el respaldo de Xerox, líder mundial en tecnología de impresión, lo que nos permite mejorar el servicio continuamente.",
    tag: "Certificación global",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="bg-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <header className="mb-16 max-w-3xl reveal">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-ink" />
            Servicios
          </div>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
            Soluciones adecuadas para <span className="italic">todo tipo</span> de necesidades.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
          {services.map((s) => (
            <article
              key={s.n}
              className="group flex min-h-[280px] flex-col justify-between bg-paper p-10 transition-colors hover:bg-bone"
            >
              <div>
                <span className="font-display text-3xl text-gold">{s.n}</span>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              <div className="mt-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold transition-all group-hover:w-12" />
                {s.tag}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
