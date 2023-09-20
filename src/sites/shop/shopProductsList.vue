<template>
  <h3>Products</h3>
  <div class="wrap">
    <div class="row">
      <div class="col col-item" v-for="item in productList" :key="item.id">
        <h3 style="margin-bottom: 100px">{{ item.title }}</h3>
        <p style="margin-bottom: 10px">{{ item.price }}</p>
        <button class="btn-cart">In cart</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // то же самое: ({ productList: 'product/all' })
    ...mapGetters('product', { productList: 'all' })
  }
}
</script>
<style>
.col-item {
  /* min-height: 200px; */
  border: 1px solid grey;
  width: calc((100% / 12) * 4 - 30px);
}
.btn-cart {
  /* width: 60px; */
  /* height: 40px; */
  margin: 10px 0px;
  padding: 0px 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: aquamarine;
  line-height: 30px;
}
</style>
