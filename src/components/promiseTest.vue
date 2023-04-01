<template>
  <!-- 
    Promise гарантирует что, когда он выполнится - то выполнится и then 
    then - это регистация обработчика, их может быть больше 1
  -->
  <div>
    <p>xhr: {{ xhr1 }}</p>
    <p>promise: {{ prm1 }}</p>
    <p>fetch: {{ fth1 }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/users/',
      xhr1: '',
      prm1: '',
      fth1: ''
    }
  },
  mounted() {
    this.getXHR()
    this.getPromise()
    this.getFetch()
  },
  methods: {
    req() {
      const request = new XMLHttpRequest()
      request.open('GET', this.url)
      return request
    },
    getXHR(cb) {
      let x = this.req()
      x.addEventListener('readystatechange', () => {
        if (x.readyState !== x.DONE) return
        if (x.status !== 200) return cb('Something go bad (')
        const res = JSON.parse(x.responseText)
        this.xhr1 = res.map((x) => x.name)
      })
      x.send()
    },
    // a = Promise fulfilled Array(10)
    // b = Promise fulfilled undefined
    getPromise() {
      const a = new Promise((resolve, reject) => {
        let x = this.req()
        x.addEventListener('readystatechange', () => {
          if (x.readyState !== x.DONE) return
          if (x.status !== 200) return reject('Something go bad (')
          const res = JSON.parse(x.responseText)
          resolve(res)
        })
        x.send()
      })
      const b = a.then((res) => {
        this.prm1 = res.map((x) => x.name)
      })
    },
    // a = Promise fulfilled Response
    // b = Promise fulfilled Array(10)
    // c = Promise fulfilled undefined
    getFetch() {
      const a = fetch(this.url)
      const b = a.then((res) => res.json())
      const c = b.then((res) => {
        this.fth1 = res.map((x) => x.name)
      })
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
