(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/space_grotesk_f63d7297.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_grotesk_f63d7297-module__CEzx4q__className",
});
}),
"[next]/internal/font/google/space_grotesk_f63d7297.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_f63d7297.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/inter_de953415.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_de953415-module__EmiC9G__className",
});
}),
"[next]/internal/font/google/inter_de953415.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_de953415.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/EchoHorn/lib/demo-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        status: "scheduled",
        amount: 14600,
        paid: false,
        driverPayout: 6800,
        driverPaid: false,
        poolMessage: "Eligible for truck pooling with another Jaipur-bound load in the 6 PM lane."
    }
];
const defaultDemoStore = {
    users: [
        ...users,
        ...driverUsers
    ],
    trucks,
    drivers,
    bookings
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/EchoHorn/lib/demo-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDriver",
    ()=>addDriver,
    "addTruck",
    ()=>addTruck,
    "createBooking",
    ()=>createBooking,
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
    "resetDemoStore",
    ()=>resetDemoStore,
    "saveDemoStore",
    ()=>saveDemoStore,
    "signUpUser",
    ()=>signUpUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-data.ts [app-client] (ecmascript)");
'use client';
;
const STORAGE_KEY = 'echohorn-demo-store-v1';
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
    const users = Array.isArray(store?.users) ? store.users : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"].users;
    const trucks = Array.isArray(store?.trucks) ? store.trucks : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"].trucks;
    const drivers = Array.isArray(store?.drivers) ? store.drivers : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"].drivers;
    const rawBookings = Array.isArray(store?.bookings) ? store.bookings : __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"].bookings;
    const bookings = rawBookings.map((booking)=>{
        const matchedDriver = drivers.find((driver)=>driver.id === booking.driverId);
        return {
            ...booking,
            status: booking.status ?? 'scheduled',
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
        bookings
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"]));
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"];
    }
    try {
        const parsed = sanitizeStore(JSON.parse(raw));
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        return parsed;
    } catch  {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"]));
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"];
    }
}
function saveDemoStore(store) {
    if ("TURBOPACK compile-time truthy", 1) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizeStore(store)));
    }
}
function resetDemoStore() {
    saveDemoStore(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDemoStore"];
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
    const { driver, truck } = getDriverContext(store, payload.driverId, payload.truckId);
    const from = requireValidLocation(payload.from, 'Pickup location');
    const to = requireValidLocation(payload.to, 'Drop location');
    const booking = {
        ...payload,
        from,
        to,
        id: generateId('booking'),
        status: 'scheduled',
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
        ],
        drivers: store.drivers.map((item)=>item.id === payload.driverId ? {
                ...item,
                available: false
            } : item),
        trucks: store.trucks.map((item)=>item.id === payload.truckId ? {
                ...item,
                status: truck ? 'on_trip' : item.status
            } : item)
    };
    saveDemoStore(nextStore);
    return {
        booking,
        store: nextStore
    };
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/EchoHorn/components/consumer/ConsumerPortal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsumerPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_f63d7297.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_de953415.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ConsumerPortal() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('login');
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [store, setStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ConsumerPortal.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDemoStore"])()
    }["ConsumerPortal.useState"]);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [authForm, setAuthForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        phone: '',
        region: 'Delhi NCR'
    });
    const [bookingForm, setBookingForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: '',
        to: '',
        pickupDate: '',
        pickupTime: '',
        truckType: 'Mini Truck',
        loadType: 'General Goods'
    });
    const [selectedDriverId, setSelectedDriverId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const availableDrivers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConsumerPortal.useMemo[availableDrivers]": ()=>{
            return store.drivers.map({
                "ConsumerPortal.useMemo[availableDrivers]": (driver)=>{
                    const user = store.users.find({
                        "ConsumerPortal.useMemo[availableDrivers].user": (item)=>item.id === driver.userId
                    }["ConsumerPortal.useMemo[availableDrivers].user"]);
                    const truck = store.trucks.find({
                        "ConsumerPortal.useMemo[availableDrivers].truck": (item)=>item.id === driver.truckId
                    }["ConsumerPortal.useMemo[availableDrivers].truck"]);
                    return {
                        driver,
                        user,
                        truck
                    };
                }
            }["ConsumerPortal.useMemo[availableDrivers]"]).filter({
                "ConsumerPortal.useMemo[availableDrivers]": (entry)=>entry.user && entry.truck && entry.driver.available && entry.truck?.truckType === bookingForm.truckType
            }["ConsumerPortal.useMemo[availableDrivers]"]).sort({
                "ConsumerPortal.useMemo[availableDrivers]": (a, b)=>b.driver.rating - a.driver.rating || b.driver.points - a.driver.points
            }["ConsumerPortal.useMemo[availableDrivers]"]);
        }
    }["ConsumerPortal.useMemo[availableDrivers]"], [
        store,
        bookingForm.truckType
    ]);
    const myBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConsumerPortal.useMemo[myBookings]": ()=>{
            if (!session) return [];
            return store.bookings.filter({
                "ConsumerPortal.useMemo[myBookings]": (booking)=>booking.customerId === session.id
            }["ConsumerPortal.useMemo[myBookings]"]);
        }
    }["ConsumerPortal.useMemo[myBookings]"], [
        store,
        session
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsumerPortal.useEffect": ()=>{
            if (!availableDrivers.length) {
                setSelectedDriverId('');
                return;
            }
            const stillExists = availableDrivers.some({
                "ConsumerPortal.useEffect.stillExists": (entry)=>entry.driver.id === selectedDriverId
            }["ConsumerPortal.useEffect.stillExists"]);
            if (!stillExists) {
                setSelectedDriverId(availableDrivers[0].driver.id);
            }
        }
    }["ConsumerPortal.useEffect"], [
        availableDrivers,
        selectedDriverId
    ]);
    const handleAuth = ()=>{
        try {
            if (mode === 'signup') {
                const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signUpUser"])({
                    role: 'consumer',
                    name: authForm.name,
                    email: authForm.email,
                    password: authForm.password,
                    phone: authForm.phone,
                    region: authForm.region
                });
                setSession({
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
                setMessage('Consumer account created successfully.');
            } else {
                const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"])(authForm.email, authForm.password, 'consumer');
                setSession({
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
                setMessage('Logged in as consumer.');
            }
            setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDemoStore"])());
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Unable to continue.');
        }
    };
    const handleBook = ()=>{
        if (!session || !selectedDriverId || !bookingForm.from || !bookingForm.to || !bookingForm.pickupDate || !bookingForm.pickupTime) {
            setMessage('Please fill from, to, date, time, and select a driver.');
            return;
        }
        const chosen = availableDrivers.find((entry)=>entry.driver.id === selectedDriverId);
        if (!chosen?.truck) {
            setMessage('Pick one of the available drivers for this truck type.');
            return;
        }
        const distanceFactor = bookingForm.truckType === 'Trailer' ? 19000 : bookingForm.truckType === 'Full Truck' ? 14500 : bookingForm.truckType === 'Medium Truck' ? 11200 : 7600;
        const price = distanceFactor + chosen.driver.points * 5;
        const pickupTimestamp = `${bookingForm.pickupDate}T${bookingForm.pickupTime}`;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBooking"])({
            customerId: session.id,
            driverId: chosen.driver.id,
            ownerId: chosen.driver.ownerId,
            truckId: chosen.truck.id,
            from: bookingForm.from,
            to: bookingForm.to,
            pickupTime: pickupTimestamp,
            truckType: bookingForm.truckType,
            loadType: bookingForm.loadType,
            amount: price
        });
        setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDemoStore"])());
        setMessage('Booking created. You can now see it in your bookings list.');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/get-started",
                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-300`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                "Back to roles"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetDemoStore"])();
                                setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDemoStore"])());
                                setSession(null);
                                setMessage('Demo data reset.');
                            },
                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200`,
                            children: "Reset demo data"
                        }, void 0, false, {
                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mb-3 text-sm uppercase tracking-[0.2em] text-cyan-200/80`,
                                    children: "Consumer app"
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-4xl font-bold leading-tight`,
                                    children: "Sign in, enter your route, compare ranked drivers, and book the truck you actually want."
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-4 text-sm text-slate-300`,
                                    children: "This is a working browser demo: create a customer account, log in, choose the truck class, compare drivers, and create bookings from one place to another at a selected time."
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                !session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 rounded-[28px] border border-white/10 bg-slate-950/60 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMode('login'),
                                                    className: `rounded-full px-4 py-2 text-sm ${mode === 'login' ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-300'}`,
                                                    children: "Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMode('signup'),
                                                    className: `rounded-full px-4 py-2 text-sm ${mode === 'signup' ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-300'}`,
                                                    children: "Sign up"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4",
                                            children: [
                                                mode === 'signup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: authForm.name,
                                                    onChange: (e)=>setAuthForm({
                                                            ...authForm,
                                                            name: e.target.value
                                                        }),
                                                    placeholder: "Full name",
                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: authForm.email,
                                                    onChange: (e)=>setAuthForm({
                                                            ...authForm,
                                                            email: e.target.value
                                                        }),
                                                    placeholder: "Email",
                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: authForm.password,
                                                    onChange: (e)=>setAuthForm({
                                                            ...authForm,
                                                            password: e.target.value
                                                        }),
                                                    placeholder: "Password",
                                                    type: "password",
                                                    className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                mode === 'signup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: authForm.phone,
                                                            onChange: (e)=>setAuthForm({
                                                                    ...authForm,
                                                                    phone: e.target.value
                                                                }),
                                                            placeholder: "Phone",
                                                            className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: authForm.region,
                                                            onChange: (e)=>setAuthForm({
                                                                    ...authForm,
                                                                    region: e.target.value
                                                                }),
                                                            placeholder: "Region",
                                                            className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleAuth,
                                                    className: "rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950",
                                                    children: mode === 'signup' ? 'Create consumer account' : 'Log in as consumer'
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 rounded-[28px] border border-emerald-300/20 bg-emerald-400/5 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold`,
                                            children: [
                                                "Welcome, ",
                                                session.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                            children: [
                                                "Logged in as ",
                                                session.email,
                                                ". Create bookings below and compare ranked drivers."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200`,
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[30px] border border-white/10 bg-slate-950/70 p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLocationDot"], {
                                                    className: "mb-3 h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                    children: "Route input"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                    children: "From where, to where, and when you want the truck."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRankingStar"], {
                                                    className: "mb-3 h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                    children: "Ranked driver choice"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                    children: "Drivers are sorted by rating, prediction, and points."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 rounded-[28px] border border-white/10 bg-black/30 p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: bookingForm.from,
                                                onChange: (e)=>setBookingForm({
                                                        ...bookingForm,
                                                        from: e.target.value
                                                    }),
                                                placeholder: "Pickup location",
                                                className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: bookingForm.to,
                                                onChange: (e)=>setBookingForm({
                                                        ...bookingForm,
                                                        to: e.target.value
                                                    }),
                                                placeholder: "Drop location",
                                                className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: bookingForm.pickupDate,
                                                onChange: (e)=>setBookingForm({
                                                        ...bookingForm,
                                                        pickupDate: e.target.value
                                                    }),
                                                type: "date",
                                                placeholder: "dd/mm/yyyy",
                                                className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3 [color-scheme:dark]"
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: bookingForm.pickupTime,
                                                onChange: (e)=>setBookingForm({
                                                        ...bookingForm,
                                                        pickupTime: e.target.value
                                                    }),
                                                type: "time",
                                                className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3 [color-scheme:dark]"
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: bookingForm.truckType,
                                                onChange: (e)=>setBookingForm({
                                                        ...bookingForm,
                                                        truckType: e.target.value
                                                    }),
                                                className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truckTypes"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: type,
                                                        children: type
                                                    }, type, false, {
                                                        fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 47
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} rounded-2xl border border-dashed border-cyan-300/20 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-100`,
                                                children: [
                                                    "Enter pickup date in ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "dd/mm/yyyy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 42
                                                    }, this),
                                                    " format using the date picker, then add the pickup time separately."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: bookingForm.loadType,
                                                onChange: (e)=>setBookingForm({
                                                        ...bookingForm,
                                                        loadType: e.target.value
                                                    }),
                                                placeholder: "Goods type",
                                                className: "rounded-2xl border border-white/10 bg-black/40 px-4 py-3 md:col-span-2"
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                            children: "Available drivers"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                            children: [
                                                availableDrivers.length,
                                                " choices"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-4",
                                    children: availableDrivers.map(({ driver, user, truck })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedDriverId(driver.id),
                                            className: `w-full rounded-3xl border p-5 text-left ${selectedDriverId === driver.id ? 'border-cyan-300/50 bg-cyan-400/10' : 'border-white/10 bg-slate-950/50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                                    children: user?.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-1 text-sm text-slate-300`,
                                                                    children: [
                                                                        truck?.registrationNumber,
                                                                        " • ",
                                                                        truck?.truckType,
                                                                        " • ETA ",
                                                                        driver.etaHours,
                                                                        "h"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100",
                                                                    children: [
                                                                        "Rating ",
                                                                        driver.rating
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-sky-400/10 px-3 py-1 text-sky-100",
                                                                    children: [
                                                                        "Predicted ",
                                                                        driver.predictedRating
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-violet-400/10 px-3 py-1 text-violet-100",
                                                                    children: [
                                                                        driver.points,
                                                                        " pts"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-2`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl border border-white/10 bg-black/30 p-3",
                                                            children: driver.safetyNote
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl border border-white/10 bg-black/30 p-3",
                                                            children: [
                                                                "Fixed driver income Rs. ",
                                                                driver.fixedIncome.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, driver.id, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[30px] border border-white/10 bg-slate-950/70 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTruckFast"], {
                                                    className: "h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Book selected driver"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-3 text-sm text-slate-300`,
                                            children: "Choose a driver above, then create the booking with your route and time."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        selectedDriverId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-50`,
                                            children: "Driver selected and ready to book."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-amber-300/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-50`,
                                            children: "No driver matches this truck type yet. Try another truck class."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleBook,
                                            disabled: !session,
                                            className: "mt-6 w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 disabled:opacity-50",
                                            children: "Create booking"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[30px] border border-white/10 bg-slate-950/70 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCheck"], {
                                                    className: "h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "My bookings"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-4",
                                            children: [
                                                myBookings.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300`,
                                                    children: "No bookings yet. Log in and create one."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this),
                                                myBookings.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_f63d7297$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-lg font-semibold text-white`,
                                                                children: [
                                                                    booking.from,
                                                                    " to ",
                                                                    booking.to
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                children: [
                                                                    booking.truckType,
                                                                    " • ",
                                                                    booking.loadType,
                                                                    " • Rs. ",
                                                                    booking.amount.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_de953415$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} mt-2 flex items-center gap-2 text-sm text-slate-300`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {
                                                                        className: "h-4 w-4 text-cyan-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    new Date(booking.pickupTime).toLocaleString('en-GB', {
                                                                        day: '2-digit',
                                                                        month: '2-digit',
                                                                        year: 'numeric',
                                                                        hour: '2-digit',
                                                                        minute: '2-digit',
                                                                        hour12: false
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, booking.id, true, {
                                                        fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/EchoHorn/components/consumer/ConsumerPortal.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(ConsumerPortal, "pi0BKTo5bT1iXkXgx6pg5p3LYRA=");
_c = ConsumerPortal;
var _c;
__turbopack_context__.k.register(_c, "ConsumerPortal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/EchoHorn/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/EchoHorn/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/EchoHorn/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/EchoHorn/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/EchoHorn/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/EchoHorn/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/EchoHorn/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/EchoHorn/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/EchoHorn/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/EchoHorn/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__6b189189._.js.map