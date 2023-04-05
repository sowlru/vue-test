<template>
  <div class="layout">
    <h2>layoutTest</h2>
    <button @click="isOpen = !isOpen">Toggle</button>
    <component :is="layout"></component>
  </div>
</template>
<script>
import Blank from '@/layouts/BlankLayout.vue'
import Default from '@/layouts/DefaultLayout.vue'
// const defaultLayout = 'default'
export default {
  name: 'App',
  components: { Blank, Default },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    layout() {
      return this.isOpen ? 'Blank' : 'Default'
    }
  }
}
</script>
