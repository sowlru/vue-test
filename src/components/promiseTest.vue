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
    <p>axios: {{ axs1 }}</p>
    <p>axios_err: {{ axe1 }}</p>
  </div>
</template>
<script>
import axios from 'axios'
/* eslint-disable */
export default {
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/users/',
      wrong_url: 'https://jsonplaceholder.typicode.com/uses/',
      xhr1: '',
      prm1: '',
      fth1: '',
      asn1: '',
      axs1: '',
      axe1: '',
      ase1: ''
    }
  },
  mounted() {
    this.getXHR()
    this.getPromise()
    this.getFetch()
    this.getAsync()
    this.getAsyncErr()
    this.getAxios()
    this.getAxiosErr()
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
    // res = Response {type: 'cors', url:...
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
    // npm install axios
    // res = {data: Array(10), status: 200,...
    async getAxios() {
      axios.defaults.baseURL = this.url
      const res = await axios()
      this.axs1 = res.data.map((x) => x.name)
    },
    async getAxiosErr() {
      axios.interceptors.response.use(undefined, (err) => {
        if (err.response.status === 404) {
          this.axe1 = 'eror 404'
        } else {
          this.axe1 = 'error not 404'
        }
      })
      const res = await axios(this.wrong_url)
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
