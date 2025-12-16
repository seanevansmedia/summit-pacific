"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; 
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  Hammer, 
  HardHat, 
  Ruler, 
  Truck, 
  Building2, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// --- DATA: SERVICES ---
const services = [
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "General Contracting",
    description: "Full-service construction management for complex commercial and residential projects. We maintain strict control over budget, schedule, and quality.",
    features: ["Project Management", "Site Supervision", "Subcontractor Coordination", "Quality Control"]
  },
  {
    icon: <Ruler className="w-8 h-8 text-white" />,
    title: "Design-Build",
    description: "A streamlined approach where we handle both design and construction. Single-point responsibility means faster delivery and unified vision.",
    features: ["Architectural Planning", "Permitting & Zoning", "Value Engineering", "Cost Estimation"]
  },
  {
    icon: <Hammer className="w-8 h-8 text-white" />,
    title: "Tenant Improvements",
    description: "Transforming commercial interiors to suit your business needs. From retail fit-outs to corporate office renovations.",
    features: ["Office Renovations", "Retail Spaces", "Demolition", "Interior Finishing"]
  },
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "Civil Infrastructure",
    description: "Heavy civil works including excavation, concrete forming, and site preparation for large-scale developments.",
    features: ["Excavation", "Concrete Forming", "Utilities", "Roadwork"]
  },
  {
    icon: <HardHat className="w-8 h-8 text-white" />,
    title: "Construction Management",
    description: "Acting as your consultant and representative, we oversee the entire build process to ensure your interests are protected.",
    features: ["Budget Management", "Risk Assessment", "Safety Compliance", "Reporting"]
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    title: "Seismic Upgrades",
    description: "Strengthening existing structures to meet modern safety codes. Crucial for older buildings in the Lower Mainland.",
    features: ["Structural Analysis", "Steel Reinforcement", "Foundation Underpinning", "Code Compliance"]
  }
];

// --- DATA: PROCESS ---
const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We meet to discuss your vision, budget, and timeline constraints. This is where we align our goals."
  },
  {
    step: "02",
    title: "Pre-Construction",
    desc: "Detailed estimating, permitting, and value engineering. We identify risks before we break ground."
  },
  {
    step: "03",
    title: "Construction",
    desc: "Our on-site teams manage the build with rigorous safety checks and weekly progress reporting."
  },
  {
    step: "04",
    title: "Handover",
    desc: "Final inspections, deficiency resolution, and occupancy permit issuance. We don't leave until it's perfect."
  }
];

export default function ServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = services.length - cardsToShow;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= totalSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? totalSlides : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative h-[420px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2600&auto=format&fit=crop" 
            alt="Construction Services" 
            fill
            className="object-cover opacity-60"
            priority 
          />
          <div className="absolute inset-0 bg-[#0f172a]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-500/30 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Our Capabilities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
              Expertise You <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Can Build On.
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-light drop-shadow-md border-l-4 border-blue-600 pl-6">
              Delivering end-to-end construction solutions across Burnaby. From the first blueprint to the final coat of paint, we handle it all with precision.
            </p>
          </div>
        </div>
      </header>

      {/* --- SERVICES CAROUSEL --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          
          {/* Header */}
          <div className="text-left mb-12 max-w-3xl px-4 md:px-0">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">What We Do</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-[#0f172a] leading-tight">
              Comprehensive construction services tailored to your project.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="cursor-pointer absolute -left-3 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-[#0f172a] border border-slate-700 text-white shadow-2xl rounded-full hover:bg-blue-600 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slider Track */}
            <div className="overflow-hidden p-10 -m-10"> 
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}
              >
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] group bg-white border border-slate-200 rounded-sm p-6 hover:shadow-2xl hover:border-blue-600 transition-all duration-300 flex flex-col h-auto min-h-[400px]"
                  >
                    <div className="w-16 h-16 bg-[#0f172a] rounded-sm flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-3 text-base flex-grow">
                      {service.description}
                    </p>

                    <ul className="mt-auto space-y-1 border-t border-slate-100 pt-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-base font-medium text-slate-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="cursor-pointer absolute -right-3 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-[#0f172a] border border-slate-700 text-white shadow-2xl rounded-full hover:bg-blue-600 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        </div>
      </section>

      {/* --- THE SUMMIT PROCESS --- */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">How We Work</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              The Summit Process
            </h2>
            <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
              A transparent, rigorous approach to project delivery ensuring your vision comes to life on time and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <div 
                key={i} 
                className="group relative bg-white p-10 rounded-sm shadow-xl transition-all duration-300 overflow-hidden cursor-default hover:bg-blue-600"
              >
                <div className="absolute -top-6 -right-6 text-9xl font-black text-slate-100 group-hover:text-white/10 transition-colors z-0 select-none">
                  {item.step}
                </div>

                <div className="relative z-10">
                  <div className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 group-hover:text-blue-100">
                    Phase {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-blue-50 transition-colors text-base">
                    {item.desc}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 h-2 w-full bg-blue-600 group-hover:bg-white transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Ready To Build</div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-[#0f172a] leading-tight">
            Start Your Project Right.
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Partner with Burnaby's most trusted construction team. We provide free initial consultations, feasibility studies, and detailed estimates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="cursor-pointer bg-[#0f172a] text-white font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-blue-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Get an Estimate
              </button>
            </Link>
            <Link href="/projects">
              <button className="cursor-pointer bg-white border-2 border-[#0f172a] text-[#0f172a] font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-sm hover:bg-slate-100 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}