import { Link } from "@tanstack/react-router";

/**
 * Guía SEO: Impresión bajo demanda para autores independientes en Argentina.
 * Captura intención de búsqueda local sobre impresión editorial / POD.
 */
export function GuiaPodAutores() {
  return (
    <article className="bg-paper">
      {/* — Hero de la guía — */}
      <header className="relative overflow-hidden border-b border-border bg-onyx text-paper">
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[160px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-ink/40 blur-[140px]" />
        <div className="relative mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-36">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-paper/50">
            <span className="h-px w-10 bg-gold" />
            Guía · Autores independientes
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.2rem,5.2vw,4.6rem)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
            Impresión bajo demanda para autores independientes en{" "}
            <span className="text-gold-soft">Argentina</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            Cómo imprimir libros en tiradas chicas con calidad editorial y sin
            mínimos de impresión, usando la tecnología digital Xerox Iridesse en
            Buenos Aires.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper/50">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              12 min de lectura
            </span>
            <span>Actualizado · 2026</span>
          </div>
        </div>
      </header>

      {/* — Cuerpo del artículo — */}
      <div className="mx-auto max-w-[760px] px-6 py-20 md:px-10 md:py-28">
        {/* Intro */}
        <p className="font-display text-2xl font-light leading-snug text-ink md:text-3xl reveal">
          Publicar un libro dejó de requerir un depósito lleno de cajas. La
          impresión bajo demanda permite que imprimas exactamente la cantidad de
          ejemplares que necesitás con la misma calidad de una
          edición tradicional. Para el autor independiente argentino, esto cambia
          las reglas del juego.
        </p>

        {/* Índice */}
        <nav className="mt-12 border-y border-border/70 py-6 reveal">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            En esta guía
          </div>
          <ol className="mt-4 space-y-2.5 text-sm text-ink/80">
            <li><a href="#que-es" className="hover:text-gold">1. ¿Qué es la impresión bajo demanda?</a></li>
            <li><a href="#autores" className="hover:text-gold">2. Por qué conviene a los autores independientes</a></li>
            <li><a href="#iridesse" className="hover:text-gold">3. La tecnología Xerox Iridesse</a></li>
            <li><a href="#sin-minimos" className="hover:text-gold">4. Sin mínimos: la ventaja en Buenos Aires</a></li>
            <li><a href="#tiradas" className="hover:text-gold">5. Tiradas de 10 a 100 ejemplares</a></li>
            <li><a href="#encuadernacion" className="hover:text-gold">6. Encuadernación y acabados editoriales</a></li>
            <li><a href="#pasos" className="hover:text-gold">7. Paso a paso: del archivo al libro impreso</a></li>
            <li><a href="#costos" className="hover:text-gold">8. ¿Cuánto cuesta imprimir un libro POD?</a></li>
            <li><a href="#faq" className="hover:text-gold">9. Preguntas frecuentes</a></li>
          </ol>
        </nav>

        {/* 1 */}
        <section id="que-es" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            ¿Qué es la impresión bajo demanda?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            La impresión bajo demanda (<span lang="en">print on demand</span> o
            POD) es un modelo de producción editorial en el que los libros se
            imprimen únicamente cuando se solicitan. No hay tirada mínima ni
            stock inicial: se imprime la cantidad exacta que el autor, la
            editorial o el lector necesita, en el momento en que lo necesita.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            A diferencia de la impresión offset tradicional —que exige tiradas
            grandes para amortizar los costos de planchas y puesta en máquina—,
            la impresión digital POD parte de un archivo y produce ejemplares
            unitarios con un costo unitario estable, sin importar si son diez o
            mil.
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-xl font-light italic text-ink/85">
            Imprimimos la cantidad exacta que necesitás. Tirada chica o grande,
            misma calidad.
          </blockquote>
        </section>

        {/* 2 */}
        <section id="autores" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Por qué conviene a los autores independientes
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Para quien autopublica en Argentina, el POD resuelve los tres
            problemas que históricamente frenaban la edición independiente:
          </p>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span><strong className="font-semibold text-ink">Capital de trabajo.</strong> No tenés que financiar mil ejemplares por adelantado. Imprimís según vendés o según el evento que tengas —una feria, una presentación, un curso—.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span><strong className="font-semibold text-ink">Sin stock inmovilizado.</strong> Los libros que no se venden no ocupan lugar ni se deterioran en un depósito. Reimprimís en 48 a 72 horas cuando lo necesitás.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span><strong className="font-semibold text-ink">Actualización constante.</strong> Detectaste un errata o querés sumar un prólogo. En POD, la nueva tirada sale del archivo corregido sin costo adicional de planchas.</span>
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section id="iridesse" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            La tecnología Xerox Iridesse
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            El corazón del POD editorial en Imprenta Dorrego es la prensa
            digital <strong className="font-semibold text-ink">Xerox Iridesse</strong>.
            No es una impresora de oficina ampliada: es una prensa de producción
            que imprime a 1200 × 2400 dpi con seis canales de color, incluyendo
            toners especiales —dorado, plata, blanco y fluorescentes— que elevan
            la impresión digital a un nivel antes reservado al offset.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {[
              { t: "Calidad editorial", d: "Resolución y registro que igualan el offset en tiradas chicas, con puntas finas y degradados suaves." },
              { t: "Color estable", d: "Calibración por lote: el ejemplar 10 y el 100 tienen el mismo color, sin variación entre tiradas." },
              { t: "Acabados metálicos", d: "Dorado y plata digital aplicables a portadas, solapas y detalles sin costo de troquelado." },
              { t: "Soportes diversos", d: "Papel offset, ilustración, couché y texturizados de 60 a 350 g/m² en la misma máquina." },
            ].map((f) => (
              <div key={f.t} className="bg-bone p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{f.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4 */}
        <section id="sin-minimos" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Sin mínimos: la ventaja competitiva en Buenos Aires
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            En el mercado editorial de Buenos Aires, la mayoría de las imprentas
            sigue condicionada al modelo offset: para obtener un costo por
            ejemplar razonable, el autor debe comprometerse con una tirada de
            varios cientos de copias. La barrera de entrada, en muchos casos,
            empieza en los 250 o 500 ejemplares.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            La propuesta de Imprenta Dorrego es exactamente la opuesta:
            <strong className="font-semibold text-ink"> sin mínimos de impresión</strong>.
            Podés arrancar con la cantidad que tenga sentido para tu proyecto —un
            ejemplar de prueba, diez para una presentación, cincuenta para una
            feria del libro— y reimprimir cuando se agoten. El costo unitario es
            predecible y se mantiene estable a lo largo de las reimprontaciones.
          </p>
          <div className="mt-8 border border-gold/40 bg-bone p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">La diferencia Dorrego</div>
            <p className="mt-4 font-display text-xl font-light leading-snug text-ink">
              Tirada chica o grande, misma calidad. Imprimimos la cantidad exacta
              que necesitás, sin obligarte a stock que no vas a mover.
            </p>
          </div>
        </section>

        {/* 5 */}
        <section id="tiradas" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Tiradas de 10 a 100 ejemplares
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            El rango de 10 a 100 ejemplares es el más habitual para la autopublicación
            en Argentina. Abarca desde la primera edición de prueba hasta la
            distribución en librerías independientes y eventos. Algunos casos
            típicos:
          </p>
          <ul className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span><strong className="font-semibold text-ink">10–25 ejemplares.</strong> Edición de prueba para revisar el resultado final antes de la tirada mayor, ejemplares de regalo o paraconcursos y presentaciones.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span><strong className="font-semibold text-ink">30–50 ejemplares.</strong> Primera edición para autoventa, venta en ferias del libro y distribuciones a través de librerías amigas.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span><strong className="font-semibold text-ink">75–100 ejemplares.</strong> Tirada de lanzamiento con margen para reseñas, medios y stock inicial para vender online.</span>
            </li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Más allá de ese rango, el POD sigue siendo la opción más rentable
            hasta las 300–500 unidades; recién en tiradas muy grandes el offset
            vuelve a ser competitivo por la amortización de la puesta en máquina.
          </p>
        </section>

        {/* 6 */}
        <section id="encuadernacion" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Encuadernación y acabados editoriales
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Un libro POD no es una fotocopia engomada. Imprenta Dorrego ofrece
            encuadernaciones y acabados pensados para que tu edición se sienta
            como un libro de librería:
          </p>
          <dl className="mt-8 space-y-6">
            {[
              { t: "Encuadernación PUR", d: "El adhesivo de fundición en caliente (PUR) genera una unión más flexible y resistente que el cola tradicional. Las hojas se abren casi planas y el lomo no se quiebra con el uso." },
              { t: "Tapa rústica", d: "La opción más económica y versátil para POD. Cubierta en cartulina de 250–300 g/m² con plastificado mate o brillo." },
              { t: "Tapa dura (cartoné)", d: "Para ediciones de autor o coleccionables, con cubierta rígida y lomo redondeado, disponible también en tiradas chicas." },
              { t: "Acabados metálicos", d: "Dorado y plata digital sobre portadas y solapas, gracias a los toners especiales del Xerox Iridesse. Ideal para sellos editoriales y portadas de impacto." },
            ].map((i) => (
              <div key={i.t} className="border-l-2 border-gold/50 pl-5">
                <dt className="font-display text-lg font-medium text-ink">{i.t}</dt>
                <dd className="mt-1.5 text-base leading-relaxed text-ink/75">{i.d}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 7 */}
        <section id="pasos" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Paso a paso: del archivo al libro impreso
          </h2>
          <ol className="mt-8 space-y-7">
            {[
              { n: "01", t: "Preparás el archivo", d: "Nos enviás el PDF de interior y portada según nuestra guía de armado (sangres, márgenes, perfiles de color CMYK y fuentes embebidas). Si tenés dudas, te acompañamos en la corrección técnica." },
              { n: "02", t: "Validás online con Web Approval", d: "Antes de imprimir, revisás el imposicionado final en pantalla: orden de páginas, márgenes y registering. Aprobás o pedís ajustes sin moverte de tu casa." },
              { n: "03", t: "Imprimimos la tirada", d: "La prensa Xerox Iridesse produce tus ejemplares en turnos de 24 horas. Diez o cien, mismo proceso y mismo color calibrado." },
              { n: "04", t: "Encuadernamos y terminamos", d: "Corte, encuadernación PUR o tapa dura, plastificado y acabados metálicos según el proyecto. Control de calidad por ejemplar." },
              { n: "05", t: "Entregamos o reimprimimos", d: "Retirá en planta o coordinamos envío en CABA y GBA. Cuando se agoten, reimprimís la cantidad que quieras en 48–72 horas." },
            ].map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="font-display text-2xl font-light text-gold">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-ink/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 8 */}
        <section id="costos" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            ¿Cuánto cuesta imprimir un libro POD?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            El costo por ejemplar en impresión bajo demanda depende de tres
            variables principales: cantidad de páginas, tirada y tipo de
            encuadernación. A diferencia del offset, no hay un costo fijo de
            puesta en máquina, por eso el precio unitario se mantiene razonable
            desde tiradas muy chicas.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            Para una estimación precisa, el mejor camino es pedir una cotización
            con los datos reales de tu proyecto: formato, páginas, tipo de
            papel, encuadernación y cantidad. Te respondemos en 24 horas
            hábiles con un presupuesto cerrado.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              hash="cotizar"
              className="inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-all hover:bg-onyx hover:shadow-card"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Cotizar mi libro
            </Link>
          </div>
        </section>

        {/* 9 FAQ */}
        <section id="faq" className="mt-16 reveal">
          <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-3">
            {[
              {
                q: "¿Cuál es la tirada mínima?",
                a: "No hay mínimos. Imprimimos desde un ejemplar. La ventaja del POD es que podés arrancar con la cantidad que tenga sentido para tu proyecto.",
              },
              {
                q: "¿Puedo imprimir un solo ejemplar de prueba?",
                a: "Sí. Muchos autores imprimen una unidad para revisar el resultado final —papel, color y encuadernación— antes de confirmar la tirada.",
              },
              {
                q: "¿La calidad es la misma que el offset?",
                a: "Para tiradas chicas, la prensa Xerox Iridesse iguala o supera al offset en resolución y estabilidad de color. La diferencia se hace visible recién en tiradas muy grandes.",
              },
              {
                q: "¿Hacen encuadernación tapa dura en tiradas chicas?",
                a: "Sí, ofrecemos tapa dura (cartoné) también en cantidades pequeñas, ideal para ediciones de autor y libros de regalo.",
              },
              {
                q: "¿Puedo actualizar el archivo entre reimprontaciones?",
                a: "Por supuesto. En POD cada tirada sale del archivo actual, así que podés corregir erratas o sumar contenido sin costo de planchas.",
              },
              {
                q: "¿Hacen envíos fuera de Buenos Aires?",
                a: "Coordinamos envíos a todo el país además de retiro en planta en CABA.",
              },
            ].map((f, i) => (
              <details
                key={i}
                className="group border border-border bg-bone px-5 py-4 [&_summary]:list-none"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-medium text-ink">
                  {f.q}
                  <span className="text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-20 border border-border bg-bone p-8 text-center md:p-14 reveal">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold" />
            ¿Listo para imprimir tu libro?
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-2xl font-light leading-snug text-ink md:text-3xl">
            Cotizá tu tirada bajo demanda y te respondemos en 24 horas hábiles.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              hash="cotizar"
              className="inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-all hover:bg-onyx hover:shadow-card"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Cotiza tu proyecto
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 border border-ink/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink/80 transition-all hover:border-ink hover:text-ink"
            >
              Contáctanos →
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
