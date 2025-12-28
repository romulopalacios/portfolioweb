<template>
  <section class="section section-hero" aria-label="Introducción y presentación">
    <div class="container">
      <div class="hero-badge">Ingeniero en Tecnologías de la Información</div>
      <h1 class="hero-title">
        <div class="title-line">RÓMULO</div>
        <div class="title-line">PALACIOS</div>
      </h1>
      <div class="hero-subtitle">
        <span>DESARROLLO MOVIL / WEB</span>
        <span class="dot">·</span>
        <span>SOLUCIONES TECNOLOGICAS</span>
      </div>
      <div class="hero-cta">
        <button class="btn btn-primary" @click="scrollToProjects" aria-label="Ver proyectos destacados">VER PROYECTOS</button>
        <button class="btn btn-secondary" @click="scrollToContact" aria-label="Ir a formulario de contacto">CONTACTAR</button>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">01</div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Calcular opacidad: ocultar cuando está activo (0-14.29%) para evitar duplicación con navbar
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  // Ocultar completamente cuando esta sección está activa
  if (progress >= 0 && progress < 14.29) return 0
  return 0
})

const scrollToProjects = () => {
  const scrollContainer = document.querySelector('.scroll-container')
  if (scrollContainer) {
    const targetScroll = window.innerWidth * 3
    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }
}

const scrollToContact = () => {
  const scrollContainer = document.querySelector('.scroll-container')
  if (scrollContainer) {
    const targetScroll = window.innerWidth * 5
    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.section {
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 6vw;
  border-right: 1px solid var(--color-border);
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.container {
  max-width: 1400px;
  width: 100%;
}

.section-number {
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.section-hero {
  text-align: center;
}

.hero-badge {
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: var(--color-text-mute);
  margin-bottom: 3rem;
}

.hero-title {
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 600;
  line-height: 1;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
}

.title-line {
  display: block;
}

.hero-subtitle {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.dot {
  opacity: 0.3;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  cursor: pointer;
  user-select: none;
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
}
</style>
