import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Project Pages deployment: https://charbel12.github.io/resume
  site: "https://charbel12.github.io",
  base: "/resume",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});

