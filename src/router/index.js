// 引入Vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入路由所映射的组件
/* -------------------------- 前台页面 ------------------------- */
// 前台首页
import Index from '@/views/front/Index.vue'
// 前台登陆页面
import Login from '@/views/front/Login.vue'
// 前台注册页面
import Register from '@/views/front/Register.vue'
// 前台个人中心页面
import Home from '@/views/front/Home.vue'
// 前台个人中心首页（嵌套）
import HomeIndex from '@/views/front/Home-Index.vue'
// 前台订单中心页（嵌套）
import HomeOrderCenter from '@/views/front/Home-Order-Center.vue'
// 前台用户个人信息页
import HomeUser from '@/views/front/User.vue'
// 前台我的关注页面（嵌套）
import HomeAttention from '@/views/front/Home-Attention.vue'
// 前台退款管理页面（嵌套）
import HomeRefund from '@/views/front/Home-Refund.vue'
// 前台商品详情页
import GoodsDetail from '@/views/front/GoodsDetail.vue'
import GoodsDetailOther from '@/views/front/GoodsDetailOther.vue'
// 前台搜索页面
import Search from '@/views/front/Search.vue'
// 购物车页面
import Cart from '@/views/front/Cart.vue'
// 添加到购物车页面
import AddToCart from '@/views/front/AddToCart.vue'
// 提交订单页面
import SubmitOrder from '@/views/front/Order.vue'
// 结算页面
import Pay from '@/views/front/Pay.vue'

/* -------------------------- 商家管理 ------------------------- */
// 商家管理后台登陆页面
import MerchantsLogin from '@/views/merchants/Login.vue'
// 商家管理后台首页
import MerchantsIndex from '@/views/merchants/Index.vue'
// 商家管理后台用户个人中心页
import User from '@/views/merchants/User.vue'
// 商家管理后台店铺信息页
import Seller from '@/views/merchants/Seller.vue'
// 商家管理后台评论列表页
import Comment from '@/views/merchants/Comment.vue'
// 商家管理后台商品列表页
import GoodsList from '@/views/merchants/GoodsList.vue'
// 商家管理后台添加商品页面
import AddGoods from '@/views/merchants/AddGoods.vue'
// 商家管理后台订单列表页面
import Order from '@/views/merchants/OrderList.vue'
// 商家管理后台退换货/售后服务页面
import Service from '@/views/merchants/Service.vue'
// 商家后台管理系统子首页
import ShopIndex from '@/views/merchants/ShopIndex.vue'

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
    // 前台'我的品优购'
    {
      // name: 'Home',
      path: '/front/home',
      component: Home,
      children: [
        // 前台'我的品优购'首页
        {
          name: 'HomeIndex',
          path: '/',
          component: HomeIndex,
          meta: {
            title: '我的品优购'
          }
        },
        // 订单中心
        {
          name: 'HomeOrderCenter',
          path: 'homeordercenter',
          component: HomeOrderCenter
        },
        // 我的关注页
        {
          name: 'HomeAttention',
          path: 'HomeAttention',
          component: HomeAttention
        },
        // 个人信息的路由
        {
          name: 'HomeUser',
          path: 'homeUser',
          component: HomeUser
        },
        // 退款管理
        {
          name: 'HomeRefund',
          path: 'homeRefund',
          component: HomeRefund
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
    },
    {
      name: 'GoodsDetailOther',
      path: '/front/goodsDetailOther',
      component: GoodsDetailOther,
      meta: {
        title: '品优购-产品详情页'
      }
    },
    // 搜索页面的路由
    {
      name: 'Search',
      path: '/front/search',
      component: Search
    },
    // 购物车页面的路由
    {
      name: 'Cart',
      path: '/front/cart',
      component: Cart,
      meta: {
        title: '我的购物车'
      }
    },
    // 添加到购物车页面的路由
    {
      name: 'AddToCart',
      path: '/front/addToCart',
      component: AddToCart,
      meta: {
        title: '商品已成功加入购物车'
      }
    },
    // 提交订单页面的路由
    {
      name: 'SubmitOrder',
      path: '/front/submitOrder',
      component: SubmitOrder,
      meta: {
        title: '订单结算页'
      }
    },
    // 支付页面的路由
    {
      name: 'Pay',
      path: '/front/pay',
      component: Pay,
      meta: {
        title: '支付页面'
      }
    },

    /* --------------------------------- 一条华丽的分割线 - 后台管理系统的路由开始 ---------------------------------------- */

    // 商家登陆页面的路由
    {
      name: 'MerchantsLogin',
      path: '/merchants/login',
      component: MerchantsLogin,
      meta: {
        title: '品优购：商家后台-欢迎登录'
      }
    },
    // 商家后台管理首页的路由
    {
      // name: 'MerchantsIndex',
      path: '/merchants/',
      component: MerchantsIndex,
      meta: {
        title: '品优购：商家后台'
      },
      children: [
        // 子首页的路由
        {
          name: 'ShopIndex',
          path: '/',
          component: ShopIndex
        },
        // 商品列表页的路由
        {
          name: 'GoodsList',
          path: 'goodsList',
          component: GoodsList
        },
        // 新增商品的路由
        {
          name: 'AddGoods',
          path: 'addGoods',
          component: AddGoods
        },
        // 订单列表的路由
        {
          name: 'Order',
          path: 'order',
          component: Order
        },
        // 售后服务的路由
        {
          name: 'Service',
          path: 'service',
          component: Service
        },
        // 评论列表页面的路由
        {
          name: 'Comment',
          path: 'comment',
          component: Comment
        },
        // 修改店铺信息
        {
          name: 'Seller',
          path: 'seller',
          component: Seller
        },
        // 用户信息的路由
        {
          name: 'User',
          path: 'user',
          component: User
        }
      ]
    }
  ]
})

// 暴露
export default router
