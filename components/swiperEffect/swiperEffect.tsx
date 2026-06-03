"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const slideData = [
  {
    id: 1,
    src: "/img10.png",
    alt: "Night logistics control",
    title: "Live Dispatch Intelligence",
    caption: "Monitor routes, fleet movement, and delivery pressure in one glance.",
  },
  {
    id: 2,
    src: "/img12.png",
    alt: "Fleet operations view",
    title: "Fleet Owner Control",
    caption: "Track trucks, assign drivers, and manage income after successful payments.",
  },
  {
    id: 3,
    src: "/img13.png",
    alt: "Driver ranking card",
    title: "Ranked Driver Selection",
    caption: "Customers choose drivers by ratings, safety signals, and on-time performance.",
  },
  {
    id: 4,
    src: "/img7.png",
    alt: "Secure goods handling",
    title: "Goods Safety First",
    caption: "Protect every shipment with proof-of-delivery, verified identities, and route checks.",
  },
  {
    id: 5,
    src: "/background.png",
    alt: "Truck pooling route at night",
    title: "Truck Pooling Efficiency",
    caption: "Coordinate nearby loads with greater route intelligence to save fuel and improve utilisation.",
  },
];

export default function SwiperEffect() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[430px] items-center justify-center mx-auto">
      <Swiper
        effect="fade"
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={1}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="h-full w-full overflow-hidden"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id} className="!flex !h-[430px] !w-full items-end justify-center overflow-hidden">
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={430}
                height={430}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.72)_62%,rgba(2,6,23,0.96)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-100">
                  AQ Logistics
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-white">
                  {slide.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-200/90">
                  {slide.caption}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
