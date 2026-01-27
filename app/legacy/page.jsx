import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-black text-white pb-12 md:pb-0">

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
          <p className="font-roboto text-xl md:text-base font-semibold tracking-wide mb-4">
            LEGACY
          </p>

          {/* Main heading */}
          <h1 className="font-archivo text-4xl md:text-6xl font-bold leading-tight mb-6">
            Julio Herrera Velutini
          </h1>

          {/* Body text */}
          <p className="font-roboto text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            Julio Herrera Velutini’s legacy — rooted in a centuries-old Latin American
            banking dynasty — has evolved into a global financial force. From pioneering
            banking solutions to shaping international capital flows, his work stabilizes
            economies, expands access to capital, and connects markets around the world.
          </p>

        </div>
      </section>

    </main>
  );
}
