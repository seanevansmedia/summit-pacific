export default function Stats() {
  return (
    <div className="bg-slate-50 py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { num: "140+", label: "Projects Completed" },
          { num: "$500M", label: "Value Delivered" },
          { num: "100%", label: "Safety Record" },
          { num: "1998", label: "Established" },
        ].map((stat, i) => (
          <div key={i} className="group cursor-default transform transition-transform hover:-translate-y-1 duration-300">
            {/* FIXED: Reduced mobile size to text-4xl, kept desktop at text-6xl */}
            <div className="text-4xl md:text-6xl font-black mb-3 text-black group-hover:text-blue-700 transition-colors drop-shadow-sm">
              {stat.num}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-800">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}