<template>
  <h2>Обход дерева со стеком: {{ getTree }}</h2>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      tree: [
        {
          v: 12
        },
        {
          v: 6,
          a: [
            {
              v: 8,
              a: [{ v: 9, a: [{ v: 11 }, { v: 10 }] }]
            },
            { v: 7 }
          ]
        },
        {
          v: 1,
          a: [{ v: 5 }, { v: 4 }, { v: 3 }, { v: 2 }]
        }
      ]
    }
  },
  computed: {
    getTree() {
      let res = 0
      let stack = []
      this.tree.forEach((node) => stack.push(node))
      while (stack.length) {
        console.log('stack', stack)
        let node = stack.pop()
        console.log('node', node)
        res += node.v
        console.log('res', res)
        if (node.a) {
          node.a.forEach((node) => stack.push(node))
          console.log('inside stack', stack)
        }
        console.log('-----')
      }
      return res
    }
  }
}
</script>
