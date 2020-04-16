import Vue from 'vue'
import alert from './alert'
import vuetify from '@/plugins/vuetify'

const AlertConstructor = Vue.extend(alert)

let instance

const instances = []

let seed = 1

const Alert = options => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      type: 'info',
      message: options
    }
  }
  const id = 'alert_' + seed++
  // 创建实例,记住将vuetify也注入
  instance = new AlertConstructor({
    data: options,
    vuetify
  })
  instance.id = id
  instance.$mount()
  document.getElementsByClassName('v-application')[0].appendChild(instance.$el)
  instances.push(instance)
  return instance
}

Alert.close = id => {
}

export default Alert
