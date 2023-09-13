<template>
  <h3>
    Product <strong>{{ $store.state.price }}</strong>
  </h3>
  <hr />
  <button class="btn" @click="$store.commit('decrease')">-1</button>
  <button class="btn" @click="$store.commit('increase')">+1</button>
</template>
<style>
.btn {
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
