/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light grey theme colors
        greyLightest: "#F5F7FA",
        greyLight: "#E8EBF0",
        greyMedium: "#D1D5DB",
        accentBlue: "#6366F1",
        textPrimary: "#1F2937",
        textSecondary: "#6B7280",

        // Backward compatibility mapping
        slateDark: "#F5F7FA",
        slateMedium: "#E8EBF0",
        slateLight: "#FFFFFF",
        cream: "#FFFFFF",
        beige: "#F5F7FA",
        offwhite: "#FAFBFC",
        skin: "#E8EBF0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Geist", "Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}