import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen bg-black text-white pb-12 md:pb-0">
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
