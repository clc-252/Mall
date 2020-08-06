// 引入封装好的axios
import axios from '@/utils/myaxios.js'

// 获取用户订单列表
export const getOrderList = (id, token) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}/orders?order=-createdAt`,
    'method': 'GET',
    'headers': {
      'content-type': 'application/json',
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-session-token': token
    }
  })
}
// 删除订单
export const delOrder = (memId, orderId, token) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${memId}/orders/${orderId}`,
    'method': 'DELETE',
    'headers': {
      'content-type': 'application/json',
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-session-token': token
    }
  })
}
// 更新订单状态
export const updateOrderStatus = (data, token) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${data.memId}/orders/${data.orderId}/${data.status}`,
    'method': 'PUT',
    'headers': {
      'content-type': 'application/json',
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-session-token': token
    }
  })
}
// 将订单状态改为2
export const updateOrderStatusTo2 = (orderId) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/orders/${orderId}`,
    'method': 'PUT',
    'headers': {
      'content-type': 'application/json',
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-masterkey': 'bUxiYS0yNnlXRGQxaXNOQUpVVzFVQQ'
    },
    'processData': false,
    'data': {
      status: 2
    }
  })
}

/* --------------------- 商家后台api --------------------- */
// 获取订单列表
export const getUserOrderList = (num, pageSize) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/orders?skip=${num}&limit=${pageSize}&order=-createdAt`,
    'method': 'GET',
    'headers': {
      'content-type': 'application/json',
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-masterkey': 'bUxiYS0yNnlXRGQxaXNOQUpVVzFVQQ'
    }
  })
}

// 删除指定订单
export const delOrderById = (orderId) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/orders/${orderId}`,
    'method': 'DELETE',
    'headers': {
      'content-type': 'application/json',
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-masterkey': 'bUxiYS0yNnlXRGQxaXNOQUpVVzFVQQ'
    }
  })
}
