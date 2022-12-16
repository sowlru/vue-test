<template>
  <div class="container">
    <div class="buttons">
      <div class="btn" @click="add">add</div>
      <div class="btn" @click="parse">parse</div>
      <div class="btn" @click="clear">clear</div>
      <div class="btn" @click="restore">restore</div>
    </div>
    <div class="a" id="a"></div>
    <hr />
    <div class="chart-container">
      <charts-test :p="data4chart" height="100%" width="100%" />
    </div>
  </div>

  <!-- <svg display="none"> -->
  <!-- <symbol id="b" viewBox="0 0 524 524">
      <g>
        <path
          d="M262 0c72,0 138,29 185,77 48,47 77,113 77,185 0,72 -29,138 -77,185 -47,48 -113,77 -185,77 -72,0 -138,-29 -185,-77 -48,-47 -77,-113 -77,-185 0,-72 29,-138 77,-185 47,-48 113,-77 185,-77zm177 85c-45,-45 -108,-73 -177,-73 -69,0 -132,28 -177,73 -45,45 -73,108 -73,177 0,69 28,132 73,177 45,45 108,73 177,73 69,0 132,-28 177,-73 45,-45 73,-108 73,-177 0,-69 -28,-132 -73,-177z"
        />
        <path
          d="M208 368c2,3 2,7 0,9 -3,2 -6,2 -9,0l-110 -111c-3,-2 -3,-6 0,-8l110 -111c3,-2 6,-2 9,0 2,2 2,6 0,9l-107 106 107 106z"
        />
        <path
          d="M93 268c-3,0 -6,-3 -6,-6 0,-3 3,-6 6,-6l338 0c3,0 6,3 6,6 0,3 -3,6 -6,6l-338 0z"
        />
      </g>
    </symbol> -->
  <!-- <symbol id="c" viewBox="0 0 32 32">
      <g>
        <polygon
          points="6 1 6 8.5 16 16 6 23.5 6 31 26 16 6 1"
          style="
            fill: none;
            stroke: #000;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          "
        />
      </g>
    </symbol> -->
  <!-- </svg> -->

  <!-- <svg class="icon"><use xlink:href="#b"></use></svg> -->
  <!-- <svg class="icon"><use xlink:href="#c"></use></svg> -->
</template>

<script>
/* eslint-disable */
import chartsTest from "@/components/chartsTest.vue"

const A = require("tui-image-editor")
const whiteTheme = require("/public/background.jpg")
let ie
export default {
  components: { chartsTest },
  data() {
    return {
      json: [],
      // data4chart: [
      //   { ivan: [{ 1.02: "2" }, { 2.02: "10" }, { 3.02: "5" }] },
      //   { vasya: [{ 1.02: "22" }, { 2.02: "1" }, { 3.02: "23" }] },
      // ],
      data4chart: [
        {
          name: "ivan",
          data: [{ 1.02: "2" }, { 2.02: "5" }, { 3.02: "4" }, { 4.02: "3" }],
        },
        {
          name: "vasya",
          data: [{ 1.02: "2" }, { 2.02: "3" }, { 3.02: "2" }, { 4.02: "4" }],
        },
      ],
    }
  },
  methods: {
    add() {
      ie.addShape("circle", {
        fill: "blue",
        stroke: "red",
        strokeWidth: 3,
        rx: 100,
        ry: 100,
        isRegular: false,
      })
    },
    parse() {
      const o = ie._graphics._canvas._objects
      this.json = JSON.stringify(o)
      console.log("parse", this.json)
    },
    clear() {
      ie._graphics._canvas.clear
      ie._graphics._canvas.renderAll()
      return ie
    },
    restore() {
      const c = ie._graphics._canvas
      c.loadFromJSON(this.json, c.renderAll.bind(c))
      // c.renderAll()
      console.log("restore", c)
    },
  },
  mounted() {
    ie = new A(
      document.querySelector("#a", {
        includeUI: {
          loadImage: {
            path: "/public/favicon.ico",
            name: "SampleImage",
          },
          theme: whiteTheme,
          initMenu: "filter",
          menuBarPosition: "bottom",
        },
        cssMaxWidth: 2000,
        cssMaxHeight: 1000,
      })
    )
    // a.addImageObject("logo.png")
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: darkblue;
}
.icon {
  width: 300px;
  fill: red;
  stroke: aqua;
}
.icon:hover {
  fill: blue;
}
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #eee;
}
.buttons {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ddd;
}
.btn {
  width: 100px;
  height: 100px;
  background-color: lightskyblue;
  margin: 10px;
  padding: 10px;
  font-size: 18px;
}
.a {
  width: 500px;
  height: 500px;
  background-color: #ccc;
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
    }, */
</style>
