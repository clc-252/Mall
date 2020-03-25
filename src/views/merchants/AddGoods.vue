// 新增商品的组件
<template>
  <div class="add_goods">
    <div class="common_title">
      <span>新增商品</span>
    </div>
    <!-- 主体部分 -->
    <div class="add_main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品标题">
          <el-input v-model="form.goodsname" placeholder="请输入商品的标题"></el-input>
        </el-form-item>
        <el-form-item label="商品类别">
          <!-- multiple：允许多选   multiple-limit：最多选三个 -->
          <el-select
            v-model="form.selectMultiple"
            style="width:300px;"
            placeholder="选择1~3种商品类别"
            multiple
            :multiple-limit="3"
          >
            <el-option label="多选1" value="1"></el-option>
            <el-option label="多选2" value="2"></el-option>
            <el-option label="多选3" value="3"></el-option>
            <el-option label="多选4" value="4"></el-option>
            <el-option label="多选5" value="5"></el-option>
            <el-option label="多选6" value="6"></el-option>
            <el-option label="多选7" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input placeholder="请输入商品价格" v-model="form.price">
            <template slot="prepend">¥</template>
          </el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="5"
            multiple
            :on-exceed="handleExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <!-- 点击查看大图显示大图 -->
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品介绍"></el-form-item>
        <el-form-item label="包装清单">
          <el-input type="textarea" autosize placeholder="请输入商品的包装清单" v-model="form.textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        goodsname: '',
        selectMultiple: [], // 多选默认值
        price: null,
        textarea: ''
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    // 上传图片超出限制时触发的提示
    handleExceed () {
      this.$message({
        message: '最多只能上传5张照片哦！',
        type: 'warning'
      })
    },
    // 移除图片触发的时间
    handleRemove () {},
    // 预览图片触发的时间
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    onSubmit () {}
  }
}
</script>

<style lang="less" scoped>
.add_goods {
  padding-bottom: 30px;
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
.add_main {
  padding: 20px 30px 0;
  // 禁止拖动文本域
  /deep/.el-textarea__inner {
    resize: none;
  }
}
</style>
