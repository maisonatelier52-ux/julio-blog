"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "JMHV",
      href: "/",
      icon: "/julio_icon.jpeg",
    },
    { label: "PROFESSIONAL PROFILE", href: "/professional-profile" },
    { label: "LEGACY", href: "/legacy" },
    { label: "VISION AND GLOBAL INFLUENCE", href: "/vision-and-global-influence" },
    { label: "GLOBAL REACH", href: "/global-reach" },
  ];

  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <nav className="flex items-center py-6 px-6 md:px-15 text-sm tracking-widest">

        {/* Scrollable nav items */}
        <div className="flex gap-6 md:gap-10 overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-2
                  font-roboto px-4 py-2 transition-all duration-300 ease-out
                  text-white md:hover:text-gray-400
                  ${isActive ? "md:bg-white md:text-black md:px-6" : ""}
                `}
              >
                {/* Icon only for JMHV */}
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt="JMHV Icon"
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                )}

                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Decorative line – desktop only */}
        <div className="hidden md:flex ml-10 items-center flex-1">
          <div className="h-px flex-1 bg-white opacity-80 relative">
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 border-2 border-white rounded-full" />
          </div>
        </div>
      </nav>
    </header>
  );
}