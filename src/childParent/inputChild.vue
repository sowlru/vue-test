<template>
  <div class="cont">
    <hr />
    <p>inputChild : modelValue : {{ modelValue }}</p>
    <input type="text" :value="modelValue" @input="fn" />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: ['modelValue'],
  methods: {
    fn(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
