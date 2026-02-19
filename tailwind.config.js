export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-light": "var(--surface-light)",

        "brand-primary": "var(--brand-primary)",
        "brand-secondary": "var(--brand-secondary)",
        "brand-accent": "var(--brand-accent)",

        "text-primary": "var(--text-primary)",
        "text-inverse": "var(--text-inverse)",
      },
    },
  },
  plugins: [],
};
