import Vue from 'vue'
import message from './message'
import vuetify from '@/plugins/vuetify'

const MessageConstructor = Vue.extend(message)

let instance

const instances = []

let seed = 1

const Message = options => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      type: 'info',
      message: options
    }
  }
  const id = 'message_' + seed++
  // 创建实例,记住将vuetify也注入
  instance = new MessageConstructor({
    data: options,
    vuetify
  })
  instance.id = id
  instance.$mount()
  document.getElementsByClassName('v-application')[0].appendChild(instance.$el)
  instances.push(instance)
  return instance
}

export default Message
