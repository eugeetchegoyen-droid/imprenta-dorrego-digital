import { useState } from "react";

const products = [
  { k: "libro", t: "Libro", d: "Novela, ensayo, arte." },
  { k: "catalogo", t: "Catálogo", d: "Corporativo, producto, muestra." },
  { k: "revista", t: "Revista", d: "Editorial, autor, fanzine." },
  { k: "otro", t: "Otro", d: "Packaging, papelería, especial." },
];

const ranges = ["1 – 10", "10 – 50", "50 – 200", "200 – 500", "500+"];

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [product, setProduct] = useState<string | null>(null);
  const [qty, setQty] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [done, setDone] = useState(false);

  const total = 4;
  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const emailValid = email.includes("@") && email.includes(".");
  const formValid = name.trim().length > 1 && emailValid && phone.trim().length > 4;

  return (
    <section id="cotizar" className="relative grain overflow-hidden bg-onyx py-16 text-paper md:py-44">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[160px]" />

      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="text-center reveal">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-paper/60">
            <span className="h-px w-10 bg-gold" />
            Solicitar cotización
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.6rem)] font-light leading-[1] tracking-[-0.02em]">
            Cotiza tu proyecto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            Tres pasos. Sin formularios eternos. Te respondemos en 24 horas hábiles.
          </p>
        </div>

        <div className="mt-16 border border-paper/15 bg-onyx/60 backdrop-blur">
          {/* Progress */}
          <div className="grid grid-cols-4 border-b border-paper/15">
            {["Producto", "Cantidad", "Archivos", "Listo"].map((label, i) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-5 py-4 text-[10px] uppercase tracking-[0.25em] ${
                  i <= step ? "text-paper" : "text-paper/30"
                } ${i < 3 ? "border-r border-paper/15" : ""}`}
              >
                <span className={`flex h-5 w-5 items-center justify-center border ${i <= step ? "border-gold text-gold" : "border-paper/30"}`}>
                  {i + 1}
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="min-h-[380px] p-8 md:p-12">
            {step === 0 && (
              <div>
                <h3 className="font-display text-3xl">¿Qué vas a imprimir?</h3>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {products.map((p) => (
                    <button
                      key={p.k}
                      onClick={() => { setProduct(p.k); next(); }}
                      className={`group border p-6 text-left transition-all ${product === p.k ? "border-gold bg-gold/5" : "border-paper/15 hover:border-paper/50"}`}
                    >
                      <div className="flex items-baseline justify-between">
                        <div className="font-display text-2xl">{p.t}</div>
                        <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
                      </div>
                      <div className="mt-2 text-sm text-paper/65">{p.d}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="font-display text-3xl">¿Cuántos necesitás?</h3>
                <p className="mt-2 text-paper/65">Sin mínimos. Imprimimos la cantidad exacta que necesitás.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {ranges.map((r) => (
                    <button
                      key={r}
                      onClick={() => { setQty(r); next(); }}
                      className={`border px-5 py-3 text-sm uppercase tracking-[0.18em] transition-all ${qty === r ? "border-gold bg-gold text-onyx" : "border-paper/20 hover:border-paper"}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-3xl">Dejanos tu contacto</h3>
                <p className="mt-2 text-paper/65">Completá tus datos y adjuntá los archivos del proyecto (opcional).</p>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="md:col-span-2 grid gap-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] text-paper/50">Nombre y Apellido</label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-paper/30 bg-transparent py-3 text-lg outline-none placeholder:text-paper/30 focus:border-gold"
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] text-paper/50">Email</label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-paper/30 bg-transparent py-3 text-lg outline-none placeholder:text-paper/30 focus:border-gold"
                    />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] text-paper/50">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="+54 11 0000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border-b border-paper/30 bg-transparent py-3 text-lg outline-none placeholder:text-paper/30 focus:border-gold"
                    />
                  </div>

                  <div className="md:col-span-2 mt-2 grid gap-1">
                    <label className="text-[10px] uppercase tracking-[0.25em] text-paper/50">Comentarios</label>
                    <textarea
                      placeholder="Contanos detalles del proyecto, formato, tipo de papel, plazos, acabados…"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      rows={4}
                      className="w-full border-b border-paper/30 bg-transparent py-3 text-lg outline-none placeholder:text-paper/30 focus:border-gold"
                    />
                  </div>

                  <div className="md:col-span-2 mt-2">
                    <label className="text-[10px] uppercase tracking-[0.25em] text-paper/50">Archivos del proyecto</label>
                    <label className="mt-2 flex cursor-pointer items-center justify-center gap-3 border border-dashed border-paper/30 px-6 py-8 text-center transition-colors hover:border-gold">
                      <span className="text-gold">⬆</span>
                      <span className="text-sm text-paper/70">
                        {files.length > 0
                          ? `${files.length} archivo${files.length > 1 ? "s" : ""} seleccionado${files.length > 1 ? "s" : ""}`
                          : "Examinar y subir archivos (PDF, JPG, PNG…)"}
                      </span>
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          const picked = e.target.files ? Array.from(e.target.files) : [];
                          setFiles((prev) => [...prev, ...picked]);
                          e.target.value = "";
                        }}
                      />
                    </label>
                    {files.length > 0 && (
                      <ul className="mt-3 grid gap-2">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center justify-between border border-paper/15 bg-paper/5 px-4 py-2 text-sm">
                            <span className="truncate text-paper/80">{f.name}</span>
                            <button
                              onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                              className="ml-3 text-paper/40 transition-colors hover:text-gold"
                              aria-label="Quitar archivo"
                            >
                              ✕
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="md:col-span-2 mt-2">
                    <button
                      disabled={!formValid}
                      onClick={() => { setDone(true); next(); }}
                      className="self-start bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-onyx transition-all disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:bg-gold-soft enabled:hover:shadow-gold"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
                  <span className="font-display text-2xl">✓</span>
                </div>
                <h3 className="mt-6 font-display text-4xl">¡Listo!</h3>
                <p className="mt-3 max-w-md text-paper/70">
                  Recibimos tu pedido para <strong className="text-paper">{products.find((p) => p.k === product)?.t}</strong> · <strong className="text-paper">{qty}</strong> ejemplares.
                  Te respondemos a <strong className="text-paper">{email}</strong> en menos de 24 hs hábiles.
                </p>
              </div>
            )}
          </div>

          {step > 0 && step < 3 && !done && (
            <div className="flex justify-between border-t border-paper/15 px-8 py-4 text-xs uppercase tracking-[0.2em]">
              <button onClick={back} className="text-paper/60 hover:text-paper">← Atrás</button>
              <span className="text-paper/40">{step + 1} de {total}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
