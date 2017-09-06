// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './utils/store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import 'simple-line-icons/css/simple-line-icons.css'
import './assets/styles/app.styl'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    store.clearAll()
  }
  let user = store.getUser()
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
