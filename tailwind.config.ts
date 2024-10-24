import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(slider|popover).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: "#ff6130",
        customBlue:"#2870ED",
        customDarkGreen:"#028661",
        customGreen:"#0cb43f",
        customPurple:"#721c7a",
        customPink :"#eb4c79",
        customGray: "rgba(228, 234, 240, 0.5)",
        customOrangeHover: "rgba(255, 173, 145, 0.2)"
      },
    },
  },
  plugins: [nextui()],
};
export default config;
