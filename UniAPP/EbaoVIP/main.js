import Vue from 'vue'
import App from './App'
import http from './utils/https.js'//引入ajax

import status from './pages/tabBar/status/status.vue'

Vue.config.productionTip = false
Vue.prototype.Ebao = http//全局使用
// 全局注册组件(状态栏)
Vue.component('page-status',status)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
