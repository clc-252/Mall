// 我的关注页面
<template>
  <div class="attention">
    <!-- 标题部分 -->
    <div class="attention_title">
      <ul>
        <li
          v-for="(item,index) in ['关注的商品','关注的店铺']"
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
        <li class="goods_item" v-for="(item,index) in followList" :key="index">
          <a href="#">
            <img :src="item.coverIcon" alt />
            <div class="goods_info">
              <p class="goods_title">{{item.title}}</p>
              <strong class="price">¥{{item.price/100}}</strong>
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
    <!-- 关注的店铺 -->
    <div class="shop_follow" v-if="current===1">
      <div class="shop_follow_list">
        <div class="shop_follow_item clearfix">
          <!-- 左边店铺信息 -->
          <div class="shopInfo">
            <!-- 店铺图片 -->
            <div class="shop_img">
              <a href="#">
                <img
                  src="//img30.360buyimg.com/popshop/jfs/t643/95/1161898709/1979/67b450c/54b60e87N6947932c.png"
                  alt
                />
              </a>
            </div>
            <!-- 店铺名称 -->
            <div class="shop_name">
              <a href="#">FILA斐乐官方旗舰店</a>
            </div>
            <!-- 店铺评分 -->
            <div class="shop_start">
              <span class="star-cont">
                店铺星级
                <span class="shop-star">
                  <span class="star s4" style="width: 96%;"></span>
                </span>
              </span>
              <span class="shop-follow">
                <i></i>
                <em>2626249</em>
              </span>
            </div>
            <!-- 底部进入店铺和联系客服部分 -->
            <div class="shop_btnbox">
              <a target="_blank" href="//mall.jd.com/index-35309.html" class="shop-enter">
                <i class="btnico"></i>
                <em class="btntxt">进入店铺</em>
              </a>
              <a href="javascript:void(0);" class="shop-im im-online">
                <i class="btnico"></i>
                <em class="btntxt">联系客服</em>
              </a>
            </div>
          </div>
          <!-- 右边店铺热销商品 -->
          <div class="shop_goods">
            <div class="shop_goods_title">店铺热销商品</div>
            <ul>
              <li>
                <img
                  src="https://img13.360buyimg.com/n3/jfs/t1/70317/7/14616/164882/5dbff373E7a251a9a/58100b42fe5795c1.jpg"
                  alt
                />
                <span class="price">¥739.00</span>
              </li>
              <li>
                <img
                  src="https://img13.360buyimg.com/n3/jfs/t1/70317/7/14616/164882/5dbff373E7a251a9a/58100b42fe5795c1.jpg"
                  alt
                />
                <span class="price">¥739.00</span>
              </li>
              <li>
                <img
                  src="https://img13.360buyimg.com/n3/jfs/t1/70317/7/14616/164882/5dbff373E7a251a9a/58100b42fe5795c1.jpg"
                  alt
                />
                <span class="price">¥739.00</span>
              </li>
              <li>
                <img
                  src="https://img13.360buyimg.com/n3/jfs/t1/70317/7/14616/164882/5dbff373E7a251a9a/58100b42fe5795c1.jpg"
                  alt
                />
                <span class="price">¥739.00</span>
              </li>
            </ul>
          </div>
          <!-- 取消关注 -->
          <div class="cancel_follow">
            <el-tooltip class="item" effect="dark" content="取消关注" placement="top">
              <i class="el-icon-close"></i>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFollowList } from '@/apis/goods.js'
export default {
  data () {
    return {
      // 当前tab栏选中的索引
      current: 0,
      followList: []
    }
  },
  methods: {
    // 切换tab栏时触发
    handleClick (index) {
      this.current = index
    }
  },
  async mounted () {
    // 获取id和token值
    let id = this.$store.state.user.userInfo.id
    let token = this.$store.state.user.userInfo.sessionToken
    let res = await getFollowList(id, token)
    console.log(res)
    this.followList = res.data.results[1]
    console.log(this.followList)
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
    width: 200px;
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
        padding: 0 5px;
      }
      img {
        margin-bottom: 5px;
        width: 160px;
        height: 160px;
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
// 店铺关注
.shop_follow {
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  .shop_follow_item {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border: 1px solid #eee;
    // 左侧店铺信息
    .shopInfo {
      width: 250px;
      padding-top: 20px;
      text-align: center;
      border-right: 1px solid #eee;
      img {
        width: 120px;
        height: 40px;
        vertical-align: middle;
      }
      .shop_name a {
        color: #333;
        font: 700 14px/30px SimSun;
      }
      // 店铺评分
      .shop_start {
        margin: 60px 0 20px;
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
        .star-cont {
          position: relative;
          width: 150px;
          height: 20px;
          padding: 0 8px 0 10px;
          background: #efefef;
          line-height: 20px;
          border-radius: 16px;
          font-size: 12px;
          text-align: left;
          .shop-star {
            position: absolute;
            top: 3px;
            right: 4px;
            display: block;
            width: 85px;
            height: 14px;
            line-height: 22px;
            background: url(../../assets/front/star.png) repeat-x;
            overflow: hidden;
            .star {
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              height: 14px;
              background: url(../../assets/front/star.png) repeat-x;
              overflow: hidden;
              background-position: 0 -19px;
            }
          }
        }
        .shop-follow {
          i {
            display: inline-block;
            width: 15px;
            height: 13px;
            margin-right: 3px;
            margin-top: 2px;
            vertical-align: bottom;
            background: url(../../assets/front/sprite-icon.png) no-repeat -60px -60px;
          }
        }
      }
      // 底部进入店铺和联系客服
      .shop_btnbox {
        height: 36px;
        border-top: 1px solid #eee;
        display: flex;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 125px;
          height: 35px;
          line-height: 35px;
          padding: 0;
          background: #f9f9f9;
          .btnico {
            display: inline-block;
            margin-right: 5px;
          }
          &.shop-enter {
            i {
              width: 15px;
              height: 14px;
              background: url(../../assets/front/sprite-icon.png) no-repeat 0 -200px;
            }
            &:hover i {
              background-position: -20px -200px;
            }
          }
          &.shop-im {
            margin-left: -1px;
            border-left: 1px solid #eee;
            i {
              width: 16px;
              height: 16px;
              background: url(../../assets/front/sprite-im.png) no-repeat 0 0;
            }
            &:hover i {
              background-position: 0 -20px;
            }
          }
        }
      }
    }
    // 右边店铺热卖商品
    .shop_goods {
      flex: 1;
      padding: 0 10px;
      .shop_goods_title {
        margin: 10px 0;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        color: #333;
      }
      ul {
        display: flex;
        justify-content: space-around;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            width: 90px;
            margin: 15px 0;
          }
          .price {
            text-align: center;
            color: #333;
          }
        }
      }
    }
    // 取消关注
    .cancel_follow {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 16px;
    }
  }
}
</style>
