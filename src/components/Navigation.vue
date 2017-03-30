<template>
  <header class="navigation__container">
    <ul class="navigation__list">
      <li class="navigation__item navigation__item--first">
        <router-link to="#home">cfischer</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="#about">{{ $t("navigation.about") }}</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="#skills">{{ $t("navigation.skills") }}</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="#work">{{ $t("navigation.work") }}</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="#contact">{{ $t("navigation.contact") }}</router-link>
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
