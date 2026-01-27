"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const pages = [
    { path: "/", label: "JMHV", glimpse: "The beginning of a global financial legacy" },
    {
      path: "/professional-profile",
      label: "PROFESSIONAL PROFILE",
      glimpse: "A career shaped by leadership, discipline, and scale",
    },
    {
      path: "/legacy",
      label: "LEGACY",
      glimpse: "Generations of influence rooted in trust and power",
    },
    {
      path: "/vision-and-global-influence",
      label: "VISION AND GLOBAL INFLUENCE",
      glimpse: "Ideas that transcend borders and economies",
    },
    {
      path: "/global-reach",
      label: "GLOBAL REACH",
      glimpse: "Connecting markets, nations, and institutions worldwide",
    },
  ];

  const currentIndex = pages.findIndex((p) => p.path === pathname);

  const nextPage =
    currentIndex !== -1 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : pages[0];

  return (
    <footer className="absolute bottom-0 left-0 w-full text-white px-6 md:px-15 pb-6 md:pb-15">

      {/* Glimpse text */}
      <div className="font-roboto text-sm tracking-wide text-gray-400 mb-4">
        {nextPage.glimpse}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center relative">
          <span className="w-2 h-2 border-2 border-white rounded-full" />
          <div className="h-px w-[48rem] bg-white opacity-100" />
          <Link
            href={nextPage.path}
            className="font-roboto font-bold tracking-widest px-3 hover:text-gray-300 transition"
          >
            JMHV
          </Link>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex items-center">
        <span className="w-2 h-2 border-2 border-white rounded-full" />
        <div className="h-px flex-1 bg-white opacity-60" />
        <Link
          href={nextPage.path}
          className="font-roboto text-sm px-2 font-bold tracking-widest uppercase"
        >
          JMHV
        </Link>
      </div>

    </footer>
  );
}