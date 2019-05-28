import Vue from 'vue'
import login from './pages/login'
import router from './router'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { login },
  template: '<login/>'
})
