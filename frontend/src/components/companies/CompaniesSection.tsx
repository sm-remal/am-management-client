"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Factory,
  Globe2,
  Leaf,
  Loader2,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import { getPublishedCompanies } from "@/features/companies/company.api";
import type {
  BusinessCategory,
  CompanyRecord,
} from "@/features/companies/company.types";

const categoryLabels: Record<BusinessCategory, string> = {
  MANAGEMENT_INVESTMENT: "Management & Investment",
  CLEANING_SERVICES: "Cleaning & Services",
  ENGINEERING_MACHINERY: "Machinery & Engineering",
  PLANTATION_AGRICULTURE: "Plantation & Agriculture",
  RETAIL_TRADING: "Retail & Trading",
  TRAVEL_TOURISM: "Travel & Tourism",
};

const getCategoryLabel = (category: BusinessCategory) =>
  categoryLabels[category] ?? category;

/* -------------------------------------------------------------------------- */
/* Company Icon                                                               */
/* -------------------------------------------------------------------------- */

const CompanyIcon = ({
  category,
  size,
}: {
  category: BusinessCategory;
  size: number;
}) => {
  switch (category) {
    case "MANAGEMENT_INVESTMENT":
      return <Building2 size={size} />;
    case "CLEANING_SERVICES":
      return <Sparkles size={size} />;
    case "ENGINEERING_MACHINERY":
      return <Factory size={size} />;
    case "PLANTATION_AGRICULTURE":
      return <Leaf size={size} />;
    case "RETAIL_TRADING":
      return <ShoppingBag size={size} />;
    case "TRAVEL_TOURISM":
      return <Globe2 size={size} />;
    default:
      return <Building2 size={size} />;
  }
};

/* -------------------------------------------------------------------------- */
/* Main Section                                                               */
/* -------------------------------------------------------------------------- */

const CompaniesSection = () => {
  const [companies, setCompanies] = useState<CompanyRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCompanies = async () => {
      setIsLoading(true);

      try {
        const result = await getPublishedCompanies({ limit: 50 });
        const list = result.data?.companies ?? [];

        const sorted = [...list].sort((a, b) => {
          if (a.isMainCompany && !b.isMainCompany) return -1;
          if (!a.isMainCompany && b.isMainCompany) return 1;
          return (a.displayOrder ?? 0) - (b.displayOrder ?? 0);
        });

        setCompanies(sorted);
      } catch {
        setCompanies([]);
      } finally {
        setIsLoading(false);
      }
    };

    void loadCompanies();
  }, []);

  return (
    <section className="bg-gray-100 py-10 md:py-13 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary lg:text-4xl">
            EXPLORE OUR COMPANIES
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore the specialized companies operating under the umbrella of AM
            Management Group Sdn. Bhd. and discover their areas of expertise,
            services and business operations.
          </p>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div className="flex min-h-64 flex-col items-center justify-center text-muted-foreground">
            <Loader2 className="mb-3 size-8 animate-spin text-primary" />
            <p className="text-sm">Loading companies...</p>
          </div>
        ) : companies.length === 0 ? (
          <div className="rounded-md border border-border bg-card p-10 text-center text-muted-foreground">
            No published companies available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CompaniesSection;

const CompanyCard = ({ company }: { company: CompanyRecord }) => {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group relative block w-full transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative w-full overflow-visible filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)]">
        {/* SVG Shape - elegant notch (laptop-এর জন্য optimized) */}
        <svg
          className="w-full h-auto text-white fill-current block"
          viewBox="0 0 350 310"
          preserveAspectRatio="none"
        >
          <path d="M 10 0 H 255 C 270 0 278 7 282 18 C 289 38 296 48 310 56 C 320 62 330 64 340 64 C 346 64 350 69 350 76 V 300 C 350 305.523 345.523 310 340 310 H 10 C 4.477 310 0 305.523 0 300 V 10 C 0 4.477 4.477 0 10 0 Z" />
        </svg>

        {/* Logo Badge - breakpoint based (permanent clean solution) */}
        <div
          className="absolute z-20 flex items-center justify-center rounded-full bg-white overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105
          top-1 right-1 h-9 w-9
          sm:top-1.5 sm:right-1.5 sm:h-10 sm:w-10
          md:top-1.5 md:right-1.5 md:h-11 md:w-11
          lg:top-1.5 lg:right-1.5 lg:h-[48px] lg:w-[48px]
          xl:top-1 xl:right-1 xl:h-[52px] xl:w-[52px]
        "
        >
          {company.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={company.logo}
              alt={company.name}
              className="object-contain
                h-[65%] w-[65%]
                sm:h-[68%] sm:w-[68%]
                md:h-[70%] md:w-[70%]
                lg:h-[70%] lg:w-[70%]
                xl:h-[72%] xl:w-[72%]
              "
            />
          ) : (
            <div className="text-white">
              <CompanyIcon category={company.category} size={16} />
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="absolute inset-0 z-10 flex flex-col p-4 sm:p-5">
          <div className="h-[78px] sm:h-[82px] md:h-[86px] pr-12 sm:pr-13 md:pr-14 lg:pr-14 xl:pr-15">
            <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-bold tracking-tight text-[#111827] leading-snug line-clamp-1">
              {company.name}
            </h3>
            <p className="mt-1.5 text-[13.5px] sm:text-[14px] md:text-[15px] leading-relaxed text-[#6B7280] font-normal line-clamp-2">
              {company.shortDescription ||
                company.description ||
                getCategoryLabel(company.category)}
            </p>
          </div>

          <div className="relative mt-2 sm:mt-2.5 md:mt-3 flex-1 w-full overflow-hidden rounded-md bg-slate-100">
            {company.coverImage ? (
              <Image
                src={company.coverImage}
                alt={company.name}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : company.logo ? (
              <div className="flex h-full w-full items-center justify-center bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-12 object-contain opacity-70"
                />
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-100 text-[#072B61]">
                <CompanyIcon category={company.category} size={32} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
