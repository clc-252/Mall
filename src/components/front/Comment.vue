// 商品评论的组件
<template>
  <div class="comment">
    <div class="comment_title clearfix">
      <!-- 进度条 -->
      <div class="progress">
        <!-- Progress 进度条 -->
        <el-progress
          type="circle"
          :percentage="90"
          :width="85"
          color="rgb(228, 57, 60)"
        ></el-progress>
        <p class="comment_num">
          共有
          <span class="num">{{commentList.count}}</span> 人点评
        </p>
      </div>
      <!-- 评论标签 -->
      <div class="comments-tags">
        <p>大家觉得</p>
        <!-- 所有评论 -->
        <span class="all_remarks">所有评论{{data.all_remarks}}</span>
        <!-- 非常好 -->
        <span class="very_good_remarks">非常好{{data.very_good_remarks}}</span>
        <!-- 好评 -->
        <span class="good_remarks">好评{{data.good_remarks}}</span>
        <!-- 差评 -->
        <span class="bad_remarks">差评{{data.bad_remarks}}</span>
        <!-- 非常差 -->
        <span class="very_bad_remarks">非常差{{data.very_bad_remarks}}</span>
      </div>
    </div>
    <div class="comment_info clearfix" v-for="(item,index) in commentList.results" :key="index">
      <div class="user_info fl">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3399948804,1253545971&fm=26&gp=0.jpg" alt />
        <p class="username">{{item.username}}</p>
      </div>
      <div
        class="comment_text fl"
      > {{item.content}}</div>
    </div>
  </div>
</template>

<script>
// 引入获取评论的方法
import { getComment, text } from '@/apis/goods.js'
export default {
  // 接收数据
  props: {
    data: {
      type: Object,
      // default: {}
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      // 评论数据
      commentList: {}
    }
  },
  async mounted () {
    // 获取商品id
    let id = this.$route.query.id
    let res = await getComment(id)
    console.log(res)
    this.commentList = res.data
    let res2 = await text(id)
    console.log('测试:' + res2)
  }
}
</script>

<style lang='less' scoped>
.comment {
  padding-left: 20px;
  .comment_title {
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    // 进度条的样式
    .progress {
      position: relative;
      float: left;
      width: 120px;
      height: 110px;
      padding-bottom: 15px;
      margin-right: 20px;
      border-right: 1px dashed #eee;
      background-color: #fff;
      flex-direction: column;
      text-align: center;
      /deep/.el-progress-circle{
        margin: auto;
        margin-left: 12px;
      }
      /deep/.el-progress__text{
        font-size: 20px!important;
        color: #e4393c;
        margin-left: -4px;
      }
      .comment_num {
        font-size: 14px;
        margin-top: 10px;
        .num {
          color: rgb(255, 153, 0);
        }
      }
    }
    // 评论标签的样式
    .comments-tags {
      float: left;
      margin-top: 10px;
      width: 300px;
      p {
        color: #666;
        margin-bottom: 10px;
      }
      span {
        display: inline-block;
        margin: 0 10px 8px 0;
        padding: 4px 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        border-radius: 4px;
        &.all_remarks {
          border: 2px solid #ff7800;
          color: #ff7800;
        }
        &.very_good_remarks {
          border: 2px solid #e1251b;
          color: #e1251b;
        }
        &.good_remarks {
          border: 2px solid red;
          color: red;
        }
        &.bad_remarks {
          border: 2px solid #666;
          color: #666;
        }
        &.very_bad_remarks {
          border: 2px solid #999;
          color: #999;
        }
      }
    }
  }
  .comment_info {
    margin-top: 20px;
    padding-left: 15px;
    .user_info {
      margin-right: 40px;
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid pink;
      }
      .username {
        margin-top: 5px;
        color: #666;
      }
    }
    .comment_text {
      width: 630px;
      font-size: 14px;
      color: #333;
      padding-top: 10px;
      line-height: 24px;
    }
  }
}

</style>
