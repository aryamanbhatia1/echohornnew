'use client';

import { defaultDemoStore, DemoBooking, DemoComplaint, DemoDriver, DemoRole, DemoStore, DemoTruck, DemoUser } from '@/lib/demo-data';

const STORAGE_KEY = 'echohorn-demo-store-v2';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[1-9]\d{9,14}$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z\s'.-]{1,48}[A-Za-z.]$/;
const COMPANY_REGEX = /^[A-Za-z0-9][A-Za-z0-9\s&'.-]{1,58}[A-Za-z0-9.]$/;
const REGION_REGEX = /^[A-Za-z][A-Za-z\s-]{1,38}[A-Za-z]$/;
const REGISTRATION_REGEX = /^[A-Z0-9-]{6,15}$/;

function generateId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function normalizePhone(phone: string) {
  return phone.replace(/[\s()-]/g, '');
}

function requireValidName(value: string, label: string) {
  const trimmed = value.trim();
  if (!NAME_REGEX.test(trimmed)) {
    throw new Error(`${label} must use real letters, not random numbers or symbols.`);
  }
  return trimmed.replace(/\s+/g, ' ');
}

function requireValidEmail(value: string) {
  const normalized = normalizeEmail(value);
  if (!EMAIL_REGEX.test(normalized)) {
    throw new Error('Enter a valid email address.');
  }
  return normalized;
}

function requireValidPhone(value: string) {
  const normalized = normalizePhone(value);
  if (!PHONE_REGEX.test(normalized)) {
    throw new Error('Enter a valid phone number with 10 to 15 digits.');
  }
  return normalized;
}

function requireValidRegion(value: string) {
  const trimmed = value.trim();
  if (!REGION_REGEX.test(trimmed)) {
    throw new Error('Enter a valid region or city name.');
  }
  return trimmed.replace(/\s+/g, ' ');
}

function requireValidCompany(value: string) {
  const trimmed = value.trim();
  if (!COMPANY_REGEX.test(trimmed)) {
    throw new Error('Enter a valid company name.');
  }
  return trimmed.replace(/\s+/g, ' ');
}

function requireStrongPassword(value: string) {
  const trimmed = value.trim();
  if (trimmed.length < 8) {
    throw new Error('Password must be at least 8 characters.');
  }
  return trimmed;
}

function requireValidLocation(value: string, label: string) {
  const trimmed = value.trim();
  if (trimmed.length < 6 || !/[A-Za-z]/.test(trimmed)) {
    throw new Error(`${label} must be a real location.`);
  }
  return trimmed.replace(/\s+/g, ' ');
}

function inferDriverPayout(driver: DemoDriver | undefined, amount: number) {
  if (driver?.fixedIncome) {
    return driver.fixedIncome;
  }
  return Math.round(amount * 0.55);
}

function createPoolMessage(from: string, to: string, pickupTime: string, truckType: string, existingBookings: DemoBooking[]) {
  const nearbyBooking = existingBookings.find((booking) => {
    return (
      booking.truckType === truckType &&
      booking.status !== 'completed' &&
      booking.to.toLowerCase().includes(to.trim().split(' ')[0].toLowerCase())
    );
  });

  if (nearbyBooking) {
    return `Truck pooling suggested with another ${truckType.toLowerCase()} run headed toward ${to}. Dispatch can club both loads around ${pickupTime.slice(11, 16)} to save fuel.`;
  }

  return `Pooling scan complete: this route from ${from} to ${to} is being watched for a nearby shared lane.`;
}

function sanitizeStore(store: Partial<DemoStore> | null | undefined): DemoStore {
  const users = Array.isArray(store?.users) ? store.users : defaultDemoStore.users;
  const trucks = Array.isArray(store?.trucks) ? store.trucks : defaultDemoStore.trucks;
  const drivers = Array.isArray(store?.drivers) ? store.drivers : defaultDemoStore.drivers;
  const rawBookings = Array.isArray(store?.bookings) ? store.bookings : defaultDemoStore.bookings;
  const complaints = Array.isArray(store?.complaints) ? store.complaints : defaultDemoStore.complaints;

  const bookings = rawBookings.map((booking) => {
    const matchedDriver = drivers.find((driver) => driver.id === booking.driverId);
    return {
      ...booking,
      status: booking.status ?? 'pending_approval',
      paid: booking.paid ?? false,
      driverPayout: booking.driverPayout ?? inferDriverPayout(matchedDriver, booking.amount),
      driverPaid: booking.driverPaid ?? false,
      poolMessage:
        booking.poolMessage ??
        createPoolMessage(booking.from, booking.to, booking.pickupTime, booking.truckType, rawBookings),
    };
  });

  return { users, trucks, drivers, bookings, complaints };
}

function getDriverContext(store: DemoStore, driverId: string, truckId: string) {
  const driver = store.drivers.find((item) => item.id === driverId);
  const truck = store.trucks.find((item) => item.id === truckId);
  return { driver, truck };
}

export function loadDemoStore(): DemoStore {
  if (typeof window === 'undefined') {
    return defaultDemoStore;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDemoStore));
    return defaultDemoStore;
  }

  try {
    const parsed = sanitizeStore(JSON.parse(raw) as DemoStore);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    return parsed;
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDemoStore));
    return defaultDemoStore;
  }
}

export function saveDemoStore(store: DemoStore) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizeStore(store)));
  }
}

export function resetDemoStore() {
  saveDemoStore(defaultDemoStore);
  return defaultDemoStore;
}

export function signUpUser(payload: Omit<DemoUser, 'id'>) {
  const store = loadDemoStore();
  const email = requireValidEmail(payload.email);
  const exists = store.users.some((user) => user.email.toLowerCase() === email);
  if (exists) {
    throw new Error('An account with this email already exists.');
  }

  const user: DemoUser = {
    ...payload,
    id: generateId(payload.role),
    name: requireValidName(payload.name, payload.role === 'fleet_owner' ? 'Owner name' : 'Name'),
    email,
    password: requireStrongPassword(payload.password),
    phone: requireValidPhone(payload.phone),
    region: requireValidRegion(payload.region),
    companyName: payload.companyName ? requireValidCompany(payload.companyName) : payload.companyName,
  };
  const nextStore = { ...store, users: [...store.users, user] };
  saveDemoStore(nextStore);
  return { user, store: nextStore };
}

export function loginUser(email: string, password: string, role: DemoRole) {
  const store = loadDemoStore();
  const normalizedEmail = requireValidEmail(email);
  const user = store.users.find(
    (item) =>
      item.email.toLowerCase() === normalizedEmail &&
      item.password === password.trim() &&
      item.role === role,
  );

  if (!user) {
    throw new Error('Invalid credentials for this role.');
  }

  return { user, store };
}

export function createBooking(payload: Omit<DemoBooking, 'id' | 'status' | 'paid'>) {
  const store = loadDemoStore();
  const { driver } = getDriverContext(store, payload.driverId, payload.truckId);
  const from = requireValidLocation(payload.from, 'Pickup location');
  const to = requireValidLocation(payload.to, 'Drop location');
  const booking: DemoBooking = {
    ...payload,
    from,
    to,
    id: generateId('booking'),
    status: 'pending_approval',
    paid: false,
    driverPayout: inferDriverPayout(driver, payload.amount),
    driverPaid: false,
    poolMessage: createPoolMessage(from, to, payload.pickupTime, payload.truckType, store.bookings),
  };
  const nextStore = {
    ...store,
    bookings: [booking, ...store.bookings],
  };
  saveDemoStore(nextStore);
  return { booking, store: nextStore };
}

export function acceptBooking(bookingId: string) {
  const store = loadDemoStore();
  const target = store.bookings.find((booking) => booking.id === bookingId);
  if (!target) {
    return store;
  }

  const nextStore = {
    ...store,
    bookings: store.bookings.map((booking) =>
      booking.id === bookingId
        ? { ...booking, status: 'accepted' as const, rejectionReason: undefined }
        : booking,
    ),
    drivers: store.drivers.map((driver) =>
      driver.id === target.driverId ? { ...driver, available: false } : driver,
    ),
    trucks: store.trucks.map((truck) =>
      truck.id === target.truckId ? { ...truck, status: 'on_trip' as const } : truck,
    ),
  };
  saveDemoStore(nextStore);
  return nextStore;
}

export function rejectBooking(bookingId: string, reason = 'Not accepted by fleet owner.') {
  const store = loadDemoStore();
  const target = store.bookings.find((booking) => booking.id === bookingId);
  if (!target) {
    return store;
  }

  const nextStore = {
    ...store,
    bookings: store.bookings.map((booking) =>
      booking.id === bookingId
        ? { ...booking, status: 'rejected' as const, rejectionReason: reason.trim() }
        : booking,
    ),
    drivers: store.drivers.map((driver) =>
      driver.id === target.driverId ? { ...driver, available: true } : driver,
    ),
    trucks: store.trucks.map((truck) =>
      truck.id === target.truckId ? { ...truck, status: 'available' as const } : truck,
    ),
  };
  saveDemoStore(nextStore);
  return nextStore;
}

export function addTruck(payload: Omit<DemoTruck, 'id' | 'status'>) {
  const store = loadDemoStore();
  const registrationNumber = payload.registrationNumber.trim().toUpperCase();
  if (!REGISTRATION_REGEX.test(registrationNumber)) {
    throw new Error('Enter a valid truck registration number.');
  }
  if (!Number.isFinite(payload.capacityTons) || payload.capacityTons <= 0) {
    throw new Error('Truck capacity must be a valid positive number.');
  }
  const truck: DemoTruck = {
    ...payload,
    registrationNumber,
    region: requireValidRegion(payload.region),
    id: generateId('truck'),
    status: 'available',
  };
  const nextStore = { ...store, trucks: [truck, ...store.trucks] };
  saveDemoStore(nextStore);
  return { truck, store: nextStore };
}

export function addDriver(payload: Omit<DemoUser, 'id' | 'role'> & {
  ownerId: string;
  truckId: string;
  rating: number;
  predictedRating: number;
  points: number;
  trips: number;
  fixedIncome: number;
  etaHours: number;
  safetyNote: string;
  routePreference: string;
}) {
  const store = loadDemoStore();
  const email = requireValidEmail(payload.email);
  const exists = store.users.some((user) => user.email.toLowerCase() === email);
  if (exists) {
    throw new Error('A driver with this email already exists.');
  }
  const userId = generateId('driver-user');
  const driverId = generateId('driver');

  const user: DemoUser = {
    id: userId,
    role: 'driver',
    name: requireValidName(payload.name, 'Driver name'),
    email,
    password: requireStrongPassword(payload.password),
    phone: requireValidPhone(payload.phone),
    region: requireValidRegion(payload.region),
  };

  const driver: DemoDriver = {
    id: driverId,
    userId,
    ownerId: payload.ownerId,
    truckId: payload.truckId,
    rating: payload.rating,
    predictedRating: payload.predictedRating,
    points: payload.points,
    trips: payload.trips,
    fixedIncome: payload.fixedIncome,
    etaHours: payload.etaHours,
    safetyNote: payload.safetyNote,
    routePreference: payload.routePreference,
    available: true,
  };

  const nextStore = {
    ...store,
    users: [...store.users, user],
    drivers: [...store.drivers, driver],
  };
  saveDemoStore(nextStore);
  return { user, driver, store: nextStore };
}

export function markBookingPaid(bookingId: string) {
  const store = loadDemoStore();
  const bookings = store.bookings.map((booking) =>
    booking.id === bookingId ? { ...booking, paid: true } : booking,
  );
  const nextStore = { ...store, bookings };
  saveDemoStore(nextStore);
  return nextStore;
}

export function markBookingInTransit(bookingId: string) {
  const store = loadDemoStore();
  const target = store.bookings.find((booking) => booking.id === bookingId);
  if (!target) {
    return store;
  }

  const nextStore = {
    ...store,
    bookings: store.bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, status: 'in_transit' as const } : booking,
    ),
    drivers: store.drivers.map((driver) =>
      driver.id === target.driverId ? { ...driver, available: false } : driver,
    ),
    trucks: store.trucks.map((truck) =>
      truck.id === target.truckId ? { ...truck, status: 'on_trip' as const } : truck,
    ),
  };
  saveDemoStore(nextStore);
  return nextStore;
}

export function markBookingCompleted(bookingId: string) {
  const store = loadDemoStore();
  const target = store.bookings.find((booking) => booking.id === bookingId);
  if (!target) {
    return store;
  }

  const nextStore = {
    ...store,
    bookings: store.bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, status: 'completed' as const } : booking,
    ),
    drivers: store.drivers.map((driver) =>
      driver.id === target.driverId
        ? {
            ...driver,
            available: true,
            points: driver.points + 25,
            trips: driver.trips + 1,
          }
        : driver,
    ),
    trucks: store.trucks.map((truck) =>
      truck.id === target.truckId ? { ...truck, status: 'available' as const } : truck,
    ),
  };
  saveDemoStore(nextStore);
  return nextStore;
}

export function markDriverPaid(bookingId: string) {
  const store = loadDemoStore();
  const nextStore = {
    ...store,
    bookings: store.bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, driverPaid: true } : booking,
    ),
  };
  saveDemoStore(nextStore);
  return nextStore;
}

export function createComplaint(payload: Omit<DemoComplaint, 'id' | 'status' | 'createdAt'>) {
  const store = loadDemoStore();
  const complaint: DemoComplaint = {
    ...payload,
    title: payload.title.trim(),
    detail: payload.detail.trim(),
    id: generateId('complaint'),
    status: 'open',
    createdAt: new Date().toISOString(),
  };
  const nextStore = {
    ...store,
    complaints: [complaint, ...store.complaints],
  };
  saveDemoStore(nextStore);
  return { complaint, store: nextStore };
}
