'use client';

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Inter, Space_Grotesk } from 'next/font/google';
import {
  FaArrowLeft,
  FaCircleCheck,
  FaMoneyBillTrendUp,
  FaReceipt,
  FaRoad,
  FaTruckMoving,
  FaUserPlus,
  FaWallet,
} from 'react-icons/fa6';

import { routePreferences, truckTypes } from '@/lib/demo-data';
import {
  acceptBooking,
  addDriver,
  addTruck,
  loadDemoStore,
  loginUser,
  markBookingCompleted,
  markBookingInTransit,
  markBookingPaid,
  markDriverPaid,
  rejectBooking,
  signUpUser,
} from '@/lib/demo-store';
import {
  createContractorVehicle,
  decideContractorBooking,
  getStoredBackendSession,
  listContractorBookings,
  listContractorVehicles,
  loginBackend,
  registerContractorBackend,
} from '@/lib/logistics-backend';

const heading = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

type OwnerSession = {
  id: string | number;
  name: string;
  email: string;
  companyName?: string;
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

export default function FleetPortal() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [store, setStore] = useState(() => loadDemoStore());
  const [session, setSession] = useState<OwnerSession | null>(null);
  const [message, setMessage] = useState('');
  const [authForm, setAuthForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    region: 'Delhi NCR',
    companyName: '',
  });
  const [truckForm, setTruckForm] = useState({
    registrationNumber: '',
    truckType: 'Mini Truck',
    capacityTons: '1.5',
    region: 'Delhi NCR',
  });
  const [driverForm, setDriverForm] = useState({
    name: '',
    email: '',
    password: 'DriverDemo123!',
    phone: '',
    region: 'Delhi NCR',
    truckId: '',
    rating: '4.5',
    predictedRating: '4.4',
    points: '180',
    trips: '60',
    fixedIncome: '5200',
    etaHours: '3',
    safetyNote: 'Verified documents and careful goods handling.',
    routePreference: 'Both',
  });
  const [backendToken, setBackendToken] = useState<string | null>(null);
  const [backendVehicles, setBackendVehicles] = useState<any[]>([]);
  const [backendBookings, setBackendBookings] = useState<any[]>([]);

  useEffect(() => {
    const sync = () => setStore(loadDemoStore());
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  useEffect(() => {
    const existing = getStoredBackendSession();
    if (!existing || existing.user.user_type !== 'contractor') return;
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
        const [vehicles, bookings] = await Promise.all([
          listContractorVehicles(backendToken),
          listContractorBookings(backendToken),
        ]);
        setBackendVehicles(vehicles);
        setBackendBookings(bookings);
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Backend sync failed.');
      }
    })();
  }, [backendToken]);

  const ownerTrucks = useMemo(() => {
    if (!session) return [];
    return store.trucks.filter((truck) => truck.ownerId === session.id);
  }, [store, session]);

  const ownerDrivers = useMemo(() => {
    if (!session) return [];
    return store.drivers.filter((driver) => driver.ownerId === session.id);
  }, [store, session]);

  const ownerBookings = useMemo(() => {
    if (!session) return [];
    return store.bookings
      .filter((booking) => booking.ownerId === session.id)
      .map((booking) => {
        const driver = store.drivers.find((item) => item.id === booking.driverId);
        const driverUser = store.users.find((item) => item.id === driver?.userId);
        const truck = store.trucks.find((item) => item.id === booking.truckId);
        const customer = store.users.find((item) => item.id === booking.customerId);
        return { booking, driver, driverUser, truck, customer };
      });
  }, [store, session]);

  const pendingRequests = useMemo(
    () => ownerBookings.filter(({ booking }) => booking.status === 'pending_approval'),
    [ownerBookings],
  );

  const liveBookings = useMemo(
    () => ownerBookings.filter(({ booking }) => booking.status !== 'pending_approval' && booking.status !== 'rejected'),
    [ownerBookings],
  );

  const truckCategorySummary = useMemo(() => {
    return truckTypes.map((truckType) => {
      const trucks = ownerTrucks.filter((truck) => truck.truckType === truckType);
      return {
        truckType,
        total: trucks.length,
        available: trucks.filter((truck) => truck.status === 'available').length,
        onTrip: trucks.filter((truck) => truck.status === 'on_trip').length,
        maintenance: trucks.filter((truck) => truck.status === 'maintenance').length,
      };
    }).filter((entry) => entry.total > 0);
  }, [ownerTrucks]);

  const revenueSnapshot = useMemo(() => {
    const paidRevenue = liveBookings.filter(({ booking }) => booking.paid).reduce((sum, { booking }) => sum + booking.amount, 0);
    const pendingRevenue = liveBookings.filter(({ booking }) => !booking.paid).reduce((sum, { booking }) => sum + booking.amount, 0);
    const paidDriverPayouts = liveBookings.filter(({ booking }) => booking.driverPaid).reduce((sum, { booking }) => sum + booking.driverPayout, 0);
    const dueDriverPayouts = liveBookings
      .filter(({ booking }) => booking.status === 'completed' && booking.paid && !booking.driverPaid)
      .reduce((sum, { booking }) => sum + booking.driverPayout, 0);

    return {
      paidRevenue,
      pendingRevenue,
      paidDriverPayouts,
      dueDriverPayouts,
      activeTrips: liveBookings.filter(({ booking }) => booking.status === 'accepted' || booking.status === 'in_transit').length,
      completedTrips: liveBookings.filter(({ booking }) => booking.status === 'completed').length,
      pendingRequests: pendingRequests.length,
    };
  }, [liveBookings, pendingRequests]);

  const backendVehicleSummary = useMemo(() => {
    if (!backendToken) return [];
    const labels: Record<string, string> = {
      mini_truck: 'Mini Truck',
      medium_truck: 'Medium Truck',
      full_truck: 'Full Truck',
      trailer: 'Trailer',
      tempo: 'Tempo',
    };
    return Object.values(
      backendVehicles.reduce<Record<string, { truckType: string; total: number; available: number; onTrip: number; maintenance: number }>>((acc, vehicle: any) => {
        const key = vehicle.vehicle_type;
        if (!acc[key]) {
          acc[key] = { truckType: labels[key] ?? key, total: 0, available: 0, onTrip: 0, maintenance: 0 };
        }
        acc[key].total += 1;
        if (vehicle.status === 'available') acc[key].available += 1;
        if (vehicle.status === 'in_use') acc[key].onTrip += 1;
        if (vehicle.status === 'maintenance') acc[key].maintenance += 1;
        return acc;
      }, {}),
    );
  }, [backendToken, backendVehicles]);

  const backendPendingBookings = useMemo(
    () => backendBookings.filter((booking: any) => booking.status === 'awaiting_acceptance'),
    [backendBookings],
  );

  const backendLiveBookings = useMemo(
    () => backendBookings.filter((booking: any) => booking.status !== 'awaiting_acceptance' && booking.status !== 'rejected'),
    [backendBookings],
  );

  const handleAuth = () => {
    void (async () => {
      try {
        const parts = authForm.name.trim().split(/\s+/);
        if (mode === 'signup') {
          const sessionData = await registerContractorBackend({
            first_name: parts[0] || 'Fleet',
            last_name: parts.slice(1).join(' ') || 'Owner',
            email: authForm.email,
            password: authForm.password,
            phone_number: authForm.phone,
          });
          setBackendToken(sessionData.token);
          setSession({ id: sessionData.user.id, name: `${sessionData.user.first_name} ${sessionData.user.last_name}`.trim(), email: sessionData.user.email, companyName: authForm.companyName });
          setMessage('Fleet owner account created on the backend.');
        } else {
          const sessionData = await loginBackend(authForm.email, authForm.password);
          if (sessionData.user.user_type !== 'contractor') {
            throw new Error('This account is not a fleet owner account.');
          }
          setBackendToken(sessionData.token);
          setSession({ id: sessionData.user.id, name: `${sessionData.user.first_name} ${sessionData.user.last_name}`.trim(), email: sessionData.user.email });
          setMessage('Logged in through the backend.');
        }
        setStore(loadDemoStore());
      } catch (error) {
        try {
          if (mode === 'signup') {
            const { user } = signUpUser({
              role: 'fleet_owner',
              name: authForm.name,
              email: authForm.email,
              password: authForm.password,
              phone: authForm.phone,
              region: authForm.region,
              companyName: authForm.companyName,
            });
            setSession({ id: user.id, name: user.name, email: user.email, companyName: user.companyName });
            setMessage('Backend unavailable. Fleet owner account created in demo mode.');
          } else {
            const { user } = loginUser(authForm.email, authForm.password, 'fleet_owner');
            setSession({ id: user.id, name: user.name, email: user.email, companyName: user.companyName });
            setMessage('Backend unavailable. Logged in through demo mode.');
          }
          setStore(loadDemoStore());
        } catch (fallbackError) {
          setMessage(fallbackError instanceof Error ? fallbackError.message : 'Unable to continue.');
        }
      }
    })();
  };

  const handleAddTruck = () => {
    if (!session) return;
    void (async () => {
      if (backendToken) {
        try {
          await createContractorVehicle(backendToken, {
            registration_number: truckForm.registrationNumber.toUpperCase(),
            vehicle_type: {
              'Mini Truck': 'mini_truck',
              'Medium Truck': 'medium_truck',
              'Full Truck': 'full_truck',
              Trailer: 'trailer',
              Tempo: 'tempo',
            }[truckForm.truckType] ?? 'mini_truck',
            capacity_weight: truckForm.capacityTons,
            model_make: `${truckForm.truckType} Fleet Vehicle`,
            fuel_type: 'diesel',
            current_location: truckForm.region,
            insurance_policy_number: `INS-${truckForm.registrationNumber.toUpperCase()}`,
            puc_number: `PUC-${truckForm.registrationNumber.toUpperCase()}`,
            odometer_reading: 0,
          });
          setBackendVehicles(await listContractorVehicles(backendToken));
          setTruckForm({ ...truckForm, registrationNumber: '' });
          setMessage('Truck added to the backend fleet inventory.');
          return;
        } catch (error) {
          setMessage(error instanceof Error ? error.message : 'Unable to add truck to the backend.');
          return;
        }
      }

      try {
        addTruck({
          ownerId: session.id as string,
          registrationNumber: truckForm.registrationNumber,
          truckType: truckForm.truckType,
          capacityTons: Number(truckForm.capacityTons),
          region: truckForm.region,
        });
        setStore(loadDemoStore());
        setTruckForm({ ...truckForm, registrationNumber: '' });
        setMessage('Truck added successfully.');
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Unable to add truck.');
      }
    })();
  };

  const handleAddDriver = () => {
    if (!session || !driverForm.truckId) {
      setMessage('Select a truck for the driver.');
      return;
    }

    try {
      addDriver({
        ownerId: session.id,
        name: driverForm.name,
        email: driverForm.email,
        password: driverForm.password,
        phone: driverForm.phone,
        region: driverForm.region,
        truckId: driverForm.truckId,
        rating: Number(driverForm.rating),
        predictedRating: Number(driverForm.predictedRating),
        points: Number(driverForm.points),
        trips: Number(driverForm.trips),
        fixedIncome: Number(driverForm.fixedIncome),
        etaHours: Number(driverForm.etaHours),
        safetyNote: driverForm.safetyNote,
        routePreference: driverForm.routePreference,
      });
      setStore(loadDemoStore());
      setDriverForm({ ...driverForm, name: '', email: '', phone: '' });
      setMessage('Driver added to fleet.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to add driver.');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#060b16_0%,#101826_52%,#0b1120_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.14),transparent_20%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_24%)]" />
      <div className="absolute left-[6%] top-28 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '88px 88px' }} />
      <div className="relative min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/get-started" className={`${body.className} inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-orange-300`}>
              <FaArrowLeft className="h-4 w-4" />
              Back to roles
            </Link>
            <div className={`${body.className} rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-200`}>
              Live fleet operations console
            </div>
          </div>

          <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/55 p-8 backdrop-blur">
              <p className={`${body.className} mb-3 text-sm uppercase tracking-[0.2em] text-orange-200/80`}>Fleet owner portal</p>
              <h1 className={`${heading.className} text-4xl font-bold leading-tight`}>
                Register trucks, onboard drivers, complete trips, and release payouts from one command view.
              </h1>
              <p className={`${body.className} mt-4 text-sm text-slate-300`}>
                This backend-facing workspace now tracks booking status, customer payment, driver dues, pooling notes, and completed trip visibility in one place.
              </p>

              {!session ? (
                <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
                  <div className="mb-4 flex gap-2">
                    <button onClick={() => setMode('login')} className={`rounded-full px-4 py-2 text-sm ${mode === 'login' ? 'bg-orange-400 text-slate-950' : 'bg-white/5 text-slate-300'}`}>Login</button>
                    <button onClick={() => setMode('signup')} className={`rounded-full px-4 py-2 text-sm ${mode === 'signup' ? 'bg-orange-400 text-slate-950' : 'bg-white/5 text-slate-300'}`}>Sign up</button>
                  </div>
                  <div className="grid gap-4">
                    {mode === 'signup' && (
                      <>
                        <input value={authForm.name} onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })} placeholder="Owner name" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                        <input value={authForm.companyName} onChange={(e) => setAuthForm({ ...authForm, companyName: e.target.value })} placeholder="Company name" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                        <input value={authForm.phone} onChange={(e) => setAuthForm({ ...authForm, phone: e.target.value })} placeholder="Phone" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                        <input value={authForm.region} onChange={(e) => setAuthForm({ ...authForm, region: e.target.value })} placeholder="Region" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      </>
                    )}
                    <input value={authForm.email} onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })} placeholder="Email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                    <input value={authForm.password} onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })} placeholder="Password" type="password" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                    <button onClick={handleAuth} className="rounded-2xl bg-orange-400 px-4 py-3 font-semibold text-slate-950">
                      {mode === 'signup' ? 'Create fleet owner account' : 'Log in as fleet owner'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-8 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
                  <div className={`${heading.className} text-2xl font-semibold`}>{session.companyName || session.name}</div>
                  <p className={`${body.className} mt-2 text-sm text-slate-200`}>
                    Logged in as {session.email}. Every booking update here is reflected in the driver dashboard and admin console.
                  </p>
                </div>
              )}

              {message && <div className={`${body.className} mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200`}>{message}</div>}
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaWallet className="mb-3 h-5 w-5 text-orange-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Paid revenue</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>
                  Rs. {(backendToken ? backendLiveBookings.filter((booking: any) => booking.full_payment_paid).reduce((sum: number, booking: any) => sum + Number(booking.final_price || 0), 0) : revenueSnapshot.paidRevenue).toLocaleString()}
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaReceipt className="mb-3 h-5 w-5 text-amber-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Pending booking approvals</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>{backendToken ? backendPendingBookings.length : revenueSnapshot.pendingRequests}</div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaMoneyBillTrendUp className="mb-3 h-5 w-5 text-cyan-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Pending customer dues</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>
                  Rs. {(backendToken ? backendLiveBookings.filter((booking: any) => !booking.full_payment_paid).reduce((sum: number, booking: any) => sum + Number(booking.final_price || 0), 0) : revenueSnapshot.pendingRevenue).toLocaleString()}
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaTruckMoving className="mb-3 h-5 w-5 text-violet-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Active trips</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>{backendToken ? backendLiveBookings.filter((booking: any) => ['accepted', 'in_progress'].includes(booking.status)).length : revenueSnapshot.activeTrips}</div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaCircleCheck className="mb-3 h-5 w-5 text-emerald-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Completed trips</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>{backendToken ? backendLiveBookings.filter((booking: any) => booking.status === 'completed').length : revenueSnapshot.completedTrips}</div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaRoad className="mb-3 h-5 w-5 text-orange-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Payouts released</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>Rs. {(backendToken ? 0 : revenueSnapshot.paidDriverPayouts).toLocaleString()}</div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
                <FaReceipt className="mb-3 h-5 w-5 text-amber-300" />
                <div className={`${body.className} text-sm text-slate-300`}>Driver payout due</div>
                <div className={`${heading.className} mt-2 text-3xl font-semibold`}>Rs. {(backendToken ? 0 : revenueSnapshot.dueDriverPayouts).toLocaleString()}</div>
              </div>
            </div>
          </section>

          {session && (
            <>
              <section className="mt-8 grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
                <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
                  <h2 className={`${heading.className} text-3xl font-semibold`}>Fleet setup</h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className={`${heading.className} text-xl font-semibold`}>Add truck details</h3>
                      <input value={truckForm.registrationNumber} onChange={(e) => setTruckForm({ ...truckForm, registrationNumber: e.target.value })} placeholder="Registration number" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <select value={truckForm.truckType} onChange={(e) => setTruckForm({ ...truckForm, truckType: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                        {truckTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                      </select>
                      <input value={truckForm.capacityTons} onChange={(e) => setTruckForm({ ...truckForm, capacityTons: e.target.value })} placeholder="Capacity in tons" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <input value={truckForm.region} onChange={(e) => setTruckForm({ ...truckForm, region: e.target.value })} placeholder="Operating region" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <button onClick={handleAddTruck} className="w-full rounded-2xl bg-orange-400 px-4 py-3 font-semibold text-slate-950">Add truck</button>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <FaUserPlus className="h-5 w-5 text-orange-300" />
                        <h3 className={`${heading.className} text-xl font-semibold`}>Add fleet driver</h3>
                      </div>
                      <input value={driverForm.name} onChange={(e) => setDriverForm({ ...driverForm, name: e.target.value })} placeholder="Driver name" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <input value={driverForm.email} onChange={(e) => setDriverForm({ ...driverForm, email: e.target.value })} placeholder="Driver email" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <input value={driverForm.phone} onChange={(e) => setDriverForm({ ...driverForm, phone: e.target.value })} placeholder="Driver phone" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <select value={driverForm.truckId} onChange={(e) => setDriverForm({ ...driverForm, truckId: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                        <option value="">Assign truck</option>
                        {backendToken
                          ? backendVehicles.map((truck: any) => <option key={truck.id} value={truck.id}>{truck.registration_number} • {truck.vehicle_type}</option>)
                          : ownerTrucks.map((truck) => <option key={truck.id} value={truck.id}>{truck.registrationNumber} • {truck.truckType}</option>)}
                      </select>
                      <select value={driverForm.routePreference} onChange={(e) => setDriverForm({ ...driverForm, routePreference: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                        {routePreferences.map((route) => <option key={route} value={route}>{route}</option>)}
                      </select>
                      <input value={driverForm.fixedIncome} onChange={(e) => setDriverForm({ ...driverForm, fixedIncome: e.target.value })} placeholder="Fixed driver income" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <textarea value={driverForm.safetyNote} onChange={(e) => setDriverForm({ ...driverForm, safetyNote: e.target.value })} placeholder="Safety note" className="min-h-[88px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3" />
                      <button onClick={handleAddDriver} className="w-full rounded-2xl bg-orange-400 px-4 py-3 font-semibold text-slate-950">
                        {backendToken ? 'Add driver in demo mode' : 'Add driver'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
                  <h2 className={`${heading.className} text-3xl font-semibold`}>Fleet roster</h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {!backendToken && ownerDrivers.map((driver) => {
                      const user = store.users.find((item) => item.id === driver.userId);
                      const truck = store.trucks.find((item) => item.id === driver.truckId);
                      const driverJobs = ownerBookings.filter((entry) => entry.booking.driverId === driver.id);
                      const pendingPayout = driverJobs
                        .filter((entry) => entry.booking.status === 'completed' && entry.booking.paid && !entry.booking.driverPaid)
                        .reduce((sum, entry) => sum + entry.booking.driverPayout, 0);

                      return (
                        <div key={driver.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                          <div className={`${heading.className} text-xl font-semibold`}>{user?.name}</div>
                          <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                            {truck?.registrationNumber} • {driver.routePreference} • Rating {driver.rating}
                          </div>
                          <div className={`${body.className} mt-4 grid gap-2 text-sm text-slate-200`}>
                            <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Fixed income: Rs. {driver.fixedIncome.toLocaleString()}</div>
                            <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Trips logged: {driver.trips}</div>
                            <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Due payout now: Rs. {pendingPayout.toLocaleString()}</div>
                          </div>
                        </div>
                      );
                  })}
                  {backendToken && (
                    <div className={`${body.className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 md:col-span-2`}>
                      Driver onboarding is still in demo mode on this screen. Trucks and booking approvals are now connected to the real backend.
                    </div>
                  )}
                </div>
              </div>
              </section>

              <section className="mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className={`${heading.className} text-3xl font-semibold`}>Current vehicles on board</h2>
                    <p className={`${body.className} mt-2 text-sm text-slate-300`}>
                      View registered trucks by category so your team can quickly see which truck classes are available, busy, or under maintenance.
                    </p>
                  </div>
                  <div className={`${body.className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`}>
                    Categorised by truck class
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {(backendToken ? backendVehicleSummary : truckCategorySummary).map((entry: any) => (
                    <div key={entry.truckType} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                      <div className={`${heading.className} text-xl font-semibold`}>{entry.truckType}</div>
                      <div className={`${body.className} mt-3 flex flex-wrap gap-2 text-sm`}>
                        <span className="rounded-full bg-slate-400/10 px-3 py-1 text-slate-100">Total {entry.total}</span>
                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100">Available {entry.available}</span>
                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">On trip {entry.onTrip}</span>
                        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-100">Maintenance {entry.maintenance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className={`${heading.className} text-3xl font-semibold`}>Incoming booking requests</h2>
                    <p className={`${body.className} mt-2 text-sm text-slate-300`}>
                      Customers submit requests first. Accept a request here to confirm the truck and move it into the live trip pipeline.
                    </p>
                  </div>
                  <div className={`${body.className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`}>
                    Requests waiting for owner approval
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {(backendToken ? backendPendingBookings.length === 0 : pendingRequests.length === 0) && (
                    <div className={`${body.className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`}>
                      No customer requests are waiting for approval right now.
                    </div>
                  )}
                  {backendToken && backendPendingBookings.map((booking: any) => (
                    <div key={booking.id} className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className={`${heading.className} text-2xl font-semibold`}>
                            {booking.service_request_details?.pickup_address} to {booking.service_request_details?.drop_address}
                          </div>
                          <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                            {booking.service_request_details?.vehicle_type_preference} • {formatDateTime(booking.service_request_details?.pickup_datetime)}
                          </div>
                          <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                            Customer: {booking.service_request_details?.customer_name} • Driver: {booking.driver_details?.name} • Truck: {booking.vehicle_details?.registration_number}
                          </div>
                        </div>
                        <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">Fare Rs. {Number(booking.final_price || 0).toLocaleString()}</span>
                          <span className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-100">Waiting approval</span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          onClick={() => {
                            void (async () => {
                              if (!backendToken) return;
                              await decideContractorBooking(backendToken, booking.id, 'accept');
                              setBackendBookings(await listContractorBookings(backendToken));
                              setMessage('Booking accepted on the backend.');
                            })();
                          }}
                          className="rounded-2xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950"
                        >
                          Accept request
                        </button>
                        <button
                          onClick={() => {
                            void (async () => {
                              if (!backendToken) return;
                              await decideContractorBooking(backendToken, booking.id, 'reject');
                              setBackendBookings(await listContractorBookings(backendToken));
                              setMessage('Booking rejected on the backend.');
                            })();
                          }}
                          className="rounded-2xl bg-rose-400 px-4 py-2 font-semibold text-slate-950"
                        >
                          Reject request
                        </button>
                      </div>
                    </div>
                  ))}
                  {!backendToken && pendingRequests.map(({ booking, driverUser, truck, customer }) => (
                    <div key={booking.id} className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className={`${heading.className} text-2xl font-semibold`}>{booking.from} to {booking.to}</div>
                          <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                            {booking.truckType} • {booking.loadType} • {formatDateTime(booking.pickupTime)}
                          </div>
                          <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                            Customer: {customer?.name ?? 'Unknown'} • Suggested driver: {driverUser?.name ?? 'Unassigned'} • Truck: {truck?.registrationNumber ?? 'Unassigned'}
                          </div>
                        </div>
                        <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">Fare Rs. {booking.amount.toLocaleString()}</span>
                          <span className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-100">Waiting approval</span>
                        </div>
                      </div>

                      {booking.poolMessage && (
                        <div className={`${body.className} mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50`}>
                          Pooling note: {booking.poolMessage}
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          onClick={() => {
                            setStore(acceptBooking(booking.id));
                            setMessage('Booking accepted and moved into the live trip board.');
                          }}
                          className="rounded-2xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950"
                        >
                          Accept request
                        </button>
                        <button
                          onClick={() => {
                            setStore(rejectBooking(booking.id, 'No matching truck slot available for this timing.'));
                            setMessage('Booking request rejected.');
                          }}
                          className="rounded-2xl bg-rose-400 px-4 py-2 font-semibold text-slate-950"
                        >
                          Reject request
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <h2 className={`${heading.className} text-3xl font-semibold`}>Accepted bookings and payout desk</h2>
                    <p className={`${body.className} mt-2 text-sm text-slate-300`}>
                      Once accepted, move jobs from accepted to in transit to completed, then record customer payment and driver payout separately.
                    </p>
                  </div>
                  <div className={`${body.className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`}>
                    Shared with driver dashboard and admin console
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {backendToken && backendLiveBookings.map((booking: any) => (
                    <div key={booking.id} className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className={`${heading.className} text-2xl font-semibold`}>
                            {booking.service_request_details?.pickup_address} to {booking.service_request_details?.drop_address}
                          </div>
                          <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                            {booking.service_request_details?.vehicle_type_preference} • {formatDateTime(booking.service_request_details?.pickup_datetime)}
                          </div>
                          <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                            Customer: {booking.service_request_details?.customer_name} • Driver: {booking.driver_details?.name} • Truck: {booking.vehicle_details?.registration_number}
                          </div>
                        </div>
                        <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">Fare Rs. {Number(booking.final_price || 0).toLocaleString()}</span>
                          <span className={`rounded-full px-3 py-1 ${booking.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : booking.status === 'in_progress' ? 'bg-violet-400/10 text-violet-100' : 'bg-sky-400/10 text-sky-100'}`}>
                            {String(booking.status).replace('_', ' ')}
                          </span>
                          <span className={`rounded-full px-3 py-1 ${booking.full_payment_paid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-rose-400/10 text-rose-100'}`}>
                            {booking.full_payment_paid ? 'Customer paid' : 'Customer due'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {!backendToken && liveBookings.map(({ booking, driverUser, truck, customer }) => (
                    <div key={booking.id} className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className={`${heading.className} text-2xl font-semibold`}>{booking.from} to {booking.to}</div>
                          <div className={`${body.className} mt-2 text-sm text-slate-300`}>
                            {booking.truckType} • {booking.loadType} • {formatDateTime(booking.pickupTime)}
                          </div>
                          <div className={`${body.className} mt-2 text-sm text-slate-400`}>
                            Customer: {customer?.name ?? 'Unknown'} • Driver: {driverUser?.name ?? 'Unassigned'} • Truck: {truck?.registrationNumber ?? 'Unassigned'}
                          </div>
                        </div>
                        <div className={`${body.className} flex flex-wrap gap-2 text-sm`}>
                          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">Fare Rs. {booking.amount.toLocaleString()}</span>
                          <span className="rounded-full bg-amber-400/10 px-3 py-1 text-amber-100">Driver payout Rs. {booking.driverPayout.toLocaleString()}</span>
                          <span className={`rounded-full px-3 py-1 ${booking.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : booking.status === 'in_transit' ? 'bg-violet-400/10 text-violet-100' : 'bg-sky-400/10 text-sky-100'}`}>
                            {booking.status.replace('_', ' ')}
                          </span>
                          <span className={`rounded-full px-3 py-1 ${booking.paid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-rose-400/10 text-rose-100'}`}>
                            {booking.paid ? 'Customer paid' : 'Customer due'}
                          </span>
                          <span className={`rounded-full px-3 py-1 ${booking.driverPaid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`}>
                            {booking.driverPaid ? 'Driver paid' : 'Driver due'}
                          </span>
                        </div>
                      </div>

                      {booking.poolMessage && (
                        <div className={`${body.className} mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50`}>
                          Pooling note: {booking.poolMessage}
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-3">
                        {booking.status === 'accepted' && (
                          <button
                            onClick={() => {
                              setStore(markBookingInTransit(booking.id));
                              setMessage('Trip marked in transit.');
                            }}
                            className="rounded-2xl bg-violet-400 px-4 py-2 font-semibold text-slate-950"
                          >
                            Mark in transit
                          </button>
                        )}
                        {booking.status === 'in_transit' && (
                          <button
                            onClick={() => {
                              setStore(markBookingCompleted(booking.id));
                              setMessage('Trip marked completed. Driver and truck are available again.');
                            }}
                            className="rounded-2xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950"
                          >
                            Mark completed
                          </button>
                        )}
                        {!booking.paid && (
                          <button
                            onClick={() => {
                              setStore(markBookingPaid(booking.id));
                              setMessage('Customer payment recorded.');
                            }}
                            className="rounded-2xl bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
                          >
                            Record customer payment
                          </button>
                        )}
                        {booking.status === 'completed' && booking.paid && !booking.driverPaid && (
                          <button
                            onClick={() => {
                              setStore(markDriverPaid(booking.id));
                              setMessage('Driver payout recorded and synced to dashboards.');
                            }}
                            className="rounded-2xl bg-orange-400 px-4 py-2 font-semibold text-slate-950"
                          >
                            Mark driver payout sent
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
