<template>
  <div class="userRegister">
    <!-- 头部 -->
    <div class="header">
      <div class="w">
        <!-- logo -->
        <div class="logo">
          <a class="logo-bd" title="品优购" href="#" target="_blank"></a>
        </div>
        <!-- 欢迎 -->
        <p>欢迎登陆</p>
        <!-- 去登陆 -->
        <span>
          已有账号？
          <i class="go_login" @click="$router.push({name: 'Login'})">去登录 ></i>
        </span>
      </div>
    </div>
    <!-- 中间注册组件 -->
    <div class="center">
      <div class="w">
        <!-- 进度条 -->
        <div class="progress_bar">
          <div class="pro-step cur-step">
            <span class="step-index" :class="{change_position:changePosition}">1</span>
            <p class="step-desc">验证手机号</p>
          </div>
          <div
            class="pro-line pro-line1 person-pro-line person-pro-line1"
            :class="{change_line:changeLine}"
          ></div>
          <div class="pro-step pro-step2 person-pro-step2">
            <span
              class="step-index"
              :class="{change_bgp:chhangeBgp,change_position_to3:changePosition2To3}"
            >2</span>
            <p class="step-desc">填写账号信息</p>
          </div>
          <!-- 步骤2 -> 步骤三 -->
          <div
            class="pro-line pro-line2 person-pro-line person-pro-line2"
            :class="{change_Line_To3:changeLine2To3}"
          ></div>
          <div class="pro-step pro-step3 person-pro-step3">
            <span class="step-index" :class="{change_bgp:changeLine2To3}">3</span>
            <p class="step-desc">注册成功</p>
          </div>
        </div>
        <!-- 注册功能的内容 -->
        <div class="register_con container_phone">
          <el-form
            ref="phone_form"
            :model="phone_form"
            class="phone_form"
            :rules="rules"
            v-if="currentTab == 0"
          >
            <el-form-item prop="phoneNum">
              <el-input placeholder="建议使用常用的手机号码" v-model="phone_form.phoneNum"></el-input>
            </el-form-item>
            <!-- 输入手机验证码 -->
            <el-input placeholder="请输入手机验证码" v-model="code" @click="handleGetCode">
              <template slot="append">获取验证码</template>
            </el-input>
            <el-button class="nextStep" type="primary" @click="handleNext">下&nbsp;一&nbsp;步</el-button>
          </el-form>
        </div>
        <!-- 个人信息 -->
        <div class="register_con container_info">
          <el-input placeholder="您的账户名和登录名" v-model="userInfo_form.username">
            <template slot="prepend">用 户 名</template>
          </el-input>
          <el-input placeholder="建议使用两种或两种以上字符组合" v-model="userInfo_form.password">
            <template slot="prepend">设置密码</template>
          </el-input>
          <el-input placeholder="请再次输入密码" v-model="userInfo_form.comfirmPwd">
            <template slot="prepend">确认密码</template>
          </el-input>
          <!-- <el-input placeholder="请输入验证码" v-model="userInfo_form.captcha" class="input_captcha"></el-input> -->
          <!-- 生成验证码 -->
          <!-- <div class="code" @click="refreshCode">
            <SIdentify :identifyCode="identifyCode"></SIdentify>
            <span>看不清？点击照片换一张</span>
          </div> -->
          <el-button class="signUp" type="primary" @click="handleSignUp">立即注册</el-button>
        </div>
        <!-- 注册成功 -->
        <div class="register_con register_success">
          <div class="register_tip">
            <i class="el-icon-circle-check"></i>
            <p>注册成功</p>
          </div>
          <!-- 去登陆 -->
          <div class="to_login">
            <i class="el-icon-thumb"></i>
            <a href="http://localhost:8080/#/front/login">戳这去登录</a>
          </div>
        </div>
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
            地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096
            电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn
          </p>
          <p>京ICP备08001421号京公网安备110108007702</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SIdentify from '@/components/Identify'
// 引入获取手机验证码的方法
import { getPhoneCode, register } from '@/apis/user.js'
export default {
  name: 'codetest',
  data () {
    /*
        rule：校验规则
        value：文本框中的值
        callback：该函数必须执行，如果校验不通过则传入错误提示信息，通过就不需要传递参数
    */
    const validatePhoneNum = (rule, value, callback) => {
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
      // 验证手机表单数据
      phone_form: {
        phoneNum: ''
      },
      // 个人信息表单数据
      userInfo_form: {
        username: '',
        password: '',
        comfirmPwd: '',
        captcha: ''
      },
      // 表单的校验规则
      rules: {
        phoneNum: [
          // validator:自定义校验函数
          { validator: validatePhoneNum, trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      },
      // 修改背景位置的变量：步骤1 -> 步骤2
      changePosition: false, // 控制步骤1的背景图片样式变为完成状态
      changeLine: false, // 控制步骤1 -> 步骤2之间的线
      chhangeBgp: false, // 控制步骤2的背景图片
      // 修改背景位置的变量：步骤2 -> 步骤3
      changePosition2To3: false, // 控制步骤2的背景图片样式变为完成状态
      changeLine2To3: false, // 控制步骤2 -> 步骤3之间的线
      // 验证码
      identifyCodes: '1234567890',
      identifyCode: '',
      // 点击下一步获取到的验证码
      code: ''
    }
  },
  methods: {
    // 获取手机验证码
    async handleGetCode () {
      // 点击发送获取手机验证码的请求
      let res = await getPhoneCode(this.phone_form.phoneNum)
      console.log(res)
    },
    // 下一步
    handleNext () {
      window.$('.container_info').show()
      window.$('.container_phone').hide()
      window.$('.register_success').hide()
      this.changePosition = true
      this.changeLine = true
      this.chhangeBgp = true
      // if (this.code) {
      //   window.$('.container_info').show()
      //   window.$('.container_phone').hide()
      //   window.$('.register_success').hide()
      //   this.changePosition = true
      //   this.changeLine = true
      //   this.chhangeBgp = true
      // } else {
      //   this.$message.error('请输入验证码')
      //   this.refreshCode()
      // }
    },
    // 处理注册事件
    async handleSignUp () {
      // 将密码进行加密
      let password = this.$md5(this.userInfo_form.password)
      if (this.phone_form.captcha === this.identifyCode) {
        // 发送注册请求
        let res = await register(this.phone_form.phoneNum, password, this.code)
        // 如果注册成功，则显示注册成功提示内容
        if (res.status === 200) {
        // 注册成功
        // 注册成功的内容显示，其他内容隐藏
          window.$('.register_success').show()
          window.$('.container_info').hide()
          // 修改改变样式的变量
          this.changePosition2To3 = true
          this.changeLine2To3 = true
          this.chhangeBgp = false
        } else {
        // 否则，提示用户注册失败
          this.$message.error('注册失败，请重试')
        }
      } else {
        this.$message.error('验证码错误')
      }
    },
    // 验证码 - 生成随机数字
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 验证码 - 重新生成随机数字
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[ this.randomNum(0, this.identifyCodes.length) ]
      }
      // 验证码
      console.log(this.identifyCode)
    }
  },
  mounted () {
    // this.identifyCode = ''
    // this.makeCode(this.identifyCodes, 4)
    this.refreshCode()
    // 一开始注册成功样式是隐藏的
    window.$('.register_success').hide()
    // 切换样式
    setInterval(() => {
      window.$('.el-icon-thumb').toggleClass('iconActive')
    }, 1000)
  }
  // components: {
  //   SIdentify
  // }
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
  span {
    position: absolute;
    bottom: 10px;
    right: 0;
    font-size: 16px;
    .go_login {
      color: #e22;
      cursor: pointer;
    }
  }
}
// 中间注册组件
.center {
  background-color: #fff;
  padding-top: 80px;
  height: 500px;
  // 进度条样式
  .progress_bar {
    width: 450px;
    height: 40px;
    margin: 0 auto;
    .pro-step {
      float: left;
      text-align: center;
      .step-index {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        color: #ccc;
        font-weight: 700;
        background: url(../../assets/front/reg-icon.png) no-repeat;
        background-position: -45px -200px;
      }
      .step-desc {
        margin-top: 10px;
      }
    }
    .cur-step {
      .step-index {
        color: #fff;
        background-position: 0 -200px;
      }
      .step-desc {
        color: #3b4;
      }
    }
    .pro-line {
      float: left;
      width: 124px;
      height: 10px;
      margin-top: 8px;
      background: url(../../assets/front/reg-icon.png) no-repeat 0 -100px;
    }
  }
  // 注册各个步骤的内容
  .register_con {
    width: 420px;
    margin: 40px auto 0;
    .nextStep,
    .signUp {
      width: 100%;
      margin-top: 10px;
      font-size: 17px;
      background-color: #e4393c;
      border-color: transparent;
      outline: none;
    }
  }
  // 电话部分
  .container_phone {
    // display: none;
    margin-top: 50px;
    .code {
      margin-bottom: 5px;
      display: flex;
      align-items: flex-end;
      .s-canvas {
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
      }
    }
  }
  // 用户信息部分
  .container_info {
    display: none;
    .el-input {
      margin-top: 30px;
      /deep/.el-input-group__prepend {
        background-color: #fff;
        letter-spacing: 2px; //增加或减少字符间的空白（字符间距）
      }
      /deep/.el-input__inner {
        border-left: 0;
        &:focus {
          border-color: #dcdfe6;
        }
      }
    }
    .signUp {
      margin-top: 30px;
    }
  }

  // 注册成功
  .register_success {
    // 成功提示
    .register_tip {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      color: #33bb44;
      font-size: 25px;
      .el-icon-circle-check {
        font-size: 40px;
        margin: 10px 0;
      }
    }
    // 去登录
    .to_login {
      float: right;
      margin-top: 50px;
      .el-icon-thumb {
        transform: rotate(90deg);
        font-size: 20px;
        &.iconActive {
          color: #e4393c;
          font-size: 22px;
        }
      }
      a {
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }

  // 修改背景图片的样式
  .change_position,
  .change_position_to3 {
    background-position: 0 0 !important;
    color: transparent !important;
  }
  .change_line,
  .change_Line_To3 {
    background-position: 0 -130px !important;
  }
  .change_bgp {
    background-position: 0px -200px !important;
    color: #fff !important;
  }
}
// 底部版权声明模块
.footer {
  background-color: #fff;
  border-top: 1px solid #ccc;
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
