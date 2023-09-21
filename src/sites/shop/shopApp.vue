<template>
  <header>
    <div class="wrap">
      <div class="row">
        <div class="col col-header"><h2>Site</h2></div>
        <div class="col col-cart">
          <div>In cart: {{ length }}</div>
        </div>
      </div>
    </div>
  </header>
  <hr />
  <section>
    <div class="wrap">
      <div class="row">
        <div class="col col-menu">
          <ul class="list-group">
            <li class="list-group-item" v-for="item in menu" :key="item.route">
              <router-link
                :to="{ name: item.route }"
                exact-active-class="my-active"
              >
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col col-main"><router-view /></div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      menu: [
        { route: 'list', text: 'Products' },
        { route: 'cart', text: 'Cart' },
        { route: 'order', text: 'Checkout' }
      ]
    }
  },
  computed: {
    ...mapGetters('cart', ['length'])
  }
}
</script>
<style>
.col-header {
  border: 1px solid grey;

  width: calc((100% / 12) * 9 - 30px);
}
.col-cart {
  border-left: 1px solid #ddd;
  padding-left: 10px;
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
  padding-bottom: 15px;
}
.list-group-item a {
  text-decoration: none;
  font-size: 20px;
}
.col-main {
  border: 1px solid grey;
  width: calc((100% / 12) * 9 - 30px);
}
.my-active {
  color: red;
}
</style>
