<template>
  <!-- 订单列表的组件 -->
  <div class="order">
    <div class="common_title">
      <span>订单列表</span>
    </div>
    <!-- 筛选 -->
    <div class="filter">
      <!-- 按状态筛选 -->
      <div class="state_filter">
        <el-form ref="form" :model="form">
          <el-form-item label="订单状态：">
            <el-select v-model="form.region" style="width:100px" @change="handleChange">
              <el-option label="全部" value=""></el-option>
              <el-option label="待付款" value="待付款"></el-option>
              <el-option label="待发货" value="待发货"></el-option>
              <el-option label="已发货" value="已发货"></el-option>
              <el-option label="已收货" value="已收货"></el-option>
              <el-option label="已评论" value="已评论"></el-option>
              <el-option label="已取消" value="已取消"></el-option>
              <el-option label="已完成" value="已完成"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 订单列表 -->
    <div class="order_list">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="billNum" label="订单号" width="180"></el-table-column>
        <el-table-column prop="name" label="收货人姓名" width="110"></el-table-column>
        <el-table-column prop="address" label="收货地址"></el-table-column>
        <el-table-column prop="totalPrice" label="订单金额" width="100"></el-table-column>
        <el-table-column prop="status" label="订单状态" width="100"></el-table-column>
        <el-table-column label="订单详情" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="handleInfo(scope.$index, tableData)">查看详情</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="success" size="mini" v-if="tableData[scope.$index].status==='待发货'" @click="handleDelivery(scope.$index,tableData)">发货</el-button>
            <el-button
              type="danger"
              size="mini"
              @click.native.prevent="handleDel(scope.$index, tableData)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
      <!-- 点击查看详情按钮才显示的订单详情 -->
      <div class="order_info">
        <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
          <el-table :data="infoData" border stripe>
            <el-table-column property="title" label="商品名称"></el-table-column>
            <el-table-column label="商品图" width="100">
              <template slot-scope="scope">
                <img :src="infoData[scope.$index].coverIcon" alt />
              </template>
            </el-table-column>
            <el-table-column property="price" label="价格" width="100"></el-table-column>
            <el-table-column property="count" label="数量" width="50"></el-table-column>
            <el-table-column property="allPrice" label="小计" width="100"></el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer">
            <span style="margin-right:10px;font-size:14px">总价：¥ {{payPrice}}</span>
            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
  </div>
</template>

<script>
// 获取订单列表的方法
import { getUserOrderList, updateOrderStatus } from '@/apis/order.js'
export default {
  inject: ['reload'],
  data () {
    return {
      // 订单列表数据
      tableData: [],
      form: {
        region: ''
      },
      dialogTableVisible: false,
      infoData: [],
      allPriceNum: 0,
      payPrice: 0, // 应付总额
      total: 0, // 商品总数
      pageIndex: 1, // 当前页
      pageSize: 5, // 每页显示的商品条数
      oldIndex: null, // 旧的index
      isShow: true
    }
  },
  methods: {
    async init () {
      let num = (this.pageIndex - 1) * this.pageSize
      let res = await getUserOrderList(num, this.pageSize)
      console.log(res)
      this.tableData = res.data.results
      this.tableData.map(v => {
        v.totalPrice = parseFloat(v.totalPrice / 100).toFixed(2)
        if (!v.zoneAddress) {
          v.address = v.street
        } else {
          v.address = v.zoneAddress + v.street
        }

        // 修改订单状态的展示方式
        if (v.status === 1) {
          v.status = '待付款'
        } else if (v.status === 2) {
          v.status = '待发货'
        } else if (v.status === 3) {
          v.status = '已发货'
        } else if (v.status === 4) {
          v.status = '已收货'
        } else if (v.status === 5) {
          v.status = '已评论'
        } else if (v.status === 6 || v.status === 7) {
          v.status = '已取消'
        } else if (v.status === 10) {
          v.status = '已完成'
        }
      })
      this.total = res.data.count
    },
    // 当订单筛选条件发生改变时触发
    handleChange (value) {
      // 先复制一份完整的订单列表数据,做备份
      let copyList = this.tableData
      console.log(value)

      if (value === '') {
        // 显示所有状态的订单
        this.tableData = copyList
      } else {
        // 筛选出符合条件的订单
        let filterList = []
        this.tableData.map(v => {
          if (v.status === value) {
            filterList.push(v)
          }
          return filterList
        })
        this.tableData = filterList
      }
    },
    // 点击查看详情按钮触发
    handleInfo (index, rows) {
      if (index !== this.oldIndex) {
        // 把当前的index赋值给oldindex存起来，以便下次比较
        this.oldIndex = index
        this.infoData = rows[index].items
        this.allPriceNum = 0
        this.payPrice = 0
        this.infoData.map(v => {
          v.price = parseFloat(v.price / 100).toFixed(2)
          // 定义一个变量暂时存放订单金额
          let a = v.price * v.count
          // 将订单详情中的订单小计的金额数保留小数点后两位
          v.allPrice = parseFloat(v.price * v.count).toFixed(2)
          this.allPriceNum += a
          this.payPrice = parseFloat(this.allPriceNum).toFixed(2)
        })
      }
      // 显示订单详情的对话框
      this.dialogTableVisible = true
    },
    // 点击删除按钮触发
    handleDel (index, rows) {
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 删除所点击的商品
          rows.splice(index, 1)
          // 弹窗提示用户
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
    handleSizeChange (val) {
      this.pageIndex = 1
      this.pageSize = val
      // 请求数据
      this.init()
    },
    handleCurrentChange (val) {
      this.pageIndex = val
      // 请求数据
      this.init()
    },
    // 处理发货
    handleDelivery (index, rows) {
      // 提示
      this.$confirm('是否确认进行发货处理？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let data = {
          memId: this.$store.state.user.userInfo.id,
          orderId: rows[index].id,
          status: 3
        }
        let token = this.$store.state.user.userInfo.sessionToken
        let res = await updateOrderStatus(data, token)
        console.log(res)

        if (res.status === 200) {
          this.$message({
            message: '发货成功',
            type: 'success'
          })
          // 刷新页面
          this.reload()
        }
      }).catch(() => {})
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
.order {
  padding-bottom: 30px;
  background-color: #fff;
}
.common_title {
  font-size: 14px;
  border-bottom: 1px solid #f4f4f4;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-bottom: 15px;
  span {
    position: relative;
    z-index: 2;
    display: inline-block;
    padding: 0 15px;
    height: 45px;
    margin-bottom: -1px;
    line-height: 45px;
    border-top: 3px solid #545c64;
    border-right: 1px solid #f4f4f4;
    border-bottom: 1px solid #fff;
  }
}
// 筛选部分
.filter{
  padding: 0 20px;
  .el-form-item{
    margin-bottom: 0;
  }
}
// 订单列表
.order_list {
  padding: 20px;
  /deep/.el-table__row {
    .cell {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .el-button {
      outline: none;
    }
  }
}
// 分页
.el-pagination {
  padding: 0 20px;
}
// 订单详情
.order_info {
  /deep/.el-dialog {
    width: 60%;
  }
  img {
    width: 80px;
    height: 80px;
  }
}
</style>
