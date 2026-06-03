"use client";

import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { visionsData } from './vision-data';
import InitialCarousel from './InitialCarousel';
import SelectedVisionView from './SelectedVisionView';

const VisionsGallery: FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(3);
  const selectedVision = selectedId ? visionsData.find((vision) => vision.id === selectedId) : null;

  return (
    <div className="relative z-10 flex min-h-[calc(100vh-92px)] w-full flex-col items-center justify-center px-4 pb-16 pt-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          animate={{
            opacity: selectedId ? 0.92 : 1,
            y: selectedId ? -8 : 0,
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="text-center"
        >
          <h1 className="text-5xl font-light uppercase tracking-[0.18em] text-transparent bg-[linear-gradient(180deg,#ffffff,#9fb2d9)] bg-clip-text drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)] md:text-7xl">
            Our Vision
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-200/80 md:text-lg">
            Switch between every vision point instantly, explore each idea in detail, and move through the experience without needing to reset the layout.
          </p>
        </motion.div>

        <div className="mt-14">
          <InitialCarousel onSelectVision={setSelectedId} selectedId={selectedId} />
        </div>

        <AnimatePresence mode="wait">
          {selectedVision && (
            <SelectedVisionView
              key={selectedVision.id}
              selectedVision={selectedVision}
              onSelectVision={setSelectedId}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VisionsGallery;
