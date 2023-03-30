<template>
  <div class="tableContainer">
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
          <el-table-column :prop="c" label="city_name" width="200" />
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="this.cities.length"
          @current-change="handlePagination"
        />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-select v-model="vm" placeholder="Выберите тип" clearable>
        <el-option
          v-for="item in cityTypes"
          :key="item.cityTypeId"
          :label="item.cityTypeName"
          :value="item.cityTypeName"
        />
      </el-select>
    </el-row>
    <el-row :gutter="20">
      <el-select-v2
        v-model="vm"
        filterable
        :options="options"
        placeholder="Please select"
        style="width: 240px"
        multiple
      />
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      page: 1,
      pageSize: 2,
      cities: [],
      selectedCities: [],

      // filter list
      vm: '',
      cityTypes: [
        { cityTypeId: 1, cityTypeName: 'big' },
        { cityTypeId: 2, cityTypeName: 'small' }
      ],
      options: [
        { value: 1, label: 'a' },
        { value: 2, label: 'b' }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.cities = [
        {
          city_id: 1,
          city_name: 'Акташ',
          city_name_en: 'Aktash',
          cityType: 'big'
        },
        {
          city_id: 2,
          city_name: 'Акутиха',
          city_name_en: 'Akutiha',
          cityType: 'big'
        },
        {
          city_id: 3,
          city_name: 'Алейск',
          city_name_en: 'Aleisk',
          cityType: 'small'
        }
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
    },
    c() {
      return 'city_name_en'
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
