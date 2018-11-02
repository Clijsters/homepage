<template>
  <header class="navigation__header">
    <a href="#" class='logo navigation__link' v-scroll-to="{ el: '#app' }">cfischer</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li>
        <a href="#about" class='navigation__link' v-scroll-to="{ el: '#about', offset: -40 }">{{ $t("navigation.about") }}</a>
      </li>
      <li>
        <a href="#expertise" class='navigation__link' v-scroll-to="{ el: '#skills', offset: -140 }">{{ $t("navigation.skills") }}</a>
      </li>
      <li>
        <a href="#projects" class='navigation__link' v-scroll-to="{ el: '#projects', offset: -140 }">{{ $t("navigation.work") }}</a>
      </li>
      <li>
        <a href="#contact" class='navigation__link' v-scroll-to="{ el: '#contact', offset: -110 }">{{ $t("navigation.contact") }}</a>
      </li>
      <li @click="changeLanguage">
        <button
          :class="[{ 'navigation__change-language--de': isEnglish },
          { 'navigation__change-language--en': isGerman }, 'navigation__change-language']">
        </button>
      </li>
    </ul>
  </header>
</template>

<script>
// TODO properly calculate offset depending on mobile
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
    },
    onScroll() {
      const menuBtn = document.getElementById('menu-btn')
      if (menuBtn.checked) {
        menuBtn.checked = false
      }
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
