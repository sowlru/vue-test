<template>
  <div class="svg">
    <div class="row1">
      <div class="a" style="color: blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 -24 24 24"
        >
          <g
            fill-rule="evenodd"
            fill="red"
            stroke="blue"
            color="black"
            transform="rotate(270)"
          >
            <path d="M0 0h24v24H0z" />
            <path stroke="#858585" d="M4 12.011l5 5L20.011 6" />
          </g>
        </svg>
      </div>
      <hr />
      <svg display="none">
        <symbol id="b" viewBox="0 0 524 524">
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
        </symbol>
        <symbol id="c" viewBox="0 0 32 32">
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
        </symbol>
      </svg>

      <svg class="icon"><use xlink:href="#b"></use></svg>
      <svg class="icon"><use xlink:href="#c"></use></svg>
    </div>
    <div class="row2">
      <!-- <embed
        id="mainView"
        style="width: 300px; height: 300px"
        type="image/svg+xml"
        src="winter.svg"
      /> -->
      <!-- <img src="winter.svg" /> -->
      <embed
        id="mainView"
        style="width: 300px; height: 300px"
        type="image/svg+xml"
        src="illustration_456.svg"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      svgDocument: {}
    }
  },
  mounted() {
    this.fn()
  },
  methods: {
    fn() {
      let embed = document.getElementById('mainView')
      embed.onload = () => {
        this.svgDocument = embed.getSVGDocument()
        console.log('svgDocument', this.svgDocument)
        const nodes = this.svgDocument.childNodes
        console.log('nodes', nodes)
      }
      console.log('embed', embed)
    }
  }
}
</script>
