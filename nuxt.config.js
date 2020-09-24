require('dotenv').config()
const robots = require('./robots')

process.env.DEBUG = 'nuxt:*' // display nuxt.js logs

export default {

  /*
  ** Headers of the page
  */
  head: {
    title: 'localhost',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'localhost' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  /*
  ** Set the loading bar color
  * https://nuxtjs.org/api/configuration-loading
  */
  loading: { color: '#0095EC' },
  /*
   * Router
   * https://nuxtjs.org/api/configuration-router
   * You can use this to add routes programmatically. Note nuxt-tide adds its own routes which may conflict.
   */
  router: {
  },
  /*
  ** Modules
  * https://nuxtjs.org/guide/modules
  */
  modules: [
    // https://www.npmjs.com/package/@dpc-sdp/ripple-nuxt-tide
    '@dpc-sdp/ripple-nuxt-tide',
    ['@nuxtjs/robots', robots]
  ],
  /*
  ** Build
  * https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: { ignoreOrder: true },

    extend (config, { isDev, isClient }) {
      const webpack = require('webpack')
      const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
      config.plugins.push(new LodashModuleReplacementPlugin({
        'caching': true,
        'collections': true,
        'paths': true,
        'shorthands': true
      }))
      // Load moment 'en-au' locale only for performance.
      // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
      // You need to change it if your site is not in Australia.
      config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-au/))
    },

    // Currently lodash is mainly brought by Elastic search JS lib.
    // Below lodash optimization can be reviewed after we migrate to new ES JS client.
    babel: {
      plugins: [
        'lodash'
      ]
    }
  },
  css: [
    '@/assets/dcs-theme/css/base.css',
    '@/assets/dcs-theme/css/card-nz.css',
    '@/assets/dcs-theme/css/covid-header.css',
    '@/assets/dcs-theme/css/external-links.css',
    '@/assets/dcs-theme/css/feature-box.css',
    '@/assets/dcs-theme/css/fonts.css',
    '@/assets/dcs-theme/css/global-header.css',
    '@/assets/dcs-theme/css/heading.css',
    '@/assets/dcs-theme/css/icon.css',
    '@/assets/dcs-theme/css/icon-button.css',
    '@/assets/dcs-theme/css/layout.css',
    '@/assets/dcs-theme/css/newsletter.css',
    '@/assets/dcs-theme/css/notification.css',
    '@/assets/dcs-theme/css/nsw-design-system.css',
    '@/assets/dcs-theme/css/search-bar.css',
    '@/assets/dcs-theme/css/thumbs.css',
    '@/assets/dcs-theme/css/translate.css',
    '@/assets/_custom.scss'
  ],
  tide: {
    baseUrl: process.env.CONTENT_API_SERVER,
    auth: {
      username: process.env.CONTENT_API_AUTH_USER,
      password: process.env.CONTENT_API_AUTH_PASS
    },
    site: process.env.CONTENT_SITE_ID,
    // Tide submodules, 1 for enable, 0 for disable. See https://www.npmjs.com/package/@dpc-sdp/ripple-nuxt-tide for available options
    modules: {
      page: 1,
      landingPage: 1,
      event: 1,
      news: 1,
      profile: 1,
      media: 1,
      webform: 1,
      search: 0,
      alert: 0,
      site: 1
    },
    gtm: {
      // Set Google Tag Manager ID here
      id: process.env.GTM_ID
    },
    search: {
      service: process.env.SEARCH_SERVICE,
      index: process.env.SEARCH_INDEX,
      url: 'https://' + process.env.SEARCH_HASH + '.' + process.env.SEARCH_URL,
      log: process.env.SEARCH_LOG,
      auth: {
        username: process.env.SEARCH_AUTH_USERNAME,
        password: process.env.SEARCH_AUTH_PASSWORD
      },
      loadOnDemand: 1
    }
  }
}
