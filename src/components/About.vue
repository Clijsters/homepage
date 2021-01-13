<template>
  <section id="about" class="about container--fluid">
    <div class="about__container__hello container--fluid">
      <h2 class="about__hello">
        {{ $t("about.hello") }}
      </h2>
    </div>
    <div class="about__container container--fluid">
      <p class="about__info1">
        {{ $t("about.info1") }}
      </p>

      <ul class="about__social row">
        <li class="column--3 contact__item">
          <a href="https://www.linkedin.com/in/clijsters" target="_blank" rel="nofollow" onClick="gtag('send', 'event', 'click', 'contact','linkedin');">
            <img class="contact__image" src="../assets/linkedin.png" alt="LinkedIn-Logo">
            <p class="contact__image__description">{{ $t("contact.linkedin") }}</p>
          </a>
        </li>
        <li class="column--3 contact__item">
          <a href="https://github.com/clijsters" target="_blank" rel="nofollow" onClick="gtag('send', 'event', 'click', 'github');">
            <img class="contact__image" src="../assets/github.png" alt="GitHub-Logo">
            <p class="contact__image__description">{{ $t("contact.github") }}</p>
          </a>
        </li>
        <li class="column--3 contact__item">
          <a href="https://www.xing.com/profile/Dominique_Clijsters/cv" target="_blank" rel="nofollow" onClick="gtag('send', 'event', 'click', 'contact','xing');">
            <img class="contact__image" src="../assets/xing.png" alt="Xing-Logo">
            <p class="contact__image__description">{{ $t("contact.xing") }}</p>
          </a>
        </li>
        <li class="column--3 contact__item">
          <a href="https://stackoverflow.com/users/4068240/clijsters" target="_blank" rel="nofollow" onClick="gtag('send', 'event', 'click', 'stackoverflow');">
            <img class="contact__image" src="../assets/stackoverflow.png" alt="StackOverflow-Logo">
            <p class="contact__image__description">{{ $t("contact.stackoverflow") }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.setHeroHeight()
    window.addEventListener('resize', this.setHeroHeight)
  },
  methods: {
    /**
      Fixes incorrect 100vh on mobile clients.
    */
    setHeroHeight () {
      // document.getElementById('hero').style.height = `${window.innerHeight}px`
    }
  },
  destroy () {
    window.removeEventListener('resize', this.setHeroHeight)
  }
}
</script>
