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
//注册插件
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect:'/msite'
    }
  ]
})
