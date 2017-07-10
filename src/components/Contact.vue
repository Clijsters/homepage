<template>
  <section id="contact" class="contact">
    <h1>{{ $t("contact.heading") }}</h1>
    <p>{{ $t("contact.info") }}</p>
    <ul>
      <li class="contact__item">
        <a href="mailto:contact@cfischer.io">
          <img class="contact__image" src="../assets/mail.png" />
          {{ $t("contact.mail") }}
        </a>
      </li>
      <li class="contact__item">
        <a href="https://www.linkedin.com/in/cfischerio" target="_blank">
          <img class="contact__image" src="../assets/linkedin.png" />
          {{ $t("contact.linkedin") }}
        </a>
      </li>
      <li class="contact__item">
        <a href="https://www.xing.com/profile/Christian_Fischer364" target="_blank">
          <img class="contact__image" src="../assets/xing.png" />
          {{ $t("contact.xing") }}
        </a>
      </li>
      <li class="contact__item">
        <a href="https://github.com/cfischer" target="_blank">
          <img class="contact__image" src="../assets/github.png" />
          {{ $t("contact.github") }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default { }
</script>
