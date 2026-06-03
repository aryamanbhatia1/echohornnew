'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Inter, Space_Grotesk } from 'next/font/google';
import { FaArrowLeft, FaIdCard, FaRankingStar, FaRoad, FaTruck, FaWallet } from 'react-icons/fa6';

import { loadDemoStore, loginUser, signUpUser } from '@/lib/demo-store';

const heading = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

type DriverSession = {
  id: string;
  name: string;
  email: string;
};

function formatDateTime(value: string) {
  return new Date(value).toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export default function DriverPortal() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [store, setStore] = useState(() => loadDemoStore());
  const [session, setSession] = useState<DriverSession | null>(null);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    region: 'Delhi NCR',
  });

  useEffect(() => {
    const sync = () => setStore(loadDemoStore());
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  const driverUser = session ? store.users.find((user) => user.id === session.id) : null;
  const driverRecord = session ? store.drivers.find((driver) => driver.userId === session.id) : null;
  const truck = driverRecord ? store.trucks.find((item) => item.id === driverRecord.truckId) : null;
  const jobs = useMemo(() => {
    if (!driverRecord) return [];
    return store.bookings.filter(
      (booking) => booking.driverId === driverRecord.id && booking.status !== 'pending_approval' && booking.status !== 'rejected',
    );
  }, [driverRecord, store.bookings]);

  const earnings = useMemo(() => {
    const paid = jobs.filter((job) => job.driverPaid).reduce((sum, job) => sum + job.driverPayout, 0);
    const due = jobs.filter((job) => job.status === 'completed' && job.paid && !job.driverPaid).reduce((sum, job) => sum + job.driverPayout, 0);
    const awaitingCustomer = jobs.filter((job) => job.status === 'completed' && !job.paid).reduce((sum, job) => sum + job.driverPayout, 0);
    return { paid, due, awaitingCustomer };
  }, [jobs]);

  const handleAuth = () => {
    try {
      if (mode === 'signup') {
        const { user } = signUpUser({
          role: 'driver',
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone,
          region: form.region,
        });
        setSession({ id: user.id, name: user.name, email: user.email });
        setStore(loadDemoStore());
        setMessage('Driver account created. Fleet owner assignment can now be added in the fleet portal.');
      } else {
        const { user } = loginUser(form.email, form.password, 'driver');
        setSession({ id: user.id, name: user.name, email: user.email });
        setStore(loadDemoStore());
        setMessage('Logged in as driver.');
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to continue.');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#04140d_0%,#0b1520_52%,#0a111b_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.12),transparent_20%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_24%)]" />
      <div className="absolute left-[8%] top-28 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute right-[12%] top-36 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '88px 88px' }} />
      <div className="relative min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/get-started" className={`${body.className} inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-emerald-300`}>
              <FaArrowLeft className="h-4 w-4" />
              Back to roles
            </Link>
            <div className={`${body.className} rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-200`}>
              Driver operations and payout desk
            </div>
          </div>

          <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[30px] border border-white/10 bg-slate-950/55 p-8 backdrop-blur">
              <p className={`${body.className} mb-3 text-sm uppercase tracking-[0.2em] text-emerald-200/80`}>Driver portal</p>
              <h1 className={`${heading.className} text-4xl font-bold leading-tight`}>
                Drivers can track assigned trips, trip completion, dues, and payout releases in one dashboard.
              </h1>
              {!session ? (
                <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                  <div className="mb-4 flex gap-2">
                    <button onClick={() => setMode('login')} className={`rounded-full px-4 py-2 text-sm ${mode === 'login' ? 'bg-emerald-400 text-slate-950' : 'bg-white/5 text-slate-300'}`}>Login</button>
                    <button onClick={() => setMode('signup')} className={`rounded-full px-4 py-2 text-sm ${mode === 'signup' ? 'bg-emerald-400 text-slate-950' : 'bg-white/5 text-slate-300'}`}>Sign up</button>
                  </div>
                  <div className="grid gap-4">
                    {mode === 'signup' && <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Driver name" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />}
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                    <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" type="password" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                    {mode === 'signup' && (
                      <>
                        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                        <input value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} placeholder="Region" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      </>
                    )}
                    <button onClick={handleAuth} className="rounded-2xl bg-emerald-400 px-4 py-3 font-semibold text-slate-950">
                      {mode === 'signup' ? 'Create driver account' : 'Log in as driver'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-8 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                  <div className={`${heading.className} text-2xl font-semibold`}>Welcome, {session.name}</div>
                  <p className={`${body.className} mt-2 text-sm text-slate-300`}>
                    {session.email}. Trip completions, customer payments, and driver payouts will appear here automatically.
                  </p>
                </div>
              )}

              {message && <div className={`${body.className} mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200`}>{message}</div>}
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaRankingStar className="mb-3 h-5 w-5 text-emerald-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Customer rating</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>{driverRecord?.rating ?? '-'}</div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaRoad className="mb-3 h-5 w-5 text-cyan-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Driver points</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>{driverRecord?.points ?? '-'}</div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaTruck className="mb-3 h-5 w-5 text-emerald-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Assigned truck</div>
                <div className={`${heading.className} mt-2 text-xl font-semibold`}>{truck?.registrationNumber ?? 'Unassigned'}</div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaWallet className="mb-3 h-5 w-5 text-amber-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Due payout</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>Rs. {earnings.due.toLocaleString()}</div>
              </div>
            </div>
          </section>

          {session && (
            <section className="mt-8 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
              <div className="rounded-[30px] border border-white/10 bg-slate-950/55 p-8 backdrop-blur">
                <div className="flex items-center gap-3">
                  <FaIdCard className="h-5 w-5 text-emerald-300" />
                  <h2 className={`${heading.className} text-3xl font-semibold`}>Driver profile</h2>
                </div>
                <div className={`${body.className} mt-6 space-y-4 text-sm text-slate-300`}>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">Region: {driverUser?.region ?? 'Unknown'}</div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">Route preference: {driverRecord?.routePreference ?? 'Not assigned'}</div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">Fixed income per trip: Rs. {driverRecord?.fixedIncome?.toLocaleString() ?? '0'}</div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">Paid out so far: Rs. {earnings.paid.toLocaleString()}</div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">Completed but awaiting customer clearance: Rs. {earnings.awaitingCustomer.toLocaleString()}</div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">{driverRecord?.safetyNote ?? 'No safety note yet.'}</div>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-8">
                <h2 className={`${heading.className} text-3xl font-semibold`}>Assigned jobs and payouts</h2>
                <div className="mt-6 space-y-4">
                  {jobs.length === 0 && (
                    <div className={`${body.className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`}>
                      No jobs assigned to this driver in the current demo store.
                    </div>
                  )}
                  {jobs.map((job) => (
                    <div key={job.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className={`${heading.className} text-xl font-semibold`}>{job.from} to {job.to}</div>
                          <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                            {job.truckType} • {job.loadType} • {formatDateTime(job.pickupTime)}
                          </div>
                        </div>
                        <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                          <span className={`rounded-full px-3 py-1 ${job.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : job.status === 'in_transit' ? 'bg-violet-400/10 text-violet-100' : 'bg-sky-400/10 text-sky-100'}`}>
                            {job.status.replace('_', ' ')}
                          </span>
                          <span className={`rounded-full px-3 py-1 ${job.paid ? 'bg-cyan-400/10 text-cyan-100' : 'bg-rose-400/10 text-rose-100'}`}>
                            {job.paid ? 'Customer cleared' : 'Waiting for customer payment'}
                          </span>
                          <span className={`rounded-full px-3 py-1 ${job.driverPaid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`}>
                            {job.driverPaid ? 'Payout sent' : 'Payout pending'}
                          </span>
                        </div>
                      </div>
                      <div className={`${body.className} mt-4 grid gap-3 text-sm text-slate-200 md:grid-cols-2`}>
                        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">Driver income for this job: Rs. {job.driverPayout.toLocaleString()}</div>
                        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">{job.poolMessage ?? 'No pooling note for this lane.'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
