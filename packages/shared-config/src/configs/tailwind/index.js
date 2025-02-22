import { colors } from "./colors";

/** @type {import('tailwindcss').Config} */
export const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/shared/styles/input.css",
  ],
  theme: {
    extend: {
      spacing: {
        xs: "0.375rem",
      },
      colors: {
        ...colors,
        fontFamily: {
          pretendard: ["Pretendard", "sans-serif"],
        },
      },
      ".input": {
        borderRadius: "0.375rem",
        "& ::placeholder": {
          fontSize: "14px",
          fontWeight: "normal",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-12-nomal": {
          "font-family": "Pretendard",
          "font-size": "0.75rem",
          "font-style": "normal",
          "font-weight": "400",
          "line-height": "133%",
        },
        ".text-12-semibold": {
          "font-family": "Pretendard",
          "font-size": "0.75rem",
          "font-style": "normal",
          "font-weight": "600",
          "line-height": "133%",
        },
        ".text-14-normal": {
          "font-family": "Pretendard",
          "font-size": "0.875rem",
          "font-style": "normal",
          "font-weight": "400",
          "line-height": "143%",
        },
        ".text-14-semibold": {
          "font-family": "Pretendard",
          "font-size": "0.875rem",
          "font-style": "normal",
          "font-weight": "600",
          "line-height": "143%",
        },
        ".text-14-medium": {
          "font-family": "Pretendard",
          "font-size": "0.875rem",
          "font-style": "normal",
          "font-weight": "500",
          "line-height": "143%",
        },
        ".text-14-bold": {
          "font-family": "Pretendard",
          "font-size": "0.875rem",
          "font-style": "normal",
          "font-weight": "700",
          "line-height": "143%",
        },
        ".text-16-medium": {
          "font-family": "Pretendard",
          "font-size": "1rem",
          "font-style": "normal",
          "font-weight": "500",
          "line-height": "150%",
        },
        ".text-20-semibold": {
          "font-family": "Pretendard",
          "font-size": "1.25rem",
          "font-style": "normal",
          "font-weight": "600",
          "line-height": "140%",
        },
        ".eclipse": {
          "overflow-hidden": "overflow-hidden",
          "whitespace-nowrap": "whitespace-nowrap",
          "text-ellipsis": "text-ellipsis",
          "break-all": "break-all",
        },
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
      });
    },
  ],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
