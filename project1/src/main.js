import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

import './assets/bootstrap.css'
import './assets/index.css'

// import Vant from 'vant';
// import 'vant/lib/index.css';
//Vue.use(Vant);

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI);

// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
//Vue.use(VueQuillEditor)  //富文本编辑器

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
