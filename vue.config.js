module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://openapi.dataoke.com', // 设置调用接口域名和端口号别忘了加http
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/1.0': {
        target: 'https://wonapi.maxleap.cn', // 设置调用接口域名和端口号别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/1.0': '/1.0'
        }
      }
    }
  }
}
