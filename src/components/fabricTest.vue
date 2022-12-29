<template>
  <div class="container">
    <div class="buttons">
      <div class="btn" @click="add">add</div>
      <div class="btn" @click="remove">remove</div>
      <div class="btn" @click="parse">parse</div>
      <div class="btn" @click="clear">clear</div>
      <div class="btn" @click="restore">restore</div>
    </div>
    <canvas ref="canvas" width="500" height="500" />
  </div>
</template>

<script>
/* eslint-disable */
import { fabric } from "fabric"
export default {
  data() {
    return {
      canvas: null,
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas(this.$refs.canvas)
  },
  methods: {
    add() {
      const rect = new fabric.Rect({
        fill: "red",
        width: 50,
        height: 50,
      })
      this.canvas.add(rect)
    },
  },
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
