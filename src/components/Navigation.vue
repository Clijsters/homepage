<!--suppress HtmlUnknownAnchorTarget -->
<template>
  <header class="navigation__header">
    <a v-scroll-to="{ el: '#app' }" href="#" class="logo navigation__link">clijsters</a>
    <input id="menu-btn" class="menu-btn" type="checkbox">
    <label class="menu-icon" for="menu-btn"><span class="navicon" /></label>
    <ul class="menu">
      <li>
        <a v-scroll-to="{ el: '#about', offset: -40 }" href="#about" class="navigation__link">{{ $t("navigation.about") }}</a>
      </li>
      <li>
        <a v-scroll-to="{ el: '#skills', offset: -110 }" href="#expertise" class="navigation__link">{{ $t("navigation.skills") }}</a>
      </li>
      <li>
        <a v-scroll-to="{ el: '#projects', offset: -110 }" href="#projects" class="navigation__link">{{ $t("navigation.work") }}</a>
      </li>
      <li>
        <a v-scroll-to="{ el: '#contact', offset: -110 }" href="#contact" class="navigation__link">{{ $t("navigation.contact") }}</a>
      </li>
      <li @click="changeLanguage">
        <button
          :class="[{ 'navigation__change-language--de': isEnglish },
                   { 'navigation__change-language--en': isGerman }, 'navigation__change-language']"
        />
      </li>
    </ul>
  </header>
</template>

<script>
// TODO properly calculate offset depending on mobile
import Vue from 'vue'
export default {
  computed: {
    isEnglish () {
      return Vue.config.lang === 'en'
    },
    isGerman () {
      return Vue.config.lang === 'de'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    changeLanguage () {
      Vue.config.lang = Vue.config.lang === 'en' ? 'de' : 'en'
    },
    onScroll () {
      const menuBtn = document.getElementById('menu-btn')
      if (menuBtn.checked) {
        menuBtn.checked = false
      }
      // const rect = document.querySelector('.about').getBoundingClientRect()
      // this.isDark = rect.bottom <= 60
    }
  },
  destroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
