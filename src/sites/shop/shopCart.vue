<template>
  <h3>
    In cart: <strong>{{ cnt }}</strong>
  </h3>
  <h3>
    Total: <strong>{{ total }}</strong>
  </h3>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['cnt', 'total'])
}
</script>
