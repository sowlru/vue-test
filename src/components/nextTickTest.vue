<template>
  <div class="nextTick" style="text-align: left">
    <el-row :gutter="20" style="margin-bottom: 10px">
      <el-col :span="12">
        <el-button @click="addItem">+</el-button>
      </el-col>
      <el-col :span="12">
        <div ref="listRef" v-for="(item, idx) in list" :key="idx">
          {{ item }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return { list: ['a', 'b'] }
  },
  methods: {
    addItem() {
      // without nextTick: list = 3, listDom = 2
      // with nextTick: list = 3, listDom = 3
      this.list.push('c')
      console.log('list', this.list)
      debugger
      this.$nextTick(() => {
        const listDom = this.$refs.listRef
        console.log('listDom', listDom)
      })
    }
  }
}
</script>
