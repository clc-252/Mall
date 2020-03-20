<template>
  <div class="home_index">
    <!-- 个人信息和我的钱包部分 -->
    <div class="container1">
      <!-- 个人信息 -->
      <div class="user">
        <!-- 头像 -->
        <div class="user_pic">
          <a href="#">
            <img src="//i.jd.com/commons/img/no-img_mid_.jpg" alt />
          </a>
        </div>
        <!-- 用户名 -->
        <div class="username">
          <a href="#">用户名</a>
        </div>
        <!-- 修改信息和退出登录 -->
        <div class="change_info">
          <a href="#">修改</a>
          <a href="#">退出</a>
        </div>
        <!-- 底部颜色块 -->
        <p></p>
      </div>
      <!-- 我的钱包 -->
      <div class="my-wallet">
        <div class="wallet_hd header">
          <h3>我的钱包</h3>
        </div>
        <div class="wallet_bd">
          <ul class="clearfix">
            <li>
              <div class="num">
                <a href="//quan.jd.com/user_quan.action" target="_blank">0</a>
              </div>
              <p>优惠券</p>
              <div class="operate">
                <a href="//a.jd.com" target="_blank">领券</a>
              </div>
            </li>
            <li>
              <div class="num">
                <a href="//quan.jd.com/user_quan.action" target="_blank">120</a>
              </div>
              <p>京豆</p>
              <div class="operate">
                <a href="//bean.jd.com/myJingBean/list#earnBean" target="_blank">赚京豆</a>
                <span class="spacer">|</span>
                <a href="//bean.jd.com/myJingBean/list#expendBean" target="_blank">花京豆</a>
              </div>
            </li>
            <li>
              <div class="num">
                <a href="//quan.jd.com/user_quan.action" target="_blank">0.00</a>
              </div>
              <p>余额</p>
              <div class="operate">
                <a href="//mymoney.jd.com/recharge/chongzhi.action" target="_blank">充值</a>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 订单中心 -->
    <div class="container2">
      <div class="my_order">
        <div class="order_hd header">
          <h3>我的订单</h3>
        </div>
        <div class="order_bd">
          <div class="order_nav">
            <a href="javascript:void(0);" target="_self" class="item payment" @click="$router.push({path: 'home/homeordercenter',query:{tabCurrent:1}})">
              <div class="icon-sprite icon1"></div>
              <p class="name">待付款</p>
            </a>
            <a href="javascript:void(0);" target="_self" class="item sign_for" @click="$router.push({path: 'home/homeordercenter',query:{tabCurrent:2}})">
              <div class="icon-sprite icon2"></div>
              <p class="name">待收货</p>
            </a>
            <a href="javascript:void(0);" target="_self" class="item evaluate" @click="$router.push({path: 'home/homeordercenter',query:{tabCurrent:3}})">
              <div class="icon-sprite icon3"></div>
              <p class="name">待评价</p>
            </a>
            <a href="javascript:void(0);" target="_self" class="item after_sale">
              <div class="icon-sprite icon4"></div>
              <p class="name">退换/售后</p>
            </a>
            <a href="javascript:void(0);" target="_self" class="item all_order" @click="$router.push({path: 'home/homeordercenter',query:{tabCurrent:0}})">
              <div class="icon-sprite icon5"></div>
              <p class="name">全部订单</p>
            </a>
          </div>
          <div class="empty">您买的东西太少了，这里都空空的，快去挑选合适的商品吧！</div>
        </div>
      </div>
    </div>
    <!-- 看看别人买什么 -->
    <div class="container3">
      <div class="buy">
        <div class="buy_hd header">
          <h3 style="float: left;">买什么</h3>
          <p style="float: left;">看看达人们都在买的商品</p>
          <a class="more" href="//what.jd.com/what/index" target="_blank" style="float: right;">
            更多
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
        <div class="buy_bd">
          <div class="bd_list" v-for="(item,index) in buyList" :key="index">
            <a
              class="title"
              href="//what.jd.com/album/details?albumId=518799&amp;st=00"
              target="_blank"
            >{{item.title}}</a>
            <div class="owner">
              <a
                class="nickname"
                href="//what.jd.com/user/albums?pin=1X6%252B8lyHQW6uNx2co1M9Iw%253D%253D"
                target="_blank"
              >
                <i class="icon-wtb-owner"></i>
                {{item.nickname}}
              </a>
              <button class="praise">
                <i class="icon-wtb-praise"></i>
                {{item.praiseNum}}
              </button>
              <button class="like">
                <i class="icon-wtb-like"></i>
                {{item.likeNum}}
              </button>
            </div>
            <div class="goodsImg">
              <img :src="item.firstImgSrc" alt class="firstImg" />
              <img :src="item.secondImgSrc" alt />
              <img :src="item.thirdImgSrc" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container4">
      <!-- 我的关注 -->
      <div class="attention">
        <div class="attention_hd header">
          <h3>我的关注</h3>
        </div>
        <div class="attention_bd">
          <ul>
            <li>
              <a href="#">
                <p class="number">12</p>
                <p class="text">商品关注</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p class="number">2</p>
                <p class="text">店铺关注</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p class="number">1</p>
                <p class="text">收藏内容</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 浏览记录 -->
      <div class="history">
        <div class="history_hd header">
          <h3 style="float: left;">浏览记录</h3>
          <a class="more" href="#" target="_blank" style="float: right;">
            更多
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
        <div class="history_bd"></div>
      </div>
      <!-- 生活服务 -->
      <div class="life_service">
        <div class="life_hd header">
          <h3>生活服务</h3>
        </div>
        <div class="life_bd">
          <span class="btn_left el-icon-arrow-left" @click="next"></span>
          <span class="btn_right el-icon-arrow-right" @click="next"></span>
          <ul class="service_list clearfix" ref="serviceList">
            <li class="service-item">
              <a href="//chongzhi.jd.com" target="_blank">
                <i class="icon-service icon-service1"></i>
                <span>话费</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//jipiao.jd.com/" target="_blank">
                <i class="icon-service icon-service2"></i>
                <span>机票</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//hotel.jd.com/" target="_blank">
                <i class="icon-service icon-service3"></i>
                <span>酒店</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//b.jd.com/" target="_blank">
                <i class="icon-service icon-service4"></i>
                <span>企业购</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//jiayouka.jd.com/" target="_blank">
                <i class="icon-service icon-service5"></i>
                <span>加油卡</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//movie.jd.com/index.html" target="_blank">
                <i class="icon-service icon-service6"></i>
                <span>电影票</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//game.jd.com/" target="_blank">
                <i class="icon-service icon-service7"></i>
                <span>游戏</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//train.jd.com/" target="_blank">
                <i class="icon-service icon-service8"></i>
                <span>火车票</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//z.jd.com/sceneIndex.html?from=jrscyn_20162" target="_blank">
                <i class="icon-service icon-service9"></i>
                <span>众筹</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//licai.jd.com/?from=jrscyn_20161" target="_blank">
                <i class="icon-service icon-service10"></i>
                <span>理财</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//o.jd.com/market/index.action" target="_blank">
                <i class="icon-service icon-service11"></i>
                <span>礼品卡</span>
              </a>
            </li>
            <li class="service-item">
              <a href="//baitiao.jd.com/?from=jrscyn_20160" target="_blank">
                <i class="icon-service icon-service12"></i>
                <span>白条</span>
              </a>
            </li>
          </ul>
          <!-- 列表下的小点 -->
          <ul class="slick-dots clearfix">
            <li class="slick-active" ref="firstDots"></li>
            <li ref="secondDots"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 买什么渲染数据
      buyList: [
        {
          title: '禅茶',
          nickname: '不入魔不入仙',
          praiseNum: 1786,
          likeNum: 28,
          firstImgSrc: require('@/assets/front/buy_tea1.png'),
          secondImgSrc: require('@/assets/front/buy_tea2.png'),
          thirdImgSrc: require('@/assets/front/buy_tea3.png')
        },
        {
          title: '每天读点书',
          nickname: '五个橙子的故事',
          praiseNum: 20,
          likeNum: 43,
          firstImgSrc: require('@/assets/front/buy_book1.png'),
          secondImgSrc: require('@/assets/front/buy_book2.png'),
          thirdImgSrc: require('@/assets/front/buy_book3.png')
        }
      ]
    }
  },
  methods: {
    next () {
      this.$refs.serviceList.classList.toggle('move')
      this.$refs.firstDots.classList.toggle('slick-active')
      this.$refs.secondDots.classList.toggle('slick-active')
    }
  }
}
</script>

<style lang='less' scoped>
.home_index {
  position: relative;
}
// 个人信息和我的钱包样式
.container1 {
  .user {
    float: left;
    width: 220px;
    padding: 20px 0 0;
    margin-top: -5px;
    background-color: #e2231a;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    .user_pic {
      img {
        width: 65px;
        border-radius: 50%;
      }
    }
    .username {
      margin: 15px 0;
      a {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
      }
    }
    .change_info {
      a {
        display: inline-block;
        padding: 0 15px;
        margin: 0 10px;
        height: 22px;
        border: 1px solid #fff;
        color: #fff;
        line-height: 20px;
        border-radius: 12px;
        font-size: 14px;
        &:hover {
          color: #e2231a;
          background-color: #fff;
        }
      }
    }
    p{
      height: 30px;
      margin-top: 10px;
      background-color: #232331;
    }
  }
  .my-wallet {
    background-color: #fff;
    margin-left: 220px;
    .wallet_bd {
      padding: 10px 30px 0;
      height: 130px;
      ul li {
        float: left;
        margin-right: 100px;
        color: #333;
        .num {
          padding-top: 10px;
          height: 24px;
          line-height: 24px;
          font-size: 22px;
          font-weight: 700;
          a {
            color: #333;
          }
        }
        p {
          margin: 20px 0;
        }
        .operate {
          padding-top: 10px;
          a {
            color: #4184e8;
            &:hover {
              color: #c81623;
            }
          }
          .spacer {
            margin: 0 10px;
          }
        }
      }
    }
  }
}
// 订单中心样式
.container2 {
  width: 580px;
  margin-top: 25px;
  .my_order {
    background-color: #fff;
    .order_bd {
      .order_nav {
        padding: 14px;
        // 公共样式
        .item {
          display: inline-block;
          width: 80px;
          height: 80px;
          margin: 0 15px;
          padding-top: 10px;
          text-align: center;
          transition: all 0.4s ease;
          .icon-sprite {
            width: 44px;
            height: 40px;
            margin: 1px auto 2px;
            background: url(../../assets/front/sprite.png) no-repeat;
          }
          .name {
            padding-top: 10px;
            color: #333;
          }
          &:hover {
            box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
          }
        }
        //   待付款样式
        .payment {
          .icon1 {
            background-position: 0 -197px;
          }
          &:hover .icon1 {
            background-position: 0 -247px;
          }
        }
        .sign_for {
          .icon2 {
            background-position: -80px -200px;
          }
          &:hover .icon2 {
            background-position: -80px -250px;
          }
        }
        .evaluate {
          .icon3 {
            background-position: -160px -200px;
          }
          &:hover .icon3 {
            background-position: -160px -250px;
          }
        }
        .after_sale {
          .icon4 {
            background-position: -240px -200px;
          }
          &:hover .icon4 {
            background-position: -240px -250px;
          }
        }
        .all_order {
          .icon5 {
            height: 41px;
            background-position: -320px -200px;
          }
          &:hover .icon5 {
            background-position: -320px -250px;
          }
        }
      }
      .empty {
        padding: 60px 0 90px;
        color: #999;
        text-align: center;
        &::before {
          content: "";
          display: inline-block;
          width: 70px;
          height: 70px;
          margin-right: 20px;
          vertical-align: middle;
          background: url(../../assets/front/sprite.png) no-repeat -430px -95px;
        }
      }
    }
  }
}
// 看看别人买什么模块样式
.container3 {
  width: 580px;
  margin-top: 25px;
  background-color: #fff;
  .buy {
    .buy_hd {
      border-bottom: 0;
      p {
        padding-left: 5px;
        color: #999;
      }
    }
    .buy_bd {
      height: 245px;
      padding: 0 20px 15px;
      .bd_list {
        width: 260px;
        float: left;
        margin-right: 10px;
        border: 1px solid #f0f3ef;
        .title {
          display: block;
          margin: 15px 0 5px;
          padding-left: 19px;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          color: #333;
        }
        .owner {
          padding: 5px 0 5px 17px;
          height: 14px;
          line-height: 14px;
          .nickname {
            margin-right: 10px;
            color: #2d87ec;
            &:hover {
              color: #c81623;
            }
            &:hover .icon-wtb-owner {
              background-position: -320px -80px;
            }
          }
          button {
            margin-right: 5px;
            background-color: #fff;
          }
          i {
            display: inline-block;
            width: 14px;
            height: 15px;
            margin-right: 4px;
            background: url(../../assets/front/sprite.png) no-repeat;
            vertical-align: top;
          }
          .icon-wtb-owner {
            background-position: -280px -80px;
          }
          .icon-wtb-praise {
            background-position: -360px -80px;
          }
          .icon-wtb-like {
            background-position: -440px -80px;
          }
        }
        .goodsImg {
          margin-top: 10px;
          img {
            width: 98px;
            height: 65px;
            margin-top: 10px;
          }
          .firstImg {
            float: left;
            width: 160px;
            height: 144px;
          }
        }
      }
    }
  }
}
.container4 {
  position: absolute;
  top: 205px;
  right: 0;
  width: 220px;
  // 我的关注
  .attention {
    background-color: #fff;
    .attention_bd {
      ul {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        text-align: center;
        a {
          line-height: 30px;
          .number {
            font-size: 16px;
          }
          .text {
            color: #666;
          }
        }
      }
    }
  }
  // 浏览历史
  .history {
    margin: 20px 0;
    background-color: #fff;
    .history_bd {
      height: 90px;
    }
  }
  // 生活服务
  .life_service {
    background-color: #fff;
    .life_hd {
      border-bottom: 0;
    }
    .life_bd {
      position: relative;
      padding: 0 10px 10px;
      overflow: hidden;
      &:hover .btn_left,
      &:hover .btn_right {
        display: block;
      }
      .btn_left,
      .btn_right {
        position: absolute;
        top: 50%;
        display: none;
        width: 20px;
        height: 40px;
        transform: translateY(-50%);
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.24);
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
      .btn_left {
        left: 0;
      }
      .btn_right {
        right: 0;
      }
      // 服务列表的样式
      ul.service_list {
        width: 410px;
        margin-top: 1px;
        li {
          float: left;
          width: 100px;
          height: 80px;
          margin-left: -1px;
          margin-top: -1px;
          text-align: center;
          border: 1px solid #eee;
          &:nth-child(2),
          &:nth-child(6),
          &:nth-child(10) {
            margin-right: 13px;
          }
          a {
            color: #9b8066;
            &:hover {
              color: #c81623;
            }
            .icon-service {
              display: block;
              width: 40px;
              height: 40px;
              margin: 10px auto 5px;
              background: url(../../assets/front/sprite.png) no-repeat;
            }
            .icon-service1 {
              background-position: -240px 0;
            }
            .icon-service2 {
              background-position: -280px 0;
            }
            .icon-service3 {
              background-position: -320px 0;
            }
            .icon-service4 {
              background-position: -360px 0;
            }
            .icon-service5 {
              background-position: -400px 0;
            }
            .icon-service6 {
              background-position: -440px 0;
            }
            .icon-service7 {
              background-position: 0 0;
            }
            .icon-service8 {
              background-position: -40px 0;
            }
            .icon-service9 {
              background-position: -80px 0;
            }
            .icon-service10 {
              background-position: -120px 0;
            }
            .icon-service11 {
              background-position: -160px 0;
            }
            .icon-service12 {
              background-position: -200px 0;
            }
            &:hover .icon-service {
              background-position-y: -40px;
            }
          }
        }
      }
      // 小点的样式
      ul.slick-dots {
        margin: 14px 82px 0;
        li {
          float: left;
          width: 8px;
          height: 8px;
          margin: 0 5px;
          border: 1px solid #aaa;
          border-radius: 50%;
        }
        .slick-active {
          background-color: #aaa;
        }
      }
    }
    // 动态添加列表移动的样式
    .move {
      margin-left: -210px;
    }
  }
}

// 主体部分标题样式
.header {
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #f0f3ef;
  h3 {
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
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
