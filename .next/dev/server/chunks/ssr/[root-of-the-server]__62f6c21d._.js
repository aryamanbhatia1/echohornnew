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
        paid: true
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
        paid: false
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
}),
"[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FleetPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_e2d548de.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_aa1abb6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/lib/demo-data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const fleetStats = [
    {
        label: 'Registered Trucks',
        value: '36',
        detail: 'Owners can log truck count and categories at signup.'
    },
    {
        label: 'Verified Drivers',
        value: '48',
        detail: 'Drivers and fleet owners use separate login and onboarding flows.'
    },
    {
        label: 'Average Safety Score',
        value: '4.7/5',
        detail: 'Safety training, proof of delivery, and goods-care feedback shape the score.'
    }
];
function FleetPortal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_30%),linear-gradient(180deg,_#1c1917_0%,_#111827_40%,_#020617_100%)] text-white",
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
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                "Back to role selection"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-100`,
                            children: "Fleet owner and driver operations demo"
                        }, void 0, false, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mb-3 text-sm uppercase tracking-[0.25em] text-orange-200/80`,
                                    children: "AQ Logistics Fleet Portal"
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} max-w-3xl text-4xl font-bold leading-tight sm:text-5xl`,
                                    children: "Separate onboarding for fleet owners and drivers, with truck inventory, secure documents, and fixed earnings logic."
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 max-w-2xl text-base text-slate-300`,
                                    children: "Fleet owners register company details, truck counts, and compliance records. Drivers register separately, complete verified profiles, earn points for completed deliveries, and receive fixed per-trip income bands tied to assigned bookings."
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid gap-4 md:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-slate-950/40 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTruckRampBox"], {
                                                    className: "mb-4 h-6 w-6 text-orange-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-lg font-semibold`,
                                                    children: "Truck Inventory"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                    children: "Owners can log number of trucks, type, capacity, fuel mode, insurance, and current region."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-slate-950/40 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaIdCard"], {
                                                    className: "mb-4 h-6 w-6 text-orange-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-lg font-semibold`,
                                                    children: "Driver Verification"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                    children: "Aadhaar, license, emergency contact, route preference, and availability are stored separately per driver."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-slate-950/40 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserShield"], {
                                                    className: "mb-4 h-6 w-6 text-orange-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-lg font-semibold`,
                                                    children: "Income and Safety"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                    children: "Driver income is fixed per trip, while safety and customer ratings influence ranking and assignment priority."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[32px] border border-orange-300/20 bg-slate-950/70 p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold text-orange-100`,
                                    children: "Portal Highlights"
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-5 space-y-4 text-sm text-slate-300`,
                                    children: fleetStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white",
                                                            children: stat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold text-orange-200`,
                                                            children: stat.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2",
                                                    children: stat.detail
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                    children: "Owner Workflow"
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-6 space-y-4 text-sm text-slate-300`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/10 bg-slate-950/40 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-white",
                                                    children: "1. Owner registration and login"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: "Fleet owners create a contractor account, then complete business profile, address, company ID, and compliance details."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/10 bg-slate-950/40 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-white",
                                                    children: "2. Add truck inventory"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: "Each truck stores registration number, type, dimensions, capacity, GPS ID, insurance, and operating region."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/10 bg-slate-950/40 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-white",
                                                    children: "3. Add or assign drivers"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: "Drivers can join independently or be attached to a fleet. Each active truck-driver pair is tracked through assignments."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/10 bg-slate-950/40 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-white",
                                                    children: "4. Track jobs and compliance"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: "Bookings update truck and driver utilization, while admin insights surface demand gaps and safety watchpoints."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[32px] border border-white/10 bg-slate-950/70 p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChartLine"], {
                                            className: "h-5 w-5 text-orange-300"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                            children: "Driver Ranking Board"
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["driverOptions"].map((driver)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold text-white`,
                                                                    children: driver.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-1 text-sm text-slate-300`,
                                                                    children: [
                                                                        driver.truckType,
                                                                        " • ",
                                                                        driver.region,
                                                                        " • ",
                                                                        driver.trips,
                                                                        " completed trips"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-orange-400/10 px-3 py-1 text-orange-100",
                                                                    children: [
                                                                        "Customer rating ",
                                                                        driver.rating
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 116,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-sky-400/10 px-3 py-1 text-sky-100",
                                                                    children: [
                                                                        "ML prediction ",
                                                                        driver.predictedRating
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100",
                                                                    children: [
                                                                        driver.points,
                                                                        " points"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl border border-white/10 bg-slate-950/40 p-3",
                                                            children: [
                                                                "Fixed driver income: Rs. ",
                                                                driver.fixedIncome.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl border border-white/10 bg-slate-950/40 p-3",
                                                            children: driver.safety
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, driver.id, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/5 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaClipboardCheck"], {
                                                    className: "h-5 w-5 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_e2d548de$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-lg font-semibold text-emerald-100`,
                                                    children: "Goods Safety Focus"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aa1abb6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-3 text-sm text-slate-300`,
                                            children: "Goods safety is handled through verified driver identity, loading and unloading proof, insurance tracking, route check-ins, and cargo-care subratings after every completed delivery."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/EchoHorn/components/fleet-portal/FleetPortal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62f6c21d._.js.map