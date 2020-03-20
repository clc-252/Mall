<template>
  <div class="search">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <div class="search_main w">
      <!-- 面包屑导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>全部结果</el-breadcrumb-item>
        <el-breadcrumb-item>手机</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 搜索商品条件过滤的部分 -->
      <GoodsFilters />
      <!-- 搜索商品列表 -->
      <SearchGoodsList />
    </div>
    <!-- 底部 -->
    <CommentFooter></CommentFooter>
  </div>
</template>

<script>
// 引入公共部分
import CommentHeader from '@/components/CommentHeader.vue'
import CommentFooter from '@/components/CommentFooter.vue'
// 条件过滤的组件
import GoodsFilters from '@/components/front/GoodsFilters.vue'
// 搜索商品列表的组件
import SearchGoodsList from '@/components/front/SearchGoodsList.vue'
export default {
  components: {
    CommentHeader,
    CommentFooter,
    GoodsFilters,
    SearchGoodsList
  }
}
</script>

<style lang='less' scoped>
.search {
  background-color: #fff;
}
// 面包屑
.el-breadcrumb {
  padding: 15px 0;
}
</style>
