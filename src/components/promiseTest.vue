<template>
  <div>
    <p>xhr1: {{ xhr1 }}</p>
    <p>xhr2: {{ xhr2 }}</p>
    <p>xhr3: {{ xhr3 }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      xhr1: '',
      xhr2: '',
      xhr3: ''
    }
  },
  mounted() {
    this.loadUsers()
    this.loadUsers2(() => console.log('All loaded!'))
    this.loadUsers3()
  },
  methods: {
    loadUsers() {
      const request = new XMLHttpRequest()
      request.open('GET', 'https://jsonplaceholder.typicode.com/users/1')
      request.addEventListener('readystatechange', () => {
        if (request.readyState === request.DONE) {
          const response = JSON.parse(request.responseText)
          this.xhr1 = response
        }
      })
      request.send()
    },
    loadUsers2(cb) {
      const request = new XMLHttpRequest()
      request.open('GET', 'https://jsonplaceholder.typicode.com/users/')
      request.addEventListener('readystatechange', () => {
        if (request.readyState === request.DONE) {
          const response = JSON.parse(request.responseText)
          this.xhr2 = response.map((x) => x.name)
        }
        cb()
      })
      request.send()
    },
    loadUsers3(cb) {
      const request = new XMLHttpRequest()
      request.open('GET', 'https://jsonplaceholder.typicode.com/users/')
      request.addEventListener('readystatechange', () => {
        if (request.readyState === request.DONE) {
          const response = JSON.parse(request.responseText)
          this.xhr3 = response.map((x) => x.name)
        }
        cb()
      })
      request.send()
    }
  }
}

/* promis() {
      let a = 7
      console.log("a", a)
      let b = new Promise(function (a, b) {
        setTimeout(() => {
          a((a = 9))
        }, 2000)
      })
      b.then(console.log)
      console.log("b", b)
    }, 
  */
</script>
