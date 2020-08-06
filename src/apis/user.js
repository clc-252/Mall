// 引入封装好的axios
import axios from '@/utils/myaxios.js'

// 封装一个获取手机验证码的方法
export const getPhoneCode = (data) => {
  // 返回一个promise对象
  return axios({
    'async': true,
    'crossDomain': true,
    url: '/1.0/mems/sendSms',
    method: 'POST',
    headers: {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-apikey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'content-type': 'application/json'
    },
    'processData': false,
    data: {
      phone: data
    }
  })
}

// 实现注册的方法
export const register = (phone, password, code) => {
  return axios({
    'async': true,
    'crossDomain': true,
    url: '/1.0/mems/',
    method: 'POST',
    headers: {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'content-type': 'application/json'
    },
    'processData': false,
    data: {
      type: 0,
      phone,
      password,
      code,
      installationId: '4BB2DDF6-2A00-11E6-9614-C85B760EFABD'
    }
  })
}

// 实现登录的方法
export const login = (phone, password) => {
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
      phone,
      password
    }
  })
}

// 获取用户信息
export const getUserInfo = (id, token) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}`,
    'method': 'GET',
    'headers': {
      'x-ml-session-token': token,
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'content-type': 'application/json'
    }
  })
}

// 修改用户信息
export const updateUserInfo = (id, token, data) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}`,
    'method': 'PUT',
    'headers': {
      'x-ml-session-token': token,
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'content-type': 'application/json'
    },
    'processData': false,
    data
  })
}

// 用户上传头像
export const uploadUserPic = (filename) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/files/${filename}`,
    'method': 'PUT',
    'headers': {
      'x-ml-apikey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'content-type': 'image/jpeg'
    },
    'data': `@${filename}`
  })
}

// 用户添加收货地址
export const addAddress = (id, token, data) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}/addresses`,
    'method': 'POST',
    'headers': {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-apikey': 'mtFgYiWcwFVWdchfrIOtTjOeTNyKdUK-vxUHMHTxBCM',
      'content-type': 'application/json',
      'x-ml-session-token': token
    },
    'processData': false,
    data
  })
}

// 获取用户收货地址的信息
export const getAddress = (id, token) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}/addresses`,
    'method': 'GET',
    'headers': {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-apikey': 'mtFgYiWcwFVWdchfrIOtTjOeTNyKdUK-vxUHMHTxBCM',
      'x-ml-session-token': token
    }
  })
}

// 删除某个收货地址
export const delAddress = (id, addressId, token) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': `/1.0/mems/${id}/addresses/${addressId}`,
    'method': 'DELETE',
    'headers': {
      'x-ml-appid': '56b17529169e7d000197d2d7',
      'x-ml-apikey': 'mtFgYiWcwFVWdchfrIOtTjOeTNyKdUK-vxUHMHTxBCM',
      'x-ml-session-token': token
    }
  })
}

/* ---------------------- 后台管理用户相关的apis ------------------------ */
// 获取会员列表
// export const getUserList = () => {
//   return axios({
//     'async': true,
//     'crossDomain': true,
//     'url': '/mems/query',
//     'method': 'GET',
//     'headers': {
//       'content-type': 'application/json',
//       'x-ml-masterkey': 'bUxiYS0yNnlXRGQxaXNOQUpVVzFVQQ',
//       'x-ml-appid': '56b17529169e7d000197d2d7',
//       'cache-control': 'no-cache'
//     }
//   })
// }

// 获取店铺信息
export const getShop = () => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/mall/58f5d040a4e75d000cda8b77',
    'method': 'GET',
    'headers': {
      'X-ML-APIKey': 'eDhNSWZfaUNIV0RyYmdTcnlpY3dSdw',
      'X-ML-AppId': '56b17529169e7d000197d2d7'
    }
  })
}
