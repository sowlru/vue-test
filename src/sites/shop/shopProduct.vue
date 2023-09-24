<template>
  <div v-if="hasProduct">
    <h3>{{ product.title }}</h3>
    <div>{{ product.price }}</div>
  </div>
  <div v-else>Not found</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('product', { productById: 'one' }),
    id() {
      return parseInt(this.$route.params.id)
    },
    product() {
      return this.productById(this.id)
    },
    validId() {
      return /^[1-9]+\d*$/.test(this.id)
    },
    hasProduct() {
      return this.validId && this.product !== undefined
    }
  }
}
</script>
<style></style>
