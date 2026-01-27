import Image from "next/image";

const SITE_URL = "https://www.julio-velutini.com";

export const metadata = {
  title: "Julio Herrera Velutini Legacy | Banking Dynasty & Global Finance",
  description:
    "Explore the legacy of Julio Herrera Velutini and the historic House of Herrera, a banking dynasty shaping Latin American and global finance for generations.",
  alternates: {
    canonical: `${SITE_URL}/legacy`,
  },
  openGraph: {
    title: "Julio Herrera Velutini Legacy — Banking Dynasty & Global Finance",
    description:
      "The legacy of Julio Herrera Velutini and the House of Herrera, spanning centuries of financial leadership and global banking influence.",
    url: `${SITE_URL}/legacy`,
    type: "article",
    siteName: "Julio Velutini Official",
    images: [
      {
        url: `${SITE_URL}/julio_velutini_og.webp`,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Legacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini Legacy",
    description:
      "A historic banking legacy spanning generations, led today by Julio Herrera Velutini.",
    images: [`${SITE_URL}/julio_velutini_og.webp`],
  },
};

/* =========================
   PAGE
========================= */
export default function Home() {
  const legacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Julio Herrera Velutini",
    "url": `${SITE_URL}/legacy`,
    "image": `${SITE_URL}/julio_velutini_og.webp`,
    "description":
      "Julio Herrera Velutini is a global banker and seventh-generation steward of the historic House of Herrera, a financial dynasty with deep roots in Latin America.",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
    ],
    "jobTitle": "Founder & Chairman, Britannia Financial Group",
    "nationality": ["Italian", "Venezuelan"],
    "worksFor": {
      "@type": "Organization",
      "name": "Britannia Financial Group",
      "url": "https://www.houseofherrera.com/"
    }
  };

  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-black text-white pb-12 md:pb-0">

      {/* JSON-LD: Legacy / Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legacyJsonLd) }}
      />

      {/* Desktop Background Image */}
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat bg-contain opacity-100"
        style={{
          backgroundImage: "url('/hero2.png')",
          backgroundPosition: "center right",
        }}
      />

      {/* Content */}
      <section className="relative flex min-h-screen flex-col md:flex-row md:items-center">

        {/* Mobile Image */}
        <div className="md:hidden w-full pt-12 px-6">
          <Image
            src="/julio_small.jpg"
            alt="Julio Herrera Velutini"
            width={200}
            height={200}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="max-w-4xl px-6 md:px-15 mt-8 md:mt-0">

          <h2 className="font-roboto text-xl md:text-base font-semibold tracking-wide mb-4">
            LEGACY
          </h2>

          <h1 className="font-archivo text-4xl md:text-6xl font-bold leading-tight mb-6">
            Julio Herrera Velutini
          </h1>

          <p className="font-roboto text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            Julio Herrera Velutini carries forward the legacy of one of Latin America’s most influential banking dynasties—the historic House of Herrera. With roots tracing back to medieval Castile and deep ties to Venezuela’s early financial institutions, the family played a defining role in shaping regional banking and capital systems. As a seventh-generation steward, Herrera Velutini has modernized this heritage, expanding it into a global financial presence while preserving its core principles of governance, resilience, and long-term vision.
          </p>

        </div>
      </section>
    </main>
  );
}
