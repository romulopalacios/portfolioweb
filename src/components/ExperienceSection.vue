<script setup>
import { inject, computed } from 'vue'
import { useDragScroll } from '../composables/useDragScroll'
import { experiencesData } from '../data/experiences'

const scrollProgress = inject('scrollProgress')

const { 
  gridRef, 
  isDragging, 
  startDrag, 
  stopDrag, 
  onDrag, 
  handleLinkClick 
} = useDragScroll()

// Sección 05: ocultar cuando está activa (57.16% - 71.45%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 57.16 && progress < 71.45) return 0
  return 0
})

const experiences = experiencesData
</script>

<template>
  <section class="section section-experience" aria-label="Experiencia profesional">
    <div class="container">
      <h2 class="section-title">EXPERIENCIA PROFESIONAL</h2>
      
      <div class="timeline-horizontal">
        <div class="timeline-line"></div>
        
        <div 
          class="timeline-items"
          ref="gridRef"
          :class="{ 'is-dragging': isDragging }"
          @mousedown="startDrag"
          @mouseleave="stopDrag"
          @mouseup="stopDrag"
          @mousemove="onDrag"
        >
          <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>
            
            <div class="timeline-content">
              <div class="exp-header">
                <div class="exp-year">{{ exp.year }}</div>
                <div class="exp-period">{{ exp.period }}</div>
              </div>
              
              <h3 class="exp-position">{{ exp.position }}</h3>
              <div class="exp-company">{{ exp.company }}</div>
              <p class="exp-desc">{{ exp.description }}</p>
              
              <div class="exp-tags">
                <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              
              <div v-if="exp.github" class="exp-links">
                <a :href="exp.github" target="_blank" rel="noopener noreferrer" class="exp-link" @click="handleLinkClick($event)">
                  <svg class="link-icon github-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  VER EVIDENCIA EN GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">05</div>
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
  max-width: 100%;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
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

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  margin-bottom: 2rem;
  font-weight: 500;
}

.timeline-horizontal {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timeline-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-border);
  transform: translateY(-50%);
  z-index: 0;
}

.timeline-items {
  display: flex;
  gap: 4rem;
  position: relative;
  z-index: 1;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
  /* Ocultar barra de desplazamiento */
  ms-overflow-style: none;
  scrollbar-width: none;
  cursor: grab;
}

.timeline-items.is-dragging {
  cursor: grabbing;
  scroll-snap-type: none;
}

.timeline-items.is-dragging .timeline-item {
  user-select: none;
}

.timeline-items::-webkit-scrollbar {
  display: none;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 400px;
  max-width: 400px;
  flex-shrink: 0;
  scroll-snap-align: start;
}

.timeline-marker {
  position: relative;
  margin-bottom: 2rem;
}

.marker-dot {
  width: 16px;
  height: 16px;
  border: 3px solid var(--color-text);
  background: var(--color-background);
  border-radius: 50%;
  transition: all var(--transition-fast);
  position: relative;
  z-index: 2;
}

.timeline-item:hover .marker-dot {
  background: var(--color-text);
  box-shadow: 0 0 0 6px var(--color-background-soft);
  transform: scale(1.2);
}

.timeline-content {
  width: 100%;
  padding: 1.5rem 1.5rem 1.25rem;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  transition: all var(--transition-fast);
}

.timeline-item:hover .timeline-content {
  border-color: var(--color-text);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.exp-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.exp-year {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;
}

.exp-period {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--color-border);
}

.exp-position {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
  color: var(--color-text);
  line-height: 1.3;
  min-height: 2.6em;
}

.exp-company {
  font-size: 0.7rem;
  color: var(--color-text-mute);
  letter-spacing: 0.05em;
  margin-bottom: 0.85rem;
  min-height: 2.4em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.exp-desc {
  color: var(--color-text-soft);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.78rem;
  text-align: left;
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

.tag {
  font-size: 0.6rem;
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--color-border);
  letter-spacing: 0.05em;
  transition: all var(--transition-fast);
}

.tag:hover {
  border-color: var(--color-text);
  background: var(--color-background-soft);
}

.exp-links {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

.exp-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
}

.exp-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 1px;
  background: var(--color-text);
  transition: width 0.3s ease;
}

.exp-link:hover::after {
  width: 100%;
}

.link-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
}

.exp-link:hover .link-icon {
  transform: translateY(-2px);
}

@media (max-width: 1200px) {
  .timeline-items {
    gap: 2rem;
  }
  
  .exp-position {
    font-size: 0.8rem;
  }
  
  .exp-desc {
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .container {
    max-height: 80vh;
    overflow-y: auto;
  }
  
  .timeline-line {
    display: none;
  }
  
  .timeline-items {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .timeline-marker {
    margin-bottom: 1rem;
  }
  
  .marker-dot {
    width: 12px;
    height: 12px;
    border-width: 2px;
  }
  
  .timeline-content {
    padding: 1.25rem;
  }
  
  .exp-year {
    font-size: 1.5rem;
  }
  
  .exp-position {
    font-size: 0.85rem;
    min-height: auto;
  }
  
  .exp-company {
    font-size: 0.7rem;
    min-height: auto;
  }
  
  .exp-desc {
    font-size: 0.8rem;
  }
  
  /* Scrollbar personalizada para móvil */
  .container::-webkit-scrollbar {
    width: 4px;
  }
  
  .container::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .container::-webkit-scrollbar-thumb {
    background: var(--color-border);
  }
}
</style>
