"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; 
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { leaders, values } from "@/lib/data"; 

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative h-[420px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2600&auto=format&fit=crop" 
            alt="Summit Pacific Team Meeting" 
            fill
            className="object-cover opacity-60"
            priority 
          />
          <div className="absolute inset-0 bg-[#0f172a]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-500/30 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Who We Are
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
              Building Trust <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Since 1998.
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-light drop-shadow-md border-l-4 border-blue-600 pl-6">
              More than just a construction company. We are Burnaby's partners in growth, innovation, and community development.
            </p>
          </div>
        </div>
      </header>

      {/* --- OUR STORY (Split) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our History</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-6 leading-tight">
              A Legacy of Excellence in British Columbia.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Founded over 25 years ago, Summit Pacific began as a small family-owned framing contractor in North Burnaby. Today, we have evolved into a premier full-service construction management firm.
              </p>
              <p>
                Despite our growth, our core philosophy remains unchanged: <strong>Integrity, Quality, and Safety.</strong> We treat every project, whether a custom home or a commercial high-rise, with the same level of dedication and precision.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-[#0f172a] mb-1">25+</div>
                <div className="text-sm font-bold uppercase text-slate-500">Years Active</div>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-4xl font-black text-[#0f172a] mb-1">140+</div>
                <div className="text-sm font-bold uppercase text-slate-500">Projects Built</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[500px] w-full bg-slate-100 rounded-sm overflow-hidden shadow-2xl">
             {/* NEW IMAGE: Active Construction / Structure */}
             <Image 
               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200"
               alt="Construction Site History"
               fill
               className="object-cover"
             />
             {/* Floating Quote Card */}
             <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-sm shadow-lg border-l-4 border-[#0f172a]">
               <p className="text-slate-800 italic font-medium leading-relaxed">
                 "Our mission is simple: To build structures that stand the test of time and relationships that last a lifetime."
               </p>
               <div className="mt-4 text-sm font-bold uppercase tracking-wide text-blue-600">
                 — Robert Fox, CEO
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION (Dark - Centered Content) --- */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Core Values</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">How We Operate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors cursor-default flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-sm flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP TEAM --- */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Leadership</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] leading-tight">Meet The Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="group bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image 
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className={`object-cover ${leader.objectPosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
                     <div className="flex gap-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
                        <Mail className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
                     </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-1">{leader.name}</h3>
                  <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">{leader.role}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Join The Team</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#0f172a] leading-tight">
            Work With The Best.
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            We are always looking for skilled tradespeople, project managers, and engineers to join the Summit Pacific family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* FIXED WIDTH BUTTON: w-52 */}
            <button className="cursor-pointer w-52 bg-[#0f172a] text-white font-bold uppercase tracking-wide text-sm py-5 rounded-sm hover:bg-blue-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              View Openings
            </button>
            
            <Link href="/contact">
              {/* FIXED WIDTH BUTTON: w-52 */}
              <button className="cursor-pointer w-52 bg-white border-2 border-[#0f172a] text-[#0f172a] font-bold uppercase tracking-wide text-sm py-5 rounded-sm hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}