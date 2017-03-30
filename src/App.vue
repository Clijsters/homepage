<template>
  <div id="app" class="app is__center">
    <navigation></navigation>
    <router-view class="app__router-view"></router-view>
  </div>
</template>

<script>
import navigation from 'components/Navigation'
export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>
