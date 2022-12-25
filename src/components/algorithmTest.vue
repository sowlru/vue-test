<template>
  <h1>Рекурсивный обход дерева: {{ tree }}</h1>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      tree: [
        {
          v: 5,
          a: [{ v: 5 }, { v: 5 }],
        },
      ],
    }
  },
}
</script>
