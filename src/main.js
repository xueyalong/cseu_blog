// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import login from './pages/login'
import router from './router'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { login },
  template: '<login/>'
})