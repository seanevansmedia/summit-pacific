"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Phone, MapPin, Mail, Menu, ChevronRight, CheckCircle2, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Home() {
  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      
      {/* --- TOP BAR (Contact Info) --- */}
      {/* This scrolls away naturally */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 text-xs font-bold uppercase tracking-widest bg-slate-900 text-white">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-blue-400"/> Serving Burnaby & Lower Mainland
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-blue-400"/> (604) 555-0199
          </span>
        </div>
        <div className="flex gap-6 opacity-80">
          <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Safety Portal</a>
          <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Careers</a>
          <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Subcontractors</a>
        </div>
      </div>

      {/* --- NAVBAR (Sticky & Shrinking) --- */}
      <nav 
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out
          ${isScrolled ? "h-20 shadow-md" : "h-28 shadow-sm"}
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div 
            className={`flex items-center justify-center font-black rounded-sm bg-[#0f172a] text-white transition-all duration-300 group-hover:scale-110 shadow-lg
              ${isScrolled ? "w-10 h-10 text-lg" : "w-12 h-12 text-xl"}
            `}
          >
            S
          </div>
          <div 
            className={`font-extrabold tracking-tight uppercase leading-none text-[#0f172a] transition-all duration-300
              ${isScrolled ? "text-lg" : "text-xl"}
            `}
          >
            Summit<br/>Pacific.
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-16 text-base font-bold uppercase tracking-wide text-slate-600">
          {["Projects", "Expertise", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative hover:text-[#0f172a] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#0f172a] hover:after:w-full after:transition-all after:duration-300">
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button 
            className={`hidden md:block bg-[#0f172a] text-white hover:bg-blue-900 transition-all duration-300 hover:scale-105 active:scale-95 font-bold uppercase tracking-wide rounded-sm shadow-lg hover:shadow-blue-900/30 cursor-pointer
              ${isScrolled ? "px-6 py-3 text-xs" : "px-8 py-4 text-xs"}
            `}
          >
            Get Quote
          </button>
          <Menu className="md:hidden w-8 h-8 text-[#0f172a] cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Left: Content */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-[#0f172a] text-white">
          <div className="w-16 h-1 bg-blue-500 mb-8"></div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Building <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Legacy.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-light">
            Premier construction management for Burnaby's most ambitious commercial and residential projects. Trusted since 1998.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Button 1 */}
            <button className="bg-white text-[#0f172a] font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
              View Portfolio
            </button>
            
            {/* Button 2: Hover -> Baby Blue with DARK BLUE BORDER */}
            <button className="bg-white/10 border border-white text-white font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-400 hover:border-[#0f172a] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg backdrop-blur-sm">
              Our Services
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative min-h-[400px] lg:h-auto overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Burnaby Skyscraper Construction" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0f172a]/20"></div>
          <div className="absolute bottom-0 left-0 bg-white p-8 max-w-xs hidden md:block shadow-2xl">
            <div className="text-4xl font-black text-[#0f172a] mb-1">25+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Years of Experience</div>
          </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <div className="bg-blue-50 py-20 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "140+", label: "Projects Completed" },
            { num: "$500M", label: "Value Delivered" },
            { num: "100%", label: "Safety Record" },
            { num: "1998", label: "Established" },
          ].map((stat, i) => (
             <div key={i} className="group cursor-default transform transition-transform hover:-translate-y-1 duration-300">
                <div className="text-5xl md:text-6xl font-black mb-3 text-black group-hover:text-blue-700 transition-colors drop-shadow-sm">
                  {stat.num}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900">
                  {stat.label}
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* --- FEATURED PROJECTS --- */}
      {/* Tightened Spacing: pt-24 pb-12 */}
      <section className="pt-24 pb-12 px-6 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Track Record</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">Recent Projects</h2>
            </div>
            <a href="#" className="group flex items-center gap-2 font-bold text-sm text-[#0f172a] hover:text-blue-600 transition-colors cursor-pointer">
              VIEW ALL PROJECTS 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Project Card 1 */}
            <div className="group bg-white rounded-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer flex flex-col">
               <div className="h-72 overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   alt="Metrotown Upgrade"
                 />
                 <div className="absolute top-4 left-4 bg-[#0f172a] text-white text-[10px] font-bold uppercase px-3 py-1 shadow-md">
                   Commercial
                 </div>
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <h3 className="text-2xl font-black mb-2 text-[#0f172a] group-hover:text-blue-700 transition-colors">Metrotown Upgrade</h3>
                 <p className="text-slate-500 text-base mb-6 line-clamp-2 leading-relaxed">
                   Complete structural renovation of the commercial wing, including seismic upgrades and modern facade installation.
                 </p>
                 <div className="mt-auto">
                   <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-blue-100 transition-colors"></div>
                   <div className="flex items-center gap-2 text-base font-bold uppercase text-blue-600 group-hover:underline">
                     View Case Study <ChevronRight className="w-4 h-4" />
                   </div>
                 </div>
               </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-white rounded-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer flex flex-col">
               <div className="h-72 overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   alt="Brentwood Tower"
                 />
                 <div className="absolute top-4 left-4 bg-[#0f172a] text-white text-[10px] font-bold uppercase px-3 py-1 shadow-md">
                   High-Rise
                 </div>
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <h3 className="text-2xl font-black mb-2 text-[#0f172a] group-hover:text-blue-700 transition-colors">Brentwood Tower</h3>
                 <p className="text-slate-500 text-base mb-6 line-clamp-2 leading-relaxed">
                   A 45-story residential tower featuring sustainable concrete technology and integrated smart-home systems.
                 </p>
                 <div className="mt-auto">
                   <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-blue-100 transition-colors"></div>
                   <div className="flex items-center gap-2 text-base font-bold uppercase text-blue-600 group-hover:underline">
                     View Case Study <ChevronRight className="w-4 h-4" />
                   </div>
                 </div>
               </div>
            </div>

             {/* Quote Card (CTA) */}
             <div className="group bg-[#0f172a] rounded-sm overflow-hidden flex flex-col p-10 text-white relative shadow-xl min-h-[500px] md:min-h-0">
               <div className="absolute top-0 right-0 p-10 opacity-10">
                 <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M17 21v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V21"/><path d="M11 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg>
               </div>
               
               <div className="relative z-10 flex-grow">
                  <h3 className="text-3xl font-bold mb-6">Have a project in mind?</h3>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    We provide detailed estimates and feasibility studies for commercial and industrial projects in Burnaby.
                  </p>
                  <ul className="space-y-4 text-lg font-medium text-slate-200">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-blue-400"/> Accurate Budgeting</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-blue-400"/> Timeline Guarantee</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-blue-400"/> Safety & Compliance</li>
                  </ul>
               </div>

               <div className="relative z-10 mt-12">
                  <button className="w-full bg-white text-[#0f172a] font-bold py-5 px-6 text-sm uppercase rounded-sm hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] shadow-lg text-center cursor-pointer tracking-wider">
                    Contact Our Team
                  </button>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES / CAPABILITIES --- */}
      {/* Tightened Spacing: pt-12 */}
      <section className="pt-12 pb-24 px-6 bg-slate-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-6">Comprehensive Construction Services</h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              From pre-construction planning to final site handover, we handle every aspect of the build process. Our team specializes in complex regulatory environments in British Columbia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "General Contracting",
                "Construction Management",
                "Design-Build",
                "Seismic Upgrades",
                "Tenant Improvements",
                "Civil Infrastructure"
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 font-bold text-slate-800 cursor-default hover:text-blue-700 transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {service}
                </div>
              ))}
            </div>
            <button className="mt-10 border-b-2 border-[#0f172a] pb-1 font-bold uppercase text-base hover:text-blue-600 hover:border-blue-600 transition-colors cursor-pointer">
              Learn more about services
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Reliable Image 1 */}
             <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" className="rounded-sm w-full h-64 object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="Site Management"/>
             {/* Reliable Image 2 (Fixed) */}
             <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" className="rounded-sm w-full h-64 object-cover mt-8 shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="Construction Progress"/>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0f172a] text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
           <div className="col-span-1 md:col-span-2">
             <div className="text-white text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-xs rounded-sm">S</div>
                Summit Pacific
             </div>
             <p className="max-w-sm mb-8 leading-relaxed text-base">
               Building British Columbia's future with integrity, safety, and precision. We are committed to sustainable building practices and community development.
             </p>
             <div className="flex gap-4">
               <div className="w-8 h-8 bg-slate-800 hover:bg-blue-600 hover:scale-110 transition-all rounded-sm flex items-center justify-center text-white cursor-pointer group">
                  <Linkedin className="w-4 h-4" />
               </div>
               <div className="w-8 h-8 bg-slate-800 hover:bg-blue-600 hover:scale-110 transition-all rounded-sm flex items-center justify-center text-white cursor-pointer group">
                  <Instagram className="w-4 h-4" />
               </div>
               <div className="w-8 h-8 bg-slate-800 hover:bg-blue-600 hover:scale-110 transition-all rounded-sm flex items-center justify-center text-white cursor-pointer group">
                  <Facebook className="w-4 h-4" />
               </div>
             </div>
           </div>
           
           <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Contact</h4>
             <ul className="space-y-4 text-base">
               <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-blue-600 shrink-0"/> 
                 <span className="cursor-default">4500 Kingsway, Suite 300<br/>Burnaby, BC V5H 2A9</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-blue-600 shrink-0"/> 
                 <a href="mailto:info@summitpacific.com" className="hover:text-white transition-colors">info@summitpacific.com</a>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-blue-600 shrink-0"/> 
                 <a href="tel:6045550123" className="hover:text-white transition-colors">(604) 555-0123</a>
               </li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Quick Links</h4>
             <ul className="space-y-3 text-base">
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">Our Projects</a></li>
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">Services</a></li>
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">Safety Policy</a></li>
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">Careers</a></li>
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">Subcontractor Portal</a></li>
             </ul>
           </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
           <div>© 2025 Summit Pacific Construction. All Rights Reserved.</div>
           <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </footer>

    </div>
  );
}