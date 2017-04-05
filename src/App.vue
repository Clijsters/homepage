<template>
  <div id="app" class="app is__center">
    <navigation></navigation>
    <about></about>
    <skills></skills>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
import navigation from 'components/Navigation'
import about from 'components/About'
import skills from 'components/Skills'
import contact from 'components/Contact'
import foot from 'components/Foot'
export default {
  name: 'app',
  components: {
    navigation,
    about,
    skills,
    contact,
    foot
  }
}
</script>
