import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";

interface CompanyCardProps {
  name: string;
  href: string;
  description: string;
  index?: number;
}

const CompanyCard = ({ name, href, description, index }: CompanyCardProps) => {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

      <div className="relative z-10">
        {/* Top row */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </div>

          {index !== undefined && (
            <span className="text-sm font-medium text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="max-w-[280px] text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
            {name}
          </h3>

          <p className="mt-3 max-w-[300px] text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
          <span className="text-sm font-medium text-foreground">
            Explore company
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
