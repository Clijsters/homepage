<template>
  <div id="app" class="app is__center">
    <navigation></navigation>
    <hero></hero>
    <about></about>
    <skills></skills>
    <projects></projects>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
import navigation from 'components/Navigation'
import hero from 'components/Hero'
import about from 'components/About'
import skills from 'components/Skills'
import projects from 'components/Projects'
import contact from 'components/Contact'
import foot from 'components/Foot'
export default {
  name: 'app',
  components: {
    navigation,
    hero,
    about,
    skills,
    projects,
    contact,
    foot
  }
}
</script>
