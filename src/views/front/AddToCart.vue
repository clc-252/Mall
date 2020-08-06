// 添加到购物车页面
<template>
  <div class="add-to-cart">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <!-- 主体部分 -->
    <div class="addToCart_main w clearfix">
      <!-- 提示 -->
      <div class="tip">
        <i class="el-icon-circle-check"></i>
        <span>商品已成功加入购物车！</span>
      </div>
      <!-- 商品信息 -->
      <div class="goods fl">
        <a href="javascript:void(0);" target="_blank">
          <img :src="goodsList.productIcon" alt />
        </a>
        <div class="goods_info">
          <a href="javascript:void(0);" target="_blank">
            <p class="goods_title">{{goodsList.title}}</p>
          </a>
          <div class="goods_other">
            <span class="color">颜色：{{goodsList.color}}</span>
            <span class="size_num">尺码：{{goodsList.size}}&nbsp;/&nbsp;数量：{{goodsList.count}}</span>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn fr">
        <a href="javascript:void(0);" target="_blank" class="goods_detail" @click="$router.push({ name: 'GoodsDetail',query:{id:goodsList.productId }})">查看商品详情</a>
        <a href="http://localhost:8080/#/front/cart" target="_blank" class="to_cart">
          去购物车结算
          <i class="el-icon-arrow-right"></i>
        </a>
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

// 引入加入购物车的方法
// import { addToCart } from '@/apis/cart.js'
export default {
  data () {
    return {
      goodsList: {}
    }
  },
  components: {
    CommentHeader,
    CommentFooter
  },
  mounted () {
    // let token = this.$store.state.user.userInfo.sessionToken
    // console.log(this.$route.query)
    this.goodsList = this.$route.query

    // let res = await addToCart(token, this.$route.query)
    // console.log(res)
    // this.goodsList = res
    // console.log(this.goodsList)
  }
}
</script>

<style lang="less" scoped>
/deep/.header {
  border-bottom: 2px solid #f30213;
}
// 主体部分样式
.addToCart_main {
  margin-bottom: 20px;
  // 提示
  .tip {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #71b247;
    margin: 20px 0;
    .el-icon-circle-check {
      font-size: 28px;
      margin-right: 5px;
    }
  }
  // 商品信息
  .goods {
    display: flex;
    img {
      width: 62px;
      height: 62px;
      object-fit: cover;
      margin-right: 10px;
      border: 1px solid #eee;
    }
    .goods_info {
      .goods_title {
        width: 400px;
        font-size: 14px;
        color: #333;
        line-height: 32px;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        &:hover{
            color: #e2231a;
        }
      }
      .goods_other {
        color: #aaa;
      }
    }
  }
  // 按钮的样式
  .btn {
    margin-top: 20px;
    a {
      display: inline-block;
      height: 34px;
      line-height: 34px;
      font-size: 16px;
      text-align: center;
      &.goods_detail {
        padding: 0 30px;
        margin-right: 10px;
        background-color: #fff;
        color: #e2231a;
        border: 1px solid #fff;
        &:hover {
          border: 1px solid #e2231a;
        }
      }
      &.to_cart {
        padding: 0 10px 0 20px;
        background-color: #e2231a;
        border: 1px solid #e2231a;
        color: #fff;
        &:hover {
          background: #c91623;
        }
        i {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
