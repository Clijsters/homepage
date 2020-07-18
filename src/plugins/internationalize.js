import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from '../lang'
// install plugins
Vue.use(VueI18n)

// set lang
// TODO(cfischer): Save language in local storage
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})
