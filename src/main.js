import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission'
import './utils/filter'
import './components/global.less'
import { Dialog } from '@/components'
import { hasBtnPermission } from './utils/permissions'
import { sysApplication } from './utils/applocation'
// 图表
import ItemWrap from './components/item-wrap/item-wrap.vue'
import Echart from './components/echart/index.vue'
import Reacquire from './components/reacquire/reacquire.vue'
import Messages from './components/message/message'
import Message from './components/message/message.vue'
import dataV from '@jiaminghi/data-view'
// 表单设计器 str
import KFormDesign from './components/k-form-design/packages'
import './components/k-form-design/styles/form-design.less'

Vue.use(KFormDesign)
// 图表组件
Vue.component("Echart", Echart)
Vue.component("ItemWrap", ItemWrap)
Vue.component("Message", Message)
Vue.component("Reacquire", Reacquire)
Vue.prototype.$Message =  Messages
// datav组件
Vue.use(dataV)

// 表单设计器 end
Vue.use(VueAxios)
Vue.use(Dialog)
Vue.prototype.hasPerm = hasBtnPermission
Vue.prototype.applocation = sysApplication
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
