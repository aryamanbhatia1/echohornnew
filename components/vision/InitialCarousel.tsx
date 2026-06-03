"use client";

import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { visionsData } from './vision-data';

interface InitialCarouselProps {
  onSelectVision: (id: number) => void;
  selectedId: number | null;
}

const sizes = [128, 128, 128, 128, 128];

const InitialCarousel: FC<InitialCarouselProps> = React.memo(({ onSelectVision, selectedId }) => {
  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-2 justify-items-center gap-x-6 gap-y-8 md:grid-cols-5">
      {visionsData.map((vision, index) => {
        const size = sizes[index] ?? 128;
        const isSelected = selectedId === vision.id;

        return (
          <motion.button
            key={vision.id}
            type="button"
            layoutId={`vision-card-${vision.id}`}
            onClick={() => onSelectVision(vision.id)}
            data-testid={`vision-card-${vision.id}`}
            className="group relative flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
            initial={{ y: 42, opacity: 0 }}
            animate={{
              y: 0,
              opacity: selectedId ? (isSelected ? 1 : 0.35) : 1,
            }}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 120, damping: 16 }}
            whileHover={{ y: -10, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label={`Open ${vision.title}`}
          >
            <span
              className="absolute inset-x-6 top-6 h-24 blur-2xl"
              style={{ background: `radial-gradient(circle, ${vision.glowColor}55 0%, transparent 70%)` }}
            />
            <div
              className={`relative overflow-hidden rounded-full border p-1 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition ${
                isSelected ? 'border-yellow-300/80' : 'border-white/15 group-hover:border-white/40'
              }`}
              style={{ width: size, height: size }}
            >
              <div className="h-full w-full overflow-hidden rounded-full bg-slate-950/80">
                <Image
                  src={vision.imgSrc}
                  alt={vision.title}
                  width={size}
                  height={size}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  priority={index === 2}
                />
              </div>
            </div>
            <div className="mt-4 max-w-[150px] text-center">
              <div className="text-sm font-semibold text-white">{vision.title}</div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
});

InitialCarousel.displayName = 'InitialCarousel';

export default InitialCarousel;
