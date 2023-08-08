// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/main.css"],
  ssr: true,
  experimental: {
    componentIslands: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    dir: "assets/images",
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  modules: ["@nuxt/image", "nuxt-svgo", "nuxt-icon"],
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
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    "/team": { prerender: true },
    // Product page generated on-demand, revalidates in background
    "/products/**": { swr: 3600 },
    // Blog post generated on-demand once until next deploy
    "/blog/**": { isr: true },
    // Admin dashboard renders only on client-side
    "/admin/**": { ssr: false },
    // Add cors headers on API routes
    "/api/**": { cors: true },
    // Redirects legacy urls
    "/old-page": { redirect: "/new-page" },
  },
});
