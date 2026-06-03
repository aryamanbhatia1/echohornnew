'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCircleCheck, FaShieldHeart, FaTruckFast, FaUsers } from 'react-icons/fa6';
import MemberCard from './MemberCard';

const teamMembers = [
  {
    id: 1,
    imageUrl: '/CEO.jpg',
    name: 'Aryaman Bhatia',
    role: 'CEO & Founder',
    description:
      'I founded EchoHorn with the ambition to redefine how logistics operates at scale. I thrive on solving complex problems, building strong systems, and leading teams that are driven to win. For me, leadership means making bold decisions, taking ownership, and continuously raising the bar. EchoHorn reflects that mindset: fast, reliable, and built for the future. I do not just aim to compete; I aim to lead.',
  },
  {
    id: 2,
    imageUrl: '/CTO.jpg',
    name: 'Aniruddh Ramesh',
    role: 'Chief Technology Officer',
    description:
      'Shaping the technical foundation behind ranking intelligence, booking architecture, dashboard visibility, and scalable platform systems.',
  },
  {
    id: 3,
    imageUrl: '/PHOTO-2026-04-07-20-47-50.jpg',
    name: 'Arnav Khurasna',
    role: 'Head of HR & Acquisitions',
    description:
      'Building the people and growth foundation for EchoHorn through stronger hiring systems, team development, and strategic acquisitions.',
  },
  {
    id: 4,
    imageUrl: '/CTA.jpg',
    name: 'Lincoln Rao',
    role: 'CTA & Developer',
    description:
      'Helping shape the technical expression of EchoHorn through development, implementation, and cross-platform execution.',
  },
];

const platformNotes = [
  {
    icon: FaShieldHeart,
    title: 'Trust-first logistics',
    text: 'Driver ratings, safety signals, and transparent status tracking help customers make more informed decisions.',
  },
  {
    icon: FaTruckFast,
    title: 'Operational clarity',
    text: 'Trips, payouts, and booking progression remain visible across owner, driver, and admin surfaces.',
  },
  {
    icon: FaUsers,
    title: 'One connected product',
    text: 'The customer-facing experience and backend dashboards are being shaped into a single coherent product system.',
  },
];

export default function AboutPageContent() {
  const [activeMemberId, setActiveMemberId] = useState(teamMembers[0].id);
  const activeMember = teamMembers.find((member) => member.id === activeMemberId) ?? teamMembers[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-0 bg-[url('/image-15.png')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.14),transparent_18%),linear-gradient(180deg,rgba(3,7,18,0.86),rgba(3,7,18,0.97))]" />
      <div className="absolute left-[8%] top-40 h-44 w-44 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="absolute right-[10%] top-32 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(135deg,rgba(6,11,23,0.9),rgba(14,24,42,0.84))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm uppercase tracking-[0.18em] text-yellow-100">
                <FaCircleCheck className="h-4 w-4" />
                About EchoHorn
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Building a logistics platform that feels calmer, more trusted, and operationally connected.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/80">
                EchoHorn is being shaped to reduce friction in goods movement by giving customers a more considered booking experience, giving owners clearer operations, and giving drivers more transparent earnings visibility.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {platformNotes.map((note) => {
                const Icon = note.icon;
                return (
                  <div key={note.title} className="rounded-[26px] border border-white/10 bg-white/[0.06] p-5">
                    <Icon className="h-5 w-5 text-yellow-300" />
                    <div className="mt-4 text-lg font-semibold text-white">{note.title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{note.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <section className="mt-10 grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
            <div className="mb-5">
              <h2 className="text-3xl font-semibold text-white">Meet the Team</h2>
            </div>
            <div className="grid gap-4">
              {teamMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  imageUrl={member.imageUrl}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  isActive={activeMemberId === member.id}
                  onClick={() => setActiveMemberId(member.id)}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,18,32,0.94),rgba(21,36,56,0.82))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_48%)]" />
                  <Image
                    src={activeMember.imageUrl}
                    alt={`Photo of ${activeMember.name}`}
                    width={470}
                    height={580}
                    className="relative h-[430px] w-[340px] rounded-[24px] object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm uppercase tracking-[0.18em] text-yellow-100">
                  Team Spotlight
                </div>
                <h3 className="mt-6 text-4xl font-semibold text-white">{activeMember.name}</h3>
                <p className="mt-3 text-lg font-medium uppercase tracking-[0.16em] text-yellow-200/90">{activeMember.role}</p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/80">{activeMember.description}</p>

              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
