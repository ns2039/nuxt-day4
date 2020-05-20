
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '株式会社キカガク|　公式ホームページ' ,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      { rel: 'stylesheet', type: 'text/css', href: 'css/style.css' }, 
      { rel: 'stylesheet', type: 'text/css', href: 'css/lib/swiper.css' }, 
    ],
    script: [
      { src: 'js/lib/jquery-3.4.1.js' }, 
      { src: 'js/lib/countTo.js'  }, 
      { src: 'js/lib/inview.js' }, 
      { src: 'js/lib/jquery-3.4.1.js' }, 
      { src: 'js/lib/ofi.js' }, 
      { src: 'js/lib/pf.intrinsic.js' }, 
      { src: 'js/lib/picturefill.js' }, 
      { src: 'js/front/swiper.js' },
      { src: 'js/common.js' }, 
      { src: 'js/loading.js' }, 
      { src: 'js/front.js' },
      { src: 'js/member.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css:[
    '~static/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     
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
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    generate: {
      dir: 'docs'
    },
  }
}
