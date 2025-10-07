// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
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
      googleMaps: {
        apiKey: "",
      },
    },
  },
  app: {
    baseURL: "/tasty-fusion/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  nitro: {
    preset: "github-pages",
  },
  devServer: {
    port: 3003,
  },
});
