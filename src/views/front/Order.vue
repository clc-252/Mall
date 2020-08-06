<template>
  <div class="order">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <!-- 标题 -->
    <span class="order_title">结算页</span>
    <!-- 主体部分 -->
    <div class="main w clearfix">
      <div class="checkout-tit">
        <span class="tit-txt">填写并核对订单信息</span>
      </div>
      <div class="order_main">
        <!-- 收货地址 -->
        <div class="address">
          <div class="step-tit">
            <h3>收货人信息</h3>
            <span class="add_address" @click="dialogFormVisible=true">新增收货地址</span>
          </div>
          <div class="step-cont">
            <ul>
              <li v-for="(item,index) in addressList" :key="index">
                <div class="name" @click="handleClick(index)" :class="{active:current===index}">
                  <span>{{item.name}}-{{item.zoneAddress}}</span>
                  <i :class="{active:current===index}"></i>
                </div>
                <div class="addr-detail">
                  <div class="userInfo">
                    <span class="addr-name">{{item.name}}</span>
                    <span class="addr-info">{{item.zoneAddress}} {{item.street}}</span>
                    <span class="addr-tel">{{item.phone}}</span>
                  </div>
                  <div class="edit">
                    <span>编辑</span>
                    <span @click="handleAddressDel(index)">删除</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 支付方式 -->
        <div class="payment">
          <div class="step-tit">
            <h3>支付方式</h3>
          </div>
          <div class="step-cont">
            <div class="name">
              <span>在线支付</span>
              <i></i>
            </div>
          </div>
        </div>
        <!-- 商品 -->
        <div class="goods">
          <div class="step-tit">
            <h3>送货清单</h3>
          </div>
          <div class="cont">
            <!-- 配送方式 -->
            <div class="dis-modes">
              <h4>配送方式</h4>
              <div class="modes_text">
                <span>快递运输</span>
                <i></i>
              </div>
              <!-- 运费险 -->
            </div>
            <!-- 商品列表 -->
            <div class="goods_list">
              <div class="goods_item" v-for="(item,index) in orderInfo" :key="index">
                <el-row>
                  <el-col :span="4" style="margin-right:5px">
                    <a href="javascript:void(0)">
                      <img :src="item.productIcon" alt class="goodsImg" />
                    </a>
                  </el-col>
                  <el-col :span="10">
                    <a href="javascript:void(0)">
                      <div class="goods_tit">{{item.title}}</div>
                    </a>
                    <div class="size">
                      <strong>颜色：</strong>
                      <span>{{item.color}}</span>
                    </div>
                    <div class="afterSale">
                      <i></i>
                      <span style="color: #6679b3">支持7天无理由退货</span>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="price">￥{{item.price}}</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="num">x{{item.count}}</div>
                  </el-col>
                  <el-col :span="2">
                    <div class="state">有货</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 小计 -->
      <div class="order-summary clearfix">
        <div class="statistic fr">
          <div class="allPrice">
            <span>
              <i class="allNum">{{allGoodsNum}}</i>件商品，总商品金额：
            </span>
            <span style="color:#333">￥{{totalPrice}}</span>
          </div>
          <!-- 运费 -->
          <div class="freight">
            <span>运费：</span>
            <span class="freightPrice" style="color:#333">￥0.00</span>
          </div>
        </div>
      </div>
      <!-- 底部结算信息 -->
      <div class="trade-foot">
        <!-- 应付金额 -->
        <div class="price-info">
          <span class="price-tit" style="color:#333">应付总额：</span>
          <span class="price-num">￥{{totalPrice}}</span>
        </div>
        <!-- 收货信息 -->
        <div class="consignee-info">
          <span class="mr20" id="sendAddr">寄送至： {{addressList[current].zoneAddress}} {{addressList[current].street}}</span>
          <span id="sendMobile">收货人：{{addressList[current].name}} {{addressList[current].phone}}</span>
        </div>
      </div>
      <!-- 提交按钮 -->
      <button class="submitBtn fr" @click="handleSubmit">提交订单</button>

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
    </div>
    <!-- 底部 -->
    <CommentFooter></CommentFooter>
  </div>
</template>

<script>
// 引入公共部分
import CommentHeader from '@/components/CommentHeader.vue'
import CommentFooter from '@/components/CommentFooter.vue'
import { getAddress, addAddress, delAddress } from '@/apis/user.js'
// import { submitOrder } from '@/apis/order.js'
export default {
  data () {
    return {
      orderInfo: [],
      // 商品总数
      allGoodsNum: 0,
      // 总价格
      totalPrice: 0,
      // 收货地址数据
      addressList: [
        {
          zoneAddress: ''
        }
      ],
      // 当前选中的地址
      current: 0,
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
      dialogFormVisible: false,
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
      }
    }
  },
  // 注册
  components: {
    CommentHeader,
    CommentFooter
  },
  methods: {
    // 提交订单时触发
    handleSubmit () {
      // 获取id和token值
      let id = this.$store.state.user.userInfo.id
      let token = this.$store.state.user.userInfo.sessionToken
      // 收集所需要的数据
      let data = {
        payType: 3,
        receiverAddressId: this.addressList[this.current].id,
        items: this.orderInfo
      }
      // let res = await submitOrder(id, token, data)
      // console.log(res)
      this.$store.dispatch('submitOrder', { id, token, data }).then((res) => {
        console.log(res)
      })

      // 懒加载
      this.$message({
        message: '订单正在生成中，请稍等',
        iconClass: 'el-icon-loading'
      })
      setTimeout(() => {
        this.$router.push({ name: 'Pay' })
      }, 2000)
    },
    // 选择收货地址时触发
    handleClick (index) {
      this.current = index
    },
    // 隐藏电话号码
    phoneNumFilter (num) {
      return num.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    },
    // 添加收货地址时点击取消按钮
    handleCancel (addressForm) {
      // 关闭弹出框
      this.dialogFormVisible = false
      // 判断表单中是否有内容
      this.$refs.addressForm.validate(valid => {
        // 有内容
        if (!valid) {
          // 清空表单内容
          this.$refs.addressForm.resetFields()
        }
      })
      // 清空地区选择器的选择
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
    // 地区选择最后一项时触发
    handleSelected (data) {
      console.log(data)
      this.addressForm.address = data
    }
  },
  async mounted () {
    this.orderInfo = JSON.parse(localStorage.getItem('orderInfo'))
    // 计算商品总件数和应付总额
    this.orderInfo.forEach(v => {
      this.allGoodsNum += v.count
      if (v.price >= 10000) {
        v.price = v.price / 100
        this.totalPrice += (v.count * v.price) / 100
      } else {
        this.totalPrice += (v.count * v.price)
      }
    })

    // 获取id和token
    let id = this.$store.state.user.userInfo.id
    let token = this.$store.state.user.userInfo.sessionToken
    // 获取用户收货地址的数据
    let res = await getAddress(id, token)
    console.log(res)
    this.addressList = res.data.results
    // 隐藏电话号码中间几位
    this.addressList.map(v => {
      v.phone = this.phoneNumFilter(v.tel)
    })
  }
}
</script>

<style lang='less' scoped>
// 重新定义头部样式
/deep/.header {
  border: none;
  height: 135px;
  .searchArea,
  .shopcar,
  .navitems {
    display: none;
  }
  .logo .logo-bd {
    margin: 40px auto;
  }
}
.order {
  background-color: #fff;
}
.order_title {
  position: absolute;
  top: 100px;
  left: 370px;
  font-size: 24px;
}
// 主体部分
.main {
  .checkout-tit {
    height: 42px;
    line-height: 42px;
    font-size: 16px;
  }
  .order_main {
    padding: 0 20px 20px;
    border: 1px solid #f0f0f0;
    // 标题
    .step-tit {
      line-height: 40px;
      height: 40px;
      color: #333;
    }
    // 收货地址
    .address {
      .step-tit {
        display: flex;
        justify-content: space-between;
        .add_address {
          color: #005ea7;
          cursor: pointer;
          &:hover {
            color: #e4393c;
          }
        }
      }
      // 内容
      .step-cont {
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
        ul {
          padding: 0 20px;
          li {
            display: flex;
            margin-bottom: 10px;
            height: 30px;
            &:hover .addr-detail{
              background-color: #fff3f3;
            }
            &:hover .addr-detail .edit{
              display: block;
            }
            .name {
              position: relative;
              padding: 8px 15px;
              min-width: 120px;
              text-align: center;
              border: 1px solid #ddd;
              cursor: pointer;
              &.active {
                border: 2px solid #c81623;
              }
              &:hover {
                border: 2px solid #c81623;
              }
              i {
                position: absolute;
                bottom: 0;
                right: 0;
                display: inline-block;
                width: 13px;
                height: 14px;
                &.active {
                  background: url(../../assets/front/choosed.png) no-repeat;
                }
              }
            }
            .addr-detail {
              flex: 1;
              display: flex;
              justify-content: space-between;
              padding: 0 10px;
              line-height: 26px;
              span {
                margin-right: 10px;
              }
              .edit {
                display: none;
                span {
                color: #005ea7;
                cursor: pointer;
                &:hover {
                  color: #e4393c;
                }
                }
              }
            }
          }
        }
      }
    }
    // 支付方式
    .payment {
      .step-cont {
        padding-left: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
        .name {
          position: relative;
          padding: 7px 0;
          width: 100px;
          text-align: center;
          border: 2px solid #c81623;
          cursor: pointer;
          i {
            position: absolute;
            bottom: 0;
            right: 0;
            display: inline-block;
            width: 13px;
            height: 14px;
            background: url(../../assets/front/choosed.png) no-repeat;
          }
        }
      }
    }
    // 送货清单
    .goods {
      .cont {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
        .dis-modes {
          width: 270px;
          padding: 0 20px;
          background-color: #f7f7f7;
          h4 {
            line-height: 32px;
          }
          .modes_text {
            position: relative;
            padding: 7px 0;
            width: 120px;
            text-align: center;
            border: 2px solid #c81623;
            cursor: pointer;
            i {
              position: absolute;
              bottom: 0;
              right: 0;
              display: inline-block;
              width: 13px;
              height: 14px;
              background: url(../../assets/front/choosed.png) no-repeat;
            }
          }
        }
        .goods_list {
          padding: 10px 20px;
          background-color: #f3fbfe;
        }
        .goods_item {
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
          .el-col {
            text-align: center;
          }
          .el-col-10 {
            text-align: left;
            .size {
              line-height: 40px;
            }
            .afterSale {
              i {
                display: inline-block;
                width: 18px;
                height: 18px;
                margin-right: 5px;
                background: url(//misc.360buyimg.com/user/purchase/2.0.0/css/i/purchase-icon-201808.png)
                  no-repeat 0 -84px;
                vertical-align: middle;
              }
            }
          }
          .goodsImg {
            width: 90px;
            height: 90px;
            border: 1px solid #ddd;
          }
          .goods_tit {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 20px;
          }
          .price {
            color: #e4393c;
            font-weight: 700;
            font-size: 14px;
          }
        }
      }
    }
  }
  // 小计
  .order-summary {
    .statistic {
      width: 300px;
      margin-bottom: 10px;
      margin-right: 20px;
      margin-top: 20px;
      text-align: right;
      .allPrice,
      .freight {
        margin-bottom: 5px;
        height: 24px;
        line-height: 24px;
      }
      .allNum {
        margin-right: 2px;
        color: #e4393c;
      }
    }
  }
  // 底部结算信息
  .trade-foot {
    padding: 15px 10px 15px 0;
    line-height: 20px;
    text-align: right;
    border-top: 1px solid #e6e6e6;
    width: 980px;
    color: #999;
    background-color: #f4f4f4;
    .price-info,
    .consignee-info {
      margin-right: 10px;
      line-height: 25px;
    }
    .price-num {
      display: inline-block;
      min-width: 122px;
      text-align: right;
      color: #e4393c;
      font-family: Verdana;
      font-weight: 700;
      font-size: 18px;
    }
    .mr20 {
      margin-right: 20px;
    }
  }
  .submitBtn {
    position: relative;
    width: 135px;
    height: 36px;
    line-height: 36px;
    margin: 8px 40px 20px 0;
    background-color: #e1373a;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    display: inline-block;
    border-radius: 3px;
    cursor: pointer;
    border: 0;
  }
}
</style>
