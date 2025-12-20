"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; 
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative h-[420px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            alt="Summit Pacific Head Office" 
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
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
              Let's Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Something Great.
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-light drop-shadow-md border-l-4 border-blue-600 pl-6">
              Ready to start your next project? Contact our estimation team today for a consultation or detailed proposal.
            </p>
          </div>
        </div>
      </header>

      {/* --- CONTACT GRID --- */}
      <section className="py-20 px-6">
        {/* items-stretch ensures both columns are equal height */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* LEFT: INFO & MAP */}
          <div className="flex flex-col h-full">
            <div className="mb-12">
              <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Contact Us</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-6">
                Head Office
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We are based in Burnaby and serve the entire Lower Mainland. Reach out to discuss your project feasibility, budget, or timeline.
              </p>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center flex-shrink-0 text-blue-600 border border-blue-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-lg">Address</h4>
                    <p className="text-slate-500">4500 Kingsway, Suite 300<br/>Burnaby, BC V5H 2A9</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center flex-shrink-0 text-blue-600 border border-blue-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-lg">Phone</h4>
                    <p className="text-slate-500">(604) 555-0123</p>
                    <p className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">Mon-Fri, 8am - 5pm</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center flex-shrink-0 text-blue-600 border border-blue-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-lg">Email</h4>
                    <p className="text-slate-500">info@summitpacific.com</p>
                    <p className="text-slate-500">estimating@summitpacific.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP: Added flex-grow so it stretches to fill the height matching the form */}
            <div className="w-full bg-slate-100 rounded-sm overflow-hidden relative border border-slate-200 group flex-grow min-h-[300px]">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.586667761858!2d-123.00632592326796!3d49.22727607567848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867657989932ad%3A0x6331238914619470!2s4500%20Kingsway%2C%20Burnaby%2C%20BC%20V5H%202A9!5e0!3m2!1sen!2sca!4v1708460000000!5m2!1sen!2sca" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="grayscale group-hover:grayscale-0 transition-all duration-500"
               ></iframe>
            </div>
          </div>

          {/* RIGHT: FORM */}
          {/* h-full ensures this column stretches too */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-sm border border-slate-200 h-full">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">First Name</label>
                  <input type="text" className="w-full p-4 bg-white border border-slate-200 focus:border-[#0f172a] outline-none transition-colors rounded-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Last Name</label>
                  <input type="text" className="w-full p-4 bg-white border border-slate-200 focus:border-[#0f172a] outline-none transition-colors rounded-sm" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                <input type="email" className="w-full p-4 bg-white border border-slate-200 focus:border-[#0f172a] outline-none transition-colors rounded-sm" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                <input type="tel" className="w-full p-4 bg-white border border-slate-200 focus:border-[#0f172a] outline-none transition-colors rounded-sm" placeholder="(604) 555-0123" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Type</label>
                <select className="w-full p-4 bg-white border border-slate-200 focus:border-[#0f172a] outline-none transition-colors rounded-sm text-slate-700 cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Commercial Construction</option>
                  <option>Residential Build</option>
                  <option>Renovation / Tenant Improvement</option>
                  <option>Subcontracting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                {/* Changed rows to 6 for balance */}
                <textarea rows={6} className="w-full p-4 bg-white border border-slate-200 focus:border-[#0f172a] outline-none transition-colors rounded-sm" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="mt-4 cursor-pointer w-full bg-[#0f172a] text-white font-bold uppercase tracking-widest text-sm py-5 rounded-sm hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}