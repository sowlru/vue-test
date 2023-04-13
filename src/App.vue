<template>
  <div class="container">
    <!-- CHILD-PARENT -->
    <!-- <input-parent name="alex" /> -->
    <!-- <modal-parent :name="bob" /> -->

    <!-- COMPONENTS -->
    <!-- <algorithm-test /> -->
    <!-- <charts-test v-model="data4chart" /> -->
    <!-- <flexbox-test /> -->
    <!-- <promise-test /> -->
    <!-- <proxy-test /> -->

    <!-- ELEMENT-PLUS -->
    <!-- <dialog-child /> -->
    <!-- <table-test /> -->
    <tree-test />

    <div class="GRAPHICS">
      <!-- <canvas-test /> -->
      <!-- <ckEditorCDN :msg="data4chart[0].name" /> -->
      <!-- <ckEditorCustom msg="from App" /> -->
      <!-- <ckEditorNPM msg="from App" /> -->
      <!-- <fabric-test /> -->
      <!-- <svg-test /> -->
      <!-- <toast-editor /> -->
    </div>

    <!-- <i18n-test /> -->
    <!-- <jest-test /> -->
    <!-- <layout-test /> -->
    <!-- <store-test /> -->
  </div>
</template>

<script>
/* eslint-disable */
// CHILD-PARENT
import inputParent from '@/childParent/inputParent'
import modalParent from '@/childParent/modalParent'
// COMPONENTS
import algorithmTest from '@/components/algorithmTest'
import chartsTest from '@/components/chartsTest.vue'
import flexboxTest from '@/components/flexboxTest.vue'
import promiseTest from '@/components/promiseTest.vue'
import proxyTest from '@/components/proxyTest.vue'
// ELEMENT-PLUS
import dialogChild from '@/elementPlus/dialogChild'
import tableTest from '@/elementPlus/tableTest'
import treeTest from '@/elementPlus/treeTest'
// GRAPHICS
// import canvasTest from '@/graphics/canvasTest.vue'
import ckEditorCDN from '@/graphics/ckEditorCDN.vue'
import ckEditorCustom from '@/graphics/ckEditorCustom.vue'
import ckEditorNPM from '@/graphics/ckEditorNPM.vue'
// import fabricTest from '@/graphics/fabricTest.vue'
// import svgTest from '@/graphics/svgTest.vue'
// import toastEditor from '@/graphics/toastEditor.vue'

import i18nTest from '@/i18n/i18nTest.vue'
import jestTest from '@/jest/jestTest.vue'
import layoutTest from '@/layouts/layoutTest.vue'
import storeTest from '@/store/storeTest.vue'

export default {
  components: {
    inputParent,
    modalParent,

    algorithmTest,
    chartsTest,
    flexboxTest,
    promiseTest,
    proxyTest,

    dialogChild,
    tableTest,
    treeTest,

    // canvasTest,
    ckEditorCDN,
    ckEditorCustom,
    ckEditorNPM,
    // fabricTest,
    // svgTest,
    // toastEditor,

    i18nTest,
    jestTest,
    layoutTest,
    storeTest
  },
  data() {
    return {
      data4chart: [
        {
          name: 'ivan',
          data: [{ 1.02: '2' }, { 2.02: '5' }, { 3.02: '4' }, { 4.02: '3' }]
        },
        {
          name: 'vasya',
          data: [{ 1.02: '2' }, { 2.02: '3' }, { 3.02: '2' }, { 4.02: '4' }]
        }
      ],
      bob: 'big bob'
    }
  },
  mounted() {
    this.$hi()
  }
}
</script>

<style>
.icon {
  width: 300px;
  fill: red;
  stroke: aqua;
}
.icon:hover {
  fill: blue;
}
.container {
  background-color: #eee;
}
</style>
<!-- 
  01 run scripts
  package.json : "vue-cli-service serve" -> 
    node_modules\.bin\vue-cli-service ->
      @vue/cli-service/bin/vue-cli-service.js
-->
<!-- 
  02 prod 
  npm run build
  npm i -g serve 
  serve -s dist
-->

<!-- 
  03a run nginx
  https://nginx.org/download/nginx-1.22.1.zip
  cd C:\progs\nginx -> nginx // запуск
  localhost : welcome to ngnix!
  nginx -s reload
  nginx -s stop (сразу) / quit (плавно)
-->
<!-- 
  03b nginx/conf/nginx.conf
    http : server : location : root : html - где лежит сайт
    добавить новый сайт:
      server {listen 1234; server_name mysite; location {root ../..; index }}
-->
