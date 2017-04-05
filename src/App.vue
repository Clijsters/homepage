<template>
  <div id="app" class="app is__center">
    <navigation></navigation>
    <about></about>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
import navigation from 'components/Navigation'
import about from 'components/About'
import contact from 'components/Contact'
import foot from 'components/Foot'
export default {
  name: 'app',
  components: {
    navigation,
    about,
    contact,
    foot
  }
}
</script>
