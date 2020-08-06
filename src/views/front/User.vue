// 个人信息组件
<template>
  <div class="user">
    <!-- 标题 -->
    <div class="user_title">
      <h3>设置</h3>
    </div>
    <!-- 主体部分 -->
    <div class="user_main">
      <!-- tab栏 -->
      <div class="main_title">
        <ul style="font-size:14px">
          <li
            v-for="(item,index) in ['个人信息','收货地址']"
            :key="index"
            :class="{tabActive:current===index}"
            @click="handleClick(index)"
          >{{item}}</li>
        </ul>
      </div>
      <!-- 用户信息部分 -->
      <div class="userInfo" v-if="current===0">
        <el-form
          :model="userRuleForm"
          :rules="userRules"
          ref="userRuleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名：" required>
            <el-input v-model="userRuleForm.username" disabled></el-input>
            <span style="margin-left:5px;vertical-align: text-top;font-size:12px;color:#c0c4cc">用于登录，不可修改!</span>
          </el-form-item>
          <el-form-item label="昵称：" prop="nickname">
            <el-input v-model="userRuleForm.nickname"></el-input>
          </el-form-item>
          <el-form-item label="头像：" required>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="handleBeforeUpload"
            >
              <img v-if="userRuleForm.imageUrl" :src="userRuleForm.imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="性别：" prop="gender">
            <el-radio v-model="userRuleForm.gender" label="1">男</el-radio>
            <el-radio v-model="userRuleForm.gender" label="2">女</el-radio>
            <el-radio v-model="userRuleForm.gender" label="3">保密</el-radio>
          </el-form-item>
          <el-form-item label="生日：" prop="date">
            <el-date-picker v-model="userRuleForm.date" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-form>
        <el-button type="info" plain @click="handleSubmit">提交</el-button>
      </div>
      <!-- 收货地址管理部分 -->
      <div class="address" v-if="current===1">
        <div class="tip" v-if="addressList.length===0">您暂时还没有收货地址</div>
        <el-button type="info" size="mini" @click="dialogFormVisible = true">新增收货地址</el-button>
        <!-- 展示已有的收货地址信息 -->
        <div class="address_list">
          <div class="address_item" v-for="(item,index) in addressList" :key="index">
            <h3>{{item.name}}-{{item.zoneAddress}}</h3>
            <div class="item-body">
              <ul>
                <li>
                  <span>收货人：</span>
                  <i>{{item.name}}</i>
                </li>
                <li>
                  <span>所在地区：</span>
                  <i>{{item.zoneAddress}}</i>
                </li>
                <li>
                  <span>详细地址：</span>
                  <i>{{item.street}}</i>
                </li>
                <li>
                  <span>手机：</span>
                  <i>{{item.tel}}</i>
                </li>
              </ul>
              <div class="operate fr">
                <span @click="handleUpdate(index)">编辑</span>
                <span @click="handleAddressDel(index)">删除</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 填写收货地址的信息 -->
        <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible">
          <el-form
            :model="addressForm"
            :rules="addressRules"
            ref="addressForm"
            label-position="right"
            label-width="100px"
          >
            <el-form-item label="收货人：" prop="name">
              <el-input v-model="addressForm.name"></el-input>
            </el-form-item>
            <el-form-item label="所在地区：" prop="address">
              <!-- 使用v-distpicker地区选择器插件 -->
              <v-distpicker @selected="handleSelected" :province="select.province.value" :city="select.city.value" :area="select.area.value"></v-distpicker>
            </el-form-item>
            <el-form-item label="详细地址：" prop="addressInfo">
              <el-input v-model="addressForm.addressInfo"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" prop="phone">
              <el-input v-model="addressForm.phone"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel(addressForm)">取 消</el-button>
            <el-button type="primary" @click="handleSure">保 存</el-button>
          </div>
        </el-dialog>
        <!-- 编辑收货地址信息 -->
        <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible2">
          <el-form
            :model="addressForm"
            :rules="addressRules"
            ref="addressForm"
            label-position="right"
            label-width="100px"
          >
            <el-form-item label="收货人：" prop="name">
              <el-input v-model="oneAddress.name"></el-input>
            </el-form-item>
            <el-form-item label="所在地区：" prop="address">
              <!-- 使用v-distpicker地区选择器插件 -->
              <!-- :province="oneAddress.select.province.value" :city="oneAddress.select.city.value" :area="oneAddress.select.area.value" -->
              <v-distpicker @selected="handleSelected" ></v-distpicker>
            </el-form-item>
            <el-form-item label="详细地址：" prop="addressInfo">
              <el-input v-model="oneAddress.street"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" prop="phone">
              <el-input v-model="oneAddress.tel"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel(addressForm)">取 消</el-button>
            <el-button type="primary" @click="handleSure">保 存</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo, addAddress, getAddress, delAddress, uploadUserPic } from '@/apis/user.js'
export default {
  data () {
    return {
      // 当前tab栏
      current: 0,
      // 用户信息的数据
      userRuleForm: {
        username: '',
        nickname: '',
        imageUrl: '',
        gender: '3',
        date: ''
      },
      // 用户信息的验证规则
      userRules: {
        nickname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      dialogFormVisible: false,
      dialogFormVisible2: false,
      // 收货地址表单数据
      addressForm: {
        name: '',
        address: '',
        addressInfo: '',
        phone: ''
      },
      // 收货地址表单的验证规则
      addressRules: {
        name: [
          { required: true, message: '请您填写收货人姓名', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请选择所在地区', trigger: 'blur' }
        ],
        addressInfo: [
          { required: true, message: '请您填写收货人详细地址', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请您填写收货人手机号码', trigger: 'blur' }
        ]
      },
      // 用户添加的收货地址数据
      addressList: [],
      // 收货地址
      select: {
        province: {
          code: '',
          value: ''
        },
        city: {
          code: '',
          value: ''
        },
        area: {
          code: '',
          value: ''
        }
      },
      oneAddress: [],
      // 暂时存储文件名
      filename: ''
    }
  },
  methods: {
    // 切换tab栏时触发
    handleClick (index) {
      this.current = index
    },
    // 上传前触发
    handleBeforeUpload () {},
    // 用户头像上传成功时触发
    handleAvatarSuccess (response, file) {
      console.log(file)
      this.filename = file.name
      this.userRuleForm.imageUrl = URL.createObjectURL(file.raw)
    },
    // 提交按钮
    async handleSubmit () {
      // let id = this.$store.state.user.userInfo.id
      // let token = this.$store.state.user.userInfo.sessionToken
      // let data = {
      //   icon: this.userRuleForm.imageUrl,
      //   nickName: this.userRuleForm.nickname
      // }
      // let res = await updateUserInfo(id, token, data)
      // console.log(res)

      // this.$alert('资料保存成功', '提示', {
      //   confirmButtonText: '确定',
      //   type: 'success'
      // })
      let res = await uploadUserPic(this.filename)
      console.log(res)
    },
    // 添加收货地址时点击取消按钮
    handleCancel (addressForm) {
      // 关闭弹出框
      this.dialogFormVisible = false
      this.dialogFormVisible2 = false
      console.log(this.addressForm.address)

      // 判断表单中是否有内容
      this.$refs.addressForm.validate(valid => {
        // 有内容
        if (!valid) {
          // 清空表单内容
          // Object.keys(this.addressForm.address.area).forEach(key => (this.addressForm.address.area[key] = ''))
          this.$refs.addressForm.resetFields()
        }
      })
      // 清空地区选择器的选择
    },
    // 地区选择最后一项时触发
    handleSelected (data) {
      console.log(data)
      this.addressForm.address = data
    },
    // 点击保存按钮触发
    handleSure () {
      // 判断表单中是否有内容
      this.$refs.addressForm.validate(async valid => {
        console.log(valid)
        // 全部填了为ture，否则为false
        // 有内容
        if (valid) {
          let id = this.$store.state.user.userInfo.id
          let token = this.$store.state.user.userInfo.sessionToken
          let data = {
            name: this.addressForm.name,
            tel: this.addressForm.phone,
            street: this.addressForm.addressInfo,
            zoneCode: this.addressForm.address.area.code,
            zipcode: '510000'
          }
          let res = await addAddress(id, token, data)
          console.log(res)
          this.addressList.push(res.data)
          this.addressList.forEach(v => {
            v.select = this.addressForm.address
          })
          localStorage.setItem('addressList', JSON.stringify(this.addressList))

          // 关闭弹出框
          this.dialogFormVisible = false
          // 清空输入的内容
          this.$refs.addressForm.resetFields()
        } else {
          // 提示用户完整填写内容
          this.$alert('请输入完整的收货地址信息', '提示', {
            confirmButtonText: '确定'
          })
        }
      })
    },
    // 删除收货地址时触发
    handleAddressDel (index) {
      this.$confirm('此操作将永久删除该收货, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          let id = this.$store.state.user.userInfo.id
          let addressId = this.addressList[index].id
          let token = this.$store.state.user.userInfo.sessionToken
          let res = await delAddress(id, addressId, token)
          console.log(res)

          // 从addressList数组中删除选中的数据
          this.addressList.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 编辑收货地址时触发
    handleUpdate (index) {
      this.dialogFormVisible2 = true
      let array = JSON.parse(localStorage.getItem('addressList'))
      this.oneAddress = array[index]
      console.log(this.oneAddress)
    }
  },
  async mounted () {
    // 监听当前应该展示的是 哪个界面
    this.current = Number(this.$route.query.tabCurrent)

    // 获取id和token值
    let id = this.$store.state.user.userInfo.id
    let token = this.$store.state.user.userInfo.sessionToken
    // 调用获取用户信息数据的方法
    let res = await getUserInfo(id, token)
    console.log(res)
    res.data.userImg = '//i.jd.com/commons/img/no-img_mid_.jpg'
    this.userRuleForm.username = res.data.phone
    this.userRuleForm.nickname = res.data.nickName
    this.userRuleForm.imageUrl = res.data.userImg

    // 获取用户收货地址的数据
    let res2 = await getAddress(id, token)
    console.log(res2)
    this.addressList = res2.data.results
    console.log(this.addressList)
  }
}
</script>

<style lang="less" scoped>
.user_title {
  height: 58px;
  line-height: 58px;
  padding-left: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
// 主体部分
.user_main {
  background-color: #fff;
  padding: 0 15px 20px;
  // 头部tab栏
  .main_title {
    padding: 15px 0 20px;
    ul {
      display: flex;
      justify-content: space-around;
      width: 150px;
      color: #333;
      li {
        padding: 5px 2px;
        cursor: pointer;
      }
    }
    // tab栏切换样式
    .tabActive {
      color: #e4393c;
      border-bottom: 2px solid #e4393c;
      font-weight: 700;
    }
  }
  // 用户信息部分的样式
  .userInfo {
    .el-input {
      width: 200px;
    }
    .el-button{
      outline: none;
      margin-left: 100px;
    }
    // 上传头像
    /deep/.avatar-uploader {
      .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
          border-color: #409eff;
        }
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }
  // 收货地址部分
  .address {
    .tip {
      margin-bottom: 20px;
      font-size: 14px;
    }
    .address_list {
      margin: 15px 0;
      .address_item {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #e6e6e6;
      }
      h3 {
        color: #333;
      }
      ul {
        margin-top: 20px;
        padding-left: 10px;
        line-height: 25px;
        span {
          display: inline-block;
          width: 60px;
          text-align: right;
        }
        i {
          color: #333;
        }
      }
      // 相关操作的样式
      .operate {
        margin-top: -10px;
        span {
          display: inline-block;
          margin-right: 10px;
          cursor: pointer;
          color: #005ea7;
          &:hover {
            color: #f30213;
          }
        }
      }
    }
  }
  // 取消按钮的外边框
  .el-button {
    outline: none;
  }
}
</style>
