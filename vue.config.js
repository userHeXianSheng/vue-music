const { defineConfig } = require('@vue/cli-service')
// const { VantResolver } = require('unplugin-vue-components/resolvers');
// const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // plugins: [
    //   ComponentsPlugin({
    //     resolvers: [VantResolver()],
    //   }),
    // ],
    externals: {
      'vue':'Vue',
      'vue-router':'VueRouter',
      'vuex':'Vuex',
      'axios':'axios',
    }
  },
})
