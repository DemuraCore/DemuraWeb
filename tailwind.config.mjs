/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'p5-red': '#e60012',
        'p5-black': '#111',
        'p5-gray': '#222',
        'p5-white': '#f8f8f8',
      },
      fontFamily: {
        'display': ['"Anton"', 'sans-serif'], // A bold header font
      },
      backgroundSize: {
        "300%": "300% 100%", // Increase the background size to make the transition smoother
      },
      keyframes: {
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" }, // Start from the far left
          "50%": { backgroundPosition: "100% 50%" }, // Move to the far right
          "100%": { backgroundPosition: "150% 0%" }, // Continue moving to the next cycle seamlessly
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "gradient-move": "gradient-move 8s ease infinite", // Adjust timing if needed
      },
    },
  },

  plugins: [],
};
