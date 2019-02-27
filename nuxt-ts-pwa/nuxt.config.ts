export default {
  plugins: ['~/plugins/hello'],
  modules: [
    '@nuxtjs/pwa',
    'nuxt-basic-auth-module'
  ],
  manifest: {
    name: 'nuxt-ts + pwa sample',
    short_name: 'pwa.nuxt.ts',
    starts_url: '/'
  },
  basic: {
    name: 'ringoh72',
    pass: 'password',
    enabled: process.env.BASIC_AUTH_ENABLED === 'true'
  }
}
