module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      // 这里可以配置多个代理映射
      '/wfadmin-backend': { //
        target: 'http://localhost:9901/wfadmin-backend',
        ws: true,
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/wfadmin-backend': ''
        }
      }
    }
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
