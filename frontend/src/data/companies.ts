export interface Company {
  name: string;
  slug: string;
  href: string;
  description: string;
  shortDescription: string;
  category: string;
  number: string;
}

export const companies: Company[] = [
  {
    name: "AM Management Group",
    slug: "am-management-group",
    href: "/companies/am-management-group",
    description: "Management & Investment",
    shortDescription:
      "Corporate management, investment and strategic business development.",
    category: "Corporate",
    number: "01",
  },
  {
    name: "BM Magnitude Services",
    slug: "bm-magnitude-services",
    href: "/companies/bm-magnitude-services",
    description: "Cleaning & Services",
    shortDescription:
      "Professional cleaning and facility support services for commercial environments.",
    category: "Services",
    number: "02",
  },
  {
    name: "Hidensypro Sdn. Bhd.",
    slug: "hidensypro",
    href: "/companies/hidensypro",
    description: "Machinery & Engineering",
    shortDescription:
      "Machinery, technical and engineering-related business solutions.",
    category: "Engineering",
    number: "03",
  },
  {
    name: "CM Plantation Services",
    slug: "cm-plantation-services",
    href: "/companies/cm-plantation-services",
    description: "Plantation & Agriculture",
    shortDescription:
      "Agriculture and plantation-related operations with a focus on sustainable growth.",
    category: "Agriculture",
    number: "04",
  },
  {
    name: "AM Multi Trade Empire",
    slug: "am-multi-trade-empire",
    href: "/companies/am-multi-trade-empire",
    description: "Retail & Trading",
    shortDescription:
      "Retail, trading and consumer-focused business activities.",
    category: "Retail",
    number: "05",
  },
  {
    name: "MA Travel and Tour",
    slug: "ma-travel-and-tour",
    href: "/companies/ma-travel-and-tour",
    description: "Travel & Tourism",
    shortDescription: "Travel, tourism and related customer-focused services.",
    category: "Travel",
    number: "06",
  },

  // =====================================================
  // UPCOMING COMPANY
  // =====================================================
  {
    name: "New Business Venture",
    slug: "upcoming-company",
    href: "/companies/upcoming-company",
    description: "Coming Soon",
    shortDescription:
      "A new business venture currently under development as part of the group's future expansion.",
    category: "Upcoming",
    number: "07",
  },
];
