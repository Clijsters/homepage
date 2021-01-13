<template>
  <section id="contact" class="container--fluid contact">
    <div class="container--fluid">
      <div>
        <h1>{{ $t("contact.heading") }}</h1>
        <p>{{ $t("contact.info") }}</p>
      </div>
      <ul class="" style="margin-top: 40px">
        <li class="contact__item--dark">
          <a href="mailto:contact@clijsters.de" onClick="gtag('send', 'event', 'click', 'contact','mail');">
            <img class="contact__image" src="../assets/mail.png" alt="Mail-Icon">
            <p class="contact__image__description">{{ $t("contact.mail") }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default { }
</script>
