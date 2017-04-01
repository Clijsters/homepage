<template>
  <div id="app" class="app is__center">
    <navigation></navigation>
    <about></about>
  </div>
</template>

<script>
import navigation from 'components/Navigation'
import about from 'components/About'
export default {
  name: 'app',
  components: {
    navigation,
    about
  }
}
</script>
