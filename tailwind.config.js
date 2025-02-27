module.exports = {
    mode: 'jit', // Aktifkan Just-In-Time Mode
    purge: ["./*.html"], // Scan semua file HTML
    safelist: [
        // "text-[16px]", "text-[20px]", "text-[24px]", "text-[32px]",
        // "w-[200px]", "w-[300px]", "w-[400px]",
        // "h-[100px]", "h-[150px]", "h-[200px]",

        { pattern: /^text-/ },
        { pattern: /^bg-/ },

        // 🔹 Padding (p)
        "p-0", "p-1", "p-2", "p-3", "p-4", "p-5", "p-6", "p-7", "p-8", "p-9", "p-10",
        "p-11", "p-12", "p-14", "p-16", "p-20", "p-24", "p-28", "p-32", "p-36", "p-40",
        "p-44", "p-48", "p-52", "p-56", "p-60", "p-64", "p-72", "p-80", "p-96",
        "p-px", "p-[2px]", "p-[4px]", "p-[8px]", "p-[16px]", "p-[32px]", "p-[64px]", "p-[96px]",

        // 🔹 Padding Inline (px)
        "px-0", "px-1", "px-2", "px-3", "px-4", "px-5", "px-6", "px-7", "px-8", "px-9", "px-10",
        "px-11", "px-12", "px-14", "px-16", "px-20", "px-24", "px-28", "px-32", "px-36", "px-40",
        "px-44", "px-48", "px-52", "px-56", "px-60", "px-64", "px-72", "px-80", "px-96",
        "px-px", "px-[96px]",

        // 🔹 Padding Block (py)
        "py-0", "py-1", "py-2", "py-3", "py-4", "py-5", "py-6", "py-7", "py-8", "py-9", "py-10",
        "py-11", "py-12", "py-14", "py-16", "py-20", "py-24", "py-28", "py-32", "py-36", "py-40",
        "py-44", "py-48", "py-52", "py-56", "py-60", "py-64", "py-72", "py-80", "py-96",
        "py-px", "py-[96px]",

        // 🔹 Padding Top, Right, Bottom, Left
        "pt-0", "pt-1", "pt-2", "pt-3", "pt-4", "pt-5", "pt-6", "pt-7", "pt-8", "pt-9", "pt-10",
        "pt-12", "pt-16", "pt-20", "pt-24", "pt-32", "pt-40", "pt-48", "pt-56", "pt-64", "pt-80", "pt-96",
        "pt-px", "pt-[96px]",

        "pr-0", "pr-1", "pr-2", "pr-3", "pr-4", "pr-5", "pr-6", "pr-7", "pr-8", "pr-9", "pr-10",
        "pr-12", "pr-16", "pr-20", "pr-24", "pr-32", "pr-40", "pr-48", "pr-56", "pr-64", "pr-80", "pr-96",
        "pr-px", "pr-[96px]",

        "pb-0", "pb-1", "pb-2", "pb-3", "pb-4", "pb-5", "pb-6", "pb-7", "pb-8", "pb-9", "pb-10",
        "pb-12", "pb-16", "pb-20", "pb-24", "pb-32", "pb-40", "pb-48", "pb-56", "pb-64", "pb-80", "pb-96",
        "pb-px", "pb-[96px]",

        "pl-0", "pl-1", "pl-2", "pl-3", "pl-4", "pl-5", "pl-6", "pl-7", "pl-8", "pl-9", "pl-10",
        "pl-12", "pl-16", "pl-20", "pl-24", "pl-32", "pl-40", "pl-48", "pl-56", "pl-64", "pl-80", "pl-96",
        "pl-px", "pl-[96px]",

        // ---

        // 🔹 Margin (m)
        "m-0", "m-1", "m-2", "m-3", "m-4", "m-5", "m-6", "m-7", "m-8", "m-9", "m-10",
        "m-11", "m-12", "m-14", "m-16", "m-20", "m-24", "m-28", "m-32", "m-36", "m-40",
        "m-44", "m-48", "m-52", "m-56", "m-60", "m-64", "m-72", "m-80", "m-96",
        "m-px", "m-[2px]", "m-[4px]", "m-[8px]", "m-[16px]", "m-[32px]", "m-[64px]", "m-[96px]",

        // 🔹 Margin Inline (mx)
        "mx-0", "mx-1", "mx-2", "mx-3", "mx-4", "mx-5", "mx-6", "mx-7", "mx-8", "mx-9", "mx-10",
        "mx-11", "mx-12", "mx-14", "mx-16", "mx-20", "mx-24", "mx-28", "mx-32", "mx-36", "mx-40",
        "mx-44", "mx-48", "mx-52", "mx-56", "mx-60", "mx-64", "mx-72", "mx-80", "mx-96",
        "mx-px", "mx-[96px]",

        // 🔹 Margin Block (my)
        "my-0", "my-1", "my-2", "my-3", "my-4", "my-5", "my-6", "my-7", "my-8", "my-9", "my-10",
        "my-11", "my-12", "my-14", "my-16", "my-20", "my-24", "my-28", "my-32", "my-36", "my-40",
        "my-44", "my-48", "my-52", "my-56", "my-60", "my-64", "my-72", "my-80", "my-96",
        "my-px", "my-[96px]",

        // 🔹 Margin Top, Right, Bottom, Left
        "mt-0", "mt-1", "mt-2", "mt-3", "mt-4", "mt-5", "mt-6", "mt-7", "mt-8", "mt-9", "mt-10",
        "mt-12", "mt-16", "mt-20", "mt-24", "mt-32", "mt-40", "mt-48", "mt-56", "mt-64", "mt-80", "mt-96",
        "mt-px", "mt-[96px]",

        "mr-0", "mr-1", "mr-2", "mr-3", "mr-4", "mr-5", "mr-6", "mr-7", "mr-8", "mr-9", "mr-10",
        "mr-12", "mr-16", "mr-20", "mr-24", "mr-32", "mr-40", "mr-48", "mr-56", "mr-64", "mr-80", "mr-96",
        "mr-px", "mr-[96px]",

        "mb-0", "mb-1", "mb-2", "mb-3", "mb-4", "mb-5", "mb-6", "mb-7", "mb-8", "mb-9", "mb-10",
        "mb-12", "mb-16", "mb-20", "mb-24", "mb-32", "mb-40", "mb-48", "mb-56", "mb-64", "mb-80", "mb-96",
        "mb-px", "mb-[96px]",

        "ml-0", "ml-1", "ml-2", "ml-3", "ml-4", "ml-5", "ml-6", "ml-7", "ml-8", "ml-9", "ml-10",
        "ml-12", "ml-16", "ml-20", "ml-24", "ml-32", "ml-40", "ml-48", "ml-56", "ml-64", "ml-80", "ml-96",
        "ml-px", "ml-[96px]",

        // ---

        // Flexbox
        "flex", "inline-flex",
        "flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse",
        "flex-wrap", "flex-wrap-reverse", "flex-nowrap",
        "place-content-center", "place-content-start", "place-content-end", "place-content-between", "place-content-around", "place-content-evenly",
        "place-items-center", "place-items-start", "place-items-end", "place-items-baseline", "place-items-stretch",
        "justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly",
        "justify-items-start", "justify-items-end", "justify-items-center", "justify-items-stretch",
        "justify-self-auto", "justify-self-start", "justify-self-end", "justify-self-center", "justify-self-stretch",
        "items-start", "items-end", "items-center", "items-baseline", "items-stretch",
        "content-start", "content-end", "content-center", "content-between", "content-around", "content-evenly",
        "self-auto", "self-start", "self-end", "self-center", "self-stretch",
        "flex-1", "flex-auto", "flex-initial", "flex-none",
        "grow", "grow-0",
        "shrink", "shrink-0",
        "order-first", "order-last", "order-none",
        "order-1", "order-2", "order-3", "order-4", "order-5", "order-6", "order-7", "order-8", "order-9", "order-10", "order-11", "order-12",

        // Grid
        "grid", "inline-grid",
        "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5", "grid-cols-6",
        "grid-cols-7", "grid-cols-8", "grid-cols-9", "grid-cols-10", "grid-cols-11", "grid-cols-12",
        "grid-cols-none",
        "col-auto", "col-span-1", "col-span-2", "col-span-3", "col-span-4", "col-span-5", "col-span-6",
        "col-span-7", "col-span-8", "col-span-9", "col-span-10", "col-span-11", "col-span-12", "col-span-full",
        "col-start-auto", "col-start-1", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6",
        "col-start-7", "col-start-8", "col-start-9", "col-start-10", "col-start-11", "col-start-12", "col-start-13",
        "col-end-auto", "col-end-1", "col-end-2", "col-end-3", "col-end-4", "col-end-5", "col-end-6",
        "col-end-7", "col-end-8", "col-end-9", "col-end-10", "col-end-11", "col-end-12", "col-end-13",
        "grid-rows-1", "grid-rows-2", "grid-rows-3", "grid-rows-4", "grid-rows-5", "grid-rows-6",
        "grid-rows-none",
        "row-auto", "row-span-1", "row-span-2", "row-span-3", "row-span-4", "row-span-5", "row-span-6",
        "row-span-full",
        "row-start-auto", "row-start-1", "row-start-2", "row-start-3", "row-start-4", "row-start-5", "row-start-6", "row-start-7",
        "row-end-auto", "row-end-1", "row-end-2", "row-end-3", "row-end-4", "row-end-5", "row-end-6", "row-end-7",
        "gap-0", "gap-1", "gap-2", "gap-3", "gap-4", "gap-5", "gap-6", "gap-7", "gap-8", "gap-9", "gap-10",
        "gap-11", "gap-12", "gap-14", "gap-16", "gap-20", "gap-24", "gap-28", "gap-32", "gap-36", "gap-40",
        "gap-44", "gap-48", "gap-52", "gap-56", "gap-60", "gap-64", "gap-72", "gap-80", "gap-96",
        "gap-x-0", "gap-x-1", "gap-x-2", "gap-x-3", "gap-x-4", "gap-x-5", "gap-x-6", "gap-x-7", "gap-x-8",
        "gap-y-0", "gap-y-1", "gap-y-2", "gap-y-3", "gap-y-4", "gap-y-5", "gap-y-6", "gap-y-7", "gap-y-8",
        "auto-cols-auto", "auto-cols-min", "auto-cols-max", "auto-cols-fr",
        "auto-rows-auto", "auto-rows-min", "auto-rows-max", "auto-rows-fr",
        "place-content-center", "place-content-start", "place-content-end", "place-content-between", "place-content-around", "place-content-evenly",
        "place-items-start", "place-items-end", "place-items-center", "place-items-stretch",
        "place-self-auto", "place-self-start", "place-self-end", "place-self-center", "place-self-stretch",

        // ---

        // WIDTH, MIN WIDTH, MAX WIDTH
        "w-0", "w-px", "w-0.5", "w-1", "w-1.5", "w-2", "w-2.5", "w-3", "w-3.5", "w-4", "w-5",
        "w-6", "w-7", "w-8", "w-9", "w-10", "w-11", "w-12", "w-14", "w-16", "w-20", "w-24",
        "w-28", "w-32", "w-36", "w-40", "w-44", "w-48", "w-52", "w-56", "w-60", "w-64", "w-72",
        "w-80", "w-96", "w-auto", "w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-2/4", "w-3/4", "w-1/5",
        "w-2/5", "w-3/5", "w-4/5", "w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6", "w-1/12", "w-2/12",
        "w-3/12", "w-4/12", "w-5/12", "w-6/12", "w-7/12", "w-8/12", "w-9/12", "w-10/12", "w-11/12",
        "w-full", "w-screen", "w-min", "w-max", "w-fit",

        "min-w-0", "min-w-px", "min-w-0.5", "min-w-1", "min-w-1.5", "min-w-2", "min-w-2.5",
        "min-w-3", "min-w-3.5", "min-w-4", "min-w-5", "min-w-6", "min-w-7", "min-w-8", "min-w-9",
        "min-w-10", "min-w-11", "min-w-12", "min-w-14", "min-w-16", "min-w-20", "min-w-24",
        "min-w-28", "min-w-32", "min-w-36", "min-w-40", "min-w-44", "min-w-48", "min-w-52", "min-w-56",
        "min-w-60", "min-w-64", "min-w-72", "min-w-80", "min-w-96", "min-w-full", "min-w-min",
        "min-w-max", "min-w-fit",

        "max-w-0", "max-w-none", "max-w-xs", "max-w-sm", "max-w-md", "max-w-lg", "max-w-xl",
        "max-w-2xl", "max-w-3xl", "max-w-4xl", "max-w-5xl", "max-w-6xl", "max-w-7xl",
        "max-w-full", "max-w-min", "max-w-max", "max-w-fit", "max-w-prose", "max-w-screen-sm",
        "max-w-screen-md", "max-w-screen-lg", "max-w-screen-xl", "max-w-screen-2xl",

        //  ---

        // Height, Min Height, Max Height
        "h-0", "h-px", "h-0.5", "h-1", "h-1.5", "h-2", "h-2.5", "h-3", "h-3.5", "h-4", "h-5",
        "h-6", "h-7", "h-8", "h-9", "h-10", "h-11", "h-12", "h-14", "h-16", "h-20", "h-24",
        "h-28", "h-32", "h-36", "h-40", "h-44", "h-48", "h-52", "h-56", "h-60", "h-64", "h-72",
        "h-80", "h-96", "h-auto", "h-1/2", "h-1/3", "h-2/3", "h-1/4", "h-2/4", "h-3/4", "h-1/5",
        "h-2/5", "h-3/5", "h-4/5", "h-1/6", "h-2/6", "h-3/6", "h-4/6", "h-5/6", "h-full",
        "h-screen", "h-min", "h-max", "h-fit",

        "min-h-0", "min-h-px", "min-h-0.5", "min-h-1", "min-h-1.5", "min-h-2", "min-h-2.5",
        "min-h-3", "min-h-3.5", "min-h-4", "min-h-5", "min-h-6", "min-h-7", "min-h-8", "min-h-9",
        "min-h-10", "min-h-11", "min-h-12", "min-h-14", "min-h-16", "min-h-20", "min-h-24",
        "min-h-28", "min-h-32", "min-h-36", "min-h-40", "min-h-44", "min-h-48", "min-h-52", "min-h-56",
        "min-h-60", "min-h-64", "min-h-72", "min-h-80", "min-h-96", "min-h-full", "min-h-min",
        "min-h-max", "min-h-fit",

        "max-h-0", "max-h-px", "max-h-0.5", "max-h-1", "max-h-1.5", "max-h-2", "max-h-2.5",
        "max-h-3", "max-h-3.5", "max-h-4", "max-h-5", "max-h-6", "max-h-7", "max-h-8", "max-h-9",
        "max-h-10", "max-h-11", "max-h-12", "max-h-14", "max-h-16", "max-h-20", "max-h-24",
        "max-h-28", "max-h-32", "max-h-36", "max-h-40", "max-h-44", "max-h-48", "max-h-52", "max-h-56",
        "max-h-60", "max-h-64", "max-h-72", "max-h-80", "max-h-96", "max-h-full", "max-h-min",
        "max-h-max", "max-h-fit",

        // ---

        // Font Family, Font Size, Font Smoothing
        "font-sans", "font-serif", "font-mono",

        "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl",
        "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl",

        "antialiased", "subpixel-antialiased",

        // ---

        // font-style, font-weight, font-stretch, font-variant-numeric, letter-spacing
        "italic", "not-italic",

        "font-thin", "font-extralight", "font-light", "font-normal", "font-medium",
        "font-semibold", "font-bold", "font-extrabold", "font-black",

        "font-condensed", "font-expanded",

        "normal-nums", "ordinal", "slashed-zero", "lining-nums", "oldstyle-nums",
        "proportional-nums", "tabular-nums", "diagonal-fractions", "stacked-fractions",

        "tracking-tighter", "tracking-tight", "tracking-normal",
        "tracking-wide", "tracking-wider", "tracking-widest",

        // ---

        // line-clamp, line-height, list-style-image, list-style-position, list-style-type, text-align
        "line-clamp-1", "line-clamp-2", "line-clamp-3", "line-clamp-4", "line-clamp-5", "line-clamp-6", "line-clamp-none",

        "leading-none", "leading-tight", "leading-snug", "leading-normal", "leading-relaxed", "leading-loose", "leading-3", "leading-4", "leading-5", "leading-6", "leading-7", "leading-8", "leading-9", "leading-10",

        "list-image-none",

        "list-inside", "list-outside",

        "list-none", "list-disc", "list-decimal",

        "text-left", "text-center", "text-right", "text-justify", "text-start", "text-end",

        // ---

        // Text-color
        "text-inherit", "text-current", "text-transparent", "text-black", "text-white",
        "text-slate-50", "text-slate-100", "text-slate-200", "text-slate-300", "text-slate-400", "text-slate-500", "text-slate-600", "text-slate-700", "text-slate-800", "text-slate-900", "text-slate-950",
        "text-gray-50", "text-gray-100", "text-gray-200", "text-gray-300", "text-gray-400", "text-gray-500", "text-gray-600", "text-gray-700", "text-gray-800", "text-gray-900", "text-gray-950",
        "text-zinc-50", "text-zinc-100", "text-zinc-200", "text-zinc-300", "text-zinc-400", "text-zinc-500", "text-zinc-600", "text-zinc-700", "text-zinc-800", "text-zinc-900", "text-zinc-950",
        "text-neutral-50", "text-neutral-100", "text-neutral-200", "text-neutral-300", "text-neutral-400", "text-neutral-500", "text-neutral-600", "text-neutral-700", "text-neutral-800", "text-neutral-900", "text-neutral-950",
        "text-stone-50", "text-stone-100", "text-stone-200", "text-stone-300", "text-stone-400", "text-stone-500", "text-stone-600", "text-stone-700", "text-stone-800", "text-stone-900", "text-stone-950",
        "text-red-50", "text-red-100", "text-red-200", "text-red-300", "text-red-400", "text-red-500", "text-red-600", "text-red-700", "text-red-800", "text-red-900", "text-red-950",
        "text-orange-50", "text-orange-100", "text-orange-200", "text-orange-300", "text-orange-400", "text-orange-500", "text-orange-600", "text-orange-700", "text-orange-800", "text-orange-900", "text-orange-950",
        "text-amber-50", "text-amber-100", "text-amber-200", "text-amber-300", "text-amber-400", "text-amber-500", "text-amber-600", "text-amber-700", "text-amber-800", "text-amber-900", "text-amber-950",
        "text-yellow-50", "text-yellow-100", "text-yellow-200", "text-yellow-300", "text-yellow-400", "text-yellow-500", "text-yellow-600", "text-yellow-700", "text-yellow-800", "text-yellow-900", "text-yellow-950",
        "text-lime-50", "text-lime-100", "text-lime-200", "text-lime-300", "text-lime-400", "text-lime-500", "text-lime-600", "text-lime-700", "text-lime-800", "text-lime-900", "text-lime-950",
        "text-green-50", "text-green-100", "text-green-200", "text-green-300", "text-green-400", "text-green-500", "text-green-600", "text-green-700", "text-green-800", "text-green-900", "text-green-950",
        "text-emerald-50", "text-emerald-100", "text-emerald-200", "text-emerald-300", "text-emerald-400", "text-emerald-500", "text-emerald-600", "text-emerald-700", "text-emerald-800", "text-emerald-900", "text-emerald-950",
        "text-teal-50", "text-teal-100", "text-teal-200", "text-teal-300", "text-teal-400", "text-teal-500", "text-teal-600", "text-teal-700", "text-teal-800", "text-teal-900", "text-teal-950",
        "text-cyan-50", "text-cyan-100", "text-cyan-200", "text-cyan-300", "text-cyan-400", "text-cyan-500", "text-cyan-600", "text-cyan-700", "text-cyan-800", "text-cyan-900", "text-cyan-950",
        "text-blue-50", "text-blue-100", "text-blue-200", "text-blue-300", "text-blue-400", "text-blue-500", "text-blue-600", "text-blue-700", "text-blue-800", "text-blue-900", "text-blue-950",
        "text-indigo-50", "text-indigo-100", "text-indigo-200", "text-indigo-300", "text-indigo-400", "text-indigo-500", "text-indigo-600", "text-indigo-700", "text-indigo-800", "text-indigo-900", "text-indigo-950",
        "text-violet-50", "text-violet-100", "text-violet-200", "text-violet-300", "text-violet-400", "text-violet-500", "text-violet-600", "text-violet-700", "text-violet-800", "text-violet-900", "text-violet-950",
        "text-purple-50", "text-purple-100", "text-purple-200", "text-purple-300", "text-purple-400", "text-purple-500", "text-purple-600", "text-purple-700", "text-purple-800", "text-purple-900", "text-purple-950",
        "text-fuchsia-50", "text-fuchsia-100", "text-fuchsia-200", "text-fuchsia-300", "text-fuchsia-400", "text-fuchsia-500", "text-fuchsia-600", "text-fuchsia-700", "text-fuchsia-800", "text-fuchsia-900", "text-fuchsia-950",
        "text-pink-50", "text-pink-100", "text-pink-200", "text-pink-300", "text-pink-400", "text-pink-500", "text-pink-600", "text-pink-700", "text-pink-800", "text-pink-900", "text-pink-950",
        "text-rose-50", "text-rose-100", "text-rose-200", "text-rose-300", "text-rose-400", "text-rose-500", "text-rose-600", "text-rose-700", "text-rose-800", "text-rose-900", "text-rose-950",

        // Bg Color
        "bg-inherit", "bg-current", "bg-transparent", "bg-black", "bg-white",

        "bg-slate-50", "bg-slate-100", "bg-slate-200", "bg-slate-300", "bg-slate-400", "bg-slate-500", "bg-slate-600", "bg-slate-700", "bg-slate-800", "bg-slate-900", "bg-slate-950",
        "bg-gray-50", "bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-700", "bg-gray-800", "bg-gray-900", "bg-gray-950",
        "bg-zinc-50", "bg-zinc-100", "bg-zinc-200", "bg-zinc-300", "bg-zinc-400", "bg-zinc-500", "bg-zinc-600", "bg-zinc-700", "bg-zinc-800", "bg-zinc-900", "bg-zinc-950",
        "bg-neutral-50", "bg-neutral-100", "bg-neutral-200", "bg-neutral-300", "bg-neutral-400", "bg-neutral-500", "bg-neutral-600", "bg-neutral-700", "bg-neutral-800", "bg-neutral-900", "bg-neutral-950",
        "bg-stone-50", "bg-stone-100", "bg-stone-200", "bg-stone-300", "bg-stone-400", "bg-stone-500", "bg-stone-600", "bg-stone-700", "bg-stone-800", "bg-stone-900", "bg-stone-950",
        "bg-red-50", "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900", "bg-red-950",
        "bg-orange-50", "bg-orange-100", "bg-orange-200", "bg-orange-300", "bg-orange-400", "bg-orange-500", "bg-orange-600", "bg-orange-700", "bg-orange-800", "bg-orange-900", "bg-orange-950",
        "bg-amber-50", "bg-amber-100", "bg-amber-200", "bg-amber-300", "bg-amber-400", "bg-amber-500", "bg-amber-600", "bg-amber-700", "bg-amber-800", "bg-amber-900", "bg-amber-950",
        "bg-yellow-50", "bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900", "bg-yellow-950",
        "bg-lime-50", "bg-lime-100", "bg-lime-200", "bg-lime-300", "bg-lime-400", "bg-lime-500", "bg-lime-600", "bg-lime-700", "bg-lime-800", "bg-lime-900", "bg-lime-950",
        "bg-green-50", "bg-green-100", "bg-green-200", "bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600", "bg-green-700", "bg-green-800", "bg-green-900", "bg-green-950",
        "bg-emerald-50", "bg-emerald-100", "bg-emerald-200", "bg-emerald-300", "bg-emerald-400", "bg-emerald-500", "bg-emerald-600", "bg-emerald-700", "bg-emerald-800", "bg-emerald-900", "bg-emerald-950",
        "bg-teal-50", "bg-teal-100", "bg-teal-200", "bg-teal-300", "bg-teal-400", "bg-teal-500", "bg-teal-600", "bg-teal-700", "bg-teal-800", "bg-teal-900", "bg-teal-950",
        "bg-cyan-50", "bg-cyan-100", "bg-cyan-200", "bg-cyan-300", "bg-cyan-400", "bg-cyan-500", "bg-cyan-600", "bg-cyan-700", "bg-cyan-800", "bg-cyan-900", "bg-cyan-950",
        "bg-blue-50", "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900", "bg-blue-950",
        "bg-indigo-50", "bg-indigo-100", "bg-indigo-200", "bg-indigo-300", "bg-indigo-400", "bg-indigo-500", "bg-indigo-600", "bg-indigo-700", "bg-indigo-800", "bg-indigo-900", "bg-indigo-950",
        "bg-violet-50", "bg-violet-100", "bg-violet-200", "bg-violet-300", "bg-violet-400", "bg-violet-500", "bg-violet-600", "bg-violet-700", "bg-violet-800", "bg-violet-900", "bg-violet-950",
        "bg-purple-50", "bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900", "bg-purple-950",
        "bg-fuchsia-50", "bg-fuchsia-100", "bg-fuchsia-200", "bg-fuchsia-300", "bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600", "bg-fuchsia-700", "bg-fuchsia-800", "bg-fuchsia-900", "bg-fuchsia-950",
        "bg-pink-50", "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-pink-400", "bg-pink-500", "bg-pink-600", "bg-pink-700", "bg-pink-800", "bg-pink-900", "bg-pink-950",
        "bg-rose-50", "bg-rose-100", "bg-rose-200", "bg-rose-300", "bg-rose-400", "bg-rose-500", "bg-rose-600", "bg-rose-700", "bg-rose-800", "bg-rose-900", "bg-rose-950",

        // ---

        // text-decoration-line, text-decoration-color, text-decoration-style, text-decoration-thickness, text-underline-offset
        "text-decoration-none", "text-decoration-underline", "text-decoration-overline", "text-decoration-line-through",

        "text-decoration-inherit", "text-decoration-current", "text-decoration-transparent",
        "text-decoration-black", "text-decoration-white",
        "text-decoration-gray-500", "text-decoration-blue-600", "text-decoration-red-400",

        "text-decoration-solid", "text-decoration-double", "text-decoration-dotted", "text-decoration-dashed", "text-decoration-wavy",

        "text-decoration-auto", "text-decoration-from-font", "text-decoration-0", "text-decoration-1", "text-decoration-2", "text-decoration-4", "text-decoration-8",

        "text-underline-offset-auto", "text-underline-offset-0", "text-underline-offset-1", "text-underline-offset-2", "text-underline-offset-4", "text-underline-offset-8",

        // ---

        // text-transform, text-overflow, text-wrap, text-indent, vertical-align, white-space, word-break, Hypens
        "text-uppercase", "text-lowercase", "text-capitalize", "text-normal-case",

        "text-ellipsis", "text-clip",

        "text-wrap", "text-nowrap", "text-balance", "text-pretty",

        "text-indent-0", "text-indent-px", "text-indent-0.5", "text-indent-1", "text-indent-2", "text-indent-4", "text-indent-8", "text-indent-16", "text-indent-32", "text-indent-64",

        "align-baseline", "align-top", "align-middle", "align-bottom", "align-text-top", "align-text-bottom", "align-sub", "align-super",

        "whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-line", "whitespace-pre-wrap", "whitespace-break-spaces",

        "break-normal", "break-words", "break-all", "break-keep",

        "hyphens-none", "hyphens-manual", "hyphens-auto",

        // ---

        // background-attachment, background-clip, background-image

        "bg-fixed", "bg-local", "bg-scroll",

        "bg-clip-border", "bg-clip-padding", "bg-clip-content", "bg-clip-text",

        "bg-none", "bg-gradient-to-t", "bg-gradient-to-r", "bg-gradient-to-b", "bg-gradient-to-l",

        // ---

        // background-origin, background-position, background-repeat, background-size
        "bg-origin-border", "bg-origin-padding", "bg-origin-content",

        "bg-bottom", "bg-center", "bg-left", "bg-left-bottom", "bg-left-top", "bg-right", "bg-right-bottom", "bg-right-top", "bg-top",

        "bg-repeat", "bg-no-repeat", "bg-repeat-x", "bg-repeat-y", "bg-repeat-round", "bg-repeat-space",

        "bg-auto", "bg-cover", "bg-contain"



    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

// build : npx tailwindcss -i ./tailwind.css -o ./tailwind.min-2.css --minify (sometimes its not include all)
// build : npx tailwindcss -o tailwind-full.css --minify

