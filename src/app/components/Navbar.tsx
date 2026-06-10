"use client";

import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    // { href: "/blogs", label: "Blogs" },
    { href: "/contacts", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 border-b border-gray-200/60 dark:border-[#1c2a3d] bg-[#f0f4f8]/80 dark:bg-[#080c12]/85 backdrop-blur-md transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <Link href="/" className="font-mono text-sm font-bold text-[#4d93ff] tracking-tight">
            dev.portfolio
          </Link>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.72rem] uppercase tracking-widest font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-[#1e6ff5]"
                      : "text-[#7a8899] hover:text-[#4d93ff]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-gray-200 dark:border-[#1c2a3d] text-[#7a8899] hover:text-[#4d93ff] hover:border-[#1e6ff5] transition-colors duration-150 cursor-pointer"
            >
              {theme === "dark" ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#7a8899] hover:text-[#4d93ff] transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-[#1c2a3d] py-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <Link
                    href={item.href}
                    className={`block py-2.5 px-3 rounded text-sm font-mono uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-[#1e6ff5] bg-[#1e6ff5]/10"
                        : "text-[#7a8899] hover:text-[#4d93ff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
            <div className="pt-2 px-3">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm text-[#7a8899] hover:text-[#4d93ff] transition-colors"
              >
                {theme === "dark" ? (
                  <><SunIcon className="w-4 h-4" /> Light Mode</>
                ) : (
                  <><MoonIcon className="w-4 h-4" /> Dark Mode</>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
