"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; 
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { useParams } from "next/navigation";
import { projects } from "@/lib/data"; // Import from new file

export default function ProjectDetailPage() {
  const params = useParams();
  
  // FETCH FROM DATABASE
  const project = projects.find(p => p.id.toString() === params.id);

  // Error State if project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8 text-slate-500">The project you are looking for does not exist.</p>
          <Link href="/projects" className="bg-[#0f172a] text-white px-8 py-3 rounded-sm font-bold uppercase text-sm">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative h-[420px] flex items-center overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.gallery[0]} // Use the first gallery image
            alt={project.title} 
            fill
            className="object-cover opacity-60"
            priority 
          />
          <div className="absolute inset-0 bg-[#0f172a]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6 font-bold text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                {project.category}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-slate-200 text-lg font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" /> {project.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" /> {project.year}
            </div>
          </div>
        </div>
      </header>

      {/* --- PROJECT STATS BAR --- */}
      <div className="bg-[#0f172a] py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Client</div>
            <div className="text-white text-lg font-bold">{project.client}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Duration</div>
            <div className="text-white text-lg font-bold">{project.duration}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Project Value</div>
            <div className="text-white text-lg font-bold">{project.value}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Status</div>
            <div className="text-green-400 text-lg font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Completed
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Project Story */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-8">
              Project Overview
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              {project.description}
            </p>

            <div className="w-full h-px bg-slate-200 mb-12"></div>

            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">The Challenge</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {project.challenge}
            </p>

            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">The Solution</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              {project.solution}
            </p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="h-80 relative rounded-sm overflow-hidden shadow-lg">
                <Image 
                  src={project.gallery[1] || project.gallery[0]} 
                  alt="Detail Shot 1" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-80 relative rounded-sm overflow-hidden shadow-lg">
                <Image 
                  src={project.gallery[2] || project.gallery[0]} 
                  alt="Detail Shot 2" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Scope of Work Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 p-10 border border-slate-200 rounded-sm sticky top-32">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-blue-600"/> Scope of Work
              </h3>
              <ul className="space-y-4">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-slate-600 font-medium pb-4 border-b border-slate-200">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="text-slate-500 text-sm mb-4">Need a similar project?</p>
                <Link href="/contact">
                  <button className="w-full bg-[#0f172a] text-white font-bold uppercase tracking-wide text-sm py-4 rounded-sm hover:bg-blue-900 transition-all shadow-lg">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}