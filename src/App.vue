<template>
  <div class="container">
    <!-- <algorithm-test /> -->
    <!-- <charts-test v-model="data4chart" /> -->
    <!-- <svg-test /> -->
    <toast-editor />

    <!-- ELEMENT-PLUS -->
    <!-- <table-test /> -->
  </div>
</template>

<script>
/* eslint-disable */
import algorithmTest from "@/components/algorithmTest"
import chartsTest from "@/components/chartsTest.vue"
import svgTest from "@/components/svgTest.vue"
import toastEditor from "@/components/toastEditor.vue"

import tableTest from "@/elementPlus/tableTest"

export default {
  components: { algorithmTest, chartsTest, svgTest, toastEditor, tableTest },
  data() {
    return {
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
  mounted() {
    this.$hi()
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #eee;
}
</style>
