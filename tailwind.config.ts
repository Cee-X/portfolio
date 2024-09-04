import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        secondary: '#0a192f',
        darkGray: '#112240',
        lightGray: '#8892b0',
      },
    },
  },
  plugins: [],
};
export default config;