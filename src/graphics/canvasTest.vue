<template>
  <div class="container">
    <canvas ref="c" width="500" height="300"></canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    this.fn()
  },
  methods: {
    fn() {
      let canvas = this.$refs.c
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(100, 50)
      ctx.lineTo(450, 150)
      ctx.stroke()
      console.log('hi', canvas)
    }
  }
}
</script>
