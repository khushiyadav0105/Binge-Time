import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: 'smooth',
    },
  },
  plugins: [scrollbarHide], // Use imported plugin
};
