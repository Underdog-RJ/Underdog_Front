module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
    ,
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8222',
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  plugins: [
    {
      src: '~/plugins/utils'
    },
    { src: "@/plugins/video", ssr: false },
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
      src: '~plugins/tocbot.min.js',
      ssr: false,
    },
    {
      src: '@plugins/editor',
      ssr: false,
    },
    {
      src: '@plugins/highlight',
      ssr: false,
    },

    {
      src: '~plugins/ucentNavPlugin',
      ssr: false,
    },
  ],

  css: [
    'swiper/dist/css/swiper.css',
    'element-ui/lib/theme-chalk/index.css',
    './static/tinymce4.7.5/skins/lightgray/skin.min.css',
    './static/tinymce4.7.5/skins/lightgray/content.min.css',
    './static/tinymce4.7.5/plugins/codesample/css/prism.css',
    './static/tocbot/tocbot.css',

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
      compact: false,
      plugins: [
        [
          'prismjs',
          {
            theme: 'coy',
            css: true,
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
              'show-language',
              'copy-to-clipboard'
            ],

          }
        ]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
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
  vendor: ['element-ui'],  //防止element-ui被打包多次

}

