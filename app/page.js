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
          <p className="font-roboto font-bold px-1">JHV</p>
          <h1 className="font-archivo text-6xl font-bold leading-tight">
            Julio Herrera Velutini
          </h1>
          <p className="font-roboto mt-6 text-lg text-gray-300">
            Leadership means having a deep respect for the past and a strong desire to try new things. Herrera Velutini's legacy, which has roots in Latin America, has grown into a global phenomenon that quietly connects the world's nations, stabilizes shaky economies, and makes it easier for people to get access to money.
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
