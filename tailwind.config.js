export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "brand-primary": "var(--brand-primary)",
        "brand-secondary": "var(--brand-secondary)",
        "brand-accent": "var(--brand-accent)",
        text: "var(--text)",
      },
    },
  },
  plugins: [],
};
