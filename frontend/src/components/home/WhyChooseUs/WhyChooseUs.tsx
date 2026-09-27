import Image from "next/image";
import {
  Building2,
  Layers,
  ShieldCheck,
  Users,
  Target,
  Wallet,
} from "lucide-react";

const points = [
  {
    title: "Proven Track Record",
    desc: "10+ years of corporate stability executing multi-million RM contracts in Malaysia.",
    icon: Building2,
    bg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Diversified Expertise",
    desc: "A single conglomerate providing end-to-end solutions across 6 key industries.",
    icon: Layers,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Quality & Compliance",
    desc: "Fully CIDB registered with trusted partnerships alongside top Tier-1 developers.",
    icon: ShieldCheck,
    bg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Structured Leadership",
    desc: "Guided by seasoned Directors and a strategic corporate executive board.",
    icon: Users,
    bg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Long-Term Vision",
    desc: "Deeply committed to client satisfaction, worker safety, and sustainable practices.",
    icon: Target,
    bg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Financial Stability",
    desc: "Strong financial foundation with consistent operational growth and capital strength.",
    icon: Wallet,
    bg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
];

import img from "../../../assets/images/civil.jpg";

export default function WhyChooseUs() {
  return (
    <section className="md:py-10 py-7 bg-white text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
       {/* Title */}
<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
  <h2 className="text-3xl font-bold text-primary tracking-tight md:text-4xl">
    WHY CHOOSE{" "}
    <span className="text-primary">AM MANAGEMENT GROUP</span>
  </h2>

  <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
   AM Management Group delivers reliable and sustainable business
    solutions across multiple sectors in Malaysia.
  </p>
</div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
          {/* Left Side - Points */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${pt.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${pt.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-[17px] leading-snug md:text-[18px]">
                        {pt.title}
                      </h3>
                      <p className="mt-1.5 text-slate-600 text-[15px] leading-relaxed md:text-base">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - 2 Images */}
          <div className="flex w-full flex-col gap-5 lg:col-span-5 lg:self-start">
            {/* Image 1 */}
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-md border-[3px] border-secondary/30 shadow-lg lg:ml-auto lg:mr-0 lg:h-[400px] lg:aspect-auto xl:h-[435px] 2xl:h-[390px]">
              <Image
                src={img}
                alt="AM Management Group"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}