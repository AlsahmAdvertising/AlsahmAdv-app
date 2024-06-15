import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        custom_black: "0 35px 35px rgba(0, 0, 0, 0.75)",
        custom_black_center: "0 0 10px rgba(0, 0, 0, 0.75)",
        custom_seaBlue: "0 0 15px rgba(18, 115, 105, 0.75)",
        custom: "0.95px 1px 2px rgba(0, 0, 0, 1)",
        custom2: "1px 3px 2px rgba(0, 0, 0, 1.5)",
        catPage: "1spx 5px 2px rgba(0, 0, 0, 1)",
      },
      colors: {
        myDarkBlue: "#10403B",
        secondary: "#8AA6A3",
        myGray: "#BFBFBF",
        mySeaBlue: "#127369",
        myLightblue: "#2BE0C2",
      },
    },
  },
  plugins: [],
};
export default config;
