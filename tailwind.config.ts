import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#38bdf8",
                "background-dark": "#0f172a",
                "surface-dark": "#1e293b",
                "silver": "#E5E7EB",
                "silver-dim": "#9CA3AF",
                "void": "#000000",
                "moonlight": "#1f2937",
            },
            fontFamily: {
                "display": ["var(--font-jakarta)", "sans-serif"],
                "serif": ["var(--font-playfair)", "serif"],
                "gallery-display": ["var(--font-montserrat)", "sans-serif"],
                "gallery-sans": ["var(--font-lato)", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'silver-gradient': 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
            },
            animation: {
                marquee: 'marquee 30s linear infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
