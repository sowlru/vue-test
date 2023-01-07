<template>
  <h2>p: {{ p }} | proxy: {{ pp.name }}</h2>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      p: {
        name: 'alex',
        age: 20
      }
    }
  },
  computed: {
    pp() {
      return new Proxy(this.p, {
        get(target, prop) {
          console.log('target', target)
          console.log('prop', prop)
          return target[prop]
        }
      })
    }
  }
}
</script>
