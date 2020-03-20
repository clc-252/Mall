// 购物车页面
<template>
  <div class="cart">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <!-- 购物车标题 -->
    <h2 class="cart_title">购物车</h2>
    <!-- 主体内容 -->
    <div class="cart_main w">
      <!-- 当购物车为空的布局 -->
      <div class="cart_none">
        <img src="../../assets/front/no-login-icon.png" alt />
        <div class="tip">
          <p>购物车内暂时没有商品，登录后将显示您之前加入的商品</p>
          <a href="http://localhost:8080/#/front/login" class="go_login">登录</a>
          <a href="http://localhost:8080/#/" class="go_shopping">
            去购物
            <i>></i>
          </a>
        </div>
      </div>
      <!-- 当购物车不为空的时候的布局 -->
      <div class="cart_list">
        <!-- 标题 -->
        <div class="cart_list_title">
          <h2>全部商品&nbsp;2</h2>
          <!-- 配送地址 -->
          <div class="address">
            <span>配送至：</span>
          </div>
        </div>
        <!-- 表头 -->
        <el-row class="tab_title">
          <el-col :span="3">
            <span>全选</span>
          </el-col>
          <el-col :span="10">
            <span>商品</span>
          </el-col>
          <el-col :span="3">
            <span>单价</span>
          </el-col>
          <el-col :span="3">
            <span>数量</span>
          </el-col>
          <el-col :span="3">
            <span>小计</span>
          </el-col>
          <el-col :span="2">
            <span>操作</span>
          </el-col>
        </el-row>
        <div class="cart_list_item">
          <!-- 店名 -->
          <div class="shopname">FILA斐乐官方旗舰店</div>
          <!-- 商品信息 -->
          <div class="goods_info">
            <el-row>
              <el-col :span="13" class="goods_detial">
                <a href="#">
                  <img
                    src="https://img10.360buyimg.com/cms/s80x80_jfs/t1/96878/23/14986/178539/5e6a5bc5E02eb75da/48b3511ccef09ab3.jpg"
                    alt
                  />
                  <span
                    class="goods_title"
                  >FILA女鞋 斐乐官方 新品休闲鞋老爹鞋女学生韩版复古跑鞋潮流小白鞋运动鞋 白/富贵橙-MO-F12W933711F 35.5</span>
                </a>
                <!-- 规格 -->
                <div class="specification">
                  <div class="spec_text">白/富贵橙-MO-F12W933711F</div>
                  <div class="size">35.5</div>
                </div>
              </el-col>
              <!-- 单价 -->
              <el-col :span="3">
                <span>¥699.00</span>
              </el-col>
              <!-- 数量 -->
              <el-col :span="3" class="goods_num">
                <div class="number">
                  <span class="reduce" @click="handleReduce">-</span>
                  <input type="text" v-model="goodsNum" />
                  <span class="reduce" @click="handleAdd">+</span>
                </div>
              </el-col>
              <!-- 小计 -->
              <el-col :span="3">
                <span>¥699.00</span>
              </el-col>
              <!-- 删除 -->
              <el-col :span="2" class="del">
                <span @click="handleDel">删除</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部固定结算部分 -->
    <div class="cart-toolbar">
      <div class="toolbar_wrap w">
        <div class="option">
          <span class="delete">删除选中商品</span>
          <span class="del_all">清空购物车</span>
        </div>
        <div class="payment">
          <span class="choose">已选择<i>1</i>件商品</span>
          <span class="all_price">总价：<i>¥238.00</i></span>
          <a href="#">去结算</a>
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
  data () {
    return {
      // 商品数量
      goodsNum: 1
    }
  },
  components: {
    CommentHeader,
    CommentFooter
  },
  methods: {
    // 增加商品数量
    handleAdd () {
      this.goodsNum++
      // this.notAllawed = false
    },
    // 减少商品的数量
    handleReduce () {
      if (this.goodsNum === 1) {
        // this.notAllawed = true
        this.goodsNum = 1
        this.$message.warning('该宝贝数量已经不能再减少了哦~')
      } else {
        this.goodsNum--
        // this.notAllawed = false
      }
    },
    // 删除购物车中某个商品
    handleDel () {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  background-color: #fff;
}
// 重新定义头部样式
/deep/.header {
  height: auto; // 高度自适应
  border-bottom: none;
  .hotwords,
  .shopcar,
  .navitems {
    display: none;
  }
  .w {
    .searchArea {
      float: right;
      .search {
        width: auto; // 高度自适应
        .el-input__inner {
          width: 270px;
          height: 25px;
        }
      }
    }
  }
}
.cart_title {
  position: absolute;
  top: 80px;
  left: 370px;
  font-weight: normal;
  font-size: 24px;
}
// 主体内容
.cart_main {
  // 购物车为空时的布局的样式
  .cart_none {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    img {
      margin-right: 30px;
    }
    .tip {
      font-size: 14px;
      color: #333;
      line-height: 26px;
      .go_login {
        display: inline-block;
        width: 44px;
        height: 24px;
        margin-right: 10px;
        color: #fff;
        background-color: #e64447;
        border-radius: 4px;
        text-align: center;
        line-height: 24px;
        font-size: 12px;
      }
      .go_shopping {
        color: #005ea7;
        font-size: 12px;
        &:hover {
          color: #f30213;
        }
        i {
          font-family: consolas;
          font-size: 14px;
        }
      }
    }
  }
  // 购物车不为空时的布局的样式
  .cart_list {
    .cart_list_title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      h2 {
        color: #e2231a;
        line-height: 26px;
      }
    }
    // 表头样式
    .tab_title {
      height: 35px;
      line-height: 25px;
      margin: 0 0 10px;
      padding: 5px 10px;
      background: #f3f3f3;
      border: 1px solid #e9e9e9;
    }
    .cart_list_item{
      padding: 10px 0;
      margin-bottom: 10px;
      border-bottom: 1px solid #e9e9e9;
    }
    // 商品信息
    .goods_info {
      padding: 0 10px;
      .goods_detial {
        display: flex;
        a {
          display: flex;
          justify-content: space-between;
        }
        img {
          width: 80px;
          height: 80px;
          margin-right: 10px;
          border: 1px solid #eee;
          object-fit: cover;
        }
        .goods_title {
          display: inline-block;
          width: 250px;
          height: 40px;
          margin-right: 20px;
          line-height: 20px;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        // 规格
        .spec_text {
          width: 100px;
          height: 20px;
          line-height: 20px;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .size {
          line-height: 20px;
        }
      }
      // 商品数量
      .goods_num {
        .number {
          display: flex;
          width: 80px;
          border: 1px solid #cacbcb;
          span {
            display: inline-block;
            width: 16px;
            height: 18px;
            line-height: 16px;
            text-align: center;
            cursor: pointer;
          }
          input {
            width: 42px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border-left: 1px solid #cacbcb;
            border-right: 1px solid #cacbcb;
          }
        }
      }
      // 删除
      .del{
        span{
          cursor: pointer;
          &:hover{
            color: #e2231a;
          }
        }
      }
    }
  }
}
// 底部固定结算部分
.cart-toolbar{
  position: sticky;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -1px 8px rgba(0,1,1,.08);
  .toolbar_wrap{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .option{
      span{
        margin: 0 10px;
        cursor: pointer;
        &:hover{
          color:#e2231a;
        }
        &.del_all{
          font-weight: 700;
        }
      }
    }
    .payment{
      span{
        margin: 0 10px;
      }
      .choose i{
            color: #E2231A;
    font-family: verdana;
    font-weight: 700;
    margin: 0 3px;
      }
      .all_price i{
    font-size: 16px;
    color: #E2231A;
    font-weight: 700;
      }
      a{
    display: inline-block;
    width: 94px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    background: #e54346;
    font-weight: 700;
      }
    }
  }
}
</style>
