import Vue from 'vue'
import VueRouter from 'vue-router'

//import Nav from '../Nav.vue'

// import Todo from '../components4/Todo.vue'

// import Shop from '../components/Shop.vue'

// import Home2 from '../components2/Home2.vue'
// import My from '../components2/My.vue'

// import Login from '../components1/Login.vue'
// import Home from '../components1/Home.vue'
// import userlist from '../components1/Userlist.vue'
// import User from '../components1/User.vue'
// import Rights from '../components1/Rights.vue'
// import GoodsAttr from '../components1/GoodsAttr.vue'
// import GoodsList from '../components1/GoodsList.vue'
// import addGoods from '../components1/AddGoods.vue'
// import GoodsOrder from '../components1/GoodsOrder.vue'
// import Setting from '../components1/Setting.vue'

const Nav = () => import('../Nav.vue')

const Todo = () => import('../components4/Todo.vue')

const Shop = () => import('../components/Shop.vue')
const Home2 = () => import('../components2/Home2.vue')
const My = () => import('../components2/My.vue')

const Login = () => import( '../components1/Login.vue')
const Home = () => import('../components1/Home.vue')
const userlist = () => import('../components1/Userlist.vue')
const User = () => import('../components1/User.vue')
const Rights = () => import('../components1/Rights.vue')
const GoodsAttr = () => import('../components1/GoodsAttr.vue')
const GoodsList = () => import('../components1/GoodsList.vue')
const addGoods = () => import('../components1/AddGoods.vue')
const GoodsOrder = () => import('../components1/GoodsOrder.vue')
const Setting = () => import('../components1/Setting.vue')

Vue.use(VueRouter)

const router = new VueRouter(
    {
        routes:[
            {path:'/' , redirect:'/nav'},
            {path:'/home' , redirect:'/home/user'},
            {path:'/nav' , component: Nav},
            {path:'/todolist',component:Todo},
            {path:'/login' , component: Login},
            {path:'/home' , component: Home ,
            children:[{path:'user' , component: userlist},{path:'user/:id',component:User,props:true},
                    {path:'rights',component: Rights},
                    {path:'goods-attr',component: GoodsAttr},
                    {path:'goods-list',component: GoodsList},
                    {path:'goods-add',component: addGoods},
                    {path:'goods-order',component: GoodsOrder},
                    {path:'setting',component: Setting},
                ]},
            {path:'/shop',component:Shop},
            {path:'/top',component:Home2},
            {path:'/my',component:My},
        ],
  
    }
)

// router.beforeEach((to,from,next) =>{
//     if(to.path==='/login') return next()
//     else{
//         const token=localStorage.getItem('token')
//         if(token) return next()
//         else next('/login')
//     }
// })
export default router
