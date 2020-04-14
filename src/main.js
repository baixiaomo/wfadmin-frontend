import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import utils from './utils'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/particles'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import http from './http'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './mock'
import md5 from 'js-md5'
import 'babel-polyfill'
import 'url-search-params-polyfill'

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$md5 = md5
Vue.prototype.$utils = utils

Vue.use(element)

console.log(process.env.NODE_ENV)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
