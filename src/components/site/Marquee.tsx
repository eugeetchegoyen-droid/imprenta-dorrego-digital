const words = [
  "Xerox Iridesse",
  "Web Approval",
  "Encuadernación PUR",
  "Impresión bajo demanda",
  "Lomo cuadrado",
  "Tinta metálica",
  "Blanco opaco",
  "Laca brillante",
];

export function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border bg-paper py-8">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-3xl md:text-5xl">{w}</span>
            <span className="text-gold">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
