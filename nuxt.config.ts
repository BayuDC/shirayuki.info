// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode', '@nuxtjs/google-fonts', '@unlazy/nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  colorMode: {
    preference: 'dark',
  },
  googleFonts: {
    families: {
      Lexend: [400, 500, 600, 700],
    },
    display: 'swap',
  },
});
