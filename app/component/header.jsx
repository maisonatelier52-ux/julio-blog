"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "JMHV", href: "/" },
    { label: "PROFESSIONAL PROFILE", href: "/professional-profile" },
    { label: "LEGACY", href: "/legacy" },
    { label: "VISION AND GLOBAL INFLUENCE", href: "/vision-and-global-influence" },
    { label: "GLOBAL REACH", href: "/global-reach" },
  ];

  return (
    <header className="absolute top-0 left-0 z-20 w-full">

        {/* Navigation */}
        <nav className=" flex flex-1 py-6 px-15 items-center justify-between text-sm tracking-widest">
          <div className="flex gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-roboto px-4 py-2 transition-all duration-400 ease-out 
                    ${
                      isActive
                        ? "bg-white px-6 py-2 text-black"
                        : "text-white hover:text-gray-400"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* White Line on Right of nav with hollow circle */}
          <div className="ml-10 flex items-center flex-1">
            <div className="h-px flex-1 bg-white opacity-80 relative">
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 border-2 border-white rounded-full"></span>
            </div>
          </div>
        </nav>
    </header>
  );
}