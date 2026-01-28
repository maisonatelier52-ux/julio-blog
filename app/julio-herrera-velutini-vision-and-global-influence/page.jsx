import Image from "next/image";

const SITE_URL = "https://www.julio-velutini.com";

/* =========================
   METADATA
========================= */
export const metadata = {
  title: "Julio Herrera Velutini Vision & Global Financial Influence",
  description:
    "Explore the global vision and international financial influence of Julio Herrera Velutini, an experienced banker shaping cross-border finance and investment.",
  alternates: {
    canonical: `${SITE_URL}/julio-herrera-velutini-vision-and-global-influence`,
  },
  openGraph: {
    title: "Julio Herrera Velutini — Vision & Global Influence",
    description:
      "Julio Herrera Velutini’s global vision spans Europe, Latin America, and international financial centers, shaping cross-border banking and finance.",
    url: `${SITE_URL}/julio-herrera-velutini-vision-and-global-influence`,
    type: "article",
    siteName: "Julio Velutini Official",
    images: [
      {
        url: `${SITE_URL}/julio_small.webp`,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Global Influence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini — Global Vision",
    description:
      "Global financial vision and international influence of Julio Herrera Velutini.",
    images: [`${SITE_URL}/julio_small.webp`],
  },
};

/* =========================
   PAGE
========================= */
export default function Home() {
  const visionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Julio Herrera Velutini",
    "url": `${SITE_URL}/julio-herrera-velutini-vision-and-global-influence`,
    "image": `${SITE_URL}/julio_small.webp`,
    "description":
      "Julio Herrera Velutini is an international banker known for his long-term financial vision and global influence across Europe, Latin America, and major financial centers.",
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

      {/* JSON-LD: Vision & Global Influence */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(visionJsonLd) }}
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
            VISION AND GLOBAL INFLUENCE
          </h2>

          <h1 className="font-archivo text-4xl md:text-6xl font-bold leading-tight mb-6">
            Julio Herrera Velutini
          </h1>

          <p className="font-roboto text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            Julio Herrera Velutini is recognized for a long-term financial vision shaped by
            global banking experience and multigenerational expertise. His influence
            extends across Europe, Latin America, and international financial centers,
            focusing on cross-border investment, private banking, and institutional
            finance. Known for discretion rather than publicity, his global presence is
            defined by strategic financial structures, regulatory awareness, and a commitment
            to long-term stability in an increasingly complex international economic landscape.
          </p>
        </div>
      </section>
    </main>
  );
}