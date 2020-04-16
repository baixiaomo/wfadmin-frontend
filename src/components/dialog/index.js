import Dialog from './dialog'
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'

let instance
const instances = []
let seed = 1

const DialogConstructor = Vue.extend(Dialog)

// 构造一个方法，生成dialog

const dialog = (dialogType, options) => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  options['dialogType'] = dialogType
  const id = 'dialog_' + seed++
  instance = new DialogConstructor({
    data: options,
    vuetify
  })
  instance.id = id
  instance.$mount()
  document.getElementsByClassName('v-application')[0].appendChild(instance.$el)
  instances.push(instance)
  return instance
}

export default {
  alert: options => {
    dialog('alert', options)
  },
  confirm: options => {
    dialog('confirm', options)
  }
}

