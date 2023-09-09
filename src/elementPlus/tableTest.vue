<template>
  <div class="header">tableTest</div>
  <el-main>
    <el-row :gutter="10">
      <el-col :span="12">
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
      <!-- ==================== -->
      <el-col :span="12">
        <el-table
          :data="cities"
          border
          :show-header="false"
          class="test-table"
          :row-class="rowClass"
        >
          <!-- <el-table-column class="test-column" width="180" /> -->
          <el-table-column width="100">
            <template #default="scope">
              <div class="test-col1">
                {{ scope.row.city_id }}
              </div>
            </template>
          </el-table-column>
          <el-table-column>
            <template #default="scope">
              <div class="test-col2">
                {{ scope.row.city_name }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-main>
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
    }, 1000)
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
.test-table {
  color: red;
}
.test-table .el-table__row {
  background-color: blue;
  color: red;
}
.rowClass {
  height: 200px;
  color: blue;
}
.test-column {
  background-color: blue;
  height: 200px;
}
.test-col1 {
  padding: 20px 0;
}
.test-col2 {
  vertical-align: top !important;
  text-align: right;
}
.header {
  background-color: #ddd;
  padding: 10px 0;
  color: teal;
}
</style>
