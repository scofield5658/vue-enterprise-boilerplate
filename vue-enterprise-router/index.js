import dependencies from 'vue-enterprise-dependency-finogeeks'
import Router from 'vue-router'
import HomePage from 'vue-enterprise-home'
import loginPage from 'vue-enterprise-login'

const Vue = dependencies.vue.default
const Home1 = HomePage.Home1
const Home2 = HomePage.Home2

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: loginPage
  }, {
    path: '/home1',
    name: 'home1',
    component: Home1
  }, {
    path: '/home2',
    name: 'home2',
    component: Home2
  }, {
    path: '*',
    redirect: '/login'
  }]
})
