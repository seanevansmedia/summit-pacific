import { Phone, MapPin, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
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
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="cursor-default">
                4500 Kingsway, Suite 300<br />Burnaby, BC V5H 2A9
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600 shrink-0" />
              <a href="mailto:info@summitpacific.com" className="hover:text-white transition-colors">
                info@summitpacific.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600 shrink-0" />
              <a href="tel:6045550123" className="hover:text-white transition-colors">
                (604) 555-0123
              </a>
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
  );
}