module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/EchoHorn/components/header/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const navLinks = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Product",
        href: "/product"
    },
    {
        name: "Vision",
        href: "/vision"
    },
    {
        name: "Features",
        href: "/features"
    },
    {
        name: "About",
        href: "/about"
    }
];
const Header = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.85,
            delay: 0.28,
            ease: "easeInOut"
        },
        className: `fixed top-0 left-0 w-full ${scrolled ? "bg-black/50" : "bg-black/30"} backdrop-blur-sm border-b border-white/10 z-50 transition-all duration-300`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "container mx-auto flex items-center justify-between h-24 px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            "data-testid": "header-logo-link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: "Echohorn logo",
                                    width: 150,
                                    height: 40,
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/header/header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/EchoHorn/components/header/header.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/EchoHorn/components/header/header.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex gap-10",
                            children: navLinks.map((link)=>{
                                const isActive = pathname === link.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        "data-testid": `nav-link-${link.name.toLowerCase()}`,
                                        className: "relative inline-block px-1 text-white font-medium text-base capitalize transition-colors duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: isActive ? "text-yellow-400" : "group-hover:text-yellow-400",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/header/header.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute left-0 -bottom-1 h-1 bg-yellow-400 rounded",
                                                initial: false,
                                                animate: {
                                                    width: isActive ? "100%" : "0%"
                                                },
                                                transition: {
                                                    duration: 0.3
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/header/header.tsx",
                                                lineNumber: 69,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute left-0 -bottom-1 h-1 bg-yellow-400 rounded opacity-0 group-hover:opacity-100",
                                                initial: {
                                                    width: "0%"
                                                },
                                                whileHover: {
                                                    width: "100%"
                                                },
                                                transition: {
                                                    duration: 0.3
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/header/header.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/EchoHorn/components/header/header.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, link.name, false, {
                                    fileName: "[project]/EchoHorn/components/header/header.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/EchoHorn/components/header/header.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/header/header.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/get-started",
                    "data-testid": "book-trial-button",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "relative group overflow-hidden flex items-center justify-center gap-2 bg-[#ffe000] text-black font-bold py-2.5 px-8 rounded-full shadow-lg shadow-yellow-500/20 transition-colors duration-300 outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 w-full h-full bg-[#FF6347] rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 ease-in-out"
                            }, void 0, false, {
                                fileName: "[project]/EchoHorn/components/header/header.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 flex items-center gap-2",
                                children: [
                                    "Start Booking",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            x: [
                                                0,
                                                5,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCircleArrowRight"], {}, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/header/header.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/EchoHorn/components/header/header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EchoHorn/components/header/header.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EchoHorn/components/header/header.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/EchoHorn/components/header/header.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/EchoHorn/components/header/header.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/EchoHorn/components/header/header.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[next]/internal/font/google/space_grotesk_482bb85e.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_grotesk_482bb85e-module__KzuGVq__className",
});
}),
"[next]/internal/font/google/space_grotesk_482bb85e.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_482bb85e.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/inter_492f20b9.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_492f20b9-module__5dhF6a__className",
});
}),
"[next]/internal/font/google/inter_492f20b9.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_492f20b9.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
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
"[project]/EchoHorn/components/admin/AdminDashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_grotesk_482bb85e.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_492f20b9.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EchoHorn/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
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
function AdminDashboard() {
    const [store, setStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
    const [backendInsights, setBackendInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sync = ()=>setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])());
        window.addEventListener('storage', sync);
        return ()=>window.removeEventListener('storage', sync);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredBackendSession"])();
        if (!existing || existing.user.user_type !== 'contractor') return;
        void (async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$logistics$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAdminInsights"])(existing.token);
                setBackendInsights(data);
            } catch  {
                setBackendInsights(null);
            }
        })();
    }, []);
    const dashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const pendingApprovals = store.bookings.filter((booking)=>booking.status === 'pending_approval');
        const acceptedBookings = store.bookings.filter((booking)=>booking.status === 'accepted' || booking.status === 'in_transit');
        const completedBookings = store.bookings.filter((booking)=>booking.status === 'completed');
        const paidBookings = store.bookings.filter((booking)=>booking.paid);
        const openComplaints = store.complaints.filter((complaint)=>complaint.status !== 'resolved');
        const avgRating = store.drivers.length ? (store.drivers.reduce((sum, driver)=>sum + driver.rating, 0) / store.drivers.length).toFixed(1) : '0.0';
        const truckBoard = Object.values(store.trucks.reduce((acc, truck)=>{
            if (!acc[truck.truckType]) {
                acc[truck.truckType] = {
                    truckType: truck.truckType,
                    total: 0,
                    available: 0,
                    onTrip: 0,
                    maintenance: 0
                };
            }
            acc[truck.truckType].total += 1;
            if (truck.status === 'available') acc[truck.truckType].available += 1;
            if (truck.status === 'on_trip') acc[truck.truckType].onTrip += 1;
            if (truck.status === 'maintenance') acc[truck.truckType].maintenance += 1;
            return acc;
        }, {}));
        const safetyAlerts = store.drivers.filter((driver)=>driver.rating < 4.5 || driver.points < 210).slice(0, 4).map((driver)=>{
            const user = store.users.find((item)=>item.id === driver.userId);
            return `${user?.name ?? 'Driver'} needs attention: rating ${driver.rating}, points ${driver.points}, note: ${driver.safetyNote}.`;
        });
        const pendingPayouts = store.bookings.filter((booking)=>booking.status === 'completed' && booking.paid && !booking.driverPaid).map((booking)=>{
            const driver = store.drivers.find((item)=>item.id === booking.driverId);
            const driverUser = store.users.find((item)=>item.id === driver?.userId);
            return {
                booking,
                driverUser
            };
        });
        return {
            totalRequests: store.bookings.length,
            pendingApprovals: pendingApprovals.length,
            acceptedBookings: acceptedBookings.length,
            trucksOnBoard: store.trucks.length,
            avgRating,
            completedBookings: completedBookings.length,
            totalRevenue: paidBookings.reduce((sum, booking)=>sum + booking.amount, 0),
            driverDues: pendingPayouts.reduce((sum, item)=>sum + item.booking.driverPayout, 0),
            truckBoard,
            safetyAlerts,
            complaints: openComplaints,
            requests: [
                ...store.bookings
            ].sort((a, b)=>new Date(b.pickupTime).getTime() - new Date(a.pickupTime).getTime()).slice(0, 8),
            pendingPayouts
        };
    }, [
        store
    ]);
    const topCards = [
        {
            label: 'Total requests',
            value: backendInsights?.totals?.service_requests ?? dashboard.totalRequests,
            tone: 'text-cyan-100 bg-cyan-400/10 border-cyan-300/20'
        },
        {
            label: 'Waiting owner approval',
            value: backendInsights?.totals?.pending_approvals ?? dashboard.pendingApprovals,
            tone: 'text-amber-100 bg-amber-400/10 border-amber-300/20'
        },
        {
            label: 'Current vehicles on board',
            value: backendInsights?.totals?.vehicles_on_board ?? dashboard.trucksOnBoard,
            tone: 'text-emerald-100 bg-emerald-400/10 border-emerald-300/20'
        },
        {
            label: 'Open complaints',
            value: backendInsights?.totals?.open_complaints ?? dashboard.complaints.length,
            tone: 'text-violet-100 bg-violet-400/10 border-violet-300/20'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[linear-gradient(180deg,rgba(2,8,23,0.78),rgba(10,15,30,0.95)),url('/background.png')] bg-cover bg-center px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.9),rgba(18,34,55,0.72))] p-8 backdrop-blur sm:p-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mb-3 text-sm uppercase tracking-[0.25em] text-cyan-200/80`,
                                        children: "AQ Logistics Admin Console"
                                    }, void 0, false, {
                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-4xl font-bold sm:text-5xl`,
                                        children: "Live backend visibility for bookings, pooling, safety, fleet payouts, and trip completion."
                                    }, void 0, false, {
                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 max-w-3xl text-base text-slate-300`,
                                        children: "Frontend actions now flow into this admin console view, so new bookings, completed trips, customer collections, and driver payouts are visible together instead of living as disconnected demo text."
                                    }, void 0, false, {
                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/fleet-portal",
                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10`,
                                        children: "Open fleet console"
                                    }, void 0, false, {
                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$lib$2f$demo$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDemoStore"])()),
                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowRotateRight"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            "Refresh dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
                    children: topCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-[28px] border p-6 backdrop-blur ${card.tone}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm opacity-80`,
                                    children: card.label
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-3 text-4xl font-semibold`,
                                    children: card.value
                                }, void 0, false, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, card.label, true, {
                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                backendInsights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 grid gap-6 xl:grid-cols-[1.04fr_0.96fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaListCheck"], {
                                                    className: "h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Live booking requests"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-4",
                                            children: backendInsights.booking_requests?.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-3xl border border-white/10 bg-slate-900/70 p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold text-white`,
                                                            children: [
                                                                booking.service_request__pickup_address,
                                                                " to ",
                                                                booking.service_request__drop_address
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                            children: [
                                                                booking.service_request__vehicle_type_preference,
                                                                " • ",
                                                                booking.status.replace('_', ' '),
                                                                " • Rs. ",
                                                                Number(booking.final_price || 0).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-400`,
                                                            children: [
                                                                "Customer: ",
                                                                booking.service_request__customer__first_name,
                                                                " ",
                                                                booking.service_request__customer__last_name,
                                                                " • Fleet owner: ",
                                                                booking.contractor__first_name,
                                                                " ",
                                                                booking.contractor__last_name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, booking.id, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTruckRampBox"], {
                                                    className: "h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Truck categories on board"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 grid gap-4 md:grid-cols-2",
                                            children: backendInsights.truck_categories?.map((truck)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold text-white`,
                                                            children: truck.vehicle_type.replace('_', ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-3 flex flex-wrap gap-2 text-sm`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-slate-400/10 px-3 py-1 text-slate-100",
                                                                    children: [
                                                                        "Total ",
                                                                        truck.total
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100",
                                                                    children: [
                                                                        "Available ",
                                                                        truck.available
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100",
                                                                    children: [
                                                                        "On trip ",
                                                                        truck.in_use
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-amber-400/10 px-3 py-1 text-amber-100",
                                                                    children: [
                                                                        "Maintenance ",
                                                                        truck.maintenance
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, truck.vehicle_type, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/70 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeadset"], {
                                                    className: "h-5 w-5 text-violet-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Customer complaints"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-4",
                                            children: backendInsights.complaints?.map((complaint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-white",
                                                            children: complaint.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 text-slate-300",
                                                            children: complaint.detail
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 text-xs uppercase tracking-[0.2em] text-violet-200/80",
                                                            children: [
                                                                complaint.customer__first_name,
                                                                " ",
                                                                complaint.customer__last_name,
                                                                " • ",
                                                                complaint.status.replace('_', ' ')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, complaint.id, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/70 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShieldHeart"], {
                                                    className: "h-5 w-5 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Safety watchlist"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-4",
                                            children: backendInsights.safety_watchlist?.map((driver)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300",
                                                    children: [
                                                        driver.user__first_name,
                                                        " ",
                                                        driver.user__last_name,
                                                        " • ",
                                                        driver.home_region,
                                                        " • Safety ",
                                                        driver.safety_score,
                                                        " • Predicted ",
                                                        driver.predicted_rating
                                                    ]
                                                }, `${driver.user__first_name}-${driver.home_region}`, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                !backendInsights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaListCheck"], {
                                                    className: "h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Booking requests and fleet acceptance"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-3 text-sm text-slate-300`,
                                            children: "This is the core employee view: customers submit requests, fleet owners approve them, and accepted jobs then move to trip completion and payout."
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-4",
                                            children: dashboard.requests.map((booking)=>{
                                                const owner = store.users.find((item)=>item.id === booking.ownerId);
                                                const customer = store.users.find((item)=>item.id === booking.customerId);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-3xl border border-white/10 bg-slate-900/70 p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold text-white`,
                                                                            children: [
                                                                                booking.from,
                                                                                " to ",
                                                                                booking.to
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                                            children: [
                                                                                booking.truckType,
                                                                                " • ",
                                                                                booking.loadType,
                                                                                " • ",
                                                                                formatDateTime(booking.pickupTime)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-400`,
                                                                            children: [
                                                                                "Customer: ",
                                                                                customer?.name ?? 'Unknown',
                                                                                " • Fleet owner: ",
                                                                                owner?.companyName ?? owner?.name ?? 'Unknown'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded-full px-3 py-1 ${booking.status === 'pending_approval' ? 'bg-amber-400/10 text-amber-100' : booking.status === 'accepted' ? 'bg-cyan-400/10 text-cyan-100' : booking.status === 'in_transit' ? 'bg-violet-400/10 text-violet-100' : booking.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : 'bg-rose-400/10 text-rose-100'}`,
                                                                            children: booking.status.replace('_', ' ')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                            lineNumber: 276,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `rounded-full px-3 py-1 ${booking.paid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-slate-400/10 text-slate-100'}`,
                                                                            children: booking.paid ? 'Customer paid' : 'Customer due'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 23
                                                        }, this),
                                                        booking.poolMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50`,
                                                            children: booking.poolMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 25
                                                        }, this),
                                                        booking.rejectionReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 rounded-2xl border border-rose-300/15 bg-rose-400/5 px-4 py-3 text-sm text-rose-50`,
                                                            children: [
                                                                "Rejection note: ",
                                                                booking.rejectionReason
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, booking.id, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTruckRampBox"], {
                                                    className: "h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Current vehicles on board"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 grid gap-4 md:grid-cols-2",
                                            children: dashboard.truckBoard.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold text-white`,
                                                            children: entry.truckType
                                                        }, void 0, false, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-3 flex flex-wrap gap-2 text-sm`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-slate-400/10 px-3 py-1 text-slate-100",
                                                                    children: [
                                                                        "Total ",
                                                                        entry.total
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-100",
                                                                    children: [
                                                                        "Available ",
                                                                        entry.available
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100",
                                                                    children: [
                                                                        "On trip ",
                                                                        entry.onTrip
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-amber-400/10 px-3 py-1 text-amber-100",
                                                                    children: [
                                                                        "Maintenance ",
                                                                        entry.maintenance
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, entry.truckType, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/70 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeadset"], {
                                                    className: "h-5 w-5 text-violet-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Customer complaints"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-6 space-y-4 text-sm text-slate-300`,
                                            children: [
                                                dashboard.complaints.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                                    children: "No open customer complaints right now."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this),
                                                dashboard.complaints.map((complaint)=>{
                                                    const customer = store.users.find((item)=>item.id === complaint.customerId);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-white",
                                                                children: complaint.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 text-slate-300",
                                                                children: complaint.detail
                                                            }, void 0, false, {
                                                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 text-xs uppercase tracking-[0.2em] text-violet-200/80",
                                                                children: [
                                                                    customer?.name ?? 'Customer',
                                                                    " • ",
                                                                    complaint.status.replace('_', ' ')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, complaint.id, true, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-white/10 bg-slate-950/70 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShieldHeart"], {
                                                    className: "h-5 w-5 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                                                    children: "Safety and quality watch"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-6 space-y-4 text-sm text-slate-300`,
                                            children: [
                                                dashboard.safetyAlerts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                                    children: "No major driver safety alert is active in the current store."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this),
                                                dashboard.safetyAlerts.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                                        children: alert
                                                    }, alert, false, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[32px] border border-rose-300/20 bg-rose-400/5 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCircleExclamation"], {
                                                    className: "h-5 w-5 text-rose-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-2xl font-semibold text-rose-100`,
                                                    children: "Payments waiting for action"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-4 space-y-3 text-sm text-slate-300`,
                                            children: [
                                                dashboard.pendingPayouts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: "All completed jobs have their driver payouts settled."
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 59
                                                }, this),
                                                dashboard.pendingPayouts.map(({ booking, driverUser })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                                        children: [
                                                            driverUser?.name ?? 'Driver',
                                                            " is due Rs. ",
                                                            booking.driverPayout.toLocaleString(),
                                                            " for ",
                                                            booking.from,
                                                            " to ",
                                                            booking.to,
                                                            "."
                                                        ]
                                                    }, booking.id, true, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCoins"], {
                                                    className: "mb-3 h-5 w-5 text-amber-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Collected revenue"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: [
                                                        "Rs. ",
                                                        dashboard.totalRevenue.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTruckRampBox"], {
                                                    className: "mb-3 h-5 w-5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-sm text-slate-300`,
                                                    children: "Driver dues open"
                                                }, void 0, false, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-3xl font-semibold`,
                                                    children: [
                                                        "Rs. ",
                                                        dashboard.driverDues.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                    lineNumber: 249,
                    columnNumber: 30
                }, this),
                !backendInsights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-3xl font-semibold`,
                            children: "Accepted trips and completion tracker"
                        }, void 0, false, {
                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-4",
                            children: dashboard.requests.filter((booking)=>booking.status !== 'pending_approval' && booking.status !== 'rejected').map((booking)=>{
                                const driver = store.drivers.find((item)=>item.id === booking.driverId);
                                const driverUser = store.users.find((item)=>item.id === driver?.userId);
                                const owner = store.users.find((item)=>item.id === booking.ownerId);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl border border-white/10 bg-white/5 p-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_grotesk_482bb85e$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} text-xl font-semibold`,
                                                        children: [
                                                            booking.from,
                                                            " to ",
                                                            booking.to
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-300`,
                                                        children: [
                                                            booking.truckType,
                                                            " • ",
                                                            booking.loadType,
                                                            " • ",
                                                            formatDateTime(booking.pickupTime)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} mt-2 text-sm text-slate-400`,
                                                        children: [
                                                            "Fleet owner: ",
                                                            owner?.companyName ?? owner?.name ?? 'Unknown',
                                                            " • Driver: ",
                                                            driverUser?.name ?? 'Unknown'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                lineNumber: 415,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_492f20b9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className} flex flex-wrap gap-2 text-sm`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `rounded-full px-3 py-1 ${booking.status === 'completed' ? 'bg-emerald-400/10 text-emerald-100' : booking.status === 'in_transit' ? 'bg-violet-400/10 text-violet-100' : 'bg-slate-400/10 text-slate-100'}`,
                                                        children: booking.status.replace('_', ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `rounded-full px-3 py-1 ${booking.paid ? 'bg-cyan-400/10 text-cyan-100' : 'bg-rose-400/10 text-rose-100'}`,
                                                        children: booking.paid ? 'Customer paid' : 'Customer due'
                                                    }, void 0, false, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EchoHorn$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `rounded-full px-3 py-1 ${booking.driverPaid ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`,
                                                        children: booking.driverPaid ? 'Driver paid' : 'Driver due'
                                                    }, void 0, false, {
                                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                                lineNumber: 424,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                        lineNumber: 414,
                                        columnNumber: 19
                                    }, this)
                                }, booking.id, false, {
                                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                                    lineNumber: 413,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
                    lineNumber: 403,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/EchoHorn/components/admin/AdminDashboard.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09930905._.js.map