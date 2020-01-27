<template>
  <div class="commentHeader">
    <!-- 快捷导航栏 -->
    <div class="shortcut">
      <div class="shortcut_nav w">
        <span>品优购欢迎您！</span>
        <ul class="nav-r">
          <li>
            <a href="#">您好，请登录</a> &nbsp;
            <a href="#" class="red">免费注册</a>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">我的订单</a>
          </li>
          <li class="spacer"></li>
          <li class="mylist">
            <a href="#">
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
            <a href="#">品优购会员</a>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#" class="red">
              企业采购
              <i class="el-icon-arrow-down"></i>
            </a>
          </li>
          <li class="spacer"></li>
          <li class="servicelist">
            <a href="#">
              客户服务
              <i class="el-icon-arrow-down"></i>
            </a>
            <div class="shortcut_server">
              <div class="customer_service clearfix">
                <p>客户</p>
                <ul>
                  <li>
                    <a href="#">帮助中心</a>
                  </li>
                  <li>
                    <a href="#">售后服务</a>
                  </li>
                  <li>
                    <a href="#">在线客服</a>
                  </li>
                  <li>
                    <a href="#">意见建议</a>
                  </li>
                  <li>
                    <a href="#">电话客服</a>
                  </li>
                  <li>
                    <a href="#">客服邮箱</a>
                  </li>
                  <li>
                    <a href="#">金融咨询</a>
                  </li>
                  <li>
                    <a href="#">全球售客服</a>
                  </li>
                </ul>
              </div>
              <div class="merchant_service">
                <p>商户</p>
                <ul>
                  <li>
                    <a href="#">合作招商</a>
                  </li>
                  <li>
                    <a href="#">成长中心</a>
                  </li>
                  <li>
                    <a href="#">商家后台</a>
                  </li>
                  <li>
                    <a href="#">商家帮助</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">
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
        <div class="logo">
          <a class="logo-bd" title="品优购" href="#" target="_blank"></a>
        </div>
        <!-- 搜索 -->
        <div class="searchArea">
          <!-- 搜索框 -->
          <div class="search">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
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
            <a href="#" target="_blank" class="mycar">
              <span>我的购物车</span>
              <i class="shopnum">0</i>
            </a>
          </div>
          <div class="shopcarlist">
            <i class="cart_empty"></i>
            购物车中还没有商品，赶紧选购吧！
          </div>
        </div>
        <!--  -->
        <div class="navitems">
          <ul class="navitems_group1">
            <li><a href="#" style="color:red">秒杀</a></li>
            <li><a href="#" style="color:red">优惠券</a></li>
            <li><a href="#">品牌闪购</a></li>
            <li><a href="#">服装城</a></li>
            <li><a href="#">美妆馆</a></li>
            <li><a href="#">品优超市</a></li>
            <li><a href="#">品优家电</a></li>
            <li><a href="#">品优国际</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
        &:hover {
          background-color: #fff;
          border: 1px solid #ccc;
          border-bottom: none;
          > .my {
            display: block;
          }
        }
      }
      .my {
        display: none;
        position: absolute;
        top: 30px;
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
        .el-icon-search {
          color: #fff;
          font-weight: 700;
          font-size: 15px;
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
    margin-top: 30px;
    .car {
      position: relative;
      z-index: 11;
      width: 130px;
      height: 34px;
      text-align: center;
      line-height: 34px;
      border: 1px solid #eee;
      &:hover {
        border-color: #c81623;
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
      padding: 10px 0;
      display: none;
      background: #fff;
      text-align: center;
      color: #999;
      .cart_empty {
        display: inline-block;
        width: 56px;
        height: 50px;
        background-image: url(//img11.360buyimg.com/uba/jfs/t3571/299/131233948/1117/a1196554/58004d6dN2927f0f7.png);
        vertical-align: middle;
      }
    }
  }
  //
  .navitems{
    // float: left;
    position: absolute;
    top: 90px;
    left: 350px;
    height: 40px;
    padding-top: 15px;
    line-height: 40px;
    .navitems_group1 li{
      float: left;
      padding: 0 20px;
      a{
        font-size: 15px;
        color: #666;
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
