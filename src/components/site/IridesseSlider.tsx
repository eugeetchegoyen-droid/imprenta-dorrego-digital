import { useRef, useState } from "react";
import baseImg from "@/assets/iridesse-illust-base.jpg";
import finishImg from "@/assets/iridesse-illust-pink.jpg";

export function IridesseSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div className="reveal">
      <div
        ref={ref}
        className="relative aspect-[4/5] w-full select-none overflow-hidden border border-paper/10 shadow-elegant"
        onMouseDown={(e) => { dragging.current = true; onMove(e.clientX); }}
        onMouseMove={(e) => dragging.current && onMove(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => { dragging.current = true; onMove(e.touches[0].clientX); }}
        onTouchMove={(e) => dragging.current && onMove(e.touches[0].clientX)}
        onTouchEnd={() => (dragging.current = false)}
      >
        {/* Base */}
        <img src={baseImg} alt="Impresión convencional" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        {/* Finish */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <img src={finishImg} alt="Acabado Iridesse oro" className="h-full w-full object-cover" loading="lazy" />
        </div>

        {/* Labels */}
        <div className="absolute left-4 top-4 bg-paper/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-paper backdrop-blur">
          Convencional
        </div>
        <div className="absolute right-4 top-4 bg-gold/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-onyx backdrop-blur">
          Xerox Iridesse
        </div>

        {/* Handle */}
        <div
          className="absolute inset-y-0 w-px bg-gold shadow-[0_0_30px_oklch(0.78_0.13_75/0.8)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-onyx text-gold shadow-gold cursor-ew-resize">
            <span className="font-display text-lg">⇆</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-gold"
          aria-label="Slider de acabados Iridesse"
        />
      </div>
    </div>
  );
}
