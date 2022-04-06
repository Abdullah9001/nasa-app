import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
