import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contacto } from "@/components/site/Contacto";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Imprenta Dorrego" },
      { name: "description", content: "Envianos tu consulta. Mail, teléfono, WhatsApp y dirección de Imprenta Dorrego. Respondemos en 24 horas hábiles." },
      { property: "og:title", content: "Contacto — Imprenta Dorrego" },
      { property: "og:description", content: "Envianos tu consulta. Respondemos en 24 horas hábiles." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  useReveal();
  return (
    <main className="bg-paper">
      <Nav />
      <div className="pt-20">
        <Contacto />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
