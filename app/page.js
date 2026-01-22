export default function Home() {
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

      {/* Header */}
      <header className="absolute top-0 left-0 z-20 w-full">
        <div className="flex items-center py-6 px-15">
          {/* Portfolio Box */}
          <a
            href="#"
            className="bg-white px-6 py-2 text-sm font-semibold tracking-widest text-black hover:bg-gray-300"
          >
            PORTFOLIO
          </a>

          {/* Navigation */}
          <nav className="ml-10 flex flex-1 items-center justify-between text-sm tracking-widest">
            <div className="flex gap-10">
              <a href="#" className="hover:text-gray-400">ABOUT ME</a>
              <a href="#" className="hover:text-gray-400">EDUCATION</a>
              <a href="#" className="hover:text-gray-400">EXPERIENCE</a>
              <a href="#" className="hover:text-gray-400">PROJECT</a>
              <a href="#" className="hover:text-gray-400">CONTACT</a>
            </div>

            {/* White Line on Right of nav with hollow circle */}
            <div className="ml-10 flex items-center flex-1">
              <div className="h-px flex-1 bg-white opacity-80 relative">
                <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 border-2 border-white rounded-full"></span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="relative z-10 flex h-full items-center">
        <div className="max-w-4xl px-15">
          <p className="font-roboto font-bold px-1">JHV</p>
          <h2 className="font-archivo text-5xl font-bold leading-tight">
            Julio Herrera Velutini
          </h2>
          <p className="font-roboto mt-6 text-lg text-gray-300">
            Leadership means having a deep respect for the past and a strong desire to try new things. Herrera Velutini's legacy, which has roots in Latin America, has grown into a global phenomenon that quietly connects the world's nations, stabilizes shaky economies, and makes it easier for people to get access to money.
          </p>
        </div>
      </section>

      {/* Bottom White Line with hollow circle at start */}
      <footer className="absolute bottom-0 left-0 w-full px-15 pb-15">
        <div className="flex items-center justify-between">
          {/* Line with circle at start */}
          <div className="flex items-center flex-1 relative">
            <span className="w-2 h-2 border-2 border-white rounded-full"></span>
            <div className="h-px flex-1 bg-white opacity-100"></div>
          </div>

          {/* JHV on right */}
          <span className="font-roboto ml-4 text-white font-bold tracking-widest">JHV</span>
        </div>
      </footer>
    </main>
  );
}
