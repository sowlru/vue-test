<template>
  <site-test-header />
  <hr />
  <site-test-adv />
  <hr />
  <site-test-team />
  <footer>footer</footer>
</template>
<script>
import siteTestHeader from '@/html/siteTestHeader.vue'
import siteTestTeam from '@/html/siteTestTeam.vue'
import siteTestAdv from '@/html/siteTestAdv.vue'
export default {
  components: { siteTestHeader, siteTestTeam, siteTestAdv }
}
</script>
