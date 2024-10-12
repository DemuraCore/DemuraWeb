/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        glitch: {
          "0%, 100%": {
            clip: "rect(0, 9999px, 0, 0)",
            transform: "translate(0)",
          },
          "10%": {
            clip: "rect(30%, 9999px, 60%, 0)",
            transform: "translate(-5px, -5px)",
          },
          "20%": {
            clip: "rect(10%, 9999px, 80%, 0)",
            transform: "translate(5px, 5px)",
          },
          "30%": {
            clip: "rect(40%, 9999px, 40%, 0)",
            transform: "translate(-5px, 5px)",
          },
          "40%": {
            clip: "rect(20%, 9999px, 80%, 0)",
            transform: "translate(5px, -5px)",
          },
          "50%": {
            clip: "rect(50%, 9999px, 30%, 0)",
            transform: "translate(-5px, 5px)",
          },
          "60%": {
            clip: "rect(60%, 9999px, 40%, 0)",
            transform: "translate(5px, -5px)",
          },
          "70%": {
            clip: "rect(10%, 9999px, 50%, 0)",
            transform: "translate(-5px, 5px)",
          },
          "80%": {
            clip: "rect(20%, 9999px, 60%, 0)",
            transform: "translate(5px, -5px)",
          },
          "90%": {
            clip: "rect(40%, 9999px, 40%, 0)",
            transform: "translate(-5px, 5px)",
          },
        },
      },
      animation: {
        glitch: "glitch 0.5s infinite",
      },
    },
  },
  plugins: [],
};
