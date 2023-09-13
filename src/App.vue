<template>
  <div class="container">
    <div class="ALGORITHM">
      <!-- <search-binary /> -->
      <!-- <tree-stack /> -->
    </div>

    <!-- CHILD-PARENT -->
    <!-- <input-parent name="alex" /> -->
    <!-- <modal-parent :name="bob" /> -->

    <div class="COMPONENTS">
      <!-- <next-tick-test /> -->
      <!-- <nextTick-test /> -->
      <!-- <proxy-test /> -->
    </div>

    <div class="ELEMENT-PLUS">
      <!-- <dialog-child /> -->
      <!-- <select-test /> -->
      <!-- <table-test /> -->
      <!-- <tree-drop-test /> -->
      <!-- <tree-test /> -->
    </div>

    <div class="GRAPHICS">
      <!-- <canvas-test /> -->
      <!-- <charts-test v-model="data4chart" /> -->
      <!-- <ckEditorCDN :msg="data4chart[0].name" /> -->
      <!-- <ckEditorCustom msg="from App" /> -->
      <!-- <ckEditorNPM msg="from App" /> -->
      <!-- <fabric-test /> -->
      <!-- <svg-test /> -->
      <!-- <toast-editor /> -->
    </div>

    <div class="HTML">
      <!-- <flexbox-test /> -->
      <!-- <message-test /> -->
      <!-- <site-test /> -->
    </div>

    <!-- <i18n-test /> -->
    <!-- <jest-test /> -->
    <!-- <layout-test /> -->
    <shop-app />
    <!-- <store-test /> -->
  </div>
</template>

<script>
/* eslint-disable */
// ALGORITHMS
import searchBinary from '@/algorithms/searchBinary'
import treeStack from '@/algorithms/treeStack'
// CHILD-PARENT
import inputParent from '@/childParent/inputParent'
import modalParent from '@/childParent/modalParent'
// COMPONENTS
import nextTickTest from '@/components/nextTickTest'
import promiseTest from '@/components/promiseTest.vue'
import proxyTest from '@/components/proxyTest.vue'
// ELEMENT-PLUS
import dialogChild from '@/elementPlus/dialogChild'
import selectTest from '@/elementPlus/selectTest'
import tableTest from '@/elementPlus/tableTest'
import treeDropTest from '@/elementPlus/treeDropTest'
import treeTest from '@/elementPlus/treeTest'
// GRAPHICS
import canvasTest from '@/graphics/canvasTest.vue'
import chartsTest from '@/graphics/chartsTest.vue'
import ckEditorCDN from '@/graphics/ckEditorCDN.vue'
import ckEditorCustom from '@/graphics/ckEditorCustom.vue'
import ckEditorNPM from '@/graphics/ckEditorNPM.vue'
import fabricTest from '@/graphics/fabricTest.vue'
import svgTest from '@/graphics/svgTest.vue'
import toastEditor from '@/graphics/toastEditor.vue'
// HTML
import flexboxTest from '@/html/flexboxTest.vue'
import messageTest from '@/html/messageTest.vue'
import siteTest from '@/html/siteTest.vue'

import i18nTest from '@/i18n/i18nTest.vue'
import jestTest from '@/jest/jestTest.vue'
import layoutTest from '@/layouts/layoutTest.vue'
import shopApp from '@/sites/shop/shopApp.vue'
import storeTest from '@/store/storeTest.vue'
import TreeStack from './algorithms/treeStack.vue'

export default {
  components: {
    searchBinary,
    treeStack,

    inputParent,
    modalParent,

    nextTickTest,
    promiseTest,
    proxyTest,

    dialogChild,
    selectTest,
    tableTest,
    treeDropTest,
    treeTest,

    canvasTest,
    chartsTest,
    ckEditorCDN,
    ckEditorCustom,
    ckEditorNPM,
    fabricTest,
    svgTest,
    toastEditor,

    flexboxTest,
    messageTest,
    siteTest,

    i18nTest,
    jestTest,
    layoutTest,
    shopApp,
    storeTest,
    TreeStack
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
* {
  margin: 0;
}
.container {
  background-color: #eee;
}
.icon {
  width: 300px;
  fill: red;
  stroke: aqua;
}
.icon:hover {
  fill: blue;
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
