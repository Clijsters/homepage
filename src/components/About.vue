<template>
  <section id="about" class="about container--fluid">
    <div class="about__container__hello container--fluid">
      <h2 class="about__hello">{{ $t("about.hello") }}</h2>
    </div>
    <div class="about__container container--fluid">
      <p class="about__info1">{{ $t("about.info1") }}</p>

      <ul class="about__social row">
        <li class="column--4 contact__item">
          <a href="https://www.linkedin.com/in/cfischerio" target="_blank">
            <img class="contact__image" src="../assets/linkedin.png" />
            <p class="contact__image__description">{{ $t("contact.linkedin") }}</p>
          </a>
        </li>
        <li class="column--4 contact__item">
          <a href="https://github.com/cfischer" target="_blank">
            <img class="contact__image" src="../assets/github.png" />
            <p class="contact__image__description">{{ $t("contact.github") }}</p>
          </a>
        </li>
        <li class="column--4 contact__item">
          <a href="https://www.xing.com/profile/Christian_Fischer364" target="_blank">
            <img class="contact__image" src="../assets/xing.png" />
            <p class="contact__image__description">{{ $t("contact.xing") }}</p>
          </a>
        </li>
      </ul>
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
