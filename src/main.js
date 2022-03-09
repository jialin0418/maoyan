import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FooterBar from './components/FooterBar'
// 清除默认样式css文件
import './assets/css/reset.css'
import './assets/font/iconfont.css'

Vue.component('FooterBar', FooterBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
