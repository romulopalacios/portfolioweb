<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }" role="navigation" aria-label="Navegación principal">
    <div class="navbar-container">
      <a href="#" class="logo" @click.prevent="scrollToSection(0)">
        <span class="logo-bracket">[</span>
        <span class="logo-text">PORTFOLIO</span>
        <span class="logo-bracket">]</span>
      </a>
      
      <div class="nav-center">
        <span class="nav-index">{{ currentSection.toString().padStart(2, '0') }}</span>
        <span class="nav-separator">/</span>
        <span class="nav-total">07</span>
      </div>

      <button 
        class="theme-toggle" 
        @click="toggleTheme"
        :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      >
        <svg v-if="isDark" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useThemeStore } from '../stores/theme'

const props = defineProps({
  scrollProgress: {
    type: Number,
    default: 0
  }
})

const themeStore = useThemeStore()
const { isDark, toggleTheme } = themeStore

const isScrolled = ref(false)
const currentSection = computed(() => {
  return Math.min(Math.floor(props.scrollProgress / 14.29) + 1, 7)
})

const scrollToSection = (index) => {
  const sections = document.querySelectorAll('.section')
  if (sections[index]) {
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }
}

const handleScroll = () => {
  isScrolled.value = props.scrollProgress > 5
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem 3rem;
  transition: all var(--transition-base);
  background: transparent;
  pointer-events: none;
}

.navbar * {
  pointer-events: auto;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: opacity var(--transition-fast);
}

.logo:hover {
  opacity: 0.6;
}

.logo-bracket {
  color: var(--color-text-mute);
}

.logo-text {
  font-weight: 600;
}

.nav-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-mute);
  font-variant-numeric: tabular-nums;
}

.nav-index {
  color: var(--color-text);
}

.nav-separator {
  opacity: 0.3;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
}

.theme-toggle:hover {
  background: var(--color-background-soft);
  border-color: var(--color-text-mute);
  transform: rotate(180deg);
}

.theme-toggle .icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform var(--transition-fast);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1.5rem 1.5rem;
  }
  
  .nav-center {
    font-size: 0.75rem;
  }
  
  .logo {
    font-size: 0.75rem;
  }

  .theme-toggle {
    width: 2rem;
    height: 2rem;
  }

  .theme-toggle .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
