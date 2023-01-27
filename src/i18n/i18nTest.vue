<template>
  <div class="container">
    <ol>
      <li>npm install vue-i18n vue-flag-icon</li>
    </ol>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('ru')">ru</button>
    </div>
    <p>{{ $t('hi') }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
