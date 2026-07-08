/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial"
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New"
        ]
      },
      colors: {
        ink: {
          1: "hsl(0 0% 98%)",
          2: "hsl(0 0% 92%)",
          3: "hsl(0 0% 80%)"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--border)), 0 30px 90px -40px rgba(34, 211, 238, 0.35)"
      }
    }
  },
  plugins: []
};

