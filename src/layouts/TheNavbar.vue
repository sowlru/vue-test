<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/auth">Auth</router-link>
  </nav>
</template>
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: blue;
}

nav a.router-link-exact-active {
  color: black;
}
</style>
