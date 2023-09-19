<template>
  <h3>Cart</h3>
  <hr />
  <div class="cart-main">
    <div>table</div>
    <router-link class="cart-btn" :to="{ name: 'order' }">Order</router-link>
  </div>
</template>
<script>
export default {}
</script>
<style>
.cart-main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cart-btn {
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
