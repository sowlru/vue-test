<template>
  <div class="default">
    <the-navbar />
    <router-view />
  </div>
</template>
<script>
import TheNavbar from '@/layouts/TheNavbar'
export default {
  mounted() {
    console.log('Default')
  },
  components: { TheNavbar }
}
</script>
