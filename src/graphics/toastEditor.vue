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
    <div id="canvas" class="canvas" width="100%"></div>
  </div>
</template>

<script>
/* eslint-disable */
const TIE = require('tui-image-editor')
const whiteTheme = require('/public/background.jpg')
export default {
  data() {
    return {
      editor: null,
      json: [],
      id: ''
    }
  },
  methods: {
    initEditor() {
      this.editor = new TIE(
        document.querySelector('#canvas', {
          includeUI: {
            loadImage: {
              path: '/public/background.jpg',
              name: 'SampleImage'
            },
            theme: whiteTheme,
            initMenu: 'filter',
            menuBarPosition: 'bottom'
          },
          cssMaxWidth: 2000,
          cssMaxHeight: 1000
        })
      )
    },
    add() {
      this.editor
        .addShape('circle', {
          fill: 'blue',
          stroke: 'red',
          strokeWidth: 3,
          rx: 50,
          ry: 50,
          isRegular: false
        })
        .then((objectProps) => {
          this.id = objectProps.id
          console.log('add : id', this.id)
        })
    },
    remove() {
      this.editor.removeObject(this.id)
    },
    parse() {
      let canvas = this.editor._graphics._canvas
      console.log('parse : canvas', canvas)
      this.json = JSON.stringify(canvas)
      console.log('parse : json', this.json)
    },
    clear() {
      this.editor.clearObjects()
    },
    restore() {
      let canvas = this.editor._graphics._canvas
      console.log('restore : canvas', canvas)
      canvas.loadFromJSON(this.json, canvas.renderAll.bind(canvas))
    }
  },
  mounted() {
    this.initEditor()
  },
  unmounted() {
    this.initEditor.destroy()
  }
}
</script>
<style>
/* 
https://ui.toast.com/tui-image-editor
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
.canvas {
  border: 1px solid #eee;
}
/* 
Перезапустить editor при изменении
  1. C:\elis\editor-> npm run bundle
  2. cp from editor\dist\tui-image-editor.js to admin\public\toast
  3. обновить C:\elis\admin

Добавить новую команду в Toast Editor
  1. add new button: src\js\ui\template\controls.js: <li id="tie-btn-get-json">
  2. src\js\ui.js: 'getJSON': this._menuElement.querySelector('#tie-btn-get-json')
  3. src\js\action.js: getJSON: () => { this.getJSON(); },
  4. src\js\imageEditor.js: getJSON(){ console.log('getJSON') }
  5. src\js\ui.js: initCanvas() { this._addHelpActionEvent('getJSON') }
*/
</style>
