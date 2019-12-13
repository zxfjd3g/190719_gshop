import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible'

new Vue({
  // components: {
  //   App
  // },
  // template: '<App/>'
  render: h => h(App),
  router, // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
}).$mount('#app')