'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Inter, Space_Grotesk } from 'next/font/google';
import { FaArrowLeft, FaClock, FaHeadset, FaLocationDot, FaRankingStar, FaTruckFast, FaUserCheck } from 'react-icons/fa6';

import { truckTypes } from '@/lib/demo-data';
import { createBooking, createComplaint, loadDemoStore, loginUser, resetDemoStore, signUpUser } from '@/lib/demo-store';
import {
  createBackendBooking,
  createBackendComplaint,
  createServiceRequest,
  getAvailableDrivers,
  getStoredBackendSession,
  listComplaints,
  listConsumerBookings,
  loginBackend,
  registerConsumerBackend,
} from '@/lib/logistics-backend';

const heading = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

type ConsumerSession = {
  id: string | number;
  name: string;
  email: string;
};

type BackendConsumerBooking = {
  id: number;
  status: string;
  final_price: string | number;
  advance_paid: boolean;
  service_request_details?: {
    pickup_address?: string;
    drop_address?: string;
    vehicle_type_preference?: string;
  };
};

type BackendComplaint = {
  id: number;
  title: string;
  detail: string;
  status: string;
};

export default function ConsumerPortal() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [session, setSession] = useState<ConsumerSession | null>(null);
  const [store, setStore] = useState(() => loadDemoStore());
  const [message, setMessage] = useState('');
  const [authForm, setAuthForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    region: 'Delhi NCR',
  });
  const [bookingForm, setBookingForm] = useState({
    from: '',
    to: '',
    pickupDate: '',
    pickupTime: '',
    truckType: 'Mini Truck',
    loadType: 'General Goods',
  });
  const [selectedDriverId, setSelectedDriverId] = useState('');
  const [complaintForm, setComplaintForm] = useState({
    title: '',
    detail: '',
    bookingId: '',
  });
  const [backendToken, setBackendToken] = useState<string | null>(null);
  const [backendBookings, setBackendBookings] = useState<BackendConsumerBooking[]>([]);
  const [backendComplaints, setBackendComplaints] = useState<BackendComplaint[]>([]);

  const availableDrivers = useMemo(() => {
    return store.drivers
      .map((driver) => {
        const user = store.users.find((item) => item.id === driver.userId);
        const truck = store.trucks.find((item) => item.id === driver.truckId);
        return { driver, user, truck };
      })
      .filter((entry) => entry.user && entry.truck && entry.driver.available && entry.truck?.truckType === bookingForm.truckType)
      .sort((a, b) => b.driver.rating - a.driver.rating || b.driver.points - a.driver.points);
  }, [store, bookingForm.truckType]);

  const myBookings = useMemo(() => {
    if (backendToken) return [];
    if (!session) return [];
    return store.bookings
      .filter((booking) => booking.customerId === session.id)
      .map((booking) => {
        const driver = store.drivers.find((item) => item.id === booking.driverId);
        const driverUser = store.users.find((item) => item.id === driver?.userId);
        const owner = store.users.find((item) => item.id === booking.ownerId);
        const truck = store.trucks.find((item) => item.id === booking.truckId);
        return { booking, driverUser, owner, truck };
      });
  }, [backendToken, store, session]);

  const openComplaints = useMemo(() => {
    if (backendToken) return [];
    if (!session) return [];
    return store.complaints.filter((complaint) => complaint.customerId === session.id);
  }, [backendToken, store, session]);

  useEffect(() => {
    const existing = getStoredBackendSession();
    if (!existing || existing.user.user_type !== 'consumer') return;
    setBackendToken(existing.token);
    setSession({
      id: existing.user.id,
      name: `${existing.user.first_name} ${existing.user.last_name}`.trim(),
      email: existing.user.email,
    });
  }, []);

  useEffect(() => {
    if (!backendToken) return;
    void (async () => {
      try {
        const [bookings, complaints] = await Promise.all([
          listConsumerBookings(backendToken),
          listComplaints(backendToken),
        ]);
        setBackendBookings(bookings);
        setBackendComplaints(complaints);
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Backend sync failed.');
      }
    })();
  }, [backendToken]);

  function splitName(name: string) {
    const parts = name.trim().split(/\s+/);
    return {
      first_name: parts[0] || 'User',
      last_name: parts.slice(1).join(' ') || 'Customer',
    };
  }

  useEffect(() => {
    if (!availableDrivers.length) {
      setSelectedDriverId('');
      return;
    }

    const stillExists = availableDrivers.some((entry) => entry.driver.id === selectedDriverId);
    if (!stillExists) {
      setSelectedDriverId(availableDrivers[0].driver.id);
    }
  }, [availableDrivers, selectedDriverId]);

  const handleAuth = () => {
    void (async () => {
      try {
        if (mode === 'signup') {
          const { first_name, last_name } = splitName(authForm.name);
          const sessionData = await registerConsumerBackend({
            first_name,
            last_name,
            email: authForm.email,
            password: authForm.password,
            phone_number: authForm.phone,
          });
          setBackendToken(sessionData.token);
          setSession({ id: sessionData.user.id, name: `${sessionData.user.first_name} ${sessionData.user.last_name}`.trim(), email: sessionData.user.email });
          setMessage('Consumer account created on the backend.');
        } else {
          const sessionData = await loginBackend(authForm.email, authForm.password);
          if (sessionData.user.user_type !== 'consumer') {
            throw new Error('This account is not a consumer account.');
          }
          setBackendToken(sessionData.token);
          setSession({ id: sessionData.user.id, name: `${sessionData.user.first_name} ${sessionData.user.last_name}`.trim(), email: sessionData.user.email });
          setMessage('Logged in through the backend.');
        }
        setStore(loadDemoStore());
      } catch {
        try {
          if (mode === 'signup') {
            const { user } = signUpUser({
              role: 'consumer',
              name: authForm.name,
              email: authForm.email,
              password: authForm.password,
              phone: authForm.phone,
              region: authForm.region,
            });
            setSession({ id: user.id, name: user.name, email: user.email });
            setMessage('Backend unavailable. Consumer account created in demo mode.');
          } else {
            const { user } = loginUser(authForm.email, authForm.password, 'consumer');
            setSession({ id: user.id, name: user.name, email: user.email });
            setMessage('Backend unavailable. Logged in through demo mode.');
          }
          setStore(loadDemoStore());
        } catch (fallbackError) {
          setMessage(fallbackError instanceof Error ? fallbackError.message : 'Unable to continue.');
        }
      }
    })();
  };

  const handleBook = () => {
    if (!session || !selectedDriverId || !bookingForm.from || !bookingForm.to || !bookingForm.pickupDate || !bookingForm.pickupTime) {
      setMessage('Please fill from, to, date, time, and select a driver.');
      return;
    }

    const chosen = availableDrivers.find((entry) => entry.driver.id === selectedDriverId);
    if (!chosen?.truck) {
      setMessage('Pick one of the available drivers for this truck type.');
      return;
    }

    const distanceFactor = bookingForm.truckType === 'Trailer' ? 19000 : bookingForm.truckType === 'Full Truck' ? 14500 : bookingForm.truckType === 'Medium Truck' ? 11200 : 7600;
    const price = distanceFactor + chosen.driver.points * 5;

    const pickupTimestamp = `${bookingForm.pickupDate}T${bookingForm.pickupTime}`;

    void (async () => {
      if (backendToken) {
        try {
          const vehicleTypePreference = {
            'Mini Truck': 'mini_truck',
            'Medium Truck': 'medium_truck',
            'Full Truck': 'full_truck',
            Trailer: 'trailer',
            Tempo: 'tempo',
          }[bookingForm.truckType] ?? 'mini_truck';

          const serviceRequest = await createServiceRequest(backendToken, {
            service_type: bookingForm.to.toLowerCase().includes('jaipur') ? 'intercity' : 'local',
            pickup_address: bookingForm.from,
            pickup_floor_number: 1,
            pickup_lift_available: true,
            pickup_parking_available: true,
            drop_address: bookingForm.to,
            drop_floor_number: 1,
            drop_lift_available: true,
            drop_parking_available: true,
            cargo_type: 'general',
            cargo_weight: '1200.00',
            room_count: 1,
            packing_needed: false,
            vehicle_type_preference: vehicleTypePreference,
            pickup_datetime: pickupTimestamp,
            special_notes: bookingForm.loadType,
          });

          const createdRequest = serviceRequest as { id: number };
          const available = await getAvailableDrivers(backendToken, createdRequest.id);
          const backendDriver = available.available_drivers?.[0] as { id: number; assigned_vehicles?: Array<{ id: number }> } | undefined;
          const backendVehicle = backendDriver?.assigned_vehicles?.[0];

          if (!backendDriver || !backendVehicle) {
            throw new Error('No backend vehicle is available for this route right now.');
          }

          await createBackendBooking(backendToken, {
            service_request: createdRequest.id,
            driver: backendDriver.id,
            vehicle: backendVehicle.id,
            final_price: available.ml_suggested_price ?? String(price),
          });
          setBackendBookings(await listConsumerBookings(backendToken));
          setMessage('Booking request saved in the backend and sent for fleet-owner approval.');
          return;
        } catch (error) {
          setMessage(error instanceof Error ? error.message : 'Unable to save booking in the backend.');
          return;
        }
      }

      createBooking({
        customerId: session.id as string,
        driverId: chosen.driver.id,
        ownerId: chosen.driver.ownerId,
        truckId: chosen.truck.id,
        from: bookingForm.from,
        to: bookingForm.to,
        pickupTime: pickupTimestamp,
        truckType: bookingForm.truckType,
        loadType: bookingForm.loadType,
        amount: price,
      });
      setStore(loadDemoStore());
      setMessage('Booking request submitted. It is now waiting for fleet-owner approval.');
    })();
  };

  const handleComplaint = () => {
    if (!session || !complaintForm.title.trim() || !complaintForm.detail.trim()) {
      setMessage('Add a complaint title and detail before submitting.');
      return;
    }

    void (async () => {
      if (backendToken) {
        try {
          await createBackendComplaint(backendToken, {
            booking: complaintForm.bookingId || undefined,
            title: complaintForm.title,
            detail: complaintForm.detail,
          });
          setComplaintForm({ title: '', detail: '', bookingId: '' });
          setBackendComplaints(await listComplaints(backendToken));
          setMessage('Complaint submitted to the backend.');
          return;
        } catch (error) {
          setMessage(error instanceof Error ? error.message : 'Unable to submit complaint to the backend.');
          return;
        }
      }

      createComplaint({
        customerId: session.id as string,
        bookingId: complaintForm.bookingId || undefined,
        title: complaintForm.title,
        detail: complaintForm.detail,
      });
      setComplaintForm({ title: '', detail: '', bookingId: '' });
      setStore(loadDemoStore());
      setMessage('Complaint submitted to the admin console.');
    })();
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/get-started" className={`${body.className} inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-300`}>
            <FaArrowLeft className="h-4 w-4" />
            Back to roles
          </Link>
          <button
            onClick={() => {
              resetDemoStore();
              setStore(loadDemoStore());
              setSession(null);
              setMessage('Demo data reset.');
            }}
            className={`${body.className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`}
          >
            Reset demo data
          </button>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className={`${body.className} mb-3 text-sm uppercase tracking-[0.2em] text-cyan-200/80`}>Consumer app</p>
            <h1 className={`${heading.className} text-4xl font-bold leading-tight`}>
              Sign in, enter your route, compare ranked drivers, and book the truck you actually want.
            </h1>
            <p className={`${body.className} mt-4 text-sm text-slate-300`}>
              This is a working browser demo: create a customer account, log in, choose the truck class, compare drivers, and create bookings from one place to another at a selected time.
            </p>

            {!session ? (
              <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <div className="mb-4 flex gap-2">
                  <button onClick={() => setMode('login')} className={`rounded-full px-4 py-2 text-sm ${mode === 'login' ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-300'}`}>Login</button>
                  <button onClick={() => setMode('signup')} className={`rounded-full px-4 py-2 text-sm ${mode === 'signup' ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-300'}`}>Sign up</button>
                </div>
                <div className="grid gap-4">
                  {mode === 'signup' && (
                    <input value={authForm.name} onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })} placeholder="Full name" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                  )}
                  <input value={authForm.email} onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })} placeholder="Email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                  <input value={authForm.password} onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })} placeholder="Password" type="password" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                  {mode === 'signup' && (
                    <>
                      <input value={authForm.phone} onChange={(e) => setAuthForm({ ...authForm, phone: e.target.value })} placeholder="Phone" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <input value={authForm.region} onChange={(e) => setAuthForm({ ...authForm, region: e.target.value })} placeholder="Region" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                    </>
                  )}
                  <button onClick={handleAuth} className="rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950">
                    {mode === 'signup' ? 'Create consumer account' : 'Log in as consumer'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-8 rounded-[28px] border border-emerald-300/20 bg-emerald-400/5 p-6">
                <div className={`${heading.className} text-2xl font-semibold`}>Welcome, {session.name}</div>
                <p className={`${body.className} mt-2 text-sm text-slate-300`}>
                  Logged in as {session.email}. Create bookings below and compare ranked drivers.
                </p>
              </div>
            )}

            {message && <div className={`${body.className} mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200`}>{message}</div>}
          </div>

          <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <FaLocationDot className="mb-3 h-5 w-5 text-cyan-300" />
                <div className={`${heading.className} text-xl font-semibold`}>Route input</div>
                <div className={`${body.className} mt-2 text-sm text-slate-300`}>From where, to where, and when you want the truck.</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <FaRankingStar className="mb-3 h-5 w-5 text-cyan-300" />
                <div className={`${heading.className} text-xl font-semibold`}>Available trucks and drivers</div>
                <div className={`${body.className} mt-2 text-sm text-slate-300`}>Select an available fleet option, then send the request for owner approval.</div>
              </div>
            </div>

            {session && (
              <div className="mt-6 rounded-[28px] border border-white/10 bg-black/30 p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <input value={bookingForm.from} onChange={(e) => setBookingForm({ ...bookingForm, from: e.target.value })} placeholder="Pickup location" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                  <input value={bookingForm.to} onChange={(e) => setBookingForm({ ...bookingForm, to: e.target.value })} placeholder="Drop location" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                  <input value={bookingForm.pickupDate} onChange={(e) => setBookingForm({ ...bookingForm, pickupDate: e.target.value })} type="date" placeholder="dd/mm/yyyy" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 [color-scheme:dark]" />
                  <input value={bookingForm.pickupTime} onChange={(e) => setBookingForm({ ...bookingForm, pickupTime: e.target.value })} type="time" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 [color-scheme:dark]" />
                  <select value={bookingForm.truckType} onChange={(e) => setBookingForm({ ...bookingForm, truckType: e.target.value })} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    {truckTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                  <div className={`${body.className} rounded-2xl border border-dashed border-cyan-300/20 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-100`}>
                    Enter pickup date in <span className="font-semibold">dd/mm/yyyy</span> format using the date picker, then add the pickup time separately.
                  </div>
                  <input value={bookingForm.loadType} onChange={(e) => setBookingForm({ ...bookingForm, loadType: e.target.value })} placeholder="Goods type" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 md:col-span-2" />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className={`${heading.className} text-3xl font-semibold`}>Available drivers</h2>
              <div className={`${body.className} text-sm text-slate-300`}>{availableDrivers.length} choices</div>
            </div>

            <div className="mt-6 space-y-4">
              {availableDrivers.map(({ driver, user, truck }) => (
                <button
                  key={driver.id}
                  onClick={() => setSelectedDriverId(driver.id)}
                  className={`w-full rounded-3xl border p-5 text-left ${selectedDriverId === driver.id ? 'border-cyan-300/50 bg-cyan-400/10' : 'border-white/10 bg-slate-950/50'}`}
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className={`${heading.className} text-xl font-semibold`}>{user?.name}</div>
                      <div className={`${body.className} mt-1 text-sm text-slate-300`}>
                        {truck?.registrationNumber} • {truck?.truckType} • ETA {driver.etaHours}h
                      </div>
                    </div>
                    <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100">Rating {driver.rating}</span>
                      <span className="rounded-full bg-sky-400/10 px-3 py-1 text-sky-100">Predicted {driver.predictedRating}</span>
                      <span className="rounded-full bg-violet-400/10 px-3 py-1 text-violet-100">{driver.points} pts</span>
                    </div>
                  </div>
                  <div className={`${body.className} mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-2`}>
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-3">{driver.safetyNote}</div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Fixed driver income Rs. {driver.fixedIncome.toLocaleString()}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-8">
              <div className="flex items-center gap-3">
                <FaTruckFast className="h-5 w-5 text-cyan-300" />
                <h2 className={`${heading.className} text-3xl font-semibold`}>Book selected driver</h2>
              </div>
              <p className={`${body.className} mt-3 text-sm text-slate-300`}>
                Choose a nearby truck option above, then submit the booking request. The fleet owner must accept it before the trip becomes active.
              </p>
              {selectedDriverId ? (
                <div className={`${body.className} mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-50`}>
                  Fleet option selected and ready to send for approval.
                </div>
              ) : (
                <div className={`${body.className} mt-4 rounded-2xl border border-amber-300/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-50`}>
                  No driver matches this truck type yet. Try another truck class.
                </div>
              )}
              <button onClick={handleBook} disabled={!session} className="mt-6 w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 disabled:opacity-50">
                Submit booking request
              </button>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-8">
              <div className="flex items-center gap-3">
                <FaUserCheck className="h-5 w-5 text-cyan-300" />
                <h2 className={`${heading.className} text-3xl font-semibold`}>My bookings</h2>
              </div>
              <div className="mt-5 space-y-4">
                {!backendToken && myBookings.length === 0 && (
                  <div className={`${body.className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`}>
                    No bookings yet. Log in and create one.
                  </div>
                )}
                {backendToken && backendBookings.length === 0 && (
                  <div className={`${body.className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`}>
                    No backend bookings yet. Submit a request to create one.
                  </div>
                )}
                {backendToken && backendBookings.map((booking) => (
                  <div key={booking.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className={`${heading.className} text-lg font-semibold text-white`}>
                      {booking.service_request_details?.pickup_address} to {booking.service_request_details?.drop_address}
                    </div>
                    <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                      {booking.service_request_details?.vehicle_type_preference} • Rs. {booking.final_price}
                    </div>
                    <div className={`${body.className} mt-3 flex flex-wrap gap-2 text-sm`}>
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">{booking.status?.replace('_', ' ')}</span>
                      <span className={`rounded-full px-3 py-1 ${booking.advance_paid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`}>
                        {booking.advance_paid ? 'Advance paid' : 'Awaiting payment'}
                      </span>
                    </div>
                  </div>
                ))}
                {myBookings.map(({ booking, driverUser, owner, truck }) => (
                  <div key={booking.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className={`${heading.className} text-lg font-semibold text-white`}>{booking.from} to {booking.to}</div>
                    <div className={`${body.className} mt-2 text-sm text-slate-300`}>{booking.truckType} • {booking.loadType} • Rs. {booking.amount.toLocaleString()}</div>
                    <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                      Fleet owner: {owner?.companyName ?? owner?.name ?? 'Unknown'} • Truck: {truck?.registrationNumber ?? 'Unknown'} • Driver: {driverUser?.name ?? 'Unknown'}
                    </div>
                    <div className={`${body.className} mt-2 flex items-center gap-2 text-sm text-slate-300`}>
                      <FaClock className="h-4 w-4 text-cyan-300" />
                      {new Date(booking.pickupTime).toLocaleString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      })}
                    </div>
                    <div className={`${body.className} mt-3 flex flex-wrap gap-2 text-sm`}>
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
                        {booking.status === 'pending_approval' ? 'Waiting for owner approval' : booking.status.replace('_', ' ')}
                      </span>
                      {booking.rejectionReason && (
                        <span className="rounded-full bg-rose-400/10 px-3 py-1 text-rose-100">{booking.rejectionReason}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-slate-950/70 p-8">
              <div className="flex items-center gap-3">
                <FaHeadset className="h-5 w-5 text-cyan-300" />
                <h2 className={`${heading.className} text-3xl font-semibold`}>Customer complaints</h2>
              </div>
              <p className={`${body.className} mt-3 text-sm text-slate-300`}>
                Raise a complaint here if a booking, payout, confirmation, or trip update needs employee attention.
              </p>
              {session && (
                <div className="mt-5 space-y-4">
                  <select
                    value={complaintForm.bookingId}
                    onChange={(e) => setComplaintForm({ ...complaintForm, bookingId: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    <option value="">Link to booking (optional)</option>
                    {(backendToken ? backendBookings : myBookings).map((entry) => {
                      const booking = backendToken ? entry : entry.booking;
                      const label = backendToken
                        ? `${booking.service_request_details?.pickup_address} to ${booking.service_request_details?.drop_address}`
                        : `${booking.from} to ${booking.to}`;
                      return (
                      <option key={booking.id} value={booking.id}>
                        {label}
                      </option>
                      );
                    })}
                  </select>
                  <input
                    value={complaintForm.title}
                    onChange={(e) => setComplaintForm({ ...complaintForm, title: e.target.value })}
                    placeholder="Complaint title"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  />
                  <textarea
                    value={complaintForm.detail}
                    onChange={(e) => setComplaintForm({ ...complaintForm, detail: e.target.value })}
                    placeholder="Describe the issue clearly"
                    className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  />
                  <button onClick={handleComplaint} className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950">
                    Submit complaint
                  </button>
                </div>
              )}

              <div className="mt-6 space-y-3">
                {!backendToken && openComplaints.length === 0 && (
                  <div className={`${body.className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`}>
                    No complaints raised yet.
                  </div>
                )}
                {backendToken && backendComplaints.length === 0 && (
                  <div className={`${body.className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`}>
                    No backend complaints raised yet.
                  </div>
                )}
                {backendToken && backendComplaints.map((complaint) => (
                  <div key={complaint.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className={`${heading.className} text-lg font-semibold text-white`}>{complaint.title}</div>
                    <div className={`${body.className} mt-2 text-sm text-slate-300`}>{complaint.detail}</div>
                    <div className={`${body.className} mt-3 text-xs uppercase tracking-[0.2em] text-cyan-200/80`}>{complaint.status?.replace('_', ' ')}</div>
                  </div>
                ))}
                {openComplaints.map((complaint) => (
                  <div key={complaint.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className={`${heading.className} text-lg font-semibold text-white`}>{complaint.title}</div>
                    <div className={`${body.className} mt-2 text-sm text-slate-300`}>{complaint.detail}</div>
                    <div className={`${body.className} mt-3 text-xs uppercase tracking-[0.2em] text-cyan-200/80`}>{complaint.status.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
