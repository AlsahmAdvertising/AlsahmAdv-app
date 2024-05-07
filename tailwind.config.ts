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
        custom: "0 35px 35px rgba(0, 0, 0, 0.75)",
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
