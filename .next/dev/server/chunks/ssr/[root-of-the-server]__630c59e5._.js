module.exports = [
"[next]/internal/font/google/space_grotesk_e2d548de.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_grotesk_e2d548de-module__uTLZ_q__className",
});
}),
"[next]/internal/font/google/space_grotesk_e2d548de.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e2d548de.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/inter_aa1abb6.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_aa1abb6-module__PbEOTW__className",
});
}),
"[next]/internal/font/google/inter_aa1abb6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_aa1abb6.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
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
"[project]/EchoHorn/lib/logistics-backend.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearBackendSession",
    ()=>clearBackendSession,
    "createBackendBooking",
    ()=>createBackendBooking,
    "createBackendComplaint",
    ()=>createBackendComplaint,
    "createContractorVehicle",
    ()=>createContractorVehicle,
    "createServiceRequest",
    ()=>createServiceRequest,
    "decideContractorBooking",
    ()=>decideContractorBooking,
    "getAdminInsights",
    ()=>getAdminInsights,
    "getAvailableDrivers",
    ()=>getAvailableDrivers,
    "getStoredBackendSession",
    ()=>getStoredBackendSession,
    "listComplaints",
    ()=>listComplaints,
    "listConsumerBookings",
    ()=>listConsumerBookings,
    "listContractorBookings",
    ()=>listContractorBookings,
    "listContractorVehicles",
    ()=>listContractorVehicles,
    "loginBackend",
    ()=>loginBackend,
    "registerConsumerBackend",
    ()=>registerConsumerBackend,
    "registerContractorBackend",
    ()=>registerContractorBackend
]);
'use client';
const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://127.0.0.1:5001';
const TOKEN_KEY = 'echohorn-backend-token';
const USER_KEY = 'echohorn-backend-user';
async function request(path, options = {}, token) {
    const headers = new Headers(options.headers);
    headers.set('Content-Type', 'application/json');
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    const response = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers
    });
    const data = await response.json().catch(()=>({}));
    if (!response.ok) {
        const errorMessage = data?.detail || data?.error || Object.values(data || {})?.flat?.()?.[0] || 'Request failed.';
        throw new Error(String(errorMessage));
    }
    return data;
}
function getStoredBackendSession() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const rawUser = undefined;
}
function clearBackendSession() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function loginBackend(email, password) {
    const tokenData = await request('/api/auth/login/', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });
    const user = await request('/api/auth/me/', {}, tokenData.access);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        token: tokenData.access,
        user
    };
}
async function registerConsumerBackend(payload) {
    await request('/api/auth/register/consumer/', {
        method: 'POST',
        body: JSON.stringify({
            ...payload,
            password2: payload.password
        })
    });
    return loginBackend(payload.email, payload.password);
}
async function registerContractorBackend(payload) {
    await request('/api/auth/register/contractor/', {
        method: 'POST',
        body: JSON.stringify({
            ...payload,
            password2: payload.password
        })
    });
    return loginBackend(payload.email, payload.password);
}
async function createServiceRequest(token, payload) {
    return request('/api/consumer/requests/', {
        method: 'POST',
        body: JSON.stringify(payload)
    }, token);
}
async function getAvailableDrivers(token, requestId) {
    return request(`/api/consumer/requests/${requestId}/drivers/`, {}, token);
}
async function createBackendBooking(token, payload) {
    return request('/api/consumer/bookings/', {
        method: 'POST',
        body: JSON.stringify(payload)
    }, token);
}
async function listConsumerBookings(token) {
    return request('/api/consumer/bookings/list/', {}, token);
}
async function createBackendComplaint(token, payload) {
    return request('/api/consumer/complaints/', {
        method: 'POST',
        body: JSON.stringify(payload)
    }, token);
}
async function listComplaints(token) {
    return request('/api/consumer/complaints/', {}, token);
}
async function listContractorVehicles(token) {
    return request('/api/contractor/vehicles/', {}, token);
}
async function createContractorVehicle(token, payload) {
    return request('/api/contractor/vehicles/', {
        method: 'POST',
        body: JSON.stringify(payload)
    }, token);
}
async function listContractorBookings(token) {
    return request('/api/contractor/bookings/', {}, token);
}
async function decideContractorBooking(token, bookingId, action) {
    return request(`/api/contractor/bookings/${bookingId}/decision/`, {
        method: 'POST',
        body: JSON.stringify({
            action
        })
    }, token);
}
async function getAdminInsights(token) {
    return request('/api/core/admin/insights/', {}, token);
}
}),
"[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FleetPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e2d548de.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_aa1abb6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/logistics-backend.ts [app-ssr] (ecmascript)");
'use client';
;
;
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
function FleetPortal() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('login');
    const [store, setStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [authForm, setAuthForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        phone: '',
        region: 'Delhi NCR',
        companyName: ''
    });
    const [truckForm, setTruckForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        registrationNumber: '',
        truckType: 'Mini Truck',
        capacityTons: '1.5',
        region: 'Delhi NCR'
    });
    const [driverForm, setDriverForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
        routePreference: 'Both'
    });
    const [backendToken, setBackendToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [backendVehicles, setBackendVehicles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [backendBookings, setBackendBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sync = ()=>setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
        window.addEventListener('storage', sync);
        return ()=>window.removeEventListener('storage', sync);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredBackendSession"])();
        if (!existing || existing.user.user_type !== 'contractor') return;
        setBackendToken(existing.token);
        setSession({
            id: existing.user.id,
            name: `${existing.user.first_name} ${existing.user.last_name}`.trim(),
            email: existing.user.email
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!backendToken) return;
        void (async ()=>{
            try {
                const [vehicles, bookings] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listContractorVehicles"])(backendToken),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listContractorBookings"])(backendToken)
                ]);
                setBackendVehicles(vehicles);
                setBackendBookings(bookings);
            } catch (error) {
                setMessage(error instanceof Error ? error.message : 'Backend sync failed.');
            }
        })();
    }, [
        backendToken
    ]);
    const ownerTrucks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!session) return [];
        return store.trucks.filter((truck)=>truck.ownerId === session.id);
    }, [
        store,
        session
    ]);
    const ownerDrivers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!session) return [];
        return store.drivers.filter((driver)=>driver.ownerId === session.id);
    }, [
        store,
        session
    ]);
    const ownerBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!session) return [];
        return store.bookings.filter((booking)=>booking.ownerId === session.id).map((booking)=>{
            const driver = store.drivers.find((item)=>item.id === booking.driverId);
            const driverUser = store.users.find((item)=>item.id === driver?.userId);
            const truck = store.trucks.find((item)=>item.id === booking.truckId);
            const customer = store.users.find((item)=>item.id === booking.customerId);
            return {
                booking,
                driver,
                driverUser,
                truck,
                customer
            };
        });
    }, [
        store,
        session
    ]);
    const pendingRequests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ownerBookings.filter(({ booking })=>booking.status === 'pending_approval'), [
        ownerBookings
    ]);
    const liveBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ownerBookings.filter(({ booking })=>booking.status !== 'pending_approval' && booking.status !== 'rejected'), [
        ownerBookings
    ]);
    const truckCategorySummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truckTypes"].map((truckType)=>{
            const trucks = ownerTrucks.filter((truck)=>truck.truckType === truckType);
            return {
                truckType,
                total: trucks.length,
                available: trucks.filter((truck)=>truck.status === 'available').length,
                onTrip: trucks.filter((truck)=>truck.status === 'on_trip').length,
                maintenance: trucks.filter((truck)=>truck.status === 'maintenance').length
            };
        }).filter((entry)=>entry.total > 0);
    }, [
        ownerTrucks
    ]);
    const revenueSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const paidRevenue = liveBookings.filter(({ booking })=>booking.paid).reduce((sum, { booking })=>sum + booking.amount, 0);
        const pendingRevenue = liveBookings.filter(({ booking })=>!booking.paid).reduce((sum, { booking })=>sum + booking.amount, 0);
        const paidDriverPayouts = liveBookings.filter(({ booking })=>booking.driverPaid).reduce((sum, { booking })=>sum + booking.driverPayout, 0);
        const dueDriverPayouts = liveBookings.filter(({ booking })=>booking.status === 'completed' && booking.paid && !booking.driverPaid).reduce((sum, { booking })=>sum + booking.driverPayout, 0);
        return {
            paidRevenue,
            pendingRevenue,
            paidDriverPayouts,
            dueDriverPayouts,
            activeTrips: liveBookings.filter(({ booking })=>booking.status === 'accepted' || booking.status === 'in_transit').length,
            completedTrips: liveBookings.filter(({ booking })=>booking.status === 'completed').length,
            pendingRequests: pendingRequests.length
        };
    }, [
        liveBookings,
        pendingRequests
    ]);
    const backendVehicleSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!backendToken) return [];
        const labels = {
            mini_truck: 'Mini Truck',
            medium_truck: 'Medium Truck',
            full_truck: 'Full Truck',
            trailer: 'Trailer',
            tempo: 'Tempo'
        };
        return Object.values(backendVehicles.reduce((acc, vehicle)=>{
            const key = vehicle.vehicle_type;
            if (!acc[key]) {
                acc[key] = {
                    truckType: labels[key] ?? key,
                    total: 0,
                    available: 0,
                    onTrip: 0,
                    maintenance: 0
                };
            }
            acc[key].total += 1;
            if (vehicle.status === 'available') acc[key].available += 1;
            if (vehicle.status === 'in_use') acc[key].onTrip += 1;
            if (vehicle.status === 'maintenance') acc[key].maintenance += 1;
            return acc;
        }, {}));
    }, [
        backendToken,
        backendVehicles
    ]);
    const backendPendingBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>backendBookings.filter((booking)=>booking.status === 'awaiting_acceptance'), [
        backendBookings
    ]);
    const backendLiveBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>backendBookings.filter((booking)=>booking.status !== 'awaiting_acceptance' && booking.status !== 'rejected'), [
        backendBookings
    ]);
    const handleAuth = ()=>{
        void (async ()=>{
            try {
                const parts = authForm.name.trim().split(/\s+/);
                if (mode === 'signup') {
                    const sessionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerContractorBackend"])({
                        first_name: parts[0] || 'Fleet',
                        last_name: parts.slice(1).join(' ') || 'Owner',
                        email: authForm.email,
                        password: authForm.password,
                        phone_number: authForm.phone
                    });
                    setBackendToken(sessionData.token);
                    setSession({
                        id: sessionData.user.id,
                        name: `${sessionData.user.first_name} ${sessionData.user.last_name}`.trim(),
                        email: sessionData.user.email,
                        companyName: authForm.companyName
                    });
                    setMessage('Fleet owner account created on the backend.');
                } else {
                    const sessionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginBackend"])(authForm.email, authForm.password);
                    if (sessionData.user.user_type !== 'contractor') {
                        throw new Error('This account is not a fleet owner account.');
                    }
                    setBackendToken(sessionData.token);
                    setSession({
                        id: sessionData.user.id,
                        name: `${sessionData.user.first_name} ${sessionData.user.last_name}`.trim(),
                        email: sessionData.user.email
                    });
                    setMessage('Logged in through the backend.');
                }
                setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
            } catch (error) {
                try {
                    if (mode === 'signup') {
                        const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signUpUser"])({
                            role: 'fleet_owner',
                            name: authForm.name,
                            email: authForm.email,
                            password: authForm.password,
                            phone: authForm.phone,
                            region: authForm.region,
                            companyName: authForm.companyName
                        });
                        setSession({
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            companyName: user.companyName
                        });
                        setMessage('Backend unavailable. Fleet owner account created in demo mode.');
                    } else {
                        const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginUser"])(authForm.email, authForm.password, 'fleet_owner');
                        setSession({
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            companyName: user.companyName
                        });
                        setMessage('Backend unavailable. Logged in through demo mode.');
                    }
                    setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
                } catch (fallbackError) {
                    setMessage(fallbackError instanceof Error ? fallbackError.message : 'Unable to continue.');
                }
            }
        })();
    };
    const handleAddTruck = ()=>{
        if (!session) return;
        void (async ()=>{
            if (backendToken) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContractorVehicle"])(backendToken, {
                        registration_number: truckForm.registrationNumber.toUpperCase(),
                        vehicle_type: {
                            'Mini Truck': 'mini_truck',
                            'Medium Truck': 'medium_truck',
                            'Full Truck': 'full_truck',
                            Trailer: 'trailer',
                            Tempo: 'tempo'
                        }[truckForm.truckType] ?? 'mini_truck',
                        capacity_weight: truckForm.capacityTons,
                        model_make: `${truckForm.truckType} Fleet Vehicle`,
                        fuel_type: 'diesel',
                        current_location: truckForm.region,
                        insurance_policy_number: `INS-${truckForm.registrationNumber.toUpperCase()}`,
                        puc_number: `PUC-${truckForm.registrationNumber.toUpperCase()}`,
                        odometer_reading: 0
                    });
                    setBackendVehicles(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listContractorVehicles"])(backendToken));
                    setTruckForm({
                        ...truckForm,
                        registrationNumber: ''
                    });
                    setMessage('Truck added to the backend fleet inventory.');
                    return;
                } catch (error) {
                    setMessage(error instanceof Error ? error.message : 'Unable to add truck to the backend.');
                    return;
                }
            }
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTruck"])({
                    ownerId: session.id,
                    registrationNumber: truckForm.registrationNumber,
                    truckType: truckForm.truckType,
                    capacityTons: Number(truckForm.capacityTons),
                    region: truckForm.region
                });
                setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
                setTruckForm({
                    ...truckForm,
                    registrationNumber: ''
                });
                setMessage('Truck added successfully.');
            } catch (error) {
                setMessage(error instanceof Error ? error.message : 'Unable to add truck.');
            }
        })();
    };
    const handleAddDriver = ()=>{
        if (!session || !driverForm.truckId) {
            setMessage('Select a truck for the driver.');
            return;
        }
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDriver"])({
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
                routePreference: driverForm.routePreference
            });
            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
            setDriverForm({
                ...driverForm,
                name: '',
                email: '',
                phone: ''
            });
            setMessage('Driver added to fleet.');
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Unable to add driver.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#060b16_0%,#101826_52%,#0b1120_100%)] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.14),transparent_20%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_24%)]"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[6%] top-28 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[10%] top-36 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.08]",
                style: {
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '88px 88px'
                }
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/get-started",
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-orange-300`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        "Back to roles"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-200`,
                                    children: "Live fleet operations console"
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "grid gap-6 lg:grid-cols-[0.92fr_1.08fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/55 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mb-3 text-sm uppercase tracking-[0.2em] text-orange-200/80`,
                                            children: "Fleet owner portal"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-4xl font-bold leading-tight`,
                                            children: "Register trucks, onboard drivers, complete trips, and release payouts from one command view."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 text-sm text-slate-300`,
                                            children: "This backend-facing workspace now tracks booking status, customer payment, driver dues, pooling notes, and completed trip visibility in one place."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 393,
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
                                                            className: `rounded-full px-4 py-2 text-sm ${mode === 'login' ? 'bg-orange-400 text-slate-950' : 'bg-white/5 text-slate-300'}`,
                                                            children: "Login"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setMode('signup'),
                                                            className: `rounded-full px-4 py-2 text-sm ${mode === 'signup' ? 'bg-orange-400 text-slate-950' : 'bg-white/5 text-slate-300'}`,
                                                            children: "Sign up"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4",
                                                    children: [
                                                        mode === 'signup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: authForm.name,
                                                                    onChange: (e)=>setAuthForm({
                                                                            ...authForm,
                                                                            name: e.target.value
                                                                        }),
                                                                    placeholder: "Owner name",
                                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: authForm.companyName,
                                                                    onChange: (e)=>setAuthForm({
                                                                            ...authForm,
                                                                            companyName: e.target.value
                                                                        }),
                                                                    placeholder: "Company name",
                                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: authForm.phone,
                                                                    onChange: (e)=>setAuthForm({
                                                                            ...authForm,
                                                                            phone: e.target.value
                                                                        }),
                                                                    placeholder: "Phone",
                                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: authForm.region,
                                                                    onChange: (e)=>setAuthForm({
                                                                            ...authForm,
                                                                            region: e.target.value
                                                                        }),
                                                                    placeholder: "Region",
                                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: authForm.email,
                                                            onChange: (e)=>setAuthForm({
                                                                    ...authForm,
                                                                    email: e.target.value
                                                                }),
                                                            placeholder: "Email",
                                                            className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: authForm.password,
                                                            onChange: (e)=>setAuthForm({
                                                                    ...authForm,
                                                                    password: e.target.value
                                                                }),
                                                            placeholder: "Password",
                                                            type: "password",
                                                            className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleAuth,
                                                            className: "rounded-2xl bg-orange-400 px-4 py-3 font-semibold text-slate-950",
                                                            children: mode === 'signup' ? 'Create fleet owner account' : 'Log in as fleet owner'
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold`,
                                                    children: session.companyName || session.name
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-200`,
                                                    children: [
                                                        "Logged in as ",
                                                        session.email,
                                                        ". Every booking update here is reflected in the driver dashboard and admin console."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200`,
                                            children: message
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 428,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWallet"], {
                                                    className: "mb-3 h-5 w-5 text-orange-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Paid revenue"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: [
                                                        "Rs. ",
                                                        (backendToken ? backendLiveBookings.filter((booking)=>booking.full_payment_paid).reduce((sum, booking)=>sum + Number(booking.final_price || 0), 0) : revenueSnapshot.paidRevenue).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 432,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaReceipt"], {
                                                    className: "mb-3 h-5 w-5 text-amber-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Pending booking approvals"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: backendToken ? backendPendingBookings.length : revenueSnapshot.pendingRequests
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMoneyBillTrendUp"], {
                                                    className: "mb-3 h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Pending customer dues"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: [
                                                        "Rs. ",
                                                        (backendToken ? backendLiveBookings.filter((booking)=>!booking.full_payment_paid).reduce((sum, booking)=>sum + Number(booking.final_price || 0), 0) : revenueSnapshot.pendingRevenue).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTruckMoving"], {
                                                    className: "mb-3 h-5 w-5 text-violet-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Active trips"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: backendToken ? backendLiveBookings.filter((booking)=>[
                                                            'accepted',
                                                            'in_progress'
                                                        ].includes(booking.status)).length : revenueSnapshot.activeTrips
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCircleCheck"], {
                                                    className: "mb-3 h-5 w-5 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Completed trips"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: backendToken ? backendLiveBookings.filter((booking)=>booking.status === 'completed').length : revenueSnapshot.completedTrips
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 456,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRoad"], {
                                                    className: "mb-3 h-5 w-5 text-orange-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Payouts released"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: [
                                                        "Rs. ",
                                                        (backendToken ? 0 : revenueSnapshot.paidDriverPayouts).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaReceipt"], {
                                                    className: "mb-3 h-5 w-5 text-amber-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Driver payout due"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: [
                                                        "Rs. ",
                                                        (backendToken ? 0 : revenueSnapshot.dueDriverPayouts).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mt-8 grid gap-6 xl:grid-cols-[0.96fr_1.04fr]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Fleet setup"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 grid gap-6 lg:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                                    children: "Add truck details"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: truckForm.registrationNumber,
                                                                    onChange: (e)=>setTruckForm({
                                                                            ...truckForm,
                                                                            registrationNumber: e.target.value
                                                                        }),
                                                                    placeholder: "Registration number",
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: truckForm.truckType,
                                                                    onChange: (e)=>setTruckForm({
                                                                            ...truckForm,
                                                                            truckType: e.target.value
                                                                        }),
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truckTypes"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: type,
                                                                            children: type
                                                                        }, type, false, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 484,
                                                                            columnNumber: 51
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: truckForm.capacityTons,
                                                                    onChange: (e)=>setTruckForm({
                                                                            ...truckForm,
                                                                            capacityTons: e.target.value
                                                                        }),
                                                                    placeholder: "Capacity in tons",
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: truckForm.region,
                                                                    onChange: (e)=>setTruckForm({
                                                                            ...truckForm,
                                                                            region: e.target.value
                                                                        }),
                                                                    placeholder: "Operating region",
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleAddTruck,
                                                                    className: "w-full rounded-2xl bg-orange-400 px-4 py-3 font-semibold text-slate-950",
                                                                    children: "Add truck"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserPlus"], {
                                                                            className: "h-5 w-5 text-orange-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 493,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                                            children: "Add fleet driver"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 494,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: driverForm.name,
                                                                    onChange: (e)=>setDriverForm({
                                                                            ...driverForm,
                                                                            name: e.target.value
                                                                        }),
                                                                    placeholder: "Driver name",
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: driverForm.email,
                                                                    onChange: (e)=>setDriverForm({
                                                                            ...driverForm,
                                                                            email: e.target.value
                                                                        }),
                                                                    placeholder: "Driver email",
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: driverForm.phone,
                                                                    onChange: (e)=>setDriverForm({
                                                                            ...driverForm,
                                                                            phone: e.target.value
                                                                        }),
                                                                    placeholder: "Driver phone",
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: driverForm.truckId,
                                                                    onChange: (e)=>setDriverForm({
                                                                            ...driverForm,
                                                                            truckId: e.target.value
                                                                        }),
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Assign truck"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        backendToken ? backendVehicles.map((truck)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: truck.id,
                                                                                children: [
                                                                                    truck.registration_number,
                                                                                    " • ",
                                                                                    truck.vehicle_type
                                                                                ]
                                                                            }, truck.id, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 502,
                                                                                columnNumber: 65
                                                                            }, this)) : ownerTrucks.map((truck)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: truck.id,
                                                                                children: [
                                                                                    truck.registrationNumber,
                                                                                    " • ",
                                                                                    truck.truckType
                                                                                ]
                                                                            }, truck.id, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 503,
                                                                                columnNumber: 56
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: driverForm.routePreference,
                                                                    onChange: (e)=>setDriverForm({
                                                                            ...driverForm,
                                                                            routePreference: e.target.value
                                                                        }),
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routePreferences"].map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: route,
                                                                            children: route
                                                                        }, route, false, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 506,
                                                                            columnNumber: 58
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: driverForm.fixedIncome,
                                                                    onChange: (e)=>setDriverForm({
                                                                            ...driverForm,
                                                                            fixedIncome: e.target.value
                                                                        }),
                                                                    placeholder: "Fixed driver income",
                                                                    className: "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: driverForm.safetyNote,
                                                                    onChange: (e)=>setDriverForm({
                                                                            ...driverForm,
                                                                            safetyNote: e.target.value
                                                                        }),
                                                                    placeholder: "Safety note",
                                                                    className: "min-h-[88px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleAddDriver,
                                                                    className: "w-full rounded-2xl bg-orange-400 px-4 py-3 font-semibold text-slate-950",
                                                                    children: backendToken ? 'Add driver in demo mode' : 'Add driver'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[32px] border border-white/10 bg-slate-950/70 p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Fleet roster"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        !backendToken && ownerDrivers.map((driver)=>{
                                                            const user = store.users.find((item)=>item.id === driver.userId);
                                                            const truck = store.trucks.find((item)=>item.id === driver.truckId);
                                                            const driverJobs = ownerBookings.filter((entry)=>entry.booking.driverId === driver.id);
                                                            const pendingPayout = driverJobs.filter((entry)=>entry.booking.status === 'completed' && entry.booking.paid && !entry.booking.driverPaid).reduce((sum, entry)=>sum + entry.booking.driverPayout, 0);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                                        children: user?.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                        children: [
                                                                            truck?.registrationNumber,
                                                                            " • ",
                                                                            driver.routePreference,
                                                                            " • Rating ",
                                                                            driver.rating
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 grid gap-2 text-sm text-slate-200`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-2xl border border-white/10 bg-black/30 p-3",
                                                                                children: [
                                                                                    "Fixed income: Rs. ",
                                                                                    driver.fixedIncome.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 535,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-2xl border border-white/10 bg-black/30 p-3",
                                                                                children: [
                                                                                    "Trips logged: ",
                                                                                    driver.trips
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 536,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-2xl border border-white/10 bg-black/30 p-3",
                                                                                children: [
                                                                                    "Due payout now: Rs. ",
                                                                                    pendingPayout.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 537,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 534,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, driver.id, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 529,
                                                                columnNumber: 25
                                                            }, this);
                                                        }),
                                                        backendToken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 md:col-span-2`,
                                                            children: "Driver onboarding is still in demo mode on this screen. Trucks and booking approvals are now connected to the real backend."
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 517,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                            children: "Current vehicles on board"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                            children: "View registered trucks by category so your team can quickly see which truck classes are available, busy, or under maintenance."
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`,
                                                    children: "Categorised by truck class"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 552,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                                            children: (backendToken ? backendVehicleSummary : truckCategorySummary).map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-[28px] border border-white/10 bg-white/5 p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                            children: entry.truckType
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-3 flex flex-wrap gap-2 text-sm`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-slate-400/10 px-3 py-1 text-slate-100",
                                                                    children: [
                                                                        "Total ",
                                                                        entry.total
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100",
                                                                    children: [
                                                                        "Available ",
                                                                        entry.available
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 570,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100",
                                                                    children: [
                                                                        "On trip ",
                                                                        entry.onTrip
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-amber-400/10 px-3 py-1 text-amber-100",
                                                                    children: [
                                                                        "Maintenance ",
                                                                        entry.maintenance
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 572,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, entry.truckType, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 551,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                            children: "Incoming booking requests"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                            children: "Customers submit requests first. Accept a request here to confirm the truck and move it into the live trip pipeline."
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 583,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`,
                                                    children: "Requests waiting for owner approval"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-5",
                                            children: [
                                                (backendToken ? backendPendingBookings.length === 0 : pendingRequests.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`,
                                                    children: "No customer requests are waiting for approval right now."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 21
                                                }, this),
                                                backendToken && backendPendingBookings.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold`,
                                                                                children: [
                                                                                    booking.service_request_details?.pickup_address,
                                                                                    " to ",
                                                                                    booking.service_request_details?.drop_address
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 602,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                                children: [
                                                                                    booking.service_request_details?.vehicle_type_preference,
                                                                                    " • ",
                                                                                    formatDateTime(booking.service_request_details?.pickup_datetime)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 605,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-400`,
                                                                                children: [
                                                                                    "Customer: ",
                                                                                    booking.service_request_details?.customer_name,
                                                                                    " • Driver: ",
                                                                                    booking.driver_details?.name,
                                                                                    " • Truck: ",
                                                                                    booking.vehicle_details?.registration_number
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 608,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100",
                                                                                children: [
                                                                                    "Fare Rs. ",
                                                                                    Number(booking.final_price || 0).toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 613,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full bg-amber-400/10 px-3 py-1 text-amber-100",
                                                                                children: "Waiting approval"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 614,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 612,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 600,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex flex-wrap gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            void (async ()=>{
                                                                                if (!backendToken) return;
                                                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decideContractorBooking"])(backendToken, booking.id, 'accept');
                                                                                setBackendBookings(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listContractorBookings"])(backendToken));
                                                                                setMessage('Booking accepted on the backend.');
                                                                            })();
                                                                        },
                                                                        className: "rounded-2xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Accept request"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 618,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            void (async ()=>{
                                                                                if (!backendToken) return;
                                                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decideContractorBooking"])(backendToken, booking.id, 'reject');
                                                                                setBackendBookings(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listContractorBookings"])(backendToken));
                                                                                setMessage('Booking rejected on the backend.');
                                                                            })();
                                                                        },
                                                                        className: "rounded-2xl bg-rose-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Reject request"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 631,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, booking.id, true, {
                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 21
                                                    }, this)),
                                                !backendToken && pendingRequests.map(({ booking, driverUser, truck, customer })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold`,
                                                                                children: [
                                                                                    booking.from,
                                                                                    " to ",
                                                                                    booking.to
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 651,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                                children: [
                                                                                    booking.truckType,
                                                                                    " • ",
                                                                                    booking.loadType,
                                                                                    " • ",
                                                                                    formatDateTime(booking.pickupTime)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-400`,
                                                                                children: [
                                                                                    "Customer: ",
                                                                                    customer?.name ?? 'Unknown',
                                                                                    " • Suggested driver: ",
                                                                                    driverUser?.name ?? 'Unassigned',
                                                                                    " • Truck: ",
                                                                                    truck?.registrationNumber ?? 'Unassigned'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 655,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 650,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100",
                                                                                children: [
                                                                                    "Fare Rs. ",
                                                                                    booking.amount.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 660,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full bg-amber-400/10 px-3 py-1 text-amber-100",
                                                                                children: "Waiting approval"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 661,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 659,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 23
                                                            }, this),
                                                            booking.poolMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50`,
                                                                children: [
                                                                    "Pooling note: ",
                                                                    booking.poolMessage
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 666,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex flex-wrap gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["acceptBooking"])(booking.id));
                                                                            setMessage('Booking accepted and moved into the live trip board.');
                                                                        },
                                                                        className: "rounded-2xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Accept request"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 672,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectBooking"])(booking.id, 'No matching truck slot available for this timing.'));
                                                                            setMessage('Booking request rejected.');
                                                                        },
                                                                        className: "rounded-2xl bg-rose-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Reject request"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 681,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, booking.id, true, {
                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                        lineNumber: 648,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                            children: "Accepted bookings and payout desk"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                            children: "Once accepted, move jobs from accepted to in transit to completed, then record customer payment and driver payout separately."
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`,
                                                    children: "Shared with driver dashboard and admin console"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-5",
                                            children: [
                                                backendToken && backendLiveBookings.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold`,
                                                                            children: [
                                                                                booking.service_request_details?.pickup_address,
                                                                                " to ",
                                                                                booking.service_request_details?.drop_address
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 714,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                            children: [
                                                                                booking.service_request_details?.vehicle_type_preference,
                                                                                " • ",
                                                                                formatDateTime(booking.service_request_details?.pickup_datetime)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 717,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-400`,
                                                                            children: [
                                                                                "Customer: ",
                                                                                booking.service_request_details?.customer_name,
                                                                                " • Driver: ",
                                                                                booking.driver_details?.name,
                                                                                " • Truck: ",
                                                                                booking.vehicle_details?.registration_number
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 720,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 713,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100",
                                                                            children: [
                                                                                "Fare Rs. ",
                                                                                Number(booking.final_price || 0).toLocaleString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 725,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded-full px-3 py-1 ${booking.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : booking.status === 'in_progress' ? 'bg-violet-400/10 text-violet-100' : 'bg-sky-400/10 text-sky-100'}`,
                                                                            children: String(booking.status).replace('_', ' ')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 726,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded-full px-3 py-1 ${booking.full_payment_paid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-rose-400/10 text-rose-100'}`,
                                                                            children: booking.full_payment_paid ? 'Customer paid' : 'Customer due'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                            lineNumber: 729,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 724,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, booking.id, false, {
                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 21
                                                    }, this)),
                                                !backendToken && liveBookings.map(({ booking, driverUser, truck, customer })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold`,
                                                                                children: [
                                                                                    booking.from,
                                                                                    " to ",
                                                                                    booking.to
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 740,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                                children: [
                                                                                    booking.truckType,
                                                                                    " • ",
                                                                                    booking.loadType,
                                                                                    " • ",
                                                                                    formatDateTime(booking.pickupTime)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 741,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-400`,
                                                                                children: [
                                                                                    "Customer: ",
                                                                                    customer?.name ?? 'Unknown',
                                                                                    " • Driver: ",
                                                                                    driverUser?.name ?? 'Unassigned',
                                                                                    " • Truck: ",
                                                                                    truck?.registrationNumber ?? 'Unassigned'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 744,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 739,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100",
                                                                                children: [
                                                                                    "Fare Rs. ",
                                                                                    booking.amount.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 749,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full bg-amber-400/10 px-3 py-1 text-amber-100",
                                                                                children: [
                                                                                    "Driver payout Rs. ",
                                                                                    booking.driverPayout.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 750,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `rounded-full px-3 py-1 ${booking.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : booking.status === 'in_transit' ? 'bg-violet-400/10 text-violet-100' : 'bg-sky-400/10 text-sky-100'}`,
                                                                                children: booking.status.replace('_', ' ')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 751,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `rounded-full px-3 py-1 ${booking.paid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-rose-400/10 text-rose-100'}`,
                                                                                children: booking.paid ? 'Customer paid' : 'Customer due'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 754,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `rounded-full px-3 py-1 ${booking.driverPaid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`,
                                                                                children: booking.driverPaid ? 'Driver paid' : 'Driver due'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                                lineNumber: 757,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 23
                                                            }, this),
                                                            booking.poolMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50`,
                                                                children: [
                                                                    "Pooling note: ",
                                                                    booking.poolMessage
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 764,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex flex-wrap gap-3",
                                                                children: [
                                                                    booking.status === 'accepted' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markBookingInTransit"])(booking.id));
                                                                            setMessage('Trip marked in transit.');
                                                                        },
                                                                        className: "rounded-2xl bg-violet-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Mark in transit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 771,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    booking.status === 'in_transit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markBookingCompleted"])(booking.id));
                                                                            setMessage('Trip marked completed. Driver and truck are available again.');
                                                                        },
                                                                        className: "rounded-2xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Mark completed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 782,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    !booking.paid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markBookingPaid"])(booking.id));
                                                                            setMessage('Customer payment recorded.');
                                                                        },
                                                                        className: "rounded-2xl bg-cyan-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Record customer payment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 793,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    booking.status === 'completed' && booking.paid && !booking.driverPaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markDriverPaid"])(booking.id));
                                                                            setMessage('Driver payout recorded and synced to dashboards.');
                                                                        },
                                                                        className: "rounded-2xl bg-orange-400 px-4 py-2 font-semibold text-slate-950",
                                                                        children: "Mark driver payout sent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                        lineNumber: 804,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, booking.id, true, {
                                                        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 709,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 696,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__630c59e5._.js.map