// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "FTISU",
      meta: [
        {
          name: "og:title",
          content: "FTISU",
        },
        {
          name: "description",
          content: "FTISU Information system lab",
        },

        {
          name: "ogDescription",
          content: "FTISU Information system lab",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: ["~/styles/main.css"],
  ssr: true,
  alias: {
    "@/*": "./*",
  },
  experimental: {
    componentIslands: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  modules: ["nuxt-svgo", "nuxt-icon", "@nuxt/image"],
  svgo: {
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // customize default plugin options
              inlineStyles: {
                onlyMatchedOnce: false,
              },

              // or disable plugins
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/team": { prerender: true },
  },
});
