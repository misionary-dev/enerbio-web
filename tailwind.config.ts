import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        enerbio: {
          "verde-oscuro": "#2D5016",
          "verde-acento": "#7CB342",
          "verde-claro": "#A8D5A8",
          "azul-gris": "#385A66",
          "gris-texto": "#333333",
          "gris-claro": "#F8F8F8",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;