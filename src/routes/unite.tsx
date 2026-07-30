import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { UniteEquipo } from "@/components/site/UniteEquipo";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/unite")({
  head: () => ({
    meta: [
      { title: "Unite al equipo — Imprenta Dorrego" },
      { name: "description", content: "Postulate para sumarte al equipo de Imprenta Dorrego. Producción, diseño editorial, comercial y pasantías." },
      { property: "og:title", content: "Unite al equipo — Imprenta Dorrego" },
      { property: "og:description", content: "Postulate para sumarte al equipo de Imprenta Dorrego." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://imprenta-dorrego-digital.lovable.app/unite" },
    ],
  component: UnitePage,
});

function UnitePage() {
  useReveal();
  return (
    <main className="bg-paper">
      <Nav />
      <div className="pt-20">
        <UniteEquipo />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
