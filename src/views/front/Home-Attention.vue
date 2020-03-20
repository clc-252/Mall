// 我的关注页面
<template>
  <div class="attention">
    <!-- 标题部分 -->
    <div class="attention_title">
      <ul>
        <li
          v-for="(item,index) in ['关注的商品','关注的店铺','内容的收藏']"
          :key="index"
          :class="{tabActive:current===index}"
          @click="handleClick(index)"
        >
          <span>{{item}}</span>
          <i class="number"></i>
        </li>
      </ul>
    </div>
    <!-- 主体部分 -->
    <!-- 关注的商品 -->
    <div class="goods_follow" v-if="current===0">
      <ul>
        <li class="goods_item">
          <a href="#">
            <img src="../../assets/front/hot-goods9.jpg" alt />
            <div class="goods_info">
              <p class="goods_title">Apple 苹果 iPhone 11 手机 紫色 全网通128G</p>
              <strong class="price">¥4999</strong>
            </div>
          </a>
          <!-- 其他信息 -->
          <div class="goods_other">
            <!-- 评价 -->
            <div class="comment">
              <span class="comment_num">
                <i class="el-icon-chat-dot-round"></i>&nbsp;2131人评价
              </span>
              <span>
                <i class="el-icon-star-off"></i>&nbsp;97%
              </span>
            </div>
            <!-- 加入购物车和取消关注 -->
            <div class="other">
              <!-- 加入购物车 -->
              <span class="join_cart">
                <i class="el-icon-shopping-cart-2"></i>&nbsp;加入购物车
              </span>
              <span class="canel_follow">取消关注</span>
            </div>
          </div>
        </li>
        <li class="goods_item">
          <a href="#">
            <img src="../../assets/front/hot-goods9.jpg" alt />
            <div class="goods_info">
              <p class="goods_title">Apple 苹果 iPhone 11 手机 紫色 全网通128G</p>
              <strong class="price">¥4999</strong>
            </div>
          </a>
          <!-- 其他信息 -->
          <div class="goods_other">
            <!-- 评价 -->
            <div class="comment">
              <span class="comment_num">
                <i class="el-icon-chat-dot-round"></i>&nbsp;2131人评价
              </span>
              <span>
                <i class="el-icon-star-off"></i>&nbsp;97%
              </span>
            </div>
            <!-- 加入购物车和取消关注 -->
            <div class="other">
              <!-- 加入购物车 -->
              <span class="join_cart">
                <i class="el-icon-shopping-cart-2"></i>&nbsp;加入购物车
              </span>
              <span class="canel_follow">取消关注</span>
            </div>
          </div>
        </li>
        <li class="goods_item">
          <a href="#">
            <img src="../../assets/front/hot-goods9.jpg" alt />
            <div class="goods_info">
              <p class="goods_title">Apple 苹果 iPhone 11 手机 紫色 全网通128G</p>
              <strong class="price">¥4999</strong>
            </div>
          </a>
          <!-- 其他信息 -->
          <div class="goods_other">
            <!-- 评价 -->
            <div class="comment">
              <span class="comment_num">
                <i class="el-icon-chat-dot-round"></i>&nbsp;2131人评价
              </span>
              <span>
                <i class="el-icon-star-off"></i>&nbsp;97%
              </span>
            </div>
            <!-- 加入购物车和取消关注 -->
            <div class="other">
              <!-- 加入购物车 -->
              <span class="join_cart">
                <i class="el-icon-shopping-cart-2"></i>&nbsp;加入购物车
              </span>
              <span class="canel_follow">取消关注</span>
            </div>
          </div>
        </li>
        <li class="goods_item">
          <a href="#">
            <img src="../../assets/front/hot-goods9.jpg" alt />
            <div class="goods_info">
              <p class="goods_title">Apple 苹果 iPhone 11 手机 紫色 全网通128G</p>
              <strong class="price">¥4999</strong>
            </div>
          </a>
          <!-- 其他信息 -->
          <div class="goods_other">
            <!-- 评价 -->
            <div class="comment">
              <span class="comment_num">
                <i class="el-icon-chat-dot-round"></i>&nbsp;2131人评价
              </span>
              <span>
                <i class="el-icon-star-off"></i>&nbsp;97%
              </span>
            </div>
            <!-- 加入购物车和取消关注 -->
            <div class="other">
              <!-- 加入购物车 -->
              <span class="join_cart">
                <i class="el-icon-shopping-cart-2"></i>&nbsp;加入购物车
              </span>
              <span class="canel_follow">取消关注</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 当前tab栏选中的索引
      current: 0
    }
  },
  methods: {
    // 切换tab栏时触发
    handleClick (index) {
      this.current = index
    }
  }
}
</script>

<style lang="less" scoped>
// 头部tab栏
.attention_title {
  padding: 15px 0;
  background-color: #fff;
  ul {
    display: flex;
    justify-content: space-around;
    width: 300px;
    color: #333;
    li {
      padding: 5px 2px;
      cursor: pointer;
    }
  }
  // tab栏切换样式
  .tabActive {
    color: #e4393c;
    border-bottom: 2px solid #e4393c;
    font-weight: 700;
  }
}
// 主体部分
// 关注的商品部分
.goods_follow {
  margin-top: 20px;
  padding: 0 15px 15px;
  background-color: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    .goods_item {
      width: 23%;
      padding-top: 15px;
      margin-top: 20px;
      margin-right: 15px;
      text-align: center;
      border: 1px solid #eee;
      a {
        display: inline-block;
        padding: 0 15px;
      }
      img {
        margin-bottom: 5px;
      }
      .goods_info {
        color: #333;
        .goods_title {
          line-height: 22px;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .price {
          font-size: 14px;
          line-height: 22px;
        }
      }
      // 其他的信息
      .goods_other {
        margin-top: 5px;
        .comment {
          padding: 5px 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-around;
          span {
            display: inline-block;
            padding: 2px 10px 2px 0;
            &.comment_num {
              padding-right: 20px;
              border-right: 1px solid #eee;
            }
          }
        }
        // 加入购物车和取消关注
        .other {
          height: 36px;
          line-height: 36px;
          background-color: #f9f9f9;
          color: #333;
          span {
            display: inline-block;
            height: 100%;
            padding: 0 10px;
            cursor: pointer;
            &.join_cart {
              border-right: 1px solid #eee;
            }
            i {
              color: #aaa;
              font-size: 16px;
            }
            &:hover,
            &:hover i {
              color: #e4393c;
            }
          }
        }
      }
    }
  }
}
</style>
