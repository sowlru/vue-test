<template>
  <h3>
    Product <strong>{{ price }}</strong>
  </h3>
  <hr />
  <button class="btn" @click="decrease">-1</button>
  <input type="text" class="inp" :value="cnt" @change="onSetCnt" />
  <button class="btn" @click="increase">+1</button>
  <button class="btn" @click="send">send</button>
  <div v-if="orderIsPending">Pending...</div>
  <div v-if="orderIsDone">Done!</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters(['price', 'cnt', 'orderIsPending', 'orderIsDone']),
  methods: {
    ...mapActions(['decrease', 'increase', 'send']),
    onSetCnt(e) {
      this.$store.dispatch('setCnt', parseInt(e.target.value))
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
.inp {
  width: 60px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
}
</style>
