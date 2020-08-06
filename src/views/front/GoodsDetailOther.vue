<template>
  <div class="goodsDetail">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <!-- 商品详情页主体部分开始 -->
    <div class="detail_main">
      <!-- 面包屑导航部分 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="w">
        <!-- 商品详情部分 -->
        <div class="product-intro clearfix">
          <!-- 商品图片展示预览部分 -->
          <div class="preview-wrap">
            <!-- 大图预览部分 -->
            <div class="preview-img">
              <!-- scale：放大倍数   scroll：放大时可滚动页面(滚轮) -->
              <pic-zoom :url="imgurl" :scale="2" :scroll="true"></pic-zoom>
            </div>
            <!-- 小图预览列表部分 -->
            <div class="preview-list">
              <!-- 左右按钮 -->
              <a href="javascript:;" class="arrow-prev" @click="handlePrev">
                <i class="sprite-arrow-prev"></i>
              </a>
              <a href="javascript:;" class="arrow-next" @click="handleNext">
                <i class="sprite-arrow-next"></i>
              </a>
              <ul class="clearfix preview">
                <li
                  v-for="(item,index) in previewList"
                  :key="index"
                  @mouseover="changeImgUrl(index)"
                >
                  <img :src="item" alt :class="{imgActive:currentBorder===index}" />
                </li>
              </ul>
            </div>
            <!-- 添加到收藏 -->
            <div class="follow" @click="handleFollow">
              <i class="el-icon-star-on"></i>
              <span>收藏</span>
            </div>
          </div>
          <!-- 项目信息包装部分 -->
          <div class="itemInfo-wrap">
            <!-- 标题 -->
            <div class="sku-name">{{goodsDetailOther.title}}</div>
            <div class="news">
              <a
                href="https://pro.jd.com/mall/active/3vhrJRWUDvx84MMSPJ2gnMuggew3/index.html"
                target="_blank"
              >品质好物钜惠享不停！GO！</a>
            </div>
            <!-- 价格部分 -->
            <div class="summary-price-wrap">
              <!-- 价格 -->
              <div class="price clearfix">
                <div class="price-title dt fl">优 购 价</div>
                <div class="price-content fl">
                  <i>
                    ￥
                    <span>{{goodsDetailOther.originalPrice}}</span>
                  </i>
                  <em>降价通知</em>
                </div>
                <div class="comment fr">
                  累计评价
                  <p>{{goodsDetail.commentNum}}</p>
                </div>
                <span class="remark"></span>
              </div>
              <!-- 促销 -->
              <div class="promotion clearfix">
                <div class="promotion-title dt fl" style="letter-spacing:24px;">促销</div>
                <div class="promotion-content fl">
                  <em class="hl_red_bg">包邮</em>
                  <em class="hl_red">该商品购买1件即可享受免邮优惠</em>
                </div>
              </div>
            </div>
            <!-- 其他业务 -->
            <div class="other">
              <!-- 配送 -->
              <div class="dispatching">
                <span class="othet_title">配送</span>
                <!-- 使用v-distpicker地区选择器插件 -->
                <v-distpicker @selected="handleSelected" :province="select.province.value" :city="select.city.value" :area="select.area.value"></v-distpicker>
              </div>
              <!-- 运费 -->
              <div class="freight">
                <span class="freight_title">运费</span>
                <!-- <span class="freight_text">{{goodsDetailOther.yunfeixian}}</span> -->
                <span class="freight_text">免运费</span>
              </div>
              <!-- 当商品为手机时的选择 -->
              <!-- <div class="choose">
                选择颜色
                <dl>
                  <dt>
                    <div class="fl choose_title">
                      <i>颜色</i>
                    </div>
                  </dt>
                  <dd>
                    <ul class="clearfix">
                      <li
                        v-for="(item,index) in ['白色','绿色','紫色','黑色','红色','蓝色','橙色']"
                        :key="index"
                        class="color_item"
                        @click="handleColor(index)"
                      >
                        <a href="javascript:;" :class="{selected:currentColor===index}">
                          <img src="../../assets/front/piczoom_big1.jpg" alt />
                          <span class="color_text">{{item}}</span>
                          <i class="choose_icon" v-if="currentColor===index"></i>
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
                选择版本
                <div class="edition">
                  <div class="edition_title fl">版本</div>
                  <ul class="clearfix">
                    <li
                      v-for="(item,index) in ['全网通64G','全网通128G','全网通256G']"
                      :key="index"
                      class="edition_item"
                      @click="handleEdition(index)"
                    >
                      <a href="javascript:;" :class="{selected:currentEdition===index}">
                        <span class="edition_text">{{item}}</span>
                        <i class="choose_icon" v-if="currentEdition===index"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> -->
              <!-- 衣服的选择 -->
              <div class="choose">
                <!-- 选择颜色 -->
                <dl>
                  <dt>
                    <div class="fl choose_title">
                      <i>颜色</i>
                    </div>
                  </dt>
                  <dd>
                    <ul class="clearfix">
                      <li
                        v-for="(item,index) in ['图片色']"
                        :key="index"
                        class="color_item"
                        @click="handleColor(item,index)"
                      >
                        <a href="javascript:;" :class="{selected:currentColor===index}">
                          <img :src="previewList[0]" alt />
                          <span class="color_text">{{item}}</span>
                          <i class="choose_icon" v-if="currentColor===index"></i>
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <!-- 选择尺码 -->
                <div class="edition">
                  <div class="edition_title fl">尺码</div>
                  <ul class="clearfix">
                    <li
                      v-for="(item,index) in ['150/80A/S','160/84A/M','165/88A/L','170/92A/XL']"
                      :key="index"
                      class="edition_item"
                      @click="handleEdition(item,index)"
                    >
                      <a href="javascript:;" :class="{selected:currentEdition===index}">
                        <span class="edition_text">{{item}}</span>
                        <i class="choose_icon" v-if="currentEdition===index"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 数量 -->
              <div class="number clearfix">
                <div class="number_title fl">数量</div>
                <div class="number_add fl">
                  <input type="text" v-model="goodsNum" @blur="handleBlur" />
                  <a href="javascript:void(0)" class="add" @click="handleAdd">+</a>
                  <a
                    href="javascript:void(0)"
                    class="reduce"
                    @click="handleReduce"
                    :class="{notReduce:notAllawed}"
                  >-</a>
                </div>
              </div>
            </div>
            <!-- 加入购物车部分 -->
            <div class="add-car">
              <!-- 加入购物车的按钮 -->
              <a href="javascript:void(0);" class="addshopcar" @click="handleAddToCart">加入购物车</a>
              <!-- 立即购买的按钮 -->
              <a href="javascript:void(0);" class="buy_now" @click="handleSubmit">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品详细信息 -->
    <div class="goods_info w clearfix">
      <!-- 左边推荐栏 -->
      <div class="recom_menus fl">
        <div class="tab">
          <ul class="clearfix">
            <li
              v-for="(item,index) in ['热销好货','热门关注']"
              :key="index"
              class="tab_item fl"
              :class="{tabActive:currentMenuTab===index}"
              @click="handleMenuTab(index)"
            >{{item}}</li>
          </ul>
        </div>
        <!-- 推荐列表 -->
        <!-- 热销推荐列表 -->
        <div class="sell_hot">
          <ul>
            <li class="sell_hot_item" v-for="(item,index) in hotList" :key="index">
              <a href="javascript:void(0);" @click="$router.push({name: 'GoodsDetail',query:{id:item.id}})">
                <img :src="item.coverIcon" alt />
                <p class="sellGoods_title">{{item.title}}</p>
              </a>
              <p class="clearfix">
                <span class="sell_num fl">热销{{item.currentPrice}}件</span>
                <span class="price fr">￥{{item.price/100}}</span>
              </p>
              <i class="rank">{{index+1}}</i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右边商品的详细信息 -->
      <div class="info_right fl">
        <!-- tab栏表头 -->
        <div class="tab info_r_tab clearfix">
          <ul>
            <li
              v-for="(item,index) in ['商品介绍','规格与包装','售后保障','商品评价']"
              :key="index"
              class="tab_item fl"
              :class="{tabActive:currentInfoTab===index}"
              @click="handleInfoTab(index)"
            >{{item}}</li>
          </ul>
          <!-- 加入购物车按钮 -->
          <a href="javascript:void(0);" class="btn_addcar fr" @click="handleAddToCart">加入购物车</a>
        </div>
        <!-- 内容 -->
        <!-- 商品介绍的内容 -->
        <div class="GoodsIntroduction" v-if="currentInfoTab===0">
          <ul>
            <li v-for="(item,index) in goodsDetailImg" :key="index">
              <img :src="item" alt="" style="width:100%">
            </li>
          </ul>
        </div>
        <!-- 规格与包装 -->
        <Specifications v-if="currentInfoTab===1" />
        <!-- 售后保障 -->
        <AfterSaleProtection v-if="currentInfoTab===2" />
        <!-- 商品评价 -->
        <Comment v-if="currentInfoTab===3" />
      </div>
    </div>
    <!-- 底部 -->
    <CommentFooter></CommentFooter>
  </div>
</template>

<script>
// 引入公共部分
import CommentHeader from '@/components/CommentHeader.vue'
import CommentFooter from '@/components/CommentFooter.vue'
// 规格和包装的组件
import Specifications from '@/components/front/Specifications'
// 售后保障的组件
import AfterSaleProtection from '@/components/front/AfterSaleProtection'
// 商品评价组件
import Comment from '@/components/front/Comment'
// 使用放大镜插件
import PicZoom from 'vue-piczoom'

// 引入获取商品详情的方法
import { getHotGoods, followGoods } from '@/apis/goods.js'
import axios from 'axios'
export default {
  data () {
    return {
      imgurl: '',
      // 小图列表图片的数据
      previewList: [],
      // 小图鼠标移入的样式
      currentBorder: 0,
      // 加入购物车中的商品的数量
      goodsNum: 1,
      // 当前选择的颜色
      currentColor: 0,
      // 当前选择的版本
      currentEdition: 0,
      // 减少按钮当前的状态
      notAllawed: true,
      // 商品详细信息展示部分当前的tab栏
      currentInfoTab: 0,
      // 左侧推荐tab栏
      currentMenuTab: 0,
      // 商品详情数据
      goodsDetail: {
        freight: {
          templateName: ''
        }
      },
      // 配送地址
      select: {
        province: {
          code: '',
          value: ''
        },
        city: {
          code: '',
          value: ''
        },
        area: {
          code: '',
          value: ''
        }
      },
      // 热门商品数据
      hotList: [],
      color: '图片色',
      size: '150/80A/S',
      // 本地购物车数据
      cartList: [],
      goodsDetailOther: [],
      goodsDetailImg: []
    }
  },
  // 注册
  components: {
    CommentHeader,
    CommentFooter,
    PicZoom,
    Specifications,
    AfterSaleProtection,
    Comment
  },
  async mounted () {
    scrollTo(0, 0)

    // 获取商品id
    let id = this.$route.query.id
    // 页面一加载就调用获取商品信息的方法
    // this.getGoodsInfoById(id)

    let appSecret = '95cea2a805c4886c54d80d8a2c15d523'
    let data = {
      appKey: '5ea5acab9ff48',
      version: 'v1.2.2',
      id
    }
    axios({
      url: '/api/goods/get-goods-details',
      method: 'get',
      params: {
        ...data,
        sign: this.makeSign(data, appSecret)
      }
    }).then(res => {
      console.log(res)
      this.goodsDetailOther = res.data.data
      this.imgurl = this.goodsDetailOther.mainPic
      this.previewList = this.goodsDetailOther.imgs.split(',')
      this.goodsDetailImg = this.goodsDetailOther.detailPics.split(',')
    })

    // 如果本地中存储有配送地址
    if (JSON.parse(localStorage.getItem('address'))) {
      // 将本地数据中的配送地址取出,并存到select中
      this.select = JSON.parse(localStorage.getItem('address'))
    }

    // 获取热门商品
    let hotRes = await getHotGoods()
    this.hotList = hotRes.data.results
  },
  methods: {
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
      // let ret = this.$md5.update(`${str}&key=${appSecret}`).digest('hex')
      let ret = this.$md5(`${str}&key=${appSecret}`).toUpperCase()
      return ret
    },
    // 处理小图展示的位置
    handlePrev () {
      document.querySelector('.preview').classList.remove('move')
    },
    handleNext () {
      document.querySelector('.preview').classList.add('move')
    },
    // 鼠标移入修改图片路径
    changeImgUrl (index) {
      // console.log(index)
      this.imgurl = this.previewList[index]
      this.currentBorder = index
    },
    // 处理文本框事件的问题
    handleBlur () {
      if (!this.goodsNum) {
        this.goodsNum = 1
      } else if (this.goodsNum < 1) {
        this.goodsNum = 1
      }
    },
    // 选择配送地区完成后触发
    handleSelected (data) {
      console.log(data)
      // 将配送地址存到本地
      localStorage.setItem('address', JSON.stringify(data))
    },
    // 选择颜色时触发
    handleColor (item, index) {
      this.currentColor = index
      this.color = item
    },
    // 选择版本时触发
    handleEdition (item, index) {
      this.currentEdition = index
      this.size = item
    },
    // 增加商品数量
    handleAdd () {
      this.goodsNum++
      this.notAllawed = false
    },
    // 减少商品的数量
    handleReduce () {
      if (this.goodsNum === 1) {
        this.notAllawed = true
        this.goodsNum = 1
        this.$message.warning('该宝贝数量已经不能再减少了哦~')
      } else {
        this.goodsNum--
        this.notAllawed = false
      }
    },
    // 切换商品详情的tab栏时触发
    handleInfoTab (index) {
      this.currentInfoTab = index
      scrollTo(0, 730)
    },
    // 切换左侧推荐的tab栏时触发
    handleMenuTab (index) {
      this.currentMenuTab = index
    },
    // 点击添加购物车按钮触发
    handleAddToCart () {
      let obj = {
        title: this.goodsDetailOther.title,
        price: this.goodsDetailOther.originalPrice,
        count: this.goodsNum,
        productIcon: this.imgurl,
        productId: Number(this.$route.query.id),
        color: this.color,
        size: this.size,
        // 用来判断该商品是否被勾选的属性
        isChecked: true
      }
      this.$router.push({ name: 'AddToCart', query: obj })
      // 判断本地数据中有没有已经加入的商品
      if (!JSON.parse(localStorage.getItem('cartList'))) {
        // 如果没有，就直接添加
        // 将数据存到数据
        this.cartList.unshift(obj)
        // 数组去重
        let newCartList = this.unquireObjectInArray(this.cartList)

        // 存到本地
        localStorage.setItem('cartList', JSON.stringify(newCartList))
      } else {
        this.cartList = JSON.parse(localStorage.getItem('cartList'))
        // 将数据存到数据
        this.cartList.unshift(obj)
        // 数组去重
        let newCartList = this.unquireObjectInArray(this.cartList)

        // 存到本地
        localStorage.setItem('cartList', JSON.stringify(newCartList))
      }
    },
    // 数组去重的方法
    unquireObjectInArray (array) {
      if (!(array instanceof Array)) {
        return -1
      }
      var newArr = []
      var duplicates = [] // 记录已比较过的重复项索引
      for (var i = 0; i < array.length; i++) {
        // indexOf：根据元素查找索引，有则返回，无则返回-1
        if (i && duplicates.indexOf(i) > -1) {
          // 如果已经存在该商品，则将该商品的数量+1
          newArr.forEach(v => {
            if (v.size === array[i].size) {
              v.count += 1
            }
          })
          continue
        }
        for (var j = i + 1; j < array.length; j++) {
          if (_compareObj(array[i], array[j])) {
            duplicates.push(j)
          }
        }
        newArr.push(array[i])
      }
      return newArr

      function _compareObj (a, b) {
        var keysA = Object.keys(a)
        var keysB = Object.keys(b)
        if (keysA.length !== keysB.length) {
          return false
        }
        var isSame = true
        keysA.forEach(function (v) {
          if (b[v] !== a[v]) {
            isSame = false
          }
        })
        return isSame
      }
    },
    // 立即购买
    handleSubmit () {
      // 判断用户是否登陆
      let token = this.$store.state.user.userInfo.sessionToken
      if (token) {
        this.$router.push({
          name: 'SubmitOrder',
          params: {
            title: this.goodsDetailOther.title,
            price: this.goodsDetailOther.originalPrice,
            count: this.goodsNum,
            productIcon: this.imgurl,
            productId: Number(this.$route.query.id),
            color: this.color,
            size: this.size
          } })
        let data = []
        data.push(this.$route.params)
        localStorage.setItem('orderInfo', JSON.stringify(data))
      } else {
        this.$confirm('您还没有登录，请先登录！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({ name: 'Login' })
        }).catch(() => {})
      }
    },
    // 添加到收藏
    async handleFollow () {
      // 获取id和token值
      let id = this.$store.state.user.userInfo.id
      let token = this.$store.state.user.userInfo.sessionToken
      // 获取需要的数据
      let data = {
        favorId: this.$route.query.id, // 商品id
        favorType: 1
      }
      let res = await followGoods(id, token, data)
      console.log(res)
      if (res.status === 200) {
        // 提示用户添加成功
        this.$message({
          message: '已成功添加至收藏',
          type: 'success'
        })
      }
    }
  },
  watch: {
    $route (to, from) {
      scrollTo(0, 0)
      console.log(to)
      this.getGoodsInfoById(to.query.id)
    }
  }
}
</script>

<style lang='less' scoped>
.goodsDetail {
  background-color: #fff !important;
}
// 商品图片价格等信息的展示信息
.detail_main {
  // 面包屑导航
  .el-breadcrumb {
    background-color: #f4f4f4;
    padding: 13px 170px 9px;
  }
  // 商品详情
  .product-intro {
    padding-top: 10px;
    color: #999;
    // 图片预览部分的样式
    .preview-wrap {
      float: left;
      margin-right: 20px;
      // 大图预览的样式
      .preview-img {
        width: 400px;
        height: 400px;
        border: 1px solid #eee;
      }
      // 小图列表预览的样式
      .preview-list {
        position: relative;
        width: 400px;
        margin-top: 20px;
        margin-bottom: 5px;
        a {
          display: block;
          position: absolute;
          top: 50%;
          margin-top: -16px;
          width: 22px;
          height: 32px;
          cursor: pointer;
          i {
            display: inline-block;
            width: 22px;
            height: 32px;
          }
        }
        .arrow-prev {
          left: 0;
          i {
            background: url(//static.360buyimg.com/item/unite/1.0.94/components/default/preview/i/disabled-prev.png);
          }
        }
        .arrow-next {
          right: 0;
          i {
            background: url(//static.360buyimg.com/item/unite/1.0.94/components/default/preview/i/disabled-next.png);
          }
        }
        ul {
          display: flex;
          justify-content: space-around;
          width: 350px;
          overflow: hidden;
          margin: 0 auto;
          &.move {
            padding-left: 0;
            padding-right: 80px;
          }
          li {
            width: 58px;
            height: 58px;
            img {
              width: 54px;
            }
          }
        }
        .imgActive {
          border: 2px solid #e53e41 !important;
        }
      }
      // 添加到收藏
      .follow{
        display: inline;
        margin: 0 20px;
        cursor: pointer;
        color: #666;
        font-size: 14px;
        &:hover{
          color: #e3393c;
        }
        i {
          color: #e3393c;
          font-size: 20px;
        }
      }
    }
    // 文字部分的样式
    .itemInfo-wrap {
      float: left;
      width: 580px;
      .sku-name {
        font-size: 16px;
        font-weight: 700;
        color: #666;
        padding-top: 10px;
        line-height: 28px;
        margin-bottom: 5px;
      }
      .news {
        margin-bottom: 8px;
        color: #e4393c;
        a {
          color: #5e69ad;
          text-decoration: underline;
        }
      }
      // 价格的样式
      .summary-price-wrap {
        margin-bottom: 10px;
        padding: 10px 0 15px;
        background-color: #f3f3f3;
        .price {
          margin-bottom: 5px;
          .price-content {
            margin-left: 8px;
            color: #e4393c;
            i {
              margin-right: 10px;
              font-size: 16px;
              span {
                font-size: 22px;
              }
            }
            em {
              color: #005aa0;
              &:hover {
                color: #e4393c;
              }
            }
          }
          .comment {
            border-left: solid 1px #e6e6e6;
            text-align: center;
            padding: 0 10px;
            line-height: 15px;
            p {
              color: #005ea7;
            }
          }
        }

        // 促销
        .promotion {
          .promotion-content {
            margin-left: -15px;
            .hl_red_bg {
              padding: 2px 3px;
              margin-right: 5px;
              display: inline-block;
              color: #df3033;
              border: 1px solid #df3033;
              line-height: 16px;
            }
            .hl_red {
              color: #666;
              line-height: 18px;
            }
          }
        }
      }
      // 其他样式
      .other {
        font-size: 14px;
        // 选择部分
        .choose {
          margin-bottom: 10px;
          // 选择颜色的样式
          dl {
            padding: 10px 0;
            line-height: 28px;
          }
          ul {
            width: 520px;
            margin-left: 43px;
          }
          .choose_title,
          .edition_title {
            margin-right: 15px;
          }
          .color_item,
          .edition_item {
            float: left;
            margin: 0 10px 10px 0;
            a {
              position: relative;
              display: inline-block;
              max-width: 396px;
              min-width: 68px;
              padding: 2px;
              border: 2px solid #ccc;
              background-color: #f7f7f7;
              color: #666;
              &.selected {
                border: 2px solid #c81623;
                background-color: #fff;
              }
            }
            img {
              width: 28px;
              height: 28px;
            }
            .color_text {
              margin: 0 15px;
            }
            .choose_icon {
              position: absolute;
              bottom: 0;
              right: 0;
              display: inline-block;
              width: 13px;
              height: 14px;
              background: url(../../assets/front/choosed.png) no-repeat;
            }
          }
          .edition_title {
            line-height: 30px;
          }
          .edition_item a {
            padding: 9px 12px;
          }
        }
        // 配送
        .dispatching {
          display: flex;
          .othet_title{
            margin-right: 15px;
          }
          // 修改地区选择器的样式
          /deep/.distpicker-address-wrapper select {
            padding: 0 .75rem!important;
            height: 34px!important;
            font-size: 0.95rem!important;
          }
        }
        // 运费
        .freight {
          line-height: 28px;
          padding-top: 10px;
          .freight_title {
            margin-right: 15px;
          }
          .freight_text {
            color: #333;
          }
        }
        // 数量的样式
        .number {
          margin-bottom: 30px;
          .number_title {
            margin-right: 15px;
            line-height: 28px;
          }
          .number_add {
            position: relative;
            margin-right: 10px;
            width: 75px;
            height: 30px;
            border: 1px solid #ccc;
            text-align: center;
            input {
              width: 30px;
              height: 28px;
              line-height: 30px;
              text-align: center;
            }
            a {
              display: block;
              width: 21px;
              position: absolute;
              top: 0;
              text-align: center;
              height: 28px;
              line-height: 26px;
              background: #f9f8f8;
              color: #7d7c7c;
              font-size: 20px;
              font-weight: 700;
              &.add {
                border-left: 1px solid #ccc;
                right: 0;
              }
              &.reduce {
                border-right: 1px solid #ccc;
                left: 0;
              }
            }
          }
          .notReduce {
            color: #dad8d8 !important;
            cursor: not-allowed;
          }
        }
      }
      // 加入购物车的样式
      .add-car {
        margin-left: 28px;
        .addshopcar {
          display: inline-block;
          width: 142px;
          background-color: #c81623;
          text-align: center;
          line-height: 44px;
          color: #fff;
          font-size: 16px;
          margin-left: 15px;
        }
        .buy_now {
          display: inline-block;
          width: 142px;
          color: #e5511d;
          line-height: 42px;
          text-align: center;
          font-size: 16px;
          margin-left: 15px;
          // border-color: #F0CAB6;
          border: 1px solid #f0cab6;
          background: #ffd9bc;
        }
      }

      // 优购价、促销等字样的公共样式
      .dt {
        padding-left: 10px;
        font-family: simsun;
        line-height: 22px;
        color: #999;
      }
    }
  }
}
// 商品详细信息部分的样式
.goods_info {
  margin-top: 30px;
  // tab栏的共同样式
  .tab {
    background-color: #f7f7f7;
    border: 1px solid #eee;
    border-bottom: 1px solid #e4393c;
  }
  .tab_item {
    padding: 12px 25px;
    font-size: 14px;
    cursor: default;
    &:hover {
      color: #e4393c;
    }
  }
  // 当前选中的tab栏样式
  .tabActive {
    background-color: #e4393c;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }

  // 左边的推荐栏
  .recom_menus {
    width: 190px;
    margin-right: 10px;
    .tab_item {
      padding: 12px 19px;
    }
    // 热销推荐列表
    .sell_hot {
      padding: 20px 10px;
      padding-bottom: 0;
      border: 1px solid #eee;
      .sell_hot_item {
        position: relative;
        margin-bottom: 20px;
        // 排名图标样式
        .rank {
          position: absolute;
          top: -3px;
          left: -3px;
          display: inline-block;
          width: 18px;
          height: 18px;
          background-color: #e4393c;
          border-radius: 50%;
          text-align: center;
          line-height: 18px;
          color: #fff;
        }
      }
      img {
        width: 140px;
        height: 140px;
        margin: 10px 15px;
      }
      .sellGoods_title {
        height: 36px;
        margin-bottom: 10px;
        line-height: 18px;
        overflow: hidden;
        color: #333;
        &:hover {
          color: #e4393c;
        }
      }
      .sell_num {
        color: #999;
      }
      .price {
        color: #e4393c;
        font-size: 13px;
        font-family: Verdana;
        font-weight: 700;
      }
    }
  }
  // 右边tab栏
  .info_r_tab {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  // 右边的商品详细信息介绍
  .info_right {
    width: 800px;
    .btn_addcar {
      display: inline-block;
      height: 25px;
      padding: 0 15px;
      line-height: 25px;
      margin-top: 7px;
      margin-right: 10px;
      background-color: #e4393c;
      color: #fff;
    }
  }
}
</style>
