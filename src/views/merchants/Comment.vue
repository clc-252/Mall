// '评论管理'组件
<template>
  <div class="comment">
    <div class="common_title">
      <span>评论列表</span>
    </div>
    <!-- 评论列表 -->
    <div class="comment_list">
      <!-- stripe：斑马纹表格   border：带边框的表格 -->
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="username" label="用户名" width="100"></el-table-column>
        <el-table-column prop="content" label="评论内容"></el-table-column>
        <el-table-column prop="goodsTitle" label="评论商品"></el-table-column>
        <el-table-column prop="date" label="评论时间" width="100"></el-table-column>
        <el-table-column prop="state" label="状态" width="80"></el-table-column>
        <el-table-column label="操作" width="100">
          <template>
            <el-button type="text" size="small" @click="handleReply">回复</el-button>
            <el-button type="text" size="small" @click="dialogFormVisible=true">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 评论详情 -->
      <el-dialog title="评论详情" :visible.sync="dialogFormVisible">
        <el-form>
          <el-form-item label="用户名">
            <el-input :disabled="true" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          username: '火星网友',
          content:
            '关注很久了，性能不错的一部手机，买回来后直接升级到13.3运行稳定，也没有网上说的发烫问题，估计是冬天吧。拍照效果棒棒哒！很好哦！',
          goodsTitle:
            '【国行现货4999元起】Apple 苹果 iPhone 11 移动联通电信4G手机 双卡双待 绿色 全网通 (64GB)',
          date: '2016-05-02',
          state: '已回复'
        },
        {
          username: '火星网友',
          content:
            '关注很久了，性能不错的一部手机，买回来后直接升级到13.3运行稳定，也没有网上说的发烫问题，估计是冬天吧。拍照效果棒棒哒！很好哦！',
          goodsTitle:
            '【国行现货4999元起】Apple 苹果 iPhone 11 移动联通电信4G手机 双卡双待 绿色 全网通 (64GB)',
          date: '2016-05-02',
          state: '已回复'
        }
      ],
      dialogFormVisible: false
    }
  },
  methods: {
    // 点击回复按钮触发
    handleReply () {
      // 弹框让商家输入回复内容
      this.$prompt("回复'火星网友'：", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '回复内容不能为空',
        inputPlaceholder: '请输入回复内容'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '回复成功 '
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    // 点击详情按钮触发
    handleInfo () {}
  }
}
</script>

<style lang='less' scoped>
.comment {
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
// 评论列表
.comment_list {
  margin: 30px 30px 0;
  /deep/.el-table__row {
    font-size: 12px;
    .cell {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      .el-button {
        outline: none;
      }
    }
    .el-table_1_column_5 {
      text-align: center;
    }
    .el-table_1_column_6 {
      text-align: center;
      .cell .el-button :hover {
          color: #e1251b;
        }
    }
  }
}
</style>
