export interface JobPosition {
  id: string;
  title: string;
  department: string;
  company: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  description: string;
  requirements: string[];
}

export const POSITIONS_DATA: JobPosition[] = [
  // 1. AM Management Group
  {
    id: "site-supervisor-construction",
    title: "Construction Site Supervisor",
    department: "Management & Investment",
    company: "AM Management Group",
    location: "Melaka / Selangor",
    type: "Full-Time",
    description:
      "Oversee daily plastering, brickwork, and structural sub-contracting operations on active project sites.",
    requirements: [
      "Minimum 3 years of experience in structural or finishing works",
      "Ability to read architectural drawings and manage site sub-contractors",
      "CIDB Green Card holder required",
    ],
  },
  {
    id: "quantity-surveyor",
    title: "Quantity Surveyor (QS)",
    department: "Management & Investment",
    company: "AM Management Group",
    location: "Melaka HQ",
    type: "Full-Time",
    description:
      "Handle contract claims, material estimation, and sub-contractor billings for residential and commercial developments.",
    requirements: [
      "Diploma or Degree in Quantity Surveying or Civil Engineering",
      "Proficient in contract valuation and site progress claims",
      "Minimum 2 years relevant experience in construction sector",
    ],
  },

  // 2. BM Magnitude Services
  {
    id: "cleaning-operations-supervisor",
    title: "Cleaning Operations Supervisor",
    department: "Cleaning & Services",
    company: "BM Magnitude Services",
    location: "Kuala Lumpur / Selangor",
    type: "Full-Time",
    description:
      "Supervise daily commercial and residential cleaning operations, manage cleaning staff, and maintain service quality standards.",
    requirements: [
      "Minimum 2 years experience in facility cleaning or housekeeping management",
      "Strong leadership and team scheduling skills",
      "Valid driving license and willingness to travel between sites",
    ],
  },
  {
    id: "facade-cleaning-specialist",
    title: "High-Rise Cleaning Specialist",
    department: "Cleaning & Services",
    company: "BM Magnitude Services",
    location: "Kuala Lumpur",
    type: "Contract",
    description:
      "Perform exterior glass and facade cleaning for high-rise commercial buildings following strict safety protocols.",
    requirements: [
      "Certified in Working at Heights / Rope Access (IRATA or equivalent)",
      "Minimum 1 year experience in high-rise window and facade cleaning",
      "Good physical fitness and adherence to site safety guidelines",
    ],
  },

  // 3. Hidensypro Sdn. Bhd.
  {
    id: "machinery-maintenance-technician",
    title: "Machinery Maintenance Technician",
    department: "Machinery & Engineering",
    company: "Hidensypro Sdn. Bhd.",
    location: "Melaka",
    type: "Full-Time",
    description:
      "Perform routine maintenance, troubleshooting, and repair work on heavy industrial machinery and equipment.",
    requirements: [
      "Diploma or Certificate in Mechanical/Electrical Engineering",
      "Minimum 2-3 years hands-on machinery maintenance experience",
      "Good knowledge of hydraulic and pneumatic systems",
    ],
  },
  {
    id: "equipment-sales-engineer",
    title: "Equipment Sales Engineer",
    department: "Machinery & Engineering",
    company: "Hidensypro Sdn. Bhd.",
    location: "Selangor",
    type: "Full-Time",
    description:
      "Promote industrial machinery solutions to manufacturing clients and build strong client relationships across Malaysia.",
    requirements: [
      "Degree or Diploma in Engineering or Business Management",
      "Proven track record in B2B technical or industrial equipment sales",
      "Excellent communication and negotiation skills",
    ],
  },

  // 4. CM Plantation Services
  {
    id: "plantation-field-executive",
    title: "Plantation Field Executive",
    department: "Plantation & Agriculture",
    company: "CM Plantation Services",
    location: "Johor / Pahang",
    type: "Full-Time",
    description:
      "Manage daily field operations, crop harvesting routines, and field worker deployment across agricultural estates.",
    requirements: [
      "Degree or Diploma in Agricultural Science or Forestry",
      "Minimum 2 years experience in plantation or agricultural management",
      "Willingness to base at regional estate locations",
    ],
  },
  {
    id: "agrronomist-consultant",
    title: "Agricultural Agronomist",
    department: "Plantation & Agriculture",
    company: "CM Plantation Services",
    location: "Melaka",
    type: "Contract",
    description:
      "Conduct soil health tests, recommend crop fertilization programs, and optimize overall yield performance.",
    requirements: [
      "Bachelor's Degree in Agronomy, Crop Science, or Soil Science",
      "Strong analytical skills in soil chemistry and crop nutrition",
      "Ability to prepare technical agronomic evaluation reports",
    ],
  },

  // 5. AM Multi Trade Empire
  {
    id: "retail-store-manager",
    title: "Retail Operations Manager",
    department: "Retail & Trading",
    company: "AM Multi Trade Empire",
    location: "Melaka",
    type: "Full-Time",
    description:
      "Oversee store sales target achievement, stock inventory control, and customer service standards across retail outlets.",
    requirements: [
      "Minimum 3 years experience in retail store management",
      "Strong inventory management and point-of-sale system knowledge",
      "Exceptional leadership and customer handling skills",
    ],
  },
  {
    id: "procurement-executive-trading",
    title: "Procurement Executive",
    department: "Retail & Trading",
    company: "AM Multi Trade Empire",
    location: "Kuala Lumpur",
    type: "Full-Time",
    description:
      "Source suppliers, negotiate bulk purchase prices, and manage supply chain logistics for retail and trading goods.",
    requirements: [
      "Diploma/Degree in Supply Chain Management or Business Administration",
      "Minimum 2 years experience in product sourcing or vendor management",
      "Fluency in English and Bahasa Malaysia",
    ],
  },

  // 6. MA Travel and Tour
  {
    id: "tour-consultant-executive",
    title: "Travel & Tour Consultant",
    department: "Travel & Tourism",
    company: "MA Travel and Tour",
    location: "Melaka HQ",
    type: "Full-Time",
    description:
      "Design travel packages, assist clients with itinerary planning, visa advice, and flight/hotel bookings.",
    requirements: [
      "Diploma in Hospitality, Tourism, or Travel Management",
      "Familiarity with global flight booking GDS systems (Amadeus/Sabre)",
      "Strong interpersonal skills and passion for travel consulting",
    ],
  },
  {
    id: "tour-bus-driver-guide",
    title: "Licensed Tour Guide & Driver",
    department: "Travel & Tourism",
    company: "MA Travel and Tour",
    location: "Melaka / Penang",
    type: "Part-Time",
    description:
      "Provide informative guided tours for local and international travel groups while maintaining safe transportation.",
    requirements: [
      "Valid PSV License and Official Tourist Guide License (MOTAC)",
      "Fluent in English and local languages",
      "Friendly demeanor with excellent knowledge of Malaysian tourist destinations",
    ],
  },
];

export const COMPANIES_LIST = [
  "AM Management Group",
  "BM Magnitude Services",
  "Hidensypro Sdn. Bhd.",
  "CM Plantation Services",
  "AM Multi Trade Empire",
  "MA Travel and Tour",
];
