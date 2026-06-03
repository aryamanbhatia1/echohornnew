"use client";

import type { FC } from 'react';
import React from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { visionsData, type Vision } from './vision-data';

interface SelectedVisionViewProps {
  selectedVision: Vision;
  onSelectVision: (id: number) => void;
}

const SelectedVisionView: FC<SelectedVisionViewProps> = React.memo(
  ({ selectedVision, onSelectVision }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-400, 400], [4, -4]);
    const rotateY = useTransform(x, [-400, 400], [-4, 4]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const getRingPosition = (index: number, total: number, radius: number) => {
      const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    };

    const thumbnailVisions = visionsData.filter((vision) => vision.id !== selectedVision.id);

    return (
      <motion.section
        className="relative z-10 mt-8 w-full max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(135deg,rgba(6,11,23,0.94),rgba(18,31,52,0.82))] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_56%),linear-gradient(180deg,rgba(10,14,29,0.95),rgba(5,8,20,0.98))]"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background: `radial-gradient(circle at center, ${selectedVision.glowColor}1f 0%, transparent 60%)`,
                }}
              />

              <motion.div
                className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border border-white/10 bg-black/30"
                style={{ rotateX, rotateY }}
              >
                <motion.div
                  layoutId={`vision-card-${selectedVision.id}`}
                  className="relative flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/50 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  <Image
                    key={selectedVision.id}
                    src={selectedVision.imgSrc}
                    alt={selectedVision.title}
                    width={240}
                    height={240}
                    className="h-full w-full object-cover"
                    priority
                  />
                </motion.div>

                {thumbnailVisions.map((vision, index) => {
                  const position = getRingPosition(index, thumbnailVisions.length, 186);
                  return (
                    <motion.button
                      key={vision.id}
                      type="button"
                      onClick={() => onSelectVision(vision.id)}
                      className="absolute flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-slate-950/70 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.1 + index * 0.06 }}
                      style={{
                        top: `calc(50% - 44px + ${position.y}px)`,
                        left: `calc(50% - 44px + ${position.x}px)`,
                      }}
                      whileHover={{ scale: 1.08, borderColor: vision.glowColor, boxShadow: `0 0 26px ${vision.glowColor}` }}
                      whileTap={{ scale: 0.96 }}
                      aria-label={`Show ${vision.title}`}
                    >
                      <Image src={vision.imgSrc} alt={vision.title} width={88} height={88} className="h-full w-full object-cover" />
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>

            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-yellow-100">
                  Vision Focus
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedVision.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <h2 className="text-4xl font-bold tracking-tight text-yellow-300 lg:text-5xl">{selectedVision.title}</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 lg:text-xl">{selectedVision.description}</p>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>
    );
  },
);

SelectedVisionView.displayName = 'SelectedVisionView';

export default SelectedVisionView;
