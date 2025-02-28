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

        "bg-auto", "bg-cover", "bg-contain",

        // ---

        // border-radius, border-width, border-color

        // Border Radius
        "rounded-none", "rounded-sm", "rounded", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-full",
        "rounded-t-none", "rounded-t-sm", "rounded-t", "rounded-t-md", "rounded-t-lg", "rounded-t-xl", "rounded-t-2xl", "rounded-t-3xl", "rounded-t-full",
        "rounded-b-none", "rounded-b-sm", "rounded-b", "rounded-b-md", "rounded-b-lg", "rounded-b-xl", "rounded-b-2xl", "rounded-b-3xl", "rounded-b-full",
        "rounded-l-none", "rounded-l-sm", "rounded-l", "rounded-l-md", "rounded-l-lg", "rounded-l-xl", "rounded-l-2xl", "rounded-l-3xl", "rounded-l-full",
        "rounded-r-none", "rounded-r-sm", "rounded-r", "rounded-r-md", "rounded-r-lg", "rounded-r-xl", "rounded-r-2xl", "rounded-r-3xl", "rounded-r-full",
        "rounded-tl-none", "rounded-tl-sm", "rounded-tl", "rounded-tl-md", "rounded-tl-lg", "rounded-tl-xl", "rounded-tl-2xl", "rounded-tl-3xl", "rounded-tl-full",
        "rounded-tr-none", "rounded-tr-sm", "rounded-tr", "rounded-tr-md", "rounded-tr-lg", "rounded-tr-xl", "rounded-tr-2xl", "rounded-tr-3xl", "rounded-tr-full",
        "rounded-bl-none", "rounded-bl-sm", "rounded-bl", "rounded-bl-md", "rounded-bl-lg", "rounded-bl-xl", "rounded-bl-2xl", "rounded-bl-3xl", "rounded-bl-full",
        "rounded-br-none", "rounded-br-sm", "rounded-br", "rounded-br-md", "rounded-br-lg", "rounded-br-xl", "rounded-br-2xl", "rounded-br-3xl", "rounded-br-full",

        // Border Width
        "border-0", "border", "border-2", "border-4", "border-8",
        "border-t-0", "border-t", "border-t-2", "border-t-4", "border-t-8",
        "border-b-0", "border-b", "border-b-2", "border-b-4", "border-b-8",
        "border-l-0", "border-l", "border-l-2", "border-l-4", "border-l-8",
        "border-r-0", "border-r", "border-r-2", "border-r-4", "border-r-8",

        // Border Color Lengkap
        "border-transparent", "border-current", "border-black", "border-white",
        "border-slate-50", "border-slate-100", "border-slate-200", "border-slate-300", "border-slate-400", "border-slate-500", "border-slate-600", "border-slate-700", "border-slate-800", "border-slate-900",
        "border-gray-50", "border-gray-100", "border-gray-200", "border-gray-300", "border-gray-400", "border-gray-500", "border-gray-600", "border-gray-700", "border-gray-800", "border-gray-900",
        "border-zinc-50", "border-zinc-100", "border-zinc-200", "border-zinc-300", "border-zinc-400", "border-zinc-500", "border-zinc-600", "border-zinc-700", "border-zinc-800", "border-zinc-900",
        "border-neutral-50", "border-neutral-100", "border-neutral-200", "border-neutral-300", "border-neutral-400", "border-neutral-500", "border-neutral-600", "border-neutral-700", "border-neutral-800", "border-neutral-900",
        "border-stone-50", "border-stone-100", "border-stone-200", "border-stone-300", "border-stone-400", "border-stone-500", "border-stone-600", "border-stone-700", "border-stone-800", "border-stone-900",
        "border-red-50", "border-red-100", "border-red-200", "border-red-300", "border-red-400", "border-red-500", "border-red-600", "border-red-700", "border-red-800", "border-red-900",
        "border-orange-50", "border-orange-100", "border-orange-200", "border-orange-300", "border-orange-400", "border-orange-500", "border-orange-600", "border-orange-700", "border-orange-800", "border-orange-900",
        "border-amber-50", "border-amber-100", "border-amber-200", "border-amber-300", "border-amber-400", "border-amber-500", "border-amber-600", "border-amber-700", "border-amber-800", "border-amber-900",
        "border-yellow-50", "border-yellow-100", "border-yellow-200", "border-yellow-300", "border-yellow-400", "border-yellow-500", "border-yellow-600", "border-yellow-700", "border-yellow-800", "border-yellow-900",
        "border-lime-50", "border-lime-100", "border-lime-200", "border-lime-300", "border-lime-400", "border-lime-500", "border-lime-600", "border-lime-700", "border-lime-800", "border-lime-900",
        "border-green-50", "border-green-100", "border-green-200", "border-green-300", "border-green-400", "border-green-500", "border-green-600", "border-green-700", "border-green-800", "border-green-900",
        "border-emerald-50", "border-emerald-100", "border-emerald-200", "border-emerald-300", "border-emerald-400", "border-emerald-500", "border-emerald-600", "border-emerald-700", "border-emerald-800", "border-emerald-900",
        "border-teal-50", "border-teal-100", "border-teal-200", "border-teal-300", "border-teal-400", "border-teal-500", "border-teal-600", "border-teal-700", "border-teal-800", "border-teal-900",
        "border-cyan-50", "border-cyan-100", "border-cyan-200", "border-cyan-300", "border-cyan-400", "border-cyan-500", "border-cyan-600", "border-cyan-700", "border-cyan-800", "border-cyan-900",
        "border-sky-50", "border-sky-100", "border-sky-200", "border-sky-300", "border-sky-400", "border-sky-500", "border-sky-600", "border-sky-700", "border-sky-800", "border-sky-900",
        "border-blue-50", "border-blue-100", "border-blue-200", "border-blue-300", "border-blue-400", "border-blue-500", "border-blue-600", "border-blue-700", "border-blue-800", "border-blue-900",
        "border-indigo-50", "border-indigo-100", "border-indigo-200", "border-indigo-300", "border-indigo-400", "border-indigo-500", "border-indigo-600", "border-indigo-700", "border-indigo-800", "border-indigo-900",
        "border-violet-50", "border-violet-100", "border-violet-200", "border-violet-300", "border-violet-400", "border-violet-500", "border-violet-600", "border-violet-700", "border-violet-800", "border-violet-900",
        "border-purple-50", "border-purple-100", "border-purple-200", "border-purple-300", "border-purple-400", "border-purple-500", "border-purple-600", "border-purple-700", "border-purple-800", "border-purple-900",
        "border-fuchsia-50", "border-fuchsia-100", "border-fuchsia-200", "border-fuchsia-300", "border-fuchsia-400", "border-fuchsia-500", "border-fuchsia-600", "border-fuchsia-700", "border-fuchsia-800", "border-fuchsia-900",
        "border-pink-50", "border-pink-100", "border-pink-200", "border-pink-300", "border-pink-400", "border-pink-500", "border-pink-600", "border-pink-700", "border-pink-800", "border-pink-900",
        "border-rose-50", "border-rose-100", "border-rose-200", "border-rose-300", "border-rose-400", "border-rose-500", "border-rose-600", "border-rose-700", "border-rose-800", "border-rose-900",

        // ---

        // border-style, outline-width, outline-color

        // Border Style
        "border-solid", "border-dashed", "border-dotted", "border-double", "border-hidden", "border-none",

        // Outline Width
        "outline-0", "outline-1", "outline-2", "outline-4", "outline-8",

        // Outline Color Lengkap
        "outline-transparent", "outline-current", "outline-black", "outline-white",
        "outline-slate-50", "outline-slate-100", "outline-slate-200", "outline-slate-300", "outline-slate-400", "outline-slate-500", "outline-slate-600", "outline-slate-700", "outline-slate-800", "outline-slate-900",
        "outline-gray-50", "outline-gray-100", "outline-gray-200", "outline-gray-300", "outline-gray-400", "outline-gray-500", "outline-gray-600", "outline-gray-700", "outline-gray-800", "outline-gray-900",
        "outline-zinc-50", "outline-zinc-100", "outline-zinc-200", "outline-zinc-300", "outline-zinc-400", "outline-zinc-500", "outline-zinc-600", "outline-zinc-700", "outline-zinc-800", "outline-zinc-900",
        "outline-neutral-50", "outline-neutral-100", "outline-neutral-200", "outline-neutral-300", "outline-neutral-400", "outline-neutral-500", "outline-neutral-600", "outline-neutral-700", "outline-neutral-800", "outline-neutral-900",
        "outline-stone-50", "outline-stone-100", "outline-stone-200", "outline-stone-300", "outline-stone-400", "outline-stone-500", "outline-stone-600", "outline-stone-700", "outline-stone-800", "outline-stone-900",
        "outline-red-50", "outline-red-100", "outline-red-200", "outline-red-300", "outline-red-400", "outline-red-500", "outline-red-600", "outline-red-700", "outline-red-800", "outline-red-900",
        "outline-orange-50", "outline-orange-100", "outline-orange-200", "outline-orange-300", "outline-orange-400", "outline-orange-500", "outline-orange-600", "outline-orange-700", "outline-orange-800", "outline-orange-900",
        "outline-amber-50", "outline-amber-100", "outline-amber-200", "outline-amber-300", "outline-amber-400", "outline-amber-500", "outline-amber-600", "outline-amber-700", "outline-amber-800", "outline-amber-900",
        "outline-yellow-50", "outline-yellow-100", "outline-yellow-200", "outline-yellow-300", "outline-yellow-400", "outline-yellow-500", "outline-yellow-600", "outline-yellow-700", "outline-yellow-800", "outline-yellow-900",
        "outline-lime-50", "outline-lime-100", "outline-lime-200", "outline-lime-300", "outline-lime-400", "outline-lime-500", "outline-lime-600", "outline-lime-700", "outline-lime-800", "outline-lime-900",
        "outline-green-50", "outline-green-100", "outline-green-200", "outline-green-300", "outline-green-400", "outline-green-500", "outline-green-600", "outline-green-700", "outline-green-800", "outline-green-900",
        "outline-emerald-50", "outline-emerald-100", "outline-emerald-200", "outline-emerald-300", "outline-emerald-400", "outline-emerald-500", "outline-emerald-600", "outline-emerald-700", "outline-emerald-800", "outline-emerald-900",
        "outline-teal-50", "outline-teal-100", "outline-teal-200", "outline-teal-300", "outline-teal-400", "outline-teal-500", "outline-teal-600", "outline-teal-700", "outline-teal-800", "outline-teal-900",
        "outline-cyan-50", "outline-cyan-100", "outline-cyan-200", "outline-cyan-300", "outline-cyan-400", "outline-cyan-500", "outline-cyan-600", "outline-cyan-700", "outline-cyan-800", "outline-cyan-900",
        "outline-sky-50", "outline-sky-100", "outline-sky-200", "outline-sky-300", "outline-sky-400", "outline-sky-500", "outline-sky-600", "outline-sky-700", "outline-sky-800", "outline-sky-900",
        "outline-blue-50", "outline-blue-100", "outline-blue-200", "outline-blue-300", "outline-blue-400", "outline-blue-500", "outline-blue-600", "outline-blue-700", "outline-blue-800", "outline-blue-900",
        "outline-indigo-50", "outline-indigo-100", "outline-indigo-200", "outline-indigo-300", "outline-indigo-400", "outline-indigo-500", "outline-indigo-600", "outline-indigo-700", "outline-indigo-800", "outline-indigo-900",
        "outline-violet-50", "outline-violet-100", "outline-violet-200", "outline-violet-300", "outline-violet-400", "outline-violet-500", "outline-violet-600", "outline-violet-700", "outline-violet-800", "outline-violet-900",
        "outline-purple-50", "outline-purple-100", "outline-purple-200", "outline-purple-300", "outline-purple-400", "outline-purple-500", "outline-purple-600", "outline-purple-700", "outline-purple-800", "outline-purple-900",
        "outline-fuchsia-50", "outline-fuchsia-100", "outline-fuchsia-200", "outline-fuchsia-300", "outline-fuchsia-400", "outline-fuchsia-500", "outline-fuchsia-600", "outline-fuchsia-700", "outline-fuchsia-800", "outline-fuchsia-900",
        "outline-pink-50", "outline-pink-100", "outline-pink-200", "outline-pink-300", "outline-pink-400", "outline-pink-500", "outline-pink-600", "outline-pink-700", "outline-pink-800", "outline-pink-900",
        "outline-rose-50", "outline-rose-100", "outline-rose-200", "outline-rose-300", "outline-rose-400", "outline-rose-500", "outline-rose-600", "outline-rose-700", "outline-rose-800", "outline-rose-900",

        // ---

        // outline-style, outline-offset

        // Outline Style
        "outline-none", "outline", "outline-dashed", "outline-dotted", "outline-double",

        // Outline Offset
        "outline-offset-0", "outline-offset-1", "outline-offset-2", "outline-offset-4", "outline-offset-8",

        // ---

        // box-shadow, opacity, mix-blend-mode, background-blend-mode

        // Box Shadow
        "shadow", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-inner", "shadow-none",

        // Opacity
        "opacity-0", "opacity-5", "opacity-10", "opacity-20", "opacity-25", "opacity-30",
        "opacity-40", "opacity-50", "opacity-60", "opacity-70", "opacity-75", "opacity-80",
        "opacity-90", "opacity-95", "opacity-100",

        // Mix Blend Mode
        "mix-blend-normal", "mix-blend-multiply", "mix-blend-screen", "mix-blend-overlay",
        "mix-blend-darken", "mix-blend-lighten", "mix-blend-color-dodge", "mix-blend-color-burn",
        "mix-blend-hard-light", "mix-blend-soft-light", "mix-blend-difference", "mix-blend-exclusion",
        "mix-blend-hue", "mix-blend-saturation", "mix-blend-color", "mix-blend-luminosity",

        // Background Blend Mode
        "bg-blend-normal", "bg-blend-multiply", "bg-blend-screen", "bg-blend-overlay",
        "bg-blend-darken", "bg-blend-lighten", "bg-blend-color-dodge", "bg-blend-color-burn",
        "bg-blend-hard-light", "bg-blend-soft-light", "bg-blend-difference", "bg-blend-exclusion",
        "bg-blend-hue", "bg-blend-saturation", "bg-blend-color", "bg-blend-luminosity",

        // ---

        // filter, blur, brightness, contrast

        // Filter
        "filter", "filter-none",

        // Blur
        "blur", "blur-none", "blur-sm", "blur-md", "blur-lg", "blur-xl", "blur-2xl", "blur-3xl",

        // Brightness
        "brightness-0", "brightness-50", "brightness-75", "brightness-90",
        "brightness-95", "brightness-100", "brightness-105", "brightness-110",
        "brightness-125", "brightness-150", "brightness-200",

        // Contrast
        "contrast-0", "contrast-50", "contrast-75", "contrast-100",
        "contrast-125", "contrast-150", "contrast-200",

        // ---


        // drop-shadow, grayscale, hue-rotate, invert, saturate, sepia

        // Drop Shadow
        "drop-shadow", "drop-shadow-none", "drop-shadow-sm", "drop-shadow-md",
        "drop-shadow-lg", "drop-shadow-xl", "drop-shadow-2xl",

        // Grayscale
        "grayscale", "grayscale-0",

        // Hue Rotate
        "hue-rotate-0", "hue-rotate-15", "hue-rotate-30", "hue-rotate-60",
        "hue-rotate-90", "hue-rotate-180",

        // Invert
        "invert", "invert-0",

        // Saturate
        "saturate-0", "saturate-50", "saturate-100", "saturate-150", "saturate-200",

        // Sepia
        "sepia", "sepia-0",


        // ---

        // backdrop-filter, blur, brightness, contrast, grayscale

        // Backdrop Filter
        "backdrop-filter", "backdrop-none",

        // Backdrop Blur
        "backdrop-blur", "backdrop-blur-none", "backdrop-blur-sm", "backdrop-blur-md",
        "backdrop-blur-lg", "backdrop-blur-xl", "backdrop-blur-2xl", "backdrop-blur-3xl",

        // Backdrop Brightness
        "backdrop-brightness-0", "backdrop-brightness-50", "backdrop-brightness-75",
        "backdrop-brightness-90", "backdrop-brightness-95", "backdrop-brightness-100",
        "backdrop-brightness-105", "backdrop-brightness-110", "backdrop-brightness-125",
        "backdrop-brightness-150", "backdrop-brightness-200",

        // Backdrop Contrast
        "backdrop-contrast-0", "backdrop-contrast-50", "backdrop-contrast-75",
        "backdrop-contrast-100", "backdrop-contrast-125", "backdrop-contrast-150",
        "backdrop-contrast-200",

        // Backdrop Grayscale
        "backdrop-grayscale", "backdrop-grayscale-0",

        // ---

        // Tables, border-collapse, border-spacing, table-layout, caption-side

        // Tables
        "table-auto", "table-fixed",

        // Border Collapse
        "border-collapse", "border-separate",

        // Border Spacing
        "border-spacing-0", "border-spacing-1", "border-spacing-2",
        "border-spacing-3", "border-spacing-4", "border-spacing-5",
        "border-spacing-6", "border-spacing-8", "border-spacing-10",
        "border-spacing-12", "border-spacing-16", "border-spacing-20",
        "border-spacing-24", "border-spacing-32", "border-spacing-40",
        "border-spacing-48", "border-spacing-56", "border-spacing-64",

        // Caption Side
        "caption-top", "caption-bottom",

        // ---

        // Transitions & Animation, transition-property, transition-behavior, transition-duration

        // Transition Property
        "transition-none", "transition-all", "transition",
        "transition-colors", "transition-opacity", "transition-shadow",
        "transition-transform",

        // Transition Behavior
        "motion-safe:transition", "motion-reduce:transition-none",

        // Transition Duration
        "duration-75", "duration-100", "duration-150", "duration-200",
        "duration-300", "duration-500", "duration-700", "duration-1000",

        // ---

        // transition-timing-function, transition-delay, animation

        // Transition Property
        "transition-none", "transition-all", "transition",
        "transition-colors", "transition-opacity", "transition-shadow",
        "transition-transform",

        // Transition Behavior
        "motion-safe:transition", "motion-reduce:transition-none",

        // Transition Duration
        "duration-75", "duration-100", "duration-150", "duration-200",
        "duration-300", "duration-500", "duration-700", "duration-1000",

        // Transition Timing Function
        "ease-linear", "ease-in", "ease-out", "ease-in-out",

        // Transition Delay
        "delay-75", "delay-100", "delay-150", "delay-200",
        "delay-300", "delay-500", "delay-700", "delay-1000",

        // Animation
        "animate-none", "animate-spin", "animate-ping",
        "animate-pulse", "animate-bounce",

        // ---

        // Transforms, backface-visibility, perspective, perspective-origin, rotate, scale

        // Backface Visibility
        "backface-visible", "backface-hidden",

        // Perspective
        "perspective-0", "perspective-100", "perspective-200",
        "perspective-300", "perspective-400", "perspective-500",
        "perspective-750", "perspective-1000", "perspective-1250",
        "perspective-1500",

        // Perspective Origin
        "perspective-origin-center", "perspective-origin-top",
        "perspective-origin-bottom", "perspective-origin-left",
        "perspective-origin-right", "perspective-origin-top-left",
        "perspective-origin-top-right", "perspective-origin-bottom-left",
        "perspective-origin-bottom-right",

        // Rotate
        "rotate-0", "rotate-1", "rotate-2", "rotate-3", "rotate-6",
        "rotate-12", "rotate-45", "rotate-90", "rotate-180",
        "-rotate-1", "-rotate-2", "-rotate-3", "-rotate-6",
        "-rotate-12", "-rotate-45", "-rotate-90", "-rotate-180",

        // Scale
        "scale-0", "scale-50", "scale-75", "scale-90", "scale-95",
        "scale-100", "scale-105", "scale-110", "scale-125",
        "scale-150", "scale-200",
        "scale-x-0", "scale-x-50", "scale-x-75", "scale-x-90",
        "scale-x-95", "scale-x-100", "scale-x-105", "scale-x-110",
        "scale-x-125", "scale-x-150", "scale-x-200",
        "scale-y-0", "scale-y-50", "scale-y-75", "scale-y-90",
        "scale-y-95", "scale-y-100", "scale-y-105", "scale-y-110",
        "scale-y-125", "scale-y-150", "scale-y-200",

        // ---

        // skew, transform, transform-origin, transform-style, translate
        // Skew
        "skew-0", "skew-1", "skew-2", "skew-3", "skew-6",
        "skew-12", "-skew-1", "-skew-2", "-skew-3", "-skew-6",
        "-skew-12",

        // Transform (Default)
        "transform", "transform-none",

        // Transform Origin
        "origin-center", "origin-top", "origin-top-right",
        "origin-right", "origin-bottom-right", "origin-bottom",
        "origin-bottom-left", "origin-left", "origin-top-left",

        // Transform Style
        "transform-style-flat", "transform-style-preserve-3d",

        // Translate
        "translate-x-0", "translate-x-1", "translate-x-2",
        "translate-x-3", "translate-x-4", "translate-x-5",
        "translate-x-6", "translate-x-8", "translate-x-10",
        "translate-x-12", "translate-x-16", "translate-x-20",
        "translate-x-24", "translate-x-32", "translate-x-40",
        "translate-x-48", "translate-x-56", "translate-x-64",
        "translate-x-72", "translate-x-80", "translate-x-96",
        "-translate-x-1", "-translate-x-2", "-translate-x-3",
        "-translate-x-4", "-translate-x-5", "-translate-x-6",
        "-translate-x-8", "-translate-x-10", "-translate-x-12",
        "-translate-x-16", "-translate-x-20", "-translate-x-24",
        "-translate-x-32", "-translate-x-40", "-translate-x-48",
        "-translate-x-56", "-translate-x-64", "-translate-x-72",
        "-translate-x-80", "-translate-x-96",

        "translate-y-0", "translate-y-1", "translate-y-2",
        "translate-y-3", "translate-y-4", "translate-y-5",
        "translate-y-6", "translate-y-8", "translate-y-10",
        "translate-y-12", "translate-y-16", "translate-y-20",
        "translate-y-24", "translate-y-32", "translate-y-40",
        "translate-y-48", "translate-y-56", "translate-y-64",
        "translate-y-72", "translate-y-80", "translate-y-96",
        "-translate-y-1", "-translate-y-2", "-translate-y-3",
        "-translate-y-4", "-translate-y-5", "-translate-y-6",
        "-translate-y-8", "-translate-y-10", "-translate-y-12",
        "-translate-y-16", "-translate-y-20", "-translate-y-24",
        "-translate-y-32", "-translate-y-40", "-translate-y-48",
        "-translate-y-56", "-translate-y-64", "-translate-y-72",
        "-translate-y-80", "-translate-y-96",

        // ---
        // Interactivity, accent-color, appearance, caret-color

        // Accent Color
        "accent-inherit", "accent-current", "accent-transparent",
        "accent-black", "accent-white", "accent-slate-50", "accent-slate-100",
        "accent-slate-200", "accent-slate-300", "accent-slate-400",
        "accent-slate-500", "accent-slate-600", "accent-slate-700",
        "accent-slate-800", "accent-slate-900", "accent-gray-50",
        "accent-gray-100", "accent-gray-200", "accent-gray-300",
        "accent-gray-400", "accent-gray-500", "accent-gray-600",
        "accent-gray-700", "accent-gray-800", "accent-gray-900",
        "accent-red-50", "accent-red-100", "accent-red-200",
        "accent-red-300", "accent-red-400", "accent-red-500",
        "accent-red-600", "accent-red-700", "accent-red-800",
        "accent-red-900", "accent-yellow-50", "accent-yellow-100",
        "accent-yellow-200", "accent-yellow-300", "accent-yellow-400",
        "accent-yellow-500", "accent-yellow-600", "accent-yellow-700",
        "accent-yellow-800", "accent-yellow-900", "accent-green-50",
        "accent-green-100", "accent-green-200", "accent-green-300",
        "accent-green-400", "accent-green-500", "accent-green-600",
        "accent-green-700", "accent-green-800", "accent-green-900",
        "accent-blue-50", "accent-blue-100", "accent-blue-200",
        "accent-blue-300", "accent-blue-400", "accent-blue-500",
        "accent-blue-600", "accent-blue-700", "accent-blue-800",
        "accent-blue-900", "accent-indigo-50", "accent-indigo-100",
        "accent-indigo-200", "accent-indigo-300", "accent-indigo-400",
        "accent-indigo-500", "accent-indigo-600", "accent-indigo-700",
        "accent-indigo-800", "accent-indigo-900", "accent-purple-50",
        "accent-purple-100", "accent-purple-200", "accent-purple-300",
        "accent-purple-400", "accent-purple-500", "accent-purple-600",
        "accent-purple-700", "accent-purple-800", "accent-purple-900",

        // Appearance
        "appearance-none", "appearance-auto",

        // Caret Color
        "caret-transparent", "caret-current",
        "caret-black", "caret-white", "caret-slate-50", "caret-slate-100",
        "caret-slate-200", "caret-slate-300", "caret-slate-400",
        "caret-slate-500", "caret-slate-600", "caret-slate-700",
        "caret-slate-800", "caret-slate-900", "caret-gray-50",
        "caret-gray-100", "caret-gray-200", "caret-gray-300",
        "caret-gray-400", "caret-gray-500", "caret-gray-600",
        "caret-gray-700", "caret-gray-800", "caret-gray-900",
        "caret-red-50", "caret-red-100", "caret-red-200",
        "caret-red-300", "caret-red-400", "caret-red-500",
        "caret-red-600", "caret-red-700", "caret-red-800",
        "caret-red-900", "caret-yellow-50", "caret-yellow-100",
        "caret-yellow-200", "caret-yellow-300", "caret-yellow-400",
        "caret-yellow-500", "caret-yellow-600", "caret-yellow-700",
        "caret-yellow-800", "caret-yellow-900", "caret-green-50",
        "caret-green-100", "caret-green-200", "caret-green-300",
        "caret-green-400", "caret-green-500", "caret-green-600",
        "caret-green-700", "caret-green-800", "caret-green-900",
        "caret-blue-50", "caret-blue-100", "caret-blue-200",
        "caret-blue-300", "caret-blue-400", "caret-blue-500",
        "caret-blue-600", "caret-blue-700", "caret-blue-800",
        "caret-blue-900", "caret-indigo-50", "caret-indigo-100",
        "caret-indigo-200", "caret-indigo-300", "caret-indigo-400",
        "caret-indigo-500", "caret-indigo-600", "caret-indigo-700",
        "caret-indigo-800", "caret-indigo-900", "caret-purple-50",
        "caret-purple-100", "caret-purple-200", "caret-purple-300",
        "caret-purple-400", "caret-purple-500", "caret-purple-600",
        "caret-purple-700", "caret-purple-800", "caret-purple-900",

        // ---

        // color-scheme, cursor, field-sizing, pointer-events, resize
        // Color Scheme
        "color-scheme-light", "color-scheme-dark", "color-scheme-auto",

        // Cursor
        "cursor-auto", "cursor-default", "cursor-pointer", "cursor-wait",
        "cursor-text", "cursor-move", "cursor-help", "cursor-not-allowed",
        "cursor-none", "cursor-context-menu", "cursor-progress",
        "cursor-cell", "cursor-crosshair", "cursor-vertical-text",
        "cursor-alias", "cursor-copy", "cursor-no-drop", "cursor-grab",
        "cursor-grabbing", "cursor-all-scroll", "cursor-col-resize",
        "cursor-row-resize", "cursor-n-resize", "cursor-e-resize",
        "cursor-s-resize", "cursor-w-resize", "cursor-ne-resize",
        "cursor-nw-resize", "cursor-se-resize", "cursor-sw-resize",
        "cursor-ew-resize", "cursor-ns-resize", "cursor-nesw-resize",
        "cursor-nwse-resize", "cursor-zoom-in", "cursor-zoom-out",

        // Field Sizing
        "size-auto", "size-px", "size-0", "size-0.5", "size-1",
        "size-1.5", "size-2", "size-2.5", "size-3", "size-3.5",
        "size-4", "size-5", "size-6", "size-7", "size-8", "size-9",
        "size-10", "size-11", "size-12", "size-14", "size-16",
        "size-20", "size-24", "size-28", "size-32", "size-36",
        "size-40", "size-44", "size-48", "size-52", "size-56",
        "size-60", "size-64", "size-72", "size-80", "size-96",
        "size-full", "size-screen", "size-min", "size-max", "size-fit",

        // Pointer Events
        "pointer-events-none", "pointer-events-auto",

        // Resize
        "resize-none", "resize-y", "resize-x", "resize",

        // ---

        // scroll-behavior, scroll-margin, scroll-padding, scroll-snap-align, scroll-snap-stop, scroll-snap-type, touch-action, user-select, will-change
        // Scroll Behavior
        "scroll-auto", "scroll-smooth",

        // Scroll Margin
        "scroll-m-0", "scroll-m-1", "scroll-m-2", "scroll-m-3", "scroll-m-4",
        "scroll-m-5", "scroll-m-6", "scroll-m-7", "scroll-m-8", "scroll-m-9",
        "scroll-m-10", "scroll-m-11", "scroll-m-12", "scroll-m-14", "scroll-m-16",
        "scroll-m-20", "scroll-m-24", "scroll-m-28", "scroll-m-32", "scroll-m-36",
        "scroll-m-40", "scroll-m-44", "scroll-m-48", "scroll-m-52", "scroll-m-56",
        "scroll-m-60", "scroll-m-64", "scroll-m-72", "scroll-m-80", "scroll-m-96",
        "scroll-mx-0", "scroll-mx-1", "scroll-mx-2", "scroll-mx-3", "scroll-mx-4",
        "scroll-mx-5", "scroll-mx-6", "scroll-mx-7", "scroll-mx-8", "scroll-mx-9",
        "scroll-mx-10", "scroll-mx-12", "scroll-mx-16", "scroll-mx-20", "scroll-mx-24",
        "scroll-mx-32", "scroll-my-0", "scroll-my-1", "scroll-my-2", "scroll-my-3",
        "scroll-my-4", "scroll-my-5", "scroll-my-6", "scroll-my-7", "scroll-my-8",
        "scroll-my-9", "scroll-my-10", "scroll-my-12", "scroll-my-16", "scroll-my-20",
        "scroll-my-24", "scroll-my-32",

        // Scroll Padding
        "scroll-p-0", "scroll-p-1", "scroll-p-2", "scroll-p-3", "scroll-p-4",
        "scroll-p-5", "scroll-p-6", "scroll-p-7", "scroll-p-8", "scroll-p-9",
        "scroll-p-10", "scroll-p-12", "scroll-p-16", "scroll-p-20", "scroll-p-24",
        "scroll-p-32",

        // Scroll Snap Align
        "snap-start", "snap-end", "snap-center", "snap-align-none",

        // Scroll Snap Stop
        "snap-normal", "snap-always",

        // Scroll Snap Type
        "snap-none", "snap-x", "snap-y", "snap-both",
        "snap-mandatory", "snap-proximity",

        // Touch Action
        "touch-auto", "touch-none", "touch-pan-x", "touch-pan-left",
        "touch-pan-right", "touch-pan-y", "touch-pan-up", "touch-pan-down",
        "touch-pinch-zoom", "touch-manipulation",

        // User Select
        "select-none", "select-text", "select-all", "select-auto",

        // Will Change
        "will-change-auto", "will-change-scroll", "will-change-contents",
        "will-change-transform",

        // ---

        // SVG, fill, stroke, stroke-width
        // Fill
        "fill-none", "fill-inherit", "fill-current",
        "fill-transparent", "fill-black", "fill-white",
        "fill-gray-50", "fill-gray-100", "fill-gray-200",
        "fill-gray-300", "fill-gray-400", "fill-gray-500",
        "fill-gray-600", "fill-gray-700", "fill-gray-800",
        "fill-gray-900", "fill-red-50", "fill-red-100",
        "fill-red-200", "fill-red-300", "fill-red-400",
        "fill-red-500", "fill-red-600", "fill-red-700",
        "fill-red-800", "fill-red-900", "fill-blue-50",
        "fill-blue-100", "fill-blue-200", "fill-blue-300",
        "fill-blue-400", "fill-blue-500", "fill-blue-600",
        "fill-blue-700", "fill-blue-800", "fill-blue-900",
        "fill-green-50", "fill-green-100", "fill-green-200",
        "fill-green-300", "fill-green-400", "fill-green-500",
        "fill-green-600", "fill-green-700", "fill-green-800",
        "fill-green-900", "fill-yellow-50", "fill-yellow-100",
        "fill-yellow-200", "fill-yellow-300", "fill-yellow-400",
        "fill-yellow-500", "fill-yellow-600", "fill-yellow-700",
        "fill-yellow-800", "fill-yellow-900", "fill-purple-50",
        "fill-purple-100", "fill-purple-200", "fill-purple-300",
        "fill-purple-400", "fill-purple-500", "fill-purple-600",
        "fill-purple-700", "fill-purple-800", "fill-purple-900",

        // Stroke
        "stroke-none", "stroke-inherit", "stroke-current",
        "stroke-transparent", "stroke-black", "stroke-white",
        "stroke-gray-50", "stroke-gray-100", "stroke-gray-200",
        "stroke-gray-300", "stroke-gray-400", "stroke-gray-500",
        "stroke-gray-600", "stroke-gray-700", "stroke-gray-800",
        "stroke-gray-900", "stroke-red-50", "stroke-red-100",
        "stroke-red-200", "stroke-red-300", "stroke-red-400",
        "stroke-red-500", "stroke-red-600", "stroke-red-700",
        "stroke-red-800", "stroke-red-900", "stroke-blue-50",
        "stroke-blue-100", "stroke-blue-200", "stroke-blue-300",
        "stroke-blue-400", "stroke-blue-500", "stroke-blue-600",
        "stroke-blue-700", "stroke-blue-800", "stroke-blue-900",
        "stroke-green-50", "stroke-green-100", "stroke-green-200",
        "stroke-green-300", "stroke-green-400", "stroke-green-500",
        "stroke-green-600", "stroke-green-700", "stroke-green-800",
        "stroke-green-900", "stroke-yellow-50", "stroke-yellow-100",
        "stroke-yellow-200", "stroke-yellow-300", "stroke-yellow-400",
        "stroke-yellow-500", "stroke-yellow-600", "stroke-yellow-700",
        "stroke-yellow-800", "stroke-yellow-900", "stroke-purple-50",
        "stroke-purple-100", "stroke-purple-200", "stroke-purple-300",
        "stroke-purple-400", "stroke-purple-500", "stroke-purple-600",
        "stroke-purple-700", "stroke-purple-800", "stroke-purple-900",

        // Stroke Width
        "stroke-0", "stroke-1", "stroke-2",

        // ---

        // Accessibility, forced-color-adjust

        // Forced Color Adjust
        "forced-color-adjust-auto",
        "forced-color-adjust-none",
        
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

// build : npx tailwindcss -i ./tailwind.css -o ./tailwind.min-2.css --minify (sometimes its not include all)
// build : npx tailwindcss -o tailwind-full.css --minify

