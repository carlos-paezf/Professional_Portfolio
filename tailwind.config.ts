import type { Config } from "tailwindcss";

export default {
    content: [ "./index.html", "./src/**/*.{ts,tsx}" ],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                surface: "var(--surface)",
                surface2: "var(--surface2)",
                text: "var(--text)",
                muted: "var(--muted)",
                accent: "var(--accent)",
            },
            borderColor: {
                soft: "rgba(255,255,255,0.06)",
            },
            borderRadius: {
                panel: "28px",
                card: "22px",
            },
            boxShadow: {
                panel: "0 30px 80px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.03) inset",
                soft: "0 14px 40px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.03) inset",
                lift: "0 18px 55px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.04) inset",
            },
            fontFamily: {
                sans: [ "Inter", "ui-sans-serif", "system-ui" ],
            },
        },
    },
    plugins: [],
} satisfies Config;
