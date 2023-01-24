<template>
  <el-button text @click="dialogVisible = true">
    click to open the Dialog
  </el-button>

  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>Lorem, ipsum.</span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return { dialogVisible: false }
  }
}
</script>
