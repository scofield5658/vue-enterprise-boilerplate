// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import App from './App'

const install = function (Vue, opts = {}) {
  Vue.component(App.name, App)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default App
