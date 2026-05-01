import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-coffee": "#38220f",
      "light-coffee": "#ece0d1",
      mocha: "#5a3823",
      "dark-roast": "#613b19",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["coffee"],
  },
};
