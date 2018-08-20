<template>
  <header class="header">
    <a href="#" class='logo navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#app' }">cfischer</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li>
        <a href="#about" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#about', offset: -40 }">{{ $t("navigation.about") }}</a>
      </li>
      <li>
        <a href="#expertise" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#skills', offset: -140 }">{{ $t("navigation.skills") }}</a>
      </li>
      <li>
        <a href="#projects" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#projects', offset: -140 }">{{ $t("navigation.work") }}</a>
      </li>
      <li>
        <a href="#contact" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#contact', offset: -110 }">{{ $t("navigation.contact") }}</a>
      </li>
      <li>
        <button @click="changeLanguage"
          :class="[{ 'navigation__change-language--en': isEnglish },
          { 'navigation__change-language--de': isGerman }, 'navigation__change-language']">
        </button>
      </li>
    </ul>
  </header>
  <!-- <header class="container--fluid navigation">
    <ul class="row navigation__list">
      <li class="column--6 column-mobile--4 column-tablet--4 navigation__item navigation__item--first">
        <a href="#" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#app' }">cfischer</a>
      </li>
      <li class="column--1 column-mobile--2 column-tablet--2 navigation__item">
        <a href="#" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#about', offset: -40 }">{{ $t("navigation.about") }}</a>
      </li>
      <li class="column--1 column-mobile--2  column-tablet--2 navigation__item">
        <a href="#" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#skills', offset: -140 }">{{ $t("navigation.skills") }}</a>
      </li>
      <li class="column--1 column-mobile--2  column-tablet--2 navigation__item">
        <a href="#" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#projects', offset: -140 }">{{ $t("navigation.work") }}</a>
      </li>
      <li class="column--1 column-mobile--2  column-tablet--2 navigation__item">
        <a href="#" class='navigation__link' :class="{ 'navigation__item--dark': isDark }" v-scroll-to="{ el: '#contact', offset: -110 }">{{ $t("navigation.contact") }}</a>
      </li>
      <li class="column--1 column-mobile--2  column-tablet--2 navigation__item navigation__item--last">
        <button @click="changeLanguage"
          :class="[{ 'navigation__change-language--en': isEnglish },
          { 'navigation__change-language--de': isGerman }, 'navigation__change-language']">
        </button>
      </li>
    </ul>
  </header> -->
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      isDark: false
    }
  },
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
    },
    onScroll() {
      // const rect = document.querySelector('.about').getBoundingClientRect()
      // this.isDark = rect.bottom <= 60
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
