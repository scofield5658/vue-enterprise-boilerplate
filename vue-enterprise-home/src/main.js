// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Home1 from './Home1'
import Home2 from './Home2'

const install = function (Vue, opts = {}) {
  Vue.component(Home1.name, Home1)
  Vue.component(Home2.name, Home2)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  Home1,
  Home2
}
