<template>
  <div v-if="hasProduct">
    <h3>{{ product.title }}</h3>
    <div>{{ product.price }}</div>
  </div>
  <shop-error-404 v-else />
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import shopError404 from '@/sites/shop/shopError404.vue'

export default {
  components: { shopError404 },
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
