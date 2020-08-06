// 退款管理组件
<template>
  <div class="refund">
    <div class="refund_title">
      <h3>退款管理</h3>
    </div>
    <div class="refund_main">
      <!-- 表头 -->
      <el-row class="table_title">
        <el-col :span="11">
          <span>订单详情</span>
        </el-col>
        <el-col :span="3">
          <span>退款金额</span>
        </el-col>
        <el-col :span="4">
          <span>申请时间</span>
        </el-col>
        <el-col :span="3">
          <span>退款状态</span>
        </el-col>
        <el-col :span="3">
          <span>交易操作</span>
        </el-col>
      </el-row>
      <!-- 退款订单列表 -->
      <div class="refund_list">
        <div class="refund_item">
          <div class="refund_list_title">
            <span class="order_num">订单号：910802755253595712</span>
            <span class="shop_name">
              <i></i>
              <em>店铺名称</em>
            </span>
          </div>
          <el-row class="refund_list_main">
            <el-col :span="11">
              <div class="goods_info">
                <div class="goodsImg">
                  <img
                    src="http://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/09/19/22/7ddd82fe-5057-4b41-935f-5e2c46e91088_420_531.jpg"
                    alt
                  />
                </div>
                <div class="goodsTitle">
                  <p>Apple iPhone XS Max (A2104) 256GB 银色 移动联通电信4G手机 双卡双待</p>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <span>￥59.00</span>
            </el-col>
            <el-col :span="4">
              <span>2020-03-31 11:43</span>
            </el-col>
            <el-col :span="3">
              <span>等待退款</span>
            </el-col>
            <el-col :span="3">
              <span>取消申请</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.refund_title {
  height: 58px;
  line-height: 58px;
  padding-left: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
.refund_main {
  padding: 15px;
  background-color: #fff;
  // 表头
  .table_title {
    height: 34px;
    background-color: #f5f5f5;
    text-align: center;
    line-height: 34px;
  }
  // 退款订单列表
  .refund_list {
    margin-top: 10px;
    background-color: #fff;
    .refund_item {
      border: 1px solid #efefef;
      // 表头
      .refund_list_title {
        padding: 0 10px;
        background: #f5f5f5;
        height: 30px;
        line-height: 30px;
        color: #aaa;
        .shop_name {
          margin-left: 20px;
          i {
            display: inline-block;
            margin-right: 3px;
            width: 15px;
            height: 14px;
            background: url(../../assets/front/sprite-icon.png) no-repeat 0 -200px;
          }
        }
      }
      .refund_list_main {
        padding: 10px 0;
        .goods_info {
          display: flex;
          padding: 0 10px;
          .goodsImg {
            margin-right: 10px;
            border: 1px solid #efefef;
            img {
              width: 62px;
              height: 62px;
              object-fit: cover;
            }
          }
          .goodsTitle {
            line-height: 20px;
            text-align: left;
          }
        }
      }

      .el-col {
        text-align: center;
      }
    }
  }
}
</style>
