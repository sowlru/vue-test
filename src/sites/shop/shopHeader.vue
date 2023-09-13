<template>
  <header>
    <div class="wrap">
      <h2>Header</h2>
      <div class="row">
        <div class="col col-item"><shop-cart /></div>
      </div>
    </div>
  </header>
</template>
<script>
import shopCart from '@/sites/shop/shopCart.vue'

export default {
  components: { shopCart }
}
</script>
<style>
.col-item {
  border: 1px solid grey;
  width: calc(100% / 1 - 30px);
}
</style>
