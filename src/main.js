import Vue from 'vue'
import App from './App.vue'
// 其中'./compoments/Loading/index' 的 /index 可以不写，webpack会自动找到并加载 index 。如果是其他的名字就需要写上。
import Loading from './compoments/Loading/index'
// 这时需要 use(Loading)，如果不写 Vue.use()的话，浏览器会报错，大家可以试一下
Vue.use(Loading)

new Vue({
  el: '#app',
  render: h => h(App)
})
