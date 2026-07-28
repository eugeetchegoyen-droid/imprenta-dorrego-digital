import historiaImg from "@/assets/historia-dorrego.png.asset.json";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-paper py-32 md:py-48">
      {/* Historical image — left margin, faded toward the text */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[80%] md:w-[55%] lg:w-[48%]">
        <img
          src={historiaImg.url}
          alt="Taller histórico de Imprenta Dorrego, 1952"
          className="h-full w-full object-cover opacity-40"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 78%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 78%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="sticky top-32 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-ink" />
              Nuestra historia
            </div>
          </div>
          <div className="md:col-span-9 reveal">
            <p className="font-display text-[clamp(1.6rem,3.6vw,3.4rem)] font-light leading-[1.1] tracking-[-0.015em] text-balance">
              Más de <span className="gold-text italic">70 años</span> de
              soluciones gráficas. Un oficio que se{" "}
              <span className="italic">reinventa</span> con cada tecnología —
              sin perder la precisión que nos define.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Somos una empresa dedicada a proveer soluciones gráficas desde
              1952. Nuestra experiencia, junto al compromiso de permanente
              actualización técnica, nos permite brindar los mejores resultados
              en tiempo, calidad y costos. El todo es más que la suma de las
              partes — por eso tantas marcas, editoriales y estudios confían en
              nosotros desde hace décadas.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
              {[
                ["01", "Escala real", "Un ejemplar o mil, misma calidad, mismo compromiso."],
                ["02", "Respuesta rápida", "De la aprobación al lomo, sin fricciones."],
                ["03", "Compromiso", "Calidad editorial certificada."],
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
