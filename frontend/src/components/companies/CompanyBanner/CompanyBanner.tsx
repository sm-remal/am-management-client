import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerBg from "../../../assets/banner/About_banner.jpg";

interface Company {
  number?: string;
  category?: string;
  name: string;
  description?: string | null;
  shortDescription?: string | null;
}

interface CompanyBannerProps {
  company: Company;
}

const CompanyBanner = ({ company }: CompanyBannerProps) => {
  return (
    <section className="relative w-full max-h-[350px]  md:max-h-[450px] flex items-center overflow-hidden py-16 sm:py-24 text-white">
      {/* 1. Background Image with Next.js Image Component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerBg}
          alt={company?.name || "Banner Background"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Gradient Overlay for text visibility */}
        <div className="absolute inset-0 bg-slate-950/20 bg-gradient-to-r from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      {/* 2. Content Layer (z-10 ensures it sits above image and overlay) */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Category Tag & Number */}
          <div className="flex items-center gap-3">
            {company?.number && (
              <span className="text-sm font-bold text-white">
                {company.number}
              </span>
            )}

            <span className="h-px w-10 bg-white hidden md:block" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300 hidden md:block">
              {company?.category || "Group Subsidiary"}
            </span>
          </div>

          {/* Company Title */}
          <h1 className="mt-6 text-4xl uppercase font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-5xl text-white text-center md:text-left">
            {company?.name}
          </h1>

          {/* Subtitle / Short Tagline */}
          {company?.description && (
            <p className="mt-4 text-sm font-semibold text-white sm:text-base hidden md:block">
              {company.description}
            </p>
          )}

          {/* Short Description */}
          {company?.shortDescription && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg hidden md:block">
              {company.shortDescription}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-8  hidden md:flex flex-wrap gap-4 hidden md:block">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary/90 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-secondary/60 shadow-lg"
            >
              Explore Services
              <ArrowRight size={17} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors backdrop-blur-md hover:bg-white hover:text-slate-950"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;
