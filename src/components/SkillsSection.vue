<script setup>
import { ref, inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Sección 03: ocultar cuando está activa (28.58% - 42.87%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 28.58 && progress < 42.87) return 0
  return 0
})

const skillCategories = ref([
  {
    name: 'MÓVIL',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
    ]
  },
  {
    name: 'WEB',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
    ]
  },
  {
    name: 'IoT & BACKEND',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'MQTT', icon: 'https://mqtt.org/assets/img/mqtt-logo-transp.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ]
  }
])
</script>

<template>
  <section class="section section-skills" aria-label="Habilidades técnicas">
    <div class="container">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <div class="skills-container">
        <div v-for="category in skillCategories" :key="category.name" class="skills-category">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skills-grid">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-card">
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-icon-container">
                <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">03</div>
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
  max-height: 85vh;
  overflow-y: auto;
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

.section-skills {
  background: var(--color-background);
}

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  margin-bottom: 2rem;
  font-weight: 500;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skills-category {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-title {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-text);
  font-weight: 600;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
  gap: 0.75rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  cursor: default;
  background: var(--color-background);
  min-height: 65px;
}

.skill-card:hover {
  border-color: var(--color-text-mute);
  transform: translateY(-2px);
}

.skill-name {
  font-size: 0.7rem;
  color: var(--color-text);
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.2;
  transition: opacity 0.3s ease;
}

.skill-card:hover .skill-name {
  opacity: 0;
  position: absolute;
}

.skill-icon-container {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: absolute;
  transition: opacity 0.3s ease;
}

.skill-card:hover .skill-icon-container {
  opacity: 1;
  position: relative;
}

.skill-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(0.8);
  opacity: 0.9;
  transition: all 0.3s ease;
}

:root.dark .skill-icon {
  filter: grayscale(0.8) brightness(1.2);
}

.skill-card:hover .skill-icon {
  filter: grayscale(0);
  opacity: 1;
}

:root.dark .skill-card:hover .skill-icon {
  filter: grayscale(0) brightness(1.1);
}

.skill-name {
  font-size: 0.7rem;
  color: var(--color-text);
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.2;
}

@media (max-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.6rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .section-title {
    margin-bottom: 2rem;
  }
  
  .skills-container {
    gap: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));
    gap: 0.5rem;
  }
  
  .skill-card {
    padding: 0.6rem 0.45rem;
  }

  .skill-icon-container {
    width: 22px;
    height: 22px;
  }
  
  .skill-name {
    font-size: 0.6rem;
  }
}
</style>
