/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import plugins from '@/plugins'

// i18n
import { createI18n } from 'vue-i18n'
import { languages } from './i18n'
const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages
})
console.log('main.js', i18n)

const app = createApp(App)
app.use(ElementPlus)
app.use(plugins)
app.use(i18n)
app.mount('#app')
