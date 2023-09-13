<template>
  <header>
    <div class="wrap">
      <h2>Content</h2>
      <div class="row">
        <div class="col col-item"><shop-product /></div>
      </div>
    </div>
  </header>
</template>
<script>
import shopProduct from '@/sites/shop/shopProduct.vue'

export default {
  components: { shopProduct }
}
</script>
<style>
.col-item {
  border: 1px solid grey;
  width: calc(100% / 1 - 30px);
}
</style>
