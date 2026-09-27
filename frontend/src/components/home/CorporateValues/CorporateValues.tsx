import { Shield, Target, Award, Rocket } from "lucide-react";

const cardColors = ["#fb731f", "#234279"];

const values = [
  {
    title: "Integrity",
    desc: "Uncompromising honesty, transparency, and high ethical standards in every transaction.",
    icon: Shield,
  },
  {
    title: "Excellence",
    desc: "Delivering top-tier quality, technical precision, and safety across all company operations.",
    icon: Target,
  },
  {
    title: "Reliability",
    desc: "Punctual project delivery, dependable service, and long-standing corporate trust.",
    icon: Award,
  },
  {
    title: "Sustainable Growth",
    desc: "Continuous innovation aimed at creating economic value and sustainable social impact.",
    icon: Rocket,
  },
];

export default function CorporateValues() {
  return (
    <section className="md:py-15 py-7 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">OUR CORE VALUES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-md border border-white/20 shadow-sm text-center space-y-4 text-white"
                style={{ backgroundColor: cardColors[i % cardColors.length] }}
              >
                <div className="w-14 h-14 bg-white/20 text-white rounded-md flex items-center justify-center mx-auto">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-2xl text-white">{v.title}</h3>
                <p className="text-base text-white leading-7">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
