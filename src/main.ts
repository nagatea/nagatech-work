import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
