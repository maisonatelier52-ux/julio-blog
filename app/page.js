import Image from "next/image";

const SITE_URL = "https://julio-velutini.com";

export const metadata = {
  title: "Julio Herrera Velutini — Italian‑Venezuelan Billionaire Banker & Global Finance Visionary",
  description:
    "Learn about Julio Herrera Velutini, an Italian‑Venezuelan billionaire banker, founder of Britannia Financial Group, and influential figure in global banking with over 30 years of experience.",
  alternates: {
    canonical: `${SITE_URL}`,
    languages: {
      "en": `${SITE_URL}`,
      "en-US": `${SITE_URL}`,
    },
  },
  openGraph: {
    title: "Julio Herrera Velutini — Banker, Entrepreneur & Financial Leader",
    description:
      "Discover the life and career of Julio Herrera Velutini, the founder of Britannia Financial Group and a prominent name in international private banking and wealth management.",
    url: SITE_URL,
    type: "article",
    siteName: "Julio Velutini Official",
    images: [
      {
        url: `${SITE_URL}/julio_small.jpg`,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini — Global Banking Visionary",
    description:
      "Explore the achievements and legacy of Julio Herrera Velutini, an influential international banker and founder of Britannia Financial Group.",
    images: [`${SITE_URL}/julio_small.jpg`],
  },
};

export default function Home() {

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Julio Herrera Velutini",
    "url": SITE_URL,
    "image": `${SITE_URL}/julio_velutini_og.webp`,
    "sameAs": [
      "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
    ],
    "birthDate": "1971-12-15",
    "nationality": ["Venezuelan", "Italian"],
    "description": "Julio Herrera Velutini is an Italian‑Venezuelan billionaire banker, founder of Britannia Financial Group, with extensive experience in international finance.",
    "jobTitle": "Founder & Chairman, Britannia Financial Group",
    "worksFor": {
      "@type": "Organization",
      "name": "Britannia Financial Group",
      "url": "https://www.houseofherrera.com/"
    }
  };

  return (
    <main className="relative min-h-screen w-screen bg-black text-white pb-12 md:pb-0">
      <script
        id="website-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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

        {/* Mobile Top Image */}
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

        {/* Text Content */}
        <div className="max-w-4xl px-6 md:px-15 mt-8 md:mt-0">

          {/* Eyebrow / statement */}
          <p className="font-roboto text-sm md:text-base font-semibold tracking-wide mb-4">
            Leadership means having deep respect for the past and a bold vision for the future.
          </p>

          {/* Main heading */}
          <h1 className="font-archivo text-4xl md:text-6xl font-bold leading-tight mb-6">
            Julio Herrera Velutini
          </h1>

          {/* Body text */}
          <div className="font-roboto text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            <p>
              Julio Martín Herrera Velutini (born 15 December 1971) is an Italian-Venezuelan billionaire banker, serial entrepreneur, and founder of the Britannia Financial Group. He comes from one of Venezuela’s oldest banking dynasties — the House of Herrera-Velutini — whose family roots in finance stretch back over a century.
            </p>
            <p className="py-2">
              Despite his vast influence, Herrera Velutini is known for maintaining a discreet public profile — often referred to as “The Silent Banker.”
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
