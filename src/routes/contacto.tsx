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
    links: [
      { rel: "canonical", href: "https://imprenta-dorrego-digital.lovable.app/contacto" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://imprenta-dorrego-digital.lovable.app/#business",
          name: "Imprenta Dorrego",
          description:
            "Imprenta editorial y digital en Buenos Aires. Impresión bajo demanda, Web Approval, encuadernación PUR y tecnología Xerox Iridesse.",
          url: "https://imprenta-dorrego-digital.lovable.app",
          telephone: "+54 11 4700 0000",
          email: "hola@imprentadorrego.com.ar",
          image:
            "https://imprenta-dorrego-digital.lovable.app/__l5e/assets-v1/b590ed25-af65-4072-abcf-5ad13d7122e1/dorrego-logo.png",
          logo: "https://imprenta-dorrego-digital.lovable.app/__l5e/assets-v1/b590ed25-af65-4072-abcf-5ad13d7122e1/dorrego-logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Dorrego 1102",
            addressLocality: "CABA",
            addressRegion: "Ciudad Autónoma de Buenos Aires",
            postalCode: "C1414CKT",
            addressCountry: "AR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -34.571,
            longitude: -58.4385,
          },
          hasMap:
            "https://www.google.com/maps/search/?api=1&query=Imprenta+Dorrego+Av.+Dorrego+1102+CABA",
          openingHours: "Mo-Fr 09:00-18:00",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          priceRange: "$$",
          areaServed: "Buenos Aires, Argentina",
          sameAs: [
            "https://instagram.com/imprentadorrego",
            "https://linkedin.com/company/imprenta-dorrego",
          ],
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
