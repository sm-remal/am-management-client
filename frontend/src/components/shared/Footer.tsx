"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Logo from "../common/Logo";
import { usePublicSettings } from "@/features/settings/usePublicSettings";

const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const DEFAULT_SITE_DESCRIPTION = "";

const Footer = () => {
  const settings = usePublicSettings();

  const siteDescription = settings.siteDescription || DEFAULT_SITE_DESCRIPTION;

  return (
    <footer className="bg-[#234279] text-blue-100 border-t border-blue-800/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Corporate Intro */}
          <div className="space-y-4">
            <div className="brightness-0 invert">
              <Logo />
            </div>
            <p className="text-base leading-7 text-blue-100/80">
              {siteDescription}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {settings.facebookUrl && (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
              )}
              {settings.linkedinUrl && (
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>
              )}
              {settings.instagramUrl && (
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              )}
              {settings.twitterUrl && (
                <a
                  href={settings.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors"
                  aria-label="Twitter / X"
                >
                  <FaTwitter size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="hover:text-white transition-colors"
                >
                  Our Group Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Divisions / Group Entities */}
          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link
                  href="/companies/bm-magnitude-services"
                  className="hover:text-white transition-colors"
                >
                  BM Magnitude (Cleaning & Services)
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/hidensypro"
                  className="hover:text-white transition-colors"
                >
                  Hidensypro (Machinery & Tech)
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/cm-plantation-services"
                  className="hover:text-white transition-colors"
                >
                  CM Plantation (Agriculture)
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/am-multi-trade-empire"
                  className="hover:text-white transition-colors"
                >
                  AM Multi Trade (Retail Goods)
                </Link>
              </li>
              <li>
                <Link
                  href="/companies/ma-travel-and-tour"
                  className="hover:text-white transition-colors"
                >
                  MA Travel (Ticketing & Booking)
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-start gap-3">
                <MdLocationOn
                  className="text-blue-200 mt-0.5 shrink-0"
                  size={20}
                />
                <span>
                  {settings.siteName} Sdn. Bhd.
                  <br />
                  {settings.contactAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-blue-200 shrink-0" size={20} />
                <a
                  href={phoneHref(settings.contactPhone)}
                  className="hover:text-white transition-colors"
                >
                  {settings.contactPhone}
                </a>
              </li>
              {settings.whatsappUrl && (
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="text-blue-200 shrink-0" size={20} />
                  <a
                    href={settings.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              <li className="flex items-center gap-3">
                <MdEmail className="text-blue-200 shrink-0" size={20} />
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {settings.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 gap-3 text-center text-[15px] font-medium text-white md:grid-cols-3 md:items-center">
          <p className="justify-self-center px-1.5 py-0.5 md:justify-self-start">
            Copyright &copy; {new Date().getFullYear()} {settings.siteName}. All
            Rights Reserved.
          </p>

          <p className="justify-self-center px-1.5 py-0.5">
            Designed & Developed by{" "}
            <a
              href="https://iconicsoftltd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Iconic Soft Ltd.
            </a>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-self-end">
            <Link href="/privacy" className="px-1.5 py-0.5">
              Privacy Policy
            </Link>
            <Link href="/terms" className="px-1.5 py-0.5">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
