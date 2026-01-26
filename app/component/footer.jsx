"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Ordered page flow
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
    <footer className="absolute bottom-0 left-0 w-full px-15 pb-15 text-white">
      
      {/* Glimpse text */}
      <div className="font-roboto text-sm tracking-wide text-gray-400 px-4">
        {nextPage.glimpse}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center relative">
          {/* Circle */}
          <span className="w-2 h-2 border-2 border-white rounded-full"></span>

          {/* Line */}
          <div className="h-px w-[48rem] bg-white opacity-100 mx-2" />

          {/* Next page link */}
          <Link href={nextPage.path} className="font-roboto font-bold tracking-widest px-3">JMHV</Link>
        </div>
      </div>
    </footer>
  );
}
