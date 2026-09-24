"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck2, MapPin } from "lucide-react";
import { usePublicSettings } from "@/features/settings/usePublicSettings";
import GroupInfographic from "./GroupInfographic";

/**
 * Home hero: compact (not full-screen) blueprint band with the group-structure
 * infographic.
 */
const Banner = () => {
  const settings = usePublicSettings();
  const heroTitle = (settings.siteTagline || "One group. Multiple Business").replace(/Busness/g, "Business");

  return (
    <section aria-labelledby="home-hero-title" className="relative">
      <div className="bg-blueprint relative overflow-hidden text-white">
        {/* soft light from the hub side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 size-[46rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(35_66_121/0.9),transparent_65%)]"
        />

        <div className="container relative mx-auto grid items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-6 lg:py-10 xl:gap-12 xl:py-14">
          <div className="order-2 min-w-0 text-center lg:order-1 lg:col-span-6 lg:pl-4 lg:text-left xl:col-span-6 xl:pl-0">
            <p className="am-rise flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/70 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <CalendarCheck2 className="size-4 text-secondary" />
                Established 2012
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-secondary" />
                {settings.contactAddress || "Melaka, Malaysia"}
              </span>
            </p>

            <h1
              id="home-hero-title"
              className="am-rise font-display mt-5 max-w-2xl text-[1.75rem] text-white sm:text-[2.1rem] lg:text-[2.5rem]"
              style={{ animationDelay: "0.08s" }}
            >
              {heroTitle}
            </h1>

            <p
              className="am-rise mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg lg:mx-0"
              style={{ animationDelay: "0.16s" }}
            >
              {settings.siteDescription}
            </p>

            <div
              className="am-rise mt-8 flex items-center justify-center gap-2 sm:gap-3 lg:justify-start"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                href="/companies"
                className="group inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md bg-secondary px-3 text-xs font-bold text-white shadow-[0_12px_30px_-10px_rgb(251_115_31/0.7)] transition-colors hover:bg-secondary sm:h-12 sm:flex-none sm:gap-2 sm:px-6 sm:text-sm"
              >
                Explore our companies
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 flex-1 items-center justify-center rounded-md border border-white/25 px-3 text-xs font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-[#10264a] sm:h-12 sm:flex-none sm:px-6 sm:text-sm"
              >
                Discuss a project
              </Link>
            </div>

            <ul
              className="am-rise mx-auto mt-8 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-5 text-white lg:mx-0"
              style={{ animationDelay: "0.32s" }}
            >
              {[
                { value: "G5", label: "CIDB grade" },
                { value: "10+", label: "Years operating" },
                { value: "6", label: "Business sectors" },
              ].map((item) => (
                <li key={item.label} className="px-1 sm:pr-4 sm:pl-0">
                  <div className="font-display text-2xl sm:text-3xl">{item.value}</div>
                  <div className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-white/60 sm:text-sm lg:justify-start">
                    <BadgeCheck className="size-3.5 text-secondary" />
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 min-w-0 lg:order-2 lg:col-span-6 xl:col-span-6">
            <GroupInfographic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
