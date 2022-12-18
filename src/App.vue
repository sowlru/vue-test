<template>
  <div class="container">
    <toast-editor />
    <hr />
    <charts-test v-model="data4chart" />
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
import toastEditor from "@/components/toastEditor.vue"

export default {
  components: { chartsTest, toastEditor },
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
