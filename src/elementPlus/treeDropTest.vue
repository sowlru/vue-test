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
          flowChartItemType_id: 5,
          flowChartItem_name: '100 - 5 - Общие сведения',
          treeLevel: 1,
          children: [
            {
              id: 110,
              flowChartItemType_id: 1,
              flowChartItem_name: '110 - Об этом руководстве',
              parent_id: 100,
              treeLevel: 2
            },
            {
              id: 120,
              flowChartItemType_id: 1,
              flowChartItem_name: '120 - Меры безопасности',
              parent_id: 100,
              treeLevel: 2
            }
          ]
        },
        {
          id: 200,
          flowChartItemType_id: 5,
          flowChartItem_name: '200 - 5 - Шасси',
          treeLevel: 1,
          children: [
            {
              id: 210,
              flowChartItemType_id: 1,
              flowChartItem_name: '210 - Подвеска',
              parent_id: 200,
              treeLevel: 2,
              children: [
                {
                  id: 211,
                  flowChartItemType_id: 1,
                  flowChartItem_name: '211 - Передняя подвеска',
                  parent_id: 210,
                  treeLevel: 3
                },
                {
                  id: 212,
                  flowChartItemType_id: 1,
                  flowChartItem_name: '212 - Задняя подвеска',
                  parent_id: 210,
                  treeLevel: 3
                }
              ]
            },
            {
              id: 220,
              flowChartItemType_id: 1,
              flowChartItem_name: '220 - Колеса и ступицы',
              parent_id: 200,
              treeLevel: 2
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'flowChartItem_name',
        id: 'id'
      }
    }
  },
  mounted() {},
  methods: {
    allowDrop(draggingNode, dropNode, type) {
      const drag_id = draggingNode.data.flowChartItemType_id
      const drop_id = dropNode.data.flowChartItemType_id

      if (drag_id == '5' && drag_id === drop_id) {
        return false
      } else {
        return true
      }
    },
    handleDrop(draggingNode, dropNode, type, ev) {
      const drag = draggingNode.data
      const drop = dropNode.data
      console.log(
        '🚀 ~ file: treeDropTest.vue:58 ~ handleDrop',
        {
          drag
        },
        { drop },
        { type },
        { ev }
      )
      const params = {}
      params.flowChartItem_id = drag.id
      params.flowChartItem_parent_id = drop.id
      console.log('🚀 handleDrop ~ params:', params)
    }
  }
}
</script>
