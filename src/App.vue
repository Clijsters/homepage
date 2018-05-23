<template>
  <div id="app" class="app is__center">
    <navigation></navigation>
    <hero></hero>
    <about></about>
    <skills></skills>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
import navigation from 'components/Navigation'
import hero from 'components/Hero'
import about from 'components/About'
import skills from 'components/Skills'
import contact from 'components/Contact'
import foot from 'components/Foot'
export default {
  name: 'app',
  components: {
    navigation,
    hero,
    about,
    skills,
    contact,
    foot
  }
}
</script>
