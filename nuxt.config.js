
export default {
  mode: 'universal',
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool development blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa923f' },
  // loading: { color: '#fa923f', failedColor: 'yellow', height: '4px', duration: 5000 },
  // loading: false,
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#fa923f'
  // },
  /*
  ** Global CSS
  */
  css: [
      '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-a63f2.firebaseio.com',
    // credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // dev: true,
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-a63f2.firebaseio.com',
    fbAPIKey: 'AIzaSyBP97Nk9nNwhcynT5XGLZkc5AP6HYUklhY'
  },
  // generate: {

  // },
  // rootDir: '/my-app/',
  router: {
    // base: '/my-app/',
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname + 'pages/index.vue')
    //   })
    // },
    // linkActiveClass: 'active',
    // middleware: 'log'
  },
  // srcDir: 'client-app/',
  // transition: 'fade'
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
