<template>
  <!-- <h2>Бинарный поиск:{{ searchVal(7) }}</h2> -->
  <div class="operationSelect">
    <el-row :gutter="20" style="margin-bottom: 10px">
      <el-col :span="5">
        <el-input
          v-model="findNumber"
          placeholder="Введите название"
          @change="searchList"
        />
      </el-col>
      <el-col :span="12" :offset="0">
        Бинарный поиск:{{ searchVal(findNumber) }}
      </el-col>
    </el-row>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      ar: [1, 7, 12, 28, 30, 41, 57, 82, 87, 99],
      findNumber: 0
    }
  },

  methods: {
    searchVal(num) {
      let begin = 0
      let end = this.ar.length - 1
      while (begin <= end) {
        console.log('1 ar', this.ar)
        let mid = Math.floor((begin + end) / 2)
        console.log('2 mid: ', mid)
        if (this.ar[mid] == num) {
          return mid
        } else if (num < this.ar[mid]) {
          end = mid - 1
        } else {
          begin = mid + 1
        }
      }
      return -1
    }
  }
}
</script>
