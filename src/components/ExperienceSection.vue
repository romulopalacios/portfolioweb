<script setup>
import { ref, inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Sección 05: ocultar cuando está activa (57.16% - 71.45%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 57.16 && progress < 71.45) return 0
  return 0
})

const experiences = ref([
  {
    year: '2024',
    period: 'JUL - DIC',
    position: 'PRACTICANTE PROFESIONAL TI',
    company: 'DIRECCIÓN DE INFORMÁTICA E INNOVACIÓN TECNOLÓGICA ULEAM',
    description: 'Gestión de activos de información en la DIIT: digitalización documental y aplicación de protocolos de seguridad para garantizar la confidencialidad de datos sensibles..',
    tags: ['Data Protection Manager', 'Ciberseguridad', 'Politicas de Seguridad de las TI', 'Gestión documental', 'Seguridad de la información']
  },
  {
    year: '2025',
    period: 'ENE - JUN',
    position: 'DESARROLLADOR MÓVIL',
    company: 'ULEAM',
    description: 'Desarrollo de arquitectura IoT integral (Python, MQTT, PostgreSQL) con visualización de datos en tiempo real mediante aplicación móvil multiplataforma en Flutter.',
    tags: ['MQTT', 'Flutter', 'Dart', 'Python', 'PostgreSQL', 'IoT']
  },
  {
    year: '2025',
    period: 'ENE - DIC',
    position: 'DESARROLLADOR SOLUCIONES TECNOLÓGICAS IOT',
    company: 'ULEAM',
    description: 'Modernización integral y automatización del Auditorio \'Leo Cedeño Sánchez\', implementando sistemas de control inteligente para optimizar la gestión de infraestructura y recursos audiovisuales.',
    tags: ['Domotica', 'MQTT', 'Sistemas Distribuidos', 'Automatización']
  }
])
</script>

<template>
  <section class="section section-experience" aria-label="Experiencia profesional">
    <div class="container">
      <h2 class="section-title">EXPERIENCIA PROFESIONAL</h2>
      
      <div class="timeline-horizontal">
        <!-- Línea horizontal principal -->
        <div class="timeline-line"></div>
        
        <!-- Items del timeline -->
        <div class="timeline-items">
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
