<template>
  <div class="home">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <!-- 我的品优购导航 -->
    <div class="nav">
      <div class="title">我的品优购</div>
      <!-- 导航 -->
      <div class="nav_item">
        <ul>
          <li>
            <span @click="$router.push({name: 'HomeIndex'})">首页</span>
            <i class="el-icon-arrow-down"></i>
            <div class="service_item trilateral">
              <a
                href="javascript:void(0)"
                @click="$router.push({path: 'Homeordercenter',query:{tabCurrent:0}})"
              >订单中心</a>
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeAttention'})">我的关注</a>
              <a href="#">我的钱包</a>
              <a href="#">客户服务</a>
              <a href="#">特色业务</a>
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeUser',query:{tabCurrent:0}})">设置</a>
            </div>
          </li>
          <li>
            <span>账户设置</span>
            <i class="el-icon-arrow-down"></i>
            <div class="setting trilateral">
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeUser',query:{tabCurrent:0}})">个人信息</a>
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeUser',query:{tabCurrent:1}})">收货地址</a>
            </div>
          </li>
          <li>
            <span>消息</span>
            <i class="el-icon-arrow-down"></i>
            <div class="information trilateral">
              <a href="#">系统消息</a>
              <a href="#">消息设置</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主体部分 -->
    <div class="main">
      <div class="w clearfix">
        <!-- 左侧菜单导航栏 -->
        <div class="menu_nav">
          <!-- 订单中心 -->
          <dl class="order_center">
            <dt>订单中心</dt>
            <dd>
              <a
                href="javascript:void(0)"
                @click="$router.push({path: '/front/home/Homeordercenter',query:{tabCurrent:0}})"
              >我的订单</a>
            </dd>
            <dd>
              <a href="#">评价晒单</a>
            </dd>
          </dl>
          <!-- 我的关注 -->
          <dl class="attention">
            <dt>我的关注</dt>
            <dd>
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeAttention'})">关注商品</a>
            </dd>
            <dd>
              <a href="#">关注店铺</a>
            </dd>
          </dl>
          <!-- 我的钱包 -->
          <dl class="wallet">
            <dt>我的钱包</dt>
            <dd>
              <a href="#">优惠券</a>
            </dd>
            <dd>
              <a href="#">京豆</a>
            </dd>
            <dd>
              <a href="#">余额</a>
            </dd>
          </dl>
          <!-- 客户服务 -->
          <dl class="service">
            <dt>客户服务</dt>
            <dd>
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeRefund'})">返修退换货</a>
            </dd>
            <dd>
              <a href="#">意见建议</a>
            </dd>
          </dl>
          <!-- 特色业务 -->
          <!-- <dl class="feature">
            <dt>特色业务</dt>
            <dd>
              <a href="//le.jd.com/myBusinessHall" target="_self">我的营业厅</a>
            </dd>
            <dd>
              <a href="//mobile.jd.com/yyswt/myjd.do" target="_self">京东通信</a>
            </dd>
            <dd>
              <a href="//ptrade.jd.com/getNomalToJnActionList.html" target="_self">节能补贴</a>
            </dd>
            <dd>
              <a href="//yiyaorx.jd.com/process_list.action" target="_self">医疗服务</a>
            </dd>
            <dd>
              <a href="//datawallet.jd.com/profile.html" target="_self">流量加油站</a>
            </dd>
            <dd class="more">
              <em>更多></em>
              <div class="more_menu trilateral">
                <a href="//abdestate.jd.com/myjd" target="_self">海外房产预约</a>
                <a href="https://home.jd.hk" target="_self">我的京东国际</a>
                <a href="//create.jd.com/index.html" target="_self">京东质造</a>
                <a href="//jdcs.jd.com/?entry=jd_web_jimi_home" target="_self">智能客服</a>
                <a href="//freeprinter.jd.com/pc.html#/service" target="_self">耗材自动递送</a>
                <a href="//jipiao.jd.com/" target="_blank">京东机票</a>
              </div>
            </dd>
          </dl>-->
          <!-- 设置个人信息 -->
          <dl class="my_info">
            <dt>设置</dt>
            <dd>
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeUser',query:{tabCurrent:0}})">个人信息</a>
            </dd>
            <dd>
              <a href="javascript:void(0)" @click="$router.push({name: 'HomeUser',query:{tabCurrent:1}})">收货地址</a>
            </dd>
          </dl>
        </div>
        <!-- 右侧内容显示区域 -->
        <div class="container">
          <router-view></router-view>
        </div>
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
export default {
  // 注册
  components: {
    CommentHeader,
    CommentFooter
  }
}
</script>

<style lang='less' scoped>
// 重新定义头部的样式
/deep/.commentHeader {
  .header {
    height: 90px;
    border-bottom: 0;
    .logo {
      height: 90px;
    }
    .logo-bd {
      margin: 18px auto;
    }
    .searchArea {
      margin-left: 450px;
      margin-top: 30px;
      .search {
        width: 210px;
      }
      .hotwords {
        display: none;
      }
    }
    .navitems {
      display: none;
    }
    .shopcar {
      .shopcarlist {
        display: none;
      }
      &:hover .shopcarlist {
        display: none;
      }
      &:hover .car {
        border-color: #e1251b;
      }
    }
  }
}
// 我的品优购导航
.nav {
  position: absolute;
  top: 70px;
  left: 365px;
  width: 430px;
  background-color: #fff;
  .title {
    font-size: 19px;
    color: #333;
  }
  .nav_item {
    margin-left: 55px;
    margin-top: 3px;
    font-size: 16px;
    cursor: default;
    ul li {
      padding: 0 10px 20px;
      float: left;
      &:first-child {
        color: #df3028;
      }
      &:hover {
        color: #df3028;
      }
      &:hover .service_item,
      &:hover .setting,
      &:hover .information {
        display: block;
      }
      .service_item,
      .setting,
      .information {
        position: absolute;
        top: 35px;
        left: 130px;
        display: none;
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
        z-index: 2;
        a {
          display: block;
          font-size: 12px;
          line-height: 25px;
        }
        &::before,
        &::after {
          height: 15px;
        }
        &::before {
          left: 51%;
          top: -5px;
          width: 15px;
        }
        &::after {
          width: 28px;
          top: 0;
          left: 43%;
        }
        &:hover {
          display: block;
        }
      }
      .setting {
        left: 212px;
      }
      .information {
        left: 298px;
      }
    }
  }
}
// 主体部分
.main {
  padding-bottom: 60px;
  // 左侧菜单导航栏
  .menu_nav {
    float: left;
    width: 170px;
    background-color: #fff;
    dl {
      padding: 15px 20px;
      border-bottom: 1px solid #f3f3f3;
      color: #333;
      line-height: 32px;
      dt {
        font-size: 16px;
        font-weight: 700;
      }
      dd {
        font-size: 14px;
      }
      dd.more {
        position: relative;
        .more_menu {
          position: absolute;
          left: 60px;
          top: 50%;
          display: none;
          width: 110px;
          height: 200px;
          margin-top: -100px;
          padding: 10px 10px 10px 20px;
          font-size: 12px;
          z-index: 11;
          background-color: #fff;
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
          &::before,
          &::after {
            width: 20px;
          }
          &::before {
            left: 5px;
            top: 48%;
            height: 15px;
          }
          &::after {
            height: 50px;
            left: 11px;
            top: 45%;
          }
          a {
            display: block;
          }
        }
        &:hover .more_menu {
          display: block;
        }
      }
    }
  }
  // 右侧主体部分
  .container {
    float: left;
    width: 830px;
    margin-top: 25px;
    padding-right: 0;
  }
}

// 使用伪元素制作三角形效果
.trilateral::before,
.trilateral::after {
  content: "";
  position: absolute;
  z-index: 2;
  margin-left: -10px;
  background-color: #fff;
}
.trilateral::before {
  transform: rotate(45deg);
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
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
