import Message from './message'
import Dialog from './dialog'
import Vue from 'vue'

Vue.prototype.$message = Message
Vue.prototype.$alert = Dialog.alert
Vue.prototype.$confirm = Dialog.confirm
