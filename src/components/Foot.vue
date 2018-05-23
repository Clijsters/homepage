<template>
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__made-with-love">
        <p>{{ $t("footer.withLove") }} <a class="footer__vuejs" href="https://vuejs.org" target="_blank">VueJS</a>.</p>
        <p v-html="$t('footer.copyright')"></p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {}
</script>
