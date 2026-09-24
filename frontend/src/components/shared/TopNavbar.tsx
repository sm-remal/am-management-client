"use client";

import { FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { usePublicSettings } from "@/features/settings/usePublicSettings";

const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const TopNavbar = () => {
  const settings = usePublicSettings();

  return (
    <div className="bg-secondary text-white text-sm hidden md:block">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2.5 gap-2 sm:gap-0">
          {/* Left Side - Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a
              href={phoneHref(settings.contactPhone)}
              className="flex items-center gap-2 hover:text-white/90 transition-colors"
            >
              <FiPhone size={15} />
              <span>{settings.contactPhone}</span>
            </a>

            <span className="hidden sm:inline text-white/50">|</span>

            <a
              href={`mailto:${settings.contactEmail}`}
              className="flex items-center gap-2 hover:text-white/90 transition-colors"
            >
              <FiMail size={15} />
              <span>{settings.contactEmail}</span>
            </a>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-4">
            {settings.facebookUrl && (
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>
            )}
            {settings.linkedinUrl && (
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </a>
            )}
            {settings.instagramUrl && (
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
            )}
            {settings.twitterUrl && (
              <a
                href={settings.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Twitter / X"
              >
                <FaTwitter size={15} />
              </a>
            )}
            {settings.whatsappUrl && (
              <a
                href={settings.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
