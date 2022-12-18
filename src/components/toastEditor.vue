<template>
  <div class="container">
    <div class="buttons">
      <div class="btn" @click="add">add</div>
      <div class="btn" @click="parse">parse</div>
      <div class="btn" @click="clear">clear</div>
      <div class="btn" @click="restore">restore</div>
    </div>
    <div id="a" class="a"></div>
  </div>
</template>

<script>
/* eslint-disable */
const A = require("tui-image-editor")
const whiteTheme = require("/public/background.jpg")
let ie
export default {
  data() {
    return {
      json: [],
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
</style>
