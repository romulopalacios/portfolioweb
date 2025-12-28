import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  
  // Inicializar tema desde localStorage o preferencia del sistema
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  }
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }
  
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  // Watch para cambios en el tema
  watch(isDark, () => {
    applyTheme()
  })
  
  return {
    isDark,
    toggleTheme,
    initTheme
  }
})
