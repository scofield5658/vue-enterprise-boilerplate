// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Comp1 from './Comp1'
import Comp2 from './Comp2'

const install = function (Vue, opts = {}) {
  Vue.component(Comp1.name, Comp1)
  Vue.component(Comp2.name, Comp2)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  Comp1,
  Comp2
}
