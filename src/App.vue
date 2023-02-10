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
    <!-- <svg-test /> -->
    <!-- <toast-editor /> -->

    <!-- ELEMENT-PLUS -->
    <!-- <dialog-child /> -->
    <!-- <table-test /> -->

    <!-- GRAPHICS -->
    <!-- <canvas-test /> -->
    <!-- <fabric-test /> -->

    <i18n-test />
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
import svgTest from '@/components/svgTest.vue'
import toastEditor from '@/components/toastEditor.vue'
// ELEMENT-PLUS
import dialogChild from '@/elementPlus/dialogChild'
import tableTest from '@/elementPlus/tableTest'
// GRAPHICS
import canvasTest from '@/graphics/canvasTest.vue'
import fabricTest from '@/graphics/fabricTest.vue'

import i18nTest from '@/i18n/i18nTest.vue'

export default {
  components: {
    inputParent,
    modalParent,
    algorithmTest,
    chartsTest,
    fabricTest,
    flexboxTest,
    promiseTest,
    proxyTest,
    svgTest,
    toastEditor,
    dialogChild,
    tableTest,

    canvasTest,

    i18nTest
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
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: lightgrey; */
}
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
