"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { usePublicSettings } from "@/features/settings/usePublicSettings";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerImg1 from "../../../assets/banner/banner1.jpg";
import bannerImg2 from "../../../assets/banner/banner2.jpg";

const Banner: React.FC = () => {
  const settings = usePublicSettings();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const desktopImages =
    isMounted && settings.heroBannersDesktop.length
      ? settings.heroBannersDesktop
      : [bannerImg1, bannerImg2];
  const mobileImages =
    isMounted && settings.heroBannersMobile.length
      ? settings.heroBannersMobile
      : desktopImages;

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="hero-banner-swiper"
      >
        {desktopImages.map((desktopImage, index) => {
          const mobileImage =
            mobileImages[index] || mobileImages[mobileImages.length - 1];

          return (
            <SwiperSlide key={`${desktopImage}-${index}`}>
              <div className="relative w-full aspect-20/10 md:aspect-25/8 lg:aspect-25/7">
                {/* ====== Desktop Image ====== */}
                {/* 'hidden md:block' ক্লাসটি নিশ্চিত করে যে এই ইমেজটি শুধুমাত্র ডেস্কটপে দেখাবে */}
                <Image
                  src={desktopImage}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover hidden md:block"
                  sizes="(min-width: 768px) 100vw, 0vw"
                />

                {/* ====== Mobile Image ====== */}
                {/* 'block md:hidden' ক্লাসটি নিশ্চিত করে যে এই ইমেজটি শুধুমাত্র মোবাইলে দেখাবে */}
                <Image
                  src={mobileImage}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover block md:hidden"
                  sizes="(max-width: 767px) 100vw, 0vw"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style jsx global>
        {`
          /* ================================
           Navigation
        ================================= */

          .hero-banner-swiper .swiper-button-next,
          .hero-banner-swiper .swiper-button-prev {
            width: 38px;
            height: 38px;
            border-radius: 9999px;
            padding: 10px 10px;

            color: #ffffff !important;
            background: rgba(0, 0, 0, 0.25);

            transition: all 0.25s ease;
          }

          .hero-banner-swiper .swiper-button-next:hover,
          .hero-banner-swiper .swiper-button-prev:hover {
            background: #fb731f;
          }

          .hero-banner-swiper .swiper-button-next::after,
          .hero-banner-swiper .swiper-button-prev::after {
            font-size: 17px !important;
            font-weight: 700;
          }

          /* ================================
           Pagination
        ================================= */

          .hero-banner-swiper .swiper-pagination {
            bottom: 18px !important;
          }

          .hero-banner-swiper .swiper-pagination-bullet {
            width: 9px;
            height: 9px;

            background: #ffffff !important;
            opacity: 0.65;

            transition: all 0.25s ease;
          }

          .hero-banner-swiper .swiper-pagination-bullet-active {
            width: 24px;
            border-radius: 9999px;

            background: #fb731f !important;
            opacity: 1;
          }

          /* ================================
           Mobile (Styling for Navigation/Pagination)
        ================================= */

          @media (max-width: 640px) {
            .hero-banner-swiper .swiper-button-next,
            .hero-banner-swiper .swiper-button-prev {
              width: 32px;
              height: 32px;
            }

            .hero-banner-swiper .swiper-button-next::after,
            .hero-banner-swiper .swiper-button-prev::after {
              font-size: 13px !important;
            }

            .hero-banner-swiper .swiper-pagination {
              bottom: 10px !important;
            }

            .hero-banner-swiper .swiper-pagination-bullet {
              width: 7px;
              height: 7px;
            }

            .hero-banner-swiper .swiper-pagination-bullet-active {
              width: 18px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Banner;
