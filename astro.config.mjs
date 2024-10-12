// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://demura.vahry.my.id",
  integrations: [tailwind()],
  server: {
    port: 3000,
    host: true,
  },
});
