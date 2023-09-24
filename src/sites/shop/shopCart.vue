<template>
  <div class="wrap">
    <h2>Cart</h2>
    <div class="row">
      <table class="cart-table">
        <thead>
          <tr>
            <th class="cart-td">Title</th>
            <th class="cart-td">Price</th>
            <th class="cart-td">Cnt</th>
            <th class="cart-td">Total</th>
            <th class="cart-td">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id">
            <td class="cart-td">{{ p.title }}</td>
            <td class="cart-td">{{ p.price }}</td>
            <td class="cart-td">{{ p.cnt }}</td>
            <td class="cart-td">{{ p.price * p.cnt }}</td>
            <td class="cart-td">
              <button class="btn-cart" style="margin-right: 10px">-1</button>
              <button class="btn-cart">+1</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <router-link class="btn-cart b1" :to="{ name: 'order' }">
        Order
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    // ...mapGetters('cart', { products: 'itemsDetailed' })
    ...mapGetters('cart', { products: 'itemsDetailed' })
  }
}
</script>
<style>
.btn-cart {
  /* width: 60px; */
  /* height: 40px; */
  margin: 10px 0px;
  padding: 0px 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ccc;
  line-height: 30px;
  text-decoration: none;
}
.b1 {
  border: 1px solid black;
}
.cart-table {
  border: 1px solid grey;
}
.cart-td {
  padding: 10px;
  border: 1px solid grey;
}
</style>
