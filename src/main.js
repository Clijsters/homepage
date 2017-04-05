// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import locales from './lang'
import './style/main.scss'

// install plugins
Vue.use(VueI18n)

// set lang
// TODO(cfischer): Save language in local storage
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
