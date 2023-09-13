<template>
  <h3>
    In cart: <strong>{{ $store.state.cnt }}</strong>
  </h3>
  <h3>
    Total: <strong>{{ $store.state.price * $store.state.cnt }}</strong>
  </h3>
</template>
