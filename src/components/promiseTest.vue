<template>
  <div>
    <p>xhr: {{ xhr }}</p>
    <p>xhr: {{ xhr }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      xhr: ''
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      const request = new XMLHttpRequest()
      request.open('GET', 'https://jsonplaceholder.typicode.com/users/1')
      request.addEventListener('readystatechange', () => {
        if (request.readyState === request.DONE) {
          this.xhr = request.responseText
        }
      })
      request.send()
    }
  }
}
</script>
