<template>
  <section class="about">
    <div class="about__graylayer">
      <div class="about__container">
        <h1 class="about__hello">{{ $t("about.hello") }}</h1>
        <p class="about__info">{{ $t("about.info") }}</p>
        <a class="about__more" href="#" v-scroll-to="{ el: '#skills', offset: -40 }">
          <p>{{ $t("about.more") }}</p>
          <span class="about__arrow"></span>
        </a>
      <div>
    <div>
  </section>
</template>

<script>
export default { }
</script>
