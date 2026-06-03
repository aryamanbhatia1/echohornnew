'use client';

import { motion } from 'framer-motion';
import { Inter, Space_Grotesk } from 'next/font/google';
import {
  FaArrowRight,
  FaTruck,
  FaUser,
  FaUserGear,
} from 'react-icons/fa6';
import Link from 'next/link';

const heading = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const roles = [
  {
    title: 'Consumer',
    href: '/consumer',
    icon: FaUser,
    accent: 'from-cyan-400/35 via-sky-500/14 to-transparent',
    border: 'border-cyan-300/30',
    badge: 'Book and compare',
    bullets: ['Create an account and sign in', 'Define route and pickup timing', 'Choose from ranked driver options'],
  },
  {
    title: 'Driver',
    href: '/driver',
    icon: FaUserGear,
    accent: 'from-emerald-400/35 via-lime-500/12 to-transparent',
    border: 'border-emerald-300/30',
    badge: 'Trips and payouts',
    bullets: ['Access role-based login and signup', 'Review truck and trip assignments', 'Track points, ratings, and payout visibility'],
  },
  {
    title: 'Fleet Owner',
    href: '/fleet-portal',
    icon: FaTruck,
    accent: 'from-orange-400/35 via-red-500/12 to-transparent',
    border: 'border-orange-300/30',
    badge: 'Operations control',
    bullets: ['Register trucks and onboard drivers', 'Track payments, dues, and revenue', 'Review fleet operations in one view'],
  },
];

export default function UserTypeSelection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#030712_0%,_#111827_100%)] px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.16),transparent_18%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_24%)]" />
      <div className="absolute left-[8%] top-32 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="absolute right-[10%] top-28 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center justify-center">
        <div className="relative w-full grid gap-6 lg:grid-cols-3">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <Link href={role.href}>
                <div className={`group relative h-full overflow-hidden rounded-[34px] border ${role.border} bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/40`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.accent}`} />
                  <div className="absolute -right-10 top-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute -left-10 bottom-6 h-28 w-28 rounded-full bg-black/20 blur-2xl" />
                  <div className="absolute inset-x-8 top-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                      <role.icon className="h-8 w-8" />
                    </div>
                    <span className={`${body.className} rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-100`}>
                      {role.badge}
                    </span>
                  </div>

                  <div className="relative mt-24">
                    <h2 className={`${heading.className} text-3xl font-semibold`}>{role.title}</h2>
                    <ul className={`${body.className} mt-5 space-y-3 text-sm text-slate-100`}>
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`${body.className} mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-100`}>
                      Open portal
                      <FaArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
