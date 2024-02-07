import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": {
          50: "#F2FDFC",
          100: "#E0FAF9",
          200: "#C2F5F2",
          300: "#9AEEEA",
          400: "#6FE7E1",
          500: "#31DDD3",
          600: "#21C9C1",
          700: "#1DAFA8",
          800: "#19958F",
          900: "#116965",
          950: "#0D4F4C"
        },
        "purple": {
          50: "#EDE0F0",
          100: "#E6D3E9",
          200: "#D4B4DA",
          300: "#C296CA",
          400: "#B177BB",
          500: "#9F58AC",
          600: "#874992",
          700: "#6B3A74",
          800: "#4F2B55",
          900: "#321B36",
          950: "#251428"
        }
      },
      transitionDuration: {
        'DEFAULT': '0.2s',
      },
    },
    fontFamily: {
      sans: ['var(--font-source-sans)', "sans-serif"],
      display: ['var(--font-audiowide)'],
    }
  },
  plugins: [],
};

export default config;
