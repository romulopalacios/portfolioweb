<script setup>
import { ref, inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Sección 02: ocultar cuando está activa (14.29% - 28.58%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 14.29 && progress < 28.58) return 0
  return 0
})

</script>

<template>
  <section class="section section-about" aria-label="Información sobre mí">
    <div class="container">
      <h2 class="section-title">SOBRE MÍ</h2>
      <div class="about-layout">
        <div class="profile-image-container">
          <div class="profile-image-wrapper">
            <img 
              src="/images/profile.jpg" 
              alt="Rómulo Palacios" 
              class="profile-image"
              loading="eager"
              @error="(e) => e.target.style.display = 'none'"
            />
          </div>
        </div>
        <div class="about-content">
          <p class="about-text">
            Soy Rómulo Palacios, Ingeniero de Tecnologías de la Información. Mi trayectoria se define por tres pilares: Desarrollo (Web/Móvil/IoT), Calidad (QA & Testing) y Estrategia (Análisis de Datos). Me dedico a crear herramientas tecnológicas que optimizan procesos y generan valor real. Siempre listo para el siguiente reto técnico y el aprendizaje continuo en entornos de alta exigencia.
          </p>

          <div class="about-details">
            <div class="quick-facts">
              <div class="fact-item">
                <span class="fact-label">UBICACIÓN</span>
                <span class="fact-value">Montecristi, Manabí, Ecuador</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">EDUCACIÓN</span>
                <span class="fact-value">Ingeniería en TI - ULEAM</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">IDIOMAS</span>
                <span class="fact-value">Español (Nativo), Inglés (Intermedio)</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">INTERESES</span>
                <span class="fact-value">Tecnología, Hardware, Innovación</span>
              </div>
            </div>
            
            <div class="action-buttons">
              <a href="/cv_romulopalacios.pdf" download="CV_Romulo_Palacios.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="Descargar currículum vitae">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                DESCARGAR CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">02</div>
  </section>
</template>

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
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
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

.section-about {
  background: var(--color-background-soft);
}

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.about-layout {
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2.5rem;
  align-items: start;
}

.profile-image-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.profile-image-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all var(--transition-base);
}

.profile-image-wrapper:hover {
  border-color: var(--color-text);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(100%);
  transition: all var(--transition-base);
}

.profile-image-wrapper:hover .profile-image {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.about-content {
  max-width: 100%;
}

.about-text {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text);
  margin-bottom: 2rem;
  font-weight: 400;
  max-width: 100%;
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.quick-facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.fact-item {
  display: grid;
  align-items: center;
  overflow: hidden;
  cursor: default;
  min-height: 1.75rem;
}

.fact-label, .fact-value {
  grid-area: 1 / 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fact-label {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  font-weight: 500;
  opacity: 1;
  transform: translateY(0);
}

.fact-value {
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: 400;
  opacity: 0;
  transform: translateY(100%);
}

.fact-item:hover .fact-label {
  opacity: 0;
  transform: translateY(-100%);
}

.fact-item:hover .fact-value {
  opacity: 1;
  transform: translateY(0);
}

.focus-areas {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.focus-title {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  font-weight: 500;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.focus-tag {
  font-size: 0.75rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  background: var(--color-background);
  transition: all var(--transition-fast);
}

.focus-tag:hover {
  border-color: var(--color-text);
  background: var(--color-text);
  color: var(--color-background);
  transform: translateY(-2px);
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-decoration: none;
  padding: 0.85rem 1.5rem;
  transition: all var(--transition-fast);
}

.btn-icon {
  width: 16px;
  height: 16px;
}

.btn-primary {
  background: var(--color-text);
  color: var(--color-background);
  border: 1px solid var(--color-text);
}

.btn-primary:hover {
  background: transparent;
  color: var(--color-text);
  transform: translateY(-2px);
}

@media (max-width: 1200px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .profile-image-wrapper {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .about-text {
    font-size: 0.9rem;
  }

  .quick-facts {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
