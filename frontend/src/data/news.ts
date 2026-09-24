export interface NewsItem {
  slug: string;
  title: string;
  category: "Construction" | "Corporate" | "Project Launch" | "Safety";
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;
  summary: string;
  content: string[];
  gallery?: string[];
  isFeatured?: boolean;
}

export const NEWS_DATA: NewsItem[] = [
  {
    slug: "am-group-expands-housing-development-melaka",
    title: "AM Group Expands Residential Footprint with New Melaka Project",
    category: "Project Launch",
    author: "Corporate Communications",
    date: "September 02, 2026",
    readTime: "4 min read",
    isFeatured: true,
    featuredImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600",
    summary:
      "AM Management Group has officially broken ground on a new multi-million ringgit residential development project in Ayer Keroh, Melaka.",
    content: [
      "AM Management Group is proud to announce the commencement of its latest mixed-residential project in Melaka. Spanning over 15 acres, this development integrates modern architectural standards with sustainable building practices.",
      "Our structural and sub-contracting teams are leveraging high-precision brickwork and advanced plastering systems to ensure high structural integrity and energy efficiency across all housing units.",
      "This initiative aligns with our strategic commitment to expanding structural capacity while generating sustainable value for local communities and investors.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
    ],
  },
  {
    slug: "cidb-safety-excellence-award-2026",
    title: "AM Management Group Achieves Outstanding Site Safety Benchmark",
    category: "Safety",
    author: "HSE Division",
    date: "August 18, 2026",
    readTime: "3 min read",
    isFeatured: false,
    featuredImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    summary:
      "Our site supervisory teams achieve zero-loss time injury across all active commercial plastering and construction sites.",
    content: [
      "Safety remains the highest priority across all sub-contracting sites managed by AM Management Group Sdn. Bhd. Through rigorous compliance with CIDB Green Card guidelines, our site teams maintained zero lost-time injuries over the past fiscal year.",
    ],
  },
  {
    slug: "machinery-fleet-upgrade-hidensypro",
    title: "Hidensypro Fleet Enhancement Boosts Sub-Contracting Efficiency",
    category: "Construction",
    author: "Engineering Support",
    date: "July 12, 2026",
    readTime: "5 min read",
    isFeatured: false,
    featuredImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800",
    summary:
      "New heavy machinery and plastering equipment units have been added to streamline project delivery timelines.",
    content: [
      "To keep pace with growing site demand across Melaka and Selangor, Hidensypro has upgraded its machinery fleet with heavy-duty plastering pumps and site support units.",
    ],
  },
];
