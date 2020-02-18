export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/directives.js'
  ],
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
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    [
          'nuxt-fontawesome', {
            imports: [
             {
               set: '@fortawesome/free-solid-svg-icons',
               icons: ['fas']
             },
             {
               set: '@fortawesome/free-regular-svg-icons',
               icons: ['far']
             },
             {
               set:'@fortawesome/free-brands-svg-icons',
               icons: ['fab']
             }
           ]
          }
    ],
    [
          '@nuxtjs/google-analytics',
          {
            id: 'UA-158718667-1' || ''
          }
        ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
