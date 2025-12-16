module.exports = [
"[project]/Downloads/arabic-store-management (1)/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/arabic-store-management (1)/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/arabic-store-management (1)/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/arabic-store-management (1)/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/arabic-store-management (1)/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/arabic-store-management (1)/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/arabic-store-management (1)/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/arabic-store-management (1)/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://ogxhegzdcovzkrzkpusp.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neGhlZ3pkY292emtyemtwdXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NTgwNzgsImV4cCI6MjA4MTEzNDA3OH0.YWoPBXS7sfQMK2-LS9oAmQ69ZWk3wPBFTx44cnjqNP8"));
}
}),
"[project]/Downloads/arabic-store-management (1)/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatNumber",
    ()=>formatNumber,
    "getOrderStatusColor",
    ()=>getOrderStatusColor,
    "getPaymentStatusColor",
    ()=>getPaymentStatusColor,
    "getStockStatus",
    ()=>getStockStatus,
    "getStockStatusColor",
    ()=>getStockStatusColor
]);
function getStockStatus(quantity, threshold) {
    if (quantity === 0) return "نفد";
    if (quantity <= threshold) return "منخفض";
    return "متوفر";
}
function getStockStatusColor(status) {
    switch(status){
        case "متوفر":
            return "bg-green-100 text-green-800";
        case "منخفض":
            return "bg-yellow-100 text-yellow-800";
        case "نفد":
            return "bg-red-100 text-red-800";
    }
}
function getOrderStatusColor(status) {
    switch(status){
        case "جديد":
            return "bg-blue-100 text-blue-800";
        case "مكتمل":
            return "bg-green-100 text-green-800";
        case "ملغي":
            return "bg-red-100 text-red-800";
    }
}
function getPaymentStatusColor(status) {
    switch(status){
        case "مدفوع":
            return "bg-green-100 text-green-800";
        case "دين":
            return "bg-red-100 text-red-800";
        case "دفع جزئي":
            return "bg-yellow-100 text-yellow-800";
    }
}
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IL", {
        style: "currency",
        currency: "ILS",
        minimumFractionDigits: 2
    }).format(amount);
}
function formatDate(dateString) {
    return new Intl.DateTimeFormat("ar-EG-u-nu-latn", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(new Date(dateString));
}
function formatNumber(num) {
    return new Intl.NumberFormat("en-US").format(num);
}
}),
"[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewOrderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/arabic-store-management (1)/lib/types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function NewOrderPage() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [orderDiscount, setOrderDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [debtAmount, setDebtAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingPrice, setEditingPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProducts = async ()=>{
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { data } = await supabase.from("products").select("*").order("name", {
                ascending: true
            });
            setProducts(data || []);
        };
        fetchProducts();
    }, []);
    const filteredProducts = products.filter((p)=>(p.name.includes(search) || p.code.includes(search)) && p.quantity > 0);
    const addToCart = (product)=>{
        const existing = cart.find((item)=>item.product.id === product.id);
        if (existing) {
            if (existing.quantity < product.quantity) {
                setCart(cart.map((item)=>item.product.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("لا يمكن إضافة المزيد من هذا المنتج");
            }
        } else {
            setCart([
                ...cart,
                {
                    product,
                    quantity: 1
                }
            ]);
        }
    };
    const removeFromCart = (productId)=>{
        setCart(cart.filter((item)=>item.product.id !== productId));
    };
    const updateQuantity = (productId, delta)=>{
        setCart(cart.map((item)=>{
            if (item.product.id === productId) {
                const newQuantity = item.quantity + delta;
                if (newQuantity <= 0) return null;
                if (newQuantity > item.product.quantity) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("الكمية المطلوبة أكبر من المتوفر");
                    return item;
                }
                return {
                    ...item,
                    quantity: newQuantity
                };
            }
            return item;
        }).filter((item)=>item !== null));
    };
    const updateCustomPrice = (productId, newPrice)=>{
        if (newPrice <= 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("السعر يجب أن يكون أكبر من صفر");
            setEditingPrice(null);
            return;
        }
        setCart(cart.map((item)=>item.product.id === productId ? {
                ...item,
                customPrice: newPrice
            } : item));
        setEditingPrice(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("تم تحديث السعر");
    };
    // حساب إجماليات السلة
    const cartTotals = cart.reduce((acc, item)=>{
        const actualPrice = item.customPrice ?? item.product.selling_price;
        const discountAmount = item.customPrice ? (item.product.selling_price - item.customPrice) * item.quantity : 0;
        return {
            amount: acc.amount + actualPrice * item.quantity,
            cost: acc.cost + item.product.purchase_price * item.quantity,
            profit: acc.profit + (actualPrice - item.product.purchase_price) * item.quantity,
            totalDiscount: acc.totalDiscount + discountAmount
        };
    }, {
        amount: 0,
        cost: 0,
        profit: 0,
        totalDiscount: 0
    });
    // حساب الخصم والدين
    const orderDiscountAmount = Number.parseFloat(orderDiscount) || 0;
    const actualDebt = Number.parseFloat(debtAmount) || 0;
    // المبلغ النهائي = إجمالي السلة - خصم الطلب
    const totals = {
        ...cartTotals,
        amount: cartTotals.amount - orderDiscountAmount,
        profit: cartTotals.profit - orderDiscountAmount,
        totalDiscount: cartTotals.totalDiscount + orderDiscountAmount
    };
    const handleSubmit = async ()=>{
        if (cart.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("السلة فارغة");
            return;
        }
        // التحقق من صحة الخصم
        if (orderDiscountAmount < 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("مبلغ الخصم لا يمكن أن يكون سالباً");
            return;
        }
        if (orderDiscountAmount > cartTotals.amount) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("مبلغ الخصم لا يمكن أن يكون أكبر من إجمالي السلة");
            return;
        }
        // التحقق من مبلغ الدين
        if (actualDebt > 0 && !customerName.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("الرجاء إدخال اسم العميل عند وجود دين");
            return;
        }
        if (actualDebt > totals.amount) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("مبلغ الدين لا يمكن أن يكون أكبر من المبلغ الإجمالي بعد الخصم");
            return;
        }
        // حساب المبلغ المدفوع بناءً على الدين
        const actualPaidAmount = totals.amount - actualDebt;
        // تحديد حالة الدفع تلقائياً
        let finalPaymentStatus = "مدفوع";
        if (actualDebt > 0) {
            if (actualPaidAmount <= 0) {
                finalPaymentStatus = "دين";
            } else {
                finalPaymentStatus = "دفع جزئي";
            }
        }
        setLoading(true);
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: order, error: orderError } = await supabase.from("orders").insert({
            total_amount: totals.amount,
            total_cost: totals.cost,
            total_profit: totals.profit,
            status: "مكتمل",
            customer_name: customerName.trim() || null,
            payment_status: finalPaymentStatus,
            paid_amount: actualPaidAmount
        }).select().single();
        if (orderError || !order) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("حدث خطأ في إنشاء الطلب");
            setLoading(false);
            return;
        }
        // إضافة عناصر الطلب
        for (const item of cart){
            const actualPrice = item.customPrice ?? item.product.selling_price;
            const discountAmount = item.customPrice ? item.product.selling_price - item.customPrice : 0;
            await supabase.from("order_items").insert({
                order_id: order.id,
                product_id: item.product.id,
                product_name: item.product.name,
                quantity: item.quantity,
                unit_price: item.product.selling_price,
                unit_cost: item.product.purchase_price,
                total_price: actualPrice * item.quantity,
                total_cost: item.product.purchase_price * item.quantity,
                profit: (actualPrice - item.product.purchase_price) * item.quantity,
                custom_price: item.customPrice || null,
                discount_amount: discountAmount * item.quantity
            });
            const newQuantity = item.product.quantity - item.quantity;
            await supabase.from("products").update({
                quantity: newQuantity
            }).eq("id", item.product.id);
        }
        // إضافة سجل الدفع الأولي إذا كان هناك دفع
        if (actualPaidAmount > 0) {
            await supabase.from("payment_history").insert({
                order_id: order.id,
                payment_amount: actualPaidAmount,
                notes: "دفعة أولية عند إنشاء الطلب"
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("تم إنشاء الطلب بنجاح");
        router.push("/orders");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1800px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>router.push("/orders"),
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    "رجوع"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-text",
                                        children: "إنشاء طلب جديد"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-text-muted mt-1",
                                        children: "اختر المنتجات وأضفها للسلة"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6 h-[calc(100vh-150px)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[700px] flex flex-col bg-gradient-to-b from-muted to-background rounded-2xl p-6 border-2 border-border shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-2xl text-text mb-6 flex items-center gap-3 pb-4 border-b-2 border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            size: 28,
                                            className: "text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        "سلة الطلب (",
                                        cart.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 mb-6 p-4 bg-background rounded-xl border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "customerName",
                                                    className: "text-sm text-text-muted mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 19
                                                        }, this),
                                                        "اسم العميل ",
                                                        actualDebt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-danger",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "customerName",
                                                    value: customerName,
                                                    onChange: (e)=>setCustomerName(e.target.value),
                                                    placeholder: "اسم العميل (مطلوب عند وجود دين)",
                                                    className: "rounded-lg h-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "orderDiscount",
                                                            className: "text-sm text-text-muted mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "خصم على الطلب"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "orderDiscount",
                                                            type: "number",
                                                            step: "0.01",
                                                            min: "0",
                                                            value: orderDiscount,
                                                            onChange: (e)=>setOrderDiscount(e.target.value),
                                                            placeholder: "0.00",
                                                            className: "rounded-lg h-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "debtAmount",
                                                            className: "text-sm text-text-muted mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "مبلغ الدين"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "debtAmount",
                                                            type: "number",
                                                            step: "0.01",
                                                            min: "0",
                                                            value: debtAmount,
                                                            onChange: (e)=>setDebtAmount(e.target.value),
                                                            placeholder: "0.00",
                                                            className: "rounded-lg h-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        (orderDiscountAmount > 0 || actualDebt > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm space-y-1 p-3 bg-muted rounded-lg",
                                            children: [
                                                orderDiscountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-success",
                                                    children: [
                                                        "الخصم: ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(orderDiscountAmount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 21
                                                }, this),
                                                actualDebt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-warning",
                                                    children: [
                                                        "الدين: ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(actualDebt),
                                                        " | سيدفع العميل: ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totals.amount - actualDebt)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto space-y-3 mb-6 min-h-[200px]",
                                    children: cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-text-muted py-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                size: 64,
                                                className: "mx-auto mb-4 opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl",
                                                children: "السلة فارغة"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm mt-2",
                                                children: "انقر على منتج لإضافته"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this) : cart.map((item)=>{
                                        const actualPrice = item.customPrice ?? item.product.selling_price;
                                        const hasDiscount = item.customPrice && item.customPrice < item.product.selling_price;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface p-4 rounded-xl border border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-text",
                                                            children: item.product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeFromCart(item.product.id),
                                                            className: "text-danger hover:text-danger/80 p-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3",
                                                    children: editingPrice === item.product.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "number",
                                                            step: "0.01",
                                                            defaultValue: actualPrice,
                                                            onKeyDown: (e)=>{
                                                                if (e.key === "Enter") {
                                                                    updateCustomPrice(item.product.id, Number.parseFloat(e.currentTarget.value));
                                                                }
                                                            },
                                                            onBlur: (e)=>{
                                                                const newPrice = Number.parseFloat(e.target.value);
                                                                if (newPrice > 0) {
                                                                    updateCustomPrice(item.product.id, newPrice);
                                                                } else {
                                                                    setEditingPrice(null);
                                                                }
                                                            },
                                                            className: "h-9 rounded",
                                                            autoFocus: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-text-muted line-through",
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(item.product.selling_price)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-lg font-bold ${hasDiscount ? "text-success" : "text-text"}`,
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(actualPrice)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                        lineNumber: 373,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                onClick: ()=>setEditingPrice(item.product.id),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "icon",
                                                                    className: "h-10 w-10 rounded-lg",
                                                                    onClick: ()=>updateQuantity(item.product.id, -1),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-12 text-center font-bold text-text text-lg",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "icon",
                                                                    className: "h-10 w-10 rounded-lg",
                                                                    onClick: ()=>updateQuantity(item.product.id, 1),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-text text-lg",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(actualPrice * item.quantity)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.product.id, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t-2 border-border pt-4 space-y-3",
                                    children: [
                                        totals.totalDiscount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-warning",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "الخصم:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        "-",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totals.totalDiscount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-text text-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "المبلغ الإجمالي:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totals.amount)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "التكلفة:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totals.cost)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-success font-bold text-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "الربح:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totals.profit)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this),
                                        totals.profit > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm text-text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "هامش الربح:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        (totals.profit / totals.amount * 100).toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSubmit,
                                    disabled: loading || cart.length === 0,
                                    className: "w-full mt-6 bg-primary hover:bg-primary-light text-white rounded-xl py-7 text-xl",
                                    children: loading ? "جاري الإنشاء..." : "إنشاء الطلب"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col bg-background rounded-2xl border-2 border-border p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-text-muted",
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "ابحث عن منتج بالاسم أو الكود...",
                                                    value: search,
                                                    onChange: (e)=>setSearch(e.target.value),
                                                    className: "rounded-xl pr-14 pl-4 h-16 text-xl border-2 focus:border-primary font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 17
                                                }, this),
                                                search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>setSearch(""),
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-text",
                                                children: [
                                                    filteredProducts.length,
                                                    " منتج متاح"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto",
                                    children: filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-text-muted py-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                size: 100,
                                                className: "mx-auto mb-6 opacity-20"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold mb-3",
                                                children: "لا توجد منتجات"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl",
                                                children: search ? `لا توجد نتائج لـ "${search}"` : "لا توجد منتجات متوفرة"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",
                                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group relative flex flex-col p-6 bg-surface rounded-2xl hover:bg-primary/5 cursor-pointer transition-all border-2 border-border hover:border-primary hover:shadow-2xl transform hover:scale-105",
                                                onClick: ()=>addToCart(product),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                                                        children: "اضغط للإضافة +"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center mb-4",
                                                        children: product.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: product.image_url || "/placeholder.svg",
                                                            alt: product.name,
                                                            className: "w-32 h-32 rounded-2xl object-cover border-4 border-border group-hover:border-primary transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-4 border-border group-hover:border-primary transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                size: 60,
                                                                className: "text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-text text-xl mb-2 line-clamp-2",
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-text-muted mb-3",
                                                                children: [
                                                                    "كود: ",
                                                                    product.code
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center gap-2 mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm font-bold px-4 py-2 rounded-full ${product.quantity > product.low_stock_threshold ? "bg-success/20 text-success border-2 border-success" : product.quantity > 0 ? "bg-warning/20 text-warning border-2 border-warning" : "bg-danger/20 text-danger border-2 border-danger"}`,
                                                                    children: product.quantity > 0 ? `${product.quantity} متوفر` : "نفد"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center pt-4 border-t-2 border-border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-text-muted mb-2",
                                                                children: "سعر البيع"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-primary text-3xl",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$arabic$2d$store$2d$management__$28$1$292f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(product.selling_price)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, product.id, true, {
                                                fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/arabic-store-management (1)/app/orders/new/page.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_arabic-store-management%20%281%29_1c747460._.js.map