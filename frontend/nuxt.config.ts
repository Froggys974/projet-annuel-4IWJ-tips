import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ],

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    name: "AideFlash",
    url: "https://aideflash.fr",
    description: "AideFlash : La plateforme communautaire pour partager et découvrir des astuces et conseils pratiques sur divers sujets.",
  },

  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        types: ["node"],
      },
    },
  },

  sitemap: {
    strictNuxtContentPaths: true,
    urls: [
      "/",
      "/about",
      "/contact",
      "/map"
    ],
    sources: ["/api/sitemap-urls"],
  },

  robots: {
    disallow: process.env.NUXT_PUBLIC_SITE_ENV === "production" ? ["/admin", "/profile"] : ["/"],
    sitemap: "https://aideflash.fr/sitemap.xml",
    groups: [
      {
        userAgent: ["*"],
        allow: ["/"],
        disallow: ["/admin", "/api", "/_nuxt"],
      },
      {
        userAgent: ["GPTBot"],
        disallow: ["/"],
      },
    ],
  },
});