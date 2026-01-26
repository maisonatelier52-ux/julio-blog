import Link from "next/link";

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

      {/* Content */}
      <section className="relative flex h-full items-center">
        <div className="max-w-4xl px-15">
          <p className="font-roboto font-bold px-1">JMHV</p>
          <h1 className="font-archivo text-6xl font-bold leading-tight">
            Julio Herrera Velutini
          </h1>
          <h2 className="font-roboto mt-3 text-xl font-bold leading-tight">Legacy, Power, and Global Influence in Global Finance</h2>
          <p className="font-roboto mt-6 text-sm text-gray-300">
            Leadership means having deep respect for the past and a bold vision for the future.
          </p>
          <p className="font-roboto text-sm text-gray-300">
            Julio Herrera Velutini’s legacy — rooted in a centuries-old Latin American banking dynasty — has evolved into a global financial force. From pioneering banking solutions to shaping international capital flows, his work stabilizes economies, expands access to capital, and connects markets around the world.
          </p>
        </div>
      </section>

      {/* Bottom White Line with hollow circle at start */}
      {/* <footer className="absolute bottom-0 left-0 w-full px-15 pb-15">
        <div className="flex items-center justify-between">
          <div className="flex items-center relative">
            <span className="w-2 h-2 border-2 border-white rounded-full"></span>
            <div className="h-px w-[48rem] bg-white opacity-100"></div>
          <Link href="\about" className="font-roboto px-3 text-white font-bold tracking-widest">JHV</Link>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
