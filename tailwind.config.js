/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: 'rgb(var(--color-bg-dark) / <alpha-value>)',
          white: 'rgb(var(--color-bg-white) / <alpha-value>)',
        },
        marino: {
          primary: 'rgb(var(--color-marino-primario) / <alpha-value>)',
          secondary: 'rgb(var(--color-marino-secundario) / <alpha-value>)',
        },
        celeste: 'rgb(var(--color-celeste) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
