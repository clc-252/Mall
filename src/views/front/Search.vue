<template>
  <div class="search">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <div class="search_main w">
      <!-- 面包屑导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>全部搜索结果</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.query.keyword}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 搜索商品条件过滤的部分 -->
      <!-- <GoodsFilters /> -->
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
// import GoodsFilters from '@/components/front/GoodsFilters.vue'
// 搜索商品列表的组件
import SearchGoodsList from '@/components/front/SearchGoodsList.vue'

// 引入搜索商品的方法
// import { searchGoods } from '@/apis/goods.js'
// import axios from 'axios'
export default {
  components: {
    CommentHeader,
    CommentFooter,
    // GoodsFilters,
    SearchGoodsList
  },
  async mounted () {
    // let keyword = encodeURI(this.$route.query.keyword)
    // console.log(keyword)
    // let res = await searchGoods(keyword)
    // console.log(res)
    // 6f0c423c-17fe-a148-6fff-fb3485137733
    // 测试亚马逊的搜索商品接口
    // axios({
    //   url: 'http://openapi.qingtaoke.com/search',
    //   method: 'get',
    //   params: {
    //     s_type: 1,
    //     app_key: 1,
    //     v: 1.0,
    //     key_word: keyword
    //   },
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
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
