import Vue from 'vue'
import App from './App.vue'
import mock from './mock-data.js'
import router from './router'

Vue.config.productionTip = false

let data = {
  coins: mock,
}

new Vue({
  router,
  data,
  render: h => h(App),
}).$mount('#app')
