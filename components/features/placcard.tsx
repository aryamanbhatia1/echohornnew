'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowTrendUp,
  FaChartLine,
  FaCoins,
  FaRoute,
  FaShieldHeart,
  FaTruckFast,
  FaUsersGear,
  FaWaveSquare,
} from 'react-icons/fa6';

const featureCards = [
  {
    id: 'marketplace',
    eyebrow: 'Ranked Marketplace',
    title: 'Customers select drivers through a richer layer of trust, safety, and performance intelligence.',
    description:
      'Bookings are presented with visible ratings, predictive scores, route suitability, and truck compatibility so customers can make materially better decisions.',
    icon: FaShieldHeart,
    tone: 'from-cyan-400/20 to-slate-950/40',
  },
  {
    id: 'fleet-ops',
    eyebrow: 'Fleet Operations',
    title: 'Fleet owners oversee trucks, assignments, dues, and payouts within a single operating surface.',
    description:
      'Owners can onboard drivers, allocate trucks, follow trip status, record customer payments, and release driver earnings through one coordinated workflow.',
    icon: FaUsersGear,
    tone: 'from-amber-300/20 to-slate-950/40',
  },
  {
    id: 'pooling',
    eyebrow: 'Pooling Engine',
    title: 'Nearby orders are intelligently grouped in the backend to improve utilisation and reduce waste.',
    description:
      'The platform surfaces truck-pooling opportunities across shared lanes so dispatch teams can reduce empty return distance and improve route efficiency.',
    icon: FaRoute,
    tone: 'from-emerald-400/20 to-slate-950/40',
  },
  {
    id: 'driver-income',
    eyebrow: 'Driver Earnings',
    title: 'Completed trips, outstanding dues, and released payouts remain fully visible.',
    description:
      'Drivers and owners can both see when a job is completed, when the customer has paid, and when the driver payout still requires release.',
    icon: FaCoins,
    tone: 'from-violet-400/20 to-slate-950/40',
  },
];

const metrics = [
  { label: 'Trip visibility', value: '100%', icon: FaTruckFast },
  { label: 'Pooling alerts', value: 'Live', icon: FaWaveSquare },
  { label: 'Demand view', value: 'Region-wise', icon: FaChartLine },
  { label: 'Ranking updates', value: 'Auto', icon: FaArrowTrendUp },
];

const FeaturePlacards = React.memo(() => {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(135deg,rgba(6,11,23,0.9),rgba(14,24,42,0.84))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm uppercase tracking-[0.22em] text-yellow-100">
              AQ Logistics Features
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl"
              data-testid="features-title"
            >
              One connected system for booking, fleet orchestration, and payout visibility.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/80"
            >
              EchoHorn is designed so the customer experience, driver workspace, owner operations, and admin backend all express the same logistics narrative instead of behaving like disconnected products.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
                  className="rounded-[26px] border border-white/10 bg-white/[0.06] p-5"
                >
                  <Icon className="h-5 w-5 text-yellow-300" />
                  <div className="mt-4 text-sm text-slate-300">{metric.label}</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{metric.value}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className={`rounded-[30px] border border-white/10 bg-gradient-to-br ${card.tone} p-6 shadow-[0_18px_45px_rgba(0,0,0,0.22)]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{card.eyebrow}</div>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">{card.title}</h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-yellow-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-200/80">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
});

FeaturePlacards.displayName = 'FeaturePlacards';

export default FeaturePlacards;
