module.exports = {
  server:{
    port:80
  },
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    {
      src: '~plugins/ElementUI',
      ssr: true,
    },
    {
      src: '~plugins/tinymce',
      ssr: false,
    },
    {
      src: '~plugins/live2d',
      ssr: false,
    },
  ],

  css: [
    'swiper/dist/css/swiper.css',
    'element-ui/lib/theme-chalk/index.css',
    './static/tinymce4.7.5/skins/lightgray/skin.min.css',
    './static/tinymce4.7.5/skins/lightgray/content.min.css',
    './static/tinymce4.7.5/plugins/codesample/css/prism.css',
      
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'UnderdogEdu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    
    babel: {
      plugins: [
        [
          'prismjs',
          {
              languages: [
                  'html',
                  'css',
                  'javascript',
                  'php',
                  'dart',
                  'bash',
                  'nginx',
                  'sql',
                  'c',
                  'cpp',
                  'python',
                  'go',
                  'java'
              ],
              plugins: [
                  'line-numbers',
                  'show-language',
                  'copy-to-clipboard'
              ],
              theme: 'coy',
              css: true
          }
      ]
      ]
  },
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
    }
  },
  vendor:['element-ui'] ,  //防止element-ui被打包多次
 
}

