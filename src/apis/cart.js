// 引入封装好的axios
import axios from '@/utils/myaxios.js'

// 封装一个将商品加入购物车的方法
export const addToCart = (token, data) => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/shopCart/add/client',
    'method': 'POST',
    'headers': {
      'content-type': 'application/json; charset=utf-8',
      'x-ml-appid': '57e0b30ba160020007d431bc',
      'x-ml-session-token': token
    },
    data
  })
}

// 获取购物车中的商品
export const getGoodsByCart = () => {
  return axios({
    'async': true,
    'crossDomain': true,
    'url': '/1.0/shopCart/client',
    'method': 'GET',
    'headers': {
      'content-type': 'application/json; charset=utf-8',
      'x-ml-appid': '57e253649a19d60001bc3c8d',
      'x-ml-session-token': 'rFmpjRJvn8C7Ys3RGAIhEmbEh8Nap0d3pwgKsW8gxbE'
    }
  })
}
