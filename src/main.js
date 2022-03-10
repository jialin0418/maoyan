import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FooterBar from './components/FooterBar'
import SearchBar from './components/SearchBar'
import TabsBar from './components/TabsBar'
// 清除默认样式css文件
import './assets/css/reset.css'
import './assets/font/iconfont.css'


Vue.component('FooterBar', FooterBar)
Vue.config.productionTip = false
Vue.component('SearchBar', SearchBar)
Vue.component('TabsBar',TabsBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
