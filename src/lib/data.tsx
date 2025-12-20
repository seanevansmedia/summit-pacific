// src/lib/data.tsx
import { 
  Building2, 
  Ruler, 
  Hammer, 
  Truck, 
  HardHat, 
  CheckCircle2,
  ShieldCheck,
  Users,
  Award
} from "lucide-react";

// --- PROJECTS DATA ---
export const projects = [
  {
    id: 1,
    title: "Metrotown Tower II",
    category: "Commercial",
    location: "Burnaby, BC",
    year: "2024",
    duration: "14 Months",
    value: "$45 Million",
    client: "Metropolis Property Group",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
    description: "A complete structural and aesthetic renovation of the commercial wing, including seismic upgrades, modern facade installation, and interior fit-outs for premium retail tenants.",
    challenge: "The primary challenge was executing heavy structural reinforcement while the mall remained fully operational. We needed to mitigate noise, dust, and vibration to ensure zero disruption to existing tenants and shoppers.",
    solution: "We implemented a phased night-shift schedule and utilized advanced dust-suppression systems. By isolating construction zones with sound-proof hoarding, we maintained a safe and pleasant environment for the public while staying ahead of schedule.",
    scope: ["Seismic Retrofitting", "Structural Concrete", "Facade Replacement", "HVAC Modernization", "Interior Fit-out"],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
    ]
  },
  {
    id: 2,
    title: "Brentwood Estate",
    category: "Residential",
    location: "North Burnaby",
    year: "2023",
    duration: "24 Months",
    value: "$120 Million",
    client: "Bosa Properties",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    description: "A landmark 45-story residential tower defining the new Brentwood skyline. Featuring 300+ luxury units, a rooftop amenity deck, and integrated smart-home technology systems throughout.",
    challenge: "The site was located on a tight urban corner with limited laydown area for materials. Logistics and crane scheduling were critical bottlenecks that threatened to delay the concrete pouring schedule.",
    solution: "We utilized Just-In-Time (JIT) delivery logistics for all steel and concrete materials. By coordinating hourly drop-offs with a secondary off-site staging area, we kept the vertical construction moving without clogging the busy city streets.",
    scope: ["Concrete Formwork", "Curtain Wall Glazing", "High-end Finishing", "Smart Home Integration", "Landscaping"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"
    ]
  },
  {
    id: 3,
    title: "Pacific Logistics Hub",
    category: "Industrial",
    location: "Delta, BC",
    year: "2023",
    duration: "18 Months",
    value: "$85 Million",
    client: "Global Port Corp",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000",
    description: "A massive 500,000 sq ft tilt-up concrete distribution center designed for high-volume logistics. Features 40ft clear heights, reinforced super-flat slab flooring, and automated docking systems.",
    challenge: "The soil conditions near the Fraser River were highly unstable (liquefiable soil), requiring significant ground improvement before foundations could be poured.",
    solution: "We employed deep stone column densification and pre-loading strategies to stabilize the ground. This geotechnical solution ensured the heavy slab could support massive racking loads without settling over time.",
    scope: ["Ground Densification", "Tilt-up Concrete", "Steel Decking", "Automated Systems", "Paving & Civil"],
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000",
      "https://images.unsplash.com/photo-1565514020175-0c2235be56d3?q=80&w=2000"
    ]
  },
  {
    id: 4,
    title: "Fraser River Bridge",
    category: "Civil",
    location: "Richmond, BC",
    year: "2022",
    duration: "36 Months",
    value: "$210 Million",
    client: "Ministry of Transportation",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
    description: "A critical infrastructure project replacing aging supports on a key arterial bridge. The project involved underwater piling, steel girder reinforcement, and deck resurfacing.",
    challenge: "Work had to be completed over active waterways with strict environmental regulations protecting local salmon runs. Access to the pilings was restricted by tides.",
    solution: "We utilized floating barges for all heavy equipment and timed our underwater work specifically around fish migration windows. A custom containment system prevented any debris from entering the river ecosystem.",
    scope: ["Marine Piling", "Structural Steel", "Environmental Protection", "Concrete Decking", "Traffic Management"],
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2000",
      "https://images.unsplash.com/photo-1590642916589-592bca10dfbf?q=80&w=2000"
    ]
  },
  {
    id: 5,
    title: "Oakridge Mall Reno",
    category: "Commercial",
    location: "Vancouver, BC",
    year: "2024",
    duration: "12 Months",
    value: "$30 Million",
    client: "Westbank",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000",
    description: "Modernization of the luxury retail wing, including new skylights, premium flooring, and a redesign of the central atrium to improve natural light flow.",
    challenge: "Installation of the massive glass skylight required crane lifts over occupied retail spaces. Safety and weather protection were paramount concerns.",
    solution: "We engineered a temporary rolling roof system that protected the mall interior while the skylight was being installed. All crane lifts were performed between 2 AM and 5 AM.",
    scope: ["Glazing & Skylights", "Stone Flooring", "Electrical Upgrades", "Lighting Design", "Hoarding"],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000",
      "https://images.unsplash.com/photo-1517581177697-a06a6af05f55?q=80&w=2000",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=2000"
    ]
  },
  {
    id: 6,
    title: "Skyline Apartments",
    category: "Residential",
    location: "Coquitlam, BC",
    year: "2022",
    duration: "16 Months",
    value: "$25 Million",
    client: "Polygon Homes",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000",
    description: "A 4-story wood-frame residential complex with 80 units. Focus on affordable, sustainable living with high-efficiency envelopes and communal green spaces.",
    challenge: "Framing during one of the wettest winters on record in BC posed moisture management issues for the wood structure.",
    solution: "We implemented an aggressive moisture control plan, using large-scale tarping and industrial heaters to dry out frames before drywall installation. This prevented mold issues and ensured long-term structural integrity.",
    scope: ["Wood Framing", "Building Envelope", "Roofing", "Interior Finishing", "Landscaping"],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2000"
    ]
  }
];

// --- SERVICES DATA ---
export const services = [
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

// --- PROCESS DATA ---
export const processSteps = [
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

// --- TEAM DATA ---
// RESTORED: Original images.
// FIXED: Robert's alignment tweaked with specific percentage.
export const leaders = [
  {
    name: "Robert Fox",
    role: "President & CEO",
    bio: "With over 35 years in construction management, Robert has led Summit Pacific from a small local outfit to a BC industry leader.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    objectPosition: "object-[50%_20%]" // Manually adjusted to move image slightly down
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Operations",
    bio: "Sarah oversees all active sites, ensuring safety compliance and operational efficiency across the Lower Mainland.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    objectPosition: "object-top" // Kept as top to avoid cutoff
  },
  {
    name: "David Chen",
    role: "Senior Project Manager",
    bio: "Specializing in high-rise developments, David brings precision engineering expertise to our most complex builds.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    objectPosition: "object-center"
  }
];

// --- VALUES DATA ---
export const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Safety First",
    desc: "We hold COR™ Certification and maintain an impeccable safety record. No deadline is worth a risk to our team."
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Client Partnership",
    desc: "We don't just build for you; we build with you. Transparent communication is the bedrock of our process."
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Quality Assurance",
    desc: "From the foundation to the finishing touches, we use only premium materials and vetted subcontractors."
  }
];