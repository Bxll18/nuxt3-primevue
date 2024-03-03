// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: 'http://api.qiegang.com'
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-primevue',
  ],
  primevue: {
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  css: ['primeicons/primeicons.css','primevue/resources/themes/aura-light-lime/theme.css','~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
})
