"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react"; 
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else if (currentScrollY < 20) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Body Scroll Lock when Menu is Open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll on body
    } else {
      document.body.style.overflow = 'unset'; // Enable scroll on body
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
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
        <Link href="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
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

        {/* CTA Button & Mobile Toggle */}
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
          
          {/* Mobile Menu Icon (Only visible when menu is closed) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-[#0f172a] hover:opacity-70 transition-opacity p-2"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col animate-in fade-in duration-200">
          
          {/* Mobile Header (Logo + Close Button) */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-gray-100">
             {/* Logo */}
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center font-black text-lg rounded-sm bg-[#0f172a] text-white">
                  S
                </div>
                <div className="text-lg font-extrabold tracking-tight uppercase leading-none text-[#0f172a]">
                  Summit<br />Pacific.
                </div>
             </div>

             {/* Close Button */}
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#0f172a] p-2 hover:bg-gray-100 rounded-full transition-colors"
             >
               <X className="w-8 h-8" />
             </button>
          </div>

          {/* Menu Content (Centered) */}
          <div className="flex-grow flex flex-col justify-center px-8">
            <div className="flex flex-col gap-6 text-3xl font-black uppercase tracking-tight text-[#0f172a]">
              {["Projects", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            
            <div className="mt-12 w-full">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-[#0f172a] text-white font-bold uppercase tracking-widest text-sm py-5 rounded-sm shadow-lg active:scale-95 transition-transform">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>

          {/* Footer Info */}
          <div className="p-8 text-center bg-slate-50 border-t border-slate-100">
             <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Serving Burnaby & Lower Mainland</p>
             <p className="text-lg font-bold text-[#0f172a]">(604) 555-0199</p>
          </div>

        </div>
      )}
    </>
  );
}