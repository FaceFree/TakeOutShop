/*
* 路由模块
* */
//导入基本包
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入需要跳转的标签
import Msite from '../pages/Msite/Msite'
import  Order from '../pages/Order/Order'
import  Profile from '../pages/Profile/Profile'
import  Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
//注册插件
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect:'/msite'
    }
  ]
})
