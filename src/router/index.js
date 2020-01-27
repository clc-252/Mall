// 引入Vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入路由所映射的组件
import Index from '@/views/front/Index.vue'
// 在vue中使用vue-router
Vue.use(VueRouter)

// 创建路由对象
let router = new VueRouter({
  // 配置路由
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index
    }
  ]
})

// 暴露
export default router
