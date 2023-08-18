<template>
  <el-tree
    :allow-drop="allowDrop"
    :data="dataSource"
    :props="defaultProps"
    draggable
    node-key="id"
    @node-drop="handleDrop"
  >
    <template #default="{ node }">
      <span class="custom-tree-node">
        <span>{{ node.label }}</span>
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
          id: 100,
          name: '100 - Общие сведения',
          children: [
            { id: 110, name: '110 - Об этом руководстве' },
            { id: 120, name: '120 - Меры безопасности' }
          ]
        },
        {
          id: 200,
          name: '200 - Шасси',
          children: [
            {
              id: 210,
              name: '210 - Подвеска',
              children: [
                { id: 211, name: '211 - Передняя подвеска' },
                { id: 212, name: '212 - Задняя подвеска' }
              ]
            },
            { id: 220, name: '220 - Колеса и ступицы' }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name',
        id: 'id'
      }
    }
  },
  mounted() {},
  methods: {
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.name === 'treeLevel two 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    handleDrop(draggingNode, dropNode, type, ev) {
      const child = draggingNode.data
      const parent = dropNode.data
      console.log(
        '🚀 ~ file: treeDropTest.vue:58 ~ handleDrop',
        {
          child
        },
        { parent },
        { type },
        { ev }
      )
      const params = {}
      params.flowChartItem_id = child.id
      console.log(
        '🚀 ~ file: treeDropTest.vue:73 ~ handleDrop ~ params:',
        params
      )
    }
  }
}
</script>
