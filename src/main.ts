import Vue from 'vue'
import App from './App.vue'
import router from './router'
import APICardRepository from '@/infra/Infra'

Vue.config.productionTip = false

Vue.prototype.$repos = {
  CardRepository: new APICardRepository()
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
