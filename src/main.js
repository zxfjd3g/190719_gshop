import Vue from 'vue'
import 'lib-flexible'

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './vuex/store'
import './validate'
import * as API from '@/api'

// 将API对象挂载到Vue的原型对象上
Vue.prototype.$API = API

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)

new Vue({
  // components: {
  //   App
  // },
  // template: '<App/>'
  render: h => h(App),
  router, // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
  store, // 所有组件都能看到: $store
}).$mount('#app')
