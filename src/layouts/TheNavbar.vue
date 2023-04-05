<template>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Auth</li>
    </ul>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/auth">Auth</router-link> -->
  </nav>
</template>
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
