'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Inter, Space_Grotesk } from 'next/font/google';
import {
  FaArrowRotateRight,
  FaCircleExclamation,
  FaCoins,
  FaHeadset,
  FaListCheck,
  FaShieldHeart,
  FaTruckRampBox,
} from 'react-icons/fa6';

import { loadDemoStore } from '@/lib/demo-store';
import { getAdminInsights, getStoredBackendSession } from '@/lib/logistics-backend';

const heading = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

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

export default function AdminDashboard() {
  const [store, setStore] = useState(() => loadDemoStore());
  const [backendInsights, setBackendInsights] = useState<any | null>(null);

  useEffect(() => {
    const sync = () => setStore(loadDemoStore());
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  useEffect(() => {
    const existing = getStoredBackendSession();
    if (!existing || existing.user.user_type !== 'contractor') return;
    void (async () => {
      try {
        const data = await getAdminInsights(existing.token);
        setBackendInsights(data);
      } catch {
        setBackendInsights(null);
      }
    })();
  }, []);

  const dashboard = useMemo(() => {
    const pendingApprovals = store.bookings.filter((booking) => booking.status === 'pending_approval');
    const acceptedBookings = store.bookings.filter((booking) => booking.status === 'accepted' || booking.status === 'in_transit');
    const completedBookings = store.bookings.filter((booking) => booking.status === 'completed');
    const paidBookings = store.bookings.filter((booking) => booking.paid);
    const openComplaints = store.complaints.filter((complaint) => complaint.status !== 'resolved');
    const avgRating = store.drivers.length
      ? (store.drivers.reduce((sum, driver) => sum + driver.rating, 0) / store.drivers.length).toFixed(1)
      : '0.0';

    const truckBoard = Object.values(
      store.trucks.reduce<Record<string, { truckType: string; total: number; available: number; onTrip: number; maintenance: number }>>((acc, truck) => {
        if (!acc[truck.truckType]) {
          acc[truck.truckType] = {
            truckType: truck.truckType,
            total: 0,
            available: 0,
            onTrip: 0,
            maintenance: 0,
          };
        }
        acc[truck.truckType].total += 1;
        if (truck.status === 'available') acc[truck.truckType].available += 1;
        if (truck.status === 'on_trip') acc[truck.truckType].onTrip += 1;
        if (truck.status === 'maintenance') acc[truck.truckType].maintenance += 1;
        return acc;
      }, {}),
    );

    const safetyAlerts = store.drivers
      .filter((driver) => driver.rating < 4.5 || driver.points < 210)
      .slice(0, 4)
      .map((driver) => {
        const user = store.users.find((item) => item.id === driver.userId);
        return `${user?.name ?? 'Driver'} needs attention: rating ${driver.rating}, points ${driver.points}, note: ${driver.safetyNote}.`;
      });

    const pendingPayouts = store.bookings
      .filter((booking) => booking.status === 'completed' && booking.paid && !booking.driverPaid)
      .map((booking) => {
        const driver = store.drivers.find((item) => item.id === booking.driverId);
        const driverUser = store.users.find((item) => item.id === driver?.userId);
        return { booking, driverUser };
      });

    return {
      totalRequests: store.bookings.length,
      pendingApprovals: pendingApprovals.length,
      acceptedBookings: acceptedBookings.length,
      trucksOnBoard: store.trucks.length,
      avgRating,
      completedBookings: completedBookings.length,
      totalRevenue: paidBookings.reduce((sum, booking) => sum + booking.amount, 0),
      driverDues: pendingPayouts.reduce((sum, item) => sum + item.booking.driverPayout, 0),
      truckBoard,
      safetyAlerts,
      complaints: openComplaints,
      requests: [...store.bookings]
        .sort((a, b) => new Date(b.pickupTime).getTime() - new Date(a.pickupTime).getTime())
        .slice(0, 8),
      pendingPayouts,
    };
  }, [store]);

  const topCards = [
    { label: 'Total requests', value: backendInsights?.totals?.service_requests ?? dashboard.totalRequests, tone: 'text-cyan-100 bg-cyan-400/10 border-cyan-300/20' },
    { label: 'Waiting owner approval', value: backendInsights?.totals?.pending_approvals ?? dashboard.pendingApprovals, tone: 'text-amber-100 bg-amber-400/10 border-amber-300/20' },
    { label: 'Current vehicles on board', value: backendInsights?.totals?.vehicles_on_board ?? dashboard.trucksOnBoard, tone: 'text-emerald-100 bg-emerald-400/10 border-emerald-300/20' },
    { label: 'Open complaints', value: backendInsights?.totals?.open_complaints ?? dashboard.complaints.length, tone: 'text-violet-100 bg-violet-400/10 border-violet-300/20' },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(2,8,23,0.78),rgba(10,15,30,0.95)),url('/background.png')] bg-cover bg-center px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.9),rgba(18,34,55,0.72))] p-8 backdrop-blur sm:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className={`${body.className} mb-3 text-sm uppercase tracking-[0.25em] text-cyan-200/80`}>AQ Logistics Admin Console</p>
              <h1 className={`${heading.className} text-4xl font-bold sm:text-5xl`}>
                Live backend visibility for bookings, pooling, safety, fleet payouts, and trip completion.
              </h1>
              <p className={`${body.className} mt-4 max-w-3xl text-base text-slate-300`}>
                Frontend actions now flow into this admin console view, so new bookings, completed trips, customer collections, and driver payouts are visible together instead of living as disconnected demo text.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/fleet-portal" className={`${body.className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10`}>
                Open fleet console
              </Link>
              <button
                onClick={() => setStore(loadDemoStore())}
                className={`${body.className} inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10`}
              >
                <FaArrowRotateRight className="h-4 w-4" />
                Refresh dashboard
              </button>
            </div>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topCards.map((card) => (
            <div key={card.label} className={`rounded-[28px] border p-6 backdrop-blur ${card.tone}`}>
              <div className={`${body.className} text-sm opacity-80`}>{card.label}</div>
              <div className={`${heading.className} mt-3 text-4xl font-semibold`}>{card.value}</div>
            </div>
          ))}
        </section>

        {backendInsights && (
          <section className="mt-8 grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
                <div className="flex items-center gap-3">
                  <FaListCheck className="h-5 w-5 text-cyan-300" />
                  <h2 className={`${heading.className} text-3xl font-semibold`}>Live booking requests</h2>
                </div>
                <div className="mt-6 space-y-4">
                  {backendInsights.booking_requests?.map((booking: any) => (
                    <div key={booking.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                      <div className={`${heading.className} text-xl font-semibold text-white`}>
                        {booking.service_request__pickup_address} to {booking.service_request__drop_address}
                      </div>
                      <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                        {booking.service_request__vehicle_type_preference} • {booking.status.replace('_', ' ')} • Rs. {Number(booking.final_price || 0).toLocaleString()}
                      </div>
                      <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                        Customer: {booking.service_request__customer__first_name} {booking.service_request__customer__last_name} • Fleet owner: {booking.contractor__first_name} {booking.contractor__last_name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
                <div className="flex items-center gap-3">
                  <FaTruckRampBox className="h-5 w-5 text-cyan-300" />
                  <h2 className={`${heading.className} text-3xl font-semibold`}>Truck categories on board</h2>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {backendInsights.truck_categories?.map((truck: any) => (
                    <div key={truck.vehicle_type} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className={`${heading.className} text-xl font-semibold text-white`}>{truck.vehicle_type.replace('_', ' ')}</div>
                      <div className={`${body.className} mt-3 flex flex-wrap gap-2 text-sm`}>
                        <span className="rounded-full bg-slate-400/10 px-3 py-1 text-slate-100">Total {truck.total}</span>
                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100">Available {truck.available}</span>
                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">On trip {truck.in_use}</span>
                        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-100">Maintenance {truck.maintenance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
                <div className="flex items-center gap-3">
                  <FaHeadset className="h-5 w-5 text-violet-300" />
                  <h2 className={`${heading.className} text-3xl font-semibold`}>Customer complaints</h2>
                </div>
                <div className="mt-6 space-y-4">
                  {backendInsights.complaints?.map((complaint: any) => (
                    <div key={complaint.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-semibold text-white">{complaint.title}</div>
                      <div className="mt-2 text-slate-300">{complaint.detail}</div>
                      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-violet-200/80">
                        {complaint.customer__first_name} {complaint.customer__last_name} • {complaint.status.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
                <div className="flex items-center gap-3">
                  <FaShieldHeart className="h-5 w-5 text-emerald-300" />
                  <h2 className={`${heading.className} text-3xl font-semibold`}>Safety watchlist</h2>
                </div>
                <div className="mt-6 space-y-4">
                  {backendInsights.safety_watchlist?.map((driver: any) => (
                    <div key={`${driver.user__first_name}-${driver.home_region}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                      {driver.user__first_name} {driver.user__last_name} • {driver.home_region} • Safety {driver.safety_score} • Predicted {driver.predicted_rating}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {!backendInsights && <section className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <FaListCheck className="h-5 w-5 text-cyan-300" />
                <h2 className={`${heading.className} text-3xl font-semibold`}>Booking requests and fleet acceptance</h2>
              </div>
              <div className={`${body.className} mt-3 text-sm text-slate-300`}>
                This is the core employee view: customers submit requests, fleet owners approve them, and accepted jobs then move to trip completion and payout.
              </div>
              <div className="mt-6 space-y-4">
                {dashboard.requests.map((booking) => {
                  const owner = store.users.find((item) => item.id === booking.ownerId);
                  const customer = store.users.find((item) => item.id === booking.customerId);
                  return (
                    <div key={booking.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className={`${heading.className} text-xl font-semibold text-white`}>{booking.from} to {booking.to}</div>
                          <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                            {booking.truckType} • {booking.loadType} • {formatDateTime(booking.pickupTime)}
                          </div>
                          <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                            Customer: {customer?.name ?? 'Unknown'} • Fleet owner: {owner?.companyName ?? owner?.name ?? 'Unknown'}
                          </div>
                        </div>
                        <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                          <span className={`rounded-full px-3 py-1 ${
                            booking.status === 'pending_approval'
                              ? 'bg-amber-400/10 text-amber-100'
                              : booking.status === 'accepted'
                                ? 'bg-cyan-400/10 text-cyan-100'
                                : booking.status === 'in_transit'
                                  ? 'bg-violet-400/10 text-violet-100'
                                  : booking.status === 'completed'
                                    ? 'bg-emerald-400/10 text-emerald-100'
                                    : 'bg-rose-400/10 text-rose-100'
                          }`}>
                            {booking.status.replace('_', ' ')}
                          </span>
                          <span className={`rounded-full px-3 py-1 ${booking.paid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-slate-400/10 text-slate-100'}`}>
                            {booking.paid ? 'Customer paid' : 'Customer due'}
                          </span>
                        </div>
                      </div>
                      {booking.poolMessage && (
                        <div className={`${body.className} mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50`}>
                          {booking.poolMessage}
                        </div>
                      )}
                      {booking.rejectionReason && (
                        <div className={`${body.className} mt-4 rounded-2xl border border-rose-300/15 bg-rose-400/5 px-4 py-3 text-sm text-rose-50`}>
                          Rejection note: {booking.rejectionReason}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <FaTruckRampBox className="h-5 w-5 text-cyan-300" />
                <h2 className={`${heading.className} text-3xl font-semibold`}>Current vehicles on board</h2>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {dashboard.truckBoard.map((entry) => (
                  <div key={entry.truckType} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className={`${heading.className} text-xl font-semibold text-white`}>{entry.truckType}</div>
                    <div className={`${body.className} mt-3 flex flex-wrap gap-2 text-sm`}>
                      <span className="rounded-full bg-slate-400/10 px-3 py-1 text-slate-100">Total {entry.total}</span>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100">Available {entry.available}</span>
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">On trip {entry.onTrip}</span>
                      <span className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-100">Maintenance {entry.maintenance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
              <div className="flex items-center gap-3">
                <FaHeadset className="h-5 w-5 text-violet-300" />
                <h2 className={`${heading.className} text-3xl font-semibold`}>Customer complaints</h2>
              </div>
              <div className={`${body.className} mt-6 space-y-4 text-sm text-slate-300`}>
                {dashboard.complaints.length === 0 && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">No open customer complaints right now.</div>
                )}
                {dashboard.complaints.map((complaint) => {
                  const customer = store.users.find((item) => item.id === complaint.customerId);
                  return (
                    <div key={complaint.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-semibold text-white">{complaint.title}</div>
                      <div className="mt-2 text-slate-300">{complaint.detail}</div>
                      <div className="mt-3 text-xs uppercase tracking-[0.2em] text-violet-200/80">
                        {customer?.name ?? 'Customer'} • {complaint.status.replace('_', ' ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
              <div className="flex items-center gap-3">
                <FaShieldHeart className="h-5 w-5 text-emerald-300" />
                <h2 className={`${heading.className} text-3xl font-semibold`}>Safety and quality watch</h2>
              </div>
              <div className={`${body.className} mt-6 space-y-4 text-sm text-slate-300`}>
                {dashboard.safetyAlerts.length === 0 && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">No major driver safety alert is active in the current store.</div>
                )}
                {dashboard.safetyAlerts.map((alert) => (
                  <div key={alert} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    {alert}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-rose-300/20 bg-rose-400/5 p-8">
              <div className="flex items-center gap-3">
                <FaCircleExclamation className="h-5 w-5 text-rose-300" />
                <h2 className={`${heading.className} text-2xl font-semibold text-rose-100`}>Payments waiting for action</h2>
              </div>
              <div className={`${body.className} mt-4 space-y-3 text-sm text-slate-300`}>
                {dashboard.pendingPayouts.length === 0 && <div>All completed jobs have their driver payouts settled.</div>}
                {dashboard.pendingPayouts.map(({ booking, driverUser }) => (
                  <div key={booking.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    {driverUser?.name ?? 'Driver'} is due Rs. {booking.driverPayout.toLocaleString()} for {booking.from} to {booking.to}.
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <FaCoins className="mb-3 h-5 w-5 text-amber-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Collected revenue</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>Rs. {dashboard.totalRevenue.toLocaleString()}</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <FaTruckRampBox className="mb-3 h-5 w-5 text-cyan-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Driver dues open</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>Rs. {dashboard.driverDues.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </section>}

        {!backendInsights && <section className="mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
          <h2 className={`${heading.className} text-3xl font-semibold`}>Accepted trips and completion tracker</h2>
          <div className="mt-6 space-y-4">
            {dashboard.requests
              .filter((booking) => booking.status !== 'pending_approval' && booking.status !== 'rejected')
              .map((booking) => {
              const driver = store.drivers.find((item) => item.id === booking.driverId);
              const driverUser = store.users.find((item) => item.id === driver?.userId);
              const owner = store.users.find((item) => item.id === booking.ownerId);
              return (
                <div key={booking.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className={`${heading.className} text-xl font-semibold`}>{booking.from} to {booking.to}</div>
                      <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                        {booking.truckType} • {booking.loadType} • {formatDateTime(booking.pickupTime)}
                      </div>
                      <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                        Fleet owner: {owner?.companyName ?? owner?.name ?? 'Unknown'} • Driver: {driverUser?.name ?? 'Unknown'}
                      </div>
                    </div>
                    <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                      <span className={`rounded-full px-3 py-1 ${booking.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : booking.status === 'in_transit' ? 'bg-violet-400/10 text-violet-100' : 'bg-slate-400/10 text-slate-100'}`}>
                        {booking.status.replace('_', ' ')}
                      </span>
                      <span className={`rounded-full px-3 py-1 ${booking.paid ? 'bg-cyan-400/10 text-cyan-100' : 'bg-rose-400/10 text-rose-100'}`}>
                        {booking.paid ? 'Customer paid' : 'Customer due'}
                      </span>
                      <span className={`rounded-full px-3 py-1 ${booking.driverPaid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`}>
                        {booking.driverPaid ? 'Driver paid' : 'Driver due'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>}
      </div>
    </div>
  );
}
