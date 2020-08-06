// 引入封装好的axios
import axios from 'axios'

export const state = () => ({
  // 用户登陆成功后的数据
  userInfo: {}
})
// store中存放数据不能使用直接赋值的方式，要使用mutations方法，第一个参数一定是state
export const mutations = {
  // 将用户登录成功后的数据存到userInfo中
  setUserInfo (state, data) {
    state.userInfo = data
  }
}
export const actions = {
  // 函数名可自定义，第一个参数必须是store，第二个参数是调用是传入的数据，返回一个promise对象
  // 登陆接口的请求
  login (store, data) {
    return axios({
      'async': true,
      'crossDomain': true,
      method: 'post',
      url: '/1.0/mems/passwordLogin',
      headers: {
        'x-ml-appid': '56b17529169e7d000197d2d7',
        'content-type': 'application/json'
      },
      'processData': false,
      data: {
        phone: data.username,
        password: data.password
      }
    }).then(res => {
      console.log(res)
      /*
          根据页面的结构，如果使用localStorage的方式存储登陆成功的数据，那么无法在渲染的时候让header刷新显示
          可以用兄弟组件之间的传值来实现，但是比较麻烦，所以使用store
        */
      //  使用commit调用mutations方法，存放数据
      res.data.userImg = '//i.jd.com/commons/img/no-img_mid_.jpg'
      store.commit('setUserInfo', res.data)
    })
  }
}
