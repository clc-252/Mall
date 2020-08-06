// 引入封装好的axios
import axios from '@/utils/myaxios.js'

// 封装一个获取商品列表的方法
export const getGoodsList = () => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/products/simplify/client',
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7'
    }
  })
}

// 封装一个获取商品详情的方法
export const getGoodsDetail = (id) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/products/client/${id}`,
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'mtFgYiWcwFVWdchfrIOtTjOeTNyKdUK-vxUHMHTxBCM',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    }
  })
}

// 获取热门商品
export const getHotGoods = () => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/recommendArea/findRecommendAreaProduct/client',
    'method': 'GET',
    'headers': {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-apikey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw'
    }
  })
}

// 首页限时抢购商品
export const getSeckillGoods = () => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/home/recommendArea/findRecommendAreaProduct/home_area_01/client',
    'method': 'GET',
    'headers': {
      'x-ml-apikey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'x-ml-appid': '56b17529169e7d000197d2d7'
    }
  })
}

// 获取商品评论
export const getComment = (id) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/products/${id}/comment`,
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    }
  })
}

// 按输入关键字搜索商品
export const searchGoods = (keyword) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/products?where=%7b%22title%22%3a%7b%22%24like%22%3a%22${keyword}%25%22%7d%7d`,
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    }
  })
}

// 商品评价统计测试接口
export const text = (id) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/products/${id}/comment/100`,
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    }
  })
}

// 添加商品到收藏
export const followGoods = (id, token, data) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}/favor`,
    'method': 'POST',
    'headers': {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-session-token': token,
      'content-type': 'application/json'
    },
    'processData': false,
    data
  })
}

// 获取收藏列表
export const getFollowList = (id, token) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}/favor`,
    'method': 'GET',
    'headers': {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-session-token': token,
      'content-type': 'application/json'
    }
  })
}

/* ---------------------- 商家管理后台的api -------------------------- */
// 获取商品列表数据
export const getGoodsListData = (num, pageSize) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/products/client?skip=${num}&limit=${pageSize}`,
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    }
  })
}

// 获取商品分类列表
export const getGoodsCate = () => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/category',
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    }
  })
}

// 获取评论列表
export const getCommentList = () => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/products/1/comment?skip=0&limit=10&order=-createdAt',
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    }
  })
}

// 添加商品
export const addGoods = (data) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/products',
    'method': 'POST',
    'headers': {
      'X-ML-MasterKey': 'bUxiYS0yNnlXRGQxaXNOQUpVVzFVQQ',
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7',
      'Content-Type': 'application/json'
    },
    'processData': false,
    data
  })
}
