// 修改'商家信息'组件
<template>
  <div class="seller">
    <div class="common_title">
      <span>店铺信息</span>
    </div>
    <div class="common_con">
      <!-- 提示 -->
      <p class="tip">
        注意：
        <span>'*'</span>为必填项！！！
      </p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
        class="demo-ruleForm"
      >
        <el-form-item label="店铺名称" prop="shopName">
          <el-input v-model="ruleForm.shopName" placeholder="请输入店铺名称"></el-input>
        </el-form-item>
        <el-form-item label="店铺详细地址" prop="address">
          <el-input v-model="ruleForm.address" placeholder="请输入店铺详细地址"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名" prop="sellerName">
          <el-input v-model="ruleForm.sellerName" placeholder="请输入联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系人手机" prop="sellerPhone">
          <el-input v-model="ruleForm.sellerPhone" placeholder="请输入联系人手机"></el-input>
        </el-form-item>
        <el-form-item label="联系人邮箱" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入联系人邮箱"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号" prop="license">
          <el-input v-model="ruleForm.license" placeholder="请输入营业执照号"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人" prop="representative">
          <el-input v-model="ruleForm.representative" placeholder="请输入法定代表人姓名"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人身份证" prop="idCard">
          <el-input v-model="ruleForm.idCard" placeholder="请输入法定代表人身份证号码"></el-input>
        </el-form-item>
      </el-form>
      <!-- 提交按钮 -->
      <el-row>
        <el-button type="success" @click="handleEdit">修改</el-button>
        <el-button type="info" @click="handleCancel">取消</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        shopName: '',
        address: '',
        sellerName: '',
        sellerPhone: '',
        email: '',
        license: '',
        representative: '',
        idCard: ''
      },
      rules: {
        shopName: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' },
          { min: 3, pattern: /^[^ ]+$/, message: '至少包含3个字符，且不允许有空格', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入店铺的详细地址', trigger: 'blur' },
          { pattern: /^([\u4E00-\u9FA5A-Za-z0-9_]+(省|市|区|县|道|路|街|号)){5,}$/, message: '地址格式不正确，例：xx省xx市xx区xx（镇/县）xx（路/街/道）xx号', trigger: 'blur' }
        ],
        sellerName: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' },
          // 正则表达式：只能包含纯中文或纯英文，且至少包含一个字符
          {
            pattern: /^[A-z]+$|^[\u4E00-\u9FA5]+$/,
            message: '只能包含纯汉字或纯英文',
            trigger: 'blur'
          }
        ],
        sellerPhone: [
          { required: true, message: '请输入联系人手机', trigger: 'blur' },
          {
            pattern: /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/,
            message: '手机号码格式不正确',
            trigger: 'blur'
          }
        ],
        email: [
          { required: true, message: '请输入联系人邮箱', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
            message: '邮箱格式不正确',
            trigger: 'blur'
          }
        ],
        license: [
          { required: true, message: '请输入18位的营业执照号', trigger: 'blur' },
          { pattern: /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9Y])$/, message: '营业执照号格式错误', trigger: 'blur' }
        ],
        representative: [
          { required: true, message: '请输入法定代表人姓名', trigger: 'blur' },
          {
            pattern: /^[A-z]+$|^[\u4E00-\u9FA5]+$/,
            message: '只能包含纯汉字或纯英文',
            trigger: 'blur'
          }
        ],
        idCard: [
          {
            required: true,
            message: '请输入法定代表人身份证号码',
            trigger: 'blur'
          },
          {
            pattern: /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/,
            message: '身份证号码格式不正确',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 点击修改按钮触发
    handleEdit () {
      // 发送请求，修改店铺信息
    },
    // 点击取消按钮触发
    handleCancel () {
      this.$confirm('此操作将取消当前的修改, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '取消成功!'
        })
      })
    }
  }
}
</script>

<style lang='less' scoped>
.seller {
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
// 主体内容的样式
.common_con {
  padding: 0 50px 30px;
  // 提示信息的样式
  .tip {
    margin: 20px 0;
    font-size: 14px;
    letter-spacing: 2px;
    span {
      color: #e1251b;
      font-weight: bold;
    }
  }
  .el-input {
    width: 500px;
  }
  // 按钮
  .el-row {
    margin-left: 150px;
  }
}
</style>
