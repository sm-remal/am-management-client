export interface Project {
  slug: string;
  title: string;
  category:
    | "Housing Development"
    | "Plastering & Skim Coat"
    | "Brickwork"
    | "Commercial Construction";
  status: "Completed" | "Ongoing";
  company: string;
  location: string;
  client: string;
  contractValue?: string;
  timeline: string;
  heroImage: string;
  overview: string;
  scopeOfWork: string[];
  highlights: string[];
  gallery: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "taman-permai-affordable-housing",
    title: "Taman Permai 150-Unit Affordable Housing",
    category: "Housing Development",
    status: "Ongoing",
    company: "AM Management Group Sdn. Bhd.",
    location: "Merlimau, Melaka",
    client: "Rumah Mampu Milik Melaka Scheme",
    contractValue: "RM 1,800,000.00",
    timeline: "2024 - 2026",
    heroImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Government-backed affordable housing sub-contract covering brickwork, internal skim coat, and exterior render.",
    scopeOfWork: [
      "Mass Bricklaying Operations",
      "Rapid-dry Internal Skim Coating",
      "Exterior Protective Rendering",
      "Perimeter Wall Masonry",
    ],
    highlights: [
      "Fast-track construction pipeline implemented",
      "High quality finishes at cost-effective price point",
      "Providing employment opportunities for local craftsmen",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "taman-hilsa-housing-development",
    title: "Taman Hilsa Residential Housing Phase 1",
    category: "Housing Development",
    status: "Completed",
    company: "AM Management Group Sdn. Bhd.",
    location: "Ayer Keroh, Melaka",
    client: "Hilsa Properties Sdn. Bhd.",
    contractValue: "RM 2,450,000.00",
    timeline: "2021 - 2022",
    heroImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Full structural construction and masonry framework for a modern double-storey residential township.",
    scopeOfWork: [
      "Foundation and Structural Concrete Masonry",
      "Brickwork for Internal Partitions",
      "Exterior Surface Plastering",
      "Roofing Framework Installation",
    ],
    highlights: [
      "Constructed 45 double-storey terrace units",
      "Passed CIDB Malaysia quality standard audits with distinction",
      "Implemented eco-friendly waste management on-site",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "kl-gateway-commercial-hub-skim-coat",
    title: "Commercial Retail Hub Interior Surface Finishing",
    category: "Plastering & Skim Coat",
    status: "Completed",
    company: "AM Management Group Sdn. Bhd.",
    location: "Bangsar South, Kuala Lumpur",
    client: "UOA Group Main Contractor",
    contractValue: "RM 850,000.00",
    timeline: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    overview:
      "High-precision internal skim coat and plastering works for a multi-level commercial shopping complex.",
    scopeOfWork: [
      "High-rise Interior Skim Coating",
      "Acoustic Wall Plastering Solutions",
      "Curved Wall Surface Smoothing",
      "Final Painting Prep Work",
    ],
    highlights: [
      "Flawless level-5 smooth wall finish",
      "Night-shift operations to meet rapid client opening timelines",
      "Zero material waste achievement",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "bukit-katil-shop-lots-brickwork",
    title: "3-Storey Commercial Shop Offices",
    category: "Brickwork",
    status: "Completed",
    company: "AM Management Group Sdn. Bhd.",
    location: "Bukit Katil, Melaka",
    client: "Setia Builder Group",
    contractValue: "RM 680,000.00",
    timeline: "2022",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Heavy masonry, red bricklaying, and concrete block wall installation for 18 units of commercial shop offices.",
    scopeOfWork: [
      "Clay Brick Wall Construction",
      "Reinforced Concrete Lintels",
      "Expansion Joint Placement",
      "Scaffolding Set Up and Safety Barriers",
    ],
    highlights: [
      "Over 350,000 bricks laid with strict alignment precision",
      "Delivered 2 weeks ahead of the master schedule",
      "Complied with high thermal insulation requirements",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "cyberjaya-tech-park-building",
    title: "Tech Park Warehouse & Office Complex",
    category: "Commercial Construction",
    status: "Ongoing",
    company: "AM Management Group Sdn. Bhd.",
    location: "Cyberjaya, Selangor",
    client: "Cyberview Development",
    contractValue: "RM 3,800,000.00",
    timeline: "2024 - 2025",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Comprehensive sub-contract works including structural frame plastering, brick facade, and industrial skim coating.",
    scopeOfWork: [
      "Industrial Grade External Wall Plastering",
      "Fire-Rated Brick Wall Assembly",
      "High-Ceiling Wall Surface Preparation",
      "Weatherproof Exterior Coatings",
    ],
    highlights: [
      "Currently 65% completed on track",
      "Utilizing modern mortar pump technology for high-speed application",
      "Full compliance with Green Building Index (GBI) standards",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "seremban-heights-semi-d-residences",
    title: "Seremban Heights Luxury Semi-D Villas",
    category: "Housing Development",
    status: "Ongoing",
    company: "AM Management Group Sdn. Bhd.",
    location: "Seremban, Negeri Sembilan",
    client: "Matrix Concepts Holdings",
    contractValue: "RM 1,950,000.00",
    timeline: "2024 - 2025",
    heroImage:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Premium masonry and plastering sub-contract work for 32 luxury semi-detached residential units.",
    scopeOfWork: [
      "Premium Smooth Finish Plastering",
      "Feature Wall Brickwork",
      "Waterproof Cement Rendering for Wet Areas",
      "Architectural Moldings Preparation",
    ],
    highlights: [
      "Custom decorative brickwork patterns",
      "Strict quality control for luxury property specifications",
      "Zero worker injuries recorded to date",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "jasin-community-center-renovation",
    title: "Jasin District Civic Center & Hall",
    category: "Commercial Construction",
    status: "Completed",
    company: "AM Management Group Sdn. Bhd.",
    location: "Jasin, Melaka",
    client: "Majlis Perbandaran Jasin (MPJ)",
    contractValue: "RM 420,000.00",
    timeline: "2021",
    heroImage:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Restoration and internal wall resurfacing, brick repair, and high-durability plastering for public hall facility.",
    scopeOfWork: [
      "Structural Wall Repair & Damp Proofing",
      "Heavy-duty External Plastering",
      "Internal Skim Coating for Event Spaces",
      "Concrete Pillar Finishing",
    ],
    highlights: [
      "Preserved structural heritage while upgrading finishes",
      "Commended by local municipal council for rapid delivery",
      "Used eco-friendly low-VOC materials",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "kota-laksamana-condominium-skim-coat",
    title: "Kota Laksamana High-Rise Condominium",
    category: "Plastering & Skim Coat",
    status: "Completed",
    company: "AM Management Group Sdn. Bhd.",
    location: "Kota Laksamana, Melaka",
    client: "Faithful Development Corp",
    contractValue: "RM 1,600,000.00",
    timeline: "2020 - 2021",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Internal wall plastering and skim coat application across 24 floors of luxury sea-view apartments.",
    scopeOfWork: [
      "24-Storey Internal Skim Coating",
      "Bathroom & Balcony Cement Rendering",
      "Lift Lobby Decorative Plastering",
      "Surface Cracking Remediation",
    ],
    highlights: [
      "Successfully completed 280 residential units",
      "Achieved QLASSIC rating above 80%",
      "Specialized anti-crack plaster technology applied",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    slug: "mitc-exhibition-hall-expansion",
    title: "MITC Convention Center Structural Wall Addition",
    category: "Brickwork",
    status: "Completed",
    company: "AM Management Group Sdn. Bhd.",
    location: "Ayer Keroh, Melaka",
    client: "Melaka State Development Corporation",
    contractValue: "RM 510,000.00",
    timeline: "2022",
    heroImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Industrial brickwork, firewall partitions, and sound-insulated wall masonry for exhibition hall extension.",
    scopeOfWork: [
      "Heavy Concrete Block Masonry",
      "Acoustic Insulation Partition Walls",
      "Structural Steel Tie-in Brickwork",
      "Smooth Sand-cement Plastering",
    ],
    highlights: [
      "Met 2-hour fire resistance rating requirements",
      "Zero disruption to ongoing convention center operations",
      "Finished strictly on budget",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
    ],
  },
];
