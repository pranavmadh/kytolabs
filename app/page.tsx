import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: SITE_DESCRIPTION,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT.city,
        addressCountry: CONTACT.country,
      },
      areaServed: "Worldwide",
      sameAs: SOCIAL_LINKS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#website-development`,
      name: "Global Website Development Services",
      serviceType: "Website Development, Web Design, and SEO",
      description:
        "Custom, responsive, conversion-focused website development for ambitious businesses worldwide.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030208] text-white flex flex-col selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none" />

      <Navbar />

      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <WhyUs />
        <HowWeWork />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
