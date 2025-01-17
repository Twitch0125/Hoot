import colors from 'vuetify/es5/util/colors'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Hoot',
    title: 'Hoot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ssr: process.env.STATIC !== 'true',
  target: process.env.STATIC === 'true' ? 'static' : 'server',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/VueEasymde.client.js'],
  publicRuntimeConfig: {
    lotide:
      process.env.STATIC !== 'true' && process.env.PROXY === 'true'
        ? '/api'
        : process.env.LOTIDE,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: process.env.PROXY === 'true',
    baseURL: process.env.PROXY !== 'true' ? process.env.LOTIDE : undefined,
    browserBaseURL:
      process.env.PROXY !== 'true' ? process.env.LOTIDE : undefined,
  },
  proxy:
    process.env.PROXY === 'true'
      ? {
          '/api/': {
            target: process.env.LOTIDE,
            pathRewrite: { '^/api/': '' },
          },
        }
      : false,

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: `${
              process.env.STATIC !== 'true' && process.env.PROXY === 'true'
                ? '/api'
                : process.env.LOTIDE
            }/logins`,
            method: 'post',
          },
          logout: {
            url: `${
              process.env.STATIC !== 'true' && process.env.PROXY === 'true'
                ? '/api'
                : process.env.LOTIDE
            }/logins/~current`,
            method: 'delete',
          },
          user: {
            url: `${
              process.env.STATIC !== 'true' && process.env.PROXY === 'true'
                ? '/api'
                : process.env.LOTIDE
            }/logins/~current`,
            method: 'get',
          },
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.yellow.darken3, // '#DDBD37', // gold
          secondary: colors.grey.darken4, // '#373c3f', // black/grey
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
        dark: {
          primary: '#F2A01D',
          secondary: '#5EC39F',
          accent: '#BE5A29',
          error: '#FF5252',
          success: '#1DF26B',
        },
      },
    },
  },
  generate: {
    fallback: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  eslint: {},
}
