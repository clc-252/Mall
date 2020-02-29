<template>
  <div class="index">
    <!-- 头部 -->
    <CommentHeader></CommentHeader>
    <!-- banner模块 -->
    <div class="banner">
      <div class="w clearfix">
        <!-- 左侧全部商品分类列表 -->
        <div class="banner-left">
          <div class="cate_menu clearfix">
            <ul>
              <li
                v-on:mouseover="changeDisplay=!changeDisplay"
                v-on:mouseout="changeDisplay=!changeDisplay"
              >
                <a href="#">家用电器</a>
              </li>
              <li>
                <a href="#">手机</a>/
                <a href="#">运营商</a>/
                <a href="#">数码</a>
              </li>
              <li>
                <a href="#">电脑</a>/
                <a href="#">办公</a>
              </li>
              <li>
                <a href="#">家居</a>/
                <a href="#">家具</a>/
                <a href="#">家装</a>/
                <a href="#">厨具</a>
              </li>
              <li>
                <a href="#">男装</a>/
                <a href="#">女装</a>/
                <a href="#">童装</a>/
                <a href="#">内容</a>
              </li>
              <li>
                <a href="#">美妆</a>/
                <a href="#">个护清洁</a>/
                <a href="#">宠物</a>
              </li>
              <li>
                <a href="#">女鞋</a>/
                <a href="#">箱包</a>/
                <a href="#">钟表</a>/
                <a href="#">珠宝</a>
              </li>
              <li>
                <a href="#">男鞋</a>/
                <a href="#">运动</a>/
                <a href="#">户外</a>
              </li>
              <li>
                <a href="#">房产</a>/
                <a href="#">汽车</a>/
                <a href="#">汽车用品</a>
              </li>
              <li>
                <a href="#">母婴</a>/
                <a href="#">玩具乐器</a>
              </li>
              <li>
                <a href="#">食品</a>/
                <a href="#">酒类</a>/
                <a href="#">生鲜</a>/
                <a href="#">特产</a>
              </li>
              <li>
                <a href="#">艺术</a>/
                <a href="#">礼品鲜花</a>/
                <a href="#">农资绿植</a>
              </li>
              <li>
                <a href="#">医药保健</a>/
                <a href="#">计生情趣</a>
              </li>
              <li>
                <a href="#">图书</a>/
                <a href="#">文娱</a>/
                <a href="#">教育</a>/
                <a href="#">电子书</a>
              </li>
              <li>
                <a href="#">机票</a>/
                <a href="#">酒店</a>/
                <a href="#">旅游</a>/
                <a href="#">生活</a>
              </li>
              <li>
                <a href="#">理财</a>/
                <a href="#">众筹</a>/
                <a href="#">白条</a>/
                <a href="#">保险</a>
              </li>
              <li>
                <a href="#">安装</a>/
                <a href="#">维修</a>/
                <a href="#">清洗</a>/
                <a href="#">二手</a>
              </li>
              <li>
                <a href="#">工业品</a>
              </li>
            </ul>
          </div>
          <!-- hover展示对应的相关商品类别信息 -->
          <div
            class="cate_pop"
            :class="{showPop:changeDisplay}"
            v-on:mouseout="changeDisplay=!changeDisplay"
            v-on:mouseover="changeDisplay=!changeDisplay"
          >
            <div class="cate_part">
              <!-- 商品类别引导部分 -->
              <div class="cate_channel">
                <a href="//jiadian.jd.com/" class="cate_channel_lk" target="_blank">
                  家电馆
                  <i class="el-icon-arrow-right"></i>
                </a>
                <a href="//jiadian.jd.com/" class="cate_channel_lk" target="_blank">
                  家电专卖店
                  <i class="el-icon-arrow-right"></i>
                </a>
                <a href="//jiadian.jd.com/" class="cate_channel_lk" target="_blank">
                  家电服务
                  <i class="el-icon-arrow-right"></i>
                </a>
                <a href="//jiadian.jd.com/" class="cate_channel_lk" target="_blank">
                  企业采购
                  <i class="el-icon-arrow-right"></i>
                </a>
                <a href="//jiadian.jd.com/" class="cate_channel_lk" target="_blank">
                  商用电器
                  <i class="el-icon-arrow-right"></i>
                </a>
                <a href="//jiadian.jd.com/" class="cate_channel_lk" target="_blank">
                  以旧换新
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <!-- 商品类别详情部分 -->
              <div class="cate_detail">
                <dl class="cate_detail_item cate_detail_item1 clearfix">
                  <dt class="cate_detail_tit">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798"
                      class="cate_detail_tit_lk"
                      target="_blank"
                    >
                      电视
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=4155_76344&amp;sort=sort_rank_asc&amp;trans=1&amp;JL=2_1_0#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >超薄电视</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=4155_97865&amp;sort=sort_rank_asc&amp;trans=1&amp;JL=3_%E7%94%B5%E8%A7%86%E7%B1%BB%E5%9E%8B_%E5%85%A8%E9%9D%A2%E5%B1%8F#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >全面屏电视</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=4155_100812&amp;sort=sort_rank_asc&amp;trans=1&amp;JL=2_1_0#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >智能电视</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=4155_88234&amp;sort=sort_rank_asc&amp;trans=1&amp;JL=2_1_0#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >OLED电视</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=4155_122030"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >智慧屏</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=4155_110018&amp;sort=sort_rank_asc&amp;trans=1&amp;JL=2_1_0#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >4K超清电视</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=244_1486&amp;sort=sort_rank_asc&amp;trans=1&amp;JL=3_%E5%B1%8F%E5%B9%95%E5%B0%BA%E5%AF%B8_55%E8%8B%B1%E5%AF%B8#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >55英寸</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,798&amp;ev=244_58269&amp;sort=sort_rank_asc&amp;trans=1&amp;JL=2_1_0#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >65英寸</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17394,17395"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电视配件</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item2 clearfix">
                  <dt class="cate_detail_tit">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,870"
                      class="cate_detail_tit_lk"
                      target="_blank"
                    >
                      空调
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,870&amp;ev=1554_584893&amp;JL=3_%E7%A9%BA%E8%B0%83%E7%B1%BB%E5%88%AB_%E5%A3%81%E6%8C%82%E5%BC%8F%E7%A9%BA%E8%B0%83#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >空调挂机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,870&amp;ev=1554_584894&amp;JL=3_%E7%A9%BA%E8%B0%83%E7%B1%BB%E5%88%AB_%E7%AB%8B%E6%9F%9C%E5%BC%8F%E7%A9%BA%E8%B0%83#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >空调柜机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,13701"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >中央空调</a>
                    <a
                      href="//coll.jd.com/list.html?sub=36582"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >变频空调</a>
                    <a
                      href="//coll.jd.com/list.html?sub=36577"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >一级能效</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,17152"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >移动空调</a>
                    <a
                      href="//pro.jd.com/mall/active/jLwLxB3MD7ygsDnxzUmgQb8sFUQ/index.html"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >以旧换新</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item3 clearfix">
                  <dt class="cate_detail_tit">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,880"
                      class="cate_detail_tit_lk"
                      target="_blank"
                    >
                      洗衣机
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,880&amp;ev=998_605429&amp;JL=3_%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B_%E6%BB%9A%E7%AD%92#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >滚筒洗衣机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,880&amp;ev=998_5006&amp;JL=3_%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B_%E6%B4%97%E7%83%98%E4%B8%80%E4%BD%93#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >洗烘一体机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,880&amp;ev=998_5005&amp;JL=3_%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B_%E6%B3%A2%E8%BD%AE#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >波轮洗衣机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,880&amp;ev=998_77402&amp;JL=3_%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B_%E8%BF%B7%E4%BD%A0%E6%B4%97%E8%A1%A3%E6%9C%BA#J_crumbsBar"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >迷你洗衣机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,14420"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >烘干机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17394,17396"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >洗衣机配件</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item4 clearfix">
                  <dt class="cate_detail_tit">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,878"
                      class="cate_detail_tit_lk"
                      target="_blank"
                    >
                      冰箱
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,794,878&amp;ev=266_2342&amp;page=1&amp;trans=1&amp;JL=4_1_0#J_main"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >多门</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,878&amp;ev=266_2340&amp;page=1&amp;trans=1&amp;JL=4_1_0#J_main"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >对开门</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,878&amp;ev=266_2337&amp;page=1&amp;trans=1&amp;JL=4_1_0#J_main"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >三门</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,878&amp;ev=266_2338&amp;page=1&amp;trans=1&amp;JL=4_1_0#J_main"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >双门</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,12392"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >冷柜/冰吧</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,794,12401"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >酒柜</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17394,17397"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >冰箱配件</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item5 clearfix">
                  <dt class="cate_detail_tit">
                    <a href="//phat.jd.com/10-108.html" class="cate_detail_tit_lk" target="_blank">
                      厨卫大电
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,1300&amp;ev=%402047_584926&amp;go=0&amp;JL=3_%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B_%E6%B2%B9%E7%83%9F%E6%9C%BA"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >油烟机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,13298"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >燃气灶</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,1300&amp;ev=%402047_15280&amp;go=0&amp;JL=3_%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B_%E7%83%9F%E7%81%B6%E5%A5%97%E8%A3%85"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >烟灶套装</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,13881"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >集成灶</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,1301"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >消毒柜</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,13117"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >洗碗机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,13690"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电热水器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,13691"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >燃气热水器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,18577"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >空气能热水器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,13297,18578"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >太阳能热水器</a>
                    <a
                      href="//coll.jd.com/list.html?sub=1661"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >嵌入式厨电</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17394,17402"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >烟机灶具配件</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item6 clearfix">
                  <dt class="cate_detail_tit">
                    <a href="//cfxjd.jd.com/" class="cate_detail_tit_lk" target="_blank">
                      厨房小电
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,752,14421"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >破壁机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,759"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电烤箱</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,753"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电饭煲</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,881"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电压力锅</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,9249"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电炖锅</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,756"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >豆浆机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,755"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >料理机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,761"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >咖啡机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,882"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电饼铛</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,13116"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >榨汁机/原汁机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,760"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电水壶/热水瓶</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,758"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >微波炉</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,754"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电火锅</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,12397"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >养生壶</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,757"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电磁炉</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,899"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >面包机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,14381"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >空气炸锅</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,13702"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >面条机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,14382"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电陶炉</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,902"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >煮蛋器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,752,13118"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电烧烤炉</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item7 clearfix">
                  <dt class="cate_detail_tit">
                    <a href="//shjiadian.jd.com/" class="cate_detail_tit_lk" target="_blank">
                      生活电器
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,738,747"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >取暖电器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,748"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >加湿器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,749"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >空气净化器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,745"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >吸尘器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,17406"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >除螨仪</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,12394"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >扫地机器人</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,1283"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >除湿机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,12395"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >干衣机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,897"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >蒸汽拖把/拖地机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,1279"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >挂烫机/熨斗</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,806"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电话机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,750"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >饮水机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,898"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >净水器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,751"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电风扇</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,1278"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >冷风扇</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,738,14383"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >毛球修剪器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17394,17398"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >生活电器配件</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item8 clearfix">
                  <dt class="cate_detail_tit">
                    <a href="//gehu.jd.com/" class="cate_detail_tit_lk" target="_blank">
                      个护健康
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,739"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >剃须刀</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,741"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电动牙刷</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,740"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >电吹风</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,795"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >美容器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,14380"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >洁面仪</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,967"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >按摩器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,1289"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >健康秤</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,12400"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >卷/直发器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,742"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >剃/脱毛器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,1287"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >理发器</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,963"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >足浴盆</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,14418"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >足疗机</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,1276,1291"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >按摩椅</a>
                  </dd>
                </dl>
                <dl class="cate_detail_item cate_detail_item9 clearfix">
                  <dt class="cate_detail_tit">
                    <a href="//yingyinyule.jd.com/" class="cate_detail_tit_lk" target="_blank">
                      视听影音
                      <i class="el-icon-arrow-right"></i>
                    </a>
                  </dt>
                  <dd class="cate_detail_con">
                    <a
                      href="//list.jd.com/list.html?cat=737,17407,17410"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >家庭影院</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17407,17414"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >KTV音响</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17407,17411"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >迷你音响</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17407,17408"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >DVD</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17407,17412"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >功放</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17407,17413"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >回音壁</a>
                    <a
                      href="//list.jd.com/list.html?cat=737,17407,17415"
                      class="cate_detail_con_lk"
                      target="_blank"
                    >麦克风</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="banner-center clearfix">
          <div class="swiper">
            <!-- Carousel轮播（bootstrap） -->
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../../assets/front/banner1.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="../../assets/front/banner2.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="../../assets/front/banner3.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="../../assets/front/banner4.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://img20.360buyimg.com/da/s590x470_jfs/t1/75377/14/13217/74808/5da7c2c3Ea77af846/6566725b91a73432.jpg.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <!-- 右侧内容 -->
        <div class="banner-right">
          <!-- 快报 -->
          <div class="news">
            <div class="news_title clearfix">
              <h6>品优购快报</h6>
              <a href="//kuaibao.jd.com/?ids=229712068,228723951,228531811" target="_blank">
                更多
                <i class="el-icon-arrow-right"></i>
              </a>
            </div>
            <div class="news_list">
              <ul>
                <li class="news_item news_item__cms">
                  <a href="//kuaibao.jd.com/notice?id=826" target="_blank" class="news_link">
                    <span class="news_tag">公告</span>2020年春节物流服务公告
                  </a>
                </li>
                <li class="news_item news_item__recommend">
                  <a href="//kuaibao.jd.com/article?id=229712068" target="_blank" class="news_link">
                    <span class="news_tag">热评</span>冠状病毒如此盛行，你的口罩备好了吗？
                  </a>
                </li>
                <li class="news_item news_item__recommend">
                  <a href="//kuaibao.jd.com/article?id=228723951" target="_blank" class="news_link">
                    <span class="news_tag">最新</span>iPhone 11买早了，iPhone SE2正式确认
                  </a>
                </li>
                <li class="news_item news_item__recommend">
                  <a href="//kuaibao.jd.com/article?id=228531811" target="_blank" class="news_link">
                    <span class="news_tag">HOT</span>3款千元机，售价亲民，6+128G是标配！
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 其他服务入口 -->
          <div class="service_enrty">
            <ul class="service_list clearfix">
              <li class="service_item">
                <a href="#">
                  <img
                    src="//m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png"
                    alt
                  />
                  <span>话费</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="//m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png"
                    alt
                  />
                  <span>机票</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="//m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png"
                    alt
                  />
                  <span>酒店</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="//m.360buyimg.com/babel/jfs/t1/32403/22/14829/3699/5cbf0674E04723693/caa83ce9b881cd24.png"
                    alt
                  />
                  <span>游戏</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/39418/35/2029/3048/5cbf06bbE9a6e2beb/6a9b204b0a4cc3d0.png"
                    alt
                  />
                  <span>加油卡</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/31847/11/14820/1581/5cbf09bdE07a1e79c/1281c9340ef15c3e.png"
                    alt
                  />
                  <span>火车票</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/33078/37/6694/1685/5cbf09d0E5cea6165/693857001bfb3b17.png"
                    alt
                  />
                  <span>众筹</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/35979/1/3099/3447/5cbf09e4E90c0b4f4/e632d50688935da6.png"
                    alt
                  />
                  <span>理财</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/35663/12/5436/1443/5cbf0a13E614f5bb0/6ab7c7eb7caa4656.png"
                    alt
                  />
                  <span>白条</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/34018/19/6744/3066/5cbf09a9Eef05e8bd/6a08fe38fa0f8143.png"
                    alt
                  />
                  <span>电影票</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/74010/31/656/1821/5cedfd1dE574a6d39/21ed5b49bcde9067.png"
                    alt
                  />
                  <span>企业购</span>
                </a>
              </li>
              <li class="service_item">
                <a href="#">
                  <img
                    src="http://m.360buyimg.com/babel/jfs/t1/35852/40/5378/815/5cbf09f9E660e7e71/18b5679ed16e6a91.png"
                    alt
                  />
                  <span>礼品卡</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 广告 -->
          <div class="adv">
            <a
              class="adv_lk"
              href="https://pro.jd.com/mall/active/22WyJjMqTCbvjj1YB3pSJssBonLR/index.html"
              target="_blank"
              aria-label="推广位"
              style="background-image: url(&quot;https://img11.360buyimg.com/babel/jfs/t1/96650/8/10743/40603/5e21449bEa27a1f4e/b28ade938807b86c.png.webp&quot;);"
            ></a>
          </div>
        </div>
      </div>
      <div class="banner_background">
        <div
          class="banner_bg"
          style="position: absolute; width: 100%; height: 710px; left: 0px; top: 0px; margin: 0px;"
        >
          <a
            class="banner_bg_lk"
            target="_blank"
            href="https://pro.jd.com/mall/active/22WyJjMqTCbvjj1YB3pSJssBonLR/index.html"
            style="display: block; background: url(&quot;//img30.360buyimg.com/img/jfs/t1/92101/28/10873/105672/5e240fb4E25841ac0/efd1ed2c6e3cbb0c.png.webp&quot;) 50% 0px no-repeat; background-size:1600px;  height: 710px;"
          ></a>
        </div>
      </div>
    </div>
    <!-- 秒杀模块 -->
    <div class="seckill">
      <div class="seckill_inner w">
        <!-- 倒计时 -->
        <a href="#" class="seckill_countdown" target="_blank">
          <!-- 标题 -->
          <h3>秒杀专场</h3>
        </a>
        <!-- 秒杀商品列表 -->
        <div class="seckill_list clearfix">
          <div v-for="(item,index) in seckillList" :key="index" :class="seckillListClass">
            <a href="#">
              <img :src="item.imgSrc" alt />
              <h6>{{item.title}}</h6>
              <div class="seckill_item_price">
                <span :class="seckillPriceClass">¥{{item.seckillPrice}}</span>
                <span :class="originPriceClass">¥{{item.originPrice}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 每日特价和品牌闪购 -->
    <div class="special">
      <div class="special_inner w clearfix">
        <!-- 每日特价 -->
        <div class="daily_special" style="margin-right:5px;">
          <div class="daily_special_hd module_hd">
            <a
              class="daily_spec_hd_lk module_hd_lk"
              href="//miaosha.jd.com/specialpricelist.html"
              target="_blank"
            >
              <h3 class="module_title">每日特价</h3>
              <i class="el-icon-arrow-right module_icon"></i>
            </a>
          </div>
          <div class="daily_special_bd">
            <div class="special_list">
              <div class="tab">
                <div
                  class="tab_head"
                  v-for="(item,index) in ['精选','数码','美食','百货']"
                  :key="index"
                  @mouseover="handleMouseover(index)"
                >
                  <a href="#" :class="{tabActive:current===index}">{{item}}</a>
                </div>
              </div>
              <!-- 精选 -->
              <div class="special_item_first">
                <a href="#">
                  <img
                    src="//img30.360buyimg.com/mobilecms/s144x144_jfs/t1/90179/39/10943/175776/5e23c15aE6fd1c63c/2bf12a2e96583c54.jpg!q70.jpg.webp"
                    alt
                  />
                  <div class="special_item_msg">
                    <div class="special_item_title">同仁堂卓效牙膏护理牙龈肿痛</div>
                    <i>222天最低价</i>
                    <div class="special_item_price">
                      <span class="special_price">￥12.9</span>
                      <span class="original_cost">￥21.9</span>
                    </div>
                    <span style="color:#999;">热卖中</span>
                  </div>
                </a>
              </div>
              <div class="special_item_small" v-for="(item,index) in speciallList" :key="index">
                <a href="#">
                  <img :src="item.imgSrc" alt />
                  <div class="special_item_msg">
                    <div class="special_item_title">{{item.title}}</div>
                    <!-- <i>222天最低价</i> -->
                    <div class="special_item_price">
                      <p class="special_price">￥{{item.originPrice}}</p>
                      <p class="original_cost">￥{{item.specialPrice}}</p>
                    </div>
                    <span style="display:inline-block;margin-top:8px; color:#999;">热卖中</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 品牌闪购 -->
        <div class="lightning_buy">
          <div class="buy_hd module_hd">
            <a class="buy_hd_lk module_hd_lk" href="//red.jd.com" target="_blank">
              <h3 class="module_title">品牌闪购</h3>
              <i class="el-icon-arrow-right module_icon"></i>
            </a>
          </div>
          <div class="buy_bd">
            <a target="_blank" href="//red.jd.com/goodsList?brandId=74845" class="goods_first">
              <img
                class="buy-logo"
                src="//img14.360buyimg.com/deepvisual/s70x35_jfs/t1/99193/32/10619/9033/5e1eb6daE750b705f/5a5b951ee1acb357.png!cc_70x35.webp"
                alt="OPPO手机专场"
              />
              <h6 class="buy-name">OPPO手机专场</h6>
              <div class="buy-desc">
                <span class="buy-desc__promo">全场最高直降800！</span>
                <span class="buy-desc__extra">
                  <span class="extra-text">仅剩</span>
                  <div class="extra-day">
                    <span>2</span>天
                  </div>
                </span>
              </div>
              <img class="buy-goods" src="../../assets/front/oppo.png" alt="OPPO手机专场" />
            </a>
            <div class="goods-others">
              <a href="#" v-for="(item,index) in lightningBuyList" :key="index" class="goods-item">
                <div class="logo">
                  <img :src="item.imgSrc" alt />
                </div>
                <h6>{{item.goodsTitle}}</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发现好货 -->
    <div class="findNiceGoods">
      <div class="niceGoods w">
        <div class="niceGoods_logo">
          <a href="//fxhh.jd.com" target="_blank">
            <div class="logo-inner">
              <div class="logo-text">
                探索新生活
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>
        <!-- 好货推荐(向左无缝滚动图) -->
        <div class="nice_goods_recommends">
          <div class="goods_list">
            <superslide :options="options" class="slideBox">
              <!-- slides -->
              <div class="bd">
                <ul>
                  <li v-for="(item,index) in goodsList" :key="index">
                    <a href="javascript:;">
                      <img :src="item.imgSrc" />
                      <p>{{item.niceGoodsTitle}}</p>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- slot="prev" -->
              <a class="prev" href="javascript:void(0)" slot="prev"></a>
              <!-- slot="next" -->
              <a class="next" href="javascript:void(0)" slot="next"></a>
            </superslide>
          </div>
        </div>
      </div>
    </div>
    <!-- 优选区 -->
    <div class="optimization clearfix">
      <div class="optim_inner w">
        <!-- 新品首发 -->
        <div class="newArrival">
          <!-- 头部标题 -->
          <div class="new_hd module_hd">
            <a
              class="new_hd_lk module_hd_lk"
              href="//pro.jd.com/mall/active/2wzwK8McFT97vUgCXKwuV9Pr133m/index.html"
              target="_blank"
            >
              <h3 class="module_title">新品首发</h3>
              <i class="el-icon-arrow-right module_icon"></i>
            </a>
          </div>
          <!-- 新品列表 -->
          <div class="new_bd">
            <!--  arrow="never": 将左右按钮隐藏 -->
            <el-carousel :interval="4000" type="card" arrow="never">
              <el-carousel-item v-for="(item,index) in newArrivalList" :key="index">
                <a href="#">
                  <img :src="item.imgSrc" alt />
                  <div class="new_msg">
                    <h4>{{item.title}}</h4>
                    <p class="new_desc">{{item.desc}}</p>
                    <span class="new_price">￥{{item.price}}起</span>
                  </div>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 排行榜 -->
        <div class="rank">
          <!-- 头部标题 -->
          <div class="rank_hd module_hd">
            <a
              class="rank_hd_lk module_hd_lk"
              href="//pro.jd.com/mall/active/2wzwK8McFT97vUgCXKwuV9Pr133m/index.html"
              target="_blank"
            >
              <h3 class="module_title">排行榜</h3>
              <i class="el-icon-arrow-right module_icon"></i>
            </a>
          </div>
          <div class="rank_bd">
            <div class="rank_item" v-for="(item,index) in rankList" :key="index">
              <a href="#">
                <div class="rank_icon" v-bind:style="{backgroundImage:'url(' + item.rankBg + ')'}">
                  <p class="rank_top">TOP</p>
                  <p class="rank_num">{{item.rankNum}}</p>
                </div>
                <div class="rank_goods">
                  <img :src="item.imgSrc" alt />
                  <span class="rank_title">{{item.rankTitle}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- 逛好店 -->
        <div class="niceShop">
          <!-- 头部标题 -->
          <div class="niceShop_hd module_hd">
            <a
              class="niceShop_hd_lk module_hd_lk"
              href="//pro.jd.com/mall/active/2wzwK8McFT97vUgCXKwuV9Pr133m/index.html"
              target="_blank"
            >
              <h3 class="module_title">逛好店</h3>
              <i class="el-icon-arrow-right module_icon"></i>
            </a>
          </div>
          <div class="niceShop_bd">
            <div class="niceShop_item">
              <a
                href="//haodian.jd.com?sid=01380406&amp;shopid=1000000127&amp;skus=100008348542,63133783516,65425884309,64167426135,100010665518,100010817560&amp;source=pcscenes"
                target="_blank"
                class="shop-item"
              >
                <div class="shop-item_info">
                  <div class="item-title">Apple产品京东自营旗舰店</div>
                  <div class="item-tags">
                    <span class="text-tag text-tag--origin">自营</span>
                    <span class="text-tag text-tag--theme">潮流3C</span>
                  </div>
                  <div class="item-social">1868.7万人关注</div>
                </div>
                <img src="../../assets/front/rank_goods1.png" style=" width: 90px;" />
              </a>
              <a
                href="//haodian.jd.com?sid=01380313&amp;shopid=35309&amp;skus=63133783516,100008348542,65425884309,64167426135,100010665518,100010817560&amp;source=pcscenes"
                target="_blank"
                class="shop-item"
              >
                <div class="shop-item_info">
                  <div class="item-title">FILA斐乐官方旗舰店</div>
                  <div class="item-tags">
                    <span class="text-tag text-tag--theme">随心所动</span>
                  </div>
                  <div class="item-social">238.4万人关注</div>
                </div>
                <img src="../../assets/front/niceShop.png" style=" width: 90px;" />
              </a>
            </div>
          </div>
        </div>
        <!-- 领券中心 -->
        <div class="coupon">
          <!-- 头部标题 -->
          <div class="coupon_hd module_hd">
            <a
              class="coupon_hd_lk module_hd_lk"
              href="//pro.jd.com/mall/active/2wzwK8McFT97vUgCXKwuV9Pr133m/index.html"
              target="_blank"
            >
              <h3 class="module_title">领券中心</h3>
              <i class="el-icon-arrow-right module_icon"></i>
            </a>
          </div>
          <div class="coupon_bd">
            <div class="coupon_inner">
              <div class="coupon_list">
                <div class="coupon_item" v-for="(item,index) in couponList" :key="index">
                  <a class="coupon_lk" href="//a.jd.com/?cateId=0" target="_blank">
                    <div class="coupon_lk_wrap">
                      <img :src="item.imgSrc" class="lazyimg_img" />
                      <div class="coupon_info">
                        <div class="mod_price coupon_price">
                          <i>¥</i>
                          <span>{{item.couponPrice}}</span>
                        </div>
                        <div class="coupon_limit" style="color:#999;">满1000元可用</div>
                        <div class="coupon_desc">{{item.couponDesc}}</div>
                      </div>
                    </div>&nbsp;
                    <div class="coupon_more">
                      <div class="coupon_more_inner">更多好券</div>
                      <i class="el-icon-arrow-right coupon_more_arrow"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 频道广场 -->
    <div class="channels">
      <div class="w clearfix">
        <div class="channels_hd">
          <h3 class="floorhd_tit">频道广场</h3>
        </div>
        <div class="channels_bd">
          <div class="channels_item_big">
            <a href="//food.jd.com/" target="_blank">
              <img src="../../assets/front/channels_big_item1.png" />
            </a>
          </div>
          <div class="channels_item_big">
            <a href="//food.jd.com/" target="_blank">
              <img src="../../assets/front/channels_big_item2.png" />
            </a>
          </div>
          <div class="channels_item" v-for="(item,index) in channelsList" :key="index">
            <a href="#">
              <div class="item_tit">
                <span class="channels_item_title_main">{{item.channelsTitle}}</span>
                <span class="channels_item_title_aside">{{item.channelsAside}}</span>
              </div>
              <div class="item_img">
                <img :src="item.imgSrc1" />
                <img :src="item.imgSrc2" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 为你推荐 -->
    <div class="recommend">
      <div class="w clearfix">
        <div class="recom_hd">
          <h3 class="floorhd_tit">为你推荐</h3>
        </div>
        <RecommendGoods></RecommendGoods>
      </div>
    </div>
    <!-- 底部 -->
    <CommentFooter></CommentFooter>
  </div>
</template>

<script>
// 引入公共部分
import CommentHeader from '@/components/CommentHeader.vue'
import CommentFooter from '@/components/CommentFooter.vue'
// 引入'为你推荐'模块的组件
import RecommendGoods from '@/components/front/RecommendGoods'
export default {
  name: 'slideBox',
  data () {
    return {
      // 改变相关商品类别信息的变量
      changeDisplay: false,
      // 秒杀专场列表数据
      seckillList: [
        {
          imgSrc:
            '//img12.360buyimg.com/mobilecms/s140x140_jfs/t1/100069/36/10539/181292/5e197917E24756e90/a7e76ab1c3459d92.jpg.webp',
          title:
            '【买2送1，买3送2】小棕瓶寡肽原液嫩白紧致精华液抗皱细纹补发保湿玻尿酸紧致修护细化毛孔提亮肤色 寡钛原液',
          originPrice: '99.00',
          seckillPrice: '29.90'
        },
        {
          imgSrc:
            '//img11.360buyimg.com/mobilecms/s140x140_jfs/t1/96416/5/10279/178737/5e18489cEd550e037/db973cb5bf5ccd4c.png.webp',
          title:
            '瑞士I&W手表男表男士机械表全自动超薄进口机芯时尚商务罗马蓝宝石玻璃防水爱沃驰IW腕表 本色白面｜竹纹牛表带｜进口超薄机芯',
          originPrice: '2988',
          seckillPrice: '898.00'
        },
        {
          imgSrc:
            '//img14.360buyimg.com/mobilecms/s140x140_jfs/t1/101454/5/10616/196286/5e204c9fEe3a0ab52/19920bc39880098e.jpg.webp',
          title:
            '第一爱永生花彩虹满天星花束摆件礼盒同城鲜花速递情人节礼物生日礼物情侣创意礼品送女生女友',
          originPrice: '219.00',
          seckillPrice: '186.00'
        },
        {
          imgSrc:
            '//img30.360buyimg.com/mobilecms/s140x140_jfs/t1/108814/31/4503/48025/5e1ebe34Eecca531f/58bece6edcd1332e.jpg.webp',
          title:
            '【跨境直邮】美国SENBOWE真无线双耳蓝牙耳机 蓝牙5.0迷你运动通用安卓苹果 触摸带弹窗 磨砂白',
          originPrice: '229.00',
          seckillPrice: '79.00'
        }
      ],
      // 秒杀列表的类名
      seckillListClass: 'seckill_item',
      // 秒杀价的类名
      seckillPriceClass: 'seckillPrice',
      // 原价的类名
      originPriceClass: 'originPrice',
      // 当前tab栏
      current: 0,
      // 精选数据
      speciallList: [
        {
          imgSrc:
            '//img13.360buyimg.com/mobilecms/s144x144_jfs/t1/88769/8/10516/145170/5e1ea25cE3692c90d/a3e35d7e8b03bf36.jpg!q70.jpg.webp',
          title: '海外名品●手工轻奢定制款男鞋 特价88.6 原价294.99',
          originPrice: '294.99',
          specialPrice: '88.6'
        },
        {
          imgSrc:
            '//img13.360buyimg.com/mobilecms/s144x144_jfs/t1/101018/4/10389/149526/5e1937e1Ecfc7c3b6/4eef812cf65e93c2.jpg!q70.jpg.webp',
          title: '加厚羊羔毛一体裁剪棉衣外套 特价49.67 原价139',
          originPrice: '139',
          specialPrice: '49.67'
        },
        {
          imgSrc:
            '//img30.360buyimg.com/mobilecms/s144x144_jfs/t1/104040/1/10064/141749/5e16bfceEb90e7594/3533fb5e8aabadf6.jpg!q70.jpg.webp',
          title: '怡时尚 实木床1.5米双人床北欧 特价420 原价936',
          originPrice: '936',
          specialPrice: '420'
        },
        {
          imgSrc:
            '//img20.360buyimg.com/mobilecms/s144x144_jfs/t24436/93/2216221958/161454/6e30290c/5b77d0deN609d1f3a.jpg!q70.jpg.webp',
          title: '盆景室内阳台种植 蓝色三角梅 特价9.9 原价18.8',
          originPrice: '18.8',
          specialPrice: '9.9'
        }
      ],
      // 品牌闪购数据
      lightningBuyList: [
        {
          imgSrc:
            '//img13.360buyimg.com/deepvisual/s300x150_jfs/t4525/195/2587028850/7500/74023b7f/591d446dN7a34be20.png!cc_300x150.webp',
          goodsTitle: '自然堂闪购专场'
        },
        {
          imgSrc:
            '//img20.360buyimg.com/deepvisual/s300x150_jfs/t1/102709/14/9288/9231/5e0efb2cE1cc78ea0/7c2b72c01158277b.png!cc_300x150.webp',
          goodsTitle: '品牌钟表闪购专场'
        },
        {
          imgSrc:
            '//img12.360buyimg.com/deepvisual/s300x150_jfs/t1/90008/6/10656/13370/5e1d6163E7a2293fb/b93a8d3515b37ecd.png!cc_300x150.webp',
          goodsTitle: '曼秀雷敦闪购专场'
        },
        {
          imgSrc:
            '//img10.360buyimg.com/deepvisual/s300x150_jfs/t5719/134/9282112936/5109/684bc662/59845b0dNca991ce5.png!cc_300x150.webp',
          goodsTitle: 'vivo手机专场'
        },
        {
          imgSrc:
            '//img13.360buyimg.com/deepvisual/s300x150_jfs/t1/95987/40/10731/19479/5e1e7189Ef25e83e3/69de1be9a230564c.png!cc_300x150.webp',
          goodsTitle: '潮流箱包专场'
        },
        {
          imgSrc:
            '//img10.360buyimg.com/deepvisual/s300x150_jfs/t1/108883/11/4765/3971/5e24453aE988120e1/1d520545508aeed1.png!cc_300x150.webp',
          goodsTitle: '闪购美护钜惠购'
        }
      ],
      // slides配置
      options: {
        mainCell: '.bd ul',
        autoPlay: true, // 是否自动播放，默认为false
        /*
          effect：动画效果
          [v1.0]
           - fade：渐显
           - top：上滚动、left：左滚动
           - topLoop：上循环滚动、leftLoop：左循环滚动
           - topMarquee：上无缝循环滚动、 leftMarquee：左无缝循环滚动
           [v2.0]
           - fold：淡入淡出
           [v2.1]
           - slideDown：下拉效果
        */
        effect: 'leftMarquee',
        vis: 4, // visible，mainCell的可视范围个数，当实际内容个数少于可是个数时，不执行SuperSlide效果
        interTime: 50 // 毫秒，自动运行事件间隔，当effect为无缝滚动(topMarquee/leftMarquee)时，相当于运行速度
      },
      // slides数据
      goodsList: [
        {
          imgSrc: require('@/assets/front/niceGoods1.png'),
          niceGoodsTitle: '德国进口望远镜'
        },
        {
          imgSrc: require('../../assets/front/niceGoods2.png'),
          niceGoodsTitle: '闪迪 固态内存盘'
        },
        {
          imgSrc: require('../../assets/front/niceGoods3.png'),
          niceGoodsTitle: '进口超大混合零食礼包'
        },
        {
          imgSrc: require('../../assets/front/niceGoods5.png'),
          niceGoodsTitle: '帕拉丁高帮系带帆布鞋'
        },
        {
          imgSrc: require('../../assets/front/niceGoods4.png'),
          niceGoodsTitle: 'MAC 白桃奶茶色 口红'
        },
        {
          imgSrc: require('../../assets/front/niceGoods6.png'),
          niceGoodsTitle: '美的 广域控温电烤箱'
        },
        {
          imgSrc: require('../../assets/front/niceGoods8.png'),
          niceGoodsTitle: 'Justice 板面'
        },
        {
          imgSrc: require('../../assets/front/niceGoods7.png'),
          niceGoodsTitle: 'TF 滋润显色 口红花礼盒'
        }
      ],
      // 新品首发数据
      newArrivalList: [
        {
          imgSrc: require('../../assets/front/newArrival1.png'),
          title:
            '【新品预售】Redmi K30 120Hz流速屏 前置挖孔双摄 6GB+128GB 深海微光 游戏智能手机 小米 红米',
          desc: '120Hz流速屏',
          price: '1699.00'
        },
        {
          imgSrc: require('../../assets/front/newArrival2.png'),
          title:
            'OPPO Reno3 Pro 一体化双模5G 视频双防抖 骁龙765G 7.7mm轻薄机身 8GB+128GB 日出印象 全网',
          desc: '视频双防抖',
          price: '599.00'
        },
        {
          imgSrc: require('../../assets/front/newArrival3.png'),
          title:
            '惠普(HP)暗影精灵5 15.6英寸游戏笔记本电脑(i5-9300H 8G 512GSSD GTX1650 4G独显)',
          desc: '来这里发现更多新品',
          price: '3999.00'
        },
        {
          imgSrc: require('../../assets/front/newArrival4.png'),
          title:
            '任天堂 Nintendo Switch 国行续航加强版 NS家用游戏机 便携掌上游戏机 红蓝主机',
          desc: '国行来啦',
          price: '2099.00'
        }
      ],
      // 排行版数据
      rankList: [
        {
          imgSrc: require('../../assets/front/rank_goods1.png'),
          rankTitle:
            'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待',
          rankNum: '01',
          rankBg: require('../../assets/front/rank_bg1.png')
        },
        {
          imgSrc: require('../../assets/front/rank_goods2.png'),
          rankTitle:
            '荣耀20S 李现同款 3200万人像超级夜景 4800万超广角AI三摄 麒麟810 全网通版6GB+128GB 蝶羽白',
          rankNum: '02',
          rankBg: require('../../assets/front/rank_bg2.png')
        },
        {
          imgSrc: require('../../assets/front/rank_goods3.png'),
          rankTitle:
            'Apple iPhone 11 (A2223) 128GB 紫色 移动联通电信4G手机 双卡双待',
          rankNum: '03',
          rankBg: require('../../assets/front/rank_bg3.png')
        }
      ],
      // 优惠券数据
      couponList: [
        {
          imgSrc: require('../../assets/front/coupon1.png'),
          couponPrice: 100,
          couponDesc: '仅可购买指定Apple智能手表商品'
        },
        {
          imgSrc: require('../../assets/front/coupon2.png'),
          couponPrice: 100,
          couponDesc: '仅可购买部分自营华为手机商品'
        },
        {
          imgSrc: require('../../assets/front/coupon3.png'),
          couponPrice: 100,
          couponDesc: '仅可购买个人护理部分商品'
        }
      ],
      // 频道广场数据
      channelsList: [
        {
          channelsTitle: '企业购',
          channelsAside: '一站式企业采购平台',
          imgSrc1: require('../../assets/front/channels_item_1-1.png'),
          imgSrc2: require('../../assets/front/channels_item_1-2.png')
        },
        {
          channelsTitle: '京东拼购',
          channelsAside: '省钱省心',
          imgSrc1: require('../../assets/front/channels_item_2-1.png'),
          imgSrc2: require('../../assets/front/channels_item_2-2.png')
        },
        {
          channelsTitle: 'Joy寻宝',
          channelsAside: '懂你的Joy',
          imgSrc1: require('../../assets/front/channels_item_3-1.png'),
          imgSrc2: require('../../assets/front/channels_item_3-2.png')
        },
        {
          channelsTitle: '冰箱洗衣机',
          channelsAside: '品质生活必备',
          imgSrc1: require('../../assets/front/channels_item_4-1.png'),
          imgSrc2: require('../../assets/front/channels_item_4-2.png')
        },
        {
          channelsTitle: '家装城',
          channelsAside: '用心装好家一站式购齐',
          imgSrc1: require('../../assets/front/channels_item_5-1.png'),
          imgSrc2: require('../../assets/front/channels_item_5-2.png')
        },
        {
          channelsTitle: '玩3C',
          channelsAside: '潮流电子 炫酷来袭',
          imgSrc1: require('../../assets/front/channels_item_6-1.png'),
          imgSrc2: require('../../assets/front/channels_item_6-2.png')
        },
        {
          channelsTitle: '家用电器',
          channelsAside: '买家电 上京东',
          imgSrc1: require('../../assets/front/channels_item_7-1.png'),
          imgSrc2: require('../../assets/front/channels_item_7-2.png')
        },
        {
          channelsTitle: '京东时尚',
          channelsAside: '服饰美妆好物',
          imgSrc1: require('../../assets/front/channels_item_8-1.png'),
          imgSrc2: require('../../assets/front/channels_item_8-2.png')
        },
        {
          channelsTitle: '运动城',
          channelsAside: '生命在于运动',
          imgSrc1: require('../../assets/front/channels_item_9-1.png'),
          imgSrc2: require('../../assets/front/channels_item_9-2.png')
        },
        {
          channelsTitle: '厨房电器',
          channelsAside: '百变厨房大焕新',
          imgSrc1: require('../../assets/front/channels_item_10-1.png'),
          imgSrc2: require('../../assets/front/channels_item_10-2.png')
        },
        {
          channelsTitle: '京东手机',
          channelsAside: '一个极客的诞生',
          imgSrc1: require('../../assets/front/channels_item_11-1.png'),
          imgSrc2: require('../../assets/front/channels_item_11-2.png')
        },
        {
          channelsTitle: '新机首发',
          channelsAside: '有新机更有范',
          imgSrc1: require('../../assets/front/channels_item_12-1.png'),
          imgSrc2: require('../../assets/front/channels_item_12-2.png')
        }
      ]
    }
  },
  // 注册
  components: {
    CommentHeader,
    CommentFooter,
    RecommendGoods
  },
  methods: {
    handleMouseover (index) {
      this.current = index
    }
  }
}
</script>

<style lang='less' scoped>
/* ------------------- banner模块（商品分类、轮播图、其他服务入口iu）------------------------------- */
.banner {
  position: relative;
  background-color: #f4f4f4;
  .w {
    position: relative;
    z-index: 5 !important;
  }
  // 左侧全部商品分类列表
  .banner-left {
    float: left;
    margin: 0 10px 20px 0;
    .cate_menu {
      ul {
        float: left;
        width: 190px;
        background-color: #fefefe;
        padding: 10px 0;
        margin-top: 10px;
        li {
          height: 25px;
          padding-left: 18px;
          line-height: 25px;
          a {
            font-size: 14px;
            color: #333;
            &:hover {
              color: #c81623;
            }
          }
          &:hover {
            background-color: #d9d9d9;
          }
        }
      }
    }
    // 相关商品类别信息
    .cate_pop {
      display: none;
      position: absolute;
      left: 190px;
      top: 10px;
      z-index: 10;
      width: 700px;
      min-height: 468px;
      border: 1px solid #f7f7f7;
      background-color: #fff;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
      .cate_part {
        padding: 20px 0 10px;
        // 商品类别引导部分
        .cate_channel {
          padding-left: 20px;
          .cate_channel_lk {
            display: inline-block;
            margin-right: 10px;
            padding: 0 10px;
            height: 24px;
            line-height: 24px;
            background-color: #333;
            color: #fff;
            &:hover {
              background-color: #c81623;
            }
          }
        }
        // 商品类别详情部分
        .cate_detail {
          padding: 10px 0 0 20px;
          .cate_detail_item {
            // padding-left: 80px;
            .cate_detail_tit {
              float: left;
              width: 70px;
              margin: 3px 0;
              padding: 5px 0;
              line-height: 16px;
              text-align: right;
              font-weight: 700;
              white-space: nowrap; // 规定段落中的文本不进行换行
              i {
                font-weight: 700;
              }
            }
            .cate_detail_con {
              padding: 5px 0;
              overflow: hidden;
              .cate_detail_con_lk {
                float: left;
                margin: 3px 0;
                padding: 0 7px;
                height: 16px;
                line-height: 16px;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
  // 中间轮播图
  .banner-center {
    float: left;
    .swiper {
      width: 590px;
      height: 470px;
      margin: 10px 0 20px;
    }
  }
  // 右侧内容
  .banner-right {
    float: right;
    width: 200px;
    height: 470px;
    margin: 10px 0 20px;
    background-color: #fff;
    // 品优购快报
    .news {
      // 快报标题
      .news_title {
        padding: 7px 10px;
        margin: 5px;
        border-bottom: 1px solid #e4e4e4;
        line-height: 16px;
        h6 {
          float: left;
          font-size: 15px;
          font-weight: 700;
          color: #333;
        }
        a {
          float: right;
        }
      }
      // 快报列表
      .news_list {
        margin: 0 5px;
        border-bottom: 1px solid #e4e4e4;
        ul {
          margin: 10px;
          .news_item {
            height: 16px;
            line-height: 16px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #999;
            margin-bottom: 5px;
            .news_tag {
              display: inline-block;
              height: 16px;
              width: 35px;
              line-height: 16px;
              text-align: center;
              color: #e1251b;
              background-color: rgba(225, 37, 27, 0.08);
              margin-right: 5px;
            }
          }
        }
      }
    }
    // 其他服务入口
    .service_enrty {
      .service_list {
        margin: 8px;
        border-bottom: 1px solid #e4e4e4;
        .service_item {
          float: left;
          width: 33.3%;
          height: 50px;
          text-align: center;
          img {
            margin: 0 auto;
            display: block;
            width: 28px;
            height: 28px;
          }
        }
      }
    }
    // 广告
    .adv {
      width: 100%;
      height: 120px;
      .adv_lk {
        display: block;
        width: 100%;
        height: 120px;
        background-repeat: no-repeat;
        background-position: bottom;
      }
    }
  }
  // banner背景
  .banner_backgroud {
    // width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 10px;
  }
}
/* ----------------------- 秒杀模块 ---------------------------- */
.seckill {
  height: 250px;
  .seckill_countdown {
    float: left;
    display: inline-block;
    width: 190px;
    height: 250px;
    // background:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置
    background: #e83632 url(../../assets/front/seckill_countdown_bg.png)
      no-repeat 50%;
    h3 {
      font-size: 30px;
      font-weight: 700;
      color: #fff;
      text-align: center;
      margin-top: 30px;
    }
  }
  // 秒杀商品列表
  .seckill_list {
    float: left;
    padding: 14px 0;
    background-color: #fff;
    .seckill_item {
      float: left;
      width: 202px;
      text-align: center;
      border-right: 1px solid #eee;
      &:last-child {
        border: none;
      }
      a {
        display: inline-block;
        text-align: center;
        h6 {
          width: 160px;
          margin: 15px auto 0;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        img {
          margin: 20px auto 0;
        }
        div {
          border: 1px solid #e1251b;
          line-height: 24px;
          margin-top: 8px;
          background-color: #e1251b;
          position: relative;
          .seckillPrice {
            display: inline-block;
            width: 90px;
            text-align: center;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            &:before {
              content: "";
              width: 0;
              height: 0;
              border-color: transparent #fff transparent transparent;
              border-style: solid;
              border-width: 25px 8px 0 0;
              position: absolute;
              top: 0;
              left: 83px;
            }
          }
          .originPrice {
            display: inline-block;
            width: 66px;
            background: #fff;
            text-align: center;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
/* ---------------------------每日特价和品牌闪购------------------------------ */
.special {
  margin-top: 20px;
  .daily_special,
  .lightning_buy {
    float: left;
    width: 497px;
    background-color: #fff;
  }
  .daily_special_bd {
    padding-left: 10px;
    position: relative;
    .tab {
      position: absolute;
      top: -42px;
      right: 20px;
      .tab_head {
        float: left;
        margin: 0 14px;
        a {
          display: inline-block;
          font-size: 14px;
          padding-bottom: 2px;
          cursor: pointer;
          line-height: 19px;
        }
      }
    }
    .special_item_first {
      position: relative;
      float: left;
      width: 155px;
      height: 265px;
      margin-right: 6px;
      background-color: rgba(109, 126, 146, 0.05);
      text-align: center;
      img {
        width: 130px;
        margin-top: 40px;
      }
      .special_item_msg {
        padding: 0 6px;
        .special_item_title {
          margin: 9px 0 4px 0;
          height: 19px;
          line-height: 19px;
          width: 150px;
          overflow: hidden;
          font-size: 14px;
          text-align: center;
          color: #333;
          &:hover {
            color: #e1251b;
          }
        }
        i {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 90px;
          height: 24px;
          background-image: linear-gradient(-10deg, #f6e73d, #f7a400);
          line-height: 24px;
        }
        .special_item_price {
          color: #999;
          margin-top: 5px;
          margin-bottom: 10px;
          .special_price {
            font-size: 18px;
            color: #e1251b;
          }
          .original_cost {
            text-decoration: line-through;
          }
        }
      }
    }
    .special_item_small {
      float: left;
      width: 150px;
      height: 89px;
      margin: 18px 0 38px 9px;
      a {
        img {
          float: left;
          width: 80px;
          height: 80px;
        }
        .special_item_msg {
          float: left;
          width: 60px;
          margin-left: 6px;
          .special_item_title {
            line-height: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .special_price {
            margin-top: 5px;
            font-size: 14px;
            color: #e1251b;
            line-height: 16px;
          }
          .original_cost {
            text-decoration: line-through;
            color: #999;
          }
        }
      }
    }
  }
  // 品牌闪购
  .buy_bd {
    padding: 5px 0 15px 10px;
    a.goods_first {
      display: inline-block;
      width: 240px;
      height: 265px;
      background: linear-gradient(
        180deg,
        rgba(119, 255, 233, 0.05),
        rgba(0, 93, 70, 0.05)
      );
      text-align: center;
      img.buy-logo {
        margin-top: 15px;
      }
      h6.buy-name {
        font-size: 16px;
        color: #333;
        font-weight: 700;
        margin-top: 6px;
      }
      .buy-desc {
        color: #666;
        margin: 10px 0;
      }
      img.buy-goods {
        width: 130px;
      }
    }
    .goods-others {
      float: right;
      width: 240px;
      .goods-item {
        position: relative;
        float: left;
        width: 110px;
        height: 95px;
        margin-right: 5px;
        &:nth-child(2n-1):after {
          position: absolute;
          right: 0;
          top: 10px;
          content: "";
          width: 1px;
          height: 60px;
          background: linear-gradient(180deg, white, #eeeeee, #eeeeee, white);
        }
      }
      .logo {
        width: 100px;
        height: 50px;
        img {
          width: 100%;
        }
      }
      h6 {
        margin-top: 6px;
        color: #666;
        text-align: center;
        font-weight: normal !important;
        overflow: hidden;
      }
    }
  }
}

/* ------------------------------- 发现好货 --------------------------------- */
.findNiceGoods {
  margin-top: 20px;
  .niceGoods {
    height: 250px;
    .niceGoods_logo {
      float: left;
      height: 100%;
      margin-right: 10px;
      a {
        display: inline-block;
        width: 190px;
        height: 100%;
        background-image: url(../../assets/front/niceGoods_bg.png);
        .logo-inner {
          width: 160px;
          height: 90px;
          margin: 15px auto 0;
          background: url(../../assets/front/findNiceGoods.png) no-repeat;
          .logo-text {
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px;
            padding: 55px 0 10px 20px;
            i {
              width: 16px;
              height: 16px;
              margin-left: 5px;
              color: #fff;
              line-height: 16px;
              text-align: center;
              font-size: 12px;
              border: 1px solid #fff;
              border-radius: 50%;
              &:hover {
                background-color: #e1251b;
                border-color: #e1251b;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .nice_goods_recommends {
      float: left;
      width: 800px;
      height: 100%;
      background-color: #fff;
      .goods_list {
        height: 100%;
        overflow: hidden;
        li {
          float: left;
          width: 150px;
          height: 180px;
          margin: 50px 50px 0 0;
          position: relative;
          &:nth-child(2n-1) {
            img {
              margin-top: -15px;
            }
            p {
              position: absolute;
              top: -25px;
              left: 0;
              width: 150px;
            }
          }
          &:nth-child(2n) {
            img {
              margin-top: 13px;
            }
            p {
              margin-bottom: 10px;
            }
          }
          img {
            width: 150px;
            height: 150px;
          }
          p {
            text-align: center;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
  }
}
/* --------------------------------- 优选区 -------------------------------- */
.optimization {
  margin-top: 20px;
  // 新品首发、排行榜、逛好店、领券中心公共样式
  .newArrival,
  .rank,
  .niceShop,
  .coupon {
    float: left;
    width: 242px;
    height: 340px;
    margin-right: 10px;
    background-color: #fff;
  }
  // 新品首发
  .newArrival {
    background: #fff url(../../assets/front/newArrival_bg.png) no-repeat 50%;
    background-size: cover;
    height: 340px;
    .new_bd {
      height: 100%;
      overflow: hidden;
      a {
        display: inline-block;
        width: 130px;
        height: 246px;
        text-align: center;
        margin-left: -2px;
        img {
          width: 104px;
          height: 104px;
          margin-top: 10px;
        }
        .new_msg {
          opacity: 0;
          color: #999;
          h4 {
            margin-top: 30px;
            margin-bottom: 8px;
            line-height: 19px;
            font-size: 14px;
            font-weight: normal;
            color: #333;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .new_price {
            display: inline-block;
            font-size: 18px;
            color: #e1251b;
            margin-top: 20px;
          }
        }
      }
      .el-carousel {
        // width: 258px;
        // height: 300px;
        .is-active {
          .new_msg {
            opacity: 1;
          }
        }
        /deep/.el-carousel__indicators--outside{
          display: none;
        }
      }
    }
  }
  // 排行榜
  .rank {
    .rank_bd {
      padding: 0 8px;
      .rank_item {
        margin: 16px 0;
      }
      a {
        .rank_icon {
          float: left;
          width: 28px;
          height: 40px;
          margin-top: 12px;
          text-align: center;
          background-repeat: no-repeat;
          background-size: contain;
          .rank_top {
            color: #b3aea6;
            margin: 2px 0;
          }
          .rank_num {
            font-size: 16px;
            color: #fff;
            font-weight: 600;
          }
        }
        .rank_goods {
          margin-left: 35px;
          img {
            width: 70px;
            height: 70px;
          }
          .rank_title {
            float: right;
            display: block;
            width: 120px;
            margin-top: 12px;
            font-size: 14px;
            color: #333;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
  // 逛好店
  .niceShop {
    .niceShop_bd {
      padding: 0 8px;
      .niceShop_item {
        height: 128px;
        a {
          display: block;
          width: 228px;
          height: 128px;
          padding: 9px;
          padding-top: 15px;
          &:first-child {
            background-color: #f6eeee;
          }
          &:last-child {
            margin-top: 10px;
            background-color: #ebf2ea;
          }
          .shop-item_info {
            float: left;
            width: 120px;
            .item-title {
              font-size: 14px;
              color: #333;
              line-height: 20px;
              margin-bottom: 5px;
            }
            .text-tag {
              border-radius: 2px;
              padding: 0 2px;
              height: 18px;
              line-height: 17px;
              margin-right: 5px;
            }
            .text-tag--origin {
              color: #e2231a;
              border: 1px solid #e2231a;
            }
            .text-tag--theme {
              color: #596fab;
              border: 1px solid #596fab;
            }
            .item-social {
              margin-top: 18px;
              color: #999;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  // 领券中心
  .coupon {
    margin-right: 0;
    .coupon_bd {
      background: url(../../assets/front/coupon_bg.png) no-repeat bottom;
      background-size: 240px 280px;
      .coupon_inner {
        padding: 0 10px;
        .coupon_list {
          height: 280px;
          .coupon_item {
            height: 80px;
            padding: 15px 7px;
            img {
              float: left;
              border-radius: 50%;
              margin: 0 5px;
            }
            .coupon_info {
              float: left;
              width: 120px;
              .coupon_price {
                font-family: impact, sans-serif;
                height: 34px;
                line-height: 34px;
                font-size: 14px;
                color: #e33333;
                span {
                  font-size: 28px;
                  margin-right: 3px;
                }
              }
              .coupon_desc {
                font-size: 12px;
                line-height: 18px;
                height: 18px;
                color: #333;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .coupon_more {
              position: relative;
              .coupon_more_inner {
                display: inline-block;
                width: 1px;
                line-height: 15px;
                vertical-align: middle;
              }
              .coupon_more_arrow {
                position: absolute;
                right: 0;
                top: 23px;
              }
            }
          }
        }
      }
    }
  }
}
/* --------------------------- 频道广场 ----------------------------- */
.channels {
  .channels_hd {
    height: 65px;
    position: relative;
  }
  .channels_bd {
    .channels_item_big {
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      img {
        width: 240px;
        height: 298px;
      }
    }
    .channels_item {
      float: left;
      background-color: #fff;
      margin: 0 10px 10px 0;
      .item_tit {
        padding: 14px 0;
        margin-left: 19px;
        margin-right: 10px;
        .channels_item_title_main {
          font-size: 22px;
          color: #333;
          font-weight: 700;
        }
        .channels_item_title_aside {
          font-size: 14px;
          color: #999;
          margin-left: 5px;
        }
      }
      .item_img {
        padding-left: 20px;
        padding-bottom: 4px;
        img {
          width: 90px;
          margin-right: 20px;
        }
      }
    }
  }
}
/* ----------------------------- 为你推荐 -------------------------------- */
.recommend {
  .recom_hd {
    height: 65px;
    position: relative;
  }
}

// 鼠标移入移出改变元素的显示隐藏
.showPop {
  display: block !important;
}
// 各商品模块头部标题样式
.module_hd {
  height: 60px;
  padding: 10px 15px 0;
  .module_hd_lk {
    display: inline-block;
    .module_title {
      float: left;
      font-weight: 700;
      font-size: 24px;
      color: #333;
      line-height: 32px;
    }
    .module_icon {
      margin: 10px 0 0 10px;
      width: 16px;
      height: 16px;
      color: #e1251b;
      line-height: 16px;
      // text-align: center;
      padding-left: 2px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid #e1251b;
      border-radius: 50%;
    }
    &:hover .module_icon {
      background-color: #e1251b;
      color: #fff;
    }
  }
}
.floorhd_tit {
  width: 150px;
  height: 45px;
  font-size: 28px;
  text-align: center;
  line-height: 45px;
  margin: 20px auto 0;
  color: #333;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 40%;
    margin-top: -10px;
    width: 25px;
    height: 20px;
    background: url(../../assets/front/floorhd_tit_bg.png) no-repeat;
  }
  &::after {
    right: 40%;
    background-position: -25px 0;
  }
  &:before {
    left: 40%;
    background-position: 0 0;
  }
}

/*清除浮动*/
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}
.clearfix {
  *zoom: 1;
}
// 动态绑定每日特价的tab栏样式
.tabActive {
  color: #e1251b;
  border-bottom: 2px solid #e1251b;
}
</style>
