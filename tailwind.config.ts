import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      light: {
        background: {
          100: "hsl(0, 0%, 98%)"
        },
        elements: {
          primary: "hsl(0, 0%, 100%)"
        },
        base: {
          primary: 'hsl(209, 23%, 22%)',
        },
        text: {
          100: "hsl(0, 0%, 52%)"
        }
      },
      dark: {
        elements: {
          primary: 'hsl(209, 23%, 22%)',
        },
        background: {
          100: "hsl(207, 26%, 17%)"
        },
        base: {
          primary: 'hsl(209, 23%, 22%)',
        },
        text: {
          100: "hsl(0, 0%, 100%)"
        }
      },
      
    },
  },
  plugins: [],
};
export default config;
