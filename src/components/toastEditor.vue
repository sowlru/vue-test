<template>
  <div class="container">
    <h1>Toast Editor Test</h1>
    <div class="buttons">
      <div class="btn" @click="add">add</div>
      <div class="btn" @click="remove">remove</div>
      <div class="btn" @click="parse">parse</div>
      <div class="btn" @click="clear">clear</div>
      <div class="btn" @click="restore">restore</div>
    </div>
    <div id="canvas" class="canvas"></div>
  </div>
</template>

<script>
/* eslint-disable */
const TIE = require("tui-image-editor")
const whiteTheme = require("/public/background.jpg")
export default {
  data() {
    return {
      editor: null,
      json: [],
      id: "",
    }
  },
  methods: {
    initEditor() {
      this.editor = new TIE(
        document.querySelector("#canvas", {
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
    },
    add() {
      this.editor
        .addShape("circle", {
          fill: "blue",
          stroke: "red",
          strokeWidth: 3,
          rx: 50,
          ry: 50,
          isRegular: false,
        })
        .then((objectProps) => {
          this.id = objectProps.id
          console.log("add : id", this.id)
        })
    },
    remove() {
      this.editor.removeObject(this.id)
    },
    parse() {
      const o = this.editor._graphics._canvas._objects
      this.json = JSON.stringify(o)
      console.log("parse", this.json)
      this.json1 =
        '{"objects":' + this.json + ',"background":"rgba(100, 0, 100, 0.1)"}'
      console.log("parse", this.json1)
      this.json2 = '{"objects":' + this.json + "}"
      console.log("parse2", this.json2)
    },
    clear() {
      this.editor.clearObjects()
    },
    restore() {
      let c = this.editor._graphics.getCanvas()
      c.backgroundColor = "red"
      // const c = this.editor._graphics._canvas
      c.loadFromJSON(this.json1, c.renderAll.bind(c))
      // c.loadFromJSON(this.json2, c.renderAll.bind(c))
      c.renderAll()
      console.log("restore", c)
    },
  },
  mounted() {
    this.initEditor()
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
  height: 50px;
  background-color: lightskyblue;
  margin: 10px;
  padding: 10px;
  font-size: 18px;
}
.canvas {
  border: 1px solid #eee;
}
</style>
