import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

import es from './locales/es.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false, // Composition API
  locale: 'es', // idioma por defecto
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})

const app = createApp(App)
const pinia = createPinia()

app.use(i18n)
app.use(MotionPlugin)
app.use(pinia)
app.use(router)
app.mount('#app')
