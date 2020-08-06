// 修改'用户信息'组件
<template>
  <div class="user">
    <div class="common_title">
      <span>用户信息</span>
    </div>
    <div class="container-fluid common_con">
      <form class="form-horizontal article_form" id="form">
        <div class="form-group">
          <label for="inputEmail1" class="col-sm-2 control-label">用户名称：</label>
          <div class="col-sm-4">
            <input
              type="text"
              name="username"
              class="form-control username"
              id="inputEmail1"
              value="李思思"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail2" class="col-sm-2 control-label">昵称：</label>
          <div class="col-sm-4">
            <input
              type="text"
              name="nickname"
              class="form-control nickname"
              id="inputEmail2"
              value="哈哈思"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">邮箱：</label>
          <div class="col-sm-4">
            <input
              type="text"
              name="email"
              class="form-control email"
              id="inputEmail3"
              value="520@163.com"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">用户头像：</label>
          <div class="col-sm-10">
            <img src="@/assets/merchants/timg.jpg" alt class="user_pic" />
            <input style="display: block" name="userPic" type="file" id="exampleInputFile" @change="handleChange" />
            <!-- 给label标签的for属性赋值,值是input标签的id,那这样的话点击label就相当于点击了input -->
            <br />
            <label for="exampleInputFile" class="userImg">
              <img src="@/assets/merchants/timg.jpg" style="height: 50px;" alt />
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="inputEmail4" class="col-sm-2 control-label">密码：</label>
          <div class="col-sm-4">
            <input
              type="password"
              name="password"
              class="form-control password"
              id="inputEmail4"
              value="12345678"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10 edit">
            <button type="submit" class="btn btn-success btn-edit">修改</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { uploadUserPic } from '@/apis/user.js'
export default {
  methods: {
    async handleChange (event) {
      console.log(event)
      let filename = event.target.files[0].name
      let res = await uploadUserPic(filename)
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
.user {
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
.common_con {
  border-top: 0px;
  background-color: #fff;
  padding: 20px 0;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  position: relative;
  // justify-content: center;
  .userImg{
    position: absolute;
    top: 0;
    left: 15px;
    opacity: 0;
    img{
      width: 100px;
      height: 100px!important;
      border-radius: 50%;
    }
  }
}

.form-group label {
  font-size: 14px;
  text-align: right;
  font-weight: normal;
  color: #666;
  line-height: 38px;
}
.user_pic {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 50%;
}
.edit {
  margin-left: 16.66666667%;
}
</style>
