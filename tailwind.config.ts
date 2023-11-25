import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Primary Color
      primary: "#F2870D",
      "primary-hover": "#E8740C",

      // Secondary Colors
      "accent-green": "#4CB924",
      "accent-green-hover": "#3D991E",
      "accent-red": "#e74c3c",
      "accent-orange": "#f39c12",

      // Neutral Colors
      gray: "#24292E",
      "gray-light": "#F4F4F4",
      "gray-medium": "#D3D3D3",
      "gray-dark": "#333333",
      "border-color": "#bdc3c7",

      // Action Colors
      "button-color": "#3498db",
      "button-hover": "#2980b9",

      // Error/Alert Colors
      white: "#FFFFFF",
      black: "#000000",
      success: "#2ecc71",
      error: "#e74c3c",
      transparent: "transparent",

      // other colors
      "speaker1-bg": "#D9F3FF",
      "speaker1-text": "#00ADD3",
      "speaker2-bg": "#FFEBD7",
      "speaker2-text": "#F4522E",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
