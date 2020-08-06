import Vue from 'vue'
import App from './App.vue'
// 引入VueSuperSlide实现无缝滚动的轮播图
import VueSuperSlide from 'vue-superslide'

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

// 全局引入jquery
import jquery from 'jquery'

// 全局使用v-distpicker地区选择插件
import VDistpicker from 'v-distpicker'

// MD5加密
import md5 from 'js-md5'

// 使用vuex
import store from './store/index.js'

// vue中生成验证码的插件 — identify
import SIdentify from './components/Identify'

// 时间格式化插件
import moment from 'moment'

// echarts
import echarts from 'echarts'
Vue.prototype.$moment = moment
Vue.prototype.$echarts = echarts

Vue.prototype.$md5 = md5
Vue.component('v-distpicker', VDistpicker)
window.jquery = window.$ = jquery
Vue.use(SIdentify)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueSuperSlide)

router.beforeEach((to, from, next) => {
  // 如果路由发生变化就修改页面的title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
