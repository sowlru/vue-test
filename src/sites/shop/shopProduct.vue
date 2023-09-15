<template>
  <h3>
    Product <strong>{{ price }}</strong>
  </h3>
  <hr />
  <button class="btn" @click="$store.dispatch('decrease')">-1</button>
  <button class="btn" @click="$store.dispatch('increase')">+1</button>
  <button class="btn" @click="sendOrder">send</button>
  <div v-if="orderIsPending">Pending...</div>
  <div v-if="orderIsDone">Done!</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['price', 'orderIsPending', 'orderIsDone']),
  methods: {
    sendOrder() {
      this.$store.dispatch('send')
    }
  }
}
</script>
<style>
.btn {
  width: 60px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
