<template>
  <div class="container">
    <button @click="isPopOpen = true">open</button>
    <modal-child :isOpen="isPopOpen" @ok="handleOk" @close="handleClose">
      Are you sure?
    </modal-child>
  </div>
</template>
<script>
/* eslint-disable */
import modalChild from '@/childParent/modalChild'
export default {
  components: { modalChild },
  data() {
    return {
      isPopOpen: false
    }
  },
  methods: {
    handleOk() {
      console.log('handleOk')
      this.handleClose()
    },
    handleClose() {
      console.log('handleClose')
      this.isPopOpen = false
    }
  }
}
</script>
