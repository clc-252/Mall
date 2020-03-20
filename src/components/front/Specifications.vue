// 商品详情页中商品规格的组件
<template>
  <div class="container">
    <div class="specifications">
      <!-- head -->
      <div class="title">
        <i class="sign"></i>
        <p>
          商品规格&nbsp;
          <i>SPECIFICATIONS</i>
        </p>
      </div>
      <div class="item clearfix" v-for="(item,index) in list" :key="index">
        <h3 class="fl">{{item.item_title}}</h3>
        <div class="list fl">
          <dl class="clearfix" v-for="(v,i) in item.detial" :key="i">
            <dt>{{v.detial_title}}</dt>
            <dd></dd>
            <dd>{{v.detial_text}}</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="package-list">
      <!-- head -->
      <div class="title">
        <i class="sign"></i>
        <p>
          商品包装&nbsp;
          <i>PACKAGING</i>
        </p>
      </div>
      <div class="content">
        <h3>包装清单</h3>
        <p>装有 iOS 12 的 iPhone、采用闪电接头的 EarPods、闪电转 USB 连接线、USB 电源适配器、资料。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 规格的数组
      list: [
        {
          item_title: '主体',
          detial: [
            {
              detial_title: '入网型号',
              detial_text: 'A2108'
            },
            {
              detial_title: '品牌',
              detial_text: 'Apple'
            },
            {
              detial_title: '产品名称',
              detial_text: 'iPhone XR'
            },
            {
              detial_title: '上市年份',
              detial_text: '2018年'
            },
            {
              detial_title: '上市月份',
              detial_text: '10月'
            }
          ]
        },
        {
          item_title: '基本信息',
          detial: [
            {
              detial_title: '机身颜色',
              detial_text: '黑色'
            },
            {
              detial_title: '机身长度（mm）',
              detial_text: '150.9'
            },
            {
              detial_title: '机身重量（g）',
              detial_text: '194'
            },
            {
              detial_title: '机身材质工艺',
              detial_text: '其他'
            },
            {
              detial_title: '机身宽度（mm）',
              detial_text: '75.7'
            },
            {
              detial_title: '机身材质分类',
              detial_text: '其他'
            },
            {
              detial_title: '机身厚度（mm）',
              detial_text: '8.3'
            },
            {
              detial_title: '运营商标志或内容',
              detial_text: '其他'
            }
          ]
        },
        {
          item_title: '主芯片',
          detial: [
            {
              detial_title: 'CPU品牌',
              detial_text: '以官网信息为准'
            },
            {
              detial_title: 'CPU型号',
              detial_text: '其他'
            }
          ]
        },
        {
          item_title: '存储',
          detial: [
            {
              detial_title: '存储卡',
              detial_text: '不支持存储卡'
            },
            {
              detial_title: '运行内存',
              detial_text: '其他'
            },
            {
              detial_title: '机身存储',
              detial_text: '128GB'
            }
          ]
        },
        {
          item_title: '屏幕',
          detial: [
            {
              detial_title: '分辨率',
              detial_text: '1792x828'
            },
            {
              detial_title: '屏幕材质类型',
              detial_text: 'LCD'
            },
            {
              detial_title: '主屏幕尺寸（英寸）',
              detial_text: '6.1英寸'
            }
          ]
        },
        {
          item_title: '后置摄像头',
          detial: [
            {
              detial_title: '后摄的主摄像素',
              detial_text: '1200万像素'
            },
            {
              detial_title: '后置主摄光圈',
              detial_text: 'f/1.8'
            },
            {
              detial_title: '摄像头数量',
              detial_text: '后置单摄'
            },
            {
              detial_title: '闪光灯',
              detial_text: '其他闪光灯'
            }
          ]
        },
        {
          item_title: '前置摄像头',
          detial: [
            {
              detial_title: '前置主摄光圈',
              detial_text: 'f/2.2'
            },
            {
              detial_title: '后摄的主摄像素',
              detial_text: '700万像素'
            }
          ]
        },
        {
          item_title: '电池信息',
          detial: [
            {
              detial_title: '电池是否可拆卸',
              detial_text: '电池不可拆卸'
            },
            {
              detial_title: '充电器',
              detial_text: '其他'
            },
            {
              detial_title: '无线充电',
              detial_text: '支持无线充电'
            },
            {
              detial_title: '电池容量（mAh）',
              detial_text: '以官网信息为准'
            }
          ]
        },
        {
          item_title: '操作系统',
          detial: [
            {
              detial_title: '操作系统',
              detial_text: 'iOS(Apple)'
            }
          ]
        },
        {
          item_title: '网络支持',
          detial: [
            {
              detial_title: '最大支持SIM卡数量',
              detial_text: '2个'
            },
            {
              detial_title: '网络频率（2G/3G）',
              detial_text: '以官网信息为准'
            },
            {
              detial_title: '5G网络',
              detial_text: '不支持5G'
            },
            {
              detial_title: '4G网络',
              detial_text: '4G TD-LTE(移动)；4G FDD-LTE(联通、电信)'
            },
            {
              detial_title: '双卡机类型',
              detial_text: '双卡双待'
            },
            {
              detial_title: '3G/2G网络',
              detial_text: '其它3G/2G'
            },
            {
              detial_title: 'SIM卡类型',
              detial_text: 'Nano SIM'
            }
          ]
        },
        {
          item_title: '数据接口',
          detial: [
            {
              detial_title: '数据传输接口',
              detial_text: 'WIFI;蓝牙;WiFi热点'
            },
            {
              detial_title: '耳机接口类型',
              detial_text: 'Lightning'
            },
            {
              detial_title: '充电接口类型',
              detial_text: 'Lightning（iPhone）'
            },
            {
              detial_title: 'NFC/NFC模式',
              detial_text: '其他'
            }
          ]
        },
        {
          item_title: '辅助功能',
          detial: [
            {
              detial_title: '常用功能',
              detial_text: '语音命令'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 20px;
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
}
.specifications {
  .item {
    padding: 20px 0 10px;
    border-bottom: 1px solid #eee;
    h3 {
      width: 100px;
      margin-left: 50px;
      font-weight: normal;
    }
    .list {
      dl {
        display: flex;
        width: 400px;
        line-height: 25px;
        dt {
          width: 50%;
          text-align: right;
        }
        dd {
          width: 15%;
          &:last-child {
            width: 100%;
          }
        }
      }
    }
  }
}
.content {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  h3 {
    font-weight: normal;
  }
}
</style>
