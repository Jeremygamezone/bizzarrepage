import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import icon from "astro-icon";

export default defineConfig({
  trailingSlash: 'always',
  site: 'https://jeremygamezone.github.io/',
  base: '/bizzarrepage/',
  integrations: [tailwind(), react(), vue(), icon()]
});