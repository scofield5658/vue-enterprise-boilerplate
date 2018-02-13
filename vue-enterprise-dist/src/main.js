// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import dependencies from 'vue-enterprise-dependency-finogeeks'
import modules from 'vue-enterprise-store'
import router from 'vue-enterprise-router'
import App from './App'

const Vue = dependencies.vue.default
const Vuex = dependencies.vuex.default
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  modules,
  strict: false
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
