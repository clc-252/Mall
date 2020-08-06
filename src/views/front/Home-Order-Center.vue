<template>
  <div class="order_center">
    <!-- 标题部分 -->
    <div class="order_title">
      <h3>我的订单</h3>
    </div>
    <!-- 主体内容部分 -->
    <div class="order_main">
      <!-- 头部 -->
      <div class="main_title">
        <ul>
          <li
            v-for="(item,index) in ['全部订单','待付款','待收货','待评价']"
            :key="index"
            :class="{tabActive:current===index}"
            @click="handleClick(index)"
          >
            <span>{{item}}</span>
            <i class="number"></i>
          </li>
        </ul>
      </div>
      <!-- 全部订单 -->
      <div v-if="current===0">
        <!-- 表头 -->
        <el-row class="table_title">
          <el-col :span="12">
            <span>订单详情</span>
          </el-col>
          <el-col :span="3">
            <span>收货人</span>
          </el-col>
          <el-col :span="3">
            <span>金额</span>
          </el-col>
          <el-col :span="3">
            <span>状态</span>
          </el-col>
          <el-col :span="3">
            <span>操作</span>
          </el-col>
        </el-row>
        <!-- 全部订单 -->
        <div class="all_order" v-for="(item,index) in orderList" :key="index">
          <!-- 表头 -->
          <div class="all_order_title">
            <span class="time">{{item.createdAt}}</span>
            <span class="order_num">
              订单号：
              <i class="num">{{item.billNum}}</i>
            </span>
            <!-- 删除按钮 -->
            <i class="el-icon-delete fr" @click="handleDel(index)"></i>
          </div>
          <!-- 订单详情 -->
          <div class="order_info">
            <el-row class="order_info_container" v-for="(value,index) in item.items" :key="index">
              <el-col :span="12" class="goods_info">
                <a href="#">
                  <img :src="value.coverIcon" alt />
                  <span class="goods_title">{{value.title}}</span>
                </a>
                <!-- 商品数量 -->
                <span class="goods_num">x{{value.count}}</span>
              </el-col>
              <!-- 收货人 -->
              <el-col :span="3" class="username">
                <span>{{item.name}}</span>
              </el-col>
              <!-- 价格 -->
              <el-col :span="3" class="price">
                <p class="unit_price">单价：¥{{value.price}}</p>
                <p class="all_price">
                  <span>总额：</span>
                  ¥{{item.totalPrice}}
                </p>
              </el-col>
              <!-- 订单状态 -->
              <el-col :span="3" class="status">
                <!-- 待付款 -->
                <div v-if="item.status===1">
                  <p>等待付款</p>
                  <a href="#">订单详情</a>
                </div>
                <!-- 待发货 -->
                <div v-if="item.status===2">
                  <p>待发货</p>
                  <a href="#">订单详情</a>
                </div>
                <!-- 待收货 -->
                <div v-if="item.status===3">
                  <p>等待收货</p>
                  <a href="#">订单详情</a>
                </div>
                <!-- 待评论 -->
                <div v-if="item.status===4">
                  <p>待评论</p>
                  <a href="#">订单详情</a>
                </div>
                <!-- 已完成 -->
                <div v-if="item.status===5">
                  <p>已完成</p>
                  <a href="#">订单详情</a>
                </div>
                <!-- 已取消 -->
                <div v-if="item.status===6">
                  <p>已取消</p>
                  <a href="#">订单详情</a>
                </div>
              </el-col>
              <!-- 订单操作 -->
              <el-col :span="3" class="operation">
                <!-- 已取消 -->
                <span class="buy_again" v-if="item.status===6">立即购买</span>
                <!-- 待付款 -->
                <div v-if="item.status===1">
                  <i class="el-icon-time">&nbsp;剩余0时28分</i>
                  <span class="to_pay">付款</span>
                  <span>取消订单</span>
                </div>
                <!-- 待收货 -->
                <div v-if="item.status===3">
                  <span @click="handleConfirm(index)">确认收货</span>
                  <span style="margin-top:5px">退货申请</span>
                </div>
                <!-- 待评价 -->
                <span class="go_comment" v-if="item.status===4" @click="handleToComment(index)">去评论</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!-- 待付款 -->
      <div v-if="current===1">
        <span
          v-if="!waitPayList.length"
          style="display:inline-block;font-size:16px;margin:30px auto;"
        >没有该状态的订单哦~</span>
        <div v-if="waitPayList.length">
          <!-- 表头 -->
          <el-row class="table_title">
            <el-col :span="12">
              <span>订单详情</span>
            </el-col>
            <el-col :span="3">
              <span>收货人</span>
            </el-col>
            <el-col :span="3">
              <span>金额</span>
            </el-col>
            <el-col :span="3">
              <span>状态</span>
            </el-col>
            <el-col :span="3">
              <span>操作</span>
            </el-col>
          </el-row>
          <div class="all_order" v-for="(item,index) in waitPayList" :key="index">
            <!-- 表头 -->
            <div class="all_order_title">
              <span class="time">{{item.createdAt}}</span>
              <span class="order_num">
                订单号：
                <i class="num">{{item.billNum}}</i>
              </span>
              <!-- 删除按钮 -->
              <i class="el-icon-delete fr" @click="handleDel(index)"></i>
            </div>
            <!-- 订单详情 -->
            <div class="order_info">
              <el-row class="order_info_container" v-for="(value,index) in item.items" :key="index">
                <el-col :span="12" class="goods_info">
                  <a href="#">
                    <img :src="value.coverIcon" alt />
                    <span class="goods_title">{{value.title}}</span>
                  </a>
                  <!-- 商品数量 -->
                  <span class="goods_num">x{{value.count}}</span>
                </el-col>
                <!-- 收货人 -->
                <el-col :span="3" class="username">
                  <span>{{item.name}}</span>
                </el-col>
                <!-- 价格 -->
                <el-col :span="3" class="price">
                  <p class="unit_price">单价：¥{{value.price}}</p>
                  <p class="all_price">
                    <span>总额：</span>
                    ¥{{item.totalPrice}}
                  </p>
                </el-col>
                <!-- 订单状态 -->
                <el-col :span="3" class="status">
                  <!-- 待付款 -->
                  <div>
                    <p>等待付款</p>
                    <a href="#">订单详情</a>
                  </div>
                </el-col>
                <!-- 订单操作 -->
                <el-col :span="3" class="operation">
                  <!-- 待付款 -->
                  <div>
                    <i class="el-icon-time">&nbsp;剩余0时28分</i>
                    <span class="to_pay">付款</span>
                    <span>取消订单</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <!-- 待收货 -->
      <div v-if="current===2">
        <span
          v-if="!waitDelivery.length"
          style="display:inline-block;font-size:16px;margin:30px auto;"
        >没有该状态的订单哦~</span>
        <div v-if="waitDelivery.length">
          <!-- 表头 -->
          <el-row class="table_title">
            <el-col :span="12">
              <span>订单详情</span>
            </el-col>
            <el-col :span="3">
              <span>收货人</span>
            </el-col>
            <el-col :span="3">
              <span>金额</span>
            </el-col>
            <el-col :span="3">
              <span>状态</span>
            </el-col>
            <el-col :span="3">
              <span>操作</span>
            </el-col>
          </el-row>
          <div class="all_order" v-for="(item,index) in waitDelivery" :key="index">
            <!-- 表头 -->
            <div class="all_order_title">
              <span class="time">{{item.createdAt}}</span>
              <span class="order_num">
                订单号：
                <i class="num">{{item.billNum}}</i>
              </span>
              <!-- 删除按钮 -->
              <i class="el-icon-delete fr" @click="handleDel(index)"></i>
            </div>
            <!-- 订单详情 -->
            <div class="order_info">
              <el-row class="order_info_container" v-for="(value,index) in item.items" :key="index">
                <el-col :span="12" class="goods_info">
                  <a href="#">
                    <img :src="value.coverIcon" alt />
                    <span class="goods_title">{{value.title}}</span>
                  </a>
                  <!-- 商品数量 -->
                  <span class="goods_num">x{{value.count}}</span>
                </el-col>
                <!-- 收货人 -->
                <el-col :span="3" class="username">
                  <span>{{item.name}}</span>
                </el-col>
                <!-- 价格 -->
                <el-col :span="3" class="price">
                  <p class="unit_price">单价：¥{{value.price}}</p>
                  <p class="all_price">
                    <span>总额：</span>
                    ¥{{item.totalPrice}}
                  </p>
                </el-col>
                <!-- 订单状态 -->
                <el-col :span="3" class="status">
                  <!-- 待收货 -->
                  <div v-if="item.status===3">
                    <p>等待收货</p>
                    <a href="#">订单详情</a>
                  </div>
                </el-col>
                <!-- 订单操作 -->
                <el-col :span="3" class="operation">
                  <!-- 待收货 -->
                  <div v-if="item.status===3">
                    <span>确认收货</span>
                    <span style="margin-top:5px">退货申请</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <!-- 待评价 -->
      <div v-if="current===3">
        <span
          v-if="!waitComment.length"
          style="display:inline-block;font-size:16px;margin:30px auto;"
        >没有该状态的订单哦~</span>
        <div v-if="waitComment.length">
          <!-- 表头 -->
          <el-row class="table_title">
            <el-col :span="12">
              <span>订单详情</span>
            </el-col>
            <el-col :span="3">
              <span>收货人</span>
            </el-col>
            <el-col :span="3">
              <span>金额</span>
            </el-col>
            <el-col :span="3">
              <span>状态</span>
            </el-col>
            <el-col :span="3">
              <span>操作</span>
            </el-col>
          </el-row>
          <div class="all_order" v-for="(item,index) in waitComment" :key="index">
            <!-- 表头 -->
            <div class="all_order_title">
              <span class="time">{{item.createdAt}}</span>
              <span class="order_num">
                订单号：
                <i class="num">{{item.billNum}}</i>
              </span>
              <!-- 删除按钮 -->
              <i class="el-icon-delete fr" @click="handleDel(index)"></i>
            </div>
            <!-- 订单详情 -->
            <div class="order_info">
              <el-row class="order_info_container" v-for="(value,index) in item.items" :key="index">
                <el-col :span="12" class="goods_info">
                  <a href="#">
                    <img :src="value.coverIcon" alt />
                    <span class="goods_title">{{value.title}}</span>
                  </a>
                  <!-- 商品数量 -->
                  <span class="goods_num">x{{value.count}}</span>
                </el-col>
                <!-- 收货人 -->
                <el-col :span="3" class="username">
                  <span>{{item.name}}</span>
                </el-col>
                <!-- 价格 -->
                <el-col :span="3" class="price">
                  <p class="unit_price">单价：¥{{value.price}}</p>
                  <p class="all_price">
                    <span>总额：</span>
                    ¥{{item.totalPrice}}
                  </p>
                </el-col>
                <!-- 订单状态 -->
                <el-col :span="3" class="status">
                  <!-- 待付款 -->
                  <div v-if="item.status===4">
                    <p>已收货</p>
                    <a href="#">订单详情</a>
                  </div>
                </el-col>
                <!-- 订单操作 -->
                <el-col :span="3" class="operation">
                  <span class="go_comment" v-if="item.status===4" @click="handleToComment(index)">去评论</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 热卖单品部分 -->
    <div class="hot">
      <div class="hot_title">
        <h3>热卖单品</h3>
        <div>
          <span
            v-for="(item,index) in ['1','2','3']"
            :key="index"
            @mousemove="handleHot(index)"
            :class="{hotActive:hotCurrent===index}"
          >{{item}}</span>
        </div>
      </div>
      <div class="hot_list">
        <ul class="hot_item">
          <li v-for="(item,index) in hostList" :key="index">
            <a href="#">
              <!-- 图片 -->
              <img :src="item.imgSrc" />
              <!-- 商品信息 -->
              <div class="goods_info">
                <p class="title">{{item.title}}</p>
                <p class="price">
                  <span>¥</span>
                  {{item.price}}
                </p>
                <p class="comment">(已有{{item.comment}}人评价)</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderList, delOrder, updateOrderStatus } from '@/apis/order.js'
export default {
  inject: ['reload'],
  data () {
    return {
      // 当前tab栏选中的索引
      current: 0,
      // 热卖单品的数据
      hostList: [
        {
          imgSrc: require('../../assets/front/hot-goods1.jpg'),
          title:
            '华为荣耀手表MagicWatch2运动智能手表5蓝牙通话男女成人电话NFC手环gt 【表盘46mm】运动款-碳石黑',
          price: 1199.0,
          comment: 1703
        },
        {
          imgSrc: require('../../assets/front/hot-goods2.jpg'),
          title:
            'Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G手机 双卡双待',
          price: 4999.0,
          comment: 2216384
        },
        {
          imgSrc: require('../../assets/front/hot-goods3.jpg'),
          title:
            '日本 城野医生(Dr.Ci.Labo)毛孔收敛爽肤水100ml 收缩毛孔补水保湿化妆水 男士健康水护肤水女',
          price: 109.0,
          comment: 2164
        },
        {
          imgSrc: require('../../assets/front/hot-goods4.jpg'),
          title:
            '小米10 双模5G  骁龙865  1亿像素8K电影相机  对称式立体声 8GB+256GB 钛银黑 拍照智能新品游戏手机',
          price: 4299.0,
          comment: 42164
        },
        {
          imgSrc: require('../../assets/front/hot-goods5.jpg'),
          title:
            'FILA 斐乐官方 ADE老爹鞋女学生韩版休闲鞋 2020春新款复古跑鞋运动鞋 雪丁香-LS 37.5',
          price: 749.0,
          comment: 1487
        },
        {
          imgSrc: require('../../assets/front/hot-goods6.jpg'),
          title: '阿芙AFU护肤品套装荷荷巴补水保湿凝润5件套礼盒 深层补水保湿',
          price: 209.0,
          comment: 57755
        },
        {
          imgSrc: require('../../assets/front/hot-goods7.jpg'),
          title:
            'CONVERSE匡威官方 Renew  低帮男女同款帆布鞋 166744C 薄荷绿/166745C 37/4.5',
          price: 399.0,
          comment: 227
        },
        {
          imgSrc: require('../../assets/front/hot-goods8.jpg'),
          title:
            'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待',
          price: 5999.0,
          comment: 1395454
        },
        {
          imgSrc: require('../../assets/front/hot-goods9.jpg'),
          title: 'Apple 苹果 iPhone 11 手机 紫色 全网通128G',
          price: 5688.0,
          comment: 4587
        }
      ],
      hotCurrent: 0,
      // 订单列表
      orderList: [],
      // 待付款
      waitPayList: [],
      // 待收货
      waitDelivery: [],
      // 待评论
      waitComment: []
    }
  },
  methods: {
    // 切换tab栏时触发
    handleClick (index) {
      this.current = index
    },
    // 点击删除的图标删除该订单
    handleDel (index) {
      console.log(index)

      // 提示用户是否确定删除
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      })
        .then(async () => {
          // 获取id和token值
          let id = this.$store.state.user.userInfo.id
          let orderId = this.orderList[index].id
          let token = this.$store.state.user.userInfo.sessionToken
          let res = await delOrder(id, orderId, token)
          console.log(res)
          this.orderList.splice(index, 1)
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
    // 热卖单品模块
    handleHot (index) {
      this.hotCurrent = index
      if (index === 0) {
        document.querySelector('.hot_item').classList.remove('ul-active')
        document.querySelector('.hot_item').classList.remove('ul-active2')
      } else if (index === 1) {
        document.querySelector('.hot_item').classList.add('ul-active')
        document.querySelector('.hot_item').classList.remove('ul-active2')
      } else {
        document.querySelector('.hot_item').classList.add('ul-active2')
      }
    },
    // 点击确认按钮
    handleConfirm (index) {
      this.$confirm('是否确认收货？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let data = {
          memId: this.$store.state.user.userInfo.id,
          orderId: this.orderList[index].id,
          status: 4
        }
        let token = this.$store.state.user.userInfo.sessionToken
        let res = await updateOrderStatus(data, token)
        console.log(res)

        if (res.status === 200) {
          this.$message({
            message: '确认收货成功',
            type: 'success'
          })
          // 刷新页面
          this.reload()
        }
      }).catch(() => {})
    },
    // 去评论按钮
    handleToComment (index) {
      console.log(index)
      console.log(this.waitComment[index])
    }
  },
  // 监听
  async mounted () {
    this.current = Number(this.$route.query.tabCurrent)
    // 获取id和token值
    let id = this.$store.state.user.userInfo.id
    let token = this.$store.state.user.userInfo.sessionToken
    let res = await getOrderList(id, token)
    console.log(res)
    this.orderList = res.data.results
    this.orderList.map(v => {
      v.totalPrice = parseFloat((v.totalPrice - v.freightFee) / 100).toFixed(2)
      v.createdAt = this.$moment(v.createdAt).format('YYYY-MM-DD hh:mm:ss')
      v.items.map(value => {
        value.price = parseFloat(value.price / 100).toFixed(2)
      })
      if (v.status === 1) {
        this.waitPayList.push(v)
      } else if (v.status === 3) {
        this.waitDelivery.push(v)
      } else if (v.status === 4) {
        this.waitComment.push(v)
      }
    })
    console.log(this.orderList)
    console.log(this.waitPayList)
    console.log(this.waitDelivery)
    console.log(this.waitComment)
  }
}
</script>

<style lang='less' scoped>
.order_title {
  height: 58px;
  line-height: 58px;
  padding-left: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
.order_main {
  background-color: #fff;
  padding: 0 15px 15px;
  // 头部tab栏
  .main_title {
    padding: 15px 0;
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
  // 表头
  .table_title {
    height: 34px;
    background-color: #f5f5f5;
    text-align: center;
    line-height: 34px;
  }
  // 全部订单的样式
  .all_order {
    margin-top: 15px;
    border: 1px solid #e5e5e5;
    // 表头样式
    .all_order_title {
      background: #f5f5f5;
      height: 30px;
      line-height: 30px;
      color: #aaa;
      font-size: 14px;
      span {
        display: inline-block;
        margin: 0 15px;
        i.num {
          color: #333;
        }
      }
      i.el-icon-delete {
        margin-right: 15px;
        font-size: 17px;
        color: #333;
        line-height: 30px;
        &:hover {
          color: #e4393c;
        }
      }
    }
    // 订单详情
    .order_info {
      // 商品详情
      .goods_info {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-right: 1px solid #e5e5e5;
        img {
          width: 62px;
          height: 62px;
          margin-right: 15px;
          border: 1px solid #efefef;
          object-fit: cover;
        }
        .goods_title {
          display: inline-block;
          width: 240px;
          line-height: 20px;
          color: #333;
        }
        .goods_num {
          color: #aaa;
        }
      }
      // 收货人
      .username {
        display: inline-block;
        padding: 15px;
        height: 93px;
        border-right: 1px solid #e5e5e5;
        color: #333;
        .el-icon-user {
          font-size: 16px;
          color: #aaa;
          margin: 0 5px;
        }
      }
      // 价格
      .price {
        padding: 10px 5px 0 10px;
        height: 93px;
        border-right: 1px solid #e5e5e5;
        color: #aaa;
        p {
          line-height: 20px;
          &.all_price {
            margin-top: 5px;
            color: #333;
            font-size: 13px;
            font-weight: 600;
            font-family: verdana;
            text-align: center;
            span {
              display: block;
            }
          }
        }
      }
      // 订单状态
      .status {
        padding: 15px 0;
        height: 93px;
        border-right: 1px solid #e5e5e5;
        text-align: center;
        line-height: 22px;
        a {
          color: #333;
          &:hover {
            color: #e4393c;
          }
        }
      }
      // 待付款时的订单状态
      .wait_status {
        p {
          color: orangered;
        }
      }
      // 订单的相关操作
      .operation {
        padding: 15px;
        text-align: center;
        span {
          display: block;
          width: 70px;
          height: 25px;
          border: 1px solid #e5e5e5;
          background-color: #f5f5f5;
          border-radius: 2px;
          line-height: 23px;
          color: #333;
          cursor: pointer;
          &.go_comment {
            margin-bottom: 10px;
          }
          &:hover {
            color: #e4393c;
            border-color: #e4393c;
            background-color: #fff;
          }
        }
      }
      // 待付款的订单操作
      .wait_operation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-top: 15px;
        height: 75px;
        .el-icon-time,
        .to_pay {
          color: #e4393c;
        }
        span {
          cursor: pointer;
        }
        .to_pay {
          display: inline-block;
          width: 78px;
          border: 1px solid #e4393c;
          line-height: 18px;
          border-radius: 2px;
        }
      }
    }
  }
}

// 热卖单品的样式
.hot {
  margin-top: 30px;
  padding: 15px;
  background-color: #fff;
  .hot_title {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    span {
      display: inline-block;
      width: 26px;
      height: 26px;
      margin-right: 10px;
      border-radius: 50%;
      text-align: center;
      line-height: 25px;
      border: 1px solid #ddd;
    }
    .hotActive {
      background-color: #e4393c;
      color: #fff;
      border-color: #e4393c;
    }
  }
}
// 商品列表
.hot_list {
  overflow: hidden;

  ul {
    display: flex;
    justify-content: space-between;
    &.ul-active {
      margin-left: -785px;
    }
    &.ul-active2 {
      margin-left: -1570px;
    }
    // 商品图片的样式
    li {
      margin-right: 15px;
      margin-top: 20px;
      padding-bottom: 20px;
      a img {
        width: 182px;
        height: 182px;
        margin-bottom: 5px;
        object-fit: cover; // 防止图片变形
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        border-color: #e9e9e9;
        box-shadow: 0 0 2px 2px #f8f8f8;
      }
      &:last-child {
        margin-right: 600px;
      }
    }
    // 商品详情的样式
    .goods_info {
      padding: 0 10px;
      .title {
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .price {
        color: #e4393c;
        font-size: 18px;
        font-weight: 700;
        margin-top: 5px;
        span {
          font-size: 16px;
        }
      }
      .comment {
        color: #005ea7;
        line-height: 24px;
      }
    }
  }
}
</style>
