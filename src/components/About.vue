<template>
  <section id="hero" class="about">
    <div class="about__graylayer container--fluid ">
      <div class="about__container">
        <h1 class="about__hello">{{ $t("about.hello") }}</h1>
        <p class="about__info1">{{ $t("about.info1") }}</p>
        <p class="about__info2">{{ $t("about.info2") }}</p>
        <a class="about__more" href="#" v-scroll-to="{ el: '#skills', offset: -40 }">
          <p>{{ $t("about.more") }}</p>
          <span class="about__arrow"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    /**
      Fixes incorrect 100vh on mobile clients.
    */
    setHeroHeight() {
      // document.getElementById('hero').style.height = `${window.innerHeight}px`
    }
  },
  mounted() {
    this.setHeroHeight()
    window.addEventListener('resize', this.setHeroHeight)
  },
  destroy() {
    window.removeEventListener('resize', this.setHeroHeight)
  }
}
</script>
