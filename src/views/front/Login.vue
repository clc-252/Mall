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
        <p>欢迎登陆</p>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="banner-box">
      <div class="banner">
        <!-- 主要内容 -->
        <el-row type="flex" justify="center" align="middle" class="main">
          <div class="form-wrapper">
            <!-- 表单头部tab -->
            <el-row type="flex" justify="center" class="tabs">
              <span
                :class="{active: currentTab === index}"
                v-for="(item, index) in [`账户登录`, `扫码登录`]"
                :key="index"
                @click="handleChangeTab(index)"
              >{{item}}</span>
            </el-row>
            <!-- 登录功能组件 -->
            <el-form ref="form" :model="form" class="form" :rules="rules" v-if="currentTab == 0">
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
                <a href="#">忘记密码</a>
              </p>
              <el-button class="submit" type="primary" @click="handleLoginSubmit">登&nbsp;录</el-button>
            </el-form>
            <div class="otherlogin">
              <div class="otherlogin_types">
                <ul>
                  <li>
                    <img src="../../assets/front/qq.png" width="35px" height="35px" />
                  </li>
                  <li>
                    <img src="../../assets/front/sina.png" />
                  </li>
                  <li>
                    <img src="../../assets/front/ali.png" />
                  </li>
                  <li>
                    <img src="../../assets/front/weixin.png" />
                  </li>
                </ul>
              </div>
              <span class="register">
                <a href="http://localhost:8080/#/front/register" target="_blank">没有账号？立即注册</a>
              </span>
            </div>
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
// 引入实现用户登录的方法
// import { login } from '@/apis/user.js'
export default {
  data () {
    /*
        rule：校验规则
        value：文本框中的值
        callback：该函数必须执行，如果校验不通过则传入错误提示信息，通过就不需要传递参数
    */
    const validateUsername = (rule, value, callback) => {
      // 通过value校验到底是否是手机号码, true的话表示通过，false就不通过
      const isValid = /^1[3,4,5,7,8][0-9]{9}$/.test(value)
      // 判断输入的手机号码格式是否正确
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else if (!isValid) {
        callback(new Error('手机号码格式不正确'))
      } else {
        callback()
      }
    }
    return {
      currentTab: 0,
      // 表单数据
      form: {
        username: '',
        password: ''
      },
      // 表单的校验规则
      rules: {
        username: [
          // validator:自定义校验函数
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleChangeTab (index) {
      this.currentTab = index
    },
    // 处理用户点击登陆按钮之后的登陆事件
    handleLoginSubmit () {
      this.$refs.form.validate((valid) => {
        // console.log(valid)
        // 如果结果为true，则发送登陆请求
        if (valid) {
          // 密码加密
          this.form.password = this.$md5(this.form.password)
          // 发送请求
          this.$store.dispatch('login', this.form).then((res) => {
            this.$message.success('登陆成功！')

            // 跳转回上一个页面
            this.$router.back()
          })
        }
      })
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
.banner-box {
  background-image: linear-gradient(to right, #a51cec, #3f9bfd);
}
.banner {
  width: 100%;
  background: url("../../assets/front/_/login-bg.png") no-repeat 0 -45px;
  .main {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    height: 475px;
    .form-wrapper {
      width: 400px;
      margin-left: 650px;
      background: #fff;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .tabs {
        span {
          display: block;
          width: 50%;
          height: 50px;
          border-top: 2px #eee solid;
          background: #eee;
          line-height: 48px;
          text-align: center;
          cursor: pointer;
          color: #666;
          font-size: 18px;
          &.active {
            color: #e4393c;
            border-top-color: #e4393c;
            background: #fff;
            font-weight: bold;
          }
        }
      }
      // 登陆组件
      .el-form {
        padding: 40px 20px 20px;
        .form-text {
          font-size: 12px;
          color: #666;
          text-align: right;
          line-height: 1;
          cursor: pointer;
        }
        .submit {
          width: 100%;
          margin-top: 10px;
          font-size: 17px;
          background-color: #e4393c;
          border-color: transparent;
          outline: none;
        }
      }
      .el-input {
        font-size: 14px;
        /deep/.el-input__icon:before {
          font-size: 17px;
        }
      }
      .otherlogin {
        margin: 20px 25px 0;
        height: 59px;
        .otherlogin_types {
          ul li {
            float: left;
            margin-right: 10px;
          }
        }
        .register {
          float: right;
          margin-top: 10px;
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
