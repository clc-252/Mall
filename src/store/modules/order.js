// 引入封装好的axios
import axios from 'axios'

export const state = () => ({
  // 用户登陆成功后的数据
  orderInfo: {}
})
// store中存放数据不能使用直接赋值的方式，要使用mutations方法，第一个参数一定是state
export const mutations = {
  // 将用户登录成功后的数据存到userInfo中
  setOrderInfo (state, data) {
    state.orderInfo = data
  }
}
export const actions = {
  // 函数名可自定义，第一个参数必须是store，第二个参数是调用是传入的数据，返回一个promise对象
// 提交订单的请求
  submitOrder (store, data) {
    return axios({
      'async': true,
      'crossDomain': true,
      'url': `/1.0/mems/${data.id}/orders`,
      'method': 'POST',
      'headers': {
        'content-type': 'application/json',
        'x-ml-appid': '56b17529169e7d000197d2d7',
        'x-ml-session-token': data.token
      },
      'processData': false,
      data: data.data
    }).then(res => {
      console.log(res)
      store.commit('setOrderInfo', res.data)
    })
  }
}
