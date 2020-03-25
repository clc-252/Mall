// 商品列表的组件
<template>
  <div class="goods_list">
    <div class="common_title">
      <span>商品列表</span>
    </div>
    <!-- 商品列表 -->
    <div class="goods_main">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="goodsname" label="商品标题" width="400"></el-table-column>
        <el-table-column prop="price" label="商品价格"></el-table-column>
        <el-table-column prop="cate" label="分类" width="200">
            <!-- slot-scope：可以获取到row、column、$index和store（table内部的状态管理）的数据 -->
            <template  slot-scope="scope">
                <span v-for="(item,index) in tableData[scope.$index].cate" :key="index">{{item}}、</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发布时间"></el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="success" size="mini">修改</el-button>
            <el-button type="danger" size="mini" @click.native.prevent="handleDel(scope.$index, tableData)">删除</el-button>
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
      tableData: [
        {
          goodsname:
            '【国行现货4999元起】Apple 苹果 iPhone 11 移动联通电信4G手机 双卡双待 绿色 全网通 (64GB)',
          price: '2345',
          cate: ['数码', '手机', '小米'],
          date: '2016-05-02'
        }
      ]
    }
  },
  methods: {
    // 点击删除按钮触发
    handleDel (index, rows) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
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
    font-size: 12px;
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
