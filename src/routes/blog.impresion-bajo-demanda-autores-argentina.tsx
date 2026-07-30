import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { GuiaPodAutores } from "@/components/site/GuiaPodAutores";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/blog/impresion-bajo-demanda-autores-argentina")({
  head: () => ({
    meta: [
      {
        title:
          "Impresión bajo demanda para autores independientes en Argentina — Imprenta Dorrego",
      },
      {
        name: "description",
        content:
          "Guía completa de impresión bajo demanda (POD) para autores independientes en Argentina. Imprimí libros en tiradas de 10 a 100 ejemplares con tecnología Xerox Iridesse, sin mínimos de impresión. Buenos Aires.",
      },
      {
        property: "og:title",
        content:
          "Impresión bajo demanda para autores independientes en Argentina — Imprenta Dorrego",
      },
      {
        property: "og:description",
        content:
          "Imprimí libros en tiradas chicas con tecnología Xerox Iridesse, sin mínimos de impresión. La guía POD para autores independientes en Buenos Aires.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://imprenta-dorrego-digital.lovable.app/blog/impresion-bajo-demanda-autores-argentina" },
    ],
    links: [{ rel: "canonical", href: "https://imprenta-dorrego-digital.lovable.app/blog/impresion-bajo-demanda-autores-argentina" }],
  }),
  component: BlogGuiaPod,
});

function BlogGuiaPod() {
  useReveal();
  return (
    <main className="bg-paper">
      <Nav />
      <div className="pt-16">
        <GuiaPodAutores />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
