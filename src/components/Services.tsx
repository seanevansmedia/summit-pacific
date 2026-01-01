import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</div>
          {/* CONSISTENCY FIX: Matched font size to Projects component */}
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
          
          {/* FIXED: Wrapped in Link component */}
          <Link href="/services">
            <button className="mt-10 border-b-2 border-[#0f172a] pb-1 font-bold uppercase text-sm hover:text-blue-600 hover:border-blue-600 transition-colors cursor-pointer">
              Learn more about services
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
           <Image 
             src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
             className="rounded-sm w-full h-64 object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500" 
             alt="Site Management"
             width={800}
             height={600}
           />
           <Image 
             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
             className="rounded-sm w-full h-64 object-cover mt-8 shadow-lg hover:scale-[1.02] transition-transform duration-500" 
             alt="Construction Progress"
             width={800}
             height={600}
           />
        </div>
      </div>
    </section>
  );
}