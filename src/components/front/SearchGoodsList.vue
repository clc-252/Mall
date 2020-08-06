// 搜索页的商品列表组件
<template>
  <div class="search_goods_list">
    <!-- 头部 -->
    <div class="goods_list_title">
      <ul>
        <li
          v-for="(item,index) in header"
          :key="index"
          @click="handleClick(index)"
          :class="{active:current===index}"
        >
          <span>{{item}}</span>
          <div class="icon" v-if="index===1">
            <i
              class="el-icon-arrow-up"
              :class="{priceActive:isShowUp,iconStyle:isShowStyle}"
              v-if="isShowUp"
            ></i>
            <i
              class="el-icon-arrow-down"
              :class="{priceActive:isShowDown,iconStyle:isShowStyle}"
              v-if="isShowDown"
            ></i>
          </div>
        </li>
        <li class="price_section">
          <input type="text" placeholder="¥" @focus="isShowBtn=true" @blur="isShowBtn=false" />
          <span>-</span>
          <input type="text" placeholder="¥" @focus="isShowBtn=true" @blur="isShowBtn=false" />
          <i class="sure_btn" v-if="isShowBtn">确定</i>
        </li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <div class="goods_list">
      <div class="goods_item">
        <ul>
          <li v-for="(item,index) in searchList" :key="index" @click="$router.push({ name: 'GoodsDetailOther',query:{id:item.id} })">
            <a href="javascript:void(0);">
              <!-- 图片 -->
              <img
                :src="item.mainPic"
                alt
              />
              <!-- 商品信息 -->
              <div class="goods_info">
                <p class="price">
                  <span>¥</span>{{item.originalPrice}}
                </p>
                <p class="title">{{item.title}}</p>
                <p class="comment">
                  <span>{{item.monthSales}}</span>月销量
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 头部的数据
      header: ['综合', '价格', '销量'],
      // 当前
      current: 0,
      isShowUp: true,
      isShowDown: true,
      isShowStyle: false,
      // 是否显示确认按钮
      isShowBtn: false,
      // 存储搜索数据列表
      searchList: []
    }
  },
  methods: {
    // 点击切换tab栏时触发
    handleClick (index) {
      this.current = index
      if (index === 1) {
        // ^图标隐藏
        this.isShowUp = !this.isShowUp
        // 给图标加上字体颜色的样式
        this.isShowStyle = true
        if (this.isShowUp) {
          // 如果^显示，向下的图标隐藏
          this.isShowDown = false
        } else {
          // 如果^隐藏，向下的图标显示
          this.isShowDown = true
        }
      } else {
        this.isShowUp = true
        this.isShowDown = true
        this.isShowStyle = false
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
      // let ret = this.$md5.update(`${str}&key=${appSecret}`).digest('hex')
      let ret = this.$md5(`${str}&key=${appSecret}`).toUpperCase()
      return ret
    }
  },
  mounted () {
    let appSecret = '95cea2a805c4886c54d80d8a2c15d523'
    let data = {
      appKey: '5ea5acab9ff48',
      version: 'v1.2.2',
      type: 0,
      pageId: 1,
      pageSize: 32,
      keyWords: this.$route.query.keyword
    }
    axios({
      url: '/api/goods/list-super-goods',
      method: 'get',
      params: {
        ...data,
        sign: this.makeSign(data, appSecret)
      }
    }).then(res => {
      console.log(res)
      this.searchList = res.data.data.list
    })
  }
}
</script>

<style lang="less" scoped>
// 头部
.goods_list_title {
  margin-top: 20px;
  height: 50px;
  border: 1px solid #dfdfdf;
  background-color: #f5f5f5;
  li {
    position: relative;
    float: left;
    padding: 0 20px;
    height: 50px;
    border: 1px solid #dfdfdf;
    margin-top: -1px;
    margin-left: -1px;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    .icon {
      position: absolute;
      top: 16px;
      right: 6px;
      color: #a19b9b;
      i {
        display: block;
        font-size: 8px !important;
        font-weight: 700;
        margin-bottom: -2px;
      }
    }
    // 价格区间的样式
    &.price_section {
      border-right: none;
      input {
        width: 60px;
        height: 24px;
        border: 1px solid #dfdfdf;
        padding-left: 5px;
        font-size: 12px;
      }
      span {
        margin: 0 5px;
      }
      .sure_btn {
        display: inline-block;
        width: 36px;
        height: 22px;
        margin-left: 10px;
        line-height: 22px;
        text-align: center;
        background-color: #c81623;
        color: #fff;
        border-radius: 5px;
        font-size: 12px;
      }
    }
  }
  // 头部当前li的样式
  .active {
    position: relative;
    z-index: 2;
    border: 1px solid #c81623;
    color: #c81623;
    background-color: #fff;
  }
  // 价格部分的样式
  .priceActive {
    display: none;
  }
  .iconStyle {
    color: #c81623;
    margin-top: 4px;
  }
}
// 商品列表
.goods_item ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // 商品图片的样式
  li {
    width: 22%;
    margin-right: 20px;
    margin-top: 20px;
    padding-bottom: 20px;
    a img {
      width: 200px;
      height: 200px;
      margin: 20px 10px;
      object-fit: cover; // 防止图片变形
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      border-color: #e9e9e9;
      box-shadow: 0 0 2px 2px #f8f8f8;
    }
  }
  // 商品详情的样式
  .goods_info {
      padding: 0 20px 0 10px;
    .price {
      color: #e4393c;
      font-size: 20px;
      margin-bottom: 5px;
      span {
        font-size: 16px;
      }
    }
    .title {
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .comment {
      color: #999;
      line-height: 24px;
      span {
        color: #646fb0;
        font-weight: 700;
      }
    }
  }
}
</style>
