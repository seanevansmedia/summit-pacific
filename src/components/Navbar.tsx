"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // HYSTERESIS BUFFER FIX:
      // 1. Only SHRINK if we have scrolled down past 100px.
      // 2. Only GROW if we are almost back at the top (< 20px).
      // The large gap (80px) absorbs the layout jump when the navbar resizes, preventing the loop.
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else if (currentScrollY < 20) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Scrolls away naturally */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 text-xs font-bold uppercase tracking-widest bg-slate-900 text-white">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-blue-400" /> Serving Burnaby & Lower Mainland
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-blue-400" /> (604) 555-0199
          </span>
        </div>
        <div className="flex gap-6 opacity-80">
          <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Safety Portal</a>
          <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Careers</a>
          <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Subcontractors</a>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ease-in-out will-change-transform
          ${isScrolled ? "h-20 shadow-md" : "h-28 shadow-sm"}
        `}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div
            className={`flex items-center justify-center font-black rounded-sm bg-[#0f172a] text-white transition-all duration-500 group-hover:scale-110 shadow-lg
              ${isScrolled ? "w-10 h-10 text-lg" : "w-12 h-12 text-xl"}
            `}
          >
            S
          </div>
          <div
            className={`font-extrabold tracking-tight uppercase leading-none text-[#0f172a] transition-all duration-500
              ${isScrolled ? "text-lg" : "text-xl"}
            `}
          >
            Summit<br />Pacific.
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-16 text-base font-bold uppercase tracking-wide text-slate-600">
          {["Projects", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative hover:text-[#0f172a] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#0f172a] hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <button
              className={`hidden md:block bg-[#0f172a] text-white hover:bg-blue-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-bold uppercase tracking-wide rounded-sm shadow-lg cursor-pointer
                ${isScrolled ? "px-6 py-3 text-xs" : "px-8 py-4 text-xs"}
              `}
            >
              Get Quote
            </button>
          </Link>
          <Menu className="md:hidden w-8 h-8 text-[#0f172a] cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </nav>
    </>
  );
}