export default function Hero() {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      <div className="p-12 md:p-24 flex flex-col justify-center bg-[#0f172a] text-white">
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
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-[#0f172a] font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
            View Portfolio
          </button>
          <button className="bg-white/10 border border-white text-white font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-400 hover:border-[#0f172a] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg backdrop-blur-sm">
            Our Services
          </button>
        </div>
      </div>

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
  );
}