import Image from "next/image";

const SITE_URL = "https://www.julio-velutini.com";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Julio Herrera Velutini Global Reach | International Finance Influence",
  description:
    "Discover the global reach of Julio Herrera Velutini, an international banker connecting Europe, Latin America, and key financial hubs worldwide",
  alternates: {
    canonical: `${SITE_URL}/julio-herrera-velutini-global-reach`,
  },
  openGraph: {
    title: "Julio Herrera Velutini — Global Reach & International Finance",
    description:
      "Julio Herrera Velutini’s global reach connects Europe, Latin America, the Caribbean, and major financial centers through cross-border banking and investment.",
    url: `${SITE_URL}/julio-herrera-velutini-global-reach`,
    type: "article",
    siteName: "Julio Velutini Official",
    images: [
      {
        url: `${SITE_URL}/julio_small.webp`,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Global Reach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini — Global Reach",
    description:
      "International banking presence and global financial reach of Julio Herrera Velutini.",
    images: [`${SITE_URL}/julio_small.webp`],
  },
};

/* =========================
   PAGE
========================= */
export default function Home() {
  const globalReachJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Julio Herrera Velutini",
    "url": `${SITE_URL}/julio-herrera-velutini-global-reach`,
    "image": `${SITE_URL}/julio_small.webp`,
    "description":
      "Julio Herrera Velutini is an international banker with a global financial presence spanning Europe, Latin America, the Caribbean, and major international financial centers.",
    "jobTitle": "Founder & Chairman, Britannia Financial Group",
    "nationality": ["Italian"],
    "sameAs": [
      "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Britannia Financial Group",
      "url": "https://www.houseofherrera.com/"
    }
  };

  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-black text-white pb-12 md:pb-0">

      {/* JSON-LD: Global Reach */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalReachJsonLd) }}
      />

      {/* Desktop Background Image */}
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat bg-contain opacity-100"
        style={{
          backgroundImage: "url('/hero2.png')",
          backgroundPosition: "calc(100% - 70px) center",
        }}
      />

      {/* Content */}
      <section className="relative flex min-h-screen flex-col md:flex-row md:items-center">

        {/* Mobile Top Image */}
        <div className="md:hidden w-full pt-12 px-6">
          <Image
            src="/julio_small.webp"
            alt="Julio Herrera Velutini"
            width={200}
            height={200}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl px-6 md:px-15 mt-8 md:mt-0">

          <h2 className="font-roboto text-xl md:text-base font-semibold tracking-wide mb-4">
            GLOBAL REACH
          </h2>

          <h1 className="font-archivo text-4xl md:text-6xl font-bold leading-tight mb-6">
            Julio Herrera Velutini
          </h1>

          <p className="font-roboto text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            Julio Herrera Velutini has established a financial presence spanning Europe,
            the Caribbean, Latin America, and key global financial hubs. His cross-border
            approach to banking and investment connects regional capital with international
            financial systems while navigating diverse regulatory environments. This
            international reach positions him as a figure operating beyond national
            boundaries, with influence rooted in global finance rather than any single
            market.
          </p>

        </div>
      </section>
    </main>
  );
}
