import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./helper/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary_inside: " inset 0 80px 80px rgba(15, 187, 255, 0.15)",
        primary_around:
          " inset 0 0 50px rgba(15, 187, 255, 0.2), 0 0px 30px 0px rgba(15, 187, 255, 0.3)",
        primary: "0 20px 40px 0px rgba(15, 187, 255, 0.3)",
        primary_center: "0 0px 30px 0px rgba(15, 187, 255, 0.3)",
      },
      dropShadow: {
        custom_black: "0 35px 35px rgba(0, 0, 0, 0.75)",
        custom_black_center: "0 0 3px rgba(0, 0, 0, 1)",
        primary: "0 0 3px rgba(15, 187, 255, 0.6)",
        custom: "0 0 1px rgba(0, 0, 0, 0.5)",
        white: "0.95px 1px 2px rgba(f, f, f, 1)",
      },
      colors: {
        primary: "#0fbbff",
        secondary: "#020f16",
        accent: "#041a24",
      },
      aspectRatio: {
        mobile: "9 / 16",
      },
      keyframes: {
        slide1: {
          "0%": {
            left: "-100%",
          },
          "50%": {
            left: "100%",
          },
          "100%": {
            left: "100%",
          },
        },
        slide2: {
          "0%": {
            top: "-100%",
          },
          "50%": {
            top: "100%",
          },
          "100%": {
            top: "100%",
          },
        },
        slide3: {
          "0%": {
            right: "-100%",
          },
          "50%": {
            right: "100%",
          },
          "100%": {
            right: "100%",
          },
        },
        slide4: {
          "0%": {
            bottom: "-100%",
          },
          "50%": {
            bottom: "100%",
          },
          "100%": {
            bottom: "100%",
          },
        },
      },
      animation: {
        slider1: "slide1 8s linear infinite",
        slider2: "slide2 8s 2s linear infinite",
        slider3: "slide3 8s 4s linear infinite",
        slider4: "slide4 8s 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
