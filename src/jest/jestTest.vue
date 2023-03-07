<template>
  <div id="jest">
    {{ cnt }}
    <button @click="cnt -= 1">-</button>
    <button @click="cnt += 1">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return { cnt: 0 }
  }
}

// 1. vue add unit-jest
// 2. xxx.spec.js:
// describe('TEST', () => {
//   test('1 == 1', () => {
//     expect(1).toBe(1)
//   })
// })
// 3. npm run test:unit
</script>
