import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8652FF",
        "primary-faded": "#BB9DFF",
        "primary-black": "#44475B",
        "primary-grey": "#7C7E8C",
        "primary-green": "#00B386",
        "grey-light": "#EAEAEA",
        "grey-500": "#606060",
        "grey-400": "#979797",
        secondary: "#FF7777",
      },
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
