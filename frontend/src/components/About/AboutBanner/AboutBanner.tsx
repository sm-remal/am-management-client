import React from "react";
import Image from "next/image"; // Next.js Image component import করুন

interface AboutData {
  title: string;
  description: string;
  descriptionClassName?: string;
}

import aboutBanner from "../../../assets/banner/About_banner.jpg";

const AboutBanner: React.FC<AboutData> = ({
  title,
  description,
  descriptionClassName = "",
}) => {
  return (
    <div className="relative text-white h-[240px] md:h-[290px] px-4 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Next.js Optimized Background Image */}
      <Image
        src={aboutBanner}
        alt="About Banner"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Dark Overlay (টেক্সট সহজে পড়ার জন্য) */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Glow Effects */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider leading-tight drop-shadow-md">
          {title}
        </h1>

        {/* Subtitle / Effective Date */}
        <p
          className={`mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-normal leading-relaxed text-white/90 tracking-wide ${descriptionClassName}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
