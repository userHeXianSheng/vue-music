const { defineConfig } = require('@vue/cli-service')
module.exports =   defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    externals: {
      'vue':'Vue',
      'vue-router':'VueRouter',
      'axios':'axios',
      'vue-quill-editor':'VueQuillEditor'
    }
  }
})

/*
module.exports = {
  devServe:{
    port:3000,
    proxy:'https://www.escook.cn'
  }
}
*/
