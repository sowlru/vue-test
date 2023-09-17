<template>
  <header>
    <div class="wrap">
      <div class="row">
        <div class="col col-header"><h2>Site</h2></div>
        <div class="col col-cart"><div>In cart:</div></div>
      </div>
    </div>
  </header>
  <hr />
  <section>
    <div class="wrap">
      <div class="row">
        <div class="col col-menu">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/list">Products</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/cart">Cart</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/checkout">Checkout</router-link>
            </li>
          </ul>
        </div>
        <div class="col col-main"><router-view /></div>
      </div>
    </div>
  </section>
</template>
<script>
// import shopHeader from '@/sites/shop/shopHeader.vue'
// import shopContent from '@/sites/shop/shopContent.vue'

export default {
  // components: { shopContent }
}
</script>
<style>
.col-header {
  border: 1px solid grey;
  width: calc((100% / 12) * 9 - 30px);
}
.col-cart {
  border: 1px solid grey;
  width: calc((100% / 12) * 3 - 30px);
}
.col-menu {
  border-right: 1px solid #ddd;
  width: calc((100% / 12) * 3 - 30px);
}
.list-group {
  text-align: left;
}
.list-group-item {
  transition: background 0.3s, color 0.3s;
  padding-bottom: 5px;
}
.list-group-item a {
  text-decoration: none;
}
.col-main {
  border: 1px solid grey;
  width: calc((100% / 12) * 9 - 30px);
}
</style>
