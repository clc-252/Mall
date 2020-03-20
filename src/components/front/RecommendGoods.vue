// 首页“为你推荐”模块的组件
<template>
  <!-- 为你推荐模块的组件 -->
  <div class="recommend">
    <!-- tab栏 -->
    <div class="recommend_tab">
      <ul class="clearfix">
        <li v-for="(item,index) in tabList" :key="index" class="fl" @click="handleClick(index)">
          <div class="tab_title" :class="{tabTitle:current===index}">{{item.title}}</div>
          <div class="tab_desc" :class="{tabDesc:current===index}">{{item.desc}}</div>
          <p class="tab_line"></p>
        </li>
      </ul>
    </div>
    <!-- 精选列表 -->
    <div class="choiceness" v-if="current===0">
      <ul>
        <li>
          <a href="#">
            <img src="@/assets/front/piczoom_big1.jpg" alt />
            <!-- 信息 -->
            <div class="title">Apple iPhone 8 Plus (A1864) 64GB 深空灰色 移动联通电信4G手机</div>
            <div class="price">
              <i>¥</i>
              <span>4999.00</span>
            </div>
            <!-- hover -->
            <div class="item_hover">
              <!-- 不喜欢 -->
              <i class="el-icon-close"></i>
              <div class="find_similar">
                <i class="el-icon-view"></i>&nbsp;
                <span>找相似</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 智能先锋列表 -->
    <div class="electrical" v-if="current===1">智能先锋列表</div>
    <!-- 居家优品列表 -->
    <div class="life" v-if="current===2">居家优品列表</div>
    <!-- 超市百货列表 -->
    <div class="supermarket" v-if="current===3">超市百货列表</div>
    <!-- 时尚达人列表 -->
    <div class="fashion" v-if="current===4">时尚达人列表</div>
    <!-- 进口好物列表 -->
    <div class="import" v-if="current===5">进口好物列表</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 当前tab
      current: 0,
      // tab栏的数据
      tabList: [
        {
          title: '精选',
          desc: '猜你喜欢'
        },
        {
          title: '智能先锋',
          desc: '大电器城'
        },
        {
          title: '居家优品',
          desc: '品质生活'
        },
        {
          title: '超市百货',
          desc: '百货生鲜'
        },
        {
          title: '时尚达人',
          desc: '美妆穿搭'
        },
        {
          title: '进口好物',
          desc: '国际商城'
        }
      ]
    }
  },
  methods: {
    // 切换tab栏
    handleClick (index) {
      this.current = index
    }
  }
}
</script>

<style lang='less' scoped>
// tab栏
.recommend_tab {
  background-color: #fff;
  margin-bottom: 10px;
  li {
    position: relative;
    width: 166px;
    height: 60px;
    text-align: center;
    cursor: pointer;
    &:last-child .tab_line {
      height: 0;
    }
  }
  .tab_title {
    height: 27px;
    line-height: 27px;
    margin-top: 7px;
    margin-bottom: 4px;
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }
  .tab_desc {
    color: #999;
    font-size: 14px;
  }
  .tab_line {
    position: absolute;
    right: 0;
    top: 0;
    height: 40px;
    margin: 10px 0;
    width: 1px;
    background: #dfdfdf;
    background: linear-gradient(180deg, white, #dfdfdf 51%, white);
  }
  //  切换tab栏时，tab栏的样式
  .tabTitle {
    display: inline-block;
    width: 74px;
    height: 27px;
    padding: 0 5px;
    background: #e1251b;
    color: #fff;
    border-radius: 50px;
  }
  .tabDesc {
    color: #e1251b;
  }
}
// 精选列表
.choiceness {
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    position: relative;
    width: 190px;
    background-color: #fff;
    text-align: center;
    padding: 20px 15px;
    &:hover .item_hover{
      display: block;
      // background-image: linear-gradient(180deg,rgba(255,255,255,.2),white)
      background: linear-gradient(180deg,rgba(255,255,255,.2) 50%,white 90%,white)
    }
    img {
      width: 130px;
      height: 130px;
      margin: 10px 0 20px;
    }
    .title {
      font-size: 14px;
      line-height: 24px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      display: inline-block;
      font-size: 14px;
      line-height: 18px;
      height: 18px;
      color: #e1251b;
      margin-top: 10px;
      margin-left: -60px;
      i {
        margin-right: 3px;
      }
      span {
        font-size: 20px;
        font-weight: 700;
      }
    }
    .item_hover {
      display: none;
      position: absolute;
      top: 15px;
      left: 15px;
      width: 160px;
      height: 260px;
      .el-icon-close{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        color: #666;
      }
      .find_similar {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        height: 28px;
        width: 110px;
        margin-top: 18px;
        border-radius: 14px;
        line-height: 28px;
        text-align: center;
        cursor: pointer;
        background-color: #333;
        color:#fff;
        &:hover{
          background-color: #c81623;
        }
        .el-icon-view{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
