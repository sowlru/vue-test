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
          flowChartItem_id: 100,
          flowChartItemType_id: 5,
          flowChartItem_name: '100 - 5 - Общие сведения',
          treeLevel: 1,
          children: [
            {
              flowChartItem_id: 110,
              flowChartItemType_id: 1,
              flowChartItem_name: '110 - Об этом руководстве',
              parent_id: 100,
              treeLevel: 2
            },
            {
              flowChartItem_id: 120,
              flowChartItemType_id: 1,
              flowChartItem_name: '120 - Меры безопасности',
              parent_id: 100,
              treeLevel: 2
            },
            {
              flowChartItem_id: 130,
              flowChartItemType_id: 1,
              flowChartItem_name: '130 - Общие операции',
              parent_id: 100,
              treeLevel: 2
            }
          ]
        },
        {
          flowChartItem_id: 200,
          flowChartItemType_id: 5,
          flowChartItem_name: '200 - 5 - Шасси',
          treeLevel: 1,
          children: [
            {
              flowChartItem_id: 210,
              flowChartItemType_id: 1,
              flowChartItem_name: '210 - Подвеска',
              parent_id: 200,
              treeLevel: 2,
              children: [
                {
                  flowChartItem_id: 211,
                  flowChartItemType_id: 1,
                  flowChartItem_name: '211 - Передняя подвеска',
                  parent_id: 210,
                  treeLevel: 3
                },
                {
                  flowChartItem_id: 212,
                  flowChartItemType_id: 1,
                  flowChartItem_name: '212 - Задняя подвеска',
                  parent_id: 210,
                  treeLevel: 3
                }
              ]
            },
            {
              flowChartItem_id: 220,
              flowChartItemType_id: 1,
              flowChartItem_name: '220 - Колеса и ступицы',
              parent_id: 200,
              treeLevel: 2
            }
          ]
        },
        {
          flowChartItem_id: 300,
          flowChartItemType_id: 5,
          flowChartItem_name: '300 - 5 - Силовой агрегат',
          treeLevel: 1
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'flowChartItem_name',
        id: 'flowChartItem_id'
      }
    }
  },
  mounted() {},
  methods: {
    allowDrop(draggingNode, dropNode, dropType) {
      const node = draggingNode.data
      const dropNod = dropNode.data
      // Второй уровень вложенности только у Заголовков
      if (dropNod.flowChartItemType_id != 5 && dropType == 'inner') {
        return false
      } else {
        return true
      }
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      const node = draggingNode.data
      const dropNod = dropNode.data
      console.log(
        '🚀 ~ file: treeDropTest.vue:58 ~ handleDrop',
        {
          node
        },
        { dropNod },
        { dropType },
        { ev }
      )
      const params = {}
      // первый параметр для передачи на бэк - узел ставится впереди всех элементов
      params.flowChartItem_id = node.flowChartItem_id
      if (dropNod.treeLevel == 1) {
        if (dropType == 'after') {
          params.flowChartItem_top_id = dropNod ? dropNod.flowChartItem_id : 0
        } else if (dropType == 'before') {
          // найти предыдущий элемент массива 1 уровня
          const ar = this.dataSource.map((v) => v.flowChartItem_id)
          const index = ar.indexOf(node.flowChartItem_id)
          if (index != 0) {
            const prevItem = this.structureFlowchart[index - 1]

            if (prevItem) {
              params.flowChartItem_top_id = prevItem
            }
          }
        }
      }
      // params.flowChartItem_parent_id = dropNod.id
      console.log('🚀 handleDrop ~ params:', params)
    }
  }
}
</script>
