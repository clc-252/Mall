// 搜索页的商品过滤的组件
<template>
  <div class="filters">
    <!-- 品牌 -->
    <div class="filters_item clearfix">
      <div class="filters_title">品牌:</div>
      <div class="filters_list" :class="{showMore:isShowMore}">
        <ul class="brand clearfix">
          <li
            v-for="(item,index) in brandList" :key="index"
          >
          <img :src="item.imgSrc" alt="">
          <p class="brand_name">{{item.name}}</p>
          </li>
        </ul>
        <!-- 更多 -->
        <span class="more" @click="isShowMore=!isShowMore">
          更多
          <i class="el-icon-arrow-down"></i>
        </span>
      </div>
    </div>
    <!-- 其他筛选条件 -->
    <div class="other_filters" v-for="(item,index) in otherList" :key="index">
      <div class="filters_title">{{item.title}}:</div>
      <div class="filters_list">
        <ul class="other clearfix">
          <li class="fl" v-for="(item,index) in item.list" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowMore: false,
      // 品牌数据
      brandList: [
        {
          imgSrc: require('../../assets/front/huawei.png'),
          name: '华为'
        },
        {
          imgSrc: require('../../assets/front/iphone.png'),
          name: 'Apple'
        },
        {
          imgSrc: require('../../assets/front/mi.png'),
          name: '小米'
        },
        {
          imgSrc: require('../../assets/front/honor.png'),
          name: '荣耀'
        },
        {
          imgSrc: require('../../assets/front/primary-oppo.png'),
          name: 'OPPO'
        },
        {
          imgSrc: require('../../assets/front/vivo.png'),
          name: 'vivo'
        },
        {
          imgSrc: require('../../assets/front/sumsung.png'),
          name: '三星'
        },
        {
          imgSrc: require('../../assets/front/tianyu.png'),
          name: '天语'
        },
        {
          imgSrc: require('../../assets/front/philips.png'),
          name: '飞利浦'
        },
        {
          imgSrc: require('../../assets/front/niuman.png'),
          name: '纽曼'
        },
        {
          imgSrc: require('../../assets/front/suoai.png'),
          name: '索爱'
        },
        {
          imgSrc: require('../../assets/front/realme.png'),
          name: 'realme'
        },
        {
          imgSrc: require('../../assets/front/doov.png'),
          name: '朵唯'
        },

        {
          imgSrc: require('../../assets/front/sugar.png'),
          name: 'sugar'
        },
        {
          imgSrc: require('../../assets/front/nokia.png'),
          name: '诺基亚'
        },
        {
          imgSrc: require('../../assets/front/zte.png'),
          name: '中兴'
        },
        {
          imgSrc: require('../../assets/front/agm.png'),
          name: 'AGM'
        },
        {
          imgSrc: require('../../assets/front/chuizi.png'),
          name: '锤子'
        }
      ],
      // 其他筛选条件的数组
      otherList: [
        {
          title: '品类',
          list: ['手机通讯']
        },
        {
          title: '操作系统',
          list: ['Andro(安卓)', 'iOS(Apple)', '其他']
        },
        {
          title: '屏幕尺寸',
          list: [
            '小屏（5英寸以下）',
            '中屏（5-6英寸）',
            '大屏（6-7英寸）',
            '超大屏（7英寸以上）'
          ]
        },
        {
          title: '运行内存',
          list: ['4G', '6G', '8G', '其他']
        },
        {
          title: '机身内存',
          list: ['8G', '16G', '32G', '64G', '128G', '256G', '512G', '其他']
        }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.filters {
  border: 1px solid #eee;
  .filters_item,
  .other_filters {
    display: flex;
    justify-content: space-around;
    padding: 15px;
    border-bottom: 1px dashed #eee;
  }
  .filters_title {
    color: #666;
    padding-left: 20px;
    width: 98px;
  }
  .filters_list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 62px;
    overflow: hidden;
    padding: 0 20px;
    ul.brand {
      width: 82%;
      margin-top: 2px;
      li {
        position: relative;
        float: left;
        width: 98px;
        height: 60px;
        margin-left: -1px;
        margin-top: -1px;
        border: 1px solid #eee;
        text-align: center;
        line-height: 55px;
        &:hover {
          position: relative;
          z-index: 2;
          border-color: #c81623;
          box-shadow: 2px 2px 3px rgba(0,0,0,.12);
        }
        &:hover .brand_name{
          display: block;
          color: #e4393c;
        }
        img{
          width: 80px;
          height: 40px;
          object-fit: cover;
        }
        .brand_name{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
          background-color: #fff;
          font-size: 14px;
        }
      }
    }
    .more {
      cursor: pointer;
    }
  }

  // 是否显示更多
  .showMore {
    height: 100%;
  }

  // 其他
  .other_filters {
    .filters_list {
      height: 15px;
    }
    ul.other {
      width: 82%;
      li {
        padding-bottom: 10px;
        margin-right: 20px;
        cursor: pointer;
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
