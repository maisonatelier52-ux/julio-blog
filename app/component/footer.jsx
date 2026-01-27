"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const pages = [
    { path: "/", glimpse: "The beginning of a global financial legacy" },
    {
      path: "/professional-profile",
      glimpse: "Julio Herrera Velutini — Global Banker & Financial Visionary",
    },
    {
      path: "/legacy",
      glimpse: "Generations of influence rooted in trust and power",
    },
    {
      path: "/vision-and-global-influence",
      glimpse: "Ideas that transcend borders and economies",
    },
    {
      path: "/global-reach",
      glimpse: "Connecting markets, nations, and institutions worldwide",
    },
  ];

  const currentIndex = pages.findIndex((p) => p.path === pathname);

  const nextPage =
    currentIndex !== -1 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : pages[0];

  return (
    <footer className="w-full text-white px-6 md:px-15 pb-6 md:pb-15 md:absolute md:bottom-0 bg-black">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative w-[48rem]">

          {/* Glimpse aligned to line end */}
          <Link
            href={nextPage.path}
            className="
              absolute
              right-0
              -top-5
              font-roboto
              text-sm
              tracking-wide
              text-gray-400
              hover:text-white
              transition
              text-right
              max-w-full
            "
          >
            {nextPage.glimpse}
          </Link>

          {/* Line */}
          <div className="flex items-center">
            <span className="w-2 h-2 border-2 border-white rounded-full" />
            <div className="h-px flex-1 bg-white opacity-100" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative w-full">

        <Link
          href={nextPage.path}
          className="
            block
            font-roboto
            text-xs
            tracking-wide
            text-gray-400
            mb-2
            text-right
            hover:text-white
            transition
          "
        >
          {nextPage.glimpse}
        </Link>

        <div className="flex items-center">
          <span className="w-2 h-2 border-2 border-white rounded-full" />
          <div className="h-px flex-1 bg-white opacity-60" />
        </div>
      </div>

    </footer>
  );
}