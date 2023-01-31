<template>
  <div class="container">
    <!-- <ol>
      <li>npm install vue-i18n vue-flag-icon</li>
    </ol> -->
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-sub-menu index="2">
          <template #title>Язык</template>
          <el-menu-item @click="setLocale('ru')" index="2-1">RU</el-menu-item>
          <el-menu-item @click="setLocale('en')" index="2-2">EN</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <el-switch v-model="isRu" active-text="Ru" inactive-text="En" />

      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('ru')">ru</button>
    </div>
    <p>{{ $t('hi') }}</p>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      isRu: true
    }
  },
  watch: {
    isRu(newValue) {
      this.$i18n.locale = newValue ? 'ru' : 'en'
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
