<script setup>
import { onMounted, ref, onUnmounted, provide } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from './stores/theme'
import NavBar from './components/NavBar.vue'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const { toggleTheme } = themeStore
const scrollContainer = ref(null)
const scrollProgress = ref(0)

// Proveer scroll progress a todos los componentes hijos
provide('scrollProgress', scrollProgress)

onMounted(() => {
  themeStore.initTheme()
  
  const handleWheel = (e) => {
    if (!scrollContainer.value) return
    
    // Si hay scroll horizontal nativo (touchpad), dejarlo pasar
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      return
    }
    
    // Convertir scroll vertical (rueda mouse) en horizontal
    if (e.deltaY !== 0) {
      e.preventDefault()
      scrollContainer.value.scrollBy({
        left: e.deltaY,
        behavior: 'auto'
      })
    }
  }
  
  const updateScrollProgress = () => {
    if (scrollContainer.value) {
      const maxScroll = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
      scrollProgress.value = maxScroll > 0 ? (scrollContainer.value.scrollLeft / maxScroll) * 100 : 0
    }
  }
  
  const container = scrollContainer.value
  if (container) {
    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', updateScrollProgress, { passive: true })
  }
  
  onUnmounted(() => {
    if (container) {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', updateScrollProgress)
    }
  })
})
</script>

<template>
  <div id="app">
    <NavBar :scroll-progress="scrollProgress" />
    <div class="scroll-container" ref="scrollContainer">
      <main class="horizontal-scroll-wrapper">
        <RouterView />
      </main>
    </div>
    
    <!-- Indicador de progreso -->
    <div class="scroll-progress-bar">
      <div class="scroll-progress-fill" :style="{ width: scrollProgress + '%' }"></div>
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.scroll-container {
  flex: 1;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.horizontal-scroll-wrapper {
  display: flex;
  height: 100vh;
  width: fit-content;
}

.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-border);
  z-index: 1001;
}

.scroll-progress-fill {
  height: 100%;
  background: var(--color-text);
  transition: width 0.1s linear;
}
</style>
