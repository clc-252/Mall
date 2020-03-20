<template>
  <div class="merchants-index">
    <!-- 使用container布局容器 -->
    <el-container>
      <el-aside width="200px">
        <!-- logo部分 -->
        <div class="logo">
          <strong>品优购</strong> - 商家后台
        </div>
        <!-- 商家信息 -->
        <div class="user_info">
          <img src="@/assets/merchants/timg.jpg" alt="person" />
          <div>
            <span>欢迎&nbsp;&nbsp;李思思</span>
            <b>管理员</b>
          </div>
        </div>
        <!-- 左侧导航菜单栏部分 -->
        <el-menu
          :router="true"
          :unique-opened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-sell"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/index/postlist">
              <i class="el-icon-location"></i>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="/index/postpublish">
              <i class="el-icon-location"></i>
              <span>商品发布</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="/index/postlist">
              <i class="el-icon-location"></i>
              <span>订单列表</span>
            </el-menu-item>
            <el-menu-item index="/index/postpublish">
              <i class="el-icon-location"></i>
              <span>退货/售后</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/merchants/index/comment">
            <i class="el-icon-chat-dot-square"></i>
            <span>评论管理</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </template>
            <el-menu-item index="/merchants/index/seller">
              <i class="el-icon-location"></i>
              <span>修改资料</span>
            </el-menu-item>
            <el-menu-item index="/merchants/index/user">
              <i class="el-icon-location"></i>
              <span>个人中心</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="system-title">品优购商城后台管理系统</span>
          <div class="welcome">
            <span>欢迎你：用户名</span>
            <div>
              <i class="el-icon-switch-button"></i>
              <span @click="edit" class="edit">退出</span>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData: ''
    }
  },
  mounted () {
    this.userData = JSON.parse(localStorage.getItem('userData_back'))
    // console.log(this.userData)
  },
  methods: {
    edit () {
      localStorage.removeItem('userLoginToken_back')
      this.$router.push({ name: 'MerchantsLogin' })
    }
  }
}
</script>

<style lang='less' scoped>
.merchants-index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  .el-menu {
    border-right: none;
  }
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background-size: cover;
    background-color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 58px;
    strong {
      font-size: 25px;
    }
  }
  // 用户信息
  .user_info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 79px;
    border-bottom: 1px solid #5a5e6b;
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      display: block;
      font-size: 12px;
      color: #fff;
      line-height: 20px;
    }
    b {
      font-weight: normal;
      font-size: 12px;
      color: #adafb5;
    }
  }

  .system-title {
    flex: 1;
    text-align: center;
    font-size: 28px;
    color: white;
  }
  .welcome {
    display: flex;
    align-items: center;
    color: white;
    i {
      margin: 0 2px 0 8px;
      font-size: 16px;
    }
    div:hover {
      color: orange;
    }
    // 退出按钮
    .edit {
      cursor: pointer;
    }
  }
}
</style>
