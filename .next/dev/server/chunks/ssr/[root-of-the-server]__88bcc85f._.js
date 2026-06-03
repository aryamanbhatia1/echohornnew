module.exports = [
"[next]/internal/font/google/space_grotesk_36d91787.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_grotesk_36d91787-module__wtPCNq__className",
});
}),
"[next]/internal/font/google/space_grotesk_36d91787.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_36d91787.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/inter_20c57e15.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_20c57e15-module__Xqbggq__className",
});
}),
"[next]/internal/font/google/inter_20c57e15.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_20c57e15.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/EchoHorn/lib/demo-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultDemoStore",
    ()=>defaultDemoStore,
    "routePreferences",
    ()=>routePreferences,
    "truckTypes",
    ()=>truckTypes
]);
const truckTypes = [
    "Mini Truck",
    "Medium Truck",
    "Full Truck",
    "Trailer",
    "Tempo"
];
const routePreferences = [
    "Local",
    "Intercity",
    "Both"
];
const users = [
    {
        id: "owner-aq",
        role: "fleet_owner",
        name: "AQ Logistics",
        email: "owner@aqlogistics.demo",
        password: "OwnerDemo123!",
        phone: "+91 98111 11111",
        region: "Delhi NCR",
        companyName: "AQ Logistics"
    },
    {
        id: "consumer-riya",
        role: "consumer",
        name: "Riya Sharma",
        email: "customer@aqlogistics.demo",
        password: "CustomerDemo123!",
        phone: "+91 98222 22222",
        region: "Noida"
    }
];
const trucks = [
    {
        id: "truck-101",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ101",
        truckType: "Mini Truck",
        capacityTons: 1.5,
        region: "Delhi NCR",
        status: "available"
    },
    {
        id: "truck-102",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ102",
        truckType: "Mini Truck",
        capacityTons: 1.8,
        region: "Noida",
        status: "available"
    },
    {
        id: "truck-201",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ201",
        truckType: "Medium Truck",
        capacityTons: 3.2,
        region: "Gurugram",
        status: "available"
    },
    {
        id: "truck-202",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ202",
        truckType: "Medium Truck",
        capacityTons: 4.1,
        region: "Delhi NCR",
        status: "available"
    },
    {
        id: "truck-301",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ301",
        truckType: "Full Truck",
        capacityTons: 7.5,
        region: "Jaipur",
        status: "available"
    },
    {
        id: "truck-302",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ302",
        truckType: "Full Truck",
        capacityTons: 8.0,
        region: "Noida",
        status: "available"
    },
    {
        id: "truck-401",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ401",
        truckType: "Trailer",
        capacityTons: 16,
        region: "Faridabad",
        status: "available"
    },
    {
        id: "truck-501",
        ownerId: "owner-aq",
        registrationNumber: "HR55AQ501",
        truckType: "Tempo",
        capacityTons: 0.9,
        region: "Delhi NCR",
        status: "available"
    }
];
const seededDrivers = [
    [
        "Arjun Malik",
        "arjun.driver@aqlogistics.demo",
        "truck-101",
        4.8,
        4.7,
        340,
        122,
        5200,
        2,
        "Verified ID, seal check, live route check-ins",
        "Both",
        "Delhi NCR"
    ],
    [
        "Neeraj Kumar",
        "neeraj.driver@aqlogistics.demo",
        "truck-201",
        4.6,
        4.5,
        286,
        94,
        6800,
        3,
        "Camera-backed loading proof and safe parking compliance",
        "Intercity",
        "Gurugram"
    ],
    [
        "Vikas Rao",
        "vikas.driver@aqlogistics.demo",
        "truck-301",
        4.9,
        4.8,
        401,
        158,
        8400,
        4,
        "High-value goods handling and disciplined timing",
        "Both",
        "Noida"
    ],
    [
        "Sahil Khan",
        "sahil.driver@aqlogistics.demo",
        "truck-102",
        4.5,
        4.4,
        240,
        85,
        5100,
        2,
        "Light commercial specialist and quick pickup response",
        "Local",
        "Delhi NCR"
    ],
    [
        "Mohit Tyagi",
        "mohit.driver@aqlogistics.demo",
        "truck-202",
        4.7,
        4.6,
        318,
        107,
        6900,
        3,
        "Strong furniture handling and unload proof routine",
        "Both",
        "Ghaziabad"
    ],
    [
        "Imran Sheikh",
        "imran.driver@aqlogistics.demo",
        "truck-302",
        4.4,
        4.3,
        211,
        73,
        7900,
        5,
        "Reliable intercity completion with low claims history",
        "Intercity",
        "Jaipur"
    ],
    [
        "Punit Solanki",
        "punit.driver@aqlogistics.demo",
        "truck-501",
        4.3,
        4.2,
        188,
        68,
        4300,
        1,
        "Fast inner-city deliveries and flexible slots",
        "Local",
        "Noida"
    ],
    [
        "Rahul Verma",
        "rahul.driver@aqlogistics.demo",
        "truck-401",
        4.8,
        4.7,
        350,
        116,
        9900,
        6,
        "Heavy-load trailer operations and safety-trained",
        "Intercity",
        "Faridabad"
    ],
    [
        "Harshdeep Gill",
        "harsh.driver@aqlogistics.demo",
        "truck-201",
        4.6,
        4.5,
        267,
        89,
        6700,
        3,
        "Balanced ratings across punctuality and cargo care",
        "Both",
        "Delhi NCR"
    ],
    [
        "Ankit Yadav",
        "ankit.driver@aqlogistics.demo",
        "truck-202",
        4.5,
        4.4,
        229,
        81,
        6600,
        4,
        "Warehouse pickup discipline with careful loading",
        "Both",
        "Gurugram"
    ],
    [
        "Deepak Rana",
        "deepak.driver@aqlogistics.demo",
        "truck-301",
        4.7,
        4.6,
        303,
        101,
        8500,
        4,
        "Long-route specialist with strong customer reviews",
        "Intercity",
        "Jaipur"
    ],
    [
        "Naseem Ali",
        "naseem.driver@aqlogistics.demo",
        "truck-102",
        4.4,
        4.3,
        198,
        71,
        5000,
        2,
        "Responsive short-haul driver with clean completion record",
        "Local",
        "Noida"
    ]
];
const driverUsers = seededDrivers.map(([name, email, , , , , , , , , , region], index)=>({
        id: `driver-user-${index + 1}`,
        role: "driver",
        name,
        email,
        password: "DriverDemo123!",
        phone: `+91 98333 33${String(index + 1).padStart(3, "0")}`,
        region
    }));
const drivers = seededDrivers.map(([, , truckId, rating, predictedRating, points, trips, fixedIncome, etaHours, safetyNote, routePreference], index)=>({
        id: `driver-${index + 1}`,
        userId: `driver-user-${index + 1}`,
        ownerId: "owner-aq",
        truckId,
        rating,
        predictedRating,
        points,
        trips,
        fixedIncome,
        etaHours,
        safetyNote,
        routePreference,
        available: true
    }));
const bookings = [
    {
        id: "booking-1",
        customerId: "consumer-riya",
        driverId: "driver-1",
        ownerId: "owner-aq",
        truckId: "truck-101",
        from: "Noida Sector 18 Warehouse",
        to: "Gurugram Golf Course Extension Road",
        pickupTime: "2026-04-08T10:00",
        truckType: "Mini Truck",
        loadType: "Electronics",
        status: "completed",
        amount: 8200,
        paid: true,
        driverPayout: 5200,
        driverPaid: true,
        poolMessage: "Paired with a nearby electronics run to reduce empty return distance."
    },
    {
        id: "booking-2",
        customerId: "consumer-riya",
        driverId: "driver-2",
        ownerId: "owner-aq",
        truckId: "truck-201",
        from: "Delhi Furniture Market",
        to: "Jaipur Retail Hub",
        pickupTime: "2026-04-09T18:30",
        truckType: "Medium Truck",
        loadType: "Furniture",
        status: "pending_approval",
        amount: 14600,
        paid: false,
        driverPayout: 6800,
        driverPaid: false,
        poolMessage: "Eligible for truck pooling with another Jaipur-bound load in the 6 PM lane."
    }
];
const complaints = [
    {
        id: "complaint-1",
        customerId: "consumer-riya",
        bookingId: "booking-2",
        title: "Need faster booking confirmation",
        detail: "The customer wants clearer confirmation timing after submitting the request to the fleet owner.",
        status: "open",
        createdAt: "2026-04-08T09:15"
    }
];
const defaultDemoStore = {
    users: [
        ...users,
        ...driverUsers
    ],
    trucks,
    drivers,
    bookings,
    complaints
};
}),
"[project]/EchoHorn/lib/demo-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptBooking",
    ()=>acceptBooking,
    "addDriver",
    ()=>addDriver,
    "addTruck",
    ()=>addTruck,
    "createBooking",
    ()=>createBooking,
    "createComplaint",
    ()=>createComplaint,
    "loadDemoStore",
    ()=>loadDemoStore,
    "loginUser",
    ()=>loginUser,
    "markBookingCompleted",
    ()=>markBookingCompleted,
    "markBookingInTransit",
    ()=>markBookingInTransit,
    "markBookingPaid",
    ()=>markBookingPaid,
    "markDriverPaid",
    ()=>markDriverPaid,
    "rejectBooking",
    ()=>rejectBooking,
    "resetDemoStore",
    ()=>resetDemoStore,
    "saveDemoStore",
    ()=>saveDemoStore,
    "signUpUser",
    ()=>signUpUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-data.ts [app-ssr] (ecmascript)");
'use client';
;
const STORAGE_KEY = 'echohorn-demo-store-v2';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[1-9]\d{9,14}$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z\s'.-]{1,48}[A-Za-z.]$/;
const COMPANY_REGEX = /^[A-Za-z0-9][A-Za-z0-9\s&'.-]{1,58}[A-Za-z0-9.]$/;
const REGION_REGEX = /^[A-Za-z][A-Za-z\s-]{1,38}[A-Za-z]$/;
const REGISTRATION_REGEX = /^[A-Z0-9-]{6,15}$/;
function generateId(prefix) {
    return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}
function normalizeEmail(email) {
    return email.trim().toLowerCase();
}
function normalizePhone(phone) {
    return phone.replace(/[\s()-]/g, '');
}
function requireValidName(value, label) {
    const trimmed = value.trim();
    if (!NAME_REGEX.test(trimmed)) {
        throw new Error(`${label} must use real letters, not random numbers or symbols.`);
    }
    return trimmed.replace(/\s+/g, ' ');
}
function requireValidEmail(value) {
    const normalized = normalizeEmail(value);
    if (!EMAIL_REGEX.test(normalized)) {
        throw new Error('Enter a valid email address.');
    }
    return normalized;
}
function requireValidPhone(value) {
    const normalized = normalizePhone(value);
    if (!PHONE_REGEX.test(normalized)) {
        throw new Error('Enter a valid phone number with 10 to 15 digits.');
    }
    return normalized;
}
function requireValidRegion(value) {
    const trimmed = value.trim();
    if (!REGION_REGEX.test(trimmed)) {
        throw new Error('Enter a valid region or city name.');
    }
    return trimmed.replace(/\s+/g, ' ');
}
function requireValidCompany(value) {
    const trimmed = value.trim();
    if (!COMPANY_REGEX.test(trimmed)) {
        throw new Error('Enter a valid company name.');
    }
    return trimmed.replace(/\s+/g, ' ');
}
function requireStrongPassword(value) {
    const trimmed = value.trim();
    if (trimmed.length < 8) {
        throw new Error('Password must be at least 8 characters.');
    }
    return trimmed;
}
function requireValidLocation(value, label) {
    const trimmed = value.trim();
    if (trimmed.length < 6 || !/[A-Za-z]/.test(trimmed)) {
        throw new Error(`${label} must be a real location.`);
    }
    return trimmed.replace(/\s+/g, ' ');
}
function inferDriverPayout(driver, amount) {
    if (driver?.fixedIncome) {
        return driver.fixedIncome;
    }
    return Math.round(amount * 0.55);
}
function createPoolMessage(from, to, pickupTime, truckType, existingBookings) {
    const nearbyBooking = existingBookings.find((booking)=>{
        return booking.truckType === truckType && booking.status !== 'completed' && booking.to.toLowerCase().includes(to.trim().split(' ')[0].toLowerCase());
    });
    if (nearbyBooking) {
        return `Truck pooling suggested with another ${truckType.toLowerCase()} run headed toward ${to}. Dispatch can club both loads around ${pickupTime.slice(11, 16)} to save fuel.`;
    }
    return `Pooling scan complete: this route from ${from} to ${to} is being watched for a nearby shared lane.`;
}
function sanitizeStore(store) {
    const users = Array.isArray(store?.users) ? store.users : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"].users;
    const trucks = Array.isArray(store?.trucks) ? store.trucks : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"].trucks;
    const drivers = Array.isArray(store?.drivers) ? store.drivers : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"].drivers;
    const rawBookings = Array.isArray(store?.bookings) ? store.bookings : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"].bookings;
    const complaints = Array.isArray(store?.complaints) ? store.complaints : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"].complaints;
    const bookings = rawBookings.map((booking)=>{
        const matchedDriver = drivers.find((driver)=>driver.id === booking.driverId);
        return {
            ...booking,
            status: booking.status ?? 'pending_approval',
            paid: booking.paid ?? false,
            driverPayout: booking.driverPayout ?? inferDriverPayout(matchedDriver, booking.amount),
            driverPaid: booking.driverPaid ?? false,
            poolMessage: booking.poolMessage ?? createPoolMessage(booking.from, booking.to, booking.pickupTime, booking.truckType, rawBookings)
        };
    });
    return {
        users,
        trucks,
        drivers,
        bookings,
        complaints
    };
}
function getDriverContext(store, driverId, truckId) {
    const driver = store.drivers.find((item)=>item.id === driverId);
    const truck = store.trucks.find((item)=>item.id === truckId);
    return {
        driver,
        truck
    };
}
function loadDemoStore() {
    if ("TURBOPACK compile-time truthy", 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"];
    }
    //TURBOPACK unreachable
    ;
    const raw = undefined;
}
function saveDemoStore(store) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function resetDemoStore() {
    saveDemoStore(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDemoStore"];
}
function signUpUser(payload) {
    const store = loadDemoStore();
    const email = requireValidEmail(payload.email);
    const exists = store.users.some((user)=>user.email.toLowerCase() === email);
    if (exists) {
        throw new Error('An account with this email already exists.');
    }
    const user = {
        ...payload,
        id: generateId(payload.role),
        name: requireValidName(payload.name, payload.role === 'fleet_owner' ? 'Owner name' : 'Name'),
        email,
        password: requireStrongPassword(payload.password),
        phone: requireValidPhone(payload.phone),
        region: requireValidRegion(payload.region),
        companyName: payload.companyName ? requireValidCompany(payload.companyName) : payload.companyName
    };
    const nextStore = {
        ...store,
        users: [
            ...store.users,
            user
        ]
    };
    saveDemoStore(nextStore);
    return {
        user,
        store: nextStore
    };
}
function loginUser(email, password, role) {
    const store = loadDemoStore();
    const normalizedEmail = requireValidEmail(email);
    const user = store.users.find((item)=>item.email.toLowerCase() === normalizedEmail && item.password === password.trim() && item.role === role);
    if (!user) {
        throw new Error('Invalid credentials for this role.');
    }
    return {
        user,
        store
    };
}
function createBooking(payload) {
    const store = loadDemoStore();
    const { driver } = getDriverContext(store, payload.driverId, payload.truckId);
    const from = requireValidLocation(payload.from, 'Pickup location');
    const to = requireValidLocation(payload.to, 'Drop location');
    const booking = {
        ...payload,
        from,
        to,
        id: generateId('booking'),
        status: 'pending_approval',
        paid: false,
        driverPayout: inferDriverPayout(driver, payload.amount),
        driverPaid: false,
        poolMessage: createPoolMessage(from, to, payload.pickupTime, payload.truckType, store.bookings)
    };
    const nextStore = {
        ...store,
        bookings: [
            booking,
            ...store.bookings
        ]
    };
    saveDemoStore(nextStore);
    return {
        booking,
        store: nextStore
    };
}
function acceptBooking(bookingId) {
    const store = loadDemoStore();
    const target = store.bookings.find((booking)=>booking.id === bookingId);
    if (!target) {
        return store;
    }
    const nextStore = {
        ...store,
        bookings: store.bookings.map((booking)=>booking.id === bookingId ? {
                ...booking,
                status: 'accepted',
                rejectionReason: undefined
            } : booking),
        drivers: store.drivers.map((driver)=>driver.id === target.driverId ? {
                ...driver,
                available: false
            } : driver),
        trucks: store.trucks.map((truck)=>truck.id === target.truckId ? {
                ...truck,
                status: 'on_trip'
            } : truck)
    };
    saveDemoStore(nextStore);
    return nextStore;
}
function rejectBooking(bookingId, reason = 'Not accepted by fleet owner.') {
    const store = loadDemoStore();
    const target = store.bookings.find((booking)=>booking.id === bookingId);
    if (!target) {
        return store;
    }
    const nextStore = {
        ...store,
        bookings: store.bookings.map((booking)=>booking.id === bookingId ? {
                ...booking,
                status: 'rejected',
                rejectionReason: reason.trim()
            } : booking),
        drivers: store.drivers.map((driver)=>driver.id === target.driverId ? {
                ...driver,
                available: true
            } : driver),
        trucks: store.trucks.map((truck)=>truck.id === target.truckId ? {
                ...truck,
                status: 'available'
            } : truck)
    };
    saveDemoStore(nextStore);
    return nextStore;
}
function addTruck(payload) {
    const store = loadDemoStore();
    const registrationNumber = payload.registrationNumber.trim().toUpperCase();
    if (!REGISTRATION_REGEX.test(registrationNumber)) {
        throw new Error('Enter a valid truck registration number.');
    }
    if (!Number.isFinite(payload.capacityTons) || payload.capacityTons <= 0) {
        throw new Error('Truck capacity must be a valid positive number.');
    }
    const truck = {
        ...payload,
        registrationNumber,
        region: requireValidRegion(payload.region),
        id: generateId('truck'),
        status: 'available'
    };
    const nextStore = {
        ...store,
        trucks: [
            truck,
            ...store.trucks
        ]
    };
    saveDemoStore(nextStore);
    return {
        truck,
        store: nextStore
    };
}
function addDriver(payload) {
    const store = loadDemoStore();
    const email = requireValidEmail(payload.email);
    const exists = store.users.some((user)=>user.email.toLowerCase() === email);
    if (exists) {
        throw new Error('A driver with this email already exists.');
    }
    const userId = generateId('driver-user');
    const driverId = generateId('driver');
    const user = {
        id: userId,
        role: 'driver',
        name: requireValidName(payload.name, 'Driver name'),
        email,
        password: requireStrongPassword(payload.password),
        phone: requireValidPhone(payload.phone),
        region: requireValidRegion(payload.region)
    };
    const driver = {
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
        available: true
    };
    const nextStore = {
        ...store,
        users: [
            ...store.users,
            user
        ],
        drivers: [
            ...store.drivers,
            driver
        ]
    };
    saveDemoStore(nextStore);
    return {
        user,
        driver,
        store: nextStore
    };
}
function markBookingPaid(bookingId) {
    const store = loadDemoStore();
    const bookings = store.bookings.map((booking)=>booking.id === bookingId ? {
            ...booking,
            paid: true
        } : booking);
    const nextStore = {
        ...store,
        bookings
    };
    saveDemoStore(nextStore);
    return nextStore;
}
function markBookingInTransit(bookingId) {
    const store = loadDemoStore();
    const target = store.bookings.find((booking)=>booking.id === bookingId);
    if (!target) {
        return store;
    }
    const nextStore = {
        ...store,
        bookings: store.bookings.map((booking)=>booking.id === bookingId ? {
                ...booking,
                status: 'in_transit'
            } : booking),
        drivers: store.drivers.map((driver)=>driver.id === target.driverId ? {
                ...driver,
                available: false
            } : driver),
        trucks: store.trucks.map((truck)=>truck.id === target.truckId ? {
                ...truck,
                status: 'on_trip'
            } : truck)
    };
    saveDemoStore(nextStore);
    return nextStore;
}
function markBookingCompleted(bookingId) {
    const store = loadDemoStore();
    const target = store.bookings.find((booking)=>booking.id === bookingId);
    if (!target) {
        return store;
    }
    const nextStore = {
        ...store,
        bookings: store.bookings.map((booking)=>booking.id === bookingId ? {
                ...booking,
                status: 'completed'
            } : booking),
        drivers: store.drivers.map((driver)=>driver.id === target.driverId ? {
                ...driver,
                available: true,
                points: driver.points + 25,
                trips: driver.trips + 1
            } : driver),
        trucks: store.trucks.map((truck)=>truck.id === target.truckId ? {
                ...truck,
                status: 'available'
            } : truck)
    };
    saveDemoStore(nextStore);
    return nextStore;
}
function markDriverPaid(bookingId) {
    const store = loadDemoStore();
    const nextStore = {
        ...store,
        bookings: store.bookings.map((booking)=>booking.id === bookingId ? {
                ...booking,
                driverPaid: true
            } : booking)
    };
    saveDemoStore(nextStore);
    return nextStore;
}
function createComplaint(payload) {
    const store = loadDemoStore();
    const complaint = {
        ...payload,
        title: payload.title.trim(),
        detail: payload.detail.trim(),
        id: generateId('complaint'),
        status: 'open',
        createdAt: new Date().toISOString()
    };
    const nextStore = {
        ...store,
        complaints: [
            complaint,
            ...store.complaints
        ]
    };
    saveDemoStore(nextStore);
    return {
        complaint,
        store: nextStore
    };
}
}),
"[project]/EchoHorn/components/driver/DriverPortal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DriverPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_36d91787.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_20c57e15.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function formatDateTime(value) {
    return new Date(value).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}
function DriverPortal() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('login');
    const [store, setStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        phone: '',
        region: 'Delhi NCR'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sync = ()=>setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
        window.addEventListener('storage', sync);
        return ()=>window.removeEventListener('storage', sync);
    }, []);
    const driverUser = session ? store.users.find((user)=>user.id === session.id) : null;
    const driverRecord = session ? store.drivers.find((driver)=>driver.userId === session.id) : null;
    const truck = driverRecord ? store.trucks.find((item)=>item.id === driverRecord.truckId) : null;
    const jobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!driverRecord) return [];
        return store.bookings.filter((booking)=>booking.driverId === driverRecord.id && booking.status !== 'pending_approval' && booking.status !== 'rejected');
    }, [
        driverRecord,
        store.bookings
    ]);
    const earnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const paid = jobs.filter((job)=>job.driverPaid).reduce((sum, job)=>sum + job.driverPayout, 0);
        const due = jobs.filter((job)=>job.status === 'completed' && job.paid && !job.driverPaid).reduce((sum, job)=>sum + job.driverPayout, 0);
        const awaitingCustomer = jobs.filter((job)=>job.status === 'completed' && !job.paid).reduce((sum, job)=>sum + job.driverPayout, 0);
        return {
            paid,
            due,
            awaitingCustomer
        };
    }, [
        jobs
    ]);
    const handleAuth = ()=>{
        try {
            if (mode === 'signup') {
                const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUpUser"])({
                    role: 'driver',
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    phone: form.phone,
                    region: form.region
                });
                setSession({
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
                setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
                setMessage('Driver account created. Fleet owner assignment can now be added in the fleet portal.');
            } else {
                const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginUser"])(form.email, form.password, 'driver');
                setSession({
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
                setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
                setMessage('Logged in as driver.');
            }
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Unable to continue.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#04140d_0%,#0b1520_52%,#0a111b_100%)] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.12),transparent_20%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_24%)]"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[8%] top-28 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[12%] top-36 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.08]",
                style: {
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '88px 88px'
                }
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/get-started",
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-emerald-300`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        "Back to roles"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-200`,
                                    children: "Driver operations and payout desk"
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "grid gap-6 lg:grid-cols-[0.92fr_1.08fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[30px] border border-white/10 bg-slate-950/55 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mb-3 text-sm uppercase tracking-[0.2em] text-emerald-200/80`,
                                            children: "Driver portal"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-4xl font-bold leading-tight`,
                                            children: "Drivers can track assigned trips, trip completion, dues, and payout releases in one dashboard."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        !session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 rounded-[28px] border border-white/10 bg-slate-950/70 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setMode('login'),
                                                            className: `rounded-full px-4 py-2 text-sm ${mode === 'login' ? 'bg-emerald-400 text-slate-950' : 'bg-white/5 text-slate-300'}`,
                                                            children: "Login"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setMode('signup'),
                                                            className: `rounded-full px-4 py-2 text-sm ${mode === 'signup' ? 'bg-emerald-400 text-slate-950' : 'bg-white/5 text-slate-300'}`,
                                                            children: "Sign up"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4",
                                                    children: [
                                                        mode === 'signup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form.name,
                                                            onChange: (e)=>setForm({
                                                                    ...form,
                                                                    name: e.target.value
                                                                }),
                                                            placeholder: "Driver name",
                                                            className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 43
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form.email,
                                                            onChange: (e)=>setForm({
                                                                    ...form,
                                                                    email: e.target.value
                                                                }),
                                                            placeholder: "Email",
                                                            className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: form.password,
                                                            onChange: (e)=>setForm({
                                                                    ...form,
                                                                    password: e.target.value
                                                                }),
                                                            placeholder: "Password",
                                                            type: "password",
                                                            className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this),
                                                        mode === 'signup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.phone,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            phone: e.target.value
                                                                        }),
                                                                    placeholder: "Phone",
                                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: form.region,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            region: e.target.value
                                                                        }),
                                                                    placeholder: "Region",
                                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleAuth,
                                                            className: "rounded-2xl bg-emerald-400 px-4 py-3 font-semibold text-slate-950",
                                                            children: mode === 'signup' ? 'Create driver account' : 'Log in as driver'
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold`,
                                                    children: [
                                                        "Welcome, ",
                                                        session.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                    children: [
                                                        session.email,
                                                        ". Trip completions, customer payments, and driver payouts will appear here automatically."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200`,
                                            children: message
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRankingStar"], {
                                                    className: "mb-3 h-5 w-5 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Customer rating"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: driverRecord?.rating ?? '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRoad"], {
                                                    className: "mb-3 h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Driver points"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: driverRecord?.points ?? '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTruck"], {
                                                    className: "mb-3 h-5 w-5 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Assigned truck"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-xl font-semibold`,
                                                    children: truck?.registrationNumber ?? 'Unassigned'
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWallet"], {
                                                    className: "mb-3 h-5 w-5 text-amber-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Due payout"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: [
                                                        "Rs. ",
                                                        earnings.due.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "mt-8 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[30px] border border-white/10 bg-slate-950/55 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaIdCard"], {
                                                    className: "h-5 w-5 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Driver profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-6 space-y-4 text-sm text-slate-300`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-slate-950/50 p-4",
                                                    children: [
                                                        "Region: ",
                                                        driverUser?.region ?? 'Unknown'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-slate-950/50 p-4",
                                                    children: [
                                                        "Route preference: ",
                                                        driverRecord?.routePreference ?? 'Not assigned'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-slate-950/50 p-4",
                                                    children: [
                                                        "Fixed income per trip: Rs. ",
                                                        driverRecord?.fixedIncome?.toLocaleString() ?? '0'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-slate-950/50 p-4",
                                                    children: [
                                                        "Paid out so far: Rs. ",
                                                        earnings.paid.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-slate-950/50 p-4",
                                                    children: [
                                                        "Completed but awaiting customer clearance: Rs. ",
                                                        earnings.awaitingCustomer.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-slate-950/50 p-4",
                                                    children: driverRecord?.safetyNote ?? 'No safety note yet.'
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[30px] border border-white/10 bg-slate-950/70 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                            children: "Assigned jobs and payouts"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-4",
                                            children: [
                                                jobs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`,
                                                    children: "No jobs assigned to this driver in the current demo store."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this),
                                                jobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_36d91787$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                                                children: [
                                                                                    job.from,
                                                                                    " to ",
                                                                                    job.to
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                                lineNumber: 202,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                                children: [
                                                                                    job.truckType,
                                                                                    " • ",
                                                                                    job.loadType,
                                                                                    " • ",
                                                                                    formatDateTime(job.pickupTime)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `rounded-full px-3 py-1 ${job.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : job.status === 'in_transit' ? 'bg-violet-400/10 text-violet-100' : 'bg-sky-400/10 text-sky-100'}`,
                                                                                children: job.status.replace('_', ' ')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                                lineNumber: 208,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `rounded-full px-3 py-1 ${job.paid ? 'bg-cyan-400/10 text-cyan-100' : 'bg-rose-400/10 text-rose-100'}`,
                                                                                children: job.paid ? 'Customer cleared' : 'Waiting for customer payment'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                                lineNumber: 211,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `rounded-full px-3 py-1 ${job.driverPaid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`,
                                                                                children: job.driverPaid ? 'Payout sent' : 'Payout pending'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                                lineNumber: 214,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_20c57e15$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 grid gap-3 text-sm text-slate-200 md:grid-cols-2`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl border border-white/10 bg-black/30 p-4",
                                                                        children: [
                                                                            "Driver income for this job: Rs. ",
                                                                            job.driverPayout.toLocaleString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl border border-white/10 bg-black/30 p-4",
                                                                        children: job.poolMessage ?? 'No pooling note for this lane.'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, job.id, true, {
                                                        fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EchoHorn/components/driver/DriverPortal.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__88bcc85f._.js.map