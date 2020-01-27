import Vue from 'vue'
import App from './App.vue'

// 引入全局样式文件
import '@/styles/reset.css'

// 引入路由文件
import router from '@/router/index.js'

// 引入使用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
