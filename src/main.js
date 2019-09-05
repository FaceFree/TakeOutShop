
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
new Vue({
  el:'#app',
  //components: { App },  //vue1.0的写法
   render: h => h(App),    //vue2.0的写法
  template:'<App/>',
  router,//使用vue-router
  store,//使用vuex
})

