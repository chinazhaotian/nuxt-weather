module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'weather',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'assets/main.css',
    'assets/reset.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  proxy: [
    [
      '/api',
      {
        target:'http://api.map.baidu.com/telematics/v3/weather',
        changeOrigin: true,
        pathRewrite: { '^/api' : '/' }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ]
}
