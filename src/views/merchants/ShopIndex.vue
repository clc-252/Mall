<template>
  <!-- 后台管理系统子首页 -->
  <div class="shop_index">
    <!-- 数据统计展示 -->
    <div class="show">
      <el-row>
        <!-- 订单 -->
        <el-col :span="6">
          <div class="box order">
            <i class="el-icon-s-order"></i>
            <span class="title">订单</span>
            <p class="data">{{orderNum}}</p>
            <div class="compare">
              <span class="addNum">+1</span>
              <span>新增订单</span>
            </div>
          </div>
        </el-col>
        <!-- 收入 -->
        <el-col :span="6">
          <div class="box income">
            <i class="el-icon-wallet"></i>
            <span class="title">收入</span>
            <p class="data">${{allIncome|NumFormat}}</p>
            <div class="compare">
              <span class="addNum">+100</span>
              <span>新增收入</span>
            </div>
          </div>
        </el-col>
        <!-- 商品数量 -->
        <el-col :span="6">
          <div class="box goods">
            <i class="el-icon-goods"></i>
            <span class="title">商品数量</span>
            <p class="data">{{goodsNum}}件</p>
            <div class="compare">
              <span class="addNum">+0</span>
              <span>商品上新</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="box users">
            <i class="el-icon-s-custom"></i>
            <span class="title">会员</span>
            <p class="data">22位</p>
            <div class="compare">
              <span class="addNum">+0</span>
              <span>新增会员</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 数据展示 -->
    <div id="app">
      <div id="show_data"></div>
    </div>
    <!-- 最新消息 -->
    <div class="new">
      <!-- 最新订单 -->
      <div class="new_order">
        <span class="title">最新订单</span>
        <div class="order_list">
          <div class="order_item" v-for="(item,index) in newOrderList" :key="index">
            <div class="info">
              <span class="name">{{item.name}}</span>
              <span class="date">{{item.date}}</span>
            </div>
            <div class="order_info">
              <div class="billNum">
                <strong>订单号：</strong>
                {{item.billNum}}
              </div>
              <div class="totalPrice">
                <strong>订单金额：</strong>
                ￥{{item.totalPrice/100}}
              </div>
              <div class="goodsTitle" v-for="(value,index) in item.items" :key="index">
                <strong>商品信息：</strong>
                <p style="padding-left:10px">{{value.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新评论 -->
      <div class="new_comment">
        <span class="title">最新评论</span>
        <div class="comment_list">
          <div class="comment_item" v-for="(item,index) in newCommentList" :key="index">
            <div class="info">
              <span class="name">{{item.username}}</span>
              <span class="date">{{item.date}}</span>
            </div>
            <div class="comment_info">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserOrderList } from '@/apis/order.js'
import { getGoodsListData, getCommentList } from '@/apis/goods.js'
export default {
  name: 'app',
  data () {
    return {
      // 存储订单总数的变量
      orderNum: 0,
      // 存储旧订单数据的变量
      // oldOrderNum: 0,
      // 总收入
      allIncome: 0,
      // 商品数量
      goodsNum: 0,
      // 存储最新订单的数组
      newOrderList: [],
      // 存储最新品评论的数组
      newCommentList: []
    }
  },
  methods: {
    // echarts
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('show_data'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '销售数据统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['订单', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '60',
          containLabel: true,
          height: '300'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['January', '', 'March', '', 'May', '', 'July', '', '', 'October']
        },
        yAxis: {
          type: 'value',
          max: 100,
          min: -100,
          interval: 20
        },
        series: [
          {
            name: '订单',
            type: 'line',
            data: [-68, 41, 86, -49, 2, 65, -64, 86, -49, 2],
            smooth: true,
            symbol: 'circle',
            symbolSize: '8',
            lineStyle: {
              type: 'dashed',
              color: '#3ec396'
            },
            itemStyle: {
              normal: {
                color: '#3ec396' // 拐点颜色
              }
            }
          },
          {
            name: '收入',
            type: 'line',
            data: [44, 60, -33, 58, -4, 57, -89, 60, -33, 58],
            smooth: true,
            symbol: 'circle',
            symbolSize: '8',
            lineStyle: {
              color: '#5d6dc3'
            },
            itemStyle: {
              normal: {
                color: '#5d6dc3' // 拐点颜色
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  async mounted () {
    // echarts
    this.drawChart()

    // 获取订单数量
    let res = await getUserOrderList(0, 157)
    console.log(res)
    this.orderNum = res.data.count
    this.newOrderList = res.data.results.slice(0, 10)
    this.newOrderList.map(v => {
      v.date = this.$moment(v.createdAt)
        .startOf('hour')
        .fromNow()
    })
    console.log(this.newOrderList)

    res.data.results.map(v => {
      this.allIncome += v.totalPrice / 100
    })
    this.allIncome = parseFloat(this.allIncome).toFixed(2)

    // 获取商品数量
    let res2 = await getGoodsListData(0, 22)
    this.goodsNum = res2.data.count

    // 获取会员数据
    // 获取评论数据
    let res3 = await getCommentList()
    console.log(res3)
    this.newCommentList = res3.data.results.slice(0, 10)
    this.newCommentList.map(v => {
      v.date = this.$moment(v.createdAt)
        .startOf('hour')
        .fromNow()
    })
  },
  // 数字过滤器
  filters: {
    NumFormat (value) {
      if (!value) return '0.00'

      /* 原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正 */
      /* 后来改成了 Number(value)|0,但是输入超过十一位就为负数了，具体见评论 */
      var intPart = Number(value) - (Number(value) % 1) // 获取整数部分（这里是windy93的方法）
      var intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断

      var floatPart = '.00' // 预定义小数部分
      var value2Array = value.toString().split('.')

      //= 2表示数据有小数位
      if (value2Array.length === 2) {
        floatPart = value2Array[1].toString() // 拿到小数部分

        if (floatPart.length === 1) {
          // 补0,实际上用不着
          return intPartFormat + '.' + floatPart + '0'
        } else {
          return intPartFormat + '.' + floatPart
        }
      } else {
        return intPartFormat + floatPart
      }
    }
  }
}
</script>

<style lang="less" scoped>
.shop_index {
  margin: 10px 0 10px 10px;
}
// 数据统计模块的样式
.show {
  margin-bottom: 30px;
  // 共同的样式
  .box {
    padding: 20px;
    background: url("../../assets/merchants/bg-1.png");
    background-size: cover;
    border: 4px solid #ffffff;
  }
  .el-col {
    margin-right: 25px;
    width: 23%;
    &:last-child {
      margin-right: 0;
    }
  }

  .order,
  .income,
  .goods,
  .users {
    .el-icon-s-order,
    .el-icon-wallet,
    .el-icon-goods,
    .el-icon-s-custom {
      float: right;
      width: 45px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      border-radius: 50%;
      font-size: 24px;
      background: linear-gradient(to top, #5d6dc3, #3c86d8);
      color: #fff;
    }
    // 标题样式
    .title {
      display: inline-block;
      color: #98a6ad;
      font-size: 15px;
      margin-bottom: 20px;
    }
    // 数据样式
    p.data {
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 22px;
      color: #797979;
    }
    .compare {
      color: #98a6ad;
      .addNum {
        display: inline-block;
        padding: 2px 5px;
        margin-right: 10px;
        border-radius: 3px;
        background-color: #5d6dc3;
        color: #fff;
        font-weight: 700;
        font-size: 11px;
      }
    }
  }
}
// 数据展示
#show_data {
  height: 400px;
  padding: 20px;
  margin: 20px auto 30px;
  background-color: #fff;
}
.new {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  // 最新订单
  .new_order,
  .new_comment {
    .order_item,
    .comment_item {
      margin-bottom: 20px;
      .info {
        display: flex;
        justify-content: space-between;
        .date {
          color: #98a6ad;
        }
      }
      .name {
        display: inline-block;
        padding: 4px 8px;
        margin-bottom: 10px;
        border-radius: 8px;
        background-color: #5d6dc3;
        color: #fff;
      }
      .order_info {
        padding-left: 10px;
        line-height: 18px;
        .goodsTitle {
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  // 最新评论的样式
  .new_order,
  .new_comment {
    width: 47%;
    height: 450px;
    padding: 20px 20px 0;
    overflow: auto;
    background-color: #fff;
    .title {
      display: inline-block;
      padding-bottom: 20px;
      color: #98a6ad;
      font-size: 15px;
    }
  }
}
</style>
