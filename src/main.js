// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Title from './mixin/Title'

Vue.config.productionTip = false

Vue.mixin(Title)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: v => v(App)
})
