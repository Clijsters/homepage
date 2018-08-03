<template>
  <section id="hero" class="hero">
    <div class="hero__graylayer container--fluid ">
      <div class="hero__container">
        <h1 class="hero__hello">{{ $t("hero.engineer") }}</h1>
        <p class="hero__info1">{{ $t("hero.info1") }}</p>
        <!-- <p class="hero__info2">{{ $t("hero.info2") }}</p> -->
        <a class="hero__more" href="#" v-scroll-to="{ el: '#about', offset: -70 }">
          <p>{{ $t("hero.more") }}</p>
          <span class="hero__arrow"></span>
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
