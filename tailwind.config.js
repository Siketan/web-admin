/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#0E5706",
        "green-secondary": "#6FA31D",
        "green-footer": "#6EB940",
        "green-sidebar-hover": "#A2FF94",
        "orange-primary": "#F4A21C",
        "grey-primary": "#AEAEAE",
        "white-primary": "#E3EAE2",
      },
    },
  },
  plugins: [],
};
