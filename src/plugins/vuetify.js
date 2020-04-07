import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/sass/overrides.sass'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'font-awesome/css/font-awesome.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3'
}

export default new Vuetify({
  icons: {
    // 图标库
    // material-design-icons, fontawesome4, fontawesome5
    iconfont: 'fa' || 'mdi' || 'fa4'
  },
  theme: {
    themes: {
      dark: theme,
      light: theme
    }
  }
})
