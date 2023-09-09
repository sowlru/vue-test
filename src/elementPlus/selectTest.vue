<template>
  <div class="header">SelectTest</div>
  <el-main>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple">
          <el-select v-model="vm" placeholder="Выберите тип" clearable>
            <el-option
              v-for="item in cityTypes"
              :key="item.cityTypeId"
              :label="item.cityTypeName"
              :value="item.cityTypeName"
            />
          </el-select>
        </div>
      </el-col>
      <!-- ==================== -->
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-light">
          <el-select-v2
            v-model="vm"
            filterable
            :options="options"
            placeholder="Please select"
            style="width: 240px"
            multiple
          />
        </div>
      </el-col>
      <!-- ==================== -->
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-light">
          <el-select-v2
            v-model="vm"
            filterable
            :options="options"
            placeholder="Please select"
            style="width: 240px"
            multiple
          />
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
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
  }
}
</script>
<style scoped>
.header {
  background-color: #ddd;

  padding: 10px 0;
  color: teal;
}
</style>
