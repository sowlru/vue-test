<template>
  <!-- 
    Promise гарантирует что, когда он выполнится - то выполнится и then 
    then - это регистация обработчика, их может быть больше 1
  -->
  <div>
    <p>xhr1: {{ xhr1 }}</p>
    <p>prm1: {{ prm1 }}</p>
    <p>xhr2: {{ xhr2 }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      xhr1: '',
      prm1: '',
      xhr2: ''
    }
  },
  mounted() {
    this.loadUsersXHR(() => console.log('All loaded!'))
    this.loadUsersPromise()
    this.loadPostsXHR()
  },
  methods: {
    loadUsersXHR(cb) {
      const request = new XMLHttpRequest()
      request.open('GET', 'https://jsonplaceholder.typicode.com/users/')
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== request.DONE) return
        if (request.status !== 200) return cb('Something go bad (')
        const response = JSON.parse(request.responseText)
        this.xhr1 = response.map((x) => x.name)
      })
      cb()
      request.send()
    },
    loadUsersPromise() {
      const p = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('GET', 'https://jsonplaceholder.typicode.com/users/')
        request.addEventListener('readystatechange', () => {
          if (request.readyState !== request.DONE) return
          if (request.status !== 200) return reject('Something go bad (')
          resolve(JSON.parse(request.responseText))
        })
        request.send()
      })
      p.then((response) => {
        this.prm1 = response.map((x) => x.name)
      })
    },
    loadPostsXHR() {
      const request = new XMLHttpRequest()
      request.open('GET', 'https://jsonplaceholder.typicode.com/users/')
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== request.DONE) return
        const [{ id }] = JSON.parse(request.responseText)

        const requestPost = new XMLHttpRequest()
        requestPost.open(
          'GET',
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        )
        requestPost.addEventListener('readystatechange', () => {
          if (requestPost.readyState !== requestPost.DONE) return
          const posts = JSON.parse(requestPost.responseText)
          this.xhr2 = posts.map((x) => x.title)
        })
        requestPost.send()
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
