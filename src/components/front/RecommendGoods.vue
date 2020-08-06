// 首页“为你推荐”模块的组件
<template>
  <!-- 为你推荐模块的组件 -->
  <div class="recommend">
    <div class="choiceness">
      <ul>
        <li
          v-for="(item,index) in goodsList"
          :key="index"
          @click="$router.push({ name: 'GoodsDetail',query:{id:item.id} })"
        >
          <a href="JavaScript:void(0)">
            <img :src="item.coverIcon" alt />
            <!-- 信息 -->
            <div class="title">{{item.title}}</div>
            <div class="price">
              <i>¥</i>
              <span>{{item.price}}</span>
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
  </div>
</template>

<script>
// 引入获取商品列表数据的方法
import { getGoodsList } from '@/apis/goods.js'
// import { getGoodsData } from '@/apis/goods.js'
import axios from 'axios'
export default {
  data () {
    return {
      // 为你推荐模块商品数据
      goodsList: []
    }
  },
  async mounted () {
    // 请求商品列表
    let res = await getGoodsList()
    if (res.status === 200) {
      console.log(process.env)

      this.goodsList.push(...res.data.results)
      this.goodsList.map(v => {
        v.price = parseFloat(v.price / 100).toFixed(2)
      })
    }

    let appSecret = '95cea2a805c4886c54d80d8a2c15d523'
    let data = {
      appKey: '5ea5acab9ff48',
      version: 'v1.2.2',
      pageId: 1
    }
    // let sign = this.makeSign(data, appSecret)
    // let res2 = await getGoodsData(data, sign)
    // console.log(res2)

    // 测试
    axios({
      method: 'get',
      url: '/api/goods/get-goods-list',
      params: {
        ...data,
        sign: this.makeSign(data, appSecret)
      }
    }).then(res => {
      console.log(res)
    })

    // axios.get(`/api/goods/get-goods-list?appKey=${data.appKey}&version=${data.version}&sign=${this.makeSign(data, appSecret)}`).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    // 生成签名
    makeSign (data, appSecret) {
      let str = ''
      let index = 0
      let sortPor = []

      for (let key in data) {
        sortPor.push(`${key}=${data[key]}`)
      }

      // 排序
      sortPor.sort()
      console.log(sortPor)

      // 转url
      for (let key in sortPor) {
        str = `${str}${index === 0 ? '' : '&'}${sortPor[key]}`
        console.log(str)

        index++
      }

      // md5加密
      // let ret = this.$md5.update(`${str}&key=${appSecret}`).digest('hex')
      let ret = this.$md5(`${str}&key=${appSecret}`).toUpperCase()
      console.log(ret)

      return ret
    }
  }
}
</script>

<style lang='less' scoped>
// 精选列表
.choiceness {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    position: relative;
    width: 190px;
    background-color: #fff;
    text-align: center;
    padding: 20px 15px;
    margin: 0 12px 15px 0;
    &:hover .item_hover {
      display: block;
      // background-image: linear-gradient(180deg,rgba(255,255,255,.2),white)
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.2) 50%,
        white 90%,
        white
      );
    }
    &:nth-child(5n) {
      margin-right: 0;
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
      text-align: left;
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
      .el-icon-close {
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
        color: #fff;
        &:hover {
          background-color: #c81623;
        }
        .el-icon-view {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
