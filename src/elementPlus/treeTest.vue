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
      },
      dataNested: [
        {
          id: '1',
          treeLevel: '1',
          treeLeft: '1',
          treeRight: '16',
          title: 'Root'
        },
        {
          id: '2',
          treeLevel: '2',
          treeLeft: '2',
          treeRight: '9',
          title: 'A'
        },
        {
          id: '3',
          treeLevel: '3',
          treeLeft: '3',
          treeRight: '6',
          title: 'C'
        },
        {
          id: '4',
          treeLevel: '3',
          treeLeft: '7',
          treeRight: '8',
          title: 'D'
        },
        {
          id: '5',
          treeLevel: '4',
          treeLeft: '4',
          treeRight: '5',
          title: 'E'
        },
        {
          id: '6',
          treeLevel: '3',
          treeLeft: '11',
          treeRight: '12',
          title: 'F'
        },
        {
          id: '7',
          treeLevel: '2',
          treeLeft: '10',
          treeRight: '13',
          title: 'B'
        },
        {
          id: '8',
          treeLevel: '2',
          treeLeft: '14',
          treeRight: '15',
          title: 'G'
        }
      ],
      dataNested2: [
        // {
        //   id: '0',
        //   treeLeft: '0',
        //   treeLevel: '0',
        //   treeRight: '35',
        //   flowChartItem_name: 'Root'
        // },
        {
          id: '1',
          treeLeft: '1',
          treeLevel: '1',
          treeRight: '2',
          flowChartItem_name:
            'Пары хладагента токсичны, при работе проявлять осторожность.'
        },
        {
          id: '2',
          treeLeft: '3',
          treeLevel: '1',
          treeRight: '4',
          flowChartItem_name: 'Не смешивать фреон R404a с другими хладагентами.'
        },
        {
          id: '3',
          treeLeft: '5',
          treeLevel: '1',
          treeRight: '6',
          flowChartItem_name:
            'Перед выполнением операции на передние крылья и решетку радиатора установить защитные чехлы, чтобы не повредить лакокрасочное покрытие кузова.'
        },
        {
          id: '4',
          treeLeft: '7',
          treeLevel: '1',
          treeRight: '34',
          flowChartItem_name: 'Снятие:'
        },
        {
          id: '5',
          treeLeft: '8',
          treeLevel: '2',
          treeRight: '9',
          flowChartItem_name:
            'Аккумуляторная батарея – Отсоединение/Подсоединение.'
        },
        {
          id: '6',
          treeLeft: '10',
          treeLevel: '2',
          treeRight: '11',
          flowChartItem_name:
            'Снять пробку и подключить станцию к штуцеру трубки высокого давления.'
        }
      ]
    }
  },
  mounted() {
    console.log(JSON.stringify(this.getTree(this.dataNested2), null, 2))
  },
  methods: {
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.name === 'treeLevel two 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    makeTree(arr, p) {
      // in: { id: '1', treeLevel: '1', treeLeft: '1', treeRight: '16', title: 'Root', photo: '0' },
      // out: { id: 1, treeLevel: 1, treeLeft: 1, photo: '0', treeRight: 16, title: 'Root', },
      let newArr = arr
        .map((c) => {
          for (var key in c) {
            c[key] = +c[key] || c[key]
          }
          return c
        })
        .sort((a, b) => +a.treeLeft - +b.treeLeft)
      p = p || newArr[0]
      p.children = []
      for (let i = 0; i < newArr.length; i++) {
        const levState =
          newArr[i].treeLevel > p.treeLevel &&
          newArr[i].treeLevel < p.treeLevel + 2

        const leftState = newArr[i].treeLeft > p.treeLeft
        const rightState = newArr[i].treeRight < p.treeRight
        if (levState && leftState && rightState) {
          p.children.push(newArr[i])
        }
      }
      p.children.forEach((c) => {
        c.children = []
        this.makeTree(newArr, c)
      })
      let outArray = []
      outArray.push(p)
      return outArray
    },
    makeTree2(arr) {
      return arr
        .slice()
        .sort((a, b) => a.left - b.left)
        .reduce(
          (tree, n) => {
            let curr = null
            let next = tree

            while (next) {
              curr = next
              next = curr.children.find(
                (c) => c.left < n.left && c.right > n.right
              )
            }

            curr.children.push({ ...n, children: [] })

            return tree
          },
          { children: [] }
        ).children
    },
    getTree(arr) {
      let sum = 0
      let stack = []
      arr.forEach((node) => stack.push(node))
      while (stack.length) {
        console.log('stack', stack)
        let node = stack.pop()
        console.log('node', node)
        sum += node.v
        console.log('sum', sum)
        if (node.a) {
          node.a.forEach((node) => stack.push(node))
          console.log('inside stack', stack)
        }
        console.log('-----')
      }
      return sum
    }
  }
}
</script>
