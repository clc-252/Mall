// 售后保障组件
<template>
  <div class="after_sale">
    <div class="title">
        <i class="sign"></i>
        <p>
          售后保障&nbsp;
          <i>INSTRUCTIONS</i>
        </p>
      </div>
    <div class="after_sale_content">
      <ul>
        <li class="item clearfix" v-for="(item,index) in afterSaleList" :key="index">
          <i class="icon fl"></i>
          <div class="item_content fl">
            <h4 class="item_title">{{item.title}}</h4>
            <div class="item_desc">
              <p>{{item.desc_summarize}}</p>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 声明 -->
    <div class="state">
        <!-- 权利声明 -->
        <strong>权利声明：</strong>
        <p>京东上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东重要的经营资源，未经许可，禁止非法转载使用。</p>
        <p><b>注：</b>本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</p>
        <br>
        <br>
        <!-- 价格说明 -->
        <strong>价格说明：</strong>
        <p><b>京东价：</b>京东价为商品的销售价，是您最终决定是否购买商品的依据。</p>
        <p><b>划线价：</b>商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
        <p><b>折扣：</b>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>
        <p><b>异常问题：</b>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      afterSaleList: [
        {
          title: '厂家服务',
          desc_summarize: '本产品全国联保，享受三包服务，质保期为：一年质保',
          desc:
            '如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！(注:如厂家在商品介绍中有售后保障的说明,则此商品按照厂家说明执行售后保障服务。)'
        },
        {
          title: '京东承诺',
          desc_summarize:
            '京东平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！',
          desc:
            '注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！(注:如厂家在商品介绍中有售后保障的说明,则此商品按照厂家说明执行售后保障服务。)'
        },
        {
          title: '正品行货',
          desc_summarize:
            '京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。',
          desc: ''
        },
        {
          title: '全国联保',
          desc_summarize:
            '凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！',
          desc:
            '注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！'
        },
        {
          title: '无忧退货',
          desc_summarize: '',
          desc:
            '客户购买京东自营商品7日内（含7日，自客户收到商品之日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
// 头部样式
.title {
  padding: 20px 0 10px 10px;
  color: #e4393c;
  font-size: 18px;
  background: url(//shop.vipstatic.com/img/detail/detial_line-hash-73c7b229.png?a6c60ccd)
    repeat-x left bottom;
  .sign {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-bottom: 2px;
    border: 2px solid #e4393c;
    transform: rotate(45deg);
  }
  p {
    display: inline-block;
    padding-left: 10px;
  }
  p i {
    color: #999;
  }
}
.after_sale_content {
  padding: 0 20px 0 30px;
  .item {
    margin-top: 30px;
    &:nth-child(4) .icon{
        background-position: -64px -75px;
    }
    &:nth-child(5) .icon{
        background-position: 0 -75px;
    }
    .icon {
      width: 32px;
      height: 32px;
      margin-right: 10px;
      border-radius: 50%;
      background: url(../../assets/front/__sprite.png) no-repeat -32px -75px;
    }
    .item_content {
      width: 700px;
      .item_title {
        line-height: 32px;
        font-size: 14px;
        color: #e4393c;
      }
      .item_desc {
        line-height: 20px;
      }
    }
  }
}
// 声明
.state{
    padding: 20px 10px;
    strong{
        line-height: 30px;
        color: #e4393c;
    }
    p{
        line-height: 20px;
    }
}
</style>
