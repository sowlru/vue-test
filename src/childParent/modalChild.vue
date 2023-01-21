<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <h1>modalChild</h1>
      <hr />
      <slot></slot>
      <hr />
      <div class="footer">
        <slot name="actions">
          <button @click="this.$emit('ok')">Ok</button>
          &nbsp;
          <button @click="close">Отмена</button>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    ok: null,
    close: null
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}
.popup {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  z-index: 101;
}
.popup h1 {
  text-align: center;
  margin: 0;
}
.footer {
  text-align: right;
}
</style>
