import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import 'vue-3d-model/dist/vue-3d-model.umd.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
