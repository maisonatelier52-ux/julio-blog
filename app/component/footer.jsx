"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Ordered page flow
  const pages = [
    { path: "/", label: "JMHV" },
    { path: "/professional-profile", label: "PROFESSIONAL PROFILE" },
    { path: "/legacy", label: "LEGACY" },
    { path: "/vision-and-global-influence", label: "VISION AND GLOBAL INFLUENCE" },
    { path: "/global-reach", label: "GLOBAL REACH" },
  ];

  const currentIndex = pages.findIndex((p) => p.path === pathname);

  // Fallback to first page if route not found
  const nextPage =
    currentIndex !== -1 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : pages[0];

  return (
    <footer className="absolute bottom-0 left-0 w-full px-15 pb-15">
        <div className="flex items-center justify-between">
          {/* Line with circle at start */}
          <div className="flex items-center relative">
            <span className="w-2 h-2 border-2 border-white rounded-full"></span>
            <div className="h-px w-[48rem] bg-white opacity-100"></div>
            <Link href={nextPage.path} className="font-roboto text-white font-bold tracking-widest px-3">JMHV</Link>
          </div>
        </div>
      </footer>
  );
}
