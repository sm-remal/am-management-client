import {
  HardHat,
  Sparkles,
  Wrench,
  Trees,
  Store,
  PlaneTakeoff,
} from "lucide-react";

const cardColors = ["#fb731f", "#234279"];

const sectors = [
  {
    title: "Construction & Real Estate",
    desc: "Residential & Commercial Developments, Brickworks, Plastering, Skim Coat.",
    icon: HardHat,
  },
  {
    title: "Facility Support & Cleaning",
    desc: "Professional commercial cleaning, site maintenance, and facility management.",
    icon: Sparkles,
  },
  {
    title: "Machinery & Engineering",
    desc: "Industrial equipment solutions, machinery rental, and technical operations.",
    icon: Wrench,
  },
  {
    title: "Plantation & Agriculture",
    desc: "Sustainable plantation management, field workforce, and agricultural services.",
    icon: Trees,
  },
  {
    title: "Retail & Consumer Trading",
    desc: "Convenience store chains, daily essential goods trading, and logistics.",
    icon: Store,
  },
  {
    title: "Travel & Tour Operations",
    desc: "Airline ticketing, corporate travel booking, and custom tourism packages.",
    icon: PlaneTakeoff,
  },
];

export default function BusinessSectors() {
  return (
    <section className="bg-white py-7 text-[#001739] md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">BUSINESS SECTORS</h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-[#001739] md:text-lg">
            Discover the key industries and core business sectors where AM
            Management Group operates to drive innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="flex min-h-[128px] items-start gap-4 rounded-lg border border-white/20 p-6 text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: cardColors[idx % cardColors.length] }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/20 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold leading-snug text-white md:text-[1.35rem]">
                    {sec.title}
                  </h3>
                  <p className="text-base leading-7 text-white">
                    {sec.desc}
                  </p> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
