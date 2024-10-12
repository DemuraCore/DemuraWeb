/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundSize: {
        "300%": "300% 100%", // Increase the background size to make the transition smoother
      },
      keyframes: {
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" }, // Start from the far left
          "50%": { backgroundPosition: "100% 50%" }, // Move to the far right
          "100%": { backgroundPosition: "150% 0%" }, // Continue moving to the next cycle seamlessly
        },
      },
      animation: {
        "gradient-move": "gradient-move 6s ease infinite", // Adjust timing if needed
      },
    },
  },

  plugins: [],
};
