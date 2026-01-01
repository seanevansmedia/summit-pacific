import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
      
      {/* --- MOBILE BACKGROUND IMAGE (Visible only on mobile) --- */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Summit Pacific Construction Site"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay for readability on mobile */}
        <div className="absolute inset-0 bg-[#0f172a]/85"></div>
      </div>

      {/* --- LEFT COLUMN: CONTENT --- */}
      <div className="relative z-10 p-12 md:p-24 flex flex-col justify-center bg-transparent lg:bg-[#0f172a] text-white">
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
          Building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Legacy.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-light">
          Premier construction management for Burnaby's most ambitious commercial and residential projects. Trusted since 1998.
        </p>
        
        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/projects"
            className="bg-white text-[#0f172a] font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl cursor-pointer inline-flex justify-center items-center text-center"
          >
            View Portfolio
          </Link>
          
          <Link 
            href="/services"
            className="bg-white/10 border border-white text-white font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-400 hover:border-[#0f172a] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg backdrop-blur-sm inline-flex justify-center items-center text-center"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* --- RIGHT COLUMN: DESKTOP IMAGE (Hidden on Mobile) --- */}
      <div className="relative hidden lg:block h-full min-h-[400px] w-full overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Burnaby Skyscraper Construction"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-[#0f172a]/20"></div>
        <div className="absolute bottom-0 left-0 bg-white p-8 max-w-xs hidden md:block shadow-2xl">
          <div className="text-4xl font-black text-[#0f172a] mb-1">25+</div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Years of Experience</div>
        </div>
      </div>
    </header>
  );
}