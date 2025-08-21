import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"], // default = Poppins
        orbitron: ["var(--font-orbitron)", "sans-serif"], // special cases
      },
      screens: {
        // xs: '320px',
        'max-mm': '375px',
        'max-ml': '425px', 
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: '1440px',
        '2xl': '2560px',
      },
    },
  },
  plugins: [],
};
export default config;
