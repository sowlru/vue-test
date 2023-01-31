<template>
  <div class="container">
    <h1>Fabric Test</h1>
    <div class="buttons">
      <div class="btn" @click="addObject">add</div>
      <div class="btn" @click="upload">upload</div>
      <div class="btn" @click="parse">parse</div>
      <div class="btn" @click="clear">clear</div>
      <div class="btn" @click="restore">restore</div>
    </div>
    <canvas ref="canvas" width="500" height="500" />
  </div>
</template>

<script>
/* eslint-disable */
import { fabric } from 'fabric'
var canvas = null
export default {
  data() {
    return {
      //   canvas: null,
      json: [],
      json1: {
        version: '5.3.0',
        objects: [
          {
            type: 'rect',
            version: '5.3.0',
            originX: 'left',
            originY: 'top',
            left: 176.59,
            top: 236.11,
            width: 50,
            height: 50,
            fill: 'red',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeDashOffset: 0,
            strokeLineJoin: 'miter',
            strokeUniform: false,
            strokeMiterLimit: 4,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            backgroundColor: '',
            fillRule: 'nonzero',
            paintFirst: 'fill',
            globalCompositeOperation: 'source-over',
            skewX: 0,
            skewY: 0,
            rx: 0,
            ry: 0
          }
        ],
        background: 'cyan'
      }
    }
  },
  mounted() {
    canvas = new fabric.Canvas(this.$refs.canvas)
    this.restoreJSON(this.json1)
    canvas.on({
      'mouse:dblclick': this.handleDblclick
    })
    canvas.on({
      'after:render': this.handleAfterRender
    })
  },
  methods: {
    addObject() {
      const rect = new fabric.Rect({
        fill: 'red',
        width: 50,
        height: 50
      })
      canvas.backgroundColor = 'cyan'
      canvas.add(rect)
    },
    upload() {
      fabric.Image.fromURL('symbol_55.jpg', function (image) {
        image.scale(0.75)
        canvas.add(image)
      })
    },
    parse() {
      this.json = JSON.stringify(canvas)
      console.log('parse : canvas', canvas)
      console.log('parse : json', this.json)
    },
    clear() {
      canvas.clear()
    },
    restore() {
      canvas.loadFromJSON(this.json, canvas.renderAll.bind(canvas))
      console.log('restore : canvas', canvas)
    },
    restoreJSON(json) {
      canvas.loadFromJSON(json, canvas.renderAll.bind(canvas))
      console.log('restoreJSON : canvas', canvas)
    },
    handleDblclick(e) {
      console.log('handleDblclick', e.target)
    },
    handleAfterRender(e) {
      console.log('handleAfterRender', e.target)
    }
  }
}
</script>
<style>
/* 
http://fabricjs.com/

1. npm install fabric --save
2. fabricTest.vue:
  import { fabric } from "fabric"

*/
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
canvas {
  border: 1px solid black;
}
</style>
