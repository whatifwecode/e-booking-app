// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/tailwind.css'],
  plugins: ['~/plugins/pinia.ts', '~/mixins/translationMixin.ts'],
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 700], // You can add the font weights you need
    },
    display: 'swap',
  },
})
