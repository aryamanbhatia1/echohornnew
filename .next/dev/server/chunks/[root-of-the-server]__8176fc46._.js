module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/EchoHorn/app/api/notify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/server.js [app-route] (ecmascript)");
;
function buildThankYouHtml(email) {
    return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#020617;padding:32px;color:#e2e8f0">
      <div style="max-width:640px;margin:0 auto;background:#0f172a;border:1px solid rgba(148,163,184,.2);border-radius:24px;padding:32px">
        <p style="letter-spacing:.2em;text-transform:uppercase;color:#7dd3fc;font-size:12px;margin:0 0 16px">AQ Logistics</p>
        <h1 style="margin:0 0 16px;font-size:32px;color:#f8fafc">Thanks for choosing us</h1>
        <p style="line-height:1.7;color:#cbd5e1;margin:0 0 12px">
          We received your request from <strong>${email}</strong>.
        </p>
        <p style="line-height:1.7;color:#cbd5e1;margin:0 0 12px">
          We will notify you about product updates, launch access, and logistics platform improvements.
        </p>
        <p style="line-height:1.7;color:#cbd5e1;margin:0">
          Thank you for choosing AQ Logistics.
        </p>
      </div>
    </div>
  `;
}
async function POST(request) {
    const body = await request.json();
    const email = body.email?.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'A valid email is required.'
        }, {
            status: 400
        });
    }
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL || 'AQ Logistics <onboarding@resend.dev>';
    if (!apiKey) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Missing RESEND_API_KEY. Add it to .env.local to enable automatic emails.'
        }, {
            status: 500
        });
    }
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            to: [
                email
            ],
            subject: 'Thanks for choosing AQ Logistics',
            html: buildThankYouHtml(email)
        })
    });
    if (!response.ok) {
        const details = await response.text();
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: `Email send failed: ${details}`
        }, {
            status: 502
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8176fc46._.js.map