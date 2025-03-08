/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],  // Add these paths
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui'),],
};
