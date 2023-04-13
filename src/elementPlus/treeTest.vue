<template>
  <el-tree
    :allow-drop="allowDrop"
    :data="dataSource"
    :props="defaultProps"
    draggable
  >
    <template #default="{ node }">
      <span class="custom-tree-node">
        <span>{{ node.label }}</span>
        <span>
          <a @click="append(data)"> Append </a>
          <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
        </span>
      </span>
    </template>
  </el-tree>
</template>
<script>
export default {
  data() {
    return {
      dataSource: [
        {
          name: '0 - Общие сведения',
          children: [
            { name: '0 - Об этом руководстве' },
            { name: '1 - Меры безопасности' }
          ]
        },
        {
          name: '1 - Шасси',
          children: [
            {
              name: '11 - Подвеска',
              children: [
                { name: '1 - Передняя подвеска' },
                { name: '2 - Задняя подвеска' }
              ]
            },
            { name: '12 - Колеса и ступицы' }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    allowDrop(draggingNode, dropNode, type) {
      console.log('🚀 ~ file: treeTest.vue:82 ~ allowDrop ~ allowDrop:')
      if (dropNode.data.name === 'Level two 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    }
  }
}
</script>
