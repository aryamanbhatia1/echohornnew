'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbitron } from 'next/font/google';
import { FaBell, FaTruckFast } from 'react-icons/fa6';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const highlights = [
  'Ranked driver marketplace',
  'Fleet intelligence and income reporting',
  'Truck pooling and route optimisation',
];

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
      return;
    }

    setError('');
    setServerMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as { ok?: boolean; error?: string; queued?: boolean; message?: string };
      if (!response.ok) {
        throw new Error(payload.error || 'Unable to send confirmation email.');
      }

      setIsSubmitted(true);
      setServerMessage(
        payload.message ||
          'Thanks for choosing EchoHorn. You will be kept up to date.',
      );
      setEmail('');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to send confirmation email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.32),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(234,179,8,0.18),_transparent_24%),linear-gradient(180deg,_#030712_0%,_#111827_42%,_#020617_100%)]">
      <div className="absolute inset-0 bg-[url('/img13.png')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(2,6,23,0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-100">
              <FaTruckFast className="h-4 w-4" />
              AQ Logistics product updates
            </div>
            <h1 className={`${orbitron.className} max-w-4xl text-5xl font-bold leading-tight text-white sm:text-7xl`}>
              A more intelligent logistics experience is taking shape.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We are preparing the next evolution of AQ Logistics with live customer booking, driver intelligence, safer cargo handling, and more sophisticated fleet visibility.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-sm font-medium text-slate-100">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">Notify me</p>
            <h2 className={`${orbitron.className} mt-4 text-3xl font-bold text-white`}>
              Leave your email for future platform updates.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Enter your email so we can keep you informed as new EchoHorn capabilities, launches, and product milestones go live.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError('');
                    }}
                    data-testid="newsletter-email-input"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
                  />
                  {error && <p className="text-sm text-rose-300">{error}</p>}
                  <button
                    type="submit"
                    data-testid="newsletter-submit-button"
                    disabled={isLoading}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-300 px-5 py-4 font-semibold text-slate-950 transition hover:bg-amber-200 disabled:opacity-60"
                  >
                    <FaBell className="h-4 w-4" />
                    {isLoading ? 'Sending...' : 'Notify Me'}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-8 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-6"
                >
                  <div className="text-lg font-semibold text-emerald-100">You&apos;re on the list.</div>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{serverMessage}</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                  >
                    Add another email
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
