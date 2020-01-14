import meta from './meta.json'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: meta.name || 'Van Nguyen',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'target', content: 'all' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      {
        'http-equiv': 'cleartype',
        content: 'on'
      },
      {
        hid: 'description',
        name: 'description',
        content: meta.description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/carbon.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
    // '@nuxtjs/pwa',
    // 'nuxt-webfontloader',
    // '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader']
      })
    }
  },
  webfontloader: {
    custom: {
      families: ['Montserrat:n3,n4,n5,n6', 'Playfair Display:n4,n7'],
      urls: [
        'https://fonts.googleapis.com/icon?family=Montserrat:300,400,500,600|Playfair+Display:400,700&display=swap'
      ]
    }
  }
}
