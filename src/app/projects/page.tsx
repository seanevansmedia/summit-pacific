"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight, Filter } from "lucide-react";
import { projects } from "@/lib/data"; // Using the centralized data file

const categories = ["All", "Commercial", "Residential", "Industrial", "Civil"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory) || p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative h-[420px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            alt="Our Portfolio" 
            fill
            className="object-cover opacity-60"
            priority 
          />
          <div className="absolute inset-0 bg-[#0f172a]/70"></div>
        </div>

        {/* ALIGNMENT: max-w-7xl mx-auto px-6 */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-500/30 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Our Portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
              Selected <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Works.
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 max-w-3xl leading-relaxed font-light drop-shadow-md border-l-4 border-blue-600 pl-6">
              A collection of our defining projects across the Lower Mainland, showcasing engineering precision and architectural excellence.
            </p>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-20">
        {/* ALIGNMENT: max-w-7xl mx-auto px-6 */}
        <div className="max-w-7xl mx-auto px-6">
          
          {/* FILTER BAR */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-100 pb-8 gap-6">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Filter Projects</h2>
              {/* UPDATED: Matches Services page size exactly (text-3xl md:text-4xl) */}
              <p className="text-3xl md:text-4xl font-extrabold text-[#0f172a] leading-tight">
                Explore our work.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border
                    ${activeCategory === cat 
                      ? "bg-[#0f172a] border-[#0f172a] text-white shadow-lg" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-[#0f172a] hover:text-[#0f172a]"}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group cursor-pointer">
                
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden rounded-sm mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/40 transition-colors duration-300"></div>
                  
                  {/* Hover Overlay Icon */}
                  <div className="absolute top-4 right-4 bg-white text-[#0f172a] p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#0f172a] text-white text-[10px] font-bold uppercase px-3 py-1 shadow-md">
                    {project.category}
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex justify-between items-start border-b border-gray-100 pb-6 group-hover:border-blue-600 transition-colors">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold mb-2 text-[#0f172a] group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-base text-slate-500 font-medium">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-blue-500" /> {project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="bg-blue-50 py-20 border-t border-blue-100">
        {/* ALIGNMENT: max-w-7xl mx-auto px-6 */}
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#0f172a]">Ready to start your next build?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#0f172a] text-white font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}