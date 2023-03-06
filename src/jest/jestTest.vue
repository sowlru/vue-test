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
// 1. npm install -D jest@27
// 2. npm i @vue/cli-plugin-unit-jest
// 3. xxx.spec.js:
// describe('TEST', () => {
//   test('1 == 1', () => {
//     expect(1).toBe(1)
//   })
// })
// 4. npm run test
</script>
