<template>
  <header class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item navigation__item--first">
        <a href="#" v-scroll-to="{ el: '#app' }">cfischer</a>
      </li>
      <li class="navigation__item">
        <a href="#" v-scroll-to="{ el: '#app' }">{{ $t("navigation.about") }}</a>
      </li>
      <li class="navigation__item">
        <a href="#" v-scroll-to="{ el: '#skills', offset: -40 }">{{ $t("navigation.skills") }}</a>
      </li>
      <li class="navigation__item">
        <a href="#" v-scroll-to="{ el: '#work', offset: -40 }">{{ $t("navigation.work") }}</a>
      </li>
      <li class="navigation__item">
        <a href="#" v-scroll-to="{ el: '#contact', offset: -40 }">{{ $t("navigation.contact") }}</a>
      </li>
      <li class="navigation__item">
        <button @click="changeLanguage"
          :class="[{'navigation__change-language--en': isEnglish},
                   {'navigation__change-language--de': isGerman}, 'navigation__change-language']">
        </button>
      </li>
    </ul>
  </header>
</template>

<script>
import Vue from 'vue'
export default {
  computed: {
    isEnglish() {
      return Vue.config.lang === 'en'
    },
    isGerman() {
      return Vue.config.lang === 'de'
    }
  },
  methods: {
    changeLanguage() {
      Vue.config.lang = Vue.config.lang === 'en' ? 'de' : 'en'
    }
  }
}
</script>
