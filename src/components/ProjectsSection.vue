<script setup>
import { ref, inject, computed, onMounted, onUnmounted } from 'vue'
import { useDragScroll } from '../composables/useDragScroll'
import { projectsData } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

const scrollProgress = inject('scrollProgress')

const { 
  gridRef, 
  isDragging, 
  startDrag, 
  stopDrag, 
  onDrag, 
  handleLinkClick,
  scrollGrid
} = useDragScroll()

const currentProjectIndex = ref(0)
let observer = null

onMounted(() => {
  if (!gridRef.value) return
  
  const options = {
    root: gridRef.value,
    threshold: 0.5 // Se activa cuando al menos el 50% de la tarjeta es visible
  }
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentProjectIndex.value = Number(entry.target.dataset.index)
      }
    })
  }, options)

  // Observamos cada tarjeta del proyecto
  const cards = gridRef.value.querySelectorAll('.project-card')
  cards.forEach((card, index) => {
    card.dataset.index = index
    observer.observe(card)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

// Sección 04: ocultar cuando está activa (42.87% - 57.16%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 42.87 && progress < 57.16) return 0
  return 0
})

const projects = ref(projectsData)
</script>

<template>
  <section class="section section-projects" aria-label="Proyectos destacados">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">PROYECTOS DESTACADOS</h2>
        <div class="project-indicator">
          [{{ String(currentProjectIndex + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}]
        </div>
      </div>
      <div
        class="projects-grid"
        ref="gridRef"
        :class="{ 'is-dragging': isDragging }"
        @mousedown="startDrag"
        @mouseleave="stopDrag"
        @mouseup="stopDrag"
        @mousemove="onDrag"
      >
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :draggingState="isDragging"
        />
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">04</div>
  </section>
</template>

<style scoped>
.section {
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
  display: flex;
  flex-direction: column;
  margin-top: 15vh; /* Empuja el contenido hacia abajo para alinearse con otras secciones */
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
  font-weight: 500;
  margin-bottom: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;
  width: 100%;
}

.project-indicator {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  font-weight: 500;
}

.projects-grid {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
  padding-top: 1rem; /* Añadido para evitar que se corte al hacer hover (translateY) */
  /* Ocultar barra de desplazamiento */
  ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  cursor: grab; /* Cursor de arrastre */
}

.projects-grid.is-dragging {
  cursor: grabbing; /* Cursor de estar arrastrando */
  scroll-snap-type: none; /* Desactiva el snap mientras se arrastra para evitar bloqueos */
}

.projects-grid.is-dragging .project-card {
  user-select: none; /* Evita que se seleccione el texto por accidente */
}

.projects-grid::-webkit-scrollbar {
  display: none;
}

.project-card {
  min-width: 400px;
  max-width: 400px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 1px solid var(--color-border);
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--color-background);
  position: relative;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background: var(--color-background-soft);
  transform: translateY(-8px);
  border-color: var(--color-text);
}

.project-number {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
  color: var(--color-text);
}

.project-desc {
  color: var(--color-text-mute);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  font-size: 0.7rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--color-border);
  letter-spacing: 0.05em;
  color: var(--color-text-mute);
}

.project-links {
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
}

.project-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 1px;
  background: var(--color-text);
  transition: width 0.3s ease;
}

.project-link:hover::after {
  width: 100%;
}

.link-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
}

.project-link:hover .link-icon {
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .project-card {
    min-width: 350px;
    max-width: 350px;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .projects-grid {
    gap: 1rem;
  }
  
  .project-card {
    min-width: 85vw;
    max-width: 85vw;
    padding: 1.75rem;
  }
  
  .project-title {
    font-size: 1.25rem;
  }
}
</style>
