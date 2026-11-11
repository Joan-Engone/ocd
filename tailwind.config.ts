import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#ffb787", "on-tertiary": "#ffffff", "on-background": "#1b1c1c",
        "error-container": "#ffdad6", "surface-bright": "#fbf9f9", "on-primary-container": "#522500",
        "secondary-fixed-dim": "#ffb690", "on-error": "#ffffff", "surface-container": "#efeded",
        "on-secondary": "#ffffff", "on-primary-fixed-variant": "#723600", "on-surface-variant": "#574235",
        "on-tertiary-fixed-variant": "#474746", "surface-container-lowest": "#ffffff", secondary: "#9e4300",
        "on-tertiary-container": "#323131", "on-error-container": "#93000a", primary: "#964900",
        "surface-container-highest": "#e3e2e2", "on-surface": "#1b1c1c", "outline-variant": "#dec1af",
        "inverse-on-surface": "#f2f0f0", error: "#ba1a1a", "surface-container-low": "#f5f3f3",
        "inverse-primary": "#ffb787", "on-tertiary-fixed": "#1c1b1b", "primary-fixed": "#ffdcc7",
        "tertiary-container": "#9b9999", "tertiary-fixed": "#e5e2e1", "secondary-container": "#fe761a",
        "on-secondary-container": "#5c2400", "primary-container": "#f07800",
        "on-secondary-fixed-variant": "#783100", "surface-dim": "#dbdad9", background: "#fbf9f9",
        "inverse-surface": "#303031", "surface-variant": "#e3e2e2", "on-primary-fixed": "#311300",
        outline: "#8b7263", "tertiary-fixed-dim": "#c8c6c5", "surface-tint": "#964900",
        "secondary-fixed": "#ffdbcb", surface: "#fbf9f9", "on-secondary-fixed": "#341100",
        tertiary: "#5f5e5e", "on-primary": "#ffffff", "surface-container-high": "#e9e8e7",
      },
      borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
      fontFamily: {
        "headline-md": ["var(--font-geist)"], "headline-xl": ["var(--font-geist)"],
        "headline-lg": ["var(--font-geist)"], "headline-xl-mobile": ["var(--font-geist)"],
        "body-sm": ["var(--font-geist)"], "body-md": ["var(--font-geist)"], "body-lg": ["var(--font-geist)"],
        "label-md": ["var(--font-mono)"], "label-sm": ["var(--font-mono)"],
      },
      fontSize: {
        "headline-md": ["18px", { lineHeight: "26px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "headline-xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.03em", fontWeight: "600" }],
        "headline-lg": ["24px", { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-xl-mobile": ["28px", { lineHeight: "34px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-sm": ["12px", { lineHeight: "18px", letterSpacing: "0em", fontWeight: "400" }],
        "body-md": ["13px", { lineHeight: "20px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-lg": ["15px", { lineHeight: "24px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.04em", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
export default config;