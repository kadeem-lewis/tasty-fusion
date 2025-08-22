// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

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
    "@nuxt/content",
    "@nuxt/ui",
  ],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  ui: {
    colorMode: false,
  },
  runtimeConfig: {
    emailjs: {
      privateKey: "",
    },
    public: {
      emailjs: {
        publicKey: "",
        serviceId: "",
        templateId: "",
      },
    },
  },
  devServer: {
    port: 3003,
  },
});
