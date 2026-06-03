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
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/EchoHorn/app/api/notify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const notifyStorePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'notify-signups.json');
function buildThankYouHtml(email) {
    return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#020617;padding:32px;color:#e2e8f0">
      <div style="max-width:640px;margin:0 auto;background:#0f172a;border:1px solid rgba(148,163,184,.2);border-radius:24px;padding:32px">
        <p style="letter-spacing:.2em;text-transform:uppercase;color:#7dd3fc;font-size:12px;margin:0 0 16px">EchoHorn</p>
        <h1 style="margin:0 0 16px;font-size:32px;color:#f8fafc">Thanks for choosing EchoHorn</h1>
        <p style="line-height:1.7;color:#cbd5e1;margin:0 0 12px">
          We received your request from <strong>${email}</strong>.
        </p>
        <p style="line-height:1.7;color:#cbd5e1;margin:0 0 12px">
          You will be kept up to date with launch news, product updates, and platform improvements.
        </p>
        <p style="line-height:1.7;color:#cbd5e1;margin:0">
          Thank you for choosing EchoHorn.
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
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(notifyStorePath), {
            recursive: true
        });
        let existing = [];
        try {
            const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readFile"])(notifyStorePath, 'utf8');
            existing = JSON.parse(raw);
        } catch  {
            existing = [];
        }
        if (!existing.some((entry)=>entry.email.toLowerCase() === email.toLowerCase())) {
            existing.push({
                email,
                createdAt: new Date().toISOString()
            });
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(notifyStorePath, JSON.stringify(existing, null, 2), 'utf8');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            queued: true,
            message: 'Thanks for choosing EchoHorn. Your email was saved locally. Add a real RESEND_API_KEY in .env.local to send automatic emails.'
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
            subject: 'Thanks for choosing EchoHorn',
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

//# sourceMappingURL=%5Broot-of-the-server%5D__87c3d0c9._.js.map