import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import '../public/index.css'
import { Icon,Col,Row,Button,Tabbar,Swipe, SwipeItem, TabbarItem ,Grid, GridItem,Popup,ActionBar,NavBar,Field, CellGroup} from 'vant';
//评论组件
import Comment from '@/components/Comment.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Icon,Col, Row,Button,Tabbar,Swipe, SwipeItem, TabbarItem,Grid, GridItem,Popup,ActionBar, NavBar,Field, CellGroup)
app.component('Comment',Comment)
app.mount('#app')
app.config.globalProperties.$http=axios


