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
  const [files, setFiles] = useState<File[]>([]);
  const [done, setDone] = useState(false);

  const total = 4;
  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const emailValid = email.includes("@") && email.includes(".");
  const formValid = name.trim().length > 1 && emailValid && phone.trim().length > 4;

  return (
    <section id="cotizar" className="relative grain overflow-hidden bg-onyx py-32 text-paper md:py-44">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[160px]" />

      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="text-center reveal">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-paper/60">
            <span className="h-px w-10 bg-gold" />
            Solicitar cotización
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.6rem)] font-light leading-[1] tracking-[-0.02em]">
            Contanos tu proyecto
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
                <p className="mt-2 text-paper/65">Sin mínimos. Desde un solo ejemplar.</p>
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
                <p className="mt-2 text-paper/65">Te enviamos un enlace al Web Approval para subir los archivos.</p>
                <div className="mt-8 grid gap-4">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-paper/30 bg-transparent py-4 font-display text-2xl outline-none placeholder:text-paper/30 focus:border-gold"
                  />
                  <textarea
                    rows={3}
                    placeholder="Contanos brevemente del proyecto (opcional)"
                    className="w-full border border-paper/15 bg-transparent p-4 text-sm outline-none placeholder:text-paper/30 focus:border-gold"
                  />
                  <button
                    disabled={!email.includes("@")}
                    onClick={() => { setDone(true); next(); }}
                    className="mt-2 self-start bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-onyx transition-all disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:bg-gold-soft enabled:hover:shadow-gold"
                  >
                    Enviar cotización
                  </button>
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
