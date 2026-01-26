import Link from "next/link";

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
      <section className="relative flex h-full flex-col justify-between px-15 pt-40 pb-24">
        {/* Top Large Heading */}
        <h1 className="font-archivo text-5xl leading-none tracking-tight uppercase transform scale-y-155">
            Julio Herrera Velutini
        </h1>

        {/* Bottom Left Content */}
        <div className="max-w-xl mb-4">
          <h2 className="font-archivo text-3xl tracking-widest mb-4">
            ABOUT ME
          </h2>

          <p className="font-roboto text-xl text-gray-300 leading-relaxed mb-4">
            Leadership means having a deep respect for the past and a strong desire
            to try new things. Herrera Velutini's legacy, rooted in Latin America,
            has evolved into a global financial presence that quietly connects
            nations, stabilizes economies, and expands access to capital.
          </p>
        </div>
      </section>

      {/* Bottom White Line with hollow circle at start */}
      {/* <footer className="absolute bottom-0 left-0 w-full px-15 pb-15">
        <div className="flex items-center justify-between">
          <div className="flex items-center relative">
            <span className="w-2 h-2 border-2 border-white rounded-full"></span>
            <div className="h-px w-[48rem] bg-white opacity-100"></div>
            <Link href="#" className="font-roboto text-white font-bold tracking-widest px-3">JHV</Link>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
