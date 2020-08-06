<template>
  <!-- 退换货/售后服务的组件 -->
  <div class="service">
    <div class="common_title">
      <span>退换货/售后</span>
    </div>
    <!-- 申请列表 -->
    <div class="apply_list">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="orderNum" label="订单号" width="150"></el-table-column>
        <el-table-column prop="name" label="收货人姓名" width="110"></el-table-column>
        <el-table-column prop="desc" label="原因说明"></el-table-column>
        <el-table-column prop="price" label="订单金额" width="100"></el-table-column>
        <el-table-column prop="date" label="申请时间" width="150"></el-table-column>
        <el-table-column prop="state" label="订单状态" width="100"></el-table-column>
        <el-table-column label="操作" width="160">
            <template slot-scope="scope">
            <el-button type="text" size="mini">同意</el-button>
            <el-button type="text" size="mini">拒绝</el-button>
            <el-button type="text" size="mini" @click.native.prevent="handleDel(scope.$index, tableData)">删除</el-button>
            <el-button type="text" size="mini">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 订单列表数据
      tableData: [
        {
          orderNum: 201606110052,
          name: '蔡丽纯',
          desc: '不喜欢不喜欢不喜欢不喜欢不喜欢不喜欢不喜欢',
          price: 2000,
          date: '2020-03-25 16:24:00',
          state: '待处理'
        }
      ]
    }
  },
  methods: {
    // 点击删除按钮触发
    handleDel (index, rows) {
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除所点击的商品
        rows.splice(index, 1)
        // 弹窗提示用户
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
.service {
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
// 申请列表的样式
.apply_list{
    padding: 20px;
    /deep/.el-table__row {
    .cell {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .el-button{
        outline: none;
    }
  }
}
</style>
