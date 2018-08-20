import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import ScrollTo from 'vue-scrollto'

Vue.use(Router)
Vue.use(ScrollTo)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    // Scroll to anchor tag
    if (to.hash) {
      if (to.hash === '#home' || to.hash === '#about') {
        return { x: 0, y: 0 }
      }
      // TODO(cfischer): Scrolls to far because of fixed nav bar
      // We use vue-scrollto currently instead of anchor tags
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      // Scroll to saved position
      return savedPosition
    }
    // Do not scroll
    return false
  }
})
