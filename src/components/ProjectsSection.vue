<script setup>
import { ref, inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Sección 04: ocultar cuando está activa (42.87% - 57.16%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 42.87 && progress < 57.16) return 0
  return 0
})

const projects = ref([
  {
    id: 1,
    title: 'IoT App',
    description: 'Aplicación multiplataforma de monitoreo y control de dispositivos IoT para invernaderos y cultivos.',
    technologies: ['Flutter', 'Dart', 'PostgreSQL', 'Sqlite', 'MQTT', 'Python'],
    github: 'https://github.com/romulopalacios/iot_app'
  },
  {
    id: 2,
    title: 'SAIV Dashboard',
    description: 'Sistema Inteligente de Analítica Vial, un dashboard interactivo en tiempo real para monitoreo y análisis de tráfico vehicular.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Firebase'],  
    github: 'https://github.com/romulopalacios/saiv-dashboard.git'
  },
  {
    id: 3,
    title: 'Mobiliario Minimal',
    description: 'Plataforma e-commerce moderna diseñada para exhibir y vender muebles de diseño contemporáneo.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Jest', 'Supabase'],
    github: 'https://github.com/romulopalacios/minimal.git'
  }
])
</script>

<template>
  <section class="section section-projects" aria-label="Proyectos destacados">
    <div class="container">
      <h2 class="section-title">PROYECTOS DESTACADOS</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="project.id" class="project-card">
          <div class="project-number">[{{ String(index + 1).padStart(2, '0') }}]</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <div class="project-links">
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
              <svg class="link-icon github-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              VER EN GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">04</div>
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
  overflow-y: auto;
  padding-top: 4rem;
  padding-bottom: 2rem;
  max-height: 85vh;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  transition: all 0.3s ease;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-text);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-text);
}

.project-card:hover::before {
  transform: scaleX(1);
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
}

.project-desc {
  color: var(--color-text-mute);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
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
}

.project-links {
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
}

.link-icon {
  transition: transform 0.2s ease;
}

.github-icon {
  width: 1rem;
  height: 1rem;
}

.project-link:hover {
  color: var(--color-text-mute);
}

.project-link:hover .link-icon {
  transform: scale(1.1);
}

@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .container {
    max-height: 80vh;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 1.25rem;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .project-desc {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
