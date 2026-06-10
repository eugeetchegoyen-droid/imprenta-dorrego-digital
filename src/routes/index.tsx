import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Marquee } from "@/components/site/Marquee";
import { Laboratorio } from "@/components/site/Laboratorio";
import { PodCalculator } from "@/components/site/PodCalculator";
import { Portfolio } from "@/components/site/Portfolio";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imprenta Dorrego — Impresión editorial bajo demanda en Buenos Aires" },
      { name: "description", content: "Impresión digital de alta calidad: Xerox Iridesse, Web Approval y encuadernación PUR. Libros, catálogos y revistas bajo demanda, desde un ejemplar." },
      { property: "og:title", content: "Imprenta Dorrego — Editorial · Digital · POD" },
      { property: "og:description", content: "Precisión editorial, flexibilidad digital. Impresión bajo demanda con calidad de autor." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-paper">
      <Nav />
      <Hero />
      <Manifesto />
      <Marquee />
      <Laboratorio />
      <PodCalculator />
      <Portfolio />
      <QuoteWizard />
      <Footer />
    </main>
  );
}
