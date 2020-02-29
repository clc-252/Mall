// 引入Vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入路由所映射的组件
import Index from '@/views/front/Index.vue'
import Login from '@/views/front/Login.vue'
import Register from '@/views/front/Register.vue'
import Home from '@/views/front/Home.vue'
import HomeIndex from '@/views/front/Home-Index.vue'
import HomeOrderCenter from '@/views/front/Home-Order-Center.vue'
import GoodsDetail from '@/views/front/GoodsDetail.vue'
// 在vue中使用vue-router
Vue.use(VueRouter)

// 创建路由对象
let router = new VueRouter({
  // 配置路由
  routes: [
    // 前台首页的路由
    {
      name: 'Index',
      path: '/',
      component: Index,
      meta: {
        title: '品优购-正品低价、品质保障、配送及时、轻松购物！'
      }
    },
    // 前台用户登录页面
    {
      name: 'Login',
      path: '/front/login',
      component: Login,
      meta: {
        title: '品优购-欢迎登录'
      }
    },
    // 前台页面用户注册页面
    {
      name: 'Register',
      path: '/front/register',
      component: Register,
      meta: {
        title: '个人注册'
      }
    },
    // 前台'我的品优购'首页
    {
      // name: 'Home',
      path: '/front/home',
      component: Home,
      meta: {
        title: '我的品优购'
      },
      children: [
        {
          name: 'HomeIndex',
          path: '/',
          component: HomeIndex
        },
        // 订单中心
        {
          name: 'HomeOrderCenter',
          path: 'homeordercenter',
          component: HomeOrderCenter
        }
      ]
    },
    // 商品详情页的路由
    {
      name: 'GoodsDetail',
      path: '/front/goodsDetail',
      component: GoodsDetail,
      meta: {
        title: '品优购-产品详情页'
      }
    }
  ]
})

// 暴露
export default router
