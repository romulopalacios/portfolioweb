<template>
  <section class="section section-contact" aria-label="Información de contacto">
    <div class="background-decoration">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>
    
    <div class="container">
      <div class="contact-content">
        <div class="contact-header animate-in" style="animation-delay: 0.1s">
          <h2 class="section-title">¿LISTO PARA COMENZAR?</h2>
          <h3 class="contact-headline">
            <span class="word" style="animation-delay: 0.2s">Construyamos</span>
            <span class="word" style="animation-delay: 0.3s">algo</span>
            <span class="word" style="animation-delay: 0.4s">increíble</span>
            <span class="word" style="animation-delay: 0.5s">juntos</span>
          </h3>
          <p class="contact-tagline">Especializado en desarrollo móvil, web y soluciones IoT. Disponible para proyectos freelance y colaboraciones.</p>
        </div>

        <div class="quick-stats">
          <div class="stat-item animate-in" style="animation-delay: 0.6s">
            <div class="stat-number" data-target="3">3+</div>
            <div class="stat-label">Proyectos Completados</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item animate-in" style="animation-delay: 0.7s">
            <div class="stat-number" data-target="5">5+</div>
            <div class="stat-label">Certificaciones</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item animate-in" style="animation-delay: 0.8s">
            <div class="stat-number" data-target="24">24h</div>
            <div class="stat-label">Tiempo de Respuesta</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">06</div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Sección 06: ocultar cuando está activa (71.45% - 85.74%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 71.45 && progress < 85.74) return 0
  return 0
})
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
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Decoración de fondo */
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.floating-shape {
  position: absolute;
  border: 1px solid var(--color-border);
  opacity: 0.15;
  animation: floatAround 20s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  top: 10%;
  left: 15%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  top: 60%;
  right: 10%;
  animation-delay: -7s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  border-radius: 20%;
  bottom: 15%;
  left: 20%;
  animation-delay: -14s;
  transform: rotate(45deg);
}

@keyframes floatAround {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

/* Animaciones de entrada */
.animate-in {
  opacity: 0;
  animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-content {
  width: 100%;
  text-align: center;
}

.section-number {
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  font-weight: 500;
}

.contact-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  color: var(--color-text-mute);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.contact-headline {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.word {
  display: inline-block;
  opacity: 0;
  animation: wordReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  margin: 0 0.25em;
}

@keyframes wordReveal {
  from {
    opacity: 0;
    transform: translateY(30px) rotateX(-90deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

.contact-tagline {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-soft);
  max-width: 650px;
  margin: 0 auto;
}

.quick-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2.5rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stat-item {
  text-align: center;
  transition: transform var(--transition-fast);
  cursor: default;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.65rem;
  line-height: 1;
  transition: all var(--transition-fast);
  position: relative;
  display: inline-block;
}

.stat-item:hover .stat-number {
  transform: scale(1.1);
  color: var(--color-text);
}

.stat-number::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 2px;
  background: var(--color-text);
  transition: transform var(--transition-fast);
}

.stat-item:hover .stat-number::after {
  transform: translateX(-50%) scaleX(1);
}

.stat-label {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: var(--color-text-mute);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--color-border);
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }

  .contact-headline {
    font-size: 1.75rem;
  }

  .contact-tagline {
    font-size: 0.9rem;
  }

  .quick-stats {
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }
}
</style>
