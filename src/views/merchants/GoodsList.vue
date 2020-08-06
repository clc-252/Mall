// 商品列表的组件
<template>
  <div class="goods_list">
    <div class="common_title">
      <span>商品列表</span>
    </div>
    <!-- 商品列表 -->
    <div class="goods_main">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="title" label="商品标题" width="400"></el-table-column>
        <el-table-column prop="price" label="商品价格"></el-table-column>
        <el-table-column prop="categories" label="分类" width="200">
          <!-- slot-scope：可以获取到row、column、$index和store（table内部的状态管理）的数据 -->
          <template slot-scope="scope">
            <span
              v-for="(item,index) in tableData[scope.$index].categories"
              :key="index"
            >{{item.name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="发布时间" sortable></el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="success" size="mini">修改</el-button>
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
  </div>
</template>

<script>
// 获取商品列表数据
import { getGoodsListData } from '@/apis/goods.js'
export default {
  data () {
    return {
      tableData: [],
      total: 0, // 商品总数
      pageIndex: 1, // 当前页
      pageSize: 5 // 每页显示的商品条数
    }
  },
  methods: {
    // 根据pagesize和pageIndex请求不同页面的数据
    async init () {
      let num = (this.pageIndex - 1) * this.pageSize
      let res = await getGoodsListData(num, this.pageSize)
      console.log(res)
      this.tableData = res.data.results
      this.tableData.map(v => {
        v.price = parseFloat(v.price / 100).toFixed(2)
        v.createdAt = this.$moment(v.createdAt).format('YYYY-MM-DD hh:mm:ss')
      })
      this.total = res.data.count
    },
    // 点击删除按钮触发
    handleDel (index, rows) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
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
    }
  },
  mounted () {
    // 请求数据
    this.init()
  }
}
</script>

<style lang='less' scoped>
.goods_list {
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
// 商品列表
.goods_main {
  padding: 20px;
  /deep/.el-table__row {
    font-size: 13px;
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
  padding: 20px;
}
</style>
