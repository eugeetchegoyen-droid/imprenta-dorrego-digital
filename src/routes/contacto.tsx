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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Imprenta Dorrego",
          description:
            "Imprenta editorial y digital en Buenos Aires. Impresión bajo demanda, Web Approval, encuadernación PUR y tecnología Xerox Iridesse.",
          url: "https://imprenta-dorrego-digital.lovable.app",
          telephone: "+54 11 4700 0000",
          email: "hola@imprentadorrego.com.ar",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Dorrego 1102",
            addressLocality: "CABA",
            postalCode: "C1414CKT",
            addressCountry: "AR",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "$$",
          areaServed: "Buenos Aires, Argentina",
        }),
      },
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
