import type { Config } from "tailwindcss";

import { shadcnPlugin } from "./plugin";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  plugins: [require("tailwindcss-animate"), shadcnPlugin],
} satisfies Config;
