<template>
  <!-- 
    Promise гарантирует что, когда он выполнится - то выполнится и then 
    then - это регистация обработчика, их может быть больше 1
  -->
  <div>
    <p>xhr: {{ xhr1 }}</p>
    <p>promise: {{ prm1 }}</p>
    <p>fetch: {{ fth1 }}</p>
    <p>async: {{ asn1 }}</p>
    <p>async_err: {{ ase1 }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/users/',
      wrong_url: 'https://jsonplaceholder.typicode.com/uses/',
      xhr1: '',
      prm1: '',
      asn1: '',
      ase1: '',
      fth1: ''
    }
  },
  mounted() {
    this.getXHR()
    this.getPromise()
    this.getFetch()
    this.getAsync()
    this.getAsyncErr()
    this.testPromise1()
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
    },
    // res = Response { status: 200, ...}
    // data = Array(10)
    async getAsync() {
      const res = await fetch(this.url)
      const data = await res.json()
      this.asn1 = data.map((x) => x.name)
    },
    async getAsyncErr() {
      try {
        const res = await fetch(this.wrong_url)
        const data = await res.json()
        this.ase1 = data.map((x) => x.name)
      } catch (err) {
        this.ase1 = err
      }
    },
    // a = Promise fulfilled 1 3 2
    // 1 3 2
    testPromise1() {
      let s = '1 '
      let a = new Promise(function (res, rej) {
        setTimeout(() => {
          res((s += '2 '))
        }, 1000)
      })
      a.then(console.log)
      s += '3 '
    }
  }
}
</script>
