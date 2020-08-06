<template>
  <div class="pay">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <!-- 标题 -->
    <span class="title">收银台</span>
    <div class="main w">
      <div class="pay_title">
        <div class="tips">
          <i class="el-icon-circle-check"></i>
          订单提交成功，请您及时付款！
          <span class="order_num">订单号：{{$store.state.order.orderInfo.billNum}}</span>
        </div>
        <div class="price">支付总金额：<span>￥{{$store.state.order.orderInfo.totalPrice/100-$store.state.order.orderInfo.freightFee/100}}</span>元</div>
      </div>
      <div class="pay-main">
        <h4>微信支付</h4>
        <el-row type="flex" justify="space-around" align="middle" class="pay-qrcode">
          <div class="qrcode">
            <!-- 二维码 -->
            <canvas id="qrcode-stage"></canvas>
            <p>请使用微信扫一扫</p>
            <p>扫描二维码支付</p>
          </div>
          <div class="pay-example">
            <img src="http://157.122.54.189:9093/images/wx-sweep2.jpg" alt />
          </div>
        </el-row>
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
// 生成二维码的包
import QRCode from 'qrcode'
import { updateOrderStatusTo2 } from '@/apis/order.js'
export default {
  // 注册
  components: {
    CommentHeader,
    CommentFooter
  },
  mounted () {
    // 获取要展示二维码的dom节点
    const canvas = document.getElementById('qrcode-stage')
    // 展示
    QRCode.toCanvas(canvas, 'weixin://wxpay/bizpayurl?pr=EijIIPT', {
      width: 200
    })

    setTimeout(() => {
      this.$confirm('是否确认支付？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let orderId = this.$store.state.order.orderInfo.id
        let res = await updateOrderStatusTo2(orderId)
        console.log(res)
        // 提示支付成功
        this.$message({
          message: '支付成功',
          type: 'success'
        })
        // 跳转到购物车页面
        this.$router.push({ name: 'Cart' })
      }).catch(() => {})
    }, 3000)
  }
}
</script>

<style lang="less" scoped>
// 重新定义头部样式
/deep/.header {
  border: none;
  height: 135px;
  .searchArea,
  .shopcar,
  .navitems {
    display: none;
  }
  .logo .logo-bd {
    margin: 40px auto;
  }
}
.title {
  position: absolute;
  top: 100px;
  left: 370px;
  font-size: 24px;
}
// 主体内容
.main {
  .pay_title {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      margin: 20px 0;
    .tips {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      .el-icon-circle-check {
        font-size: 28px;
        margin-right: 5px;
        color: #6aaf04;
        vertical-align: middle;
      }
    }
    .price{
        font-size: 16px;
        span{
            color: #e31613;
            font-size: 18px;
            font-weight: 700;
        }
    }
  }
  .pay-main {
      background: #fff;
      border-top: 5px orange solid;
      padding: 30px;

      h4 {
        font-size: 28px;
        font-weight: normal;
        margin-bottom: 10px;
      }

      .pay-qrcode {
        padding: 0 80px;
      }

      .qrcode {
        border: 1px #ddd solid;
        padding: 15px;
        height: fit-content;

        #qrcode-stage {
          width: 200px;
          height: 200px;
          margin-bottom: 10px;
        }

        p {
          line-height: 2;
          text-align: center;
          color: #333;
        }
      }
    }
}
</style>
