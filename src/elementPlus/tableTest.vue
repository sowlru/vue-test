<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-table
        :data="pagedCities"
        style="width: 100%"
        row-key="city_id"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="35"
          :reserve-selection="true"
        />
        <el-table-column prop="city_id" label="city_id" width="180" />
        <el-table-column prop="city_name" label="city_name" width="200" />
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="this.cities.length"
        @current-change="handlePagination"
      />
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      page: 1,
      pageSize: 2,
      cities: [], // get from server
      selectedCities: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.cities = [
        { city_id: 1, city_name: 'Акташ' },
        { city_id: 2, city_name: 'Акутиха' },
        { city_id: 3, city_name: 'Алейск' }
      ]
    }, 5000)
  },
  methods: {
    handleSelectionChange(val) {
      this.selectedCities = val
      console.log('handleSelectionChange : selectedCities', this.selectedCities)
    },
    handlePagination(p) {
      console.log('handlePagination : page', p)
      this.page = p
    }
  },
  computed: {
    pagedCities() {
      return this.cities.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      )
    }
  }
}
</script>
<style>
/* 
https://element-plus.org/en-US/guide/installation.html

1. npm i element-plus --save
2. main.js:
  import ElementPlus from "element-plus";
  import "element-plus/dist/index.css";
  app.use(ElementPlus);

*/
</style>
