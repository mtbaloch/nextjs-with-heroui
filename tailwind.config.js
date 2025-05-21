import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui(
{
  themes:{
    light:{
      colors:{
        background:"#fff",
        foreground:"#555",
        primary:{
          DEFAULT: "hsl(35, 77%, 62%)",
          foreground:"red"
        },
        focus:"hsl(35, 77%, 62%)",
        secondary:{
          DEFAULT: "hsl(5, 85%, 63%)"
        },
        focus:"hsl(5, 85%, 63%)"
      }
    }    
  }
}

  )],
};
