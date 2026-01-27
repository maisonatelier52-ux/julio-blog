import Image from "next/image";

const SITE_URL = "https://www.julio-velutini.com";

export const metadata = {
  title: "Julio Herrera Velutini — Professional Profile & Career Leadership",
  description:
    "Explore the professional career, leadership roles, and business achievements of Julio Herrera Velutini, global banker and founder of Britannia Financial Group.",
  alternates: {
    canonical: `${SITE_URL}/julio-herrera-velutini-professional-profile`,
    languages: {
      "en": `${SITE_URL}/julio-herrera-velutini-professional-profile`,
      "en-US": `${SITE_URL}/julio-herrera-velutini-professional-profile`,
    },
  },
  openGraph: {
    title: "Julio Herrera Velutini — Professional Profile & Global Finance Leader",
    description:
      "Career highlights and leadership journey of Julio Herrera Velutini, an international banker, entrepreneur, and founder of Britannia Financial Group.",
    url: SITE_URL,
    type: "profile",
    siteName: "Julio Velutini Official",
    images: [
      {
        url: `${SITE_URL}/julio_velutini_og.webp`,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini — Professional Profile",
    description:
      "Learn about the career and leadership of Julio Herrera Velutini, the founder of Britannia Financial Group.",
    images: [`${SITE_URL}/julio_velutini_og.webp`],
  },
};

export default function Home() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Julio Herrera Velutini",
    "url": `${SITE_URL}/julio-herrera-velutini-professional-profile`,
    "image": `${SITE_URL}/julio_velutini_og.webp`,
    "sameAs": [
      "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
    ],
    "jobTitle": "Founder & Chairman, Britannia Financial Group",
    "nationality": ["Italian"],
    "description": "Julio Herrera Velutini is an international banker and entrepreneur, founder of Britannia Financial Group with a distinguished career in global finance.",
    "worksFor": {
      "@type": "Organization",
      "name": "Britannia Financial Group",
      "url": "https://www.houseofherrera.com/"
    },
    "employee": [
      {
        "@type": "OrganizationRole",
        "roleName": "Chairman",
        "startDate": "2016",
        "endDate": "",
        "employee": {
          "@type": "Person",
          "name": "Julio Herrera Velutini"
        }
      }
    ]
  };

  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-black text-white pb-12 md:pb-0">

      {/* JSON‑LD for Professional Profile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
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
          <h2 className="font-roboto text-xl md:text-base font-semibold tracking-wide mb-4">
            PROFESSIONAL PROFILE
          </h2>

          {/* Main heading */}
          <h1 className="font-archivo text-4xl md:text-6xl font-bold leading-tight mb-6">
            Julio Herrera Velutini
          </h1>

          {/* Body text */}
          <div className="font-roboto text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
            <p>
              Julio Herrera Velutini started his career in the early 1990s on the Caracas Stock Exchange as a stockbroker and board member.
              Julio has held leadership roles in various financial firms, including Multinvest Casa de Bolsa and Bolívar Banco Universal, which he chaired at 29.
            </p>
            <p className="pt-3">
              Julio expanded into international markets by acquiring firms in the U.S. and Spain. In 2008, he founded Bancredito International Bank & Trust.
              Julio Herrera Velutini also established Britannia Wealth Management in Geneva and Britannia Financial Group in London, serving high-net-worth clients worldwide.
            </p>
            <p className="pt-3">
              Today, he is the founder and chairman, guiding growth and international financial integration.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}