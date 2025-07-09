// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Lara from "@primeuix/themes/lara";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@primevue/nuxt-module",
  ],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  primevue: {
    options: {
      theme: {
        preset: Lara,
      },
    },
    components: {
      exclude: ["Form", "FormField"],
    },
  },
  devServer: {
    port: 3003,
  },
});
