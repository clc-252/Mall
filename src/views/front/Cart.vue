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
      <div class="cart_none" v-if="isNone">
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
      <div class="cart_list" v-if="!isNone" style="margin-top:20px">
        <!-- 标题 -->
        <div class="cart_list_title">
          <h2>全部商品&nbsp;{{cartList.length}}</h2>
          <!-- 配送地址 -->
          <div class="address">
            <span>配送至：</span>
            <!-- 使用v-distpicker地区选择器插件 -->
            <v-distpicker
              @selected="handleSelected"
              :province="select.province.value"
              :city="select.city.value"
              :area="select.area.value"
            ></v-distpicker>
          </div>
        </div>
        <!-- 表头 -->
        <el-row class="tab_title">
          <el-col :span="3">
            <input
              type="checkbox"
              class="item-ck"
              :checked="checkAll?'checked':''"
              @click="handleCheckAllChange"
            />全选
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
        <div class="cart_list_item" v-for="(item,index) in cartList" :key="index">
          <!-- 店名 -->
          <!-- <div class="shopname">FILA斐乐官方旗舰店</div> -->
          <!-- 商品信息 -->
          <div class="goods_info">
            <el-row>
              <!-- 是否选择 -->
              <el-col :span="1">
                <input
                  type="checkbox"
                  class="item-ck"
                  :checked="item.isChecked?'checked':''"
                  @click="handleCheckedGoodsChange(index)"
                />
              </el-col>
              <el-col :span="12" class="goods_detial">
                <a href="javascript:void(0);" @click="$router.push({ name: 'GoodsDetail',query:{id:item.productId} })">
                  <img :src="item.productIcon" alt />
                  <span class="goods_title">{{item.title}}</span>
                </a>
                <!-- 规格 -->
                <div class="specification">
                  <div class="spec_text">{{item.color}}</div>
                  <div class="size">{{item.size}}</div>
                </div>
              </el-col>
              <!-- 单价 -->
              <el-col :span="3">
                <span>¥{{item.price}}</span>
              </el-col>
              <!-- 数量 -->
              <el-col :span="3" class="goods_num">
                <div class="number">
                  <span class="reduce" @click="handleReduce(index)">-</span>
                  <input type="text" v-model="item.count" />
                  <span class="reduce" @click="handleAdd(index)">+</span>
                </div>
              </el-col>
              <!-- 小计 -->
              <el-col :span="3">
                <span>¥{{parseFloat(item.count*item.price).toFixed(2)}}</span>
              </el-col>
              <!-- 删除 -->
              <el-col :span="2" class="del">
                <span @click="handleDel(index)">删除</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!-- 结算部分 -->
      <div class="toolbar" v-if="!isNone">
        <div class="option">
          <input
            type="checkbox"
            class="item-ck"
            :checked="checkAll?'checked':''"
            @click="handleCheckAllChange"
          />全选
          <span class="delete" @click="handleDelCheck">删除选中商品</span>
          <span class="del_all" @click="handleDelAll">清空购物车</span>
        </div>
        <div class="payment">
          <span class="choose">
            已选择
            <i>{{allGoodsNum}}</i>件商品
          </span>
          <span class="all_price">
            总价：
            <i>¥{{totalPrice}}</i>
          </span>
          <a href="javascript:void(0);" @click="handleBuy">去结算</a>
        </div>
      </div>
    </div>
    <!-- 底部固定结算部分 -->
    <!-- <div class="cart-toolbar">
      <div class="toolbar_wrap w">
        <div class="option">
          <span class="delete">删除选中商品</span>
          <span class="del_all">清空购物车</span>
        </div>
        <div class="payment">
          <span class="choose">
            已选择
            <i>1</i>件商品
          </span>
          <span class="all_price">
            总价：
            <i>¥238.00</i>
          </span>
          <a href="#">去结算</a>
        </div>
      </div>
    </div>-->
    <!-- 底部 -->
    <CommentFooter></CommentFooter>
  </div>
</template>

<script>
// 引入公共部分
import CommentHeader from '@/components/CommentHeader.vue'
import CommentFooter from '@/components/CommentFooter.vue'

// 引入获取购物车商品的方法
// import { getGoodsByCart } from '@/apis/cart.js'
export default {
  data () {
    return {
      // 商品数量
      goodsNum: 1,
      // 购物车是否为空
      isNone: true,
      cartList: [],
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
      // 是否全选
      checkAll: true,
      // 全选的不确定状态
      isIndeterminate: true,
      // 记录商品是否选中
      state: 0,
      // 商品总数
      allGoodsNum: 0,
      // 总价格
      totalPrice: 0,
      // 暂时存放总价格
      allPriceNum: 0
    }
  },
  components: {
    CommentHeader,
    CommentFooter
  },
  methods: {
    // 增加商品数量
    handleAdd (index) {
      // 商品数量+1
      this.cartList[index].count++
      // 更新到本地存储
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
      // 重新计算总价和总商品
      // 数据初始化
      this.totalPrice = 0
      this.allGoodsNum = 0
      this.allPriceNum = 0
      this.cartList.forEach(v => {
        if (v.isChecked) {
          this.allGoodsNum += v.count
          this.allPriceNum += v.count * v.price
          this.totalPrice = parseFloat(this.allPriceNum).toFixed(2)
        }
      })
    },
    // 减少商品的数量
    handleReduce (index) {
      if (this.cartList[index].count === 1) {
        this.cartList[index].count = 1
        this.$message.warning('该宝贝数量已经不能再减少了哦~')
      } else {
        this.cartList[index].count--
        // 更新到本地存储
        localStorage.setItem('cartList', JSON.stringify(this.cartList))
        // 重新计算总价和总商品
        // 数据初始化
        this.totalPrice = 0
        this.allGoodsNum = 0
        this.allPriceNum = 0
        this.cartList.forEach(v => {
          if (v.isChecked) {
            this.allGoodsNum += v.count
            this.allPriceNum += v.count * v.price
            this.totalPrice = parseFloat(this.allPriceNum).toFixed(2)
          }
        })
      }
    },
    // 删除购物车中某个商品
    handleDel (index) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.cartList.splice(index, 1)
          localStorage.setItem('cartList', JSON.stringify(this.cartList))
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 选择配送地区完成后触发
    handleSelected (data) {
      console.log(data)
      // 将配送地址存到本地
      localStorage.setItem('address', JSON.stringify(data))
    },
    // 点击全选按钮触发
    handleCheckAllChange () {
      this.totalPrice = 0
      this.allGoodsNum = 0
      this.allPriceNum = 0
      if (this.checkAll) {
        // 此时为全选，再次点击就为全不选
        this.cartList.forEach((v, i) => {
          v.isChecked = false
        })
        // 修改checkAll的值
        this.checkAll = false
      } else {
        // 此时为全不选，再次点击就为全选
        this.cartList.forEach((v, i) => {
          v.isChecked = true
          // 计算应付总额和商品总件数
          this.allGoodsNum += v.count
          this.allPriceNum += v.count * v.price
          this.totalPrice = parseFloat(this.allPriceNum).toFixed(2)
        })
        // 修改checkAll的值
        this.checkAll = true
      }
    },
    // 点击单个商品时触发
    handleCheckedGoodsChange (index) {
      this.cartList[index].isChecked = !this.cartList[index].isChecked
      // 数据初始化
      this.state = 0
      this.totalPrice = 0
      this.allPriceNum = 0
      this.allGoodsNum = 0
      this.cartList.forEach(v => {
        if (!v.isChecked) {
          this.checkAll = false
        } else {
          this.state += 1
          if (this.state >= this.cartList.length) {
            this.checkAll = true
          }
          // 计算应付总额和商品总件数
          this.allGoodsNum += v.count
          this.allPriceNum += v.count * v.price
          this.totalPrice = parseFloat(this.allPriceNum).toFixed(2)
        }
      })
      localStorage.setItem('cartList', JSON.stringify(this.cartList))
    },
    // 删除选中的商品
    handleDelCheck () {
      this.$confirm('此操作将删除选中的商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let carts = []
        this.cartList.map(item => {
          if (!item.isChecked) {
            carts.push(item)
          }
          return carts
        })
        this.cartList = carts
        localStorage.setItem('cartList', JSON.stringify(carts))
        // 提示用户删除成功
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 清空购物车
    handleDelAll () {
      this.$confirm('此操作将清空购物车内所有的商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cartList = []
        this.isNone = true
        localStorage.setItem('cartList', JSON.stringify(this.cartList))
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 去结算
    handleBuy () {
      // 判断用户是否登陆
      let token = this.$store.state.user.userInfo.sessionToken
      if (token) {
        if (this.allGoodsNum === 0) {
          this.$message({
            message: '请至少选择一件商品',
            type: 'warning'
          })
        } else {
          let data = []
          this.cartList.map(v => {
            if (v.isChecked) {
              data.push(v)
            }
            return data
          })
          this.$router.push({ name: 'SubmitOrder' })
          console.log(data)

          localStorage.setItem('orderInfo', JSON.stringify(data))
        }
      } else {
        this.$confirm('您还没有登录，请先登录！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({ name: 'Login' })
        }).catch(() => {})
      }
    }
  },
  mounted () {
    // 将本地存储的购物车商品的数据取出
    this.cartList = JSON.parse(localStorage.getItem('cartList'))
    console.log(this.cartList)
    if (this.cartList) {
      this.isNone = false
      this.cartList.forEach(v => {
        if (v.isChecked) {
          this.allGoodsNum += v.count
          this.allPriceNum += v.count * v.price
          this.totalPrice = parseFloat(this.allPriceNum).toFixed(2)
        }
      })
    }

    // 如果本地中存储有配送地址
    if (JSON.parse(localStorage.getItem('address'))) {
      // 将本地数据中的配送地址取出,并存到select中
      this.select = JSON.parse(localStorage.getItem('address'))
    }

    // 判断单个商品当前的状态
    this.state = 0
    this.cartList.forEach(v => {
      if (!v.isChecked) {
        this.checkAll = false
      } else {
        this.state += 1
        if (this.state >= this.cartList.length) {
          this.checkAll = true
        }
      }
    })
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
  margin-bottom: 20px;
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
      .address {
        display: flex;
        align-items: center;
        // 修改地区选择器的样式
        /deep/.distpicker-address-wrapper select {
          padding: 0 0.75rem !important;
          height: 25px !important;
          font-size: 0.8rem !important;
        }
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
    .cart_list_item {
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
      .del {
        span {
          cursor: pointer;
          &:hover {
            color: #e2231a;
          }
        }
      }
    }
  }
  // 复选框样式
  .item-ck{
    vertical-align: middle;
    margin-right: 5px;
  }
  // 结算部分
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding-left: 10px;
    border: 1px solid #f0f0f0;
    .option {
      span {
        margin: 0 10px;
        cursor: pointer;
        &:hover {
          color: #e2231a;
        }
        &.del_all {
          font-weight: 700;
        }
      }
    }
    .payment {
      span {
        margin: 0 10px;
      }
      .choose i {
        color: #e2231a;
        font-family: verdana;
        font-weight: 700;
        margin: 0 3px;
      }
      .all_price i {
        font-size: 16px;
        color: #e2231a;
        font-weight: 700;
      }
      a {
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
// 底部固定结算部分
.cart-toolbar {
  position: sticky;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -1px 8px rgba(0, 1, 1, 0.08);
  .toolbar_wrap {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .option {
      span {
        margin: 0 10px;
        cursor: pointer;
        &:hover {
          color: #e2231a;
        }
        &.del_all {
          font-weight: 700;
        }
      }
    }
    .payment {
      span {
        margin: 0 10px;
      }
      .choose i {
        color: #e2231a;
        font-family: verdana;
        font-weight: 700;
        margin: 0 3px;
      }
      .all_price i {
        font-size: 16px;
        color: #e2231a;
        font-weight: 700;
      }
      a {
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
