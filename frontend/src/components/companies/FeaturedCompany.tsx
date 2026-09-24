import Link from "next/link";
import { ArrowUpRight, Building2, CheckCircle2, MapPin } from "lucide-react";

interface FeaturedCompanyProps {
  name: string;
  href: string;
  description: string;
  location?: string;
  highlights?: string[];
}

const FeaturedCompany = ({
  name,
  href,
  description,
  location,
  highlights = [],
}: FeaturedCompanyProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Content */}
        <div className="p-7 sm:p-10 lg:p-14">
          {/* Label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Featured Company
          </div>

          {/* Icon */}
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <Building2 className="h-6 w-6" />
          </div>

          {/* Title */}
          <h3 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {name}
          </h3>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>

          {/* Location */}
          {location && (
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{location}</span>
            </div>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <div
                  key={`${highlight}-${index}`}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <span className="text-sm leading-6 text-muted-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-10">
            <Link
              href={href}
              className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Company
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative min-h-[360px] overflow-hidden border-t border-border bg-muted/40 lg:min-h-full lg:border-l lg:border-t-0">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Main visual */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative flex aspect-square w-full max-w-[330px] items-center justify-center rounded-[2rem] border border-border bg-background shadow-2xl">
              {/* Rings */}
              <div className="absolute h-[72%] w-[72%] rounded-full border border-primary/20" />
              <div className="absolute h-[52%] w-[52%] rounded-full border border-primary/30" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-xl">
                <Building2 className="h-12 w-12" />
              </div>

              {/* Small floating cards */}
              <div className="absolute left-3 top-8 rounded-xl border border-border bg-background px-4 py-3 shadow-lg">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Established
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  2012
                </p>
              </div>

              <div className="absolute bottom-8 right-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lg">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Location
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompany;
