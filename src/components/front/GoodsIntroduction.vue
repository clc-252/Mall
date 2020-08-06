// 商品介绍组件
<template>
  <div class="introduction">
    <!-- 商品参数 -->
    <div class="parameter">
      <div class="title">
        <i class="sign"></i>
        <p>
          商品参数&nbsp;
          <i>DETAIL</i>
        </p>
      </div>
      <!-- 列表 -->
      <ul class="parameter_list">
        <li title="AppleiPhone XR">商品名称：AppleiPhone XR</li>
        <li title="100000177760">商品编号：100000177760</li>
        <li title="460.00g">商品毛重：460.00g</li>
        <li title="中国">商品产地：中国</li>
        <li title="其他">CPU型号：其他</li>
        <li title="其它内存">运行内存：其它内存</li>
        <li title="128GB">机身存储：128GB</li>
        <li title="不支持存储卡">存储卡：不支持存储卡</li>
        <li title="后置单摄">摄像头数量：后置单摄</li>
        <li title="1200万像素">后摄主摄像素：1200万像素</li>
        <li title="其他">前摄主摄像素：其他</li>
        <li title="6.1英寸">主屏幕尺寸（英寸）：6.1英寸</li>
        <li title="其它分辨率">分辨率：其它分辨率</li>
        <li title="其它屏幕比例">屏幕比例：其它屏幕比例</li>
        <li title="其他">屏幕前摄组合：其他</li>
        <li title="以官网信息为准">电池容量（mAh）：以官网信息为准</li>
        <li title="其他">充电器：其他</li>
        <li title="黑色">机身颜色：黑色</li>
        <li title="iOS(Apple)">操作系统：iOS(Apple)</li>
      </ul>
      <!-- 更多参数 -->
      <p class="more-par">
        <a href="JavaScript:void(0)" class="more-param">
          更多参数
          <i class="txt-arr">&gt;&gt;</i>
        </a>
      </p>
    </div>
    <!-- 商品展示 -->
    <div class="demo">
      <div class="title">
        <i class="sign"></i>
        <p>
          商品展示&nbsp;
          <i>IMAGE</i>
        </p>
      </div>
      <!-- 展示 -->
      <div class="demo_list" v-html="goodsInfo">
        {{goodsInfo}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goodsInfo']
}
</script>

<style lang="less" scoped>
// 商品参数的样式
// 头部样式
.title {
  padding: 20px 0 10px 10px;
  color: #e4393c;
  font-size: 18px;
  background: url(//shop.vipstatic.com/img/detail/detial_line-hash-73c7b229.png?a6c60ccd)
    repeat-x left bottom;
  .sign {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-bottom: 2px;
    border: 2px solid #e4393c;
    transform: rotate(45deg);
  }
  p {
    display: inline-block;
    padding-left: 10px;
  }
  p i {
    color: #999;
  }
}
// 参数的样式
.parameter {
  // 参数列表的样式
  .parameter_list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    line-height: 20px;
    li {
      width: 30%;
    }
  }
  //  查看更多
  .more-par {
    text-align: right;
    font-family: consolas;
    a {
      color: #005aa0;
    }
  }
}
// 展示的样式
.demo {
  .demo_list {
    padding-top: 15px;
    text-align: center;
  }
}
</style>
