import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";

export default function CareerCTA() {
  return (
    <section className="py-16 bg-gray-100 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-primary/80 border border-slate-700/80 p-8 md:p-12 rounded-md backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-white text-sm font-semibold">
              <Briefcase className="w-4 h-4 text-secondary" />
              <span>Career Opportunities</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Grow Your Career With Us
            </h2>
            <p className="text-slate-300 text-sm max-w-lg">
              We are constantly looking for talented professionals, skilled
              workers, and passionate leaders to join our growing business
              group.
            </p>
          </div>

          <Link
            href="/careers"
            className="shrink-0 px-6 py-3.5 bg-secondary hover:bg-secondary text-white font-bold rounded-md transition-all shadow-lg inline-flex items-center gap-2 group"
          >
            <span>Explore Careers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
