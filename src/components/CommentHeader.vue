<template>
  <div class="commentHeader">
    <!-- 快捷导航栏 -->
    <div class="shortcut">
      <div class="shortcut_nav w">
        <span>品优购欢迎您！</span>
        <ul class="nav-r">
          <li>
            <a
              href="http://localhost:8080/#/front/login"
              class="toLogin"
              v-if="!$store.state.user.userInfo.nickName"
            >您好，请登录</a> &nbsp;
            <span
              class="name"
              v-if="$store.state.user.userInfo.nickName"
            >{{$store.state.user.userInfo.nickName}}</span>
            <a
              href="http://localhost:8080/#/front/register"
              class="red"
              target="_blank"
              v-if="!$store.state.user.userInfo.nickName"
            >免费注册</a>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="javascript:void(0);" @click="handleToOrder">我的订单</a>
          </li>
          <li class="spacer"></li>
          <li class="mylist">
            <a href="javascript:void(0);" @click="handleToHome">
              我的品优购
              <i class="el-icon-arrow-down"></i>
            </a>
            <div class="my">
              <div class="myshop clearfix">
                <ul>
                  <li>
                    <a href="#">待处理订单</a>
                  </li>
                  <li>
                    <a href="#">消息</a>
                  </li>
                  <li>
                    <a href="#">返修退换货</a>
                  </li>
                  <li>
                    <a href="#">我的问答</a>
                  </li>
                  <li>
                    <a href="#">降价商品</a>
                  </li>
                  <li>
                    <a href="#">我的关注</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="javascript:void(0);">品优购会员</a>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="javascript:void(0);" class="red">
              企业采购
              <i class="el-icon-arrow-down"></i>
            </a>
          </li>
          <li class="spacer"></li>
          <li class="servicelist">
            <a href="javascript:void(0);">
              客户服务
              <i class="el-icon-arrow-down"></i>
            </a>
            <div class="shortcut_server">
              <div class="customer_service clearfix">
                <p>客户</p>
                <ul>
                  <li>
                    <a href="javascript:void(0);">帮助中心</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">售后服务</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">在线客服</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">意见建议</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">电话客服</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">客服邮箱</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">金融咨询</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">全球售客服</a>
                  </li>
                </ul>
              </div>
              <div class="merchant_service">
                <p>商户</p>
                <ul>
                  <li>
                    <a href="javascript:void(0);">合作招商</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">成长中心</a>
                  </li>
                  <li>
                    <a href="http://localhost:8080/#/merchants/login">商家后台</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">商家帮助</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="javascript:void(0);">
              网站导航
              <i class="el-icon-arrow-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 头部 -->
    <div class="header">
      <div class="w clearfix">
        <!-- logo -->
        <div class="logo" @click="$router.push({name: 'Index'})">
          <a class="logo-bd" title="品优购" href="javascript:void(0);" target="_blank"></a>
        </div>
        <!-- 搜索 -->
        <div class="searchArea">
          <!-- 搜索框 -->
          <div class="search">
            <el-input placeholder="请输入内容" class="input-with-select" v-model="keyword" @input="handleInput">
              <el-button slot="append" icon="el-icon-search" @click="handleClick"></el-button>
            </el-input>
            <!-- 搜索联想 -->
            <div class="search_List" v-if="isShow">
              <ul>
                <li v-for="(item,index) in searchList" :key="index" @click="handleSearchClick(index)">{{item.kw}}</li>
              </ul>
            </div>
          </div>
          <!-- 搜索热门关键词 -->
          <div class="hotwords">
            <el-row type="flex">
              <el-col :span="4">
                <div class="grid-content bg-purple red">品优购首发</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">型格男装</div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">耳机</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">特惠家电</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">每100-50</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">美妆护肤</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">国际商城</div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">手机5折</div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 购物车 -->
        <div class="shopcar">
          <div class="car">
            <i class="el-icon-shopping-cart-2 icon-car"></i>
            <a href="http://localhost:8080/#/front/cart" target="_blank" class="mycar">
              <span>我的购物车</span>
              <i class="shopnum">{{allNum}}</i>
            </a>
          </div>
          <!-- 当购物车为空时的显示内容 -->
          <div class="shopcarlist" v-if="cartList.length===0">
            <i class="cart_empty"></i>
            购物车中还没有商品，赶紧选购吧！
          </div>
          <!-- 当购物车不为空时的显示内容 -->
          <div class="shopcarlist" v-if="cartList.length!==0">
            <!-- 标题 -->
            <strong class="cart_title">最新加入的商品</strong>
            <!-- 列表 -->
            <div class="cart_list">
              <div class="cart_item" v-for="(item,index) in cartList" :key="index" @click="$router.push({ name: 'GoodsDetail',query:{id:item.productId} })">
                <img :src="item.productIcon" alt />
                <div class="goods_title">{{item.title}}</div>
                <div class="goodsInfo">
                  <span class="price">￥{{item.price}}</span>
                  <span class="num">x{{item.count}}</span>
                </div>
              </div>
            </div>
            <!-- 底部信息 -->
            <div class="footer">
              <p>
                共<strong>{{cartList.length}}</strong>件商品
              </p>
              <el-button size='mini' @click="$router.push({ path: '/front/cart'})">去购物车</el-button>
            </div>
          </div>
        </div>
        <!-- 推荐搜索导航 -->
        <div class="navitems">
          <ul class="navitems_group1">
            <li>
              <a href="javascript:void(0);" style="color:#e1251b;font-weight:700;">秒杀</a>
            </li>
            <li>
              <a href="javascript:void(0);" style="color:#e1251b;font-weight:700;">优惠券</a>
            </li>
            <li>
              <a href="javascript:void(0);">品牌闪购</a>
            </li>
            <li>
              <a href="javascript:void(0);">服装城</a>
            </li>
            <li>
              <a href="javascript:void(0);">美妆馆</a>
            </li>
            <li>
              <a href="javascript:void(0);">品优超市</a>
            </li>
            <li>
              <a href="javascript:void(0);">品优家电</a>
            </li>
            <li>
              <a href="javascript:void(0);">品优国际</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      keyword: '',
      cartList: [],
      allNum: 0,
      isShow: false,
      searchList: []
    }
  },
  methods: {
    handleClick () {
      this.$router.push({
        path: '/front/search',
        query: { keyword: this.keyword }
      })
      // // console.log(this.keyword)
      // this.$emit('getKeyWord', this.keyword)
    },
    handleToHome () {
      let token = this.$store.state.user.userInfo.sessionToken
      if (token) {
        this.$router.push({ path: '/front/home' })
      } else {
        this.$confirm('您还没有登录，请先登录！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$router.push({ name: 'Login' })
          })
          .catch(() => {})
      }
    },
    handleToOrder () {
      let token = this.$store.state.user.userInfo.sessionToken
      if (token) {
        this.$router.push({ path: '/front/home/homeordercenter', query: { tabCurrent: 0 } })
      } else {
        this.$confirm('您还没有登录，请先登录！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$router.push({ name: 'Login' })
          })
          .catch(() => {})
      }
    },
    handleInput () {
      this.isShow = true
      let appSecret = '95cea2a805c4886c54d80d8a2c15d523'
      let data = {
        appKey: '5ea5acab9ff48',
        version: 'v1.0.2',
        keyWords: this.keyword,
        type: 3
      }
      axios({
        url: '/api/goods/search-suggestion',
        method: 'get',
        params: {
          ...data,
          sign: this.makeSign(data, appSecret)
        }
      }).then(res => {
        this.searchList = res.data.data
      })
      if (this.keyword === '') {
        this.isShow = false
      }
    },
    // 生成签名
    makeSign (data, appSecret) {
      let str = ''
      let index = 0
      let sortPor = []

      for (let key in data) {
        sortPor.push(`${key}=${data[key]}`)
      }

      // 排序
      sortPor.sort()

      // 转url
      for (let key in sortPor) {
        str = `${str}${index === 0 ? '' : '&'}${sortPor[key]}`
        index++
      }

      // md5加密
      let ret = this.$md5(`${str}&key=${appSecret}`).toUpperCase()

      return ret
    },
    handleSearchClick (index) {
      this.keyword = this.searchList[index].kw
      this.$router.push({
        path: '/front/search',
        query: { keyword: this.keyword }
      })
    }
  },
  mounted () {
    this.cartList = JSON.parse(localStorage.getItem('cartList'))
    this.cartList.map(v => {
      this.allNum += v.count
    })
  }
}
</script>

<style lang='less' scoped>
.shortcut {
  background-color: #e3e4e5;
  border-bottom: 1px solid #ddd;
  //   快捷导航部分
  .shortcut_nav {
    height: 30px;
    line-height: 30px;
    .nav-r {
      float: right;
      li {
        float: left;
        a.toLogin,
        span.name {
          display: inline-block;
          margin-right: 5px;
        }
      }
      li.spacer {
        overflow: hidden;
        margin: 11px 8px 0;
        width: 1px;
        height: 10px;
        background-color: #ccc;
      }
      // 我的品优购
      li.mylist {
        padding: 0 5px;
        position: relative;
        width: 88px;
        height: 30px;
        &:hover {
          background-color: #fff;
          border: 1px solid #ccc;
          border-bottom-color: #fff;
          > .my {
            display: block;
          }
        }
      }
      .my {
        display: none;
        position: absolute;
        top: 28px;
        right: -1px;
        z-index: 15;
        padding: 10px 0 10px 15px;
        width: 100px;
        border: 1px solid #ccc;
        background-color: #fff;
        li {
          width: 126px;
          a {
            color: #999;
          }
        }
      }
      // 客服服务部分
      li.servicelist {
        width: 76px;
        padding: 0 5px;
        &:hover {
          position: relative;
          background-color: #fff;
          border: 1px solid #ccc;
          border-bottom: none;
          > .shortcut_server {
            display: block;
          }
        }
      }
      .shortcut_server {
        display: none;
        position: absolute;
        top: 30px;
        right: 0px;
        z-index: 12;
        width: 165px;
        padding: 10px 0;
        background-color: #fff;
        border: 1px solid #ccc;
        p {
          padding-left: 20px;
          font-weight: 700;
          color: #666;
        }
        li {
          padding-left: 20px;
          a {
            color: #999;
            &:hover {
              color: #c81623;
            }
          }
        }
        .customer_service {
          border-bottom: 1px dashed #eee;
        }
      }
    }
  }
}
// 头部部分
.header {
  height: 150px;
  border-bottom: 1px solid #ddd;
  position: relative;
  background-color: #fff;
  // logo
  .logo {
    float: left;
    .logo-bd {
      display: block;
      background: url(../assets/front/Logo.png) no-repeat;
      width: 175px;
      height: 55px;
      margin: 25px auto;
    }
  }
  //   搜索部分
  .searchArea {
    float: left;
    margin: 30px 0 0 80px;
    // 搜索框
    .search {
      position: relative;
      width: 546px;
      border: 2px solid #e2231a;
      /deep/.el-input__inner {
        height: 32px;
        border-radius: 0px;
        border: none;
      }
      /deep/.el-input-group__append {
        background-color: #e1251b;
        border-radius: 0px;
        border: 0;
        .el-button {
          outline: none;
        }
        .el-icon-search {
          color: #fff;
          font-weight: 700;
          font-size: 15px;
        }
      }
      // 搜索联想
      .search_List{
        position: absolute;
        z-index: 6;
        width: 485px;
        height: 300px;
        margin-top: 3px;
        overflow: auto;
        border: 1px solid #ccc;
        background-color: #fff;
        li {
          padding: 10px;
          font-size: 14px;
          line-height: 14px;
          cursor: pointer;
          &:hover{
            background-color: #f5f5f5;
          }
        }
      }
    }
    // 热搜关键词
    .hotwords {
      line-height: 25px;
      color: #999;
      /deep/.el-col {
        cursor: pointer;
        &:hover {
          color: #f00;
        }
      }
    }
  }
  // 购物车
  .shopcar {
    float: right;
    margin-top: 32px;
    // hover的时候 改变car的边框颜色
    &:hover .car {
      border-color: #c81623;
      border-bottom-color: #fff;
    }
    &:hover .shopcar {
      border-color: #c81623;
    }
    .car {
      position: relative;
      z-index: 11;
      width: 130px;
      height: 34px;
      text-align: center;
      line-height: 34px;
      border: 1px solid #eee;
      &:hover {
        border-bottom-color: #fff;
      }
      .icon-car {
        color: #e1251b;
        font-size: 16px;
        font-weight: 700;
        margin-right: 13px;
      }
      .mycar {
        span {
          color: #e1251b;
        }
        .shopnum {
          position: absolute;
          top: 0;
          left: 30px;
          display: inline-block;
          height: 14px;
          width: 18px;
          //   min-width: 12px;
          background-color: #e1251b;
          border-radius: 7px;
          color: #fff;
          line-height: 12px;
          text-align: center;
        }
      }
    }
    .car:hover + .shopcarlist {
      display: block;
    }
    .shopcarlist {
      position: relative;
      z-index: 10;
      width: 310px;
      margin: -1px 0 0 -180px;
      border: 1px solid #c81623;
      padding: 10px 0 0;
      display: none;
      background: #fff;
      text-align: center;
      color: #999;
      // 购物车位空时的样式
      .cart_empty {
        display: inline-block;
        width: 56px;
        height: 50px;
        background-image: url(//img11.360buyimg.com/uba/jfs/t3571/299/131233948/1117/a1196554/58004d6dN2927f0f7.png);
        vertical-align: middle;
      }
      &:hover {
        display: block;
      }
      // 购物车不为空时的样式
      .cart_title {
        display: inline-block;
        margin-left: -200px;
        padding-bottom: 10px;
        color: #333;
      }
      .cart_list {
        .cart_item {
          display: flex;
          padding: 5px 0;
          margin: 0 10px;
          justify-content: space-around;
          color: #333;
          border-bottom: 1px dashed #ddd;
          cursor: pointer;
          img {
            width: 60px;
            height: 60px;
          }
          .goods_title {
            width: 120px;
            height: 50px;
            margin-right: 20px;
            line-height: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .goodsInfo{
            color: #333;
          }
        }
      }
      .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        background-color: #f5f5f5;
        color: #333;
        .el-button {
          background-color: #e4393c;
          color: #fff;
          padding: 7px 10px;
          outline: none;
        }
      }
    }
  }
  //
  .navitems {
    position: absolute;
    top: 90px;
    left: 350px;
    height: 40px;
    padding-top: 15px;
    line-height: 40px;
    .navitems_group1 li {
      float: left;
      padding: 0 20px;
      a {
        font-size: 15px;
        color: #666;
        &:hover {
          color: #e1251b;
        }
      }
    }
  }
}
.red {
  color: #f00;
}
/*清除浮动*/
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}

.clearfix {
  *zoom: 1;
}
</style>
