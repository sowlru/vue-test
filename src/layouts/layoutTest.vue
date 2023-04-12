<template>
  <div class="app">
    <component :is="$route.meta.layout"></component>
  </div>
</template>
<script>
import Blank from '@/layouts/BlankLayout'
import Default from '@/layouts/DefaultLayout'
export default {
  name: 'App',
  components: { Blank, Default },
  computed: {
    layout() {
      if (this.$route.meta.layout === 'blank') {
        return 'blank'
      } else {
        return 'default'
      }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
