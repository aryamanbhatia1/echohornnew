"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";
import {
  FaCircleCheck,
  FaClock,
  FaLocationDot,
  FaRankingStar,
  FaShieldHeart,
  FaTruckFast,
  FaUserCheck,
} from "react-icons/fa6";
import SwiperEffect from "../swiperEffect/swiperEffect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const trustPoints = [
  {
    title: "Verified drivers",
    text: "Select from rigorously ranked drivers evaluated across ratings, completion history, and safety performance.",
    icon: FaShieldHeart,
  },
  {
    title: "Clear booking flow",
    text: "Pickup location, route design, truck class, and delivery timing remain transparent from the first step.",
    icon: FaClock,
  },
  {
    title: "Live trip confidence",
    text: "Monitor trip progression, cargo-handling updates, and payment visibility through a more coherent delivery journey.",
    icon: FaUserCheck,
  },
];

const quickSteps = [
  "Define your route, cargo timing, and delivery expectations",
  "Compare ranked drivers and operationally suitable truck classes",
  "Confirm the booking and follow the trip with greater visibility",
];

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_16%),radial-gradient(circle_at_75%_18%,rgba(56,189,248,0.14),transparent_18%),linear-gradient(180deg,rgba(3,7,18,0.78),rgba(3,7,18,0.96))]" />
      <div className="absolute left-[10%] top-32 h-44 w-44 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="absolute right-[10%] top-40 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-100">
            <FaCircleCheck className="h-4 w-4" />
            AQ logistics, reimagined with greater clarity
          </div>
          <h1 className={`${poppins.className} mt-8 flex flex-col items-center text-center text-5xl font-semibold leading-[0.96] sm:text-6xl lg:text-[4.8rem] xl:text-[5rem]`}>
            <span className="block whitespace-nowrap drop-shadow-[0_8px_26px_rgba(255,255,255,0.12)]">
              Engineering the quiet
            </span>
            <span className="mt-1 block whitespace-nowrap bg-[linear-gradient(180deg,#ffffff_0%,#dbeafe_100%)] bg-clip-text text-transparent [text-shadow:0_0_28px_rgba(255,255,255,0.1)]">
              in the chaos of{" "}
            </span>
            <span className="inline-block whitespace-nowrap bg-[linear-gradient(180deg,#fde047_0%,#a3e635_100%)] bg-clip-text text-transparent drop-shadow-[0_10px_34px_rgba(190,242,100,0.22)]">
              motion.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200/80 sm:text-xl">
            EchoHorn gives customers a more assured way to move goods through ranked driver discovery,
            stronger delivery visibility, and a booking experience designed to feel calm, informed, and precise.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/vision"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-medium text-white transition hover:bg-white/10"
            >
              Why EchoHorn
            </Link>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <FaLocationDot className="h-5 w-5" />
                </div>
                  <div>
                    <div className="text-sm text-slate-300">A more deliberate customer journey</div>
                    <div className="mt-1 text-xl font-semibold text-white">From route planning to delivery completion</div>
                  </div>
                </div>

              <div className="mt-6 space-y-3">
                {quickSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300/10 text-sm font-semibold text-yellow-300">
                      {index + 1}
                    </div>
                    <div className="text-sm leading-6 text-slate-200">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="h-5 w-5 text-yellow-300" />
                    <div className="mt-4 text-lg font-semibold text-white">{point.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Trusted booking
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Ranked drivers
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Safer delivery
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="flex justify-center">
                <SwiperEffect />
              </div>

              <div className="space-y-4">
                <div className="rounded-[26px] border border-cyan-300/15 bg-cyan-400/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <FaTruckFast className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">The right truck, not a random one</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Mini truck, medium truck, full truck, trailer, or tempo selection remains explicit before the booking is confirmed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-amber-300/15 bg-amber-300/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                      <FaRankingStar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">Compare before you commit</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Customers can review driver ratings, safety notes, and trust signals rather than booking without context.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-emerald-300/15 bg-emerald-400/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-emerald-400/10 p-3 text-emerald-300">
                      <FaUserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">Confidence after booking too</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Booking milestones, payment progress, and delivery completion remain easier to interpret across the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
