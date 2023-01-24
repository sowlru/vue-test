<template>
  <div class="cont">
    <p>inputParent : myData : {{ myData }}</p>
    <input-child v-model="myData" />
    <p>App : name : {{ name }}</p>
  </div>
</template>
<script>
/* eslint-disable */
import inputChild from '@/childParent/inputChild'
export default {
  components: {
    inputChild
  },
  data() {
    return {
      myData: 'a'
    }
  },
  props: ['name']
}
</script>
