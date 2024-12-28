// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@unocss/nuxt",
    '@vueuse/nuxt'
  ],
  // middleware: [
  //   { name: 'route-global', path: '~/middleware/router.global.ts', override: true }
  // ],
  elementPlus: { /** Options */ },
  piniaPluginPersistedstate: {
    storage: "localStorage",
  },
  css: ["element-plus/theme-chalk/dark/css-vars.css"]
});
