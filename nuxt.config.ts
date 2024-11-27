export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/i18n'],
  css: ['~/assets/css/tailwind.css', '@fortawesome/fontawesome-free/css/all.min.css'],
  plugins: ['~/plugins/pinia.ts', '~/plugins/vue-tailwind-datepicker.ts'],
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 700],
    },
    display: 'swap',
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'et', name: 'Estonian', iso: 'et-EE', file: 'et.json' },
      { code: 'ru', name: 'Russian', iso: 'ru-RU', file: 'ru.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true, // or use 'localStorage'
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    }
  }
});
