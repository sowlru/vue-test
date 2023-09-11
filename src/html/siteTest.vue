<template>
  <site-test-header />
  <main>main</main>
  <site-test-team />
  <footer>footer</footer>
</template>
<script>
import siteTestHeader from '@/html/siteTestHeader.vue'
import siteTestTeam from '@/html/siteTestTeam.vue'
export default {
  components: { siteTestHeader, siteTestTeam }
}
</script>
<style>
/* main */
main {
  background-color: #ddd;
}
footer {
  background-color: #eee;
}
</style>
