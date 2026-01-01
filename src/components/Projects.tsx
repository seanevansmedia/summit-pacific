import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    // FIXED: Reduced pt-24 to pt-12 to tighten space above "Our Track Record"
    <section className="pt-12 pb-12 px-6 bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Track Record</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">Recent Projects</h2>
          </div>
          <Link href="/projects" className="group flex items-center gap-2 font-bold text-sm text-[#0f172a] hover:text-blue-600 transition-colors cursor-pointer">
            VIEW ALL PROJECTS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Project 1 */}
          <Link href="/projects/1" className="block group">
            <div className="h-full bg-white rounded-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col">
               <div className="h-72 overflow-hidden relative">
                 <Image 
                   src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   alt="Metrotown Upgrade"
                   width={800}
                   height={600}
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
          </Link>

          {/* Project 2 */}
          <Link href="/projects/2" className="block group">
            <div className="h-full bg-white rounded-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col">
               <div className="h-72 overflow-hidden relative">
                 <Image 
                   src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   alt="Brentwood Tower"
                   width={800}
                   height={600}
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
          </Link>

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
                <Link href="/contact">
                  <button className="w-full bg-white text-[#0f172a] font-bold py-5 px-6 text-sm uppercase rounded-sm hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] shadow-lg text-center cursor-pointer tracking-wider">
                    Contact Our Team
                  </button>
                </Link>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}