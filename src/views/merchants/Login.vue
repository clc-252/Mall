<template>
  <div class="userLogin">
    <!-- 头部 -->
    <div class="header">
      <div class="w">
        <!-- logo -->
        <div class="logo">
          <a class="logo-bd" title="品优购" href="#" target="_blank"></a>
        </div>
        <!-- 欢迎 -->
        <p>商家后台 - 欢迎登陆</p>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="banner-box">
      <div class="banner">
        <!-- 主要内容 -->
        <el-row type="flex" justify="center" align="middle" class="main">
          <div class="form-wrapper">
            <!-- 表单头部tab -->
            <div class="tabs">账户登录</div>
            <!-- 登录功能组件 -->
            <el-form ref="form" :model="form" class="form" :rules="rules">
              <el-form-item prop="username">
                <el-input
                  placeholder="邮箱/用户名/手机号"
                  prefix-icon="el-icon-s-custom"
                  v-model="form.username"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  placeholder="密码"
                  type="password"
                  prefix-icon="el-icon-lock"
                  v-model="form.password"
                ></el-input>
              </el-form-item>
              <p class="form-text">
                <a href="#" target="_blank" class="fl">没有账号？立即注册</a>
                <a href="#">忘记密码</a>
              </p>
              <el-button class="submit" type="primary" @click="handleLoginSubmit">登&nbsp;录</el-button>
            </el-form>
          </div>
        </el-row>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <!-- 底部版权模块 -->
      <div class="footer-copy">
        <div class="w">
          <!-- 关于我们服务模块 -->
          <ul class="clearfix">
            <li>
              <a href="#">关于我们</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">联系我们</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">联系客服</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">商家入驻</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">营销中心</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">手机品优购</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">友情链接</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">销售联盟</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">品优购社区</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">品优购公益</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">English Site</a>
            </li>
            <li class="line"></li>
            <li>
              <a href="#">Contact U</a>
            </li>
          </ul>
          <!-- 版权声明模块 -->
          <p>
            地址：广州市黄埔区九龙大道206号 邮编：510700
            电话：020-82876130 班级：2016级计算机科学与技术一班 学号: 201606110052
          </p>
          <p>粤公网安备 44011602000060号 &nbsp; 粤ICP备15103669号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据
      form: {
        username: '',
        password: ''
      },
      // 表单的校验规则
      rules: {
        username: [
          // validator:自定义校验函数
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 处理用户点击登陆按钮之后的登陆事件
    handleLoginSubmit () {
      if (this.form.username === 'admin' && this.form.password === '123456') {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.$router.push({ path: '/merchants/' })
      }
    }
  }
}
</script>

<style lang='less' scoped>
// 头部部分
.header {
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .w {
    position: relative;
  }
  // logo
  .logo {
    padding: 15px 0;
    width: 200px;
    .logo-bd {
      display: block;
      background: url(../../assets/front/Logo.png) no-repeat;
      width: 175px;
      height: 55px;
    }
  }
  p {
    position: absolute;
    top: 32px;
    left: 200px;
    font-size: 24px;
  }
}
// 中间部分
.banner {
  width: 100%;
  background: url("../../assets/front/shopLogin.jpg") no-repeat 0 -70px;
  background-size: cover;
  .main {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    height: 475px;
    .form-wrapper {
      width: 350px;
      margin-left: 650px;
      background: rgba(0, 0, 0, 0.7);
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .tabs {
          display: block;
          height: 60px;
          border-bottom: 1px #ddd solid;
          background: #eee;
          line-height: 60px;
          text-align: center;
          cursor: pointer;
          color: #666;
          font-size: 18px;
          background: rgba(0, 0, 0, 0.1);
      }
      // 登陆组件
      .el-form {
        padding: 40px 20px 20px;
        // 去注册提示文字
        .form-text {
          font-size: 12px;
          color: #666;
          text-align: right;
          line-height: 20px;
          cursor: pointer;
        }
        .submit {
          width: 100%;
          margin: 20px 0;
          font-size: 17px;
          background-color: #2696d5;
          border-color: transparent;
        }
      }
      .el-input {
        font-size: 14px;
        /deep/.el-input__inner{
        background: rgba(0, 0, 0, 0.1);

        }
        /deep/.el-input__icon:before {
          font-size: 17px;
        }
      }
    }
  }
}
// 底部版权声明模块
.footer {
  background-color: #fff;
  .footer-copy {
    .w {
      padding-top: 20px;
      text-align: center;
      ul {
        margin-left: 60px;
      }
      ul li {
        float: left;
        display: inline-block;
        margin-bottom: 15px;
        &.line {
          height: 12px;
          border-left: 1px solid #9b9b9b;
          margin: 0 10px;
        }
      }
      p {
        line-height: 20px;
      }
    }
  }
}
</style>
