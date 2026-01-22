export default function About() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain opacity-100"
        style={{
          backgroundImage: "url('/hero2.png')",
          backgroundPosition: "calc(100% - 70px) center",
        }}
      />

      {/* Content */}
      <section className="relative z-10 flex h-full flex-col justify-between px-15 pt-40 pb-24">
        {/* Top Large Heading */}
        <h1 className="font-archivo text-5xl leading-none tracking-tight uppercase transform scale-y-155">
            Julio Herrera Velutini
        </h1>

        {/* Bottom Left Content */}
        <div className="max-w-xl">
          <h2 className="font-archivo text-xl tracking-widest mb-4">
            ABOUT ME
          </h2>

          <p className="font-roboto text-gray-300 leading-relaxed">
            Leadership means having a deep respect for the past and a strong desire
            to try new things. Herrera Velutini's legacy, rooted in Latin America,
            has evolved into a global financial presence that quietly connects
            nations, stabilizes economies, and expands access to capital.
          </p>
        </div>
      </section>

      {/* Bottom White Line with hollow circle at start */}
      <footer className="absolute bottom-0 left-0 w-full px-15 pb-15">
        <div className="flex items-center justify-between">
          {/* Line with circle at start */}
          <div className="flex items-center relative">
            <span className="w-2 h-2 border-2 border-white rounded-full"></span>
            <div className="h-px w-[48rem] bg-white opacity-100"></div>
            <span className="font-roboto text-white font-bold tracking-widest px-3">JHV</span>
          </div>

          {/* JHV on right */}
        </div>
      </footer>
    </main>
  );
}
