<template>
  <section id="contact" class="container--fluid contact">
    <div class="container--fluid">
      <div>
        <h1>{{ $t("contact.heading") }}</h1>
        <p>{{ $t("contact.info") }}</p>
      </div>
      <ul class="row" style="margin-top: 40px">
        <li class="column--3 contact__item">
          <a href="mailto:contact@cfischer.io">
            <img class="contact__image" src="../assets/mail.png" />
            <p class="contact__image__description">{{ $t("contact.mail") }}</p>
          </a>
        </li>
        <li class="column--3 contact__item">
          <a href="https://www.linkedin.com/in/cfischerio" target="_blank">
            <img class="contact__image" src="../assets/linkedin.png" />
            <p class="contact__image__description">{{ $t("contact.linkedin") }}</p>
          </a>
        </li>
        <li class="column--3 contact__item">
          <a href="https://www.xing.com/profile/Christian_Fischer364" target="_blank">
            <img class="contact__image" src="../assets/xing.png" />
            <p class="contact__image__description">{{ $t("contact.xing") }}</p>
          </a>
        </li>
        <li class="column--3 contact__item">
          <a href="https://github.com/cfischer" target="_blank">
            <img class="contact__image" src="../assets/github.png" />
            <p class="contact__image__description">{{ $t("contact.github") }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default { }
</script>
